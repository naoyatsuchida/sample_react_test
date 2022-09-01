import { color } from '@mui/system';
import { isDisabled } from '@testing-library/user-event/dist/utils';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();
  return (
    <div>
        Home
      <button onClick={() => { navigate('/') }} >home</button>
      <button onClick={() => { navigate('/tab') }} >tab</button>
      <button onClick={() => { navigate('/api') }} >api</button>
    </div>
  )
}

export default Home
