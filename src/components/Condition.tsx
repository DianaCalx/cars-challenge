import { useState, useEffect } from 'react';

interface ConditionProp {
  condition: string
}

const Condition = ({condition}: ConditionProp) => {

  const [value, setValue] = useState('');

  useEffect(() => {
    if(condition === 'A'){
      setValue('Salvage Title');
    } else if (condition === 'N'){
      setValue('New');
    } else{
      setValue('N/A');
    }
  }, [condition]);

  return (
    <p>
      {value}
    </p>
  )
}

export default Condition