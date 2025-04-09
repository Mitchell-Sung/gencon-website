import ServiceGroup_01 from '../assets/ServiceGroup_01.png';
import ServiceGroup_02 from '../assets/ServiceGroup_02.png';
import ServiceGroup_03 from '../assets/ServiceGroup_03.png';
import ServiceGroup_04 from '../assets/ServiceGroup_04.png';

const serviceGroupListData = [
    {
        id: 1,
        title: `Electrical Services`,
        description: `Complete electrical services for homes, businesses, and industrial facilities. From wiring and upgrades to smart systems and heavy equipment, we deliver safe and reliable power solutions for every environment.`,
        img: ServiceGroup_01,
        includes: [
            `Residential Solutions`,
            `Commercial Projects`,
            `Industrial Power Systems`,
            `New Construction Wiring`,
            `EV Charger Installation`,
            `Smart Home Integration`,
            `Fire and Security System Wiring`,
        ],
    },
    {
        id: 2,
        title: `Maintenance & Repair Services`,
        description: `Ongoing maintenance and repair services to keep your electrical systems operating safely and efficiently. Ideal for preventing failures, solving issues quickly, and minimizing downtime.`,
        img: ServiceGroup_02,
        includes: [
            `Panel Upgrades and Replacements`,
            `Preventive Maintenance`,
            `Electrical Troubleshooting and Repairs`,
            `Electrical Inspections`,
            `Temporary Power Solutions`,
        ],
    },
    {
        id: 3,
        title: `General Construction & Project Services`,
        description: `Electrical planning and installations for new construction, renovations, and specialized projects. Perfect for builders and property developers who need complete, code-compliant systems from the ground up.`,
        img: ServiceGroup_03,
        includes: [
            `New Construction Wiring`,
            `Temporary Power Solutions`,
            `Panel Upgrades and Replacements`,
            `Smart Home Wiring and Automation`,
            `Fire Alarm and Security System Wiring`,
        ],
    },
    {
        id: 4,
        title: `Lighting & Energy Solutions`,
        description: `Custom lighting designs and energy-saving upgrades that improve lighting quality, reduce electricity use, and support sustainability goals for homes and businesses.`,
        img: ServiceGroup_04,
        includes: [
            `Lighting Design and Installation`,
            `Energy Efficient Lighting Retrofits`,
        ],
    },
];

export default serviceGroupListData;
