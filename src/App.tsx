import React from 'react';
import { Heading } from './components/Heading';
import { TextContainer } from './components/TextContainer';
import {texts} from './content/texts'
import './styles/App.sass';

function App() {
  return (
    <div className="App">
      <Heading text="TAPIO TYYNELÄ" />
      <TextContainer text={texts.introduction}/> 
    </div>
  );
}

export default App;
