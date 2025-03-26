import { SocialIcon } from "react-social-icons";
import PrivacyPolicy from '../../assets/pdf/sproutn-privacy-policy-2025.pdf';

import './Footer.css';

const Footer = () => {
    const socialsColor = 'white';

    return(
        <div className='footer-container'>
            <h3>Sprout'n</h3>
            <p>Rooted in your success!</p>
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
            <p className='privacy-policy-cont'>See our <a href={PrivacyPolicy} target='_blank' className='privacy-policy'><strong>Privacy Policy</strong></a></p>
        </div>
    );
}

export default Footer;