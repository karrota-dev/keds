import { useState } from "react";

import Logo from './assets/KEDS-Logo.svg';
import campaignLogo from './assets/logo.png';
import campaignLogoDark from './assets/logo-dark.png';

import mascotPeek from './assets/mascot-peek.png';

import SwitchON from './assets/light-on.png';
import SwitchOFF from './assets/light-off.png';

import phoneIcon from './assets/phone-icon.png';
import mailIcon from './assets/mail-icon.png';
import locationIcon from './assets/location-icon.png';
import clickIcon from './assets/click-icon.png';

import ad from './assets/ad.png';
import adDark from './assets/ad-dark.png';

// import OutletIllustration from './assets/outlet-1.png';
import BulbIllustration from './assets/bulb-illustration.png';

import videoOne from './assets/img-1.jpg';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={`${ darkMode && "dark"}`}>
      <div className="dark:bg-bg-dark w-screen">
        {/* Navbar */}
        <div className="sticky top-0 z-10 bg-bg-primary dark:bg-black bg-opacity-80 bg-clip-padding navbar">
          <div className="container mx-auto">
            <div className="flex flex-row justify-between items-center">
              <div className="p-2">
                {
                  darkMode ?
                    <img src={campaignLogo} className="w-32" alt="KEDS Energy"/>
                  :
                  <img src={campaignLogoDark} className="w-32" alt="KEDS Energy"/>
                }
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
          <div className="h-screen grid grid-col-1 lg:grid-cols-2">
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
        <div className=" py-20">
          <div className="container mx-auto grid grid-cols-1 p-5 lg:p-0 lg:grid-cols-2">
            <div className="flex justify-end items-center">
                <img src={videoOne} alt="Video One" />
            </div>
            <div className="">
                      
            </div>
          </div>
        </div>
        {/* Hotel */}
        <div className=" py-20">
          <div className="flex justify-center xl:justify-end xl:pr-48">
            <h2 className="text-5xl xl:text-[5rem] font-bold text-left xl:text-right  text-accent">Sektori i <br/>Hotelerisë</h2>
          </div>
          <div className="grid grid-cols-1 xl:grid-cols-3">
                <div className=""></div>
                <div className=""></div>
                <div className="order-1">
                  <h2 className="text-xl font-bold border-b-4 border-accent flex justify-center py-5 xl:pr-20">SI TË KURSEJË ENERGJI ELEKTRIKE:</h2>
                  <p className="xl:pr-48 py-5 px-5 xl:text-right flex justify-center text-lg text-secondary">Hoteleria ofron një mundësi të jashtëzakonshme për ulje të konsumit, nëse veprohet me hapa konkret dhe të vazhdueshëm drejt ruajtjes të energjisë. <br/>Disa nga këta hapa janë:</p>
                </div>
          </div>
          <div className="grid grid-cols-1 xl:grid-cols-3 mx-auto">
            {/* Col 1 */}
            <div className="p-10 mx-auto">
              <div className="w-auto mx-auto md:w-auto xl:pl-48">
                <h1 className="p-1 text-[5rem] font-medium text-accent">01</h1>
                <p className="dark:text-white">Programojeni temperaturën e hapësirave tuaja sipas kohës së caktuar, duke pasur parasysh edhe tarifat ditë-natë (pas orës 22:00 energjia elektrike është më e lirë).</p>
              </div>
              <div className="w-auto mx-auto md:w-auto xl:pl-48">
                <h1 className="p-1 text-[5rem] font-medium text-accent">02</h1>
                <p className="dark:text-white">Për shembull, ju mund të provoni gjatë ditës të ndalni ngrohjen për dy orë, sidomos gjatë kohës kur energjia elektrike konsumohet më së shumti (17:00-20:00). Fikja e ngrohjes për dy orë nuk do të ndikojë aq shumë në uljen e temperaturës së dhomës, porse nga ana e kursimit do të lehtësojë ngarkesën e sistemit.</p>
              </div>
              <div className="w-auto mx-auto md:w-auto xl:pl-48">
                <h1 className="p-1 text-[5rem] font-medium text-accent">03</h1>
                <p className="dark:text-white">Vendoseni termostatin në atë që parashihet të jetë temperaturë e rehatshme e dhomës gjatë dimrit: nga 18-21 gradë.</p>
              </div>
              <div className="w-auto mx-auto md:w-auto xl:pl-48">
                <h1 className="p-1 text-[5rem] font-medium text-accent">04</h1>
                <p className="dark:text-white">Vendoseni termostatin në atë që parashihet të jetë temperaturë e rehatshme e dhomës gjatë dimrit: nga 18-21 gradë.</p>
              </div>
            </div>
            {/* Col 2 */}
            <div className="p-10 grid">
              <div className=""></div>
              <div className="w-auto md:w-96 mx-auto">
                <h1 className="p-1 text-[5rem] font-medium text-accent">05</h1>
                <p className="dark:text-white">Programojeni temperaturën e hapësirave tuaja sipas kohës së caktuar, duke pasur parasysh edhe tarifat ditë-natë (pas orës 22:00 energjia elektrike është më e lirë).</p>
              </div>
              <div className="w-auto md:w-96 mx-auto">
                <h1 className="p-1 text-[5rem] font-medium text-accent">06</h1>
                <p className="dark:text-white">Për shembull, ju mund të provoni gjatë ditës të ndalni ngrohjen për dy orë, sidomos gjatë kohës kur energjia elektrike konsumohet më së shumti (17:00-20:00). Fikja e ngrohjes për dy orë nuk do të ndikojë aq shumë në uljen e temperaturës së dhomës, porse nga ana e kursimit do të lehtësojë ngarkesën e sistemit.</p>
              </div>
              <div className="w-auto md:w-96 mx-auto">
                <h1 className="p-1 text-[5rem] font-medium text-accent">07</h1>
                <p className="dark:text-white">Vendoseni termostatin në atë që parashihet të jetë temperaturë e rehatshme e dhomës gjatë dimrit: nga 18-21 gradë.</p>
              </div>
              <div className="w-auto md:w-96 mx-auto"></div>
            </div>
            {/* Col 3 */}
            <div className="grid content-start">
              <div className=""></div>
              <div className="px-10 xl:pr-48">
                <h1 className="p-1 text-[5rem] font-medium text-accent">08</h1>
                <p className="dark:text-white">Për shembull, ju mund të provoni gjatë ditës të ndalni ngrohjen për dy orë, sidomos gjatë kohës kur energjia elektrike konsumohet më së shumti (17:00-20:00). Fikja e ngrohjes për dy orë nuk do të ndikojë aq shumë në uljen e temperaturës së dhomës, porse nga ana e kursimit do të lehtësojë ngarkesën e sistemit.</p>
              </div>
              <div className="px-10 xl:pr-48">
                <h1 className="p-1 text-[5rem] font-medium text-accent">09</h1>
                <p className="dark:text-white">Vendoseni termostatin në atë që parashihet të jetë temperaturë e rehatshme e dhomës gjatë dimrit: nga 18-21 gradë.</p>
              </div>
            </div>
          </div>
        </div>
        {/* Malls */}
        <div className=" py-20" style={{backgroundImage: `url(${BulbIllustration})`}}>
          <div className="grid grid-cols-1 xl:grid-cols-3">
            {/* Col 1 */}
            <div className="">
              <div className="flex justify-center xl:justify-start xl:pl-48">
                <h2 className="text-5xl md:text-[5rem] font-bold text-accent">Qendrat <br/>Tregtare</h2>
              </div>
              <div className="">
                <div className="">
                  <h2 className="text-xl font-bold border-b-4 border-accent flex justify-center py-5 pl-20">SI TË KURSEJË ENERGJI ELEKTRIKE:</h2>
                  <p className="px-10 xl:pl-48 py-5 text-left text-lg text-secondary">Hoteleria ofron një mundësi të jashtëzakonshme për ulje të konsumit, nëse veprohet me hapa konkret dhe të vazhdueshëm drejt ruajtjes të energjisë. <br/>Disa nga këta hapa janë:</p>
                </div>
              </div>
            </div>
            {/* Col 2 */}
            <div className="p-10">
              <div className="w-auto xl:w-96 mx-auto">
                <h1 className="p-1 text-[5rem] font-medium text-accent">01</h1>
                <p className="dark:text-white">Programojeni temperaturën e hapësirave tuaja sipas kohës së caktuar, duke pasur parasysh edhe tarifat ditë-natë (pas orës 22:00 energjia elektrike është më e lirë).</p>
              </div>
              <div className="w-auto xl:w-96 mx-auto">
                <h1 className="p-1 text-[5rem] font-medium text-accent">02</h1>
                <p className="dark:text-white">Për shembull, ju mund të provoni gjatë ditës të ndalni ngrohjen për dy orë, sidomos gjatë kohës kur energjia elektrike konsumohet më së shumti (17:00-20:00). Fikja e ngrohjes për dy orë nuk do të ndikojë aq shumë në uljen e temperaturës së dhomës, porse nga ana e kursimit do të lehtësojë ngarkesën e sistemit.</p>
              </div>
              <div className="w-auto xl:w-96 mx-auto">
                <h1 className="p-1 text-[5rem] font-medium text-accent">03</h1>
                <p className="dark:text-white">Vendoseni termostatin në atë që parashihet të jetë temperaturë e rehatshme e dhomës gjatë dimrit: nga 18-21 gradë.</p>
              </div>
              <div className="w-auto xl:w-96 mx-auto">
                <h1 className="p-1 text-[5rem] font-medium text-accent">04</h1>
                <p className="dark:text-white">Vendoseni termostatin në atë që parashihet të jetë temperaturë e rehatshme e dhomës gjatë dimrit: nga 18-21 gradë.</p>
              </div>
            </div>
            {/* Col 3 */}
            <div className="p-10 xl:pr-48 grid">
              <div className=""></div>
              <div className="">
                <h1 className="p-1 text-[5rem] font-medium text-accent">05</h1>
                <p className="dark:text-white">Programojeni temperaturën e hapësirave tuaja sipas kohës së caktuar, duke pasur parasysh edhe tarifat ditë-natë (pas orës 22:00 energjia elektrike është më e lirë).</p>
              </div>
              <div className="">
                <h1 className="p-1 text-[5rem] font-medium text-accent">06</h1>
                <p className="dark:text-white">Për shembull, ju mund të provoni gjatë ditës të ndalni ngrohjen për dy orë, sidomos gjatë kohës kur energjia elektrike konsumohet më së shumti (17:00-20:00). Fikja e ngrohjes për dy orë nuk do të ndikojë aq shumë në uljen e temperaturës së dhomës, porse nga ana e kursimit do të lehtësojë ngarkesën e sistemit.</p>
              </div>
              <div className=""></div>
            </div>
          </div>
        </div>
        {/* Gastronomy */}
        <div className=" py-20">
          {/* <div className="flex justify-end container mx-auto">
            <h2 className="text-[5rem] font-bold text-accent">Gastronomia</h2>
          </div> */}
          <div className="flex justify-center xl:justify-end xl:pr-48">
            <h2 className="text-5xl xl:text-[5rem] font-bold text-left xl:text-right  text-accent">Gastronomia</h2>
          </div>
          <div className="grid grid-cols-1 xl:grid-cols-3">
                <div className=""></div>
                <div className=""></div>
                <div className="order-1">
                  <h2 className="text-xl font-bold border-b-4 border-accent flex justify-center py-5 xl:pr-20">SI TË KURSEJË ENERGJI ELEKTRIKE:</h2>
                  <p className="xl:pr-48 py-5 px-5 xl:text-right flex justify-center text-lg text-secondary">Hoteleria ofron një mundësi të jashtëzakonshme për ulje të konsumit, nëse veprohet me hapa konkret dhe të vazhdueshëm drejt ruajtjes të energjisë. <br/>Disa nga këta hapa janë:</p>
                </div>
          </div>
          <div className="grid grid-cols-1 xl:grid-cols-3 ">
            <div className="p-10 grid content-start">
              <div className="xl:pl-48">
                <h1 className="p-1 text-[5rem] font-medium text-accent">05</h1>
                <p className="dark:text-white">Programojeni temperaturën e hapësirave tuaja sipas kohës së caktuar, duke pasur parasysh edhe tarifat ditë-natë (pas orës 22:00 energjia elektrike është më e lirë).</p>
              </div>
              <div className="xl:pl-48">
                <h1 className="p-1 text-[5rem] font-medium text-accent">05</h1>
                <p className="dark:text-white">Programojeni temperaturën e hapësirave tuaja sipas kohës së caktuar, duke pasur parasysh edhe tarifat ditë-natë (pas orës 22:00 energjia elektrike është më e lirë).</p>
              </div>
              <div className="xl:pl-48">
                <h1 className="p-1 text-[5rem] font-medium text-accent">06</h1>
                <p className="dark:text-white">Për shembull, ju mund të provoni gjatë ditës të ndalni ngrohjen për dy orë, sidomos gjatë kohës kur energjia elektrike konsumohet më së shumti (17:00-20:00). Fikja e ngrohjes për dy orë nuk do të ndikojë aq shumë në uljen e temperaturës së dhomës, porse nga ana e kursimit do të lehtësojë ngarkesën e sistemit.</p>
              </div>
              <div className="xl:pl-48"></div>
            </div>
            <div className="p-10 grid content-end">
              <div className="w-auto xl:w-96 mx-auto">
                <h1 className="p-1 text-[5rem] font-medium text-accent">01</h1>
                <p className="dark:text-white">Programojeni temperaturën e hapësirave tuaja sipas kohës së caktuar, duke pasur parasysh edhe tarifat ditë-natë (pas orës 22:00 energjia elektrike është më e lirë).</p>
              </div>
              <div className="w-auto xl:w-96 mx-auto">
                <h1 className="p-1 text-[5rem] font-medium text-accent">02</h1>
                <p className="dark:text-white">Për shembull, ju mund të provoni gjatë ditës të ndalni ngrohjen për dy orë, sidomos gjatë kohës kur energjia elektrike konsumohet më së shumti (17:00-20:00). Fikja e ngrohjes për dy orë nuk do të ndikojë aq shumë në uljen e temperaturës së dhomës, porse nga ana e kursimit do të lehtësojë ngarkesën e sistemit.</p>
              </div>
              <div className="w-auto xl:w-96 mx-auto">
                <h1 className="p-1 text-[5rem] font-medium text-accent">03</h1>
                <p className="dark:text-white">Vendoseni termostatin në atë që parashihet të jetë temperaturë e rehatshme e dhomës gjatë dimrit: nga 18-21 gradë.</p>
              </div>
            </div>
            <div className="grid  xl:grid-rows-3">
              <div className="hidden md:flex"></div>
              <div className="px-10 xl:pr-48">
                <h1 className="p-1 text-[5rem] font-medium text-accent">07</h1>
                <p className="dark:text-white">Vendoseni termostatin në atë që parashihet të jetë temperaturë e rehatshme e dhomës gjatë dimrit: nga 18-21 gradë.</p>
              </div>
            </div>
          </div>
        </div>
        {/* Video Two */}
        <div className=" py-20">
          <div className="container mx-auto grid grid-cols-1 p-5 lg:p-0 lg:grid-cols-2">
            <div className="">
                      
            </div>
            <div className="flex justify-end items-center">
                <img src={videoOne} alt="Video One" />
            </div>
          </div>
        </div>
        {/* Institutions */}
        <div className=" py-20">
          <div className="xl:pl-48">
            <h2 className="text-5xl flex justify-center xl:justify-start xl:text-[5rem] font-bold text-accent">Kompanitë dhe <br/>Institucionet</h2>
          </div> 
          <div className="grid grid-cols-1 xl:grid-cols-3">
            {/* Col 1 */}
            <div className="">
              {/* <div className="">
                <h2 className="text-[5rem] font-bold text-accent leading-tight pl-48">Kompanitë dhe <br/>Institucionet</h2>
              </div> */}
              <div className="">
                <h2 className="text-xl font-bold border-b-4 border-accent flex justify-center py-5 xl:pl-20">SI TË KURSEJË ENERGJI ELEKTRIKE:</h2>
                <p className="px-10 xl:pl-48 py-5 text-left text-lg text-secondary">Hoteleria ofron një mundësi të jashtëzakonshme për ulje të konsumit, nëse veprohet me hapa konkret dhe të vazhdueshëm drejt ruajtjes të energjisë. <br/>Disa nga këta hapa janë:</p>
              </div>
            </div>
            {/* Col 2 */}
            <div className="p-10 w-auto xl:w-96 grid mx-auto">
              <div className="h-32 hidden xl:flex">
              </div>
              <div className="">
                <h1 className="p-1 text-[5rem] font-medium text-accent">01</h1>
                <p className="dark:text-white">Programojeni temperaturën e hapësirave tuaja sipas kohës së caktuar, duke pasur parasysh edhe tarifat ditë-natë (pas orës 22:00 energjia elektrike është më e lirë).</p>
              </div>
              <div className="">
                <h1 className="p-1 text-[5rem] font-medium text-accent">02</h1>
                <p className="dark:text-white">Për shembull, ju mund të provoni gjatë ditës të ndalni ngrohjen për dy orë, sidomos gjatë kohës kur energjia elektrike konsumohet më së shumti (17:00-20:00). Fikja e ngrohjes për dy orë nuk do të ndikojë aq shumë në uljen e temperaturës së dhomës, porse nga ana e kursimit do të lehtësojë ngarkesën e sistemit.</p>
              </div>
            </div>
            {/* Col 3 */}
            <div className="p-10 w-auto xl:w-96 content-start">
              <div className="">
                <h1 className="p-1 text-[5rem] font-medium text-accent">01</h1>
                <p className="dark:text-white">Programojeni temperaturën e hapësirave tuaja sipas kohës së caktuar, duke pasur parasysh edhe tarifat ditë-natë (pas orës 22:00 energjia elektrike është më e lirë).</p>
              </div>
              <div className="">
                <h1 className="p-1 text-[5rem] font-medium text-accent">02</h1>
                <p className="dark:text-white">Për shembull, ju mund të provoni gjatë ditës të ndalni ngrohjen për dy orë, sidomos gjatë kohës kur energjia elektrike konsumohet më së shumti (17:00-20:00). Fikja e ngrohjes për dy orë nuk do të ndikojë aq shumë në uljen e temperaturës së dhomës, porse nga ana e kursimit do të lehtësojë ngarkesën e sistemit.</p>
              </div>
            </div>
          </div>
        </div>
        {/* HouseKeeping */}
        <div className="py-20">
          <div className="flex justify-center xl:justify-end xl:pr-48">
            <h2 className="text-5xl xl:text-[5rem] font-bold text-left xl:text-right  text-accent">Amviseria</h2>
          </div>
          <div className="grid grid-cols-1 xl:grid-cols-3">
                <div className=""></div>
                <div className=""></div>
                <div className="order-1">
                  <h2 className="text-xl font-bold border-b-4 border-accent flex justify-center py-5 xl:pr-20">SI TË KURSEJË ENERGJI ELEKTRIKE:</h2>
                  <p className="xl:pr-48 py-5 px-5 xl:text-right flex justify-center text-lg text-secondary">Amvisëria si një ndër shpenzuesit më të mëdhenj të energjisë elektrike mund të kontribuojë shumë në uljen e konsumit, sidomos aty ku ka mundësi të madhe të kursimit. Nëse çdo konsumator kursen energji elektrike për vete dhe familjen e tij, ne në fakt jemi duke kursyer energji edhe për konsumatorët e grupeve të ndjeshme, të cilëve mund të ju nevojitet energjia elektrike më shumë se kurrë. Sipas ekspertëve të KEDS, këto janë disa nga masat që konsumatorët shtëpiak duhet t’i ndërmarrin për ta kursyer energjinë elektrike: Ditëve në vijim do ju përcjellim udhëzime për kursim edhe për kategori kategori të tjera!</p>
                </div>
          </div>
          <div className="grid grid-cols-1 xl:grid-cols-3">
            {/* Col 1 */}
            <div className="grid grid-rows-5 px-5 xl:pl-48">
                <div className="">
                  <h1 className="p-1 text-[5rem] font-medium text-accent">05</h1>
                  <p className="dark:text-white">Programojeni temperaturën e hapësirave tuaja sipas kohës së caktuar, duke pasur parasysh edhe tarifat ditë-natë (pas orës 22:00 energjia elektrike është më e lirë).</p>
                </div>
                <div className="">
                  <h1 className="p-1 text-[5rem] font-medium text-accent">06</h1>
                  <p className="dark:text-white">Për shembull, ju mund të provoni gjatë ditës të ndalni ngrohjen për dy orë, sidomos gjatë kohës kur energjia elektrike konsumohet më së shumti (17:00-20:00). Fikja e ngrohjes për dy orë nuk do të ndikojë aq shumë në uljen e temperaturës së dhomës, porse nga ana e kursimit do të lehtësojë ngarkesën e sistemit.</p>
                </div>
                <div className="">
                  <h1 className="p-1 text-[5rem] font-medium text-accent">07</h1>
                  <p className="dark:text-white">Vendoseni termostatin në atë që parashihet të jetë temperaturë e rehatshme e dhomës gjatë dimrit: nga 18-21 gradë.</p>
                </div>
                <div className="">
                  <h1 className="p-1 text-[5rem] font-medium text-accent">07</h1>
                  <p className="dark:text-white">Vendoseni termostatin në atë që parashihet të jetë temperaturë e rehatshme e dhomës gjatë dimrit: nga 18-21 gradë.</p>
                </div>
                <div className="hidden xl:flex"></div>
            </div>
            {/* Col 2 */}
            <div className="grid grid-rows-4 px-5 w-auto xl:w-96 mx-auto">
                <div className="hidden xl:flex"></div>
                <div className="">
                  <h1 className="p-1 text-[5rem] font-medium text-accent">05</h1>
                  <p className="dark:text-white">Programojeni temperaturën e hapësirave tuaja sipas kohës së caktuar, duke pasur parasysh edhe tarifat ditë-natë (pas orës 22:00 energjia elektrike është më e lirë).</p>
                </div>
                <div className="">
                  <h1 className="p-1 text-[5rem] font-medium text-accent">06</h1>
                  <p className="dark:text-white">Për shembull, ju mund të provoni gjatë ditës të ndalni ngrohjen për dy orë, sidomos gjatë kohës kur energjia elektrike konsumohet më së shumti (17:00-20:00). Fikja e ngrohjes për dy orë nuk do të ndikojë aq shumë në uljen e temperaturës së dhomës, porse nga ana e kursimit do të lehtësojë ngarkesën e sistemit.</p>
                </div>
                <div className="">
                  <h1 className="p-1 text-[5rem] font-medium text-accent">07</h1>
                  <p className="dark:text-white">Vendoseni termostatin në atë që parashihet të jetë temperaturë e rehatshme e dhomës gjatë dimrit: nga 18-21 gradë.</p>
                </div>
            </div>
            <div className="hidden xl:flex">

            </div>
          </div>
        </div>
        {/* Ad */}
        <div className="mx-auto py-20">
          {
            darkMode ?
              <img src={adDark} alt="" srcset="" />
            :
              <img src={ad} alt="" srcset="" />
          }
        </div>
        {/* Corner Shops */}
        <div className=" py-20">
          <div className="xl:pl-48">
            <h2 className="text-5xl flex justify-center xl:text-[5rem] font-bold text-accent">Dyqanet <br/>e Vogla</h2>
          </div>
          <div className="grid grid-cols-1 xl:grid-cols-3">
            {/* Col 1 */}
            <div className="">
              <div className="">
                <h2 className="text-xl font-bold border-b-4 border-accent flex justify-center py-5 xl:pl-20">SI TË KURSEJË ENERGJI ELEKTRIKE:</h2>
              </div>
              <div className="px-10 xl:pl-48">
                <div className="">
                  <h1 className="p-1 text-[5rem] font-medium text-accent">01</h1>
                  <p className="dark:text-white">Programojeni temperaturën e hapësirave tuaja sipas kohës së caktuar, duke pasur parasysh edhe tarifat ditë-natë (pas orës 22:00 energjia elektrike është më e lirë).</p>
                </div>
                <div className="">
                  <h1 className="p-1 text-[5rem] font-medium text-accent">02</h1>
                  <p className="dark:text-white">Për shembull, ju mund të provoni gjatë ditës të ndalni ngrohjen për dy orë, sidomos gjatë kohës kur energjia elektrike konsumohet më së shumti (17:00-20:00). Fikja e ngrohjes për dy orë nuk do të ndikojë aq shumë në uljen e temperaturës së dhomës, porse nga ana e kursimit do të lehtësojë ngarkesën e sistemit.</p>
                </div>
              </div>
            </div>
            {/* Col 2 */}
              <div className="p-10 w-96 grid mx-auto">
                <div className="h-32 hidden xl:flex"></div>
                <div className="">
                  <h1 className="p-1 text-[5rem] font-medium text-accent">01</h1>
                  <p className="dark:text-white">Programojeni temperaturën e hapësirave tuaja sipas kohës së caktuar, duke pasur parasysh edhe tarifat ditë-natë (pas orës 22:00 energjia elektrike është më e lirë).</p>
                </div>
                <div className="">
                  <h1 className="p-1 text-[5rem] font-medium text-accent">02</h1>
                  <p className="dark:text-white">Për shembull, ju mund të provoni gjatë ditës të ndalni ngrohjen për dy orë, sidomos gjatë kohës kur energjia elektrike konsumohet më së shumti (17:00-20:00). Fikja e ngrohjes për dy orë nuk do të ndikojë aq shumë në uljen e temperaturës së dhomës, porse nga ana e kursimit do të lehtësojë ngarkesën e sistemit.</p>
                </div>
            </div>
            {/* Col 3 */}
            <div className="p-10 xl:pr-48 grid content-start">
              <div className="">
                <h1 className="p-1 text-[5rem] font-medium text-accent">05</h1>
                <p className="dark:text-white">Programojeni temperaturën e hapësirave tuaja sipas kohës së caktuar, duke pasur parasysh edhe tarifat ditë-natë (pas orës 22:00 energjia elektrike është më e lirë).</p>
              </div>
              <div className="">
                <h1 className="p-1 text-[5rem] font-medium text-accent">06</h1>
                <p className="dark:text-white">Për shembull, ju mund të provoni gjatë ditës të ndalni ngrohjen për dy orë, sidomos gjatë kohës kur energjia elektrike konsumohet më së shumti (17:00-20:00). Fikja e ngrohjes për dy orë nuk do të ndikojë aq shumë në uljen e temperaturës së dhomës, porse nga ana e kursimit do të lehtësojë ngarkesën e sistemit.</p>
              </div>
            </div>
          </div>
        </div>
        {/* Industries */}
        <div className=" py-20">
          <div className="flex justify-center xl:justify-end xl:pr-48">
            <h2 className="text-5xl xl:text-[5rem] font-bold text-left xl:text-right  text-accent">Industrise</h2>
          </div>
          <div className="grid grid-cols-1 xl:grid-cols-3">
                <div className=""></div>
                <div className=""></div>
                <div className="order-1">
                  <h2 className="text-xl font-bold border-b-4 border-accent flex justify-center py-5 xl:pr-20">SI TË KURSEJË ENERGJI ELEKTRIKE:</h2>
                  <p className="xl:pr-48 py-5 px-5 xl:text-right flex justify-center text-lg text-secondary">Hoteleria ofron një mundësi të jashtëzakonshme për ulje të konsumit, nëse veprohet me hapa konkret dhe të vazhdueshëm drejt ruajtjes të energjisë. <br/>Disa nga këta hapa janë:</p>
                </div>
          </div>
          <div className="grid grid-cols-1 xl:grid-cols-3">
            {/* Col 1 */}
            <div className="grid grid-row-5 xl:pl-48">
              <div className="px-10">
                <h1 className="p-1 text-[5rem] font-medium text-accent">08</h1>
                <p className="dark:text-white">Për shembull, ju mund të provoni gjatë ditës të ndalni ngrohjen për dy orë, sidomos gjatë kohës kur energjia elektrike konsumohet më së shumti (17:00-20:00). Fikja e ngrohjes për dy orë nuk do të ndikojë aq shumë në uljen e temperaturës së dhomës, porse nga ana e kursimit do të lehtësojë ngarkesën e sistemit.</p>
              </div>
              <div className="px-10">
                <h1 className="p-1 text-[5rem] font-medium text-accent">09</h1>
                <p className="dark:text-white">Vendoseni termostatin në atë që parashihet të jetë temperaturë e rehatshme e dhomës gjatë dimrit: nga 18-21 gradë.</p>
              </div>
              <div className="px-10">
                <h1 className="p-1 text-[5rem] font-medium text-accent">09</h1>
                <p className="dark:text-white">Vendoseni termostatin në atë që parashihet të jetë temperaturë e rehatshme e dhomës gjatë dimrit: nga 18-21 gradë.</p>
              </div>
              <div className=""></div>
              <div className=""></div>
            </div>
            {/* Col 2 */}
            <div className="grid grid-rows-4 w-auto xl:w-96 mx-auto">
              <div className="hidden xl:flex"></div>
              <div className="px-10">
                <h1 className="p-1 text-[5rem] font-medium text-accent">08</h1>
                <p className="dark:text-white">Për shembull, ju mund të provoni gjatë ditës të ndalni ngrohjen për dy orë, sidomos gjatë kohës kur energjia elektrike konsumohet më së shumti (17:00-20:00). Fikja e ngrohjes për dy orë nuk do të ndikojë aq shumë në uljen e temperaturës së dhomës, porse nga ana e kursimit do të lehtësojë ngarkesën e sistemit.</p>
              </div>
              <div className="px-10">
                <h1 className="p-1 text-[5rem] font-medium text-accent">09</h1>
                <p className="dark:text-white">Vendoseni termostatin në atë që parashihet të jetë temperaturë e rehatshme e dhomës gjatë dimrit: nga 18-21 gradë.</p>
              </div>
              <div className="px-10">
                <h1 className="p-1 text-[5rem] font-medium text-accent">09</h1>
                <p className="dark:text-white">Vendoseni termostatin në atë që parashihet të jetë temperaturë e rehatshme e dhomës gjatë dimrit: nga 18-21 gradë.</p>
              </div>
            </div>
            {/* Col 3 */}
            <div className="">
              <div className="grid grid-rows-4">
                <div className="px-10 pr-48">
                  <h1 className="p-1 text-[5rem] font-medium text-accent">09</h1>
                  <p className="dark:text-white">Vendoseni termostatin në atë që parashihet të jetë temperaturë e rehatshme e dhomës gjatë dimrit: nga 18-21 gradë.</p>
                </div>
              </div>
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
                    <img className="w-12 md:w-16" src={SwitchOFF} alt="" srcset="" /> 
                  : 
                    <img className="w-12 md:w-16" src={SwitchON} alt="" srcset="" />
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
            <div className="grid px-5 grid-cols-1 xl:p-0 lg:grid-cols-3 ">
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


