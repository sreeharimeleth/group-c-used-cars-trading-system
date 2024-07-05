'use client'

import Image from "next/image"
import { ComponentAttributes, Vehicle } from "../atrributes"
import { useRouter } from "next/navigation"
import { Badge } from "../server/badge"
import { ShareIcon } from "../icons/share"
import { FavoriteButton } from "./favourites_button"

type VehicleCardAttributes = ComponentAttributes & { 
    vehicle: Vehicle,
    authenticated?: boolean 
}

export function VehicleCard( { vehicle, className, authenticated }: VehicleCardAttributes) {
    const router = useRouter()

    return (
        <div className={'w-min-64 min-h-72 overflow-clip shadow-md border dark:border-white/5 rounded-lg flex flex-col bg-white dark:bg-white/5 '+className}  onClick={() => { router.push(`/product?vid=${vehicle["_id"]}`) }}>
            <Image alt="main_image" width={-1} height={-1} src={vehicle['image_urls'][0]} className="w-full h-48 overflow-clip object-cover bg-black/10 dark:bg-white/10"/>
            <div className='flex dark:text-white min-h-24 px-3 py-2 gap-2 flex-1'>
                <div className='flex flex-col flex-1 justify-between'>
                    <div className='font-bold text-lg'>
                        {vehicle['manufacturer']} {vehicle['model']}
                    </div>
                    <div className="flex gap-1 mt-1 flex-wrap">
                        <Badge className='text-xs' text={vehicle['odometer']+" KM"} />
                        <Badge className='text-xs' text={vehicle['fuel']} />
                        <Badge className='text-xs' text={vehicle['transmission']} />
                        <Badge className='text-xs' text={vehicle['year'].toString()} />
                    </div>
                    <div className="mt-3 text-md font-semibold">
                        {/* &#8377; {vehicle['price']}/- */}
                        $ {vehicle['price']}
                    </div>
                </div>
                <div className="flex gap-2 flex-col">
                    <button className="
                    px-2 py-2 duration-150 rounded-md
                    fill-black dark:fill-white 
                    hover:bg-black/10 active:bg-black/20 
                    dark:hover:bg-white/10 dark:active:bg-white/20" 
                    onClick={() => {

                    }}>
                        <ShareIcon className="h-5 w-5"/>
                    </button>
                    
                    <FavoriteButton hidden={!authenticated} vehicle={vehicle} />
                </div>
            </div>
        </div>
    )
}