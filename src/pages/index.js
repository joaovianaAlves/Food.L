import Layout from '@/components/Layout'
import React from "react";
import Head from 'next/head'
import Image from "next/image";
import pic from "../../public/images/profile/Cooking-pana.png"
import AnimatedText from '@/components/AnimatedText';
import Link from 'next/link';
import { LinkArrow } from '@/components/icons';

export default function Home() {
  return (
    <>
      <Head>
        <title>Fridge Chef || Home</title>
        <meta name="description" content="Home || Frigde Chef" />
        
      </Head>
        <main className='flex items-center text-dark w-full min-h-screen'>
          <Layout className='pt-0'>
              <div className='flex items-center justify-between w-full'>

                  <div className='w-1/2'>
                    <Image src={pic} alt="cooking" className="w-full h-auto"/>
                  </div>

                  <div className='w-1/2 flex flex-col items-center self-center'>
                    <AnimatedText text="Bem-vindo ao Fridge Chef" className='!text-left'/>
                    <p className='my-4 text-base font-medium'>
                    Aqui, você encontrará uma maneira prática e criativa de aproveitar ao máximo os ingredientes disponíveis na sua geladeira. O objetivo deste aplicativo é ajudá-lo a descobrir receitas deliciosas e nutritivas com base nos itens que você tem atualmente em sua geladeira. Vamos começar!
                    </p>
                    <div className='flex items-center self-start mt-2'>
                      <Link href="/fridge" target='_blank' className='flex items-center bg-dark text-light p-2.5 px-6 rounded-lg text-lg font-semibold 
                      hover:bg-light hover:text-dark border-2 border-solid border-transparent hover:border-dark'
                      >Try<LinkArrow className="w-6 ml-1"/></Link>
                    </div>
                  </div>
              </div>
          </Layout>
        </main>
    </>
  )
}
