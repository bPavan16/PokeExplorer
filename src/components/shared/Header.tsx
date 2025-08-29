"use client"

import React from "react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet"
import { Menu } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"

const navLinks = [
	{ name: "Home", href: "/" },
	{ name: "Services", href: "/services" },
	{ name: "About Us", href: "/about" },
]

const Header = () => {
	const pathname = usePathname()
	return (
		<header className="w-full shadow-xl sticky top-0 z-50 bg-white bg-opacity-90 backdrop-blur-md transition-all duration-300">
			<div className="container mx-auto flex items-center justify-between py-3 px-4">
				{/* Logo */}
				<Link href="/" className="flex items-center gap-2 group">
					<Image
						src="/logo.svg"
						alt="Logo"
						width={40}
						height={40}
						className="h-10 w-10 transition-transform group-hover:scale-110 drop-shadow-md"
					/>
					<span className="font-extrabold text-2xl text-blue-700 tracking-tight drop-shadow-sm">
						HomeService
					</span>
				</Link>

				{/* Desktop Nav */}
				<nav className="hidden md:flex gap-8 items-center">
					{navLinks.map((link) => (
						<Link
							key={link.name}
							href={link.href}
							className={`px-3 py-1 rounded-md text-base font-semibold transition-colors duration-200 ${
								pathname === link.href
									? "bg-blue-100 text-blue-700 shadow-sm border-b-2 border-blue-500"
									: "text-gray-700 hover:text-blue-700 hover:bg-blue-50"
							}`}
						>
							{link.name}
						</Link>
					))}
					<Button className="ml-4 bg-gradient-to-r from-blue-500 to-blue-700 text-white shadow-md hover:from-blue-600 hover:to-blue-800 transition-colors font-semibold px-6 py-2 rounded-lg">
						Contact
					</Button>
				</nav>

				{/* Mobile Nav */}
				<div className="md:hidden">
					<Sheet >
						<SheetTrigger asChild>
							<Button variant="ghost" size="icon" className="hover:bg-blue-50">
								<Menu className="h-7 w-7 text-blue-700" />
							</Button>
						</SheetTrigger>
						<SheetContent
							side="left"
							className="w-64 bg-white border-r border-blue-100"
							aria-labelledby="mobile-nav-title"
							aria-describedby="mobile-nav-desc"
						>
							<h2 id="mobile-nav-title" className="sr-only">
								Main Navigation
							</h2>
							<p id="mobile-nav-desc" className="sr-only">
								Use the links below to navigate between pages.
							</p>
							<div className="flex flex-col gap-6 mt-8 p-3 ">
								{navLinks.map((link) => (
									<Link
										key={link.name}
										href={link.href}
										className={`text-lg font-semibold px-3 py-2 rounded-md transition-colors duration-200 ${
											pathname === link.href
												? "bg-blue-100 text-blue-700 border-r-4 border-blue-500"
												: "text-gray-700 hover:text-blue-700 hover:bg-blue-50"
										}`}
									>
										{link.name}
									</Link>
								))}
								<Button className="w-full mt-4 bg-gradient-to-r from-blue-500 to-blue-700 text-white shadow-md hover:from-blue-600 hover:to-blue-800 transition-colors font-semibold px-6 py-2 rounded-lg">
									Contact
								</Button>
							</div>
						</SheetContent>
					</Sheet>
				</div>
			</div>
		</header>
	)
}

export default Header