import { color } from '@mui/system';
import { isDisabled } from '@testing-library/user-event/dist/utils';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import SquareButton from "../components/ SquareButton"

const Home = () => {
  const navigate = useNavigate();
  return (
    <div>
        Home
      <button onClick={() => { navigate('/') }} >home</button>
      <button onClick={()=>{navigate('/tab')}} >tab</button>
      <SquareButton text={"tarako"} onClick={() => { console.log('sss') }} styles={{ backgroundColor: "red" }} disable={false}></SquareButton>
      <SquareButton text={"sasimi"} onClick={() => { console.log('sss') }} styles={{backgroundColor:"red" }} disable={true} ></SquareButton>

    </div>
  )
}

export default Home
