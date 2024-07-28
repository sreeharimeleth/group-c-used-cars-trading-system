'use client'

import { backendFetch } from "@/app/actions"
import { ComponentAttributes, Vehicle, Wishlist } from "@/components/atrributes"
import { VehicleListItem } from "@/components/client/vehicle_list_item"
import { useRouter } from "next/navigation"
import { useState } from "react"

type ListViewAttributes = ComponentAttributes & {
    vehicles: Vehicle[],
    backendUrl: string
}

type MyFavoritesListView = ComponentAttributes & {
    wishlists: Wishlist[],
    backendUrl: string
}

export function MyCarsListView({className, vehicles, backendUrl}: ListViewAttributes) {
    const [data, setData] = useState(vehicles)
    const router = useRouter()

    return (
        <div className={`flex flex-col overflow-auto xl:h-profile-listview md:h-profile-listview-md p-2 gap-2 ${className}`}>
            {data.map((vehicle, index) => {
                return <VehicleListItem vehicle={vehicle} backendUrl={backendUrl} shareButtonHidden key={index} onDelete={() => {
                    data.splice(index, 1)
                    setData([...data])
                    backendFetch(`/user/vehicles/${vehicle._id}`, { method: 'DELETE' })
                }} onEdit={() => router.push(`edit/product/${vehicle._id}`)} />
            })}
        </div>
    )
}

export function MyFavoritesListView({className, wishlists, backendUrl}: MyFavoritesListView) {
    const [data, setData] = useState(wishlists)

    return (
        <div className={`flex flex-col overflow-auto xl:h-profile-listview md:h-profile-listview-md p-2 gap-2 ${className}`}>
            {data.map((wishlist, index) => {
                return <VehicleListItem backendUrl={backendUrl} vehicle={wishlist.vehicle as Vehicle} key={index} onDelete={() => {
                    data.splice(index, 1)
                    setData([...data])
                    const id = 
                    backendFetch(`user/wishlist/${wishlist._id}`, { method: 'DELETE' })
                }}/>
            })}
        </div>
    )
}