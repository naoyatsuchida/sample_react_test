import React,{useEffect,useState} from 'react'
import axios from "axios";

type Post = {
  id: string;
  body: string;
  title: string;

}

const ApiTest: React.FC = () => {
    const [data, setData] = useState<Post[]>([]);

   const getApi = async() :Promise<Post[]>=> {
       const url = "https://jsonplaceholder.typicode.com/posts";
     let res = await axios.get(url);
     return res.data
   }

  useEffect(() => {
    (async function () {

      const data = await getApi();
      setData(data);
    })();
  },[])

  return (

    <div>
      {data.map((da,i) => {
        return (<>
          <div key={i}>{da.id }</div>
          <div>{da.title }</div>
        </>
        )
      })}
    </div>
  )
}

export default ApiTest
