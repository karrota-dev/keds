import { useState, useRef } from "react";

import Logo from './assets/KEDS-Logo.svg';
import LogoWhite from './assets/keds-light.png';

import campaignLogo from './assets/logo.png';
import campaignLogoDark from './assets/logo-dark.png';

import mascotPeek from './assets/mascot-peek.png';

import SwitchON from './assets/light-on.png';
import SwitchOFF from './assets/light-off.png';

import LightON from './assets/bulb-on.png';
import LightOFF from './assets/bulb-off.png';
 
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

  const [isNavOpen, setNavOpen] = useState(false);

  const homeRef = useRef(null);
  const hotelRef = useRef(null);
  const mallRef = useRef(null);
  const gastronomyRef = useRef(null);
  const institutionRef = useRef(null);
  const housekeepingRef = useRef(null);
  const shopRef = useRef(null);
  const industryRef = useRef(null);

  const homeScroll = () => homeRef.current.scrollIntoView();
  const hotelScroll = () => hotelRef.current.scrollIntoView();
  const mallScroll = () => mallRef.current.scrollIntoView();
  const gastronomyScroll = () => gastronomyRef.current.scrollIntoView();
  const institutionScroll = () => institutionRef.current.scrollIntoView();
  const housekeepingScroll = () => housekeepingRef.current.scrollIntoView();
  const shopScroll = () => shopRef.current.scrollIntoView();
  const industryScroll = () => industryRef.current.scrollIntoView();

  const [randomWord, setRandomWord] = useState(null);

  const words = ['Terr', 'Ej, kadale', 'blah, blah, blah...'];
  const wordMixer = () => {
    // words[Math.floor(Math.random()*words.length)];
    setRandomWord([Math.floor(Math.random()*words.length)]);
  }

  // function darkWords() {
  //   if(darkMode) {
  //     wordMixer();
  //   } else {
  //     "Fike Dritën!"
  //   }
  // }

  // console.log(wordMixer);

  const [isNgrohjaOpen, setNgrohjaOpen] = useState(true);
  const [isBojleriOpen, setBojleriOpen] = useState(false);
  const [isGatimiOpen, setGatimiOpen] = useState(false);
  const [isFrigoriferiOpen, setFrigoriferiOpen] = useState(false);
  const [isKondicioneriOpen, setKondicioneriOpen] = useState(false);
  const [isPajisjeOpen, setPajisjeOpen] = useState(false);

  return (
    <div className={`${ darkMode && "dark"}`}>
      <div className="dark:bg-bg-dark w-screen">
        {/* Navbar */}
        <div className="sticky top-0">
        <div className="sticky top-0 z-10 bg-bg-primary dark:bg-bg-dark dark:bg-opacity-90  bg-opacity-80 bg-clip-padding navbar">
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
                <button onClick={() => setNavOpen(!isNavOpen)}>
                  <h4 className="flex justify-center items-center text-xl font-semibold hover:text-accent dark:hover:text-accent cursor-pointer dark:text-white">
                    Këshilla Kursimi 
                    {
                      isNavOpen ?
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" class="w-6 h-6 p-1 hover:text-accent dark:hover:text-accent">
                          <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      :
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" className="w-6 h-6 p-1 hover:text-accent dark:hover:text-accent">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                        </svg>
                    }
                  </h4>
                </button>

              </div>
              <div className="p-2">
                {
                  darkMode ?
                    <img className="w-28" src={LogoWhite} alt="KEDS Energy"/>
                  :
                    <img src={Logo} alt="KEDS Energy"/>
                }
              </div>
            </div>
          </div>
        </div>
        <div className="relative flex justify-center">
        <div className="p-1 absolute ">
          <div className={isNavOpen ? 'flex justify-center text-center' : 'hidden'}>
            <div className="w-auto md:w-96 p-5 bg-bg-primary dark:bg-black dark:bg-opacity-90 rounded-3xl bg-opacity-80 bg-clip-padding navbar">
              <div className="">
                <h2 onClick={() => {
                  homeScroll(),
                  setNavOpen()
                }} className="dark:text-white font-medium text-lg cursor-pointer hover:text-accent dark:hover:hover:text-accent">Shtëpi</h2>
                <h2 onClick={() => {
                  hotelScroll(),
                  setNavOpen()
                }} className="dark:text-white font-medium text-lg cursor-pointer hover:text-accent dark:hover:hover:text-accent">Hotel</h2>
                <h2 onClick={() => {
                  mallScroll(),
                  setNavOpen()
                }} className="dark:text-white font-medium text-lg cursor-pointer hover:text-accent dark:hover:hover:text-accent">Qendra Tregtare</h2>
                <h2 onClick={() => {
                  gastronomyScroll(),
                  setNavOpen()
                }} className="dark:text-white font-medium text-lg cursor-pointer hover:text-accent dark:hover:hover:text-accent">Gastronomi</h2>
                <h2 onClick={() => {
                  institutionScroll(),
                  setNavOpen()
                }} className="dark:text-white font-medium text-lg cursor-pointer hover:text-accent dark:hover:hover:text-accent">Institucione</h2>
                <h2 onClick={() => {
                  housekeepingScroll(),
                  setNavOpen()
                }} className="dark:text-white font-medium text-lg cursor-pointer hover:text-accent dark:hover:hover:text-accent">Amviseria</h2>
                <h2 onClick={() => {
                  shopScroll(),
                  setNavOpen()
                }} className="dark:text-white font-medium text-lg cursor-pointer hover:text-accent dark:hover:hover:text-accent">Dyqane</h2>
                <h2 onClick={() => {
                  industryScroll(),
                  setNavOpen()
                }} className="dark:text-white font-medium text-lg cursor-pointer hover:text-accent dark:hover:hover:text-accent">Industri</h2>
              </div>
            </div>
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
            <div className="hidden md:flex justify-center items-start">
              {
                darkMode ?
                  <img className="h-screen" src={LightOFF} alt="" />
                :
                  <img className="h-screen" src={LightON} alt="" />
              }
            </div>
          </div>
        </div>
        {/* Savings Tips */}
        <div className="container mx-auto py-5">
          <h1 className="p-2 text-5xl flex flex-col items-center md:text-[5rem] font-bold dark:text-white">Këshilla <span className="text-accent">Kursimi</span></h1>
        </div>
        {/* Home */}
        <div ref={homeRef} className="py-20">
          
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
            {/* Col 1 */}
            <div className="pr-5">
              <div className="flex justify-center py-5">
                <h2 className="text-5xl md:text-[5rem] font-bold text-accent">Shtëpi</h2>
              </div>
              {/* Sub Menu */}
              <div className="grid grid-cols-1 md:grid-cols-2">
                {/* Col 1 */}
                <div className="pr-5">
                  <p className="text-accent flex justify-center py-2 md:justify-end ">Si të kursejmë energji nga:</p>
                  <div className="pr-28 md:pr-5">
                    <h2 
                    onClick={() => {
                      setNgrohjaOpen(true),
                      setBojleriOpen(false),
                      setGatimiOpen(false),
                      setFrigoriferiOpen(false),
                      setKondicioneriOpen(false),
                      setPajisjeOpen(false)
                    }}
                    className={`cursor-pointer text-xl font-bold  dark:text-white flex justify-end py-2 pl-10 ${isNgrohjaOpen ? 'border-accent border-b-4' : 'border-b-2 border-secondary dark:border-white'}`}>NGROHJA</h2>
                    <h2
                      onClick={() => {
                        setNgrohjaOpen(false),
                        setBojleriOpen(true),
                        setGatimiOpen(false),
                        setFrigoriferiOpen(false),
                        setKondicioneriOpen(false),
                        setPajisjeOpen(false)
                      }}
                      className={`cursor-pointer text-xl font-bold dark:text-white flex justify-end py-2 pl-10 ${isBojleriOpen ? 'border-accent border-b-4' : 'border-b-2 border-secondary dark:border-white'}`}>BOJLERI</h2>
                    <h2
                      onClick={() => {
                        setNgrohjaOpen(false),
                        setBojleriOpen(false),
                        setGatimiOpen(true),
                        setFrigoriferiOpen(false),
                        setKondicioneriOpen(false),
                        setPajisjeOpen(false)
                      }} 
                      className={`cursor-pointer text-xl font-bold dark:text-white flex justify-end py-2 pl-10 ${isGatimiOpen ? 'border-accent border-b-4' : 'border-b-2 border-secondary dark:border-white'}`}>GATIMI</h2>
                    <h2
                      onClick={() => {
                        setNgrohjaOpen(false),
                        setBojleriOpen(false),
                        setGatimiOpen(false),
                        setFrigoriferiOpen(true),
                        setKondicioneriOpen(false),
                        setPajisjeOpen(false)
                      }} 
                      className={`cursor-pointer text-xl font-bold dark:text-white flex justify-end py-2 pl-10 ${isFrigoriferiOpen ? 'border-accent border-b-4' : 'border-b-2 border-secondary dark:border-white'}`}>FRIGORIFERI</h2>
                    <h2 
                      onClick={() => {
                        setNgrohjaOpen(false),
                        setBojleriOpen(false),
                        setGatimiOpen(false),
                        setFrigoriferiOpen(false),
                        setKondicioneriOpen(true),
                        setPajisjeOpen(false)
                      }}
                      className={`cursor-pointer text-xl font-bold dark:text-white flex justify-end py-2 pl-10 ${isKondicioneriOpen ? 'border-accent border-b-4' : 'border-b-2 border-secondary dark:border-white'}`}>KONDICIONERI</h2>
                    <h2
                      onClick={() => {
                        setNgrohjaOpen(false),
                        setBojleriOpen(false),
                        setGatimiOpen(false),
                        setFrigoriferiOpen(false),
                        setKondicioneriOpen(false),
                        setPajisjeOpen(true)
                      }} 
                      className={`cursor-pointer text-xl font-bold dark:text-white flex justify-end py-2 pl-10 ${isPajisjeOpen ? 'border-accent border-b-4' : 'border-b-2 border-secondary dark:border-white'}`}>PAJISJET TJERA</h2>
                  </div>
                </div>
                {/* Col 2 */}
                <div className="py-2 px-5 md:px-0">
                  <p className={`dark:text-white ${isNgrohjaOpen ? 'flex' : 'hidden'}`}>Ngrohja me energji elektrike ngarkon tej mase sistemin elektroenergjetik, meqë dihet që prodhimi vendor nuk e mbulon kërkesën për energji gjatë dimrit, ku për shkak të krizës energjetike globale, çmimet e importit janë të papërballueshme. <br/><br/>Gjetja e një burimi tjetër për ngrohje është esencial këtë dimër, sepse në vend që një sasi e madhe e energjisë elektrike të shkojë për ngrohje, ajo do të kursehet dhe do të jetë e bollshme për t’u ndarë proporcionalisht për të gjithë konsumatorët. <br/><br/>Në rastet kur nuk keni alternativë tjetër për ngrohje, përpos energjisë elektrike, ju lusim t’i zbatoni këto mënyra të kursimit të energjisë, si më poshtë, që dukshëm do t’ju ndihmojnë t’i ulni faturat tuaja të energjisë elektrike dhe, në këmbim, do ta ndihmojnë gjendjen e ngarkuar të sistemit elektroenergjetik:</p>
                  <p className={`dark:text-white ${isBojleriOpen ? 'flex' : 'hidden'}`}>AAAAAAAAA!</p>
                </div>
              </div>
            </div>
            {/* Col 2 */}
            <div className="p-2 px-5 w-96 mx-auto grid content-end">
              <div className="h-44 md:flex hidden">
              </div>
              <div className="">
                <h1 className="p-1 text-[5rem] font-medium text-accent">01</h1>
                <p className="dark:text-white">Programojeni temperaturën e hapësirave tuaja sipas kohës së caktuar, duke pasur parasysh edhe tarifat ditë-natë (pas orës 22:00 energjia elektrike është më e lirë).</p>
              </div>
              <div className="">
                <h1 className="p-1 text-[5rem] font-medium text-accent">02</h1>
                <p className="dark:text-white">Për shembull, ju mund të provoni gjatë ditës të ndalni ngrohjen për dy orë, sidomos gjatë kohës kur energjia elektrike konsumohet më së shumti (17:00-20:00). Fikja e ngrohjes për dy orë nuk do të ndikojë aq shumë në uljen e temperaturës së dhomës, porse nga ana e kursimit do të lehtësojë ngarkesën e sistemit.</p>
              </div>
              <div className="">
                <h1 className="p-1 text-[5rem] font-medium text-accent">03</h1>
                <p className="dark:text-white">Vendoseni termostatin në atë që parashihet të jetë temperaturë e rehatshme e dhomës gjatë dimrit: nga 18-21 gradë.</p>
              </div>
            </div>
            {/* Col 3 */}
            <div className="p-2 px-5 w-96 grid content-start">
              <div className="">
                <h1 className="p-1 text-[5rem] font-medium text-accent">04</h1>
                <p className="dark:text-white">Mbajini dyert e dhomës ose të zyrës suaj sa më shumë mbyllur për të ruajtur nxehtësinë.</p>
              </div>
              <div className="">
                <h1 className="p-1 text-[5rem] font-medium text-accent">05</h1>
                <p className="dark:text-white">Para se të flini, zvogëlojeni temperaturën e termostatit, sepse është më e shëndetshme dhe do të kurseni energji elektrike.</p>
              </div>
              <div className="">
                <h1 className="p-1 text-[5rem] font-medium text-accent">06</h1>
                <p className="dark:text-white">Ndaleni ngrohjen në ambientet ku nuk qëndroni gjatë (dhomë të gjumit, korridore, banjo).</p>
              </div>
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
        <div ref={hotelRef} className=" py-20">
          <div className="flex justify-center xl:justify-end xl:pr-48">
            <h2 className="text-5xl xl:text-[5rem] font-bold text-center xl:text-right  text-accent">Sektori i <br/>Hotelerisë</h2>
          </div>
          <div className="grid grid-cols-1 xl:grid-cols-3">
                <div className=""></div>
                <div className=""></div>
                <div className="order-1">
                  <h2 className="text-xl font-bold border-b-4 border-accent dark:text-white flex justify-start py-5 xl:pr-20">SI TË KURSEJË ENERGJI ELEKTRIKE:</h2>
                  <p className="xl:pr-48 py-5 px-5 xl:text-right flex justify-center text-lg text-secondary">Hoteleria ofron një mundësi të jashtëzakonshme për ulje të konsumit, nëse veprohet me hapa konkret dhe të vazhdueshëm drejt ruajtjes të energjisë. <br/>Disa nga këta hapa janë:</p>
                </div>
          </div>
          <div className="grid grid-cols-1 xl:grid-cols-3 mx-auto">
            {/* Col 1 */}
            <div className="px-5 mx-auto">
              <div className="w-auto mx-auto md:w-auto xl:pl-48">
                <h1 className="p-1 text-[5rem] font-medium text-accent">01</h1>
                <p className="dark:text-white">Në përputhje me rrethanat, shmangni ndriçimin elektrik dhe përdorni atë natyral.</p>
              </div>
              <div className="w-auto mx-auto md:w-auto xl:pl-48">
                <h1 className="p-1 text-[5rem] font-medium text-accent">02</h1>
                <p className="dark:text-white">Sipas mundësisë shmangni ndriçimin dekorativ dhe përdorni vetëm ndriçimin e nevojshëm për hapësirën tuaj.</p>
              </div>
              <div className="w-auto mx-auto md:w-auto xl:pl-48">
                <h1 className="p-1 text-[5rem] font-medium text-accent">03</h1>
                <p className="dark:text-white">Përdorimi i gazit për gatim ul dukshëm konsumin e energjisë elektrike. Nëse nuk përdorni gazin per gatim, atëhere mundohuni që furrën ta hapni sa më pak gjatë pjekjes.</p>
              </div>
              <div className="w-auto mx-auto md:w-auto xl:pl-48">
                <h1 className="p-1 text-[5rem] font-medium text-accent">04</h1>
                <p className="dark:text-white">Ulni temperaturën e termostatit të bojlerit për disa gradë. Kjo do të zvogëlojë dukshëm konsumin dhe nuk do të vërehen ndryshime të mëdha gjatë përdorimit.</p>
              </div>
            </div>
            {/* Col 2 */}
            <div className="px-5 grid">
              <div className=""></div>
              <div className="w-auto md:w-96 mx-auto">
                <h1 className="p-1 text-[5rem] font-medium text-accent">05</h1>
                <p className="dark:text-white">Sipas mundësisë instaloni drita LED në të gjithë hotelin, sepse ato përdorin shumë më pak energji sesa llambat tradicionale inkandeshente dhe zgjasin më gjatë.</p>
              </div>
              <div className="w-auto md:w-96 mx-auto">
                <h1 className="p-1 text-[5rem] font-medium text-accent">06</h1>
                <p className="dark:text-white">Nëse keni mundësi instaloni sensor te lëvizjes për të ndezur dhe fikur dritat në hapësirat që nuk janë në përdorim të vazhdueshëm (p.sh korridore, tualete).</p>
              </div>
              <div className="w-auto md:w-96 mx-auto">
                <h1 className="p-1 text-[5rem] font-medium text-accent">07</h1>
                <p className="dark:text-white">Fikni dritat ne salla të cilat nuk frekuentohen shumë nga njerëzit.</p>
              </div>
              <div className="w-auto md:w-96 mx-auto"></div>
            </div>
            {/* Col 3 */}
            <div className="grid content-start">
              <div className=""></div>
              <div className="px-5 xl:pr-48">
                <h1 className="p-1 text-[5rem] font-medium text-accent">08</h1>
                <p className="dark:text-white">Kondicioneri mund të harxhojë shumë energji në ditët kur temperatura është mesatare. Fikni atë, kur nuk është i nevojshëm.</p>
              </div>
              <div className="px-5 xl:pr-48">
                <h1 className="p-1 text-[5rem] font-medium text-accent">09</h1>
                <p className="dark:text-white">Si masë afatgjate mund të jetë: •Instalimi i sistemeve diellore për ngrohjen e ujit</p>
              </div>
            </div>
          </div>
        </div>
        {/* Malls */}
        <div ref={mallRef} className=" py-20" style={{backgroundImage: `url(${BulbIllustration})`}}>
          <div className="grid grid-cols-1 xl:grid-cols-3">
            {/* Col 1 */}
            <div className="">
              <div className="flex justify-center xl:justify-start xl:pl-48">
                <h2 className="text-5xl md:text-[5rem] font-bold text-accent">Qendrat <br/>Tregtare</h2>
              </div>
              <div className="">
                <div className="">
                  <h2 className="text-xl font-bold border-b-4 border-accent dark:text-white flex justify-center py-5 pl-20">SI TË KURSEJË ENERGJI ELEKTRIKE:</h2>
                  <p className="px-5 xl:pl-48 py-5 text-left text-lg text-secondary">Dyqanet e mëdha me shumëllojshmëri dritash dekoruese, reklama të shumta, klima dhe pajisje tjera, konsumojnë mjaft shumë energji, që mund të kursehet shumë lehtë, nëse stafi i çdo dyqani informohet për mënyrat e kursimit të energjisë elektrike dhe më pastaj inkurajohet për aplikimin e tyre. <br/>Ja disa nga këto këshilla që mund t'i aplikoni lehtë:</p>
                </div>
              </div>
            </div>
            {/* Col 2 */}
            <div className="px-5">
              <div className="w-auto xl:w-96 mx-auto">
                <h1 className="p-1 text-[5rem] font-medium text-accent">01</h1>
                <p className="dark:text-white">Minimizoni apo fikni dritat dekoruese dhe reklamuese, pasi që ndriçimi i shumtë reklamues që kanë qendrat tregtare është shpenzues mjaft i madh i energjisë elektrike.</p>
              </div>
              <div className="w-auto xl:w-96 mx-auto">
                <h1 className="p-1 text-[5rem] font-medium text-accent">02</h1>
                <p className="dark:text-white">Përdorni drita LED, sepse ato janë efiçiente.</p>
              </div>
              <div className="w-auto xl:w-96 mx-auto">
                <h1 className="p-1 text-[5rem] font-medium text-accent">03</h1>
                <p className="dark:text-white">Konsideroni instalimin e dyerve automatike ose rrotulluese. Lënia e derës së përparme gjerësisht e hapur do t'u lejojë klientëve qasje dhe dalje të shpejtë nga ndërtesa, por në të njëjtën kohë edhe humbje të freskisë apo nxehtësisë.</p>
              </div>
              <div className="w-auto xl:w-96 mx-auto">
                <h1 className="p-1 text-[5rem] font-medium text-accent">04</h1>
                <p className="dark:text-white">Programoni ftohjen të mos fillojë derisa temperatura e brendshme të kalojë 24° apo ngrohja gjatë dimrit të akordohet nga 18-21 °C</p>
              </div>
            </div>
            {/* Col 3 */}
            <div className="px-5 xl:pr-48 grid">
              <div className=""></div>
              <div className="">
                <h1 className="p-1 text-[5rem] font-medium text-accent">05</h1>
                <p className="dark:text-white">Nëse keni mundësi instaloni sensorë të lëvizjes për të ndezur dhe fikur dritat në hapësirat që nuk janë në përdorim të vazhdueshëm (p.sh dhomat e provës, zona për punëtorë, etj.).</p>
              </div>
              <div className="">
                <h1 className="p-1 text-[5rem] font-medium text-accent">06</h1>
                <p className="dark:text-white">Nëse është e mundur, ftohja të fiket një orë para përfundimit të punës.</p>
              </div>
              <div className=""></div>
            </div>
          </div>
        </div>
        {/* Gastronomy */}
        <div ref={gastronomyRef} className=" py-20">
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
                  <h2 className="text-xl font-bold border-b-4 border-accent dark:text-white flex justify-center py-5 xl:pr-20">SI TË KURSEJË ENERGJI ELEKTRIKE:</h2>
                  <p className="xl:pr-48 py-5 px-5 xl:text-right flex justify-center text-lg text-secondary">Ndër shpenzuesit më të mëdhenj të energjisë elektrike në restorante është përgatitja e ushqimit, ftohja dhe ngrohja e ambientit. Ne mund të veprojmë me hapa të vegjël SOT, që të ndihmojmë sadopak në përmirësimin e gjendjes elektroenergjetike të vendit, për muajt e vështirë që do të vijnë me ftohjen e motit. Filloni t'i aplikoni këto ndryshime në rutinën tuaj ditore:</p>
                </div>
          </div>
          <div className="grid grid-cols-1 xl:grid-cols-3 ">
            <div className="px-5 grid content-start">
              <div className="xl:pl-48">
                <h1 className="p-1 text-[5rem] font-medium text-accent">01</h1>
                <p className="dark:text-white">Fikni disa nga poçat dekorues, që nuk do të ndikonin në uljen e ndriçimit të nevojshëm të ambientit.</p>
              </div>
              <div className="xl:pl-48">
                <h1 className="p-1 text-[5rem] font-medium text-accent">02</h1>
                <p className="dark:text-white">Gjatë natës mos harroni ta fikni ndriçimin dhe të gjitha pajsijet e tjera shpenzuese.</p>
              </div>
              <div className="xl:pl-48">
                <h1 className="p-1 text-[5rem] font-medium text-accent">03</h1>
                <p className="dark:text-white">Nëse nuk keni alternativë të ngrohjes (përpos me energji elektrike) për ditët e ftohta, akordoni temostatin në atë mënyrë që ambienti të jetë i rehatshëm, por jo i ftohtë. Temperatura e rehatshme e dhomës gjatë dimrit parashihet të jetë 19 gradë.</p>
              </div>
              <div className="xl:pl-48"></div>
            </div>
            <div className="px-5 grid content-end">
              <div className="w-auto xl:w-96 mx-auto">
                <h1 className="p-1 text-[5rem] font-medium text-accent">04</h1>
                <p className="dark:text-white">Akordoni termostatin e kondicionerit në 24 gradë celcius, që konsiderohet të jetë temperaturë efiçiente.</p>
              </div>
              <div className="w-auto xl:w-96 mx-auto">
                <h1 className="p-1 text-[5rem] font-medium text-accent">05</h1>
                <p className="dark:text-white">Gjatë ditës ndalni ngrohjen tërësisht për disa orë. Kjo nuk do të ndikoj aq shumë në ndryshimin e temperaturës së rehatshme të hapësirave, por kursimi në anën tjetër do të jetë i madh.</p>
              </div>
              <div className="w-auto xl:w-96 mx-auto">
                <h1 className="p-1 text-[5rem] font-medium text-accent">06</h1>
                <p className="dark:text-white">Parandaloni ngrohjen e hapësirave të caktuara, aty ku nuk ka nevojë, duke vendosur në kaldajën qendrore një ndërprerës kohor (wifi, digjital apo mekanik).</p>
              </div>
            </div>
            <div className="grid  xl:grid-rows-3">
              <div className="hidden md:flex"></div>
              <div className="px-5 xl:pr-48">
                <h1 className="p-1 text-[5rem] font-medium text-accent">07</h1>
                <p className="dark:text-white">Ndërsa si masa afatgjate, ju mund t’i: <br/><br/>- Zëvendësoni poçat tradicional me ata efiçient <br/>- Zëvendësoni pajisjet elektrike jo-efiçente me pajisje efiçiente, etj.</p>
              </div>
            </div>
          </div>
        </div>
        {/* Video Two */}
        <div className=" py-20">
          <div className="container mx-auto grid grid-cols-1 p-5 lg:p-0 lg:grid-cols-2">
            <div className="">
                      
            </div>
            <div className="flex justify-start items-center">
                <img src={videoOne} alt="Video One" />
            </div>
          </div>
        </div>
        {/* Institutions */}
        <div ref={institutionRef} className=" py-20">
          <div className="xl:pl-48">
            <h2 className="text-5xl flex justify-center xl:justify-start xl:text-[5rem] text-center md:text-left font-bold text-accent">Kompanitë dhe <br/>Institucionet</h2>
          </div> 
          <div className="grid grid-cols-1 xl:grid-cols-3">
            {/* Col 1 */}
            <div className="">
              {/* <div className="">
                <h2 className="text-[5rem] font-bold text-accent leading-tight pl-48">Kompanitë dhe <br/>Institucionet</h2>
              </div> */}
              <div className="">
                <h2 className="text-xl font-bold border-b-4 border-accent dark:text-white flex justify-center py-5 xl:pl-20">SI TË KURSEJË ENERGJI ELEKTRIKE:</h2>
                <p className="px-5 xl:pl-48 py-5 text-left text-lg text-secondary">Aq sa është e rëndësishme të kemi furnizim me energji elektrike po aq jetik është edhe kursimi i energjisë elektrike. <br/><br/>Për kursim sa më të madh të energisë elektrike, ndihmesë të madhe paraqet bashkëpunimi me të gjitha institucionet publike, kompanitë private, bankat, hotelieritë dhe të gjitha kategoritë tjera. <br/><br/>Që kursimi i energjisë elektrike të jetë sa më lehtë i aplikueshëm dhe praktik, ne kemi disa rekomandime nga ekspertët tanë.</p>
              </div>
            </div>
            {/* Col 2 */}
            <div className="px-5 w-auto xl:w-96 grid mx-auto">
              <div className="h-32 hidden xl:flex">
              </div>
              <div className="">
                <h1 className="p-1 text-[5rem] font-medium text-accent">01</h1>
                <p className="dark:text-white">Meqenëse po i afrohemi stinëve të ftohta, duhet pasur parasysh që ngrohja me energji elektrike përbën rreth 70% të faturës mujore. Nga kjo kuptohet se shpenzuesi më i madh i energjisë është ngrohja. Andaj, nëse është e mundur siguroni mundësi alternative të ngrohjes, sepse mosngrohja me energji elektrike do ta ndihmonte shumë sistemin.</p>
              </div>
              <div className="">
                <h1 className="p-1 text-[5rem] font-medium text-accent">02</h1>
                <p className="dark:text-white">Temperatura e rehatshme e dhomës gjatë dimrit parashihet të jetë 18 deri më 21 gradë, andaj gjatë ditës ngrohja mund të ndalet për disa orë.</p>
              </div>
            </div>
            {/* Col 3 */}
            <div className="px-5 w-auto xl:w-96 content-start">
              <div className="">
                <h1 className="p-1 text-[5rem] font-medium text-accent">03</h1>
                <p className="dark:text-white">Kur përdorimi i energjisë elektrike në ndërtesa publike është i panevojshëm pas përfundimit të punës, ne rekomandojmë që të bëhet shkyçja e të gjitha objekteve, përveç aty ku cenohet siguria.</p>
              </div>
              <div className="">
                <h1 className="p-1 text-[5rem] font-medium text-accent">04</h1>
                <p className="dark:text-white">Në përfundim të orarit të punës aty ku është e mundur, të ndërpritet energjia elektrike në mënyrë automatike apo të bëhet shkyçje përmes paisjeve të mençura. Në kohë krize çdo kilovat i kursyer është i vlefshëm, andaj të fillojmë nga sot, t’i ndalim pajisjet që nuk i përdorim dhe të kursejmë në mënyrë maksimale.</p>
              </div>
            </div>
          </div>
        </div>
        {/* HouseKeeping */}
        <div ref={housekeepingRef} className="py-20">
          <div className="flex justify-center xl:justify-end xl:pr-48">
            <h2 className="text-5xl xl:text-[5rem] font-bold text-left xl:text-right  text-accent">Amviseria</h2>
          </div>
          <div className="grid grid-cols-1 xl:grid-cols-3">
                <div className=""></div>
                <div className=""></div>
                <div className="order-1">
                  <h2 className="text-xl font-bold border-b-4 border-accent dark:text-white flex justify-center py-5 xl:pr-20">SI TË KURSEJË ENERGJI ELEKTRIKE:</h2>
                  <p className="xl:pr-48 py-5 px-5 xl:text-right flex justify-center text-lg text-secondary">Amvisëria si një ndër shpenzuesit më të mëdhenj të energjisë elektrike mund të kontribuojë shumë në uljen e konsumit, sidomos aty ku ka mundësi të madhe të kursimit. Nëse çdo konsumator kursen energji elektrike për vete dhe familjen e tij, ne në fakt jemi duke kursyer energji edhe për konsumatorët e grupeve të ndjeshme, të cilëve mund të ju nevojitet energjia elektrike më shumë se kurrë. Sipas ekspertëve të KEDS, këto janë disa nga masat që konsumatorët shtëpiak duhet t’i ndërmarrin për ta kursyer energjinë elektrike: Ditëve në vijim do ju përcjellim udhëzime për kursim edhe për kategori kategori të tjera!</p>
                </div>
          </div>
          <div className="grid grid-cols-1 xl:grid-cols-3">
            {/* Col 1 */}
            <div className="grid  px-5 xl:pl-48">
                <div className="">
                  <h1 className="p-1 text-[5rem] font-medium text-accent">01</h1>
                  <p className="dark:text-white">Shfrytëzimi i alternativave të tjera për ngrohje, aty ku ka mundësi.</p>
                </div>
                <div className="">
                  <h1 className="p-1 text-[5rem] font-medium text-accent">02</h1>
                  <p className="dark:text-white">Në objektet banesore ku është e pamundur një gjë e tillë, kalimi në ngrohës efiçent si dhe menaxhimi më i mirë i hapësirave të ngrohjes.</p>
                </div>
                {/* <div className="">
                  <h1 className="p-1 text-[5rem] font-medium text-accent">07</h1>
                  <p className="dark:text-white">Vendoseni termostatin në atë që parashihet të jetë temperaturë e rehatshme e dhomës gjatë dimrit: nga 18-21 gradë.</p>
                </div>
                <div className="">
                  <h1 className="p-1 text-[5rem] font-medium text-accent">07</h1>
                  <p className="dark:text-white">Vendoseni termostatin në atë që parashihet të jetë temperaturë e rehatshme e dhomës gjatë dimrit: nga 18-21 gradë.</p>
                </div> */}
                <div className="hidden xl:flex"></div>
            </div>
            {/* Col 2 */}
            <div className="grid px-5 w-auto xl:w-96 mx-auto">
                <div className="hidden xl:flex h-5"></div>
                <div className="">
                  <h1 className="p-1 text-[5rem] font-medium text-accent">03</h1>
                  <p className="dark:text-white">Ndaleni për së paku dy orë ngrohjen me energji elektrike gjatë ditës</p>
                </div>
                <div className="">
                  <h1 className="p-1 text-[5rem] font-medium text-accent">04</h1>
                  <p className="dark:text-white">Ndaleni ngrohjen në ambientet ku nuk qëndroni gjatë (dhomë të gjumit, korridore, banjo)</p>
                </div>
                <div className="">
                  <h1 className="p-1 text-[5rem] font-medium text-accent">05</h1>
                  <p className="dark:text-white">Kujdesi në ngrohësin e ujit (bojlerin) dhe kohën kur ai përdoret. Preferohet të ngrohet gjatë natës, me tarifë të ulët, apo gjatë ditës vetem kur është i nevojshëm përdorimi i ujit të ngrohtë. Potencialisht zëvendësimi i tij me ngrohës diellor.</p>
                </div>
            </div>
            <div className="grid content-start">
              <div className="w-96 px-5">
                <h1 className="p-1 text-[5rem] font-medium text-accent">06</h1>
                <p className="dark:text-white">Përdorimi i pajisjeve elektro-shtëpiake në kohën kur energjia është më e lirë (pas ores 10).</p>
              </div>
              <div className="h-16 hidden xl:flex"></div>
              <div className="w-96 px-5">
                <h1 className="p-1 text-[5rem] font-medium text-accent">07</h1>
                <p className="dark:text-white">Ndalja e furnizimit pajisjeve që nuk ka nevojë të përdoren në kohë të caktuara, duke filluar nga dritat.</p>
              </div>
            </div>
          </div>
        </div>
        {/* Ad */}
        <div className="mx-auto py-20 flex justify-center">
          {
            darkMode ?
              <img src={adDark} alt="" />
            :
              <img src={ad} alt="" />
          }
        </div>
        {/* Corner Shops */}
        <div ref={shopRef} className=" py-20">
          <div className="xl:pl-48">
            <h2 className="text-5xl flex xl:justify-start justify-center xl:text-right xl:text-[5rem] font-bold text-accent">Dyqanet <br/>e Vogla</h2>
          </div>
          <div className="grid grid-cols-1 xl:grid-cols-3">
            {/* Col 1 */}
            <div className="">
              <div className="">
                <h2 className="text-xl font-bold border-b-4 border-accent dark:text-white flex justify-center py-5 xl:pl-20">SI TË KURSEJË ENERGJI ELEKTRIKE:</h2>
              </div>
              <div className="px-5 xl:pl-48">
                <div className="">
                  <h1 className="p-1 text-[5rem] font-medium text-accent">01</h1>
                  <p className="dark:text-white">Rregulloni termostatin për t'iu përshtatur sezonës. Rregullimi i teromostatit të ftohjes, për një ose dy shkallë më lart, mund të sjell kursime të mëdha të energjisë elektrike.</p>
                </div>
                <div className="">
                  <h1 className="p-1 text-[5rem] font-medium text-accent">02</h1>
                  <p className="dark:text-white">Reduktoni përdorimin e ujit të nxehtë që ngrohet me energji elektrike.</p>
                </div>
              </div>
            </div>
            {/* Col 2 */}
              <div className="px-5 w-96 grid mx-auto">
                <div className="h-32 hidden xl:flex"></div>
                <div className="">
                  <h1 className="p-1 text-[5rem] font-medium text-accent">03</h1>
                  <p className="dark:text-white">Minimizoni apo fikni dritat dekoruese dhe reklamuese, pasi që ndriçimi i shumtë reklamues në dyqane është shpenzues mjaft i madh i energjisë elektrike.</p>
                </div>
                <div className="">
                  <h1 className="p-1 text-[5rem] font-medium text-accent">04</h1>
                  <p className="dark:text-white">Pastroni shpesh poçat elektrik nga pluhuri. Poçat e vjetër dhe grumbullimi i pluhurit në sipërfaqen e tyre mund të zvogëlojnë ndriçimin total deri në 50%.</p>
                </div>
            </div>
            {/* Col 3 */}
            <div className="px-5 xl:pr-48 grid content-start">
              <div className="">
                <h1 className="p-1 text-[5rem] font-medium text-accent">05</h1>
                <p className="dark:text-white">Fikni dritat në ato hapësira që nuk përdoren. Përdorni lllamba efiçiente, pra llamba LED.</p>
              </div>
              <div className="">
                <h1 className="p-1 text-[5rem] font-medium text-accent">06</h1>
                <p className="dark:text-white">Largoni spinën e pajisjeve elektronike nga priza. Disa paisje ende konsumojnë energji elektrike në sasi të vogël kur janë të kyçur në prizë.</p>
              </div>
            </div>
          </div>
        </div>
        {/* Industries */}
        <div ref={industryRef} className=" py-20">
          <div className="flex justify-center xl:justify-end xl:pr-48">
            <h2 className="text-5xl xl:text-[5rem] font-bold text-left xl:text-right  text-accent">Industrise</h2>
          </div>
          <div className="grid grid-cols-1 xl:grid-cols-3">
                <div className=""></div>
                <div className=""></div>
                <div className="order-1">
                  <h2 className="text-xl font-bold border-b-4 border-accent dark:text-white flex justify-center py-5 xl:pr-20">SI TË KURSEJË ENERGJI ELEKTRIKE:</h2>
                  <p className="xl:pr-48 py-5 px-5 xl:text-right flex justify-center text-lg text-secondary">Me teknikat e duhura të kursimit të energjisë, sektori industrial që përdor një sasi të madhe të energjisë së ofruar në botë, mund të kursejë energji elektrike nëse aplikohen shembujt si më poshtë:</p>
                </div>
          </div>
          <div className="grid grid-cols-1 xl:grid-cols-3">
            {/* Col 1 */}
            <div className="grid content-start xl:pl-48">
              <div className="px-5">
                <h1 className="p-1 text-[5rem] font-medium text-accent">01</h1>
                <p className="dark:text-white">Pastrimi i rregullt dhe mirëmbajtja e planifikuar e makinerive optimizon performancën dhe jetëgjatësinë e këtyre makinerive dhe mund të përkthehet në kursime të mëdha të energjisë</p>
              </div>
              <div className="px-5">
                <h1 className="p-1 text-[5rem] font-medium text-accent">02</h1>
                <p className="dark:text-white">Një mënyrë tjetër e thjeshtë është të siguroheni që të gjitha makineritë dhe pajisjet të fiken kur nuk përdoren. Përdorimi i pajisjeve vetëm kur ju nevojiten, mund të rezultojë në kursime të konsiderueshme të kostos së energjisë elektrike;</p>
              </div>
              <div className="px-5">
                <h1 className="p-1 text-[5rem] font-medium text-accent">03</h1>
                <p className="dark:text-white">Sistemet e ftohjes mund të shpenzojnë mjaft shumë energji elektrike, andaj duhet të siguroheni që kondicioneri juaj të aranzhohet në opsion optimal dhe jo më shumë se që është e nevojshme</p>
              </div>
              <div className=""></div>
              <div className=""></div>
            </div>
            {/* Col 2 */}
            <div className="grid w-auto xl:w-96 content-start mx-auto">
              <div className="hidden xl:flex h-20"></div>
              <div className="px-5">
                <h1 className="p-1 text-[5rem] font-medium text-accent">04</h1>
                <p className="dark:text-white">Dhoma e mbyllur siç duhet ndihmon kondicionerin të përdorë më pak energji</p>
              </div>
              <div className="px-5">
                <h1 className="p-1 text-[5rem] font-medium text-accent">05</h1>
                <p className="dark:text-white">Zëvendësimi i një motori të vjetër me fuqi të lartë, me një motor me fuqi më të ulët dhe efikas është një mënyrë e shkëlqyer për të ulur kostot. Ka shumë industri që përdorin motorë të vjetër, të cilët duhet të zëvendësohen në mënyrë që të kursehet sa më shumë energji elektrike.</p>
              </div>
              <div className="px-5">
                <h1 className="p-1 text-[5rem] font-medium text-accent">06</h1>
                <p className="dark:text-white">Zëvendësimin i poçave tradicional me poça LED me fuqi të ulët</p>
              </div>
              {/* <div className="hidden xl:flex"></div> */}
            </div>
            {/* Col 3 */}
            <div className="">
              <div className="grid  md:grid-rows-4">
                <div className="px-5 xl:pr-48">
                  <h1 className="p-1 text-[5rem] font-medium text-accent">07</h1>
                  <p className="dark:text-white">Kontrollimi i ndriçimit përmes sensorëve të lëvizjes (tualete dhe zona të tjera që nuk përdoren tërë kohën. <br/><br/>#industri #këshillakursimi</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Light Switch */}
        <div className="bottom-0 sticky">
          <div className="w-72 flex flex-row justify-start items-center dark:bg-bg-dark dark:bg-opacity-90  bg-white bg-opacity-90 bg-clip-border rounded-r-3xl navbar">
            <div className="p-5">
              <button onClick={() => setDarkMode(true)}>
                {
                  darkMode ? 
                    <img className="w-12 md:w-16" src={SwitchOFF} alt="" /> 
                  : 
                    <img className="w-12 md:w-16" src={SwitchON} alt="" />
                }
              </button>
            </div>
            <div className="">
              <h2 onClick={() => wordMixer()} className="text-2xl font-bold dark:text-white">
                {
                  darkMode ?
                    <h2>Kurse Rrymë!</h2>
                  :
                    <h2>Fike Dritën</h2>
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












