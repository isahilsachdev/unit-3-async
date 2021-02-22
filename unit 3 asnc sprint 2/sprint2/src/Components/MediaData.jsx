import React from 'react'
import { getUsers } from '../Utils/utils'
import MediaCard from './MediaCard'

const MediaData = () => {
    const [category , setcategory] = React.useState("general")
    const [data , setData] = React.useState([])
    const [offset , setOffset] = React.useState(1)
    const [totalP, setTotalP] = React.useState(null)
    
    React.useEffect(()=>{
        handleSearch()
    },[category , offset ])

    const handleSearch = () => {
        getUsers(category , offset) 
        .then(res=>{console.log(res.data) 
        const {data,pagination} = res.data
        setData(data)
        setTotalP(Math.ceil(pagination.total/5))
    })}

    return (
        <div>
            <select style={{height:"40px" ,backgroundColor:"#333" , color:"#fff" }} name="category" onChange={(e)=>setcategory(e.target.value)} >
                <option value="general">general</option>
                <option value="business">business</option>
                <option value="entertainment">entertainment</option>
                <option value="health">health</option>
                <option value="science">science</option>
                <option value="sports">sports</option>
                <option value="technology">technology</option>
            </select>
            {data.map(item => <MediaCard key={item.id} {...item} />)}
            {new Array(totalP).fill(0).map((_,i)=><button key={i+1} onClick={(e)=>setOffset(i+1)}  >{i+1}</button>)}
        </div>
    )
}

export {MediaData}
