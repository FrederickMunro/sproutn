import logo from '../../assets/WhiteSproutn.PNG.png';

import './Home.css';

const Home = () => {
    return(
        <div className='home-container'>
            <div className='hero-box'>
                <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ullamcorper aliquet lacus commodo venenatis.</h2>
                <p>Proin eu vulputate orci. Fusce rhoncus sapien id ipsum sodales, suscipit iaculis massa bibendum.</p>
                <button>START NOW</button>
            </div>
            <div className='logo-box'>

            </div>
            <div className='probsta-box'>
                <h2>90% of ecomm business fail within 120 days. Why do ideas fail?</h2>
                <div className='reasons-box'>
                    <div className='reason'>
                        <h3>Reason 1</h3>
                        <p>82% fail due to cash flow patterns</p>
                    </div>
                    <div className='reason'>
                        <h3>Reason 2</h3>
                        <p>38% fail by not having a good business plan</p>
                    </div>
                    <div className='reason'>
                        <h3>Reason 3</h3>
                        <p>14% fail because of a lack of marketing</p>
                    </div>
                </div>
            </div>
            <div className='why-box'>
                <h2>Why start with us?</h2>
                <div className='benefit-box'>
                    <div className='benefit'>
                        <img src={logo} />
                        <h3>Benefit 1</h3>
                        <p>info here</p>
                    </div>
                    <div className='benefit'>
                        <img src={logo} />
                        <h3>Benefit 2</h3>
                        <p>info here</p>
                    </div>
                    <div className='benefit'>
                        <img src={logo} />
                        <h3>Benefit 3</h3>
                        <p>info here</p>
                    </div>
                </div>
            </div>
            <div className='how-box'>
                <h2>How</h2>
                <div className='step-box'>
                    <div className='step'>
                        <h3>Step 1</h3>
                        <p>info here</p>
                    </div>
                    <div className='step'>
                        <h3>Step 2</h3>
                        <p>info here</p>
                    </div>
                    <div className='step'>
                        <h3>Step 3</h3>
                        <p>info here</p>
                    </div>
                    <div className='step'>
                        <h3>Step 4</h3>
                        <p>info here</p>
                    </div>
                    <div className='step'>
                        <h3>Step 5</h3>
                        <p>info here</p>
                    </div>
                </div>
            </div>
            <div className='box'>

            </div>
        </div>
    );
}

export default Home;