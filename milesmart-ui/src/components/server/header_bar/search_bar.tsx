'use client'

import { useEffect, useState } from "react";
import { ComponentAttributes } from "../../atrributes";
import { useRouter, useSearchParams } from "next/navigation";

type SearchBarAttributes = ComponentAttributes & {
    searchKey?: string,
    onSearch?: (search: string) => void,
    onSearchKeyChanged?: (search: string) => void
}

export function SearchBar({searchKey, onSearchKeyChanged, onSearch, className, hidden}: SearchBarAttributes) {
    const [sk, set_sk] = useState("")
    const router = useRouter()
    const searchParams = useSearchParams()
    
    if (searchKey == undefined) searchKey = sk;
    if (onSearch == undefined) onSearch = (searchKey) => {
        const updatedSearchParams = new URLSearchParams(searchParams)
        updatedSearchParams.set('sk', searchKey);
        router.push(`results?${updatedSearchParams.toString()}`);
    }
    if (onSearchKeyChanged == undefined) onSearchKeyChanged = (value) => set_sk(value);

    useEffect(() => set_sk(searchKey ?? ""), [searchKey])

    return (
        <input hidden={hidden} placeholder="Search" className={`dark:bg-white/10 bg-black/10 flex-1 max-w-[480px] w-full rounded-md px-2 py-1 duration-150 placeholder:text-gray-500 dark:placeholder:text-gray-300 placeholder:text-center text-center ${className}`} style={{outline: "none"}} 
        value={ searchKey ?? sk } 
        onChange={(e) => { if (onSearchKeyChanged != undefined) onSearchKeyChanged(e.target.value) }} 
        onKeyDownCapture={(e) => { if (e.key == 'Enter' && onSearch != undefined) onSearch(sk) }}/>
    )
}