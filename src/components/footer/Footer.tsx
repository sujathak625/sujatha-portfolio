import './Footer.css'
import footer_logo from '../../assets/footer_logo.svg'

import {useTranslation} from "react-i18next";
const Footer = () => {
    const {t} = useTranslation();
  return (
    <div className="footer">
      <div className="footer-top">
        <div className="footer-top-left">

          <p>{t('footerText1')}</p>
          <img src={footer_logo} alt="" />
        <p>   {t('footerText2')}
            <br/><br/>{t('footerText3')}</p>
        </div>
          {/*Commented out for later implementation*/}
{/*        <div className="footer-top-right">
          <div className="footer-email-input">
            <img src={user_icon} alt="" />
            <input type="email" placeholder={t('E-mail Label')} />
          </div>
          <div className="footer-subscribe">
              {t('Subscribe')}
          </div>
        </div>*/}
      </div>
      <hr/>
      <div className="footer-bottom">
        <p className="footer-bottom-left">© 2025 Sujatha Kannan. All rights reserved.
        </p>
        <div className="footer-bottom-right">
          <p>Terms of Services</p>
          <p>Privacy Policy</p>
          <p>Connect Wih Me</p>
        </div>
      </div>
    </div>
  )
}

export default Footer