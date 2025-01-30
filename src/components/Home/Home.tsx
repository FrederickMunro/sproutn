import { PopupButton } from 'react-calendly';
import { BsGraphDownArrow } from "react-icons/bs";
import { RiTimerFlashFill } from "react-icons/ri";
import { TbExchange } from "react-icons/tb";


import './Home.css';
import ItemContainer from '../ItemContainer';
import Steps from '../Steps';
import Review from '../Review';
import TableComponent from './TableComponent';
import TitleBox from './TitleBox';
import LogoCarouselBox from './LogoCarouselBox';

const Home = () => {
    return(
        <div className='home-container'>
            <TitleBox />
            <LogoCarouselBox />
            
            <div className="probsta-box">
                <div className='probsta-titles'>
                    <ItemContainer anim={'appear'} anim2={'up'} time={'8'} threshold={0.5}>
                        <h2 className='probsta-h2'>90% of ecomm businesses fail within 120 days</h2>
                    </ItemContainer>
                    <ItemContainer anim={'appear'} anim2={'up'} time={'10'} threshold={0.5}>
                        <p className='probsta-p'>Why do ideas fail?</p>
                    </ItemContainer>
                </div>
                <div className='probsta-container'>
                    <div className='reason-container'>
                        <ItemContainer anim={'appear'} anim2={'right'} time={'6'} threshold={0.45}>
                            <div className='reason one'>
                                <h2 className='reason-percent'>82%</h2>
                                <p className='reason-fact top'>of e-commerce businesses fail due to cash flow problems. We help you avoid common pitfalls with proven financial planning.</p>
                            </div>
                        </ItemContainer>
                    </div>
                    <div className='reason-container'>
                        <ItemContainer anim={'appear'} anim2={'left'} time={'6'} threshold={0.45}>
                            <div className='reason-container'>
                                <div className='reason two'>
                                    <h2 className='reason-percent'>38%</h2>
                                    <p className='reason-fact top'>of startups lack a solid business plan. Our experts guide you through creating a roadmap for success.</p>
                                </div>
                            </div>
                        </ItemContainer>
                    </div>
                    <div className='reason-container'>
                        <ItemContainer anim={'appear'} anim2={'right'} time={'6'} threshold={0.45}>
                            <div className='reason three'>
                                <h2 className='reason-percent'>14%</h2>
                                <p className='reason-fact bot'>of e-commerce businesses struggle with marketing. We provide tailored strategies to boost your brand visibility, drive traffic, and increase sales.</p>
                            </div>
                        </ItemContainer>
                    </div>
                </div>
            </div>

            <div className='why-box'>
                <ItemContainer anim={'up'} time={'6'}>
                    <h2 className='why-h2'>Why start with us?</h2>
                </ItemContainer>
                <div className='benefit-box'>
                    <ItemContainer anim={'right'} time={'6'}>
                        <div className='benefit'>
                            <BsGraphDownArrow />
                            <div>
                                <h3 className='benefit-h3'>Reduced risk</h3>
                                <p className='benefit-p'>Save more than $4000 from mitigated mistakes and better workflows</p>
                            </div>
                        </div>
                    </ItemContainer>
                    <ItemContainer anim={'up'} anim2={'appear'} time={'6'}>
                        <div className='benefit'>
                            <RiTimerFlashFill />
                            <div>
                                <h3 className='benefit-h3'>Faster results</h3>
                                <p className='benefit-p'>Save over 6 months to launch through smooth processes and proper planning</p>
                            </div>
                        </div>
                    </ItemContainer>
                    <ItemContainer anim={'up'} anim2={'appear'} time={'6'}>
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
                <ItemContainer anim={'up'} anim2={'appear'} time={'6'}>
                    <h2 className='success-title'>Client Successes</h2>
                </ItemContainer>
                <Review reviewText="Sprout'n made growing my brand so easy! The team was professional, efficient, and truly cared about my success." date='May 2024' />
                <Review reviewText="Sprout'n helped me build a strong foundation for my brand. I couldn't be happier with the outcome." date='Dev 2024' />
            </div>

            <div className='how-box'>
                <ItemContainer anim={'up'} anim2={'appear'} time={'6'}>
                    <h2 className='how-h2'>From a dream to reality</h2>
                </ItemContainer>
                <ItemContainer anim={'up'} anim2={'appear'} time={'6'}>
                    <p className='how-p'>Unlock only the steps you want</p>
                </ItemContainer>
                <div className='step-box'>
                    <Steps />
                </div>
            </div>


            <div className='calendar-box'>
                <ItemContainer anim={'up'} anim2={'appear'} time={'6'}>
                    <h2 className='calendar-h2'>Ready to give your idea a chance?</h2>
                </ItemContainer>
                <ItemContainer anim={'up'} anim2={'appear'} time={'6'}>
                    <p className='calendar-p'>Book a meeting with us!</p>
                </ItemContainer>
                <ItemContainer anim={'up'} anim2={'appear'} time={'6'}>
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