import React from 'react'
import data from "../data.json"
import Card from './Card'
import styles from "./Card.module.css"
import Pagination from './Pagination'

function Info() {
    
    const [details , setDetails] = React.useState(data.data) 
    console.log(details)
    
    const [page,setPage] = React.useState(1)
    const per_page = 6

    const pagination = () => {
        let start = (page+1) * per_page
        let end  = start + per_page 

        return details.slice(start, end)
    }
    return (
        <div>
            {/* <button onClick={handlePrice} >Prices?</button> */}
            <div className={styles.total_cards}>
                
                {pagination()?.map(item => (
                    <Card key={item.id} {...item} />                
                    ))}
            </div>
            <div>
                <Pagination />
            </div>
        </div>
    )
}

export default Info

// const sorting = (a,b) => {
//     a.cost_for_two = Number(a.cost_for_two)
//     b.cost_for_two = Number(b.cost_for_two)

//     if(a.cost_for_two < b.cost_for_two) {
//         return 1  
//     } else {
//         return -1
//     }
// }
// const handlePrice = ( ) => {
//     const updated_details=details.map(a => a.cost_for_two > b.cost_for_two ? )
//     setDetails(updated_details)
// } 