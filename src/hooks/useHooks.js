import { useEffect } from "react"

const useHooks = (title) =>{
    useEffect(()=>{
        document.title = `${title}-Domestic Travol`
    },[title])
}

export default useHooks