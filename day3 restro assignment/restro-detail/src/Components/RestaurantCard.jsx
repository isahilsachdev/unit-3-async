import React from 'react'
import styles from "./Css/RestaurantCard.module.css"

const RestaurantCard = ({item}) => {
    const {id,img,stars,total_votes,reviews,cost_for_one,categories,payment_method,restaurant} = item
    console.log(item)
    let cats = categories.join(" ")
    return (
        <div key={id} className={styles.card}>

            <div className={styles.card__sub_card}>
                   
                   <span><img width="200px" height="150px" src={img} alt=""/></span>
                   <span>
                       <h1>{restaurant}</h1>
                        <h3>{cats} <br/> cost Rs.{cost_for_one} for one </h3> 
                        <h4>{payment_method.upi && 'Accepts online'} { payment_method.card && 'Accepts card'} {payment_method.cash && 'Accepts cash' }</h4>  
                    </span>
                   <span >
                       <span style={{background:'green',padding:'5px'}}>{stars}</span>
                        <p>{total_votes} votes <br/>{reviews}reviews</p>
                        <p></p>
                    </span>
            </div>
            <div className={styles.card__bottom_sub_card}>
                <div className={styles.card__bottom_sub_card__order_link_empty}></div>
                <div className={styles.card__bottom_sub_card__order_link}>Order Online</div>
            </div>
        </div>
    )
}

export {RestaurantCard}
