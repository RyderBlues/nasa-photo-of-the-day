import React, {useState, useEffect} from "react";
import Header from "./components/Header";
import POTD from "./components/POTD";
import Details from "./components/Details"
import axios from 'axios';
import styled from 'styled-components';
import './App.css';

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
  
  const BodyStyle = styled.div`
    background-image: url("https://images.unsplash.com/photo-1505506874110-6a7a69069a08?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80");

    height: 100vh;
    width: 100%;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    font-family: 'Source Code Pro';
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
`
  const ContentStyle = styled.div`
    width: 50%;
    height: 80vh; 
    background-color: black;
    padding: 2%;
    opacity: 80%;
    border: 2px #e4e9ed solid;
    padding: 1px;
    border-radius: 10px;
`
  
  
  return (
      <BodyStyle>
          <ContentStyle>
          <Header headerText={headerText}/>
          <POTD photo={photo} />
          <Details copyright={copyright} explanation={explanation} date={date} />
        </ContentStyle>
      </BodyStyle>
  );
}

export default App;
