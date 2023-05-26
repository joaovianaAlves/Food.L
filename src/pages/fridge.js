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
        <main className="relative border-solid border-black flex flex-col items-center justify-center min-h-[100vh] gap-4">

                {receitas.length != 0 && (
                        <div className="pb-20 p-4 justify-center items-center w-1/3 gap-2">
                                    <div className="border-black border-2 p-3 ">
                                        <div className="w-full border-black border-2 rounded-md p-4">
                                            
                                            <div>
                                                <h1 className="text-center font-bold text-3xl pb-10 py-4">{receitas[0].nome}</h1>
                                                {/* {receitas[0].ingredientes.map(ingrediente => {return(<h2>{ingrediente}</h2>)})} */}
                                            </div>

                                                <h2 className="font-bold py-2">Ingredientes:</h2>
                                                <ul  className="justify-center list-disc ml-5">{receitas[0].ingredientesReais.map
                                                    ((data, index) => {
                                                        return(
                                                            <li key={index}>{data}</li>
                                                        )
                                                    })}
                                                </ul>
                                            
                                                <h2 className="font-bold py-2">Modo de Preparo:</h2>
                                                    {receitas[0].modoDePreparo.map((data, index)=>{
                                                        return(
                                                            <h2 key={index}>{data}</h2>
                                                        )
                                                    })}

                                            {/* {receitas[0].imagem ? <img className="border-solid border-black relative border-3  left-60 w-56 h-56 object-cover rounded-sm" src={receitas[0].imagem}/> : null }
                                            </div>
                                            <div className="w-full"> */}
                                        
                                        </div>
                                    </div>
                                </div>            

                    )
                }

            <div className="absolute flex bottom-4 gap-2">
                <div className="flex bg-yellow-200 rounded-lg items-center gap-2">
                    <input className="border-none p-2.5 rounded-md text-sm bg-yellow-200 text-dark focus:outline-none" ref={ingredientes}/>
                    
                    <button onClick={() => handleClick()} className="focus:outline-none w-full flex items-center bg-transparent text-light p-2.5 px-2 text-sm font-semibold border-l border-yellow-200" ><HiOutlineMagnifyingGlassCircle size={25} className="text-black"/></button>
                </div>
                    <button onClick={() => handleReset()} className="focus:outline-none flex items-center bg-dark text-light p-2.5 px-6 rounded-md text-sm font-semibold hover:bg-light hover:text-dark border-2 border-solid borderl border-neutral-800" >
                    Proxima
                    </button>
            </div>

        </main>
    </> 
    )
}
export default fridge