import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
import { Fpic } from "../../public/images/profile/Fridge.png"
const MotionLink = motion(Link);

const Logo = () =>{
    return(
        <div className="pb-2 flex items-center justify-center mt-2">
            
            <img src='/images/profile/Fridge.png' className="w-14 h-14 animation border border-black rounded-full" />
            
            {/* <MotionLink 
                href="/" 
                className="w-16 h-16 bg-dark text-light flex items-center justify-center rounded-full text-2xl font-bold"             
                whileHover={{
                    
                    backgroundColor:["#121212", "rgba(131,58,180,1)","rgba(253,29,29,1)","rgba(252,176,69,1)","rgba(131,58,180,1)", "#121212"],
                    
                    transition:{duration:1, repeat: Infinity}
                }}
            >FL</MotionLink> */}
        </div>
    )
}

export default Logo
