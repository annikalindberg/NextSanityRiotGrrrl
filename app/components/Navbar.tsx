import Link from "next/link";
import { ModeToggle } from "./ModeToggle";

export default function Navbar() {
  return (
    <nav className="w-full relative flex items-center justify-evenly  mx-auto px-4 py-5 bg-emerald-50">
      <Link 
      href="/" 
      className="font-bold text-3xl text-primary ">
       Annika
      </Link>
            <Link href="/project" className="font-bold text-3xl text-primary">
      Project
      </Link>
            <Link href="/blogpage" className="font-bold text-3xl text-primary">
      Blog
      </Link>
            <Link href="/pricing" className="font-bold text-3xl text-primary">
      Erbjudanden
      </Link>

      <ModeToggle />
    </nav>
  );
}