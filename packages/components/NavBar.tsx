import Link from "next/link";
import { Container } from "./core";

function NavBar() {
  return (
    <nav className="z-1 sticky top-0 bg-slate-800 max-w-full border-b border-green-600 shadow-xl p-6">
      <Container>
        <div className="flex items-center justify-center gap-4">
          <Link href="/" className="">
            Home
          </Link>
          <Link href="/about">About</Link>
          <Link href="/todos">To do</Link>
        </div>
      </Container>
    </nav>
  );
}

export default NavBar;
