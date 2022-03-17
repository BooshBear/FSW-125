import axios from 'axios';
import { useState, useEffect } from 'react';
import './App.css';
import Ary from './DataArray';
import DataHandler from './DataHandler';

function App() {
  const [ary, setAry] = useState([])

  const getAry = () => {
    axios.get('/item')
      .then(res0 => setAry(res0.data))
      .catch(err => console.log(err))
  }

  const addAry = (newAry) => {
    axios.post('/item', newAry)
    .then(res0 => {
      setAry(prevAry => [...prevAry, res0.data])
    })
    .catch(err => console.log(err))
  };

  const deleteAry = (aryID) => [
    axios.delete(`/item/${aryID}`)
    .then (res0 => {
      setAry(prevAry => prevAry.filter(e => e._id !== aryID));
    })
    .catch(err => console.log(err))
  ]

  const editAry = (updates, aryID) => {
    axios.put(`/item/${aryID}`, updates)
    .then(res0 => setAry(prevAry => prevAry.map(ary => ary._id !== aryID ? ary : res0.data)))
    .catch(err => console.log(err))
  }

  useEffect(() => {
    getAry();
  });

  const aryList = ary.map(e => 
    <Ary {...e}
    deleteAry={deleteAry}
    editAry={editAry}
    key={e._id}/>)
  
  return (
    <>
      <DataHandler
      btnText='Add To Data'
      submit={addAry}/>
      {aryList}
    </>
  );
}

export default App;
