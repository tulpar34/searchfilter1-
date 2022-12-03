import { useState } from 'react';
import './App.css';
import {Users} from './users'
import Table from './Table'

function App() {
  const [query, setQuery] = useState("")
  
  const keys = ["first_name","last_name","email"]
  // console.log(Users[0].email)

  const search = (data) => {
    return data.filter(
      (item) =>
      keys.some(key => item[key].toLowerCase().includes(query))
    )
  }
  return (
    <div className="App">
      <input type='text' className='search' placeholder='Search...'
      onChange={element => setQuery(element.target.value)} />
      
      <Table data={search(Users)}/>
    </div>
  );
}

export default App;

