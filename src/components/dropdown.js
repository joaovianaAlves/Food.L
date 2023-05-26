import Link from "next/link";
import { GithubIcon, LinkedInIcon, GmailIcon } from "./icons";
import { motion } from "framer-motion";

const CustomLink = ({href, target, title, className=""}) =>{
    return(
        <Link href={href} target={target} className={`${className} relative group`}>
            {title}

            <span className={`
            h-[1px] bg-dark 
            absolute left-0 -bottom-0.5 
            group-hover:w-full transition-[width] ease duration-150 
            `}>&nbsp;</span>
        </Link>
    )
}

const Dropdown = (props) => {
    return (
        

        <div className="bg-neutral-300 w-full h-20 hidden hover:block group-hover:block absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-full z-50">
            <CustomLink href="https://github.com/joaovianaAlves" target="_blank" title="Github" className="in"/>
        </div>
)
}

 
export default Dropdown ;