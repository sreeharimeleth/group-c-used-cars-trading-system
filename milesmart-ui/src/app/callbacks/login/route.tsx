import { backendFetch } from "@/app/actions"
import { cookies } from "next/headers"
import { redirect } from "next/navigation"

export async function GET(request: Request) {
    const cookieStore = cookies()
    const client_code = cookieStore.get('client_code')?.value ?? '0'
    const token_resp = await backendFetch(`token?client_code=${client_code}`)
    const body = await token_resp.json()
    cookieStore.set('token_id', body['_id'], { maxAge: 60 * 60 * 24 * 365, httpOnly: true })
    cookieStore.set('token', body['token'], { maxAge: 60 * 60 * 24 * 365, httpOnly: true })
    const callback = cookieStore.get('callback')?.value ?? '/'
    redirect(callback)
}