import React,{useEffect,useState} from 'react'
import axios from "axios";

const ApiTest = () => {
    const [data, setData] = useState();

   const getApi = () => {
       const url = "https://jsonplaceholder.typicode.com/posts";
       let res = axios.post(url).then((data) => {
           console.log(data)
       });
       return res;
   }
    let res;
    useEffect(() => {
         res = getApi();
        console.log(res.then((data) => {
            return data
        }));
        // setData(res);
  })



  return (
    <div>
      {res}
    </div>
  )
}

export default ApiTest
