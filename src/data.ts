import { Service, Project, Testimonial, Stat, CoreValue, TeamMember } from './types';

// Team images
import michaelImg from '@/assets/images/CEO.png';
import theophilusImg from '@/assets/images/Theophilus Akuaku.png';
import gladysImg from '@/assets/images/Safoa.png';
import danielImg from '@/assets/images/Daniel Botchway.png';
import isaacImg from '@/assets/images/Isaac Bentum.png';

// Roofing project media  (images imported via Vite; video served from public/)
import roofingBanner from '@/assets/projects/roofing/banner.jpg';
import roofingImg1 from '@/assets/projects/roofing/WhatsApp Image 2025-12-07 at 7.00.15 PM.jpeg';
import roofingImg2 from '@/assets/projects/roofing/WhatsApp Image 2025-12-07 at 7.00.16 PM.jpeg';
import roofingImg3 from '@/assets/projects/roofing/WhatsApp Image 2025-12-07 at 7.00.15 PM (1).jpeg';

// Aviation Social Centre project media
import aviationCardImg from '@/assets/images/banner1.jpg';

// Videos are served from /public/videos/ — NOT imported through Vite
// This keeps them off the JS bundle and lets Vercel's CDN serve them directly.
const roofingVideo = '/videos/roofing.mp4';
const aviationVideos = [
  '/videos/aviation-1.mov',
  '/videos/aviation-2.mov',
  '/videos/aviation-3.mov',
];

export const CORE_VALUES: CoreValue[] = [
  {
    title: "Integrity",
    description: "We are honest, transparent, and ethical. Trust is the baseline of our service and we deliver on our promises.",
    icon: "Shield"
  },
  {
    title: "Professionalism",
    description: "We bring high competence, neat workmanship, and respect to every worksite, residential or industrial.",
    icon: "Briefcase"
  },
  {
    title: "Safety First",
    description: "We adhere to strict safety regulations (local Energy Commission standards & international HSE) to safeguard lives and assets.",
    icon: "AlertTriangle"
  },
  {
    title: "Quality Service",
    description: "We do not compromise. We specify high-grade materials, precision tooling, and strict testing procedures.",
    icon: "Award"
  },
  {
    title: "Innovation",
    description: "We integrate cutting-edge systems including modern IP cameras, gate automation, and smart access biometric scanners.",
    icon: "Cpu"
  },
  {
    title: "Teamwork",
    description: "Our cohesive crew of engineers, technicians, and assistants collaborate seamlessly for fast completion times.",
    icon: "Users"
  },
  {
    title: "Customer Satisfaction",
    description: "We listen carefully to customer requirements, offer modular pricing, and provide exceptional post-install support.",
    icon: "Heart"
  }
];

export const STATISTICS: Stat[] = [
  { id: 1, label: "Projects Completed", value: 80, suffix: "+", icon: "CheckSquare" },
  { id: 2, label: "Years Experience", value: 16, suffix: "+", icon: "Calendar" },
  { id: 3, label: "Satisfied Clients", value: 40, suffix: "+", icon: "Smile" },
  { id: 4, label: "Response Time", value: 1, suffix: " hr or less", icon: "Clock" }
];

