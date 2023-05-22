import { receitas } from "../../public/Api"

export function verificarIngrediente(ingredientes){
    let receitasFiltradas = []

    ingredientes.forEach(ingrediente => {
        const tempArray = receitas.filter(data => data.ingredientes.includes(ingrediente))
        
        const response = verificarDuplicata(tempArray, receitasFiltradas)
    })

    return receitasFiltradas
}

export function verificarTags(tags){
    tags.forEach(tag => {
        const tempArray = receitas.filter(data => data.tags.includes(tag))
    
        return verificarDuplicata(tempArray)
    })
}

export function verificarDuplicata(array, receitasFiltradas){
    array.forEach(data => {
        if (!receitasFiltradas.includes(data)){
            receitasFiltradas.push(data)
        }
    })

    return receitasFiltradas
}
