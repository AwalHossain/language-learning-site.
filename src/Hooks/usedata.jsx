import { useEffect, useState } from "react"

const useData =()=>{
    const [dataList, setDataList] = useState([])
    useEffect(()=>{
        fetch('./data.JSON')
        .then(res => res.json()
        .then(data => setDataList(data))
        )
    },[])
    return [dataList, setDataList]
}

export default useData;