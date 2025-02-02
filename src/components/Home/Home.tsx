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
import Stat from './Stat';
import TimelineAnim from './TimelineAnim';

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
                        <p className='probsta-p'>Here's why ideas fail</p>
                    </ItemContainer>
                </div>
                <div className='probsta-container'>
                    <div className='reason-container'>
                        <ItemContainer anim={'appear'} anim2={'right'} time={'6'} threshold={0.3}>
                            <div className='reason one'>
                                <h2 className='reason-percent'>
                                    <Stat stat={82} />
                                    <span className='percent'>%</span>
                                </h2>
                                <p className='reason-fact top'>fail due to cash flow problems</p>
                                <p className='reason-fact'>We provide proven financial strategies to keep your business thriving</p>
                            </div>
                        </ItemContainer>
                    </div>
                    <div className='reason-container'>
                        <ItemContainer anim={'appear'} anim2={'left'} time={'6'} threshold={0.3}>
                            <div className='reason-container'>
                                <div className='reason two'>
                                    <h2 className='reason-percent'>
                                        <Stat stat={38} />
                                        <span className='percent'>%</span>
                                    </h2>
                                    <p className='reason-fact top'>lack a solid business plan</p>
                                    <p className='reason-fact'>Our experts will guide you through creating a roadmap for success</p>
                                </div>
                            </div>
                        </ItemContainer>
                    </div>
                    <div className='reason-container'>
                        <ItemContainer anim={'appear'} anim2={'right'} time={'6'} threshold={0.3}>
                            <div className='reason three'>
                                <h2 className='reason-percent'>
                                    <Stat stat={14} />
                                    <span className='percent'>%</span>
                                </h2>
                                <p className='reason-fact top'>struggle with marketing</p>
                                <p className='reason-fact'>We provide tailored strategies to boost your brand visibility, drive traffic, and increase sales</p>
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
                    <div className='benefit-above'>
                        <ItemContainer anim={'width-one'} anim2={'height-one'} time={'4'}>
                            <div className='benefit'>
                                <ItemContainer anim={'appear'} time={'4'}>
                                    <div className='benefit-info-cont'>
                                        <BsGraphDownArrow className='benefit-icon' />
                                        <div className='benefit-info-box'>
                                            <h3 className='benefit-h3'>Reduced risk</h3>
                                            <p className='benefit-p'>Save more than $4000 from mitigated mistakes and better workflows</p>
                                        </div>
                                    </div>
                                </ItemContainer>
                            </div>
                        </ItemContainer>
                    </div>
                    <div className='benefit-above'>
                        <ItemContainer anim={'width-two'} anim2={'height-two'} time={'6'}>
                            <div className='benefit'>
                                <ItemContainer anim={'appear'} time={'6'}>
                                    <div className='benefit-info-cont'>
                                        <RiTimerFlashFill className='benefit-icon' />
                                        <div className='benefit-info-box'>
                                            <h3 className='benefit-h3'>Faster results</h3>
                                            <p className='benefit-p'>Save over 6 months to launch through smooth processes and proper planning</p>
                                        </div>
                                    </div>
                                </ItemContainer>
                            </div>
                        </ItemContainer>
                    </div>
                    <div className='benefit-above'>
                        <ItemContainer anim={'width-three'} anim2={'height-three'} time={'8'}>
                            <div className='benefit'>
                                <ItemContainer anim={'appear'} time={'8'}>
                                    <div className='benefit-info-cont'>
                                        <TbExchange className='benefit-icon' />
                                        <div className='benefit-info-box'>
                                            <h3 className='benefit-h3'>Adaptive supply chain</h3>
                                            <p className='benefit-p'>Remove the pain of scaling with our years of experience with manufacturer relationship building skills</p>
                                        </div>
                                    </div>
                                </ItemContainer>
                            </div>
                        </ItemContainer>
                    </div>
                </div>
            </div>

            <TableComponent />

            <div className='success-box'>
                <ItemContainer anim={'appear'} time={'6'}>
                    <h2 className='success-title'>Client Stories</h2>
                </ItemContainer>
                <Review reviewText="In our first year we were profitable and drive down our unit cost by more than $4. The Sprout’n team made our idea into a successfully launched product in 18 months." />
            </div>

            <div className='how-box'>
                <ItemContainer anim={'up'} anim2={'appear'} time={'6'}>
                    <h2 className='how-h2'>From a dream to reality</h2>
                </ItemContainer>
                <ItemContainer anim={'up'} anim2={'appear'} time={'6'}>
                    <p className='how-p'>Go at your pace</p>
                </ItemContainer>
                <div className='step-box'>
                    <div className='step-timeline'>
                        {/* <div className='step-timeline-abs'>
                            <TimelineStatic />
                        </div> */}
                        <div className='step-timeline-abs'>
                            <TimelineAnim />
                        </div>
                    </div>
                    <div className='step-content'>
                        <Steps />
                    </div>
                </div>
            </div>


            <div className='calendar-box'>
                <ItemContainer anim={'up'} anim2={'appear'} time={'6'}>
                    <h2 className='calendar-h2'>Ready to believe in yourself?</h2>
                </ItemContainer>
                <ItemContainer anim={'up'} anim2={'appear'} time={'6'}>
                    <p className='calendar-p'>Book a free meeting with us!</p>
                </ItemContainer>
                <ItemContainer anim={'up'} anim2={'appear'} time={'6'}>
                    <div className='calendar-button-container'>
                        <PopupButton
                            url='https://calendly.com/chris-sproutn/30min'
                            rootElement={document.getElementById("root")!}
                            text="START NOW"
                            styles={{
                                color: 'white',
                                backgroundColor: 'var(--dark-graphite)',
                                fontSize: 'max(1.3rem, min(1.2vw, 2rem))',
                                width: 'max(15rem, min(10vw, 20rem))',
                                marginTop: '2rem',
                                fontWeight: 'bold',
                                cursor: 'pointer'
                            }}
                        />
                    </div>
                </ItemContainer>
            </div>
        </div>
    );
}

export default Home;