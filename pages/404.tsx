import Link from "next/link";

export default function NotFound() {
  return (
    <>
      <div className="grid min-h-[70vh] content-center justify-center text-center">
        <h1 className="text-6xl font-bold">404</h1>
        <p>Parece que esta página não existe!</p>
        <Link href="/">Voltar</Link>
      </div>
    </>
  );
}
