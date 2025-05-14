import { NavbarDemo } from "@/components/navbar";
import { GridBackgroundDemo } from "@/components/GridBackgroundDemo"; // import GridBackgroundDemo

export default function Home() {
  return (
    <>
      <div className="h-screen bg-black">
        <NavbarDemo />
        <GridBackgroundDemo /> {/* Use GridBackgroundDemo here */}
      </div>
    </>
  );
}
