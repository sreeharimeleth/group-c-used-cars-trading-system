'use client'

import { usePathname, useRouter, useSearchParams } from "next/navigation"
import { login, logout } from "../actions"

export function LoginLogoutButton({logged_in}:{logged_in?: boolean}) {
    const path = usePathname()
    const searchParams = useSearchParams()
    const router = useRouter()
    return (
        <div>
            <button hidden={logged_in} onClick={() => { login(`${path}?${searchParams.toString()}`) }} className="bg-neutral-800 hover:bg-neutral-700 active:bg-neutral-600 text-white px-3 py-1.5 rounded-md">Login</button>
            <button hidden={!logged_in} onClick={() => { logout().then(() => router.refresh()) }} className="bg-neutral-800 hover:bg-neutral-700 active:bg-neutral-600 text-white px-3 py-1.5 rounded-md">Logout</button>
        </div>
    )
}