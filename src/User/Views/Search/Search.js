import React, { useEffect, useState } from 'react'
import Header from '../../Componets/Header/Header'
import './Search.css'
import Sidebar from "../../Componets/Sidebar/Sidebar";
import SearchBody from './SearchBody';
import { useParams } from 'react-router-dom';
import axios from 'axios';
export default function Search(props) {
    let[searchResult,setSearchResult]=useState()
    let { searchTerm } = useParams(); 
    // setState(searchTerm);
    useEffect(()=>{
        axios
        .post("https://y-clone.xyz/search", { input: searchTerm },{
           headers: {
          "x-access-token": localStorage.getItem("token"),
        },})
        .then((response) => {
            setSearchResult(response.data)
        })
    },[])
    return (
        <>
           <Header searchValue={searchTerm} />
           <div className="searchPage">
               <Sidebar/>
           {searchResult&&<SearchBody searchResult={searchResult}/>}
           </div>
        </>
    )
}
