import { skillsData } from "../../backend/data";
import "./Skill.css";
import { useTranslation } from "react-i18next";

const formatCategoryName = (category: string) => {
    return category
        .replace(/([A-Z])/g, " $1")
        .replace(/^./, (str) => str.toUpperCase());
};

export default function Skills() {
    const { t } = useTranslation();

    return (
        <div id="skills" className="skills">
            <h1>{t("Technical Skills")}</h1>
            <div className="skills-grid">
                {Object.entries(skillsData).map(([category, skills]) => (
                    <div key={category} className="skills-category">
                        <h3 className="category-title">{formatCategoryName(category)}</h3>
                        <ul className="skills-list">
                            {skills.map((skill, index) => (
                                <li key={index} className="skill-item">
                                    <i className={`skill-icon ${skill.icon} colored`} aria-hidden="true"></i>
                                    <span className="skill-name">{skill.name}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    );
}
