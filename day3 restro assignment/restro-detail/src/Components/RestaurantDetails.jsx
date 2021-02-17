import React from "react";
import data from "../data.json";
import { Pagination } from "./Pagination";
import { RestaurantCard } from "./RestaurantCard";
const RestaurantDetails = () => {
  const [details, setDetails] = React.useState(data);
  const [one, setOne] = React.useState(false);

  const handleSort = () => {
    setOne(true);
    setDetails(details.sort((a, b) => a.stars - b.stars));
  };
  const handleSingleStar = (star) => {
    setOne(true);
    setDetails(data.filter((item) => Math.floor(item.stars) === star));
  };

  const handleTwostars = () => {
    setOne(true);
    setDetails(data.filter((item) => Math.floor(item.stars) === 2));
  };
  const handleThreeStars = () => {
    setOne(true);
    setDetails(data.filter((item) => Math.floor(item.stars) === 3));
  };
  const handleFourStars = () => {
    setOne(true);
    setDetails(data.filter((item) => Math.floor(item.stars) === 4));
  };

  const handleCashOnly = () => {
    setOne(true);
    setDetails(
      data.filter(
        (item) =>
          !item.payment_method.card &&
          !item.payment_method.upi &&
          !!item.payment_method.cash
      )
    );
  };
  const handleCardOnly = () => {
    setOne(true);
    setDetails(
      data.filter(
        (item) =>
          !item.payment_method.cash &&
          !item.payment_method.upi &&
          !!item.payment_method.card
      )
    );
  };

  const handleAll = () => {
    setOne(true);
    setDetails(data);
  };

  const handleHighToLow = () => {
    setOne(true);
    setDetails(data.sort((a, b) => b.cost_for_one - a.cost_for_one));
  };
  const handleLowToHigh = () => {
    setOne(false);
    setDetails(data.sort((a, b) => a.cost_for_one - b.cost_for_one));
  };

  // const [postPerPage] = React.useState(3)
  // const [currentPage, setCurrentPage] = React.useState(1)

  // const indexOfLastPost = postPerPage * currentPage-1
  // const indexOfFirstPost = indexOfLastPost - postPerPage
  // const currentPosts = data.splice(indexOfFirstPost,indexOfLastPost)

  // const paginate=(number)=>setCurrentPage(number)

  return (
    <div>
      <div>
        <button onClick={handleSort}>Sort according to stars</button>{" "}
        <button onClick={() => handleSingleStar(1)}>One Star</button>{" "}
        <button onClick={() => handleSingleStar(2)}>Two stars</button>
        <button onClick={() => handleSingleStar(3)}>Three star</button>
        <button onClick={() => handleSingleStar(4)}>Four star</button>
        <button onClick={handleCashOnly}>Cash only</button>
        <button onClick={handleCardOnly}>Card only</button>
        <button onClick={handleAll}>All</button>
        <button onClick={handleHighToLow}>High to Low</button>
        <button onClick={handleLowToHigh}>Low to High</button>
      </div>
      {one
        ? details.map((item) => (
            <div key={item.id}>
              <RestaurantCard item={item} />
            </div>
          ))
        : data.map((item) => (
            <div key={item.id}>
              <RestaurantCard item={item} />
            </div>
          ))}

      {/* {
                currentPosts.map((item) => <div key={item.id}><RestaurantCard item={item} /></div>)
            } */}
      {/* <Pagination perPage={postPerPage} total={data.length} paginate={paginate}/> */}
    </div>
  );
};

export { RestaurantDetails };
