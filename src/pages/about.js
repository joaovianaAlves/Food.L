import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import Image from "next/image";
import Head from "next/head";
import React from "react";
import Aboutpic from "../../public/images/profile/Recipe-book-rafiki.png"

const about = () => {

    return(
        <>
            <Head>
                <title>Frigde Chef || About Page</title>
                <meta name="descripition" content="test"></meta>
            </Head>
            <main className="flex w-full flex-col items-center justify-center">
                <Layout className="pt-16">
                    <AnimatedText className="mb-16" text="Sua Geladeira, Seu Cardápio!"/>
                    <div className="grid w-full grid-cols-8 gap-16">
                        <div className="col-span-3 flex flex-col items-start justify-start">
                            <h2 className="mb-4 text-s font-bold uppercase text-dark/75">Sobre</h2>
                            <p className="font-medium mb-2">
                             Com a correria do dia a dia, muitas vezes nos deparamos com a pergunta: "O que posso fazer com os ingredientes que tenho em casa?" É aí que entramos em ação! Nosso aplicativo oferece uma solução simples e conveniente para transformar sua geladeira em uma despensa repleta de opções culinárias. Basta inserir os itens disponíveis e deixe que o nosso algoritmo inteligente faça o trabalho pesado por você.
                            </p>
                            <p className="font-medium mb-2">
                             Ao identificar os ingredientes presentes em sua geladeira, nosso aplicativo pesquisa em um vasto banco de dados de receitas, levando em consideração suas preferências alimentares, restrições dietéticas e até mesmo a culinária que você mais aprecia. Com base nesses dados, o aplicativo irá gerar uma lista de receitas sugeridas que se adequam aos ingredientes disponíveis, além de oferecer opções de substituição caso algum item específico esteja faltando.
                            </p>
                        </div>

                        <div className="col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark bg-light p-8">
                            <Image src={Aboutpic} className="w-full h-full"/>
                        </div>

                    </div>
                </Layout>
            </main>
        </>
    )

}

export default about