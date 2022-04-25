import React from 'react';

function Nav(props) {
 const {
     selected = [],
     setCurrentHeader,
     currentHeader,
     navSelected,
     setNavSelected
 } = props

    return (
      <header>
            
          <nav>
              <ul className="flex-row">

              {selected.map((nav) => (
            <li
                className={`mx-2 ${currentHeader.name === nav.name && 'newActive'}`} 
                key={nav.name}
                >
                <span onClick={() => {setNavSelected(nav.name)}} >
                {nav.name}
                </span>
                </li>
                ))}

              </ul>
          </nav>
      </header>
    );
  }
  
  export default Nav;