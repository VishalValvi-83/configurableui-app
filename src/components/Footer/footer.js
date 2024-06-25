import React from 'react';
import './footer.css'
import logo from './Icons/logo.png'
import { footer, theme } from '../../data';
import instagram from './Icons/Instagram.png'
import LinkedIn from './Icons/LinkedIn.png'
import Facebook from './Icons/facebook.png'
import Twitter from './Icons/twitter.png'

const Footer = () => {
    const { contactInfo, socialMedia } = footer;
    const { address, email, phone } = contactInfo;

    return (
        <footer style={{ backgroundColor: theme.styles.footerBgColor }} >
            <section className="footer-container ">
                <div className="logo">
                    <img src={logo} alt='store-logo' />
                    <p className='about-shop' style={{ color: theme.styles.footerHeadingColor }} > Shop from our  store for Furniture, Home Decor, Lamps, Furnishings, Homeware and more at best prices.</p>
                </div>

                {footer.quicklinks ? 
                <div className='Quick-links' >
                <h3 style={{ color: theme.styles.footerHeadingColor }}>Quick Links</h3>
                    <ul >
                        <li>
                            <a href={footer.quicklinksList[0].link} aria-label={footer.quicklinksList[0].name}>
                                {footer.quicklinksList[0].name}
                            </a>
                        </li>
                        <li>
                            <a href={footer.quicklinksList[1].link} aria-label={footer.quicklinksList[1].name}>
                                {footer.quicklinksList[1].name}
                            </a>
                        </li>
                        <li>
                            <a href={footer.quicklinksList[2].link} aria-label={footer.quicklinksList[2].name}>
                                {footer.quicklinksList[2].name}
                            </a>
                        </li>
                        <li>
                            <a href={footer.quicklinksList[3].link} aria-label={footer.quicklinksList[3].name}>
                                {footer.quicklinksList[3].name}
                            </a>
                        </li>
                        <li>
                            <a href={footer.quicklinksList[4].link} aria-label={footer.quicklinksList[4].name}>
                                {footer.quicklinksList[4].name}
                            </a>
                        </li>
                    </ul>
                </div> : null}

                <div className="contact-info">
                    <div className="address">
                        <h3 style={{ color: theme.styles.footerHeadingColor }} >Address </h3>
                        <p style={{color : theme.styles.footerSubHeadingColor}}> {address}</p>
                    </div>
                    <div className="contacts">
                        <h3 style={{ color: theme.styles.footerHeadingColor }} >Contact Us</h3>
                        <p style={{color : theme.styles.footerSubHeadingColor}}> Email : <br/>
                            <a href={`mailto:${email}`} aria-label="Email">
                                {email}
                            </a>
                        </p>
                        <p style={{color : theme.styles.footerSubHeadingColor}}> Cellphone : <br/>
                            <a href={`tel:${phone}`} aria-label="Phone">
                                {phone}
                            </a>
                        </p>
                    </div>
                </div>
                
                <div >
                <h3 style={{ color: theme.styles.footerHeadingColor }}>Let's Get Connect</h3>                
                <div className='Social-links'>
                    <div className="instagram">
                        <a href={socialMedia.instagram} aria-label="Instagram">
                            <img src={instagram} alt='Instagram' />
                        </a>
                    </div>
                    <div className="facebook">
                        <a href={socialMedia.facebook} aria-label="Facebook">
                            <img src={Facebook} alt='facebook' />
                        </a>
                    </div>
                    <div className="twitter">
                        <a href={socialMedia.twitter} aria-label="Twitter">
                            <img src={Twitter} width={"50px"} alt='twitter' />
                        </a>
                    </div>
                    <div className="linkedIn">
                        <a href={socialMedia.linkedin} aria-label="Twitter">
                            <img src={LinkedIn} alt='LinkedIn' />
                        </a>
                    </div>
                </div></div>
            </section>
        </footer>
    );
};

export default Footer;