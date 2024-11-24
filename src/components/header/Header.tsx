import logo from '../../assets/WhiteSproutn.PNG.png';

import './Header.css';

const Header = () => {
    return(
        <div className='header-container'>
            <img src={logo} />
            <div></div>
        </div>
    );
}

export default Header;