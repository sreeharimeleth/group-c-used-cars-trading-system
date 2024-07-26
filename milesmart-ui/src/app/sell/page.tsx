
import { HeaderBar } from '@/components/server/header_bar';
import { SellView } from './components/sell_view';

export default function Page() {

  return (
    <main className="flex flex-col min-h-screen bg-neutral-100 dark:bg-[#181818]">
    <HeaderBar className="z-20" />
    <SellView/>
    
  </main>
)
}
