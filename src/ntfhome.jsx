import React from "react";
import "./ntfhome.css";
import Ntfnavbar from "./ntfnavbar";
import Ntfherosection from "./ntfherosec";
import Ntfsecondsection from "./ntfsecondsec";
import NtfThirdsec from "./ntfthirdsec";
import Ntffourthsec from "./ntffourthsec";
import Ntffifthsec from "./ntffifthsec";
// import Faqsection from './faqsec'
import Nqtfaqsection from "./nqtfaqsec";
import NftFooter from "./footer";

const NTFhome = () => {
  return (
    <>
      <div className="home">
        <div className="homepage">
          {/* <img src={require ("../src/ntfimages/NTFhomepageimg.jpg")} alt="aaa" /> */}
          {/* image rgba is not working properly */}
          {/* <h1>hai</h1> */}

          <Ntfnavbar></Ntfnavbar>
          <Ntfherosection></Ntfherosection>
          <Ntfsecondsection></Ntfsecondsection>
          <NtfThirdsec></NtfThirdsec>
          <Ntffourthsec></Ntffourthsec>
          <Ntffifthsec></Ntffifthsec>
          {/* <Faqsection></Faqsection> */}

          <Nqtfaqsection></Nqtfaqsection>
          <NftFooter></NftFooter>
          
        </div>
      </div>
    </>
  );
};

export default NTFhome;
