import React, { useState } from "react";
import About from './components/About';
import Nav from './components/Nav'
import Portfolio from './components/Portfolio';
import ContactForm from "./components/Contact";
import Resume from "./components/Resume";

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
        : navSelected === 'Resume'? ( <> <Resume></Resume></>) 
        : (
          <ContactForm></ContactForm>
        )}
      </main>

      <footer>
        <a href={'https://github.com/SemiHarris'} className='mx-2'>Github</a>
        <a href={'https://www.linkedin.com/in/semi-harris-873662222'} className='mx-2'>Linkedin</a>
        <a href={'https://twitter.com/harris_semi'} className='mx-2'>Twitter</a>
      </footer>
    </div>
  );
}

export default App;
