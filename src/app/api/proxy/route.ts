
import { NextRequest, NextResponse } from "next/server";


export  async function GET(req :NextRequest,res: NextResponse){
 const apiKey:any= process.env.NEXT_PUBLIC_SECRET_KEY;
 const options = {
    method: 'GET',
	headers: {
		'X-RapidAPI-Key': apiKey,
		'X-RapidAPI-Host': 'yt-api.p.rapidapi.com',
	}
 }
 try{
   const url = getStringParamFromURL("url", req.url);
    const response = await fetch(`${url}`,options);
    const data = await response.json();
   return NextResponse.json(data,{status: 200})
 
    
 }catch(error){
   
    return NextResponse.json({error: 'Error fetching data'},{status: 500});
 }
}

 function getStringParamFromURL( key: string, url: string | undefined): string | null{
   if (!url) return "";
   const search = new URL(url).search;
   const urlParams = new URLSearchParams(search);
   return urlParams.get(key);
 }