export const SERVICES: Service[] = [
  {
    id: 1,
    title: "General Electrical Wiring",
    description: "Expert domestic, commercial, and industrial engineering wiring solutions built with deep compliance.",
    fullDetails: "Our general electrical wiring services are executed to the highest engineering standards, fully compliant with the Energy Commission of Ghana regulations. Under CEO Michael Bentum, we handle three-phase and single-phase load distribution, conduit laying, cable pulling, distribution board installation, and finish fixtures. We emphasize high-grade cable selection to prevent resistance heating and fire hazards.",
    icon: "Zap",
    category: "electrical",
    image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 2,
    title: "DSTV Installation & Troubleshooting",
    description: "Precise satellite dish alignment, clean cable runs, and decoder configurations.",
    fullDetails: "Get crisp, uninterrupted high-definition viewing with our expert DSTV installation services. We utilize specialized satellite spectrum analyzers for precise dish pointing (optimizing signal quality and level parameters). Our teams resolve signal errors, re-cable deteriorated nodes, configure extra-view layouts, and establish perfect reception even during difficult weather.",
    icon: "Tv",
    category: "satellite",
    image: "https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 3,
    title: "Multi-User Satellite Solutions",
    description: "SMATV and IF-Distribution networks for high-occupancy estates, hotels, and apartments.",
    fullDetails: "Designed for commercial applications, our multi-user satellite systems handle bulk signal delivery without cluttering roofs with multiple dishes. We build SMATV (Satellite Master Antenna Television) networks, optical fibre satellite networks, and multiswitch arrays. This is perfect for luxury apartment blocks, corporate lodges, and estates seeking clean infrastructural architecture.",
    icon: "Satellite",
    category: "satellite",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 4,
    title: "CCTV Installation & Maintenance",
    description: "High-definition security surveillance systems with intelligent remote viewing setups.",
    fullDetails: "Secure your facility with 24/7 intelligent video surveillance. We specialize in IP networks and high-megapixel coaxial camera installs. Features include AI facial matching, human-vehicle perimeter tripwires, color-night-vision capability, and fully secure, encrypted mobile phone remote access. We provide preventative cleanings and diagnostic maintenance for commercial operations.",
    icon: "Camera",
    category: "security",
    image: "https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 5,
    title: "Electric Fencing",
    description: "High-voltage deterring fences integrated with sirens, keypads, and notification centers.",
    fullDetails: "Perimeter intrusion protection is your first line of defense. We construct professional high-tension electric fences utilizing top-tier steel/aluminum brackets, advanced energizers, back-up battery reserves, siren alarms, and smart control keypads. The system can be integrated to notify your phone via SMS/push notification the millisecond a line is cut or wire is shorted.",
    icon: "ShieldAlert",
    category: "security",
    image: "https://images.unsplash.com/photo-1508873696983-2df519f0397e?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 6,
    title: "Air Conditioning Installation",
    description: "Premium mounting, tubing runs, gas charging, and structural commissioning of energy-saving cooling systems.",
    fullDetails: "Enjoy perfect climate control in Ghana's warm weather. Our technician crew provides clean installations of inverter air conditioning systems. Our service includes precision copper piping insulation, vacuum purging, precise gas pressurization, drainage routing, and secure vibration-damped bracket mounting. We optimize unit placement for thermodynamic airflow efficiency.",
    icon: "Wind",
    category: "electrical",
    image: "https://images.unsplash.com/photo-1621905252507-b354bc25edac?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 7,
    title: "Gate Automation",
    description: "Strong sliding and swing smart gate operators equipped with backup battery and secure remotes.",
    fullDetails: "Add luxury and security with automatic gates. We install heavy-duty Italian and South African gate motors designed for long-term cycling. Our gate automation setups are equipped with dual backup battery systems (functioning during power outages), security infrared photocell rays (preventing closing on vehicles or pedestrians), and highly secure rolling-code remote controls.",
    icon: "Sliders",
    category: "automation",
    image: "https://images.unsplash.com/photo-1558036117-15d82a90b9b1?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 8,
    title: "TV, Antenna & Projector Mounting",
    description: "Clean aesthetic mounting with wire-hiding solutions for home entertainment or boardrooms.",
    fullDetails: "Achieve the ultimate aesthetic appearance with flush or tilt TV mounting on concrete, wood, or plasterboard walls. We provide ultra-secure heavy-duty bracket placement, precision leveling, terrestrial digital antenna alignments, and professional boardroom projector ceiling mounting with completely hidden in-wall piping for all HDMI, power, and audio lines.",
    icon: "MonitorPlay",
    category: "electrical",
    image: "https://images.unsplash.com/photo-1593305841991-05c297ba4575?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 9,
    title: "Electrical Fault Maintenance",
    description: "Advanced diagnostics to rectify voltage fluctuations, breaker trips, and structural shorts.",
    fullDetails: "Electrical faults present severe fire risks. Mikessat Engineering runs a rapid-response team specializing in advanced insulation resistance tests, ground loop impedance checks, and thermal imaging diagnostics. We locate and fix hidden shorts, burning switchgear, neutral wire balance errors, and unstable voltage drops to restore safe electrical supply.",
    icon: "Wrench",
    category: "electrical",
    image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 10,
    title: "Multi-TV Connectivity",
    description: "Coaxial, HDMI distribution, and modulator networks to stream central multimedia smoothly.",
    fullDetails: "Ideal for residential homes, bars, and lounges, our multi-TV distribution feeds a central stream (DSTV, Apple TV, decoders, or cameras) to multiple screens around your building with absolutely zero signal degradation. We utilize active amplifiers, signal splitters, HDMI baluns, and high-frequency coaxial structuring to guarantee high-definition image clarity.",
    icon: "Disc",
    category: "satellite",
    image: "https://images.unsplash.com/photo-1593305841991-05c297ba4575?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 11,
    title: "Fire Alarm Systems",
    description: "Safety-compliant smoke, temperature, and carbon detectors with fully centralized control panels.",
    fullDetails: "Protect lives and conform to National Fire Force certifications with our safety-grade automated notice alarms. We lay smoke detectors, thermal heat sensors, rapid-trigger pull stations, sounder-strobe lights, and connect them all to a master addressable or conventional fire control dashboard to identify hazards immediately.",
    icon: "Flame",
    category: "security",
    image: "https://images.unsplash.com/photo-1508873696983-2df519f0397e?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 12,
    title: "Access Control Systems",
    description: "Smart keyless security doors powered by cards, PIN codes, and high-speed facial scanners.",
    fullDetails: "Take absolute control over who enters your premium offices, IT servers, or residences. We install state-of-the-art electromagnetic door locks, magnetic shear locks, proximity card readers, secure numeric keypads, and facial recognition scanners. Our setups can be linked with emergency exit emergency fire relay switches for compliant instant releases.",
    icon: "KeyRound",
    category: "security",
    image: "https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 13,
    title: "Boom Barriers & Turnstiles",
    description: "Automated vehicular toll spikes, barriers, and robust steel pedestrian pedestrian access controls.",
    fullDetails: "Perfect for gated communities, factories, mining sectors, and corporate corporate compounds. We install high-velocity motorized toll barriers, ground sensor loops for vehicle detection, physical access turnstiles (full-height and waist-height), and integrate them with RFID tag scanners or security booth overrides.",
    icon: "Lock",
    category: "automation",
    image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 14,
    title: "Attendance Devices",
    description: "Connected biometric tracking devices that optimize payroll and clock-ins easily.",
    fullDetails: "End buddy-punching and streamline HR operations. We install networked fingerprint and facial recognition time clocks. Systems include integrated TCP/IP/Wi-Fi database engines, exportable CSV/PDF attendance logs, custom shift timetables, and direct software bridge capability with local payroll networks.",
    icon: "Fingerprint",
    category: "automation",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 15,
    title: "Network & Internet Setup",
    description: "Structured Cat6/fibre cabling, gigabit switches, and seamless mesh Wi-Fi configurations.",
    fullDetails: "A robust engineering environment requires lightning-fast, drop-free connectivity. We provide structured cabling services utilizing modular RJ45 patch panels, server rack enclosures, enterprise-grade managed network switches, PoE (Power over Ethernet) structures, and broad-coverage ceiling-mounted Wi-Fi access points for complete coverage.",
    icon: "Wifi",
    category: "networking",
    image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=800&q=80"
  }
];

