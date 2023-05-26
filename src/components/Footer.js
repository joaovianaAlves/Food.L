import React from "react"
import Layout from "./Layout"
import Link from "next/link"

const Footer = () => {
    return (
        <footer className='w-fulls border-t-0 border-solid bg-yellow-100'>
            <Layout className='py-6 flex items-center justify-between bg-yellow-100'>
                <span>{new Date().getFullYear()} &copy; All Rights Reserved</span>
                <div>
                <Link href="/">Food.L</Link>
                </div>
            </Layout>
        </footer>
        
    )
}
export default Footer