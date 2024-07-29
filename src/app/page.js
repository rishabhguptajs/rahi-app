import { Waitlist } from "@/components/waitlist";
import Image from "next/image";

export default function Home() {
  return (
     <div className="w-[100vw] h-[100vh] overflow-hidden">
       <Waitlist />
     </div>
  );
}