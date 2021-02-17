import React from 'react'
import styles from "./Card.module.css"

function Card({name,cost_for_two,payment_methods}) {
    console.log({cost_for_two})
    return (
        <div className={styles.card}>
            <h1>{name}</h1>
            <h3>cost : {cost_for_two}</h3>
            <div>
                <h2>PAYMENT OPTIONS</h2>
                <div>{payment_methods.card? "Card Accepted" : null}</div> 
                <div>{payment_methods.cash? "Cash Accepted" : null}</div>
                <div>{payment_methods.upi? "Upi Accepted" : null}</div>
            </div>
        </div>
    )
}

export default Card
