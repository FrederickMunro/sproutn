import { InlineWidget, PopupButton } from 'react-calendly';
import logo from '../../assets/blacksproutn.PNG (1).png';
import carouselIcon from '../../assets/IMG_6791.JPG.jpg';
import ipad from '../../assets/Proto.png';

import { FaAndroid, FaAmazon, FaAngular, FaCcVisa, FaBtc } from "react-icons/fa";
import { BsGraphDownArrow } from "react-icons/bs";
import { RiTimerFlashFill } from "react-icons/ri";
import { TbExchange } from "react-icons/tb";


import './Home.css';
import ItemContainer from '../ItemContainer';
import Step from '../Step';
import Steps from '../Steps';
import Review from '../Review';
import TableComponent from '../TableComponent';

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
                    <ItemContainer>
                        <img className='home-ipad' src={ipad} />
                    </ItemContainer>
                </div>
            </div>

            <div className='logo-box'>
                <h3>Where ideas take root and brands blossom</h3>
                <div className='logo-carousel'>
                    <FaAndroid />
                    <FaAmazon />
                    <FaAngular />
                    <FaCcVisa />
                    <FaBtc />
                    
                    <FaAndroid />
                    <FaAmazon />
                    <FaAngular />
                    <FaCcVisa />
                    <FaBtc />
                </div>
            </div>
            
            <div className="probsta-box">
                <ItemContainer>
                    <h2 className='probsta-h2'>90% of ecomm businesses fail within 120 days</h2>
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
                            <BsGraphDownArrow />
                            <div>
                                <h3 className='benefit-h3'>Reduced risk</h3>
                                <p className='benefit-p'>Save more than $4000 from mitigated mistakes and better workflows</p>
                            </div>
                        </div>
                    </ItemContainer>
                    <ItemContainer>
                        <div className='benefit'>
                            <RiTimerFlashFill />
                            <div>
                                <h3 className='benefit-h3'>Faster results</h3>
                                <p className='benefit-p'>Save over 6 months to launch through smooth processes and proper planning</p>
                            </div>
                        </div>
                    </ItemContainer>
                    <ItemContainer>
                        <div className='benefit'>
                            <TbExchange />
                            <div>
                                <h3 className='benefit-h3'>Adaptive supply chain</h3>
                                <p className='benefit-p'>Remove the pain of scaling with our years of experience with manufacturer relationship building skills</p>
                            </div>
                        </div>
                    </ItemContainer>
                </div>
            </div>

            <TableComponent />

            <div className='success-box'>
                <ItemContainer>
                    <h2 className='success-title'>Client Successes</h2>
                </ItemContainer>
                <Review reviewText="Sprout'n made growing my brand so easy! The team was professional, efficient, and truly cared about my success." date='May 2024' />
                <Review reviewText="Sprout'n helped me build a strong foundation for my brand. I couldn't be happier with the outcome." date='Dev 2024' />
            </div>

            <div className='how-box'>
                <ItemContainer>
                    <h2 className='how-h2'>From a dream to reality</h2>
                </ItemContainer>
                <ItemContainer>
                    <p className='how-p'>Unlock only the steps you want</p>
                </ItemContainer>
                <div className='step-box'>
                    <Steps />
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
                    <PopupButton
                        url='https://calendly.com/munro-development/30min'
                        rootElement={document.getElementById("root")!}
                        text="BOOK NOW"
                        styles={{
                            color: 'white',
                            backgroundColor: '#242424',
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