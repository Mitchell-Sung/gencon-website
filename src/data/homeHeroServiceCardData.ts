import ServiceGroup_01 from '../assets/ServiceGroup_01.png';
import ServiceGroup_02 from '../assets/ServiceGroup_02.png';
import ServiceGroup_03 from '../assets/ServiceGroup_03.png';

const homeHeroServiceCardData = [
    {
        id: 1,
        title: `Electrical Services`,
        img: ServiceGroup_01,
        includes: [
            `Residential Solutions`,
            `Commercial Projects`,
            `Industrial Power Systems`,
            `New Construction Wiring`,
        ],
    },
    {
        id: 2,
        title: `Maintenance & Repair`,
        img: ServiceGroup_02,
        includes: [
            `Panel Upgrades and Replacements`,
            `Preventive Maintenance`,
            `Troubleshooting and Repairs`,
            `Electrical Inspections`,
        ],
    },
    {
        id: 3,
        title: `General Construction`,
        img: ServiceGroup_03,
        includes: [
            `Smart Home and Automation`,
            `Fire Alarm and Security System`,
            `Lighting Design and Installation`,
            `Energy Efficient Lighting`,
        ],
    },
];

export default homeHeroServiceCardData;
