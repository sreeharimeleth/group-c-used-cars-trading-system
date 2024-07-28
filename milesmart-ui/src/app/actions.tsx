'use server'

import { BackendResponse } from "@/components/atrributes"
import { cookies } from "next/headers"
import { redirect } from "next/navigation"
 
export async function login(callback: string) {
    const cookieStore = cookies()
    cookieStore.set('callback', callback)

    // console.log('Fetching Client Code...')

    const client_code_resp = await fetch(new URL('client_code', process.env.BACKEND_ALIAS_URL), {
        headers: { 
            'Authorization': `Basic ${ btoa(`${process.env.CLIENT_ID}:${process.env.CLIENT_SECRET}`) }`,
            'Content-Type': 'application/json' 
        },
        method: "POST",
        body: JSON.stringify({
            "client_type": "web",
            "redirect_uri": new URL('callbacks/login', process.env.SERVER_URL).toString()
        })
    })

    if (!client_code_resp.ok) throw new Error(await client_code_resp.text());
    const client_code = (await client_code_resp.json())['client_code']
    cookieStore.set('client_code', client_code)

    // console.log(`Client code: ${client_code}\nredirecting...`)

    redirect(new URL(`login?client_code=${client_code}`, process.env.BACKEND_URL).toString())
}

export async function logout() {
    'use server'
    const cookieStore = cookies()
    const token_id = cookieStore.get('token_id')?.value
    if (token_id == undefined) return;
    
    await backendFetch(`user/tokens/${token_id}`, { method: 'DELETE' })
    cookieStore.delete('token_id')
    cookieStore.delete('token')
}

export async function deleteAccount() {
    'use server'
    const cookieStore = cookies()
    const token_id = cookieStore.get('token_id')?.value
    if (token_id == undefined) return;
    
    await backendFetch(`user`, { method: 'DELETE' })
    cookieStore.delete('token_id')
    cookieStore.delete('token')
}

export async function backendFetch(input: string | URL, init: RequestInit = {}) {
    const cookieStore = cookies();
    init.headers = init.headers as Record<string, string> ?? {}
    init.headers['Client'] = process.env.CLIENT_ID ?? '';
    init.headers['Password'] = process.env.CLIENT_SECRET ?? '';
    if ((cookieStore.get('token')?.value?.length ?? 0) > 0) init.headers['Authorization'] = `Bearer ${cookieStore.get('token')?.value}`
    const url = new URL(input, process.env.BACKEND_ALIAS_URL)

    // console.log(process.env.BACKEND_ALIAS_URL)
    const resp: Response = await fetch(url, init);
    const data = resp.ok? await resp.json(): await resp.text()
    // console.log(data)

    return {
        data: resp.ok? data: undefined,
        status: resp.status,
        ok: resp.ok,
        headers: resp.headers
    } as BackendResponse
}