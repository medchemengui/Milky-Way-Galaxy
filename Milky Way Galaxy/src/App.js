
import NavScrollExample from './components/Navbar';
import data from './Data';
import AddCard from './components/AddCard';
import { useState } from 'react';
function App() {
  const [search,setSearch]=useState('')
  console.log(search)
  return (
    <div className="App">
      <NavScrollExample data={data} setSearch={setSearch} />
      <AddCard data={data} search={search}/>
    </div>
  );
}

export default App;
