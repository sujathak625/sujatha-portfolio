import React from "react";
import {FaChalkboardTeacher, FaLaptopCode, FaServer} from "react-icons/fa";

import {MdCode, MdWork} from "react-icons/md";

export const experiencesData = [
  {
    title: "Senior Engineer",
    location: "Herne, NRW, Germany",
    description:
        "Designed and developed robust backend solutions using Java and Spring Boot, React-based frontend, and Kotlin-based Android applications. Led team productivity and optimized system performance.",
    icon: React.createElement(FaLaptopCode),
    date: "Mar 2021 - Aug 2024",
  },
  {
    title: "Associate",
    location: "Frankfurt, Hesse, Germany",
    description:
        "Developed backend solutions in Java and frontend enhancements using Angular 7. Automated key processes, reducing workload and improving system performance.",
    icon: React.createElement(MdWork),
    date: "Jul 2018 - Jun 2020",
  },
  {
    title: "Technical Lead",
    location: "Chennai, Tamilnadu, India",
    description:
        "Led and mentored a team of developers in Java, PostgreSQL, and AngularJS projects. Spearheaded quality assurance initiatives, reducing production bugs and enhancing reliability.",
    icon: React.createElement(FaChalkboardTeacher),
    date: "Nov 2015 - Jan 2017",
  },
  {
    title: "Technology Analyst",
    location: "Chennai, Tamilnadu, India",
    description:
        "Directed application migration phases, ensuring smooth transitions. Mentored junior developers and implemented defect prevention strategies, leading to improved quality.",
    icon: React.createElement(FaServer),
    date: "Apr 2014 - Nov 2015",
  },
  {
    title: "Senior Engineer",
    location: "Chennai, Tamilnadu, India",
    description:
        "Analyzed and developed new features using Java, AngularJS, and PostgreSQL. Streamlined workflows and improved product quality through effective collaboration.",
    icon: React.createElement(MdCode),
    date: "Feb 2013 - Apr 2014",
  },
  {
    title: "Software Engineer",
    location: "Chennai, Tamilnadu, India",
    description:
        "Analyzed and developed new features using Java, AngularJS, and PostgreSQL. Streamlined workflows and improved product quality through effective collaboration.",
    icon: React.createElement(MdCode),
    date: "Mar 2010 - Dec 2012",
  },
];

export const skillsData = {
  programmingLanguages: [
    { name: "Core Java", icon: "devicon-java-plain" },
    { name: "Kotlin", icon: "devicon-kotlin-plain" },
    { name: "TypeScript", icon: "devicon-typescript-plain" },
  ],
  frameworks: [
    { name: "React", icon: "devicon-react-original" },
    { name: "Jetpack Compose", icon: "devicon-jetpackcompose-plain" },
    { name: "Spring Boot", icon: "devicon-spring-plain" },
    {name:"Quarkus",icon: "devicon-quarkus-plain"}
  ],
  databases: [
    { name: "PostgreSQL", icon: "devicon-postgresql-plain" },
    { name: "Oracle", icon: "devicon-oracle-plain" },
  ],
  cloudPlatforms:[
    { name: "AWS", icon: "devicon-amazonwebservices-plain" },
  ],
  devAutomation: [
    { name: "Maven", icon: "devicon-maven-plain" },
    { name: "Gradle", icon: "devicon-gradle-plain" },
  ],
  cICDTools: [
    { name: "Jenkins", icon: "devicon-jenkins-plain" },
    { name: "Docker", icon: "devicon-docker-plain" },
    {name: "Kubernetes",icon:"devicon-kubernetes-plain"}
  ],
  testing: [
    { name: "Selenium", icon: "devicon-selenium-original" },
    { name: "JUnit (Mockk,Mockito)", icon: "devicon-java-plain" },
  ],
  versionControl: [
    { name: "Bitbucket", icon: "devicon-bitbucket-plain" },
    { name: "Github", icon: "devicon-github-plain" },
    { name: "Gitlab", icon: "devicon-gitlab-plain" },
  ],
  ideTools: [
    { name: "IntelliJ IDEA", icon: "devicon-intellij-plain" },
    { name: "Visual Studio", icon: "devicon-visualstudio-plain" },
    { name: "Android Studio", icon: "devicon-androidstudio-plain" },
  ],
  otherTools: [
    { name: "Postman", icon: "devicon-postman-plain" },
    {name: "Insomnia",icon: "devicon-insomnia-plain"}
  ],
};

