import React from "react";
import "./ntfhome.css";
import Ntfnavbar from "./ntfnavbar";
import Ntfherosection from "./ntfherosec";
import Ntfsecondsection from "./ntfsecondsec";
import NtfThirdsec from "./ntfthirdsec";
import Ntffourthsec from "./ntffourthsec";
import Ntffifthsec from "./ntffifthsec";
import Nqtfaqsection from "./nqtfaqsec";
import NftFooter from "./footer";

const NTFhome = () => {
  return (
    <>
      <div className="home">
        <div className="homepage">

          <Ntfnavbar dashboardLink="/Signupafterpage"></Ntfnavbar>
          <Ntfherosection></Ntfherosection>
          <Ntfsecondsection></Ntfsecondsection>
          <NtfThirdsec></NtfThirdsec>
          <Ntffourthsec></Ntffourthsec>
          <Ntffifthsec></Ntffifthsec>
          <Nqtfaqsection></Nqtfaqsection>
          <NftFooter></NftFooter>
          
        </div>
      </div>
    </>
  );
};

export default NTFhome;
