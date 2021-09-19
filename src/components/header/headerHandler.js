import { useState } from 'react';
import addNumbers, { log } from '../../utils/common';

const Handler = (props) => {
  const [numbers, setNumbers] = useState([]);

  const onSearch = () => {
    log('add 2 number:', addNumbers(numbers));
  };
  const handleInputNumber = (event) => {
    const val = event.target.value;
    console.log(val);
    setNumbers(val.split(',').map((item) => Number(item)));
  };
  return {
    onSearch,
    handleInputNumber,
  };
};

export default Handler;
