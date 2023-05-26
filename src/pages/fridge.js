import Head from "next/head";
import React, { useRef, useState } from "react";
import { verificarIngrediente, verificarTags } from "@/components/functions";
import {HiOutlineMagnifyingGlassCircle} from "react-icons/hi2"
import Image from "next/image";
import { data } from "autoprefixer";

const fridge = () => {
    const [receitas, setReceitas] = useState([])
    const ingredientes = useRef()

    function handleClick(){
        const listaIngredientes = ingredientes.current.value.split('/')

        const array = verificarIngrediente(listaIngredientes)

       setReceitas([...array])
    }

    function handleReset(){
        const deletedItem = receitas.shift()
        
        setReceitas(receitas.filter(receita => receita != deletedItem))
    }

    return(
        <>
        <Head>
                <title>Frigde Chef || Articles</title>
                <meta name="descripition" content="Articles"></meta>
        </Head>
        <main className="relative flex flex-col items-center justify-center min-h-[78vh] gap-4">

                {receitas.length != 0 && (
                        <div className="flex flex-col p-4 justify-center items-center w-2/3 gap-2">
                            <h1 className="font-bold">{receitas[0].nome}</h1>
                            {/* {receitas[0].ingredientes.map(ingrediente => {return(<h2>{ingrediente}</h2>)})} */}
                            <div className="grid grid-cols-2 w-full">
                            <ul  className="flex flex-col justify-center list-disc ml-5">{receitas[0].ingredientesReais.map
                            ((data, index) => {
                                return(
                                    <li key={index}>{data}</li>
                                )
                            })}</ul>
                            {receitas[0].imagem ? <img className="border-solid border-black relative border-3  left-60 w-56 h-56 object-cover rounded-sm" src={receitas[0].imagem}/> : null }
                            </div>
                            <div className="w-full">
                            {receitas[0].modoDePreparo.map((data, index)=>{
                                return(
                                    <h2 key={index}>{data}</h2>
                                )
                            })}
                            </div>
                        </div>
                    )
                }

            <div className="absolute flex bottom-4 gap-2">
                <div className="flex bg-yellow-200 rounded-lg items-center gap-2">
                    <input className="border-none p-2.5 rounded-md text-sm bg-yellow-200 text-dark focus:outline-none" ref={ingredientes}/>
                    
                    <button onClick={() => handleClick()} className="focus:outline-none flex items-center bg-transparent text-light p-2.5 px-2 text-sm font-semibold border-l border-neutral-00" ><HiOutlineMagnifyingGlassCircle size={25} className="text-black"/></button>
                </div>
                    <button onClick={() => handleReset()} className="focus:outline-none flex items-center bg-dark text-light p-2.5 px-6 rounded-md text-sm font-semibold hover:bg-light hover:text-dark border-2 border-solid borderl border-neutral-800" >
                    Reset
                    </button>
            </div>

        </main>
    </> 
    )
}
export default fridge