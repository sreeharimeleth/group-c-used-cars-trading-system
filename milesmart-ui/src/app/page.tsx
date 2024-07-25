import { PageAttributes } from "@/components/atrributes";
import { Pagination } from "@/components/client/pagination";
import { HeaderBar } from "@/components/server/header_bar";
import { Suspense } from "react";
import { setTimeout } from "timers/promises";
import { FilterAttributes, FilterBox } from "./results/components/filter_box";
import { FilterBoxSkeleton } from "./results/components/filter_box_skel";

async function UI({page = '0'}:{page: string}) {
  await setTimeout(3000)
  return (<div>{page}</div>)
}

type SearchParamsAttributes = FilterAttributes & { page?: number }

export default function Home({searchParams}: {searchParams: SearchParamsAttributes}) {
  const ranges = {
    "pr_min": 5,
    "odo_min": 5,
    "year_min": 5,
    "pr_max": 100,
    "odo_max": 100,
    "year_max": 100,
    "fuel_types": ['Gas', 'Petrol', 'Desiel', 'Electric']
  }

  return (
    <main className="flex flex-col h-screen dark:text-white bg-neutral-100 dark:bg-neutral-900">
      <HeaderBar />
      <div className="flex flex-col flex-1 items-center justify-center gap-2">
        <div className="text-3xl">Home Page</div>
        <div className="text-neutral-500 dark:text-neutral-500">Running in detached environment</div>
      </div>

      
      {/* <FilterBox ranges={ranges} className="flex-none"/>
      <FilterBoxSkeleton /> */}
    </main>
  );
}
