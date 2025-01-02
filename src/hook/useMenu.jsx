import { useEffect, useState } from "react";


const useMenu =()=>{

    const [menu, setMenu]=useState();
    const [loading, setLoading]=useState();

    useEffect(()=>{
        fetch("")
        .then(res=>res.json())
        .then(data=>{
            setMenu(data)
            setLoading(false)
        })

    },[])

}

export default useMenu();