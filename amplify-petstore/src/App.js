import './App.css';

import { Footer, NavBar, Pets } from './ui-components';
import {AddPet } from './ui-components';

function App() {
  return (
    <div className="App">
      <NavBar width={"100"}/>
      <header className="App-header">
        <Pets />
      </header>
      <Footer width={"100"}/>
    </div>
  );
}

export default App;
