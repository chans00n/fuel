// import { Button } from "@/components/ui/button"; // REMOVED: Unused import
// import { Input } from "@/components/ui/input"; // REMOVED: Not using search input
// import { Logo } from "./logo"; // REMOVED: Will use props for title/logo image directly
import Image from "next/image"; // ADDED: For Phoenix logo
import { ThemeToggle } from "@/components/theme-toggle"; // ADDED: For theme switching
// import { Search } from "lucide-react"; // REMOVED: Not using search icon
import React from "react"; // ADDED: Import React

interface Navbar05Props {
  siteTitle: string;
  logoSrc: string;
  // Add other props like navLinks if needed later
}

const Navbar05: React.FC<Navbar05Props> = ({ siteTitle, logoSrc }) => {
  return (
    // <div className="min-h-screen bg-muted"> // REMOVED: Outer div not needed
    <nav className="fixed top-0 left-0 right-0 h-16 bg-background/80 backdrop-blur-md border-b border-border z-50 shadow-sm">
      {/* MODIFIED: Made it a full-width sticky header, removed top-6, inset-x-4, rounded-full for a more standard header */}
      <div className="h-full flex items-center justify-between max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3 md:gap-4"> {/* MODIFIED: gap */}
          {/* Phoenix Logo Image */}
          <div className="relative w-[80px] h-[40px] sm:w-[100px] sm:h-[50px]">
            <Image
              src={logoSrc}
              alt={`${siteTitle} Logo`}
              fill
              style={{ objectFit: "contain" }}
              className="opacity-90"
            />
          </div>
          {/* Site Title - hidden on very small screens if logo is present, or shown if no logoSrc */}
          <h1 className="text-lg sm:text-xl font-bold text-foreground hidden xs:block">
            {siteTitle}
          </h1>
        </div>

        {/* REMOVED: Search input and mobile search button */}

        <div className="flex items-center gap-2">
          <ThemeToggle />
          {/* REMOVED: Sign In and Get Started buttons */}
        </div>
      </div>
    </nav>
    // </div> // REMOVED: Outer div not needed
  );
};

export default Navbar05;
