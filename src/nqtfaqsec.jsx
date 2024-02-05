import React from 'react'
import './nqtfaqsec.css'
const Nqtfaqsection = () => {
  return (
    <>
    <div className="nqtfaqsection">
        <div className="nqtfaqsec">
                <div className="nqtfaqheading">
                     <h1>Frequently Asked Questions</h1>
                </div>

            {/* faq1 */}
            <div className="nqtfaq-boxes">
                <div className="nqtfaq">
                    <details className="nqtperehide">
                        <summary className="nqtlabel-faq-text">
                            <div className="peragraphs"> 
                                <p>What is Netflix?</p>
                                <img src={require ("./ntfimages/icons8-plus-24.png")} alt="" />
                            </div>
                        </summary>
                        <p className='perafaq'>Beej Network has a diversified group of investors & founders who operate in the financial ecosystem for economic growth & success.</p>
                    </details> 
                </div>
            </div>
            {/* faq2 */}
                <div className="nqtfaq-boxes">
                    <div className="nqtfaq">
                        <details className="nqtperehide">
                            <summary className="nqtlabel-faq-text">
                                <div className="peragraphs"> 
                                    <p>What is Netflix?</p>
                                    <img src={require ("./ntfimages/icons8-plus-24.png")} alt="" />
                                </div>
                            </summary>
                            <p className='perafaq'>Beej Network has a diversified group of investors & founders who operate in the financial ecosystem for economic growth & success.</p>
                        </details> 
                    </div>
                </div>  
            {/* faq3 */}
            <div className="nqtfaq-boxes">
                <div className="nqtfaq">
                    <details className="nqtperehide">
                        <summary className="nqtlabel-faq-text">
                            <div className="peragraphs"> 
                                <p>What is Netflix?</p>
                                <img src={require ("./ntfimages/icons8-plus-24.png")} alt="" />
                            </div>
                        </summary>
                        <p className='perafaq'>Beej Network has a diversified group of investors & founders who operate in the financial ecosystem for economic growth & success.</p>
                    </details> 
                </div>
            </div>
            {/* faq4 */}
            <div className="nqtfaq-boxes">
                <div className="nqtfaq">
                    <details className="nqtperehide">
                        <summary className="nqtlabel-faq-text">
                            <div className="peragraphs"> 
                                <p>What is Netflix?</p>
                                <img src={require ("./ntfimages/icons8-plus-24.png")} alt="" />
                            </div>
                        </summary>
                        <p className='perafaq'>Beej Network has a diversified group of investors & founders who operate in the financial ecosystem for economic growth & success.</p>
                    </details> 
                </div>
            </div>
            {/* faq5 */}
            <div className="nqtfaq-boxes">
                <div className="nqtfaq">
                    <details className="nqtperehide">
                        <summary className="nqtlabel-faq-text">
                            <div className="peragraphs"> 
                                <p>What is Netflix?</p>
                                <img src={require ("./ntfimages/icons8-plus-24.png")} alt="" />
                            </div>
                        </summary>
                        <p className='perafaq'>Beej Network has a diversified group of investors & founders who operate in the financial ecosystem for economic growth & success.</p>
                    </details> 
                </div>
            </div>
            {/* faq6 */}
            <div className="nqtfaq-boxes">
                <div className="nqtfaq">
                    <details className="nqtperehide">
                        <summary className="nqtlabel-faq-text">
                            <div className="peragraphs"> 
                                <p>What is Netflix?</p>
                                <img src={require ("./ntfimages/icons8-plus-24.png")} alt="" />
                            </div>
                        </summary>
                        <div className='perafaq'>
                            <p>The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and films in their own space.</p>
                            <p>Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don’t want kids to see.</p>
                        </div>
                    </details> 
                </div>
            </div>
            {/* faqs*/}

        </div>

       <div className="lastpera">
        <h2>Ready to watch? Enter your email to create or restart your membership.</h2>
       <div className="herosec-searchbox">
                    <div className="hero-searchboxinput">
                        <input type="email" placeholder='Email address' />
                    </div>
                    <div className="hero-searchboxbtn"> 
                        <button>Get Started <span>&gt;</span></button>
                    </div>
                </div>
       </div>
    </div>

    </>
  )
}

export default Nqtfaqsection
