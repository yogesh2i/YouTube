import { useState, useEffect } from "react";

const useFetch = (url:string) => {
  const [filters, setFilters] = useState(Array());
  const [feed, setFeed] = useState(Array());
  const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '0e10804dadmsha1f47556d9a38cfp1039b6jsn2ff5da63924b',
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