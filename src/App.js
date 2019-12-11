import React, {useEffect, useState} from 'react';
import './styles.scss'; 
import { getPhotos, advantages } from './data/data'; 

import Header from './Header/Header';
import Body from './Body/Body';
import Footer from './Footer/Footer';

function App() {
  const [pictures, setPictures] = useState([]); 
  const [newAdvantages, setNewAdvantages] = useState(advantages); 

  useEffect(() => {
    getPhotos()
      .then(data => setPictures(data))
  }, [])

  const handleChange = () => {
    let newAdv = [...advantages]; 
    for (let i = 0; i < newAdv.length; i++) {
      let randomPos = pictures[Math.floor(Math.random() * (5000 - 0)) + 0]
      newAdv[i].img = randomPos.thumbnailUrl; 
      newAdv[i].title = randomPos.title;  
    }
    setNewAdvantages(newAdv); 
  }

  console.log(pictures)

  return (
    <>
      <Header handleChange={handleChange}/>
      <Body advantages={newAdvantages} />
      <Footer />
    </>
  );
}

export default App;
