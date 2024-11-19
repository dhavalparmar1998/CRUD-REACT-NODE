import React, { useEffect, useState } from "react";
import fetchFunction from "./fetchFunction";
function useFetch(apiPath,extra=[]){
    const[data,setData] = useState([]);
    useEffect(()=>{
        fetchFunction(apiPath)
        .then((res)=>{
            setData(res.data)
        })
    },extra);

    return data;
}

export default useFetch;