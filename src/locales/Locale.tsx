import i18n from '../i18n.ts';

const Locale = () => {
    const changeLanguage = (language: string) => {
        i18n.changeLanguage(language);
    };

    return (
        <div className="language-option-style">
            <select onChange={(e) => changeLanguage(e.target.value)} className="language-selector">
                <option value="en">English</option>
                <option value="de">Deutsch</option>
            </select>
        </div>
    );
};

export default Locale;
