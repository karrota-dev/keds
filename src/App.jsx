import { useState } from "react";

import Logo from './assets/KEDS-Logo.svg';
import SwitchON from './assets/light-on.png';
import SwitchOFF from './assets/light-off.png';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={`${ darkMode && "dark"}`}>
      <div className="dark:bg-black">
        {/* Navbar */}
        <div className="sticky top-0 z-10 bg-bg-primary dark:bg-black bg-opacity-80 bg-clip-padding navbar">
          <div className="container mx-auto">
            <div className="flex flex-row justify-between items-center">
              <div className="p-2">
                <img src={Logo} alt="KEDS Energy"/>
              </div>
              <div className="p-2 flex flex-row justify-center items-center">
                <h4 className="flex justify-center items-center text-xl font-semibold hover:text-accent cursor-pointer dark:text-white">
                  Këshilla Kursimi 
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" class="w-6 h-6 p-1 hover:text-accent dark:text-white">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                  </svg>
                </h4>

              </div>
              <div className="p-2">
                <img src={Logo} alt="KEDS Energy"/>
              </div>
            </div>
          </div>
        </div>
        {/* Hero */}
        <div className="container mx-auto">
          <div className="h-screen grid grid-cols-2">
            <div className="flex flex-col justify-center items-start">
              <h1 className="p-2 text-[5rem] font-bold leading-tight dark:text-white">Thirrje për <br/><span className="text-accent">Kursim</span></h1>
              <p className="p-2 text-xl text-accent">#tëkursejmëkrejtbashkë</p>
              <p className="p-2 text-lg text-left text-secondary">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque laboriosam consequatur, doloremque praesentium blanditiis omnis modi recusandae voluptate explicabo nostrum labore quisquam nulla possimus suscipit, ex quibusdam odio dolore corrupti!</p>
            </div>
            <div className="">

            </div>
          </div>
        </div>
        {/* Light Switch */}
        <div className="bottom-0 sticky">
          <div className="flex flex-row justify-start items-center">
            <div className="">
              <button onClick={() => setDarkMode(true)}>
                {
                  darkMode ? 
                    <img className="w-48" src={SwitchOFF} alt="" srcset="" /> 
                  : 
                    <img className="w-48" src={SwitchON} alt="" srcset="" />
                }
              </button>
            </div>
            <div className="">
              <h2 className="text-2xl font-bold dark:text-white">
                {
                  darkMode ?
                    "Terr!"
                  :
                    "Fike Dritën!"
                }
              </h2>
            </div>
          </div>
        </div>
      </div>  
    </div>
  );
}

export default App;