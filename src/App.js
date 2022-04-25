import React, { useState } from "react";
import About from './components/About';
import Nav from './components/Nav'
import Portfolio from './components/Portfolio';
import ContactForm from "./components/Contact";

function App() {

  const [selected] = useState([
    {name: 'About Me'},
    {name: 'Portfolio'},
    {name: 'Contact'},
    {name: 'Resume'}
]);

const [currentHeader, setCurrentHeader] = useState(false);
const [navSelected, setNavSelected] = useState(false);

  return (
    <div>
      <h1>Semi Harris</h1>
      <Nav
              selected={selected}
              setCurrentHeader={setCurrentHeader}
              currentHeader={currentHeader}
              navSelected={navSelected}
              setNavSelected={setNavSelected}
      ></Nav>
      <main className="px-auto">
        {!navSelected || navSelected === 'About Me'? (
          <>
            <About></About>
          </>
        ) : navSelected === 'Portfolio'? ( <> <Portfolio></Portfolio> </>) 
        : navSelected === 'Resume'? ( <> <Portfolio></Portfolio> </>) 
        : (
          <ContactForm></ContactForm>
        )}
      </main>
    </div>
  );
}

export default App;
