"use client"

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const Menu = () => {

    const [isOpen, setIsopen] = useState(false);

    const Links: {
        title: string,
        href: string
    }[] = [
        {
            title: 'Home',
            href: '/',
        },
        {
            title: 'Shop',
            href: '/list',
        },
        {
            title: 'Deals',
            href: '/list',
        },
        {
            title: 'About',
            href: '/about',
        },
        {
            title: 'Contact',
            href: '/contact',
        },
        {
            title: 'Logout',
            href: '/list',
        },
        {
            title: 'Cart (1)',
            href: '/list',
        },
    ]
    return (
        <div className="">
            <Image 
                src="/menu.png" 
                alt="menu icon"
                width={28}
                height={28}
                className="cursor-pointer"
                onClick={() =>setIsopen((prev) => !prev)}
            />
            {isOpen &&
                <div className="absolute left-0 top-20  bg-black flex flex-col justify-center items-center text-white w-full h-[calc(100vh-80px)] gap-8 text-xl z-10">
                    {Links.map((l,i)=> (
                        <Link href={l.href} key={i}>
                            {l.title}
                        </Link>
                    ))}
                </div>
            }
        </div>
    )
}

export default Menu;