// {/* Savings Tips / Home */}
// <div className=" py-20">
// <div className="container mx-auto">
//   <h1 className="p-2 text-[5rem] font-bold dark:text-white">Këshilla <span className="text-accent">Kursimi</span></h1>
// </div>
// <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 container mx-auto">
//   {/* Col 1 */}
//   <div className="p-2 w-96">
//     <div className="">
//       <h2 className="text-[5rem] font-bold text-accent">Shtëpi</h2>
//     </div>
//   </div>
//   {/* Col 2 */}
//   <div className="p-2 w-96 grid content-end">
//     <div className="h-44">
//     </div>
//     <div className="">
//       <h1 className="p-1 text-[5rem] font-medium text-accent">01</h1>
//       <p className="dark:text-white">Programojeni temperaturën e hapësirave tuaja sipas kohës së caktuar, duke pasur parasysh edhe tarifat ditë-natë (pas orës 22:00 energjia elektrike është më e lirë).</p>
//     </div>
//     <div className="">
//       <h1 className="p-1 text-[5rem] font-medium text-accent">02</h1>
//       <p className="dark:text-white">Për shembull, ju mund të provoni gjatë ditës të ndalni ngrohjen për dy orë, sidomos gjatë kohës kur energjia elektrike konsumohet më së shumti (17:00-20:00). Fikja e ngrohjes për dy orë nuk do të ndikojë aq shumë në uljen e temperaturës së dhomës, porse nga ana e kursimit do të lehtësojë ngarkesën e sistemit.</p>
//     </div>
//     <div className="">
//       <h1 className="p-1 text-[5rem] font-medium text-accent">03</h1>
//       <p className="dark:text-white">Vendoseni termostatin në atë që parashihet të jetë temperaturë e rehatshme e dhomës gjatë dimrit: nga 18-21 gradë.</p>
//     </div>
//   </div>
//   {/* Col 3 */}
//   <div className="p-2 w-96 grid content-start">
//     <div className="">
//       <h1 className="p-1 text-[5rem] font-medium text-accent">04</h1>
//       <p className="dark:text-white">Mbajini dyert e dhomës ose të zyrës suaj sa më shumë mbyllur për të ruajtur nxehtësinë.</p>
//     </div>
//     <div className="">
//       <h1 className="p-1 text-[5rem] font-medium text-accent">05</h1>
//       <p className="dark:text-white">Para se të flini, zvogëlojeni temperaturën e termostatit, sepse është më e shëndetshme dhe do të kurseni energji elektrike.</p>
//     </div>
//     <div className="">
//       <h1 className="p-1 text-[5rem] font-medium text-accent">06</h1>
//       <p className="dark:text-white">Ndaleni ngrohjen në ambientet ku nuk qëndroni gjatë (dhomë të gjumit, korridore, banjo).</p>
//     </div>
//   </div>
// </div>
// </div>










