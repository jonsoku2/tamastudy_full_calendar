import React, { useEffect, useState } from 'react';
import axios from 'axios';

const App = props => {
  useEffect(() => {
    getValue();
  }, []);
  const [value, setValue] = useState('');
  const getValue = async () => {
    const response = await axios.get('/api/');
    setValue(response.data.string);
  };
  return (
    <div>
      <h1>{value}</h1>
      hey!가 나타난다면 server에서 get이 정상적으로 완료된 것 !
    </div>
  );
};

export default App;
