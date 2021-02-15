import React from 'react'
import { FcPrevious , FcNext} from 'react-icons/fc';
import styles from "./Grocery.module.css"

function ManagePage ({page , per_page , setPage ,  handleNext ,  handleLast}) {
    return (
        <div className={styles.page} >
            <FcPrevious onClick={handleLast} />
            <div>
                <div>{page-1}</div>
                <div style={{backgroundColor:"lightblue"}}>{page}</div>
                <div>{page+1}</div>
            </div>
            <FcNext onClick={handleNext} />            
        </div>
    )
}

export default ManagePage
