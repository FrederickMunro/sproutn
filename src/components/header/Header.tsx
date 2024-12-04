import logo from '../../assets/WhiteSproutn.PNG.png';
import ItemContainer from '../ItemContainer';

import './Header.css';

const Header = () => {
    return(
        <ItemContainer only={true}>
            <div className='header-container'>
                <p>Rooted in your success</p>
                <img src={logo} />
            </div>
        </ItemContainer>
    );
}

export default Header;