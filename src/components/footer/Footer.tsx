import { SocialIcon } from "react-social-icons";
import { FaPhone, FaEnvelope } from 'react-icons/fa';

import './Footer.css';

const Footer = () => {
    const socialsColor = 'white';

    return(
        <div className='footer-container'>
            <h3>Sprout'n</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
            <div className='contact-socials'>
                <SocialIcon
                    className='contact-social'
                    url='https://www.instagram.com/'
                    bgColor='transparent'
                    fgColor={socialsColor}
                    target="_blank"
                    rel="noopener noreferrer" 
                />
                <SocialIcon
                    className='contact-social'
                    url='https://www.linkedin.com/'
                    bgColor='transparent'
                    fgColor={socialsColor}
                    target="_blank"
                    rel="noopener noreferrer"
                />
                <SocialIcon
                    className='contact-social'
                    url='https://www.tiktok.com/'
                    bgColor='transparent'
                    fgColor={socialsColor}
                    target="_blank"
                    rel="noopener noreferrer"
                />
                <SocialIcon
                    className='contact-social'
                    url='https://www.twitter.com/'
                    bgColor='transparent'
                    fgColor={socialsColor}
                    target="_blank"
                    rel="noopener noreferrer"
                />
            </div>
        </div>
    );
}

export default Footer;