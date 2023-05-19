import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import Head from "next/head";
import React from "react";
import workpic from "../../public/images/profile/Work-in-progress.png"
import Image from "next/image";

const articles = () => {

    return(
        <>
        <Head>
                <title>Frigde Chef || Articles</title>
                <meta name="descripition" content="Articles"></meta>
        </Head>
        <main className="flex w-full flex-col items-center justify-center">
            <Layout className="pt-16">
                <AnimatedText className="mb-16" text="Work in Progress"/>
                <div className="w-full flex flex-col justify-center items-center gap-10">

                    <div className="col-span-3 w-64 h-64 relative rounded-2xl border-2 border-solid border-dark bg-light">
                        <Image src={workpic} className="w-full h-full" />
                    </div>
                    <div className="w-72 bg-green-300 rounded-full dark:bg-gray-700">
                        <div className="bg-green-500 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full w-[30%]">30%</div>
                    </div>
                </div>
            </Layout>
        </main>
    </>
    )
}
export default articles