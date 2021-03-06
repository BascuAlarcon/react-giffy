import React, {useEffect ,useState} from 'react';
import './App.css';
import getGifs from './services/getGifs'; 
import ListOfGifs from './components/ListOfGifs' 

function App() { 
  const [gifs, setGifs] = useState([]) 

  useEffect(function(){ 
    getGifs({keyword: 'Norte'}).then(gifs => setGifs(gifs))
    
  }, [])

  return (
    <div className="App">
      <section className="App-content">
          <ListOfGifs gifs = {gifs}/> 
      </section>
    </div>
  );
}

export default App;
