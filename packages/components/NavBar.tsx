import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { Container } from "./core";
import Logo from "./Logo";

function NavBar() {
  const { data: session } = useSession();
  return (
    <nav className="z-1 sticky top-0 bg-slate-800 border-b border-orange-600 shadow-xl p-6">
      <Container>
        <div className="flex justify-between">
          <div className="flex gap-4 items-center">
            <Logo />
            <Link href="/">Pokedex</Link>
          </div>
          <div className="flex items-center gap-4">
            <Link href="/" className="">
              Home
            </Link>
            <Link href="/pokedex">Pokedex</Link>
            <Link href="/about">About</Link>
          </div>
          <div className="flex gap-2">
            {session ? (
              <>
                <img
                  src={session.user?.image ?? ""}
                  className="object-cover rounded-full h-8 w-8"
                />
                <button onClick={() => signOut()}>Sair</button>
              </>
            ) : (
              <button className="py-1 px-2 border border-blue-500 rounded-md">
                <Link href="/login">Login</Link>
              </button>
            )}
          </div>
        </div>
      </Container>
    </nav>
  );
}

export default NavBar;
