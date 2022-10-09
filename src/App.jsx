import { useState } from "react";

import Logo from './assets/KEDS-Logo.svg';
import mascotPeek from './assets/mascot-peek.png';

import SwitchON from './assets/light-on.png';
import SwitchOFF from './assets/light-off.png';

import phoneIcon from './assets/phone-icon.png';
import mailIcon from './assets/mail-icon.png';
import locationIcon from './assets/location-icon.png';
import clickIcon from './assets/click-icon.png';

// import OutletIllustration from './assets/outlet-1.png';

import videoOne from './assets/img-1.jpg';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={`${ darkMode && "dark"}`}>
      <div className="dark:bg-bg-dark">
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
        {/* Video One */}
        <div className="">
          <div className="container mx-auto grid grid-cols-2">
            <div className="flex justify-end items-center">
                <img src={videoOne} alt="Video One" />
            </div>
            <div className="">

            </div>
          </div>
        </div>
        {/* Light Switch */}
        <div className="bottom-0 sticky">
          <div className="w-72 flex flex-row justify-start items-center bg-white bg-opacity-90 bg-clip-border rounded-3xl navbar">
            <div className="p-5">
              <button onClick={() => setDarkMode(!darkMode)}>
                {
                  darkMode ? 
                    <img className="w-16" src={SwitchOFF} alt="" srcset="" /> 
                  : 
                    <img className="w-16" src={SwitchON} alt="" srcset="" />
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
        {/* Footer */}
        <div className="bg-accent">
          <div className="container mx-auto">
            <div className="grid grid-cols-3 ">
              <div className="grid py-10">
                <div className="">
                  <p className="p-2 text-base font-light text-white">Për cdo infromatë në lidhje me rrjetin <br/>elektrik na kontaktoni në numrin pa pagesë:</p>
                  <div className="p-2 flex flex-row justify-start items-center">
                    <img className="w-10" src={phoneIcon} alt="Phone" />
                    <h2 className="pl-5 text-2xl font-semibold text-white">0800 791-00</h2>
                  </div>
                </div>
                <div className="">
                  <p className="p-2 text-base font-light text-white">Për cdo Kërkesë në lidhje me rrjetin elektrik <br/>na shkruani në email adresën:</p>
                  <div className="p-2 flex flex-row justify-start items-center">
                    <img className="w-10" src={mailIcon} alt="e-Mail" />
                    <h2 className="pl-5 text-2xl font-semibold text-white">info@keds-energy.com</h2>
                  </div>
                </div>
              </div>
              <div className="grid py-10">
                <div className="">
                  <p className="p-2 text-base font-light text-white">Kërkesat tuaja mund t'i parashtroni <br/>në zyret e KEDS-it në 7 qytetet e Kosovës.</p>
                  <div className="p-2 flex flex-row justify-start items-center">
                    <img className="w-10" src={locationIcon} alt="Location Marker" />
                    <h2 className="pl-5 text-2xl font-semibold text-white">Zyret më të afërta të Keds</h2>
                  </div>
                </div>
                <div className="">
                  <p className="p-2 text-base font-light text-white">Shikoni nëse zona juaj është përfshirë <br/>në punët e planifikuara në rrjet. <br/>Kontrolloni hartën për ndërprerje</p>
                  <div className="p-2 flex flex-row justify-start items-center">
                    <img className="w-10" src={clickIcon} alt="Pointer Icon" />
                    <h2 className="pl-5 text-2xl font-semibold text-white">Kliko Këtu</h2>
                  </div>
                </div>
              </div>
              <div className="grid pt-10">
                <div className="">
                  <h2 className="p-2 text-3xl font-semibold text-white">Kompania Kosovare për Distribuim të Energjisë Elektrike KEDS sh.a.</h2>
                </div>
                <div className="flex justify-end">
                  <img className="w-48" src={mascotPeek} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>  
    </div>
  );
}

export default App;