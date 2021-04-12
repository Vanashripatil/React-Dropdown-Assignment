import './App.css';

import React, {useState} from 'react';
import Dropdown from './Dropdown/Dropdown';

function App() {
  const [data] = useState([
    {
        label: '1', value: 'value1'
    },
    {
        label: '2', value: 'value2'
    },
    {
        label: '3', value: 'value3'
    },
]) ;

return(
 <div className='App'>
   <h1>Select the number</h1>
    <select  className='App-container'>
        {data.map(x => {
          return(
            <option key={x.value}
            value={x.value}>
                {x.label}
            </option>)
        })}
    </select>
    <Dropdown />
</div>
);
}

export default App;
