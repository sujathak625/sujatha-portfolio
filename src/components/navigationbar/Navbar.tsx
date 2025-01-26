import logo from '../../assets/logo.svg';
import './Navbar.css';
import { useState, useEffect } from 'react';
import underline from '../../assets/nav_underline.svg';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import '../../i18n.ts';
import { useTranslation } from 'react-i18next';
import Locale from '../../locales/Locale.tsx';
import ThemeSwitch from "../../themeswitch/theme-switch.tsx";

const Navbar = () => {
    const { t } = useTranslation();
    const [menu, setMenu] = useState("home");

    useEffect(() =>{
        const sections = document.querySelectorAll('section');
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setMenu(entry.target.id);
                    }
                });
            },
            { threshold: 0.5 }
        );

        sections.forEach((section) => {
            observer.observe(section);
        });

        return () => {
            sections.forEach((section) => {
                observer.unobserve(section);
            });
        };
    }, []);

    return (
        <div className='navbar'>
            <img src={logo} alt="Logo" />
            <ul className="nav-menu">
                <li>
                    <AnchorLink className='anchor-link' href='#home'>
                        <p onClick={() => setMenu("home")}>{t('Home')}</p>
                    </AnchorLink>
                    {menu === "home" ? <img src={underline} alt='' /> : <></>}
                </li>
                <li>
                    <AnchorLink className='anchor-link' href='#about'>
                        <p onClick={() => setMenu("about")}>{t('About Me')}</p>
                    </AnchorLink>
                    {menu === "about" ? <img src={underline} alt='' /> : <></>}
                </li>
                <li>
                    <AnchorLink className='anchor-link' href='#skills'>
                        <p onClick={() => setMenu("skills")}>{t('Skills')}</p>
                    </AnchorLink>
                    {menu === "skills" ? <img src={underline} alt='' /> : <></>}
                </li>
                <li>
                    <AnchorLink className='anchor-link' href='#experience'>
                        <p onClick={() => setMenu("experience")}>{t('Experience')}</p>
                    </AnchorLink>
                    {menu === "experience" ? <img src={underline} alt='' /> : <></>}
                </li>
                <li>
                    <AnchorLink className='anchor-link' href='#projects'>
                        <p onClick={() => setMenu("projects")}>{t('Projects')}</p>
                    </AnchorLink>
                    {menu === "projects" ? <img src={underline} alt='' /> : <></>}
                </li>
                <li><Locale /></li>
                <li><ThemeSwitch /></li>
            </ul>
        </div>
    );
};

export default Navbar;
