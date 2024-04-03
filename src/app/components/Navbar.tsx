import Link from "next/link";
import { ModeToggle } from "./ModeToggle";

export default function Navbar() {
  return (
    <nav className="w-full relative flex items-center justify-between max-w-2xl mx-auto px-4 py-5">
      <Link href="/" className="font-bold text-3xl">
       Annika<span className="text-primary">Home</span>
      </Link>
            <Link href="/project" className="font-bold text-3xl">
      Project<span className="text-primary">Page</span>
      </Link>
            <Link href="/blogpage" className="font-bold text-3xl">
      Blog<span className="text-primary">Page</span>
      </Link>

      <ModeToggle />
    </nav>
  );
}