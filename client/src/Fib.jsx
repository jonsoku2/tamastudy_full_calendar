import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Fib = props => {
  useEffect(() => {
    getData();
  }, []);
  const [value, setValue] = useState('');
  const getData = async () => {
    const response = await axios.get('/');
    setValue(response.data.string);
  };
  return <div>{value} : test 완료</div>;
};

export default Fib;
