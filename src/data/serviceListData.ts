type ServiceListData = {
    title: string;
    summary: string;
    description: string;
    options: string[];
};

const serviceListData: ServiceListData[] = [
    {
        title: 'Residential Electrical Services',
        summary: `We handle all your home electrical needs — wiring, lighting, upgrades, and repairs — with safety and care.`,
        description:
            'We provide safe, reliable, and code-compliant electrical solutions for your home. From new wiring and panel upgrades to lighting installation and troubleshooting, our certified electricians ensure every job is done right the first time.',
        options: [
            `Trusted electrical work for homes, apartments, and renovations.`,
            `Service for everything from ceiling fans to full rewiring.`,
            `Keeping your home powered, safe, and up to code.`,
        ],
    },
    {
        title: 'Commercial Electrical Services',
        summary: `Reliable electrical work for your business — fast, safe, and built to last. We power everything from offices to retail stores.`,
        description:
            'We deliver efficient, scalable electrical solutions for commercial spaces. From office buildings and retail stores to restaurants and warehouses, our team handles wiring, lighting, panel upgrades, and maintenance all with minimal disruption to your business operations.',
        options: [
            `Expert service for new builds, renovations, or maintenance in commercial spaces.`,
            `Keep your business running smoothly with our trusted electrical solutions.`,
            `Powering your workplace with safe, energy-efficient systems.`,
        ],
    },
    {
        title: 'Industrial Electrical Services',
        summary: `Industrial-strength electrical solutions for factories, warehouses, and production lines — built for safety, performance, and reliability.`,
        description:
            'We specialize in high-demand electrical systems for factories, plants, and industrial facilities. From heavy machinery wiring to power distribution and control systems, we provide safe, durable, and code-compliant solutions that keep your operations running at full capacity.',
        options: [
            `Full-service electrical work for heavy-duty equipment and high-voltage systems.`,
            `Minimize downtime with expert industrial wiring and maintenance.`,
            `Engineered to meet the toughest industrial power needs.`,
        ],
    },
    {
        title: 'Electrical Inspections',
        summary: `Detailed safety checks for your home or business — we make sure everything is up to code and working properly.`,
        description:
            'We conduct thorough electrical inspections to ensure your systems meet safety codes and perform efficiently. Whether for new installations, renovations, or routine checkups, our certified electricians identify potential issues before they become costly problems.',
        options: [
            `Ensure your electrical system is safe, efficient, and code-compliant.`,
            `Expert inspections for homes, offices, and industrial facilities.`,
            `Identify risks early and avoid unexpected failures.`,
        ],
    },
    {
        title: 'Preventive Maintenance',
        summary: `Regular checkups to prevent electrical failures and keep your system running smoothly.`,
        description:
            'Stay ahead of costly breakdowns with our preventive maintenance services. We perform routine inspections, testing, and servicing to ensure your electrical systems run safely and efficiently — reducing downtime and extending equipment lifespan.',
        options: [
            `Prevent problems before they happen with scheduled electrical maintenance.`,
            `Optimize performance and minimize risk with our proactive service plans.`,
            `Protect your investment with routine care and expert diagnostics.`,
        ],
    },
    {
        title: 'Electrical Troubleshooting & Repairs',
        summary: `Fast, safe solutions for electrical problems — we find the issue and fix it right the first time.`,
        description:
            'We quickly diagnose and fix electrical issues — from flickering lights and faulty outlets to complex wiring problems. Our licensed electricians provide safe, efficient repairs to restore power and peace of mind, whether at home or on the job site.',
        options: [
            `Expert fault-finding and repairs for residential, commercial, and industrial systems.`,
            `Don’t guess — let our professionals locate and solve your electrical issues.`,
            `Reliable service when things go wrong — 24/7 support available.`,
        ],
    },
    {
        title: 'Panel Upgrades & Replacements',
        summary:
            'Keep your home or business safe and powered with a modern electrical panel built for today’s needs.',
        description: `Upgrade your outdated electrical panel to meet today’s power demands safely and efficiently. Whether you're renovating, adding new appliances, or facing tripped breakers, we replace old or unsafe panels with modern, code-compliant systems built for reliability.`,
        options: [
            `Prevent overloaded circuits and improve energy flow with a new panel.`,
            `Essential for safety, energy efficiency, and future upgrades.`,
            `Outdated panel? We’ll replace it with a high-capacity, modern solution.`,
        ],
    },
    {
        title: 'New Construction Wiring',
        summary: `Full electrical wiring for new builds — done safely, on time, and to code.`,
        description: `We provide complete electrical wiring for new residential, commercial, and industrial construction projects. From initial planning to final installation, our certified electricians ensure safe, efficient, and code-compliant systems that meet your project's needs and future growth.`,
        options: [
            `Expert planning and installation for reliable power in your new space.`,
            `Start strong — we wire your project right from the foundation up.`,
            `From blueprints to breakers, we handle all aspects of new construction wiring.`,
        ],
    },
    {
        title: 'Lighting Design & Installation',
        description: `We create custom lighting solutions that combine function, style, and energy efficiency. Whether for homes, offices, or industrial spaces, we handle everything from layout planning to fixture installation — ensuring your space is beautifully lit and properly wired.`,
        summary: `Brighten your space with smart, stylish, and professionally installed lighting.`,
        options: [
            `From accent lighting to full system installs — we bring your vision to light.`,
            `Custom indoor and outdoor lighting tailored to your space and budget.`,
            `Energy-efficient lighting that’s both practical and beautiful.`,
        ],
    },
    {
        title: 'EV Charger Installation',
        summary: `Get your EV ready at home or work with fast, safe charger installation.`,
        description: `We install Level 2 EV chargers for homes, businesses, and commercial properties. Our licensed electricians ensure fast, safe, and code-compliant installations so you can charge your electric vehicle with confidence — now and in the future.`,
        options: [
            `Future-proof your property with reliable EV charging solutions.`,
            `Power your electric vehicle with expert-installed, high-speed charging stations.`,
            `Clean, green, and professionally wired for daily convenience.`,
        ],
    },
    {
        title: 'Smart Home Wiring & Automation',
        summary: `Control your home with a tap or a voice — smart wiring for modern living.`,
        description: `We design and install smart home wiring systems that integrate lighting, security, entertainment, and climate control — all from your phone or voice command. Our clean, future-ready installations make your home smarter, safer, and more efficient.`,
        options: [
            `Seamless integration of smart lighting, thermostats, doorbells, and more.`,
            `Upgrade your lifestyle with intelligent, connected home solutions.`,
            `We wire your home for comfort, control, and convenience.`,
        ],
    },
    {
        title: 'Fire Alarm & Security System Wiring',
        summary: `Secure your property with expertly wired fire alarms and security systems.`,
        description: `We provide professional wiring for fire alarm and security systems that protect what matters most. From smoke detectors to access control and CCTV, our installations are safe, code-compliant, and tailored to your property’s unique layout and needs.`,

        options: [
            `Code-compliant installations that ensure early detection and rapid response.`,
            `Custom wiring for surveillance, alarm panels, motion sensors, and more.`,
            `Safety-first wiring solutions for homes, offices, and industrial sites.`,
        ],
    },
    {
        title: 'Energy-Efficient Lighting Retrofits',
        summary: `Save energy and money with LED lighting upgrades for homes and businesses.`,
        description:
            'Upgrade your outdated lighting to modern, energy-saving solutions. We replace old fixtures with efficient LED systems that lower energy bills, reduce maintenance, and improve lighting quality — all while helping you meet sustainability goals.',
        options: [
            `Cut costs and carbon with efficient lighting retrofits.`,
            `Brighten your space while reducing your footprint.`,
            `Government rebate–eligible upgrades that pay for themselves over time.`,
        ],
    },
    {
        title: 'Temporary Power Solutions',
        summary: `Temporary power when and where you need it — fast, safe, and dependable.`,
        description:
            'We provide safe and reliable temporary power setups for construction sites, events, renovations, and emergency situations. From generator hookups to panel installations and power distribution, our solutions are code-compliant and built to keep your operations running without interruption.',

        options: [
            `Power for construction, events, and emergencies — fully managed and installed.`,
            `Keep your project moving with professional-grade temporary electrical service.`,
            `Custom power setups for short-term needs, big or small.`,
        ],
    },
];

export default serviceListData;
