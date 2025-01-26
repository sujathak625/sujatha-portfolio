import './Hero.css'
import profile_img from '../../assets/profile_image.png'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import '../../i18n.js'
import {useTranslation} from "react-i18next";


const hero = () => {
    const { t } = useTranslation();

  return (
    <div id='home' className='hero'>
        <img src={profile_img} alt="Profile Image"/>
        <h1><span>{t('Introduction-1')}</span> {t('Introduction-2')}</h1>
        <p>{t('Introduction-3')}</p>
        <div className="hero-action">
            <div className="hero-connect"><AnchorLink className='anchor-link' href='#contact'>{t('Connect with Me')}</AnchorLink></div>
        <div className="hero-resume">{t('Resume')}</div>
      </div>
    </div>
  )
}

export default hero