import Link from "next/link";
import React from "react";
import Logo from "./Logo";
import { useRouter } from "next/router";
import { GithubIcon, LinkedInIcon, GmailIcon } from "./icons";
import { motion } from "framer-motion";

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
        <header className=" w-full px-32 py-8 font-medium grid grid-cols-3 items-center justify-between">

            <nav>
                <CustomLink href="/" title="Home" className="mx-4"/>
                <CustomLink href="/about" title="About" className="mx-4"/>
                <CustomLink href="/articles" title="Articles" className="ml-4"/>
            </nav>
                <Logo/>
            <nav className=" flex items-center justify-center flex-wraps">

                <motion.a href="mailto:joaovitorvianaalves@gmail.com" target={"_blank"} whileHover={{y:-2 }} className="w-8 mr-4">
                    <GmailIcon/>
                </motion.a>

                <motion.a href="https://github.com/joaovianaAlves" target={"_blank"} whileHover={{y:-2 }} className="w-8 mx-4">
                    <GithubIcon/>
                </motion.a>

                <motion.a href="https://www.linkedin.com/in/joaovitorvianaalves/" target={"_blank"} whileHover={{y:-2 }} className="w-8 ml-4">
                    <LinkedInIcon/>
                </motion.a>

            </nav>
        </header>
    )
}

export default NavBar