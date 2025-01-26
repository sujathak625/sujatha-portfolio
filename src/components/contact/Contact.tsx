import './Contact.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import location_icon from '../../assets/location_icon.svg'
import call_icon from '../../assets/call_icon.svg'
import {useState} from "react";
import {useTranslation} from "react-i18next";

const Contact = () => {
    const [result, setResult] = useState("");
    const { t } = useTranslation();
    const onSubmit = async (event:any) => {
        event.preventDefault();
        setResult(t('Sending'));
        const formData = new FormData(event.target);
        formData.append("access_key", "83f80ed7-2d9a-47d3-b6ca-35b6963f87a9");
        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });
        const data = await response.json();
        if (data.success) {
            setResult(t('Request Success'));
            event.target.reset();
        } else {
            setResult(t('Request Failed'));
            setResult(data.message);
        }
    };

    return (
        <div id='contact' className="contact">
            <div className="contact-title">
                <h1>{t('Contact Label')}</h1>
                <img src={theme_pattern} alt="" />
            </div>
            <div className="contact-section">
                <div className="contact-left">
                    <h1>{t('Let us talk')}</h1>
                    <p>{t('Looking-For')}</p>
                    <div className="contact-details">
                        <div className="contact-detail">
                            <img src={call_icon} alt="" /><p>+49 15141409842</p>
                        </div>
                        <div className="contact-detail">
                            <img src={location_icon} alt="" /><p>Mannheim, Baden-Württemberg, Deutschland</p>
                        </div>
                    </div>
                </div>
                <div className="contact-right">
                    <form onSubmit={onSubmit} className="contact-right">
                        <label htmlFor="">{t('Name Label')}</label>
                        <input type="text" placeholder={t('Name Label')} name="name"/>
                        <label htmlFor="">{t('E-mail Label')}</label>
                        <input type="email" placeholder={t('E-mail Label')} name="email"/>
                        <label htmlFor="">{t('Message Label')}</label>
                        <textarea name="message" placeholder={t('Message Label')} rows={8}/>
                        <button className="contact-submit" type="submit">{t('Send')}</button>
                    </form>
                    <span>{result}</span>
                </div>
            </div>
        </div>
    )
}

export default Contact;