'use client';
import React, {  useEffect, useRef, useState } from 'react';
import styles from './Search.module.scss';
import {BsMicFill} from 'react-icons/bs'
import {AiOutlineSearch} from 'react-icons/ai'
import { useRouter } from 'next/navigation';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { updateFeed } from '@/redux/slices/feedSlice';
import { IoSearchOutline } from 'react-icons/io5';
import { inputDisplayButton } from '@/redux/slices/buttonSlice';

export function Search() {
  const [val,setVal] = useState('');
  const [terms,setTerms] = useState([]);
 
  const ref = useRef<null | HTMLParagraphElement>(null);
  const router = useRouter();
  const dispatch = useAppDispatch();
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '0e10804dadmsha1f47556d9a38cfp1039b6jsn2ff5da63924b',
      'X-RapidAPI-Host': 'yt-api.p.rapidapi.com'
    }
  };
  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    let query = e.target.value;
    setVal(query);
  }
  const fetchList = async(query:string)=>{
    try {
      const data = await fetch(`https://yt-api.p.rapidapi.com/search?query=${query}&geo=IN`,options);
      const result = await data.json();
      dispatch(updateFeed(result.data));
      {result.refinements?setTerms(result.refinements):null};
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(()=>{
    let text=val.trim();
    if(text!==''){
      const callFetch = setTimeout(()=>{
        fetchList(val);
      },700)
      return()=>clearTimeout(callFetch);
    }
  },[val]);
  const handleRef=(text:string)=>{
    handleInpoutRef('none');
    setVal(text);
    router.push(`/search/${text}`);
    dispatch(inputDisplayButton('none'));
      
    }
    const handleInpoutRef=(display:string)=>{
      if(ref.current){
        ref.current.style.display = display;
      }
    }
    const handleSubmit=(e: React.FormEvent<HTMLFormElement>)=>{
      e.preventDefault()
      router.push(`/search/${val}`);
      dispatch(inputDisplayButton('none'));
     handleInpoutRef('none');
  }

  return (
    <>
    <form id={styles.searchForm} onSubmit={(e)=>{handleSubmit(e)}}>

      <input type="text" name='search' placeholder='Search' value={val} onChange={(e)=>handleChange(e)} onFocus={()=>handleInpoutRef('block')} />
      <button title='Search' name='search' type='submit'><AiOutlineSearch/> </button>
      <span title='Search with your voice'><BsMicFill/></span>
    </form>
      {terms.length>0 &&
      <div className={styles.search__list} ref={ref}>
        <ul>

        { terms.map((item)=>{
           return (
            <li onClick={()=>handleRef(item)}>{item}</li>
           )
        })}
        </ul>
      </div>}
   
    </>
  )
}

export function AndroidSearch(){
  const dispatch = useAppDispatch();
  const display = useAppSelector((state)=>state.buttonReducer.inputDisplay);
  const handleRef=()=>{
    dispatch(inputDisplayButton('block'));
  }
  return(<>
      <span onClick={()=>handleRef()}><IoSearchOutline/></span>
      <div  style={{display:`${display}`}}>
        <Search/>
        </div>
  </>
  )
}