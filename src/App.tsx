import React from 'react';
import './App.css';
import {CheckboxText} from "./CheckboxText";
import {CheckboxTextMount} from "./for-mount/CheckboxTestMount";

function App() {
   return(
       <div className={'App'}>
           {/*<CheckboxText />*/}
           <CheckboxTextMount />
       </div>
   )
}

export default App;
