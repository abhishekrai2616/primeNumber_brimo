import { useState } from 'react'
import './App.css'
import axios from 'axios';



function App() {
  const [inputValue, setInputValue] = useState('');
  const [value,Setvalue]=useState(0);

  const init = async() => {
    console.log(inputValue);
    try {
      let res= await axios.post("http://127.0.0.1:3000/prime",{
        num:inputValue
    }
   );
   console.log(res);
        if (res) {
          Setvalue(res.data.ans); 
        }
  }catch (e) {
       console.log(e);
    }
  }

  const handleInputChange = (event) => {
    setInputValue(parseInt(event.target.value, 10));
  };

  const handleButtonClick = () => {
      init();
  };

  return (
    <div>
      <input
        type="number"
        value={inputValue}
        onChange={handleInputChange }
        placeholder="Enter a number..."
      />
      <button onClick={handleButtonClick}>Get Result</button>
      {value!=0 && <>
        <h3>Your ans is {value}</h3>
      </>}
    </div>
  );
}

export default App
