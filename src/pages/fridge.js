import Head from "next/head";
import React, { useRef, useState } from "react";
import { verificarIngrediente, verificarTags } from "@/components/functions";

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
        <main className="flex flex-col items-center justify-center min-h-[78vh] gap-4">

                {receitas.length != 0 && (
                    <div className="flex flex-col p-4 justify-center items-center gap-2">
                        <h1 className="font-bold">{receitas[0].nome}</h1>
                        {/* {receitas[0].ingredientes.map(ingrediente => {return(<h2>{ingrediente}</h2>)})} */}
                        <h2>{receitas[0].ingredientesReais}</h2>
                        <h2>{receitas[0].modoDePreparo}</h2>
                    </div>
                    )
                }

            <div className='flex items-center gap-2'>
                <input ref={ingredientes} />
                
                <button onClick={() => handleClick()} className="flex items-center bg-dark text-light p-2.5 px-6 rounded-lg text-lg font-semibold hover:bg-light hover:text-dark border-2 border-solid border-transparent hover:border-dark" >Gerar</button>
                <button onClick={() => handleReset()} className="flex items-center bg-dark text-light p-2.5 px-6 rounded-lg text-lg font-semibold hover:bg-light hover:text-dark border-2 border-solid border-transparent hover:border-dark" >Reset</button>
            </div>

        </main>
    </> 
    )
}
export default fridge