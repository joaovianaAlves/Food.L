import Link from "next/link";
import React from "react";
import Logo from "./Logo";
import { useRouter } from "next/router";
import Dropdown from "./dropdown";
import {HiBars3BottomRight} from "react-icons/hi2"

const CustomLink = ({href, title, className=""}) =>{
    const router = useRouter(); 
    return(
        <Link href={href} className={`${className} relative group`}>
            {title}

            <span className={`
            h-[1px] inline-block bg-dark 
            absolute left-0 -bottom-0.5 
            group-hover:w-full transition-[width] ease duration-150 
            ${router.asPath === href ? 'w-full' : 'w-0'}
            `}>&nbsp;</span>
        </Link>
    )
}

const NavBar = () =>{
    return(
        <header className="relative w-full px-16 bg-yellow-100 font-medium grid grid-cols-3 items-center justify-between">

            <nav>
                <CustomLink href="/" title="Home" className="mx-4"/>
                <CustomLink href="/about" title="About" className="mx-4"/>
            </nav>
                <Logo/>
            <nav className="h-full  flex items-center justify-center flex-wraps">

                <div className="h-full w-full group">
                        <button className="h-full w-full bg-yellow-100">z</button>
                        <Dropdown />
                    </div>

            </nav>
        </header>
    )
}

export default NavBar