export const PROJECTS: Project[] = [
  {
    id: 7,
    title: "Roofing & Structural Installation – Tse Addo",
    category: "Construction",
    description: "Complete roofing framework and structural installation at Tse Addo, Accra. The Mikessat team executed the full metal roofing layout, structural fitting, and on-site commissioning for this residential property with skeleton structure.",
    location: "Tse Addo, Accra",
    image: roofingImg1,
    images: [roofingImg1, roofingImg2, roofingImg3, roofingBanner],
    video: roofingVideo,
  },
  {
    id: 8,
    title: "Aviation Social Centre – Adenta",
    category: "Electrical",
    description: "Full electrical installation and fitting works at the Aviation Social Centre, Adenta. Our certified engineers delivered clean, code-compliant wiring, conduit runs, and full system commissioning throughout the facility.",
    location: "Adenta, Accra",
    image: aviationCardImg,
    videos: aviationVideos,
  },
  {
    id: 1,
    title: "Modern Smart Perimeter Control",
    category: "Security",
    description: "Installation of high-tension security electric fencing with integrated alarm triggers and SMS notification system for a luxury estate in East Legon, Accra.",
    image: "https://images.unsplash.com/photo-1508873696983-2df519f0397e?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 2,
    title: "Industrial Distribution Panel Overhaul",
    category: "Electrical",
    description: "Complete diagnostic testing, phase load re-balancing, and circuit wiring overhaul of a heavy industrial processing plant control panel.",
    image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 3,
    title: "Integrated IP Surveillance Network",
    category: "Security",
    description: "Deployment of structured cabling and 32 outdoor high-definition IP dome security cameras with automated motion analysis to backup servers.",
    image: "https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 4,
    title: "Corporate Biometric Entry System",
    category: "Automation",
    description: "Installation of magnetic locks connected to high-speed biometric fingerprint and facial readers for secure server room and warehouse entries.",
    image: "https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 5,
    title: "Commercial Multi-User Satellite Setup",
    category: "Satellite",
    description: "Roof dish alignment and Multiswitch distribution cabling establishing perfect digital signal channels to 48 independent TVs in a client hotel.",
    image: "https://images.unsplash.com/photo-1593305841991-05c297ba4575?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 6,
    title: "Residential Climate Control Engineering",
    category: "Electrical",
    description: "High-level copper installation and thermodynamic split unit mounting of energy-saving cooling systems for a premier duplex compound.",
    image: "https://images.unsplash.com/photo-1621905252507-b354bc25edac?auto=format&fit=crop&w=800&q=80"
  }
];

