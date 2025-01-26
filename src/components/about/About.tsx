import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'

import YouTube from "react-youtube";
import {useTranslation} from "react-i18next";
const About = () => {

  const {t} = useTranslation();
  const videoOptions = {
    height: '500',
    width: '750',
    playerVars: {
      autoplay: 0,
    },
  };

    return (
        <div id='about' className="about">
          <div className="about-title">
            <h1>About Me</h1>
            <img src={theme_pattern} alt="About"/>
          </div>
          <div className="about-sections">
            <div className="hero-video">
              <YouTube videoId="1CFC_dUi6tA" opts={videoOptions}/>
            </div>

            <div className="about-right">
              <div className="about-para">
                <p>
                  {t('about-me-1')}
                </p>
                <p>
                  {t('about-me-2')}
                </p>
                <p>
                  {t('about-me-3')}
                </p>
              </div>
            </div>
          </div>
        </div>
    )
}

export default About