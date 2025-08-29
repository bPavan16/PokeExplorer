"use client"
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-100 to-yellow-100 flex flex-col items-center justify-center py-10 px-4">
      <section className="text-center mb-10">
        <Image src="/globe.svg" alt="PokeExplorer Logo" width={120} height={120} className="mx-auto mb-4" />
        <h1 className="text-5xl font-extrabold text-blue-700 mb-4 drop-shadow-lg">PokeExplorer</h1>
        <p className="text-lg text-gray-700 max-w-xl mx-auto mb-6">Discover, search, and learn about your favorite Pokémon. Dive into the world of Pokémon with beautiful visuals and easy navigation.</p>
        <div className="flex flex-wrap gap-4 justify-center mt-6">
          <Link href="/pokemon">
            <div className="bg-yellow-400 hover:bg-yellow-500 text-white font-semibold py-2 px-6 rounded-lg shadow transition">Explore Pokémon</div>
          </Link>
          <Link href="/about">
            <div className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-6 rounded-lg shadow transition">About</div>
          </Link>
        </div>
      </section>
      <footer className="mt-auto text-gray-500 text-sm py-4">
        &copy; {new Date().getFullYear()} PokeExplorer. All rights reserved.
      </footer>
    </main>
  );
}