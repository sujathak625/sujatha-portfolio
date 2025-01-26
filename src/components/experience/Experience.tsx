import React, { useState } from "react";
import {
    VerticalTimeline,
    VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { experiencesData } from "../../backend/data.ts";
import VisibilitySensor from "react-visibility-sensor";
import "./Experience.css";
import {useTranslation} from "react-i18next";

const Experience: React.FC = () => {
    const {t}=useTranslation()
    const [isVisible, setIsVisible] = useState(false);

    // Handle visibility change for triggering animations
    const handleVisibilityChange = (isVisible: boolean) => {
        setIsVisible(isVisible);
    };

    return (
        <VisibilitySensor onChange={handleVisibilityChange} partialVisibility>
            <div id="experience" className="experience">
                <h1 className="experience-heading">{t('Professional Experience')}</h1>
                <VerticalTimeline lineColor="#FFA500" animate={isVisible}>
                    {experiencesData.map((item, index) => (
                        <VerticalTimelineElement
                            key={index}
                            date={item.date}
                            icon={item.icon}
                            iconStyle={{
                                background: "rgb(33, 150, 243)",
                                color: "#fff",
                            }}
                            contentStyle={{
                                background: "var(--content-bg)",
                                color: "var(--font-color)",
                                border: "1px solid var(--content-border)",
                            }}
                            contentArrowStyle={{
                                borderRight: "7px solid var(--arrow-color)",
                            }}
                        >
                            <h3 className="experience-title">{item.title}</h3>
                            <h4 className="experience-location">{item.location}</h4>
                            <p className="experience-description">{item.description}</p>
                        </VerticalTimelineElement>
                    ))}
                </VerticalTimeline>
            </div>
        </VisibilitySensor>
    );
};

export default Experience;
