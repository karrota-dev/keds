import { useState, useRef } from "react";

import Logo from './assets/KEDS-Logo.svg';
import LogoWhite from './assets/keds-light.png';

import Kesco from './assets/bluekesco.png';
import KescoWhite from './assets/kescowhite.png';

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

import ad from './assets/ad.jpg';
import adDark from './assets/ad-dark.jpg';

import OutletIllustration from './assets/outlet-illustration.png';
import PuzzleIllustration from './assets/puzzle-illustration.png';
import LineIllustration from './assets/line-illustration.png';
import ForkIllustration from './assets/fork-illustration.png';
import BulbIllustration from './assets/bulb-illustration.png';
import LightIllustration from './assets/light-illustration.png';
import RadiatorIllustration from './assets/radiator-illustration.png';
import CookingIllustration from './assets/cooking-illustration.png';

import vidOne from './assets/vid-one.png';

import videoOne from './assets/img-1.png';
import videoTwo from './assets/img-2.png';

import vidOneIllustartion from './assets/vid-one-illustration.png';
import vidTwoIllustartion from './assets/vid-two-illustration.png';

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
            {/* large screen */}
            <div className="hidden lg:flex flex-row justify-between items-center">
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
                    K??shilla Kursimi 
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
              <div className="p-2 flex">
                {
                  darkMode ?
                    <img className="px-2 w-40" src={KescoWhite} alt="KEDS Energy"/>
                  :
                    <img className="px-2 w-40" src={Kesco} alt="KEDS Energy"/>
                }
                {
                  darkMode ?
                    <img className="px-2 w-32" src={LogoWhite} alt="KEDS Energy"/>
                  :
                    <img className="px-2 w-24" src={Logo} alt="KEDS Energy"/>
                }
              </div>
            </div>
            {/* Mobile Screen */}
            <div className="lg:hidden flex flex-col justify-between">
              <div className="flex justify-between items-center">
                <div className="p-2">
                  {
                    darkMode ?
                      <img src={campaignLogo} className="w-24" alt="KEDS Energy"/>
                    :
                      <img src={campaignLogoDark} className="w-24" alt="KEDS Energy"/>
                  }
                </div>
                <div className="p-2">
                  {
                    darkMode ?
                      <img src={KescoWhite} className="w-36" alt="KEDS Energy"/>
                    :
                      <img src={Kesco} className="w-36" alt="KEDS Energy"/>
                  }
                </div>
                <div className="p-2">
                  {
                    darkMode ?
                      <img src={LogoWhite} className="w-24" alt="KEDS Energy"/>
                    :
                      <img src={Logo} className="w-24" alt="KEDS Energy"/>
                  }
                </div>
              </div>
              <div className="flex justify-center items-center">
              <div className="p-2 flex flex-row justify-center items-center">
                <button onClick={() => setNavOpen(!isNavOpen)}>
                  <h4 className="flex justify-center items-center text-xl font-semibold hover:text-accent dark:hover:text-accent cursor-pointer dark:text-white">
                    K??shilla Kursimi 
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
              </div>
            </div>
          </div>
        </div>
        <div className="relative flex justify-center">
        <div className="p-1 absolute ">
          <div className={isNavOpen ? 'flex justify-center text-center' : 'hidden'}>
            <div className="w-auto md:w-96 p-5 bg-bg-primary dark:bg-bg-dark dark:bg-opacity-90 rounded-3xl bg-opacity-80 bg-clip-padding navbar">
              <div className="">
                <h2 onClick={() => {
                  homeScroll(),
                  setNavOpen()
                }} className="dark:text-white font-medium text-lg cursor-pointer hover:text-accent dark:hover:hover:text-accent">Sht??pi</h2>
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
                {/* <h2 onClick={() => {
                  housekeepingScroll(),
                  setNavOpen()
                }} className="dark:text-white font-medium text-lg cursor-pointer hover:text-accent dark:hover:hover:text-accent">Amviseria</h2> */}
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
              <h1 className="p-2 text-[5rem] font-bold leading-tight text-title-blue dark:text-white">Thirrje p??r <br/><span className="text-accent">Kursim</span></h1>
              <p className="p-2 text-xl text-accent">#t??kursejm??krejtbashk??</p>
              <p className="p-2 text-lg text-left dark:text-secondary text-text-blue">Kjo faqe ka p??r q??llim t?? ndaj?? me ju m??nyrat m?? t?? thjeshta dhe m?? efikase p??r kursimin e energjis?? elektrike, t?? cilat mund t'i aplikojm?? n?? sht??pi, ambient pune apo kudo q?? ndodhemi. Duke ndjekur k??to k??shilla, ne zvog??lojm?? duksh??m konsumin e energjis?? elektrike, ulim fatur??n mujore, si dhe kontribuojm?? jasht??zakonisht shum?? q?? gjat?? dimrit t?? ket?? energji p??r t?? gjith??.</p>
            </div>
            <div className="hidden lg:flex justify-center items-start">
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
        <div className="flex justify-center md:justify-start md:pl-40 py-5">
          <h1 className="p-2 text-5xl flex flex-col items-center md:items-start md:text-[5rem] font-bold text-title-blue dark:text-white">K??shilla <span className="text-accent">Kursimi</span></h1>
        </div>
        {/* Home */}
        <div ref={homeRef} className="home py-20">
          
          <div className="grid grid-cols-1 xl:grid-cols-3">
            {/* Col 1 */}
            <div className="pr-5">
              <div className="flex justify-center py-5">
                <h2 className="text-5xl md:text-[5rem] font-bold text-accent">Sht??pi</h2>
              </div>
              {/* Sub Menu */}
              <div className="grid grid-cols-1 md:grid-cols-2">
                {/* Col 1 */}
                <div className="pr-5">
                  <p className="text-accent flex justify-center py-2 md:justify-end ">Si t?? kursejm?? energji nga:</p>
                  <div className="pr-28 md:pr-0">
                    <h2 
                    onClick={() => {
                      setNgrohjaOpen(true),
                      setBojleriOpen(false),
                      setGatimiOpen(false),
                      setFrigoriferiOpen(false),
                      setKondicioneriOpen(false),
                      setPajisjeOpen(false)
                    }}
                    className={`cursor-pointer text-xl font-bold  dark:text-white flex justify-end py-2 pl-10 ${isNgrohjaOpen ? 'border-accent text-title-blue dark:text-accent border-b-4' : 'border-b-2 text-secondary border-secondary dark:border-white'}`}>NGROHJA</h2>
                    <h2
                      onClick={() => {
                        setNgrohjaOpen(false),
                        setBojleriOpen(true),
                        setGatimiOpen(false),
                        setFrigoriferiOpen(false),
                        setKondicioneriOpen(false),
                        setPajisjeOpen(false)
                      }}
                      className={`cursor-pointer text-xl font-bold dark:text-white flex justify-end py-2 pl-10 ${isBojleriOpen ? 'border-accent text-title-blue dark:text-accent border-b-4' : 'border-b-2 text-secondary border-secondary dark:border-white'}`}>BOJLERI</h2>
                    <h2
                      onClick={() => {
                        setNgrohjaOpen(false),
                        setBojleriOpen(false),
                        setGatimiOpen(true),
                        setFrigoriferiOpen(false),
                        setKondicioneriOpen(false),
                        setPajisjeOpen(false)
                      }} 
                      className={`cursor-pointer text-xl font-bold dark:text-white flex justify-end py-2 pl-10 ${isGatimiOpen ? 'border-accent text-title-blue dark:text-accent border-b-4' : 'border-b-2 text-secondary border-secondary dark:border-white'}`}>GATIMI</h2>
                    <h2
                      onClick={() => {
                        setNgrohjaOpen(false),
                        setBojleriOpen(false),
                        setGatimiOpen(false),
                        setFrigoriferiOpen(true),
                        setKondicioneriOpen(false),
                        setPajisjeOpen(false)
                      }} 
                      className={`cursor-pointer text-xl font-bold dark:text-white flex justify-end py-2 pl-10 ${isFrigoriferiOpen ? 'border-accent text-title-blue dark:text-accent border-b-4' : 'border-b-2 text-secondary border-secondary dark:border-white'}`}>FRIGORIFERI</h2>
                    <h2 
                      onClick={() => {
                        setNgrohjaOpen(false),
                        setBojleriOpen(false),
                        setGatimiOpen(false),
                        setFrigoriferiOpen(false),
                        setKondicioneriOpen(true),
                        setPajisjeOpen(false)
                      }}
                      className={`cursor-pointer text-xl font-bold dark:text-white flex justify-end py-2 pl-10 ${isKondicioneriOpen ? 'border-accent text-title-blue dark:text-accent border-b-4' : 'border-b-2 text-secondary border-secondary dark:border-white'}`}>KONDICIONERI</h2>
                    <h2
                      onClick={() => {
                        setNgrohjaOpen(false),
                        setBojleriOpen(false),
                        setGatimiOpen(false),
                        setFrigoriferiOpen(false),
                        setKondicioneriOpen(false),
                        setPajisjeOpen(true)
                      }} 
                      className={`cursor-pointer text-xl font-bold dark:text-white flex justify-end py-2 pl-10 ${isPajisjeOpen ? 'border-accent text-title-blue dark:text-accent border-b-4' : 'border-b-2 text-secondary border-secondary dark:border-white'}`}>PAJISJET TJERA</h2>
                  </div>
                </div>
                {/* Col 2 */}
                <div className="py-2 px-5 md:px-0">
                  <p className={`dark:text-white ${isNgrohjaOpen ? 'text-text-blue dark:text-white flex' : 'hidden'}`}>Ngrohja me energji elektrike ngarkon tej mase sistemin elektroenergjetik, pasi dihet se prodhimi vendor nuk e mbulon k??rkes??n p??r energji gjat?? dimrit. Po ashtu, p??r shkak t?? kriz??s globale energjetike, ??mimet e importit jan?? t?? pap??rballueshme. <br/><br/>Gjetja e nj?? burimi tjet??r p??r ngrohje ??sht?? thelb??sore k??t?? dim??r, sepse n?? vend q?? nj?? sasi e madhe e energjis?? elektrike t?? shkoj?? p??r ngrohje, ajo do t?? kursehet dhe do t?? jet?? e bollshme p??r t???u ndar?? proporcionalisht p??r t?? gjith?? konsumator??t. <br/><br/>N?? rastet kur nuk keni alternativ?? tjet??r p??r ngrohje p??rve?? energjis?? elektrike, ju lusim t???i zbatoni k??to m??nyra t?? kursimit t?? energjis?? si m?? posht??, t?? cilat duksh??m do t???ju ndihmojn?? t???i ulni faturat tuaja t?? energjis?? elektrike dhe, n?? k??mbim do ta ndihmojn?? gjendjen e ngarkuar t?? sistemit elektroenergjetik:</p>
                  <p className={`dark:text-white ${isBojleriOpen ? 'text-text-blue dark:text-white flex' : 'hidden'}`}>Pjesa m?? e madhe e fatur??s suaj mujore shkon p??r ngrohjen e ujit me bojler, pa llogaritur ngrohjen e ambienteve t?? brendshme. <br/><br/>P??r t?? minimizuar nj?? konsum kaq t?? lart?? t?? bojlerit, m?? posht?? po listojm?? disa k??shilla q?? ndikojn?? n?? uljen e shpenzimeve t?? ngrohjes s?? ujit n?? bojler. <br/><br/>Paraprakisht, po ua rikujtojm?? se miti q?? bojleri shpenzon m?? pak rrym?? kur ??sht?? i ndezur gjat?? gjith?? koh??s, nuk q??ndron. E v??rteta ??sht?? se bojleri shpenzon m?? pak rrym?? n??se ndizet vet??m sipas nevoj??s:</p>
                  <p className={`dark:text-white ${isGatimiOpen ? 'text-text-blue dark:text-white flex' : 'hidden'}`}>Nj?? pjes?? mjaft e madhe e shum??s totale t?? fatur??s tuaj mujore shkon p??r p??rgatitjen e ushqimit n?? sht??pi, duke filluar nga furra elektrike e deri te pllakat e shporetit elektrik. Nd??rsa, mikrovala apo pajisjet e tjera t?? thjeshta p??r ngrohjen e ushqimit apo ujit nuk shpenzojn?? shum?? energji elektrike. Disa praktika t?? mira p??r ta ulur konsumin e energjis?? elektrike gjat?? p??rgatitjes s?? ushqimit n?? sht??pi jan?? k??to q?? po radhisim n?? vijim:</p>
                  <p className={`dark:text-white ${isFrigoriferiOpen ? 'text-text-blue dark:text-white flex' : 'hidden'}`}>Edhe frigoriferi di t?? jet?? nj?? shpenzues mjaft i madh i energjis?? elektrike, meq?? ??sht?? n?? funksion gjat?? gjith?? koh??s, madje shpesh ndodh q?? nj?? sht??pi t?? k??t?? frigorifer dhe ngrir??s, pra dy pajisje p??r ta mbajtur ushqimin t?? fresk??t dhe rrjedhimisht t?? ftoht??.</p>
                  <p className={`dark:text-white ${isKondicioneriOpen ? 'text-text-blue dark:text-white flex' : 'hidden'}`}>Kondicioner??t zakonisht p??rdoren p??r t?? mbajtur nj?? temperatur?? t?? p??rshtatshme n?? dhom?? gjat?? muajve t?? nxeht?? t?? ver??s. Se sa energji elektrike konsumon nj?? kondicioner, natyrisht varet nga kapaciteti q?? e ka si dhe koha q?? q??ndron i ndezur.</p>
                  <p className={`dark:text-white ${isPajisjeOpen ? 'text-text-blue dark:text-white flex flex-col' : 'hidden'}`}>Rol jasht??zakonisht t?? madh n?? kursimin apo shpenzimin e energjis?? elektrike n?? sht??pit?? tona luajn?? pajisjet q?? i p??rdorim gjat?? dit??s, si?? jan?? en??lar??set, rrobalar??set, makinat p??r pastrimin  e sht??pis??, hekuri p??r hekurosje, etj. M?? posht?? do t?? gjeni disa k??shilla t?? thjeshta t?? p??rdorimit t?? pajisjeve sht??piake, t?? cilat na ndihmojn?? t?? kursejm?? energji elektrike n??se i aplikojm?? ato rregullisht n?? rutin??n ton??. <br/><br/>Ju sugjerojm?? q?? t?? kujdeseni p??r p??rdorimin e k??tyre pajisjeve dhe <span className="text-accent">#krejtbashk??</span>p??r t?? mir??n e p??rgjithshme, le ta kursejm?? energjin?? elektrike.</p>
                  
                </div>
              </div>
            </div>
            {/* Col 2 */}
            <div className="p-2 px-5 w-96 mx-auto grid content-center">
              {/* <div className="h-44 md:flex hidden">
              </div> */}
              {/* 01 */}
              <div className={isNgrohjaOpen ? 'content' : 'hidden'}>
                <h1 className="p-1 text-[5rem] font-medium text-accent">01</h1>
                <p className="dark:text-white text-text-blue">Programoni temperatur??n e hap??sirave tuaja sipas koh??s s?? caktuar, duke pasur parasysh edhe tarifat dit??-nat?? (pas or??s 22:00 energjia elektrike ??sht?? m?? e lir??).</p>
              </div>
              <div className={isBojleriOpen ? 'content' : 'hidden'}>
                <h1 className="p-1 text-[5rem] font-medium text-accent">01</h1>
                <p className="dark:text-white text-text-blue">Mundohuni ta mbani bojlerin t?? fikur gjat?? dit??s, ose s?? paku t?? zvog??loni koh??n gjat?? s?? cil??s bojleri q??ndron i ndezur.</p>
              </div>
              <div className={isGatimiOpen ? 'content' : 'hidden'}>
                <h1 className="p-1 text-[5rem] font-medium text-accent">01</h1>
                <p className="dark:text-white text-text-blue">P??rdorni gazin natyror si burim energjie p??r gatim kur t?? keni mund??si.</p>
              </div>
              <div className={isFrigoriferiOpen ? 'content' : 'hidden'}>
                <h1 className="p-1 text-[5rem] font-medium text-accent">01</h1>
                <p className="dark:text-white text-text-blue">Zvog??loni nivelin e ftohjes n?? nivel optimal, p??r shembull nga niveli 4 n?? nivelin 1 ose n?? nivelin 2. Kjo do t?? kursej?? 20-30 % t?? energjis?? s?? shpenzuar m?? par?? nga frigoriferi.</p>
              </div>
              <div className={isKondicioneriOpen ? 'content' : 'hidden'}>
                <h1 className="p-1 text-[5rem] font-medium text-accent">01</h1>
                <p className="dark:text-white text-text-blue">Programoni termostatin e kondicionerit q?? t?? mos aktivizohet derisa temperatura e brendshme t?? kaloj?? 24??, e cila konsiderohet t?? jet?? temperatur?? efi??iente e dhom??s gjat?? ver??s.</p>
              </div>
              <div className={isPajisjeOpen ? 'content' : 'hidden'}>
                <h1 className="p-1 text-[5rem] font-medium text-accent">01</h1>
                <p className="dark:text-white text-text-blue">Mos i p??rdorni rrobalar??sen dhe en??lar??sen pa i mbushur mjaftuesh??m me en??/rroba.</p>
              </div>
              {/* 02 */}
              <div className={isNgrohjaOpen ? 'content' : 'hidden'}>
                <h1 className="p-1 text-[5rem] font-medium text-accent">02</h1>
                <p className="dark:text-white text-text-blue">P??r shembull, ju mund t?? provoni gjat?? dit??s t?? ndalni ngrohjen p??r dy or??, sidomos gjat?? koh??s kur energjia elektrike konsumohet m?? s?? shumti (17:00-20:00). Fikja e ngrohjes p??r dy or?? nuk do t?? ndikoj?? aq shum?? n?? uljen e temperatur??s s?? dhom??s, porse nga ana e kursimit do t?? leht??soj?? ngarkes??n e sistemit.</p>
              </div>
              <div className={isBojleriOpen ? 'content' : 'hidden'}>
                <h1 className="p-1 text-[5rem] font-medium text-accent">02</h1>
                <p className="dark:text-white text-text-blue">L??reni bojlerin ndezur gjat?? nat??s, sakt??sisht pas or??s 22:00 (tarifa e ul??t gjat?? dimrit).</p>
              </div>
              <div className={isGatimiOpen ? 'content' : 'hidden'}>
                <h1 className="p-1 text-[5rem] font-medium text-accent">02</h1>
                <p className="dark:text-white text-text-blue">P??rputhni madh??sin??/sip??rfaqen e tenxheres suaj t?? gatimit me madh??sin?? e pllak??s s?? shporetit elektrik.</p>
              </div>
              <div className={isFrigoriferiOpen ? 'content' : 'hidden'}>
                <h1 className="p-1 text-[5rem] font-medium text-accent">02</h1>
                <p className="dark:text-white text-text-blue">Hapni der??n e frigoriferit vet??m kur ??sht?? e nevojshme q?? t?? mos largohet i??ftohti nga pajisja elektrike.</p>
              </div>
              <div className={isKondicioneriOpen ? 'content' : 'hidden'}>
                <h1 className="p-1 text-[5rem] font-medium text-accent">02</h1>
                <p className="dark:text-white text-text-blue">Kondicioneri mund t?? harxhoj?? shum?? energji n?? dit??t kur temperatura ??sht?? mesatare. Fikni at?? kur nuk ??sht?? i nevojsh??m.</p>
              </div>
              {/* 03 */}
              <div className={isNgrohjaOpen ? 'content' : 'hidden'}>
                <h1 className="p-1 text-[5rem] font-medium text-accent">03</h1>
                <p className="dark:text-white text-text-blue">Vendoseni termostatin n?? at?? q?? parashihet t?? jet?? temperatur?? e rehatshme e dhom??s gjat?? dimrit: nga 18-21 grad??.</p>
              </div>
              <div className={isBojleriOpen ? 'content' : 'hidden'}>
                <h1 className="p-1 text-[5rem] font-medium text-accent">03</h1>
                <p className="dark:text-white text-text-blue">Ulni temperatur??n e termostatit t?? bojlerit (temperatura e sugjeruar, 55-60 grad??).</p>
              </div>
              <div className={isGatimiOpen ? 'content' : 'hidden'}>
                <h1 className="p-1 text-[5rem] font-medium text-accent">03</h1>
                <p className="dark:text-white text-text-blue">Fikni energjin?? n?? furr?? ose n?? pllak?? t?? zierjes s?? paku 3-5 minuta m?? her??t (para se ta largoni ushqimin nga pllaka ose furra).</p>
              </div>
              <div className={isKondicioneriOpen ? 'content' : 'hidden'}>
                <h1 className="p-1 text-[5rem] font-medium text-accent">03</h1>
                <p className="dark:text-white text-text-blue">Vendoseni termostatin n?? at?? q?? parashihet t?? jet?? temperatur?? e rehatshme e dhom??s gjat?? dimrit: nga 18-21 grad??.</p>
              </div>
              <div className={isPajisjeOpen ? 'content' : 'hidden'}>
                <h1 className="p-1 text-[5rem] font-medium text-accent">02</h1>
                <p className="dark:text-white text-text-blue">P??rdorni programet m?? efi??iente q?? k??to pajisje ofrojn??, k??shtu??kurseni m?? shum?? energji??elektrike. Jo ??do her????duhet t?? zgjedhim programet m?? t?? gjata dhe me temperaturat m?? t?? larta.??</p>
              </div>
              <div className={isPajisjeOpen ? 'content' : 'hidden'}>
                <h1 className="p-1 text-[5rem] font-medium text-accent">03</h1>
                <p className="dark:text-white text-text-blue">Fikni dritat n?? hap??sirat ku nuk kan?? nevoj?? p??r ndri??im.</p>
              </div>
              <div className={isFrigoriferiOpen ? 'content' : 'hidden'}>
                <h1 className="p-1 text-[5rem] font-medium text-accent">03</h1>
                <p className="dark:text-white text-text-blue">Prisni q?? ushqimet e nxehta t?? ftohen p??rpara se t'i vendosni brenda n?? frigorifer. Kjo do t?? shmang?? q?? frigoriferi t?? punoj?? m?? shum?? sesa q?? duhet normalisht p??r t?? mbajtur t?? fresk??t brend??sin?? e tij.</p>
              </div>
            </div>
            {/* Col 3 */}
            {/* 04 */}
            <div className="p-2 px-5 w-96 grid content-center mx-auto">
              <div className={isGatimiOpen ? 'content' : 'hidden'}>
                <h1 className="p-1 text-[5rem] font-medium text-accent">04</h1>
                <p className="dark:text-white text-text-blue">Vendosni kapakun n?? tenxhere n?? m??nyr?? q?? p??rmbajtja t?? gatuhet ose t?? zihet m?? shpejt, sepse k??shtu shpenzohet m?? pak energji.</p>
              </div>
              <div className={isNgrohjaOpen ? 'content' : 'hidden'}>
                <h1 className="p-1 text-[5rem] font-medium text-accent">04</h1>
                <p className="dark:text-white text-text-blue">Mbani dyert e dhom??s s?? gjumit ose t?? zyr??s t?? mbyllura sa m?? shum?? q?? t?? jet?? e mundur p??r t?? ruajtur nxeht??sin??.</p>
              </div>
              <div className={isBojleriOpen ? 'content' : 'hidden'}>
                <h1 className="p-1 text-[5rem] font-medium text-accent">04</h1>
                <p className="dark:text-white text-text-blue">Kufizoni shpenzimin e ujit t?? ngroht?? aty ky ??sht?? e mundur, p??r shembull n?? lavamanin e kuzhin??s ose t?? banj??s.</p>
              </div>
              {/* <div className={isGatimiOpen ? 'content' : 'hidden'}>
                <h1 className="p-1 text-[5rem] font-medium text-accent">04</h1>
                <p className="dark:text-white">Vendoseni kapakun n?? tenxhere n?? m??nyr?? q?? p??rmbajtja t?? gatuhet ose t?? zihet m?? shpejt, duke p??rdorur m?? pak energji.</p>
              </div> */}
              {/* <div className={isFrigoriferiOpen ? 'hidden' : 'hidden'}>
                <h1 className="p-1 text-[5rem] font-medium text-accent">04</h1>
                <p className="dark:text-white">Vendoseni termostatin n?? at?? q?? parashihet t?? jet?? temperatur?? e rehatshme e dhom??s gjat?? dimrit: nga 18-21 grad??.</p>
              </div> */}
              <div className={isFrigoriferiOpen ? 'content' : 'hidden'}>
                <h1 className="p-1 text-[5rem] font-medium text-accent">04</h1>
                <p className="dark:text-white text-text-blue">Mos lejoni lag??shti n?? frigorifer, mbuloni en??t e ushqimit, pastroni pikat e ujit nga t?? gjitha en??t dhe shishet q?? i vendosni n?? t??.</p>
              </div>
              <div className={isKondicioneriOpen ? 'content' : 'hidden'}>
                <h1 className="p-1 text-[5rem] font-medium text-accent">04</h1>
                <p className="dark:text-white text-text-blue">Mbyllni der??n e dhom??s si?? duhet, ngase kjo ndihmon kondicionerin t?? p??rdor?? m?? pak energji.</p>
              </div>
              {/* <div className={isPajisjeOpen ? 'content' : 'hidden'}>
                <h1 className="p-1 text-[5rem] font-medium text-accent">04</h1>
                <p className="dark:text-white">Hiqini nga priza pajisjet elektronike gjat?? koh??s kur nuk jan?? n?? p??rdorim.</p>
              </div> */}
              {/* 05 */}
              <div className={isNgrohjaOpen ? 'content' : 'hidden'}>
                <h1 className="p-1 text-[5rem] font-medium text-accent">05</h1>
                <p className="dark:text-white text-text-blue">Para se t?? flini, zvog??loni temperatur??n e termostatit, sepse ??sht?? m?? e sh??ndetshme dhe do t?? kurseni energji elektrike.</p>
              </div>
              <div className={isPajisjeOpen ? 'content' : 'hidden'}>
                <h1 className="p-1 text-[5rem] font-medium text-accent">04</h1>
                <p className="dark:text-white text-text-blue">Hiqni nga priza pajisjet elektronike gjat?? koh??s kur nuk jan?? n?? p??rdorim.</p>
              </div>
              <div className={isBojleriOpen ? 'content' : 'hidden'}>
                <h1 className="p-1 text-[5rem] font-medium text-accent">05</h1>
                <p className="dark:text-white text-text-blue">Kujdesuni q?? bojleri n?? sht??pin?? tuaj t?? mos jet?? shum?? i vjet??r, t?? jet?? efi??ient dhe sa m?? funksional (sa m?? shum?? ???A??? t?? ket??, aq m?? efi??ient n??nkupton se ??sht??).</p>
              </div>
              <div className={isGatimiOpen ? 'content' : 'hidden'}>
                <h1 className="p-1 text-[5rem] font-medium text-accent">05</h1>
                <p className="dark:text-white text-text-blue">P??rdorni en?? t?? cilat i p??rshtaten volumit t?? ushqimit t?? p??rgatitur. Mos ngrohni uj?? me tep??r sesa ju nevojitet.</p>
              </div>
              <div className={isFrigoriferiOpen ? 'content' : 'hidden'}>
                <h1 className="p-1 text-[5rem] font-medium text-accent">05</h1>
                <p className="dark:text-white text-text-blue">Mos lejoni t?? formohet trash??si e akullit n?? frigorifer dhe ngrir??s, shkrini dhe pastroni at??, sepse do t?? jet?? m?? efektive dhe m?? ekonomike.</p>
              </div>
              <div className={isKondicioneriOpen ? 'content' : 'hidden'}>
                <h1 className="p-1 text-[5rem] font-medium text-accent">05</h1>
                <p className="dark:text-white text-text-blue">Kujdesuni  q?? kondicioneri juaj t?? aranzhohet n?? opsion optimal dhe jo m?? shum?? se sa q?? ??sht?? e nevojshme.</p>
              </div>
              <div className={isPajisjeOpen ? 'content' : 'hidden'}>
                <h1 className="p-1 text-[5rem] font-medium text-accent">05</h1>
                <p className="dark:text-white text-text-blue">Kurdo q?? keni mund??si, p??rdorni pajisjet elektrike????kur energjia elektrike ??sht?? m?? e lir?? (pas or??s 22:00 gjat?? dimrit).</p>
              </div>
              {/* 06 */}
              <div className={isNgrohjaOpen ? 'content' : 'hidden'}>
                <h1 className="p-1 text-[5rem] font-medium text-accent">06</h1>
                <p className="dark:text-white text-text-blue">Ndaleni ngrohjen n?? ambientet ku nuk q??ndroni gjat?? (dhom?? t?? gjumit, korridore, banjo).</p>
              </div>
              <div className={isGatimiOpen ? 'content' : 'hidden'}>
                <h1 className="p-1 text-[5rem] font-medium text-accent">06</h1>
                <p className="dark:text-white text-text-blue">Hapni der??n e??furr??s vet??m kur ??sht?? e nevojshme q?? t?? mos largohet nxeht??sia nga pajisja elektrike.</p>
              </div>
              <div className={isKondicioneriOpen ? 'content' : 'hidden'}>
                <h1 className="p-1 text-[5rem] font-medium text-accent">06</h1>
                <p className="dark:text-white text-text-blue">Rregulloni termostatin p??r t'iu p??rshtatur sezonit. Rregullimi i termostatit t?? ftohjes p??r nj?? ose dy shkall?? m?? lart mund t?? sjell?? kursime t?? m??dha t?? energjis?? elektrike.</p>
              </div>
              <div className={isFrigoriferiOpen ? 'content' : 'hidden'}>
                <h1 className="p-1 text-[5rem] font-medium text-accent">06</h1>
                <p className="dark:text-white text-text-blue">Mbani frigoriferin larg pajisjeve q?? lirojn?? nxeht??si, mbani at?? n?? vendin m?? t?? ftoht?? n?? sht??pi, k??shtu kujdeseni q?? temperaturat e ul??ta t?? q??ndrojn?? vazhdimisht t?? tilla.</p>
              </div>
            </div>
          </div>
        </div>
        <img src={RadiatorIllustration} alt="" />
        {/* Video One */}
        <div className="py-16 vid-one h-screen flex flex-col justify-center items-center">
          <div className="container mx-auto flex flex-row justify-center items-center content-center p-5 lg:p-0">
            <div className="flex flex-row justify-center items-center justify-items-center itemsce">
              <a href="https://youtube.com" className="">
                <img src={videoOne} alt="Video One" />
              </a>
            </div>
          </div>
          <div className="flex md:hidden">
            <img src={vidTwoIllustartion} alt="Video One" />
          </div>
        </div>
        {/* Hotel */}
        <div ref={hotelRef} className="py-16 hotel">
          {/* <div className="flex justify-center xl:justify-end xl:pr-48">
            <h2 className="text-5xl xl:text-[5rem] font-bold text-center xl:text-right  text-accent">Sektori i <br/>Hoteleris??</h2>
          </div>
          <div className="grid grid-cols-1 xl:grid-cols-3">
                <div className=""></div>
                <div className=""></div>
                <div className="order-1">
                  <h2 className="text-xl font-bold border-b-4 border-accent dark:text-white flex justify-center py-5 xl:pr-28">SI T?? KURSEJ?? ENERGJI ELEKTRIKE?</h2>
                  <p className="xl:pr-48 py-5 px-5 xl:text-right flex justify-center text-lg text-secondary">Hoteleria ofron nj?? mund??si t?? jasht??zakonshme p??r ulje t?? konsumit, n??se veprohet me hapa konkret dhe t?? vazhduesh??m drejt ruajtjes t?? energjis??. <br/>Disa nga k??ta hapa jan??:</p>
                </div>
          </div> */}
          <div className="grid grid-cols-1 xl:grid-cols-3 mx-auto">
            {/* Col 1 */}
            <div className="">
              <div className="">
                <div className="flex justify-center xl:justify-start xl:pl-48">
                  <h2 className="text-5xl md:text-[5rem] font-bold text-accent">Hoteleria</h2>
                </div>
                <div className="">
                  <div className="">
                    <h2 className="text-xl font-bold border-b-4 border-accent text-title-blue dark:text-white flex justify-center py-5 p-0 xl:pl-32">SI T?? KURSEJ?? ENERGJI ELEKTRIKE?</h2>
                    <p className="px-5 xl:pl-48 py-5 text-left text-lg dark:text-secondary text-text-blue">Industria e hoteleris?? ofron nj?? mund??si t?? jasht??zakonshme p??r uljen e konsumit dhe ruajtjen e energjis?? n??se veprohet me hapa konkret?? dhe t?? vazhduesh??m. <br/>Disa nga k??ta hapa jan??:</p>
                  </div>
                </div>
              </div>
              <div className="px-5 md:p-0 mx-auto">
                <div className="w-auto mx-auto md:w-96 xl:w-auto xl:pl-48">
                  <h1 className="p-1 text-[5rem] font-medium text-accent">01</h1>
                  <p className="dark:text-white text-text-blue">N?? p??rputhje me rrethanat, shmangni ndri??imin elektrik dhe p??rdorni at?? natyral.</p>
                </div>
                <div className="w-auto mx-auto md:w-96 xl:w-auto xl:pl-48">
                  <h1 className="p-1 text-[5rem] font-medium text-accent">02</h1>
                  <p className="dark:text-white text-text-blue">Sipas mund??sis??, shmangni ndri??imin dekorativ dhe p??rdorni vet??m ndri??imin e nevojsh??m p??r hap??sir??n tuaj.</p>
                </div>  
              </div>
            </div>
            {/* Col 2 */}
            <div className="px-5 grid">
              <div className="w-auto md:w-96 mx-auto">
                <h1 className="p-1 text-[5rem] font-medium text-accent">03</h1>
                <p className="dark:text-white text-text-blue">P??rdorimi i gazit p??r gatim ul duksh??m konsumin e energjis?? elektrike. N??se nuk p??rdorni gaz p??r gatim, at??her?? p??rpiquni ta hapni sa m?? pak furr??n gjat?? pjekjes.</p>
              </div>
              <div className="w-auto md:w-96 mx-auto">
                <h1 className="p-1 text-[5rem] font-medium text-accent">04</h1>
                <p className="dark:text-white text-text-blue">Ulni temperatur??n e termostatit t?? bojlerit p??r disa grad??. Kjo do t?? zvog??loj?? duksh??m konsumin dhe nuk do t?? v??rehen ndryshime t?? m??dha gjat?? p??rdorimit.</p>
              </div>
              <div className="w-auto md:w-96 mx-auto">
                <h1 className="p-1 text-[5rem] font-medium text-accent">05</h1>
                <p className="dark:text-white text-text-blue">Sipas mund??sis??, instaloni drita LED n?? t?? gjith?? hotelin, sepse ato p??rdorin shum?? m?? pak energji se sa llambat tradicionale inkandeshente dhe zgjasin m?? shum??.</p>
              </div>
              <div className="w-auto md:w-96 mx-auto">
                <h1 className="p-1 text-[5rem] font-medium text-accent">06</h1>
                <p className="dark:text-white text-text-blue">N??se keni mund??si, instaloni sensor?? t?? l??vizjes p??r t?? ndezur dhe fikur dritat n?? hap??sirat q?? nuk jan?? n?? p??rdorim t?? vazhduesh??m (p.sh korridore, tualete).</p>
              </div>
              
            </div>
            {/* Col 3 */}
            <div className="grid content-center px-5">
              <div className="mx-auto md:w-96 xl:w-auto xl:pr-48">
                <h1 className="p-1 text-[5rem] font-medium text-accent">07</h1>
                <p className="dark:text-white text-text-blue">Fikni dritat n?? sallat q?? nuk frekuentohen shum?? nga njer??zit.</p>
              </div>
              <div className="mx-auto md:w-96 xl:w-auto xl:pr-48">
                <h1 className="p-1 text-[5rem] font-medium text-accent">08</h1>
                <p className="dark:text-white text-text-blue">Kondicioneri mund t?? harxhoj?? shum?? energji n?? dit??t kur temperatura ??sht?? mesatare. Fikni at?? kur nuk ??sht?? i nevojsh??m.</p>
              </div>
              <div className="mx-auto md:w-96 xl:w-auto xl:pr-48">
                <h1 className="p-1 text-[5rem] font-medium text-accent">09</h1>
                <p className="dark:text-white text-text-blue">Si mas?? afatgjate mund t?? jet?? instalimi i sistemeve diellore p??r ngrohjen e ujit.</p>
              </div>
            </div>
          </div>
        </div>
        <img src={LineIllustration} alt="" />
        {/* Malls */}
        <div ref={mallRef} className="py-16 mall">
          <div className="grid grid-cols-1 xl:grid-cols-3">
            {/* Col 1 */}
            <div className="">
              <div className="flex justify-center xl:justify-start xl:pl-48">
                <h2 className="text-5xl md:text-[5rem] font-bold text-accent">Qendrat <br/>Tregtare</h2>
              </div>
              <div className="">
                <div className="">
                  <h2 className="text-xl font-bold border-b-4 border-accent dark:text-white text-title-blue flex justify-center py-5 p-0 xl:pl-32">SI T?? KURSEJ?? ENERGJI ELEKTRIKE?</h2>
                  <p className="px-5 xl:pl-48 py-5 text-left text-lg dark:text-secondary text-text-blue">Dyqanet e m??dha me shum??llojshm??ri dritash dekorative, reklama t?? shumta, klima dhe pajisje t?? tjera konsumojn?? mjaft shum?? energji,  e cila mund t?? kursehet shum?? leht?? n??se stafi i ??do dyqani informohet p??r m??nyrat e kursimit t?? energjis?? elektrike dhe m?? pastaj inkurajohet p??r aplikimin e tyre. <br/><br/>Ja disa nga k??to k??shilla q?? mund t'i aplikoni leht??:</p>
                </div>
              </div>
            </div>
            {/* Col 2 */}
            <div className="px-5">
              <div className="w-auto md:w-96 xl:w-auto mx-auto">
                <h1 className="p-1 text-[5rem] font-medium text-accent">01</h1>
                <p className="dark:text-white text-text-blue">Minimizoni apo fikni dritat dekoruese dhe reklamuese, pasi q?? ndri??imi i shumt?? reklamues q?? kan?? qendrat tregtare ??sht?? shpenzues mjaft i madh i energjis?? elektrike. </p>
              </div>
              <div className="w-auto md:w-96 xl:w-auto mx-auto">
                <h1 className="p-1 text-[5rem] font-medium text-accent">02</h1>
                <p className="dark:text-white text-text-blue">P??rdorni drita LED, sepse ato jan?? efi??iente.</p>
              </div>
              <div className="w-auto md:w-96 xl:w-auto mx-auto">
                <h1 className="p-1 text-[5rem] font-medium text-accent">03</h1>
                <p className="dark:text-white text-text-blue">Konsideroni instalimin e dyerve automatike ose rrotulluese. L??nia e der??s s?? p??rparme gjer??sisht e hapur do t'ju lejoj?? klient??ve qasje dhe dalje t?? shpejt?? nga nd??rtesa, por n?? t?? nj??jt??n koh?? edhe humbje t?? freskis?? apo nxeht??sis??. </p>
              </div>
              {/* <div className="w-auto xl:w-96 mx-auto">
                <h1 className="p-1 text-[5rem] font-medium text-accent">04</h1>
                <p className="dark:text-white">Programoni ftohjen t?? mos filloj?? derisa temperatura e brendshme t?? kaloj?? 24?? apo ngrohja gjat?? dimrit t?? akordohet nga 18-21 ??C</p>
              </div> */}
            </div>
            {/* Col 3 */}
            <div className="px-5 xl:pr-48 grid content-center">
              <div className="w-auto md:w-96 xl:w-auto mx-auto">
                <h1 className="p-1 text-[5rem] font-medium text-accent">04</h1>
                <p className="dark:text-white text-text-blue">Programoni ftohjen t?? mos filloj?? derisa temperatura e brendshme t?? kaloj?? 24??, apo ngrohja t?? akordohet nga 18-21 ??C gjat?? dimrit.</p>
              </div>
              <div className="w-auto md:w-96 xl:w-auto mx-auto">
                <h1 className="p-1 text-[5rem] font-medium text-accent">05</h1>
                <p className="dark:text-white text-text-blue">N??se keni mund??si, instaloni sensor?? t?? l??vizjes p??r t?? ndezur dhe fikur dritat n?? hap??sirat q?? nuk jan?? n?? p??rdorim t?? vazhduesh??m (p.sh dhomat e prov??s, zona p??r pun??tor??, etj.).</p>
              </div>
              <div className="w-auto md:w-96 xl:w-auto mx-auto">
                <h1 className="p-1 text-[5rem] font-medium text-accent">06</h1>
                <p className="dark:text-white text-text-blue">N??se ??sht?? e mundur, ftohja t?? fiket nj?? or?? para p??rfundimit t?? pun??s.</p>
              </div>
              <div className=""></div>
            </div>
          </div>
        </div>
        <img src={BulbIllustration} alt="" />
        {/* Gastronomy */}
        <div ref={gastronomyRef} className="py-16 gastronomy">
          {/* <div className="flex justify-end container mx-auto">
            <h2 className="text-[5rem] font-bold text-accent">Gastronomia</h2>
          </div> */}
          
          <div className="grid grid-cols-1 xl:grid-cols-3 ">
          <div className="">
              <div className="">
                <div className="flex justify-center xl:justify-start xl:pl-48">
                  <h2 className="text-5xl md:text-[5rem] font-bold text-accent">Gastronomia</h2>
                </div>
                <div className="">
                  <div className="">
                    <h2 className="text-xl font-bold border-b-4 border-accent dark:text-white text-title-blue flex justify-center py-5 p-0 xl:pl-32">SI T?? KURSEJ?? ENERGJI ELEKTRIKE?</h2>
                    <p className="px-5 xl:pl-48 py-5 text-left text-lg dark:text-secondary text-text-blue">Nd??r shpenzuesit m?? t?? m??dhenj t?? energjis?? elektrike n?? restorante ??sht?? p??rgatitja e ushqimit, ftohja dhe ngrohja e ambientit. Ne mund t?? veprojm?? me hapa t?? vegj??l SOT q?? t?? ndihmojm?? sadopak n?? p??rmir??simin e gjendjes elektroenergjetike t?? vendit p??r muajt e v??shtir?? n?? vijim nd??rsa moti ftohet. <br/><br/>Filloni t'i aplikoni k??to ndryshime n?? rutin??n tuaj ditore:</p>
                  </div>
                </div>
              </div>
              <div className="md:p-0 mx-auto ">
                <div className="px-5 w-auto md:w-96 pl-16 mx-auto">
                  <h1 className="p-1 text-[5rem] font-medium text-accent">01</h1>
                  <p className="dark:text-white text-text-blue">Fikni disa nga po??et dekorues q?? nuk do t?? ndikonin n?? uljen e ndri??imit t?? nevojsh??m t?? ambientit.</p>
                </div>
                 
              </div>
            </div>
            <div className="px-5 grid content-center">
              {/* <div className="w-auto xl:w-96 mx-auto">
              <h1 className="p-1 text-[5rem] font-medium text-accent">03</h1>
                <p className="dark:text-white">N??se nuk keni alternativ?? t?? ngrohjes (p??rpos me energji elektrike) p??r dit??t e ftohta, akordoni temostatin n?? at?? m??nyr?? q?? ambienti t?? jet?? i rehatsh??m, por jo i ftoht??. Temperatura e rehatshme e dhom??s gjat?? dimrit parashihet t?? jet?? 19 grad??.</p>
              </div> */}
              <div className="w-auto md:w-96 xl:w-auto mx-auto">
                <h1 className="p-1 text-[5rem] font-medium text-accent">02</h1>
                <p className="dark:text-white text-text-blue">Gjat?? nat??s, mos harroni ta fikni ndri??imin dhe t?? gjitha pajisjet e tjera shpenzuese.</p>
              </div> 
              <div className="w-auto md:w-96 xl:w-auto mx-auto">
                <h1 className="p-1 text-[5rem] font-medium text-accent">03</h1>
                <p className="dark:text-white text-text-blue">Akordoni termostatin e kondicionerit n?? 24 grad?? Celcius, q?? konsiderohet t?? jet?? temperatur?? efi??iente.</p>
              </div>
              <div className="w-auto md:w-96 xl:w-auto mx-auto">
                <h1 className="p-1 text-[5rem] font-medium text-accent">04</h1>
                <p className="dark:text-white text-text-blue">N??se nuk keni alternativ?? t?? ngrohjes (p??rpos me energji elektrike) p??r dit??t e ftohta, akordoni termostatin n?? at?? m??nyr?? q?? ambienti t?? jet?? i rehatsh??m, por jo i ftoht??. Temperatura e rehatshme e dhom??s gjat?? dimrit parashihet t?? jet?? 19 grad??.</p>
              </div>
              
            </div>
            <div className="px-5 grid content-start xl:grid-rows-3">
              <div className="hidden md:flex"></div>
              <div className="xl:pr-48 w-auto md:w-96 xl:w-auto mx-auto">
                <h1 className="p-1 text-[5rem] font-medium text-accent">05</h1>
                <p className="dark:text-white text-text-blue">Gjat?? dit??s, ndalni ngrohjen t??r??sisht p??r disa or??. Kjo nuk do t?? ndikoj?? aq shum?? n?? ndryshimin e temperatur??s s?? rehatshme t?? hap??sirave, por kursimi n?? an??n tjet??r do t?? jet?? i madh.</p>
              </div>
              <div className="xl:pr-48 w-auto md:w-96 xl:w-auto mx-auto">
                <h1 className="p-1 text-[5rem] font-medium text-accent">06</h1>
                <p className="dark:text-white text-text-blue">Parandaloni ngrohjen e hap??sirave t?? caktuara aty ku nuk ka nevoj??, duke vendosur n?? kaldaj??n qendrore nj?? nd??rprer??s kohor (wifi, dixhital apo mekanik).</p>
              </div>
              <div className="xl:pr-48 w-auto md:w-96 xl:w-auto mx-auto">
                <h1 className="p-1 text-[5rem] font-medium text-accent">07</h1>
                <p className="dark:text-white text-text-blue">Nd??rsa si masa afatgjate, ju mund t???i: <br/><br/>- Z??vend??soni po??et tradicional?? me ata efi??ient??; <br/><br/>- Z??vend??soni pajisjet elektrike joefi??ente me pajisje efi??iente, etj.</p>
              </div>
            </div>
          </div>
        </div>
        <img className="" src={ForkIllustration} alt="" />
        {/* Video Two */}
        <div className="py-16 vid-two h-screen flex flex-col justify-center items-center">
          <div className="container mx-auto flex flex-row justify-center items-center content-center p-5 lg:p-0">
            <div className="flex flex-row justify-center items-center justify-items-center itemsce">
              <a href="https://youtube.com" className="">
                <img src={videoTwo} alt="Video One" />
              </a>
            </div>
          </div>
          <div className="flex md:hidden">
            <img src={vidOneIllustartion} alt="Video One" />
          </div>
        </div>
        {/* Institutions */}
        <div ref={institutionRef} className="py-16 institution">
          <div className="xl:pl-48">
            <h2 className="text-5xl flex justify-center xl:justify-start xl:text-[5rem] text-center md:text-left font-bold text-accent">Kompanit?? dhe <br/>Institucionet</h2>
          </div> 
          <div className="grid grid-cols-1 xl:grid-cols-3">
            {/* Col 1 */}
            <div className="">
              {/* <div className="">
                <h2 className="text-[5rem] font-bold text-accent leading-tight pl-48">Kompanit?? dhe <br/>Institucionet</h2>
              </div> */}
              <div className="">
                <h2 className="text-xl font-bold border-b-4 border-accent dark:text-white text-title-blue flex justify-center py-5 xl:pl-32">SI T?? KURSEJ?? ENERGJI ELEKTRIKE?</h2>
                <p className="px-5 xl:pl-48 py-5 text-left text-lg dark:text-secondary text-text-blue">Aq sa ??sht?? e r??nd??sishme t?? kemi furnizim me energji elektrike, po aq jetik ??sht?? edhe kursimi i energjis?? elektrike. P??r kursim sa m?? t?? madh t?? energjis?? elektrike, ndihmes?? t?? madhe paraqet bashk??punimi me t?? gjitha institucionet publike, kompanit?? private, bankat, hotelerit?? dhe t?? gjitha kategorit?? e tjera. Q?? kursimi i energjis?? elektrike t?? jet?? sa m?? leht?? i aplikuesh??m dhe praktik, ne kemi disa rekomandime nga ekspert??t tan??. </p>
              </div>
            </div>
            {/* Col 2 */}
            <div className="px-5 w-auto xl:w-96 grid mx-auto">
              <div className="h-32 hidden xl:flex">
              </div>
              <div className="w-auto md:w-96 xl:w-auto mx-auto">
                <h1 className="p-1 text-[5rem] font-medium text-accent">01</h1>
                <p className="dark:text-white text-text-blue">Meqen??se po i afrohemi stin??ve t?? ftohta, duhet pasur parasysh q?? ngrohja me energji elektrike p??rb??n rreth 70% t?? fatur??s mujore. Nga kjo kuptohet se shpenzuesi m?? i madh i energjis?? ??sht?? ngrohja. Andaj, n??se ??sht?? e mundur siguroni mund??si alternative t?? ngrohjes, sepse mos ngrohja me energji elektrike do ta ndihmonte shum?? sistemin. </p>
              </div>
              <div className="w-auto md:w-96 xl:w-auto mx-auto">
                <h1 className="p-1 text-[5rem] font-medium text-accent">02</h1>
                <p className="dark:text-white text-text-blue">Temperatura e rehatshme e dhom??s gjat?? dimrit parashihet t?? jet?? 18 deri n?? 21 grad??, andaj gjat?? dit??s ngrohja mund t?? ndalet p??r disa or??.</p>
              </div>
            </div>
            {/* Col 3 */}
            <div className="px-5 w-auto xl:w-96 content-start">
              <div className="w-auto md:w-96 xl:w-auto mx-auto">
                <h1 className="p-1 text-[5rem] font-medium text-accent">03</h1>
                <p className="dark:text-white text-text-blue">Kur p??rdorimi i energjis?? elektrike n?? nd??rtesa publike ??sht?? i panevojsh??m pas p??rfundimit t?? pun??s, ne rekomandojm?? q?? t?? b??het shky??ja e t?? gjitha objekteve, p??rve?? aty ku cenohet siguria.</p>
              </div>
              <div className="w-auto md:w-96 xl:w-auto mx-auto">
                <h1 className="p-1 text-[5rem] font-medium text-accent">04</h1>
                <p className="dark:text-white text-text-blue">N?? fund t?? orarit t?? pun??s,  ku ??sht?? e mundur, t?? nd??rpritet energjia elektrike n?? m??nyr?? automatike apo t?? b??het shky??je p??rmes pajisjeve t?? men??ura. N?? koh?? krize, ??do kilovat i kursyer ??sht?? i vlefsh??m, andaj,  t?? fillojm?? nga sot t???i ndalim pajisjet q?? nuk i p??rdorim dhe t?? kursejm?? n?? m??nyr?? maksimale.</p>
              </div>
            </div>
          </div>
        </div>
        <img className="" src={PuzzleIllustration} alt="" />

        {/* <img src={CookingIllustration} alt="" /> */}
        {/* Ad */}
        <div className="mx-auto py-16 flex justify-center">
          {
            darkMode ?
              <img src={adDark} alt="" />
            :
              <img src={ad} alt="" />
          }
        </div>
        {/* Corner Shops */}
        <div ref={shopRef} className="pt-20 shop">
          <div className="xl:pl-48">
            <h2 className="text-5xl flex xl:justify-start justify-center xl:text-right xl:text-[5rem] font-bold text-accent">Dyqanet <br/>e Vogla</h2>
          </div>
          <div className="grid grid-cols-1 xl:grid-cols-3">
            {/* Col 1 */}
            <div className="">
              <div className="">
                <h2 className="text-xl font-bold border-b-4 border-accent dark:text-white text-title-blue flex justify-center py-5 xl:pl-32">SI T?? KURSEJ?? ENERGJI ELEKTRIKE?</h2>
              </div>
              <div className="px-5 xl:pl-48">
                <div className="w-auto md:w-96 xl:w-auto mx-auto">
                  <h1 className="p-1 text-[5rem] font-medium text-accent">01</h1>
                  <p className="dark:text-white text-text-blue">Rregulloni termostatin p??r t'iu p??rshtatur stin??s. Rregullimi i termostatit t?? ftohjes, p??r nj?? ose dy shkall?? m?? lart mund t?? sjell?? kursime t?? m??dha t?? energjis?? elektrike. </p>
                </div>
                <div className="w-auto md:w-96 xl:w-auto mx-auto">
                  <h1 className="p-1 text-[5rem] font-medium text-accent">02</h1>
                  <p className="dark:text-white text-text-blue">Reduktoni p??rdorimin e ujit t?? nxeht?? q?? ngrohet me energji elektrike.</p>
                </div>
              </div>
            </div>
            {/* Col 2 */}
              <div className="w-96 grid mx-auto">
                <div className="h-32 hidden xl:flex"></div>
                <div className="w-auto md:w-96 xl:w-auto mx-auto">
                  <h1 className="p-1 text-[5rem] font-medium text-accent">03</h1>
                  <p className="dark:text-white text-text-blue">Minimizoni ose fikni dritat dekorative dhe reklamuese, pasi q?? ndri??imi i shumt?? i reklamave n?? dyqane ??sht?? shpenzues mjaft i madh i energjis?? elektrike.</p>
                </div>
                <div className="w-auto md:w-96 xl:w-auto mx-auto">
                  <h1 className="p-1 text-[5rem] font-medium text-accent">04</h1>
                  <p className="dark:text-white text-text-blue">Pastroni shpesh po??et elektrike nga pluhuri. Po??et e vjetra dhe grumbullimi i pluhurit n?? sip??rfaqen e tyre mund t?? zvog??loj?? ndri??imin total deri n?? 50%.</p>
                </div>
            </div>
            {/* Col 3 */}
            <div className="px-5 xl:pr-48 grid content-start">
              <div className="w-auto md:w-96 xl:w-auto mx-auto">
                <h1 className="p-1 text-[5rem] font-medium text-accent">05</h1>
                <p className="dark:text-white text-text-blue">Fikni dritat n?? ato hap??sira q?? nuk p??rdoren. P??rdorni llamba efi??iente, pra llamba LED.</p>
              </div>
              <div className="w-auto md:w-96 xl:w-auto mx-auto">
                <h1 className="p-1 text-[5rem] font-medium text-accent">06</h1>
                <p className="dark:text-white text-text-blue">Largoni spin??n e pajisjeve elektronike nga priza. Disa pajisje ende konsumojn?? nj?? sasi t?? vog??l t?? energjis?? elektrike kur futen n?? priz??.</p>
              </div>
            </div>
          </div>
        </div>
        <img src={LightIllustration} alt="" />
        {/* Industries */}
        <div ref={industryRef} className="py-16 industry">
          {/* <div className="flex justify-center xl:justify-end xl:pr-48">
            <h2 className="text-5xl xl:text-[5rem] font-bold text-left xl:text-right  text-accent">Amviseria</h2>
          </div>
          <div className="grid grid-cols-1 xl:grid-cols-3">
                <div className=""></div>
                <div className=""></div>
                <div className="order-1">
                  <h2 className="text-xl font-bold border-b-4 border-accent dark:text-white flex justify-center py-5 xl:pr-28">SI T?? KURSEJ?? ENERGJI ELEKTRIKE?</h2>
                  <p className="xl:pr-48 py-5 px-5 xl:text-right flex justify-center text-lg text-secondary">Amvis??ria si nj?? nd??r shpenzuesit m?? t?? m??dhenj t?? energjis?? elektrike mund t?? kontribuoj?? shum?? n?? uljen e konsumit, sidomos aty ku ka mund??si t?? madhe t?? kursimit. N??se ??do konsumator kursen energji elektrike p??r vete dhe familjen e tij, ne n?? fakt jemi duke kursyer energji edhe p??r konsumator??t e grupeve t?? ndjeshme, t?? cil??ve mund t?? ju nevojitet energjia elektrike m?? shum?? se kurr??. Sipas ekspert??ve t?? KEDS, k??to jan?? disa nga masat q?? konsumator??t sht??piak duhet t???i nd??rmarrin p??r ta kursyer energjin?? elektrike: Dit??ve n?? vijim do ju p??rcjellim udh??zime p??r kursim edhe p??r kategori kategori t?? tjera!</p>
                </div>
          </div> */}
          <div className="grid grid-cols-1 xl:grid-cols-3">
            {/* Col 1 */}
            <div className="">
              <div className="">
                <div className="flex justify-center xl:justify-start xl:pl-48">
                  <h2 className="text-5xl md:text-[5rem] font-bold text-accent">Industria</h2>
                </div>
                <div className="">
                  <div className="">
                    <h2 className="text-xl font-bold border-b-4 border-accent dark:text-white text-title-blue flex justify-center py-5 p-0 xl:pl-32">SI T?? KURSEJ?? ENERGJI ELEKTRIKE?</h2>
                    <p className="px-5 xl:pl-48 py-5 text-left text-lg dark:text-secondary text-text-blue">Me teknikat e duhura t?? kursimit t?? energjis??, sektori industrial q?? p??rdor nj?? sasi t?? madhe t?? energjis?? s?? ofruar n?? bot?? mund t?? kursej?? energji elektrike n??se aplikohen shembujt e m??posht??m: </p>
                  </div>
                </div>
              </div>
              <div className="md:p-0 px-5 mx-auto">
                <div className="w-auto md:w-96 xl:w-auto mx-auto xl:pl-48">
                  <h1 className="p-1 text-[5rem] font-medium text-accent">01</h1>
                  <p className="dark:text-white text-text-blue">Pastrimi i rregullt dhe mir??mbajtja e planifikuar e makinerive optimizon performanc??n dhe jet??gjat??sin?? e k??tyre makinerive dhe mund t?? p??rkthehet n?? kursime t?? m??dha t?? energjis??.</p>
                </div>
                {/* <div className="w-auto mx-auto md:w-auto xl:pl-48">
                  <h1 className="p-1 text-[5rem] font-medium text-accent">02</h1>
                  <p className="dark:text-white">Sipas mund??sis?? shmangni ndri??imin dekorativ dhe p??rdorni vet??m ndri??imin e nevojsh??m p??r hap??sir??n tuaj.</p>
                </div>   */}
              </div>
            </div>
            {/* Col 2 */}
            <div className="grid px-5 w-auto xl:w-96 mx-auto">
                <div className="w-auto md:w-96 xl:w-auto mx-auto">
                  <h1 className="p-1 text-[5rem] font-medium text-accent">02</h1>
                  <p className="dark:text-white text-text-blue">Nj?? m??nyr?? tjet??r e thjesht?? ??sht?? t?? siguroheni q?? t?? gjitha makinerit?? dhe pajisjet t?? fiken kur nuk p??rdoren. P??rdorimi i pajisjeve vet??m kur ju nevojiten mund t?? rezultoj?? n?? kursime t?? konsiderueshme n?? kostot e energjis?? elektrike.</p>
                </div> 
                <div className="w-auto md:w-96 xl:w-auto mx-auto">
                  <h1 className="p-1 text-[5rem] font-medium text-accent">03</h1>
                  <p className="dark:text-white text-text-blue">Sistemet e ftohjes mund t?? shpenzojn?? mjaft shum?? energji elektrike, andaj duhet t?? siguroheni q?? kondicioneri juaj t?? aranzhohet n?? opsion optimal dhe jo m?? shum?? se q?? ??sht?? e nevojshme.</p>
                </div>
                <div className="w-auto md:w-96 xl:w-auto mx-auto">
                  <h1 className="p-1 text-[5rem] font-medium text-accent">04</h1>
                  <p className="dark:text-white text-text-blue">Nj?? dhom?? e mbyllur si?? duhet ndihmon kondicionerin t?? p??rdor?? m?? pak energji.</p>
                </div>
                {/* <div className="">
                  <h1 className="p-1 text-[5rem] font-medium text-accent">05</h1>
                  <p className="dark:text-white text-text-blue">Kujdesi n?? ngroh??sin e ujit (bojlerin) dhe koh??n kur ai p??rdoret. Preferohet t?? ngrohet gjat?? nat??s, me tarif?? t?? ul??t, apo gjat?? dit??s vetem kur ??sht?? i nevojsh??m p??rdorimi i ujit t?? ngroht??. Potencialisht z??vend??simi i tij me ngroh??s diellor.</p>
                </div> */}
            </div>
            <div className="grid content-start px-5">
              <div className="w-auto md:w-96 mx-auto">
                <h1 className="p-1 text-[5rem] font-medium text-accent">05</h1>
                <p className="dark:text-white text-text-blue">Z??vend??simi i nj?? motori t?? vjet??r me fuqi t?? lart?? me nj?? motor me fuqi m?? t?? ul??t dhe m?? efikas ??sht?? nj?? m??nyr?? e shk??lqyer p??r t?? ulur kostot. Ka shum?? industri q?? p??rdorin motor?? t?? vjet??r, t?? cil??t duhet t?? z??vend??sohen n?? m??nyr?? q?? t?? kursehet sa m?? shum?? energji elektrike.</p>
              </div>
              <div className="w-auto md:w-96 mx-auto">
                <h1 className="p-1 text-[5rem] font-medium text-accent">06</h1>
                <p className="dark:text-white text-text-blue">Z??vend??simin i po??eve tradicional me po??e LED me fuqi t?? ul??t.</p>
              </div>
              <div className="h-16 hidden xl:flex"></div>
              <div className="w-auto md:w-96 mx-auto">
                <h1 className="p-1 text-[5rem] font-medium text-accent">07</h1>
                <p className="dark:text-white text-text-blue">Kontrollimi i ndri??imit p??rmes sensor??ve t?? l??vizjes (tualete dhe zona t?? tjera q?? nuk p??rdoren t??r?? koh??n). <br/><br/>#industri #k??shillakursimi</p>
              </div>
            </div>
          </div>
        </div>
        <img className="" src={OutletIllustration} alt="" />
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
                    <h2 className="dark:text-accent text-title-blue">Kurse Rrym??!</h2>
                  :
                    <h2 className="dark:text-accent text-title-blue">Fike Drit??n</h2>
                }
              </h2>
            </div>
          </div>
        </div>
        {/* Footer */}
        <div className="bg-[#1e429a] footer">
          <div className="container mx-auto">
            <div className="grid px-5 grid-cols-1 xl:p-0 lg:grid-cols-3">
              <div className="grid py-10">
                <div className="">
                  <p className="p-2 text-base font-light text-white">P??r ??do infromat?? n?? lidhje me rrjetin <br/>elektrik na kontaktoni n?? numrin pa pages??:</p>
                  <div className="p-2 flex flex-row justify-start items-center">
                    <img className="w-10" src={phoneIcon} alt="Phone" />
                    <h2 className="pl-5 text-2xl font-semibold text-white">0800 791-00</h2>
                  </div>
                </div>
                <div className="">
                  <p className="p-2 text-base font-light text-white">P??r ??do k??rkes?? n?? lidhje me rrjetin elektrik <br/>na shkruani n?? email adres??n:</p>
                  <div className="p-2 flex flex-row justify-start items-center">
                    <img className="w-10" src={mailIcon} alt="e-Mail" />
                    <h2 className="pl-5 text-2xl font-semibold text-white">info@keds-energy.com</h2>
                  </div>
                </div>
              </div>
              <div className="grid py-10">
                <div className="">
                  <p className="p-2 text-base font-light text-white">K??rkesat tuaja mund t'i parashtroni <br/>n?? zyret e KEDS-it n?? 7 qytetet e Kosov??s.</p>
                  <div className="p-2 flex flex-row justify-start items-center">
                    <img className="w-10" src={locationIcon} alt="Location Marker" />
                    <h2 className="pl-5 text-2xl font-semibold text-white">Zyret m?? t?? af??rta t?? Keds</h2>
                  </div>
                </div>
                <div className="">
                  <p className="p-2 text-base font-light text-white">Shikoni n??se zona juaj ??sht?? p??rfshir?? <br/>n?? pun??t e planifikuara n?? rrjet. <br/>Kontrolloni hart??n p??r nd??rprerje</p>
                  <div className="p-2 flex flex-row justify-start items-center">
                    <img className="w-10" src={clickIcon} alt="Pointer Icon" />
                    <h2 className="pl-5 text-2xl font-semibold text-white">Kliko K??tu</h2>
                  </div>
                </div>
              </div>
              <div className="grid pt-10">
                <div className="flex items-start justify-center">
                  <h2 className="p-2 text-3xl font-semibold text-white">Kompania Kosovare p??r Distribuim t?? Energjis?? Elektrike - KEDS sh.a.</h2>
                </div>
                <div className="flex items-start">
                  <img className="p-1 w-48" src={KescoWhite} alt="KEDS Energy"/>
                  <img className="p-1 w-32" src={LogoWhite} alt="" />
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