import React, {useState, useEffect} from "react";
import "./App.css";
import Header from "./components/Header";
import POTD from "./components/POTD";
import Details from "./components/Details"
import axios from 'axios';

function App() {
  const [photo, setPhoto] = useState(null);
  const [headerText, setHeaderText] = useState(null);
  const [copyright, setCopyright] = useState(null);
  const [explanation, setExplanation] = useState(null);
  const [date, setDate] = useState(null);

  useEffect(() => {
    axios.get(`https://api.nasa.gov/planetary/apod?api_key=ovM9KZslOSsnWY3QspWj4D3qg9MXtjW9i1wQvOfZ`)
    .then(res => {
      setPhoto(res.data.hdurl);
      setHeaderText(res.data.title);
      setCopyright(res.data.copyright); 
      setExplanation(res.data.explanation);
      setDate(res.data.date);
    })
    .catch(err => {
      console.log(err);
    })
  }, [])
  
  console.log(photo);
  
  
  return (
    <div className="App">
      <div>
        <Header headerText={headerText}/>
        <POTD photo={photo} />
        <Details copyright={copyright} explanation={explanation} date={date} />
      </div>
    </div>
  );
}

export default App;
