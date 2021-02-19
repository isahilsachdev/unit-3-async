import React from "react";
import { getUser } from "../Utils/utils";
import { NewsCard } from "./NewsCard";

const Newslist = () => {
  const [query, setQuery] = React.useState("masai");
  const [data, setData] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const [isError, setError] = React.useState(false);
  const[page , setPage] = React.useState(1)
  const[totalpage , setTotalPage] = React.useState(null)

  React.useEffect(() => {
    handleSearch();
  }, [page]);

  const handleSearch = () => {
    getUser(query , page)
    
      .then((res) => { 
        const {articles , totalResults} = res.data
        setData(articles)
        setTotalPage(Math.ceil(totalResults/20))
      })
      .catch((err) => setError(true))
      .finally(setIsLoading(false));
  };
  return (
    <div>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button><br/>
      {new Array(totalpage).fill(0).map((_,i)=><button onClick={()=>setPage(i+1)} key={i+1} >{i+1}</button>)}
      <div>
        {data.map((item) => (
          <NewsCard key={item.title} {...item} />
        ))}
      </div>
    </div>
  );
};

export { Newslist };
