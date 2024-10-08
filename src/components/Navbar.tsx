import Link from "next/link";
import Menu from "./Menu";
import Image from "next/image";
import SearchBar from "./SearchBar";
import NavIcons from "./NavIcons";

const Navbar = () => {
  return (
    <div className="h-20 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 sticky top-0 z-50 bg-white">
        {/* Mobile section */}
        <div className="flex h-full items-center justify-between md:hidden">
            <Link href="/" className="text-2uppercase tracking-wide">
                Revive Trucks
            </Link>
            <Menu />
        </div>
        {/* Big screen */}
        <div className="hidden md:flex items-center h-full justify-between gap-8">
            {/* Left */}
            <div className="w-1/3 xl:w-1/2 flex items-center gap-12">
                <Link href="/" className="flex items-center gap-3">
                    <Image 
                        src="/logo.png" 
                        alt="logo" 
                        width={24} 
                        height={24} 
                        className=""
                    />
                    <div className="text-2xl tracking-wide">MO PARTS</div>
                </Link>
                <div className="hidden xl:flex gap-4">
                    <Link href="/">Home</Link>
                    <Link href="/list">Shop</Link>
                    <Link href="/deals">Deals</Link>
                    <Link href="/about">About</Link>
                    <Link href="/contact">Contact</Link>
                </div>
            </div>
            {/* Right */}
            <div className="w-2/3 xl:w-1/2 flex items-center justify-between gap-8">
                <SearchBar />
                <NavIcons />
            </div>
        </div>
    </div>
  )
}

export default Navbar;