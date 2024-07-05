import { ChangeEventHandler, ReactElement, Key } from "react"

export type ComponentAttributes = { className?:string, hidden?: boolean }

export type FavoriteIconAttributes = ComponentAttributes & { toggled?: boolean }

export type Vehicle = { 
    _id: number, 
    fuel: string, 
    image_urls: string[],
    manufacturer: string,
    model: string,
    odometer: number,
    price: number,
    state: string,
    transmission: string,
    year: number 
    wishlist_id?: Wishlist
}

export type Wishlist = {
    _id: string,
    owner: string,
    vehicle: string | Vehicle
}

export type User = {
    _id: string,
    name: string,
    first_name: string,
    picture: string,
    privilege: number,
    phone?: string,
    email: string
}

export type PageAttributes = {
    pathParams?: { [key: string]: string | string[] },
    searchParams?: { [key: string]: string | string[] }
}