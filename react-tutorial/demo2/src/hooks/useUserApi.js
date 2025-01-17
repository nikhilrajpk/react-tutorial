import { useEffect } from "react";
import { useState } from "react";

export function useUserApi(userId){
    const [data, setData] = useState('')
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    useEffect(()=>{
        if (userId <= 0) return
        setLoading(true)
        setError(null)

        fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
        .then((res)=>{
            if(!res.ok){
                throw new Error('data is not available')
            }
            return res.json()
        })
        .then((res)=> setData(res))
        .catch((err)=> setError(err.message))
        .finally(()=> setLoading(false))
    },[userId])

    return {data, loading, error}
}