import React from 'react';
import { Heading } from './components/Heading';
import { TechnologyList } from './components/TechnologyList';
import { TextContainer } from './components/TextContainer';
import { content } from './content/content';
import './styles/App.sass';

function App() {
    return (
        <div className="App">
            <Heading text="TAPIO TYYNELÄ" />
            <TextContainer text={content.introduction} />
            <TechnologyList />
        </div>
    );
}

export default App;
