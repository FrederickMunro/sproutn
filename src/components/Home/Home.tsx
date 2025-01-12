import { InlineWidget, PopupButton } from 'react-calendly';
import logo from '../../assets/blacksproutn.PNG (1).png';

import './Home.css';
import ItemContainer from '../ItemContainer';

const Home = () => {
    return(
        <div className='home-container'>
            <div className='hero-gradient-container'>
                <div className='header-container'>
                    <ItemContainer only={true}>
                        <p className='header-top'>Rooted in your success</p>
                        <img className='header-logo' src={logo} />
                    </ItemContainer>
                </div>
                <div className='hero-box'>
                    <ItemContainer>
                        <h2 className='hero-box-text h2'>Starting a business, made that much easier</h2>
                    </ItemContainer>
                    <ItemContainer>
                        <h3 className='hero-box-text h3'>Streamlining your process from idea to launched product with higher rates of success</h3>
                    </ItemContainer>
                    <ItemContainer>
                        <PopupButton
                            url='https://calendly.com/munro-development/30min'
                            rootElement={document.getElementById("root")!}
                            text="START NOW"
                            styles={{
                                color: '#242424',
                                backgroundColor: 'white',
                                fontSize: '1.3rem',
                                width: '15rem',
                                marginTop: '2rem',
                                fontWeight: 'bold',
                                cursor: 'pointer'
                            }}
                        />
                    </ItemContainer>
                </div>
            </div>

            <div className='logo-box'>

            </div>

            <div className='info-box'>
                <h2>90% of ecomm businesses fail within 120 days</h2>
            </div>
            
                <div className="probsta-box">
                    <ItemContainer>
                        <h2 className='probsta-h2'></h2>
                    </ItemContainer>
                    <ItemContainer>
                        <p className='probsta-p'>Why do ideas fail?</p>
                    </ItemContainer>
                        <div className="reasons-box">
                            <ItemContainer fillHeight={true}>
                                <div className="reason">
                                    <p className='reason-percent'>82%</p>
                                    <p className='reason-fact'>Cash flow problems</p>
                                </div>
                            </ItemContainer>
                            <ItemContainer fillHeight={true} threshold={0.25}>
                                <div className="reason">
                                    <p className='reason-percent'>38%</p>
                                    <p className='reason-fact'>Not having a good business plan</p>
                                </div>
                            </ItemContainer>
                            <ItemContainer fillHeight={true} threshold={0.4}>
                                <div className="reason">
                                    <p className='reason-percent'>14%</p>
                                    <p className='reason-fact'>Lack of marketing</p>
                                </div>
                            </ItemContainer>
                        </div>   
                </div>

            <div className='why-box'>
                <ItemContainer>
                    <h2 className='why-h2'>Why start with us?</h2>
                </ItemContainer>
                <div className='benefit-box'>
                    <ItemContainer>
                        <div className='benefit'>
                            <img className='benefit-icon' src={logo} />
                            <h3 className='benefit-h3'>Reduced risk</h3>
                            <p className='benefit-p'>Save more than $4000 from mitigated mistakes and better workflows</p>
                        </div>
                    </ItemContainer>
                    <ItemContainer>
                        <div className='benefit'>
                            <img className='benefit-icon' src={logo} />
                            <h3 className='benefit-h3'>Faster results</h3>
                            <p className='benefit-p'>Save over 6 months to launch through smooth processes and proper planning</p>
                        </div>
                    </ItemContainer>
                    <ItemContainer>
                        <div className='benefit'>
                            <img className='benefit-icon' src={logo} />
                            <h3 className='benefit-h3'>Adaptive supply chain</h3>
                            <p className='benefit-p'>Remove the pain of scaling with our years of experience with manufacturer relationship building skills</p>
                        </div>
                    </ItemContainer>
                </div>
            </div>

            <div className='success-box'>
                <ItemContainer>
                    <h2 className='success-title'>Client Successes</h2>
                </ItemContainer>
            </div>

            <div className='how-box'>
                <ItemContainer>
                    <h2 className='how-h2'>From a dream to reality</h2>
                </ItemContainer>
                <ItemContainer>
                    <p className='how-p'>Unlock only the steps you want</p>
                </ItemContainer>
                <div className='step-box'>
                    <ItemContainer>
                        <div className='step'>
                            <h3 className='step-h3'>Free discovery meeting</h3>
                            <p className='step-p'>Explain your vision and goals before taking on any risk</p>
                        </div>
                    </ItemContainer>
                    <ItemContainer>
                        <div className="arrow" />
                    </ItemContainer>
                    <ItemContainer>
                        <div className='step'>
                            <h3 className='step-h3'>Taste your dream</h3>
                            <p className='step-p'>See a customized sample of your idea and perfect your product</p>
                        </div>
                    </ItemContainer>
                    <ItemContainer>
                        <div className="arrow" />
                    </ItemContainer>
                    <ItemContainer>
                        <div className='step'>
                            <h3 className='step-h3'>Order and receive</h3>
                            <p className='step-p'>Order the right quantity and save on transportation</p>
                        </div>
                    </ItemContainer>
                    <ItemContainer>
                            <div className="arrow" />
                    </ItemContainer>
                    <ItemContainer>
                        <div className='step'>
                            <h3 className='step-h3'>Professional product shots</h3>
                            <p className='step-p'>Save time and money getting high quality photography and editing done for your product listings and marketing</p>
                        </div>
                    </ItemContainer>
                    <ItemContainer>
                        <div className="arrow" />
                    </ItemContainer>
                    <ItemContainer>
                        <div className='step'>
                            <h3 className='step-h3'>Marketing plan</h3>
                            <p className='step-p'>Get support in your marketing launch plan</p>
                        </div>
                    </ItemContainer>
                </div>
            </div>


            <div className='calendar-box'>
                <ItemContainer>
                    <h2 className='calendar-h2'>Ready to give your idea a chance?</h2>
                </ItemContainer>
                <ItemContainer>
                    <p className='calendar-p'>Book a meeting with us!</p>
                </ItemContainer>
                <ItemContainer only={true}>
                        {/* <InlineWidget
                            url="https://calendly.com/munro-development/30min?hide_landing_page_details=1&hide_gdpr_banner=1&background_color=242424&text_color=ffffff&primary_color=242424"
                            styles={{
                                width: '100%',
                                minWidth: '350px',
                                height: '839px',
                                boxShadow: '0 px 10px rgba(255, 255, 255, 1)'
                            }}
                        /> */}
                    <PopupButton
                        url='https://calendly.com/munro-development/30min'
                        rootElement={document.getElementById("root")!}
                        text="BOOK NOW"
                        styles={{
                            color: '#242424',
                            backgroundColor: 'white',
                            fontSize: '1.3rem',
                            width: '15rem',
                            marginTop: '2rem',
                            fontWeight: 'bold',
                            cursor: 'pointer'
                        }}
                    />
                </ItemContainer>
            </div>
        </div>
    );
}

export default Home;