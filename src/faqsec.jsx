import React from "react";
import "./faqsec.css";
const Faqsection = () => {
  return (
    <>
      <div className="faqsection">
        <div className="faqsec">
          <div className="faqheading">
            <h1>Frequently Asked Questions</h1>
          </div>

          <div className="faq-boxes">
            {/* 1faq */}
            <div className="faq">
              <div className="faqbox">
                <div className="peras">
                  <p>What is Netflix?</p>
                  <img src={require("./ntfimages/icons8-plus-24.png")} alt="" />
                  {/* <p className='span'>&#43;</p> */}
                </div>
              </div>
              <div className="perehide">
                <p>
                  Netflix is a streaming service that offers a wide variety of
                  award-winning TV shows, movies, anime, documentaries and more
                  – on thousands of internet-connected devices.
                </p>
                <p>
                  {" "}
                  You can watch as much as you want, whenever you want, without
                  a single ad – all for one low monthly price. There's always
                  something new to discover, and new TV shows and movies are
                  added every week!
                </p>
              </div>
            </div>

            {/* 2faq */}
            <div className="faq">
              <div className="faqbox">
                <div className="peras">
                  <p>What is Netflix?</p>
                  <img src={require("./ntfimages/icons8-plus-24.png")} alt="" />
                  {/* <p className='span'>&#43;</p> */}
                </div>
              </div>
              <div className="perehide">
                <p>
                  Netflix is a streaming service that offers a wide variety of
                  award-winning TV shows, movies, anime, documentaries and more
                  – on thousands of internet-connected devices.
                </p>
              </div>
            </div>

            {/* 3faq */}
            <div className="faq">
              <div className="faqbox">
                <div className="peras">
                  <p>What is Netflix?</p>
                  <img src={require("./ntfimages/icons8-plus-24.png")} alt="" />
                  {/* <p className='span'>&#43;</p> */}
                </div>
              </div>
              <div className="perehide">
                <p>
                  Netflix is a streaming service that offers a wide variety of
                  award-winning TV shows, movies, anime, documentaries and more
                  – on thousands of internet-connected devices.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Faqsection;
