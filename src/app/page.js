import { Waitlist } from "@/components/waitlist";
import Header from "@/components/Header";
import Search from "@/components/Search";
import VacationPlan from "@/components/Vacation";

export default function Home() {
  return (
     <div className="w-[100vw] h-[100vh] overflow-hidden">

        <Waitlist />

       {/* <Header />
       <Search />
       <VacationPlan /> */}
     </div>
  );
}