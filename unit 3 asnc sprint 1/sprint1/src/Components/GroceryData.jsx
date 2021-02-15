import React from "react";
import data from "../data";
import { GroceryCard } from "./GroceryCard";
import ManagePage from "./ManagePage";

const GroceryData = () => {
  console.log(data);
  const [detail, setDetail] = React.useState(data);


  
//   pagination

    const [page , setPage] =React.useState(1)
    const per_page = 4
    console.log(page)
    
    const pagination = () => {
        var start = (page-1) * per_page
        var end = start + per_page 
        return detail.slice(start,end)
    }
    const length = Math.ceil(detail.length/4)

    const handleNext = () => {
        if (page<length) {setPage(page => page+1)}
    }

    
    const handleLast = () => {
        if (page>1) {setPage(page => page-1)}
    }

    

  return (
      <div>
          
        <div style={{display:"flex" , flexWrap:"wrap"}}>
        {pagination()?.map((item) => (
            <GroceryCard key={item.id} {...item} />
        ))}      
        </div>

        <ManagePage page={page} per_page={per_page} 
        setPage={setPage} handleNext={handleNext} handleLast={handleLast} />
      </div>
  );
};

export { GroceryData };
