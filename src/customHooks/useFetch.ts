import { useState, useEffect } from "react";

const useFetch = (url:string) => {
  const [filters, setFilters] = useState(Array());
  const [feed, setFeed] = useState(Array());
  const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '6d08210ef4msh1e2294ffb752a98p1b13b5jsne3c9592016b1',
		'X-RapidAPI-Host': 'yt-api.p.rapidapi.com'
	}
};
  useEffect(() => {
    (async ()=>{
        try {
          const response = await fetch(url, options);
          const result = await response.json();
          
          setFilters(result?.filters);
          try {
            const nextResponse = await fetch(`https://yt-api.p.rapidapi.com/home?token=${result.continuation}&geo=IN`,options);
            const nextResult :any = await nextResponse.json();
            let newFeed = [...result.data,...nextResult.data];
            setFeed(newFeed);
            
          } catch (error) {
            console.log(error)
          }
           
        } catch (error) {
            console.error(error);
        }
        })();
        
  }, [url,options]);

  return [{filters,feed}];
};

export default useFetch;