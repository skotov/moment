import React from 'react';
import './styles.css'
import Prompt from './Prompt';
import Input, { InputSize } from './Input';
import SaveSection from './SaveSection';

const App: React.FC = () => {
  console.log("here");
  return (
    <div>
      <div className="container" style={{backgroundImage: getBackgroundCSS()}}>
        <div id="journal" className="vertical-center">
          <Prompt />
          <Input size={InputSize.Small}/>
          <SaveSection />
        </div>
      
      </div>
      <div className="exploreLink">
        <div id="text">Explore Past Entries</div>
      </div>
    </div>
  );
}

export default App;

function getBackgroundCSS() {
  const directions = ["top left", "top right", "bottom left", "bottom right"];
  const colors = [["#C7F4F4", "#EDB4DC"], ["#A9E8CA", "#9490DB"],["#F7D7AA", "#F94681"],["#F0E3E5", "#F6AFA8"]]
  const directionIdx = Math.floor((Math.random() * 10 ) % 4);
  const colorsIdx = Math.floor((Math.random() * 10 ) % 4);
  const cssValue = "linear-gradient(to " + directions[directionIdx] + ", " + colors[colorsIdx][0] + ", " + colors[colorsIdx][1] + ")";
  return cssValue;
}