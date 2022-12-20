import { useState } from 'react';
import './App.css';

import { Footer, NavBar, Pets } from './ui-components';
import {AddPet } from './ui-components';

import { withAuthenticator } from '@aws-amplify/ui-react'


import { Storage } from "@aws-amplify/storage"


const asyncFunc = async () => {
  await Storage.put("test.txt", "Hello");
}

function App({user, signOut}) {
  const [showForm, setShowForm] = useState(false)

  const overridesNavBar = {
    Button: {
      onClick: {asyncFunc},
    },
    image: {
      src: "https://img.icons8.com/color/50/000000/cat"
    },
    "Add Pet": {
      style: {
        cursor: "pointer",
      },
      onClick: () => {
        setShowForm(!showForm)
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
        {
          showForm && (
            <AddPet 
              style={{
                  textAlign: "left",
                  margin: "1rem",
                }}
                />
          )}
      </header>
      <Footer width={"100"}/>
    </div>
  );
}

export default withAuthenticator(App);
