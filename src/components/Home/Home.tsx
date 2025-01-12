import { InlineWidget, PopupButton } from 'react-calendly';
import logo from '../../assets/blacksproutn.PNG (1).png';

import './Home.css';
import ItemContainer from '../ItemContainer';

const Home = () => {
    return(
        <div className='home-container'>
            <ItemContainer>
                <div className='hero-box'>
                    <h2>Starting a business, made easier</h2>
                    {/* <p>Proin eu vulputate orci. Fusce rhoncus sapien id ipsum sodales, suscipit iaculis massa bibendum.</p> */}
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
                </div>
            </ItemContainer>

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
                        <ItemContainer>
                            <div className="reason">
                                <p className='reason-percent'>82%</p>
                                <p className='reason-fact'>Cash flow problems</p>
                            </div>
                        </ItemContainer>
                        <ItemContainer distance={0.2}>
                            <div className="reason">
                                <p className='reason-percent'>38%</p>
                                <p className='reason-fact'>Not having a good business plan</p>
                            </div>
                        </ItemContainer>
                        <ItemContainer distance={0.3}>
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
                            <p className='benefit-p'>Save more than $2000 from reducing costs and mitigating useless spend to improve your cash flow from the start</p>
                        </div>
                    </ItemContainer>
                    <ItemContainer>
                        <div className='benefit'>
                            <img className='benefit-icon' src={logo} />
                            <h3 className='benefit-h3'>Faster results</h3>
                            <p className='benefit-p'>Save over 6 months to launch through streamlined processes and proper planning</p>
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
                            <h3 className='step-h3'>1</h3>
                            <div className='step-text'>
                                <h2 className='step-h2'>Discovery meeting</h2>
                                <p className='step-p'>Explain your vision and goals before taking on any risk</p>
                            </div>
                        </div>
                    </ItemContainer>
                    <ItemContainer>
                        <div className="arrow" />
                    </ItemContainer>
                    <ItemContainer>
                        <div className='step'>
                            <h3 className='step-h3'>2</h3>
                            <div className='step-text'>
                                <h2>Taste your dream</h2>
                                <p className='step-p'>See a customized sample of your idea and perfect your product</p>
                            </div>
                        </div>
                    </ItemContainer>
                    <ItemContainer>
                        <div className="arrow" />
                    </ItemContainer>
                    <ItemContainer>
                        <div className='step'>
                            <h3 className='step-h3'>3</h3>
                            <div className='step-text'>
                                <h2>Order and receive</h2>
                                <p className='step-p'>Order and receive: Order the right quantity and save on transportation </p>
                            </div>
                        </div>
                    </ItemContainer>
                    <ItemContainer>
                            <div className="arrow" />
                    </ItemContainer>
                    <ItemContainer>
                        <div className='step'>
                            <h3 className='step-h3'>4</h3>
                            <div className='step-text'>
                                <h2>Professional product shots</h2>
                                <p className='step-p'>Save time and money getting high quality photography and editing done for your product listings and marketing</p>
                            </div>
                        </div>
                    </ItemContainer>
                    <ItemContainer>
                        <div className="arrow" />
                    </ItemContainer>
                    <ItemContainer>
                        <div className='step'>
                            <h3 className='step-h3'>5</h3>
                            <div className='step-text'>
                                <h2>Marketing plan</h2>
                                <p className='step-p'>Get support in your marketing launch plan </p>
                            </div>
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