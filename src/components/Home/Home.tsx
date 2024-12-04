import { InlineWidget, PopupButton } from 'react-calendly';
import logo from '../../assets/blacksproutn.PNG (1).png';

import './Home.css';
import ItemContainer from '../ItemContainer';

const Home = () => {
    return(
        <div className='home-container'>
            <ItemContainer>
                <div className='hero-box'>
                    <h2>Hero message</h2>
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
            
                <div className="probsta-box">
                    <ItemContainer>
                        <h2 className='probsta-h2'>90% of ecomm businesses fail within 120 days</h2>
                    </ItemContainer>
                    <ItemContainer>
                        <p className='probsta-p'>Why do ideas fail?</p>
                    </ItemContainer>
                    <ItemContainer>
                        <div className="reasons-box">
                            <div className="reason">
                                <p className='reason-percent'>82%</p>
                                <p className='reason-fact'>Cash flow problems</p>
                            </div>
                            <div className="reason">
                                <p className='reason-percent'>38%</p>
                                <p className='reason-fact'>Not having a good business plan</p>
                            </div>
                            <div className="reason">
                                <p className='reason-percent'>14%</p>
                                <p className='reason-fact'>Lack of marketing</p>
                            </div>
                        </div>
                    </ItemContainer>
                </div>

            <div className='why-box'>
                <ItemContainer>
                    <h2 className='why-h2'>Why start with us?</h2>
                </ItemContainer>
                <div className='benefit-box'>
                    <ItemContainer>
                        <div className='benefit'>
                            <img className='benefit-icon' src={logo} />
                            <h3 className='benefit-h3'>Benefit 1</h3>
                            <p className='benefit-p'>Reduced risk: Save more than $2000 from reducing costs and mitigating useless spend to improve your cash flow from the start</p>
                        </div>
                    </ItemContainer>
                    <ItemContainer>
                        <div className='benefit'>
                            <img className='benefit-icon' src={logo} />
                            <h3 className='benefit-h3'>Benefit 2</h3>
                            <p className='benefit-p'>Faster results: Save over 6 months to launch through streamlined processes and proper planning</p>
                        </div>
                    </ItemContainer>
                    <ItemContainer>
                        <div className='benefit'>
                            <img className='benefit-icon' src={logo} />
                            <h3 className='benefit-h3'>Benefit 3</h3>
                            <p className='benefit-p'>Adaptive supply chain: Remove the pain of scaling with our years of experience with manufacturer relationship building skills</p>
                        </div>
                    </ItemContainer>
                </div>
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
                            <h3 className='step-h3'>Step 1</h3>
                            <p className='step-p'>Discovery meeting: Explain your vision and goals before taking on any risk</p>
                        </div>
                    </ItemContainer>
                    <ItemContainer>
                        <div className="arrow" />
                    </ItemContainer>
                    <ItemContainer>
                        <div className='step'>
                            <h3 className='step-h3'>Step 2</h3>
                            <p className='step-p'>Taste your dream: See a customized sample of your idea and perfect your product</p>
                        </div>
                    </ItemContainer>
                    <ItemContainer>
                        <div className="arrow" />
                    </ItemContainer>
                    <ItemContainer>
                        <div className='step'>
                            <h3 className='step-h3'>Step 3</h3>
                            <p className='step-p'>Order and receive: Order the right quantity and save on transportation </p>
                        </div>
                    </ItemContainer>
                    <ItemContainer>
                            <div className="arrow" />
                    </ItemContainer>
                    <ItemContainer>
                        <div className='step'>
                            <h3 className='step-h3'>Step 4</h3>
                            <p className='step-p'>Professional product shots: Save time and money getting high quality photography and editing done for your product listings and marketing</p>
                        </div>
                    </ItemContainer>
                    <ItemContainer>
                        <div className="arrow" />
                    </ItemContainer>
                    <ItemContainer>
                        <div className='step'>
                            <h3 className='step-h3'>Step 5</h3>
                            <p className='step-p'>Marketing plan: Get support in your marketing launch plan </p>
                        </div>
                    </ItemContainer>
                </div>
            </div>


            <div className='success-box'>
                <ItemContainer>
                    <h2 className='success-title'>Client Successes</h2>
                </ItemContainer>
            </div>

            <div className='calendar-box'>
                <ItemContainer>
                    <h2 className='calendar-h2'>Ready to give your idea a chance?</h2>
                </ItemContainer>
                <ItemContainer>
                    <p className='calendar-p'>Book a meeting with us!</p>
                </ItemContainer>
                <ItemContainer>
                    <div className='calendar-holder'>
                        <InlineWidget
                            url="https://calendly.com/munro-development/30min?hide_landing_page_details=1&hide_gdpr_banner=1&background_color=242424&text_color=ffffff&primary_color=242424"
                            styles={{
                                width: '100%',
                                minWidth: '350px',
                                height: '839px',
                                boxShadow: '0 px 10px rgba(255, 255, 255, 1)'
                            }}
                        />
                    </div>
                </ItemContainer>
            </div>
        </div>
    );
}

export default Home;