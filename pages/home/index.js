import React from 'react';
import axios from "axios";
import startQuestionnaire from '../../services/homeservice'
export default function index() {

 const getData = async ()=>{
    const res = await  axios.get("/api") ;
    return res;
 }
  React.useEffect(() => {
    getData()
  }, []);
  return (
    <div>index</div>
  )
}