export const PROCESS_STEPS = [
  {
    step: "01",
    title: "Consultation",
    description: "We discuss your exact technical requirements, design ideas, and target budget online or via telephone call."
  },
  {
    step: "02",
    title: "Site Assessment",
    description: "CEO Michael Bentum or our senior surveyors inspect the premises in Ghana to measure structural elements and design cable topologies."
  },
  {
    step: "03",
    title: "Installation",
    description: "Our certified technicians execute the physical wiring, mount equipment, and establish strong structural integrations."
  },
  {
    step: "04",
    title: "Testing & QA",
    description: "We carry out rigorous voltage calibrations, load calculations, signal strength analyses, and camera alignment tests to verify stability."
  },
  {
    step: "05",
    title: "Ongoing Support",
    description: "We remain your reliable long-term vendor. We provide quick 2-hour response warranties and scheduled maintenance checkups."
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: "Justice Kojo Anim",
    role: "Estate Development Manager",
    company: "Anim Gold Estates, Accra",
    rating: 5,
    comment: "Mikessat Engineering completed the electrical wiring and electric fencing for our 12-home court project. Michael Bentum and his crew worked with extreme precision, neat conduit layouts, and exceptional speed. Their fast 2-hour response is absolutely real whenever we require check-ins."
  },
  {
    id: 2,
    name: "Naa Ayeley Lamptey",
    role: "Managing Director",
    company: "L’Avenue Boutique Hotel, Airport Residential Area",
    rating: 5,
    comment: "We had severe DSTV and network drops that other installers failed to resolve. Mikessat stepped path, redesigned our Multiswitch satellite topology, and deployed high-performance centralized Wi-Fi access points. Guests have been thrilled with our streaming speeds ever since."
  },
  {
    id: 3,
    name: "Dr. Emmanuel Boadi",
    role: "Clinic Director",
    company: "Grace Medical Center, Kumasi",
    rating: 5,
    comment: "We entrusted our clinics CCTV, heavy server cooling ACs, and biometric gate locks to Mikessat. They completed the work neatly, and their integration of safety fire relays with the lock systems gave us complete regulatory peace of mind. Truly a premium team!"
  }
];

export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: 1,
    name: "Michael Bentum",
    role: "CEO & Lead Electrical Engineer",
    bio: "Michael Bentum has over 15 years of hands-on experience in electrical engineering, specializing in general wiring, CCTV systems, electric fences, TV installations, and more. As the visionary leader of Mikessat Engineering, he has actively supported hundreds of startup ecosystems, estate builders, and premium private homeowners across Ghana in securing and powering their properties with certified solutions. High-tech innovation and ultimate customer satisfaction remain at the absolute core of his daily engineering workflow.",
    image: michaelImg
  },
  {
    id: 2,
    name: "Theophilus Akuaku",
    role: "Business Development Manager",
    bio: "Theophilus Akuaku focuses on building outstanding client relationships, initiating strategic partnerships, and identifying new corporate growth vectors for Mikessat Engineering. He is deeply passionate about helping local and international clients source the exact technical solutions they need, matching complex engineering requirements with neat, modular client budgets while driving sustainable company-wide progress.",
    image: theophilusImg
  },
  {
    id: 3,
    name: "Gladys Safoa Amosah",
    role: "Digital Marketing Manager",
    bio: "Gladys Safoa Amosah ensures that our customers are exceptionally well cared for both online and on-site. Armed with highly regarded certifications in progressive digital marketing, customer relationship management, and modern business administration, she is committed to delivering positive customer journeys, smooth project communications, and strong digital brand visibility.",
    image: gladysImg
  },
  {
    id: 4,
    name: "Daniel Botchway",
    role: "Operations Manager",
    bio: "Daniel Botchway oversees our comprehensive day-to-day operations and technician dispatch grids to ensure all field projects progress seamlessly and rapidly. He is extremely detail-oriented, highly analytical about physical site configurations, and devoted to upholding high safety specifications while driving the entire technical team to deliver clean, standard-compliant results.",
    image: danielImg
  },
  {
    id: 5,
    name: "Isaac Bentum",
    role: "Project Coordinator",
    bio: "Isaac Bentum is exceptionally skilled in technical scheduling, detailed status reporting, cross-team stakeholder coordination, and agile workflow optimizations. He thrives in high-pressure engineering and real estate environments, focusing on the delivery of flawless installation phases through transparent team collaboration and proactive problem-solving.",
    image: isaacImg
  }
];

