import { useState, useEffect } from 'react';
import axios from 'axios';

import Navbar from '../src/components/navbar';
import Container from '../src/components/container';
import Empty from '../src/components/empty';
import Emojis from './components/emojis';
import Input from './components/input';

function App() {
  const [emojisData, setEmojisData] = useState([]);
  const [searchText, setSearchText] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function fetchEmojis(){
      setLoading(true);
      try {
        const res = await axios.get('https://run.mocky.io/v3/fe964130-70d0-430f-b839-e55081423c28')
        setEmojisData(res.data);
        setLoading(false);
      } catch(error) {
        console.log(error);
        setError(true)
        setLoading(false);
      }
      // console.log(res);
    }

    fetchEmojis()
  }, []);

  const handlerSearchEmojis = (e) => {
    setSearchText(e.target.value);
  }

  console.log('loading ? ', loading);
  console.log('error ? ', error);
  console.log('emojisdata ? ', emojisData);

  return (
    <>

      <Navbar/>
      <Container>
      <Input
        onChange={handlerSearchEmojis}
        value={searchText}
      />

      {loading && <Empty text="Loading..."/>}
      {error && <Empty text="Loading..."/>}
      {emojisData.length > 0 && <Emojis emojisData={emojisData} searchText={searchText}/>}
      </Container>
    </>
  );
}

export default App;
