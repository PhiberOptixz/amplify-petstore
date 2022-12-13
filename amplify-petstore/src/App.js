import './App.css';

import { Footer, NavBar, PetProfile, Pets } from './ui-components';
import {AddPet } from './ui-components';

function App() {
  const overridesNavBar = {
    image: {
      src: "https://img.icons8.com/color/50/000000/cat"
    },
    "Add Pet": {
      style: {
        cursor: "pointer",
      },
      onClick: () => {
        alert("Hello")
      },
    },
  }
  return (
    <div className="App">
      <NavBar width={"100"} overrides={overridesNavBar}/>
      <header className="App-header">
        <Pets 
          overrideItems={({item, index}) => ({
            overrides: {
              Breed: {color: "red"},
            }
          }
          )
        }
        />
        <AddPet />
      </header>
      <Footer width={"100"}/>
    </div>
  );
}

export default App;
