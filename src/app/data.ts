/* ============================================================================
 *  ALL YOUR WEBSITE CONTENT LIVES IN THIS FILE.
 *  Edit text here and the whole site updates. You rarely need to touch
 *  anything else (except the project write-ups in src/content/projects/).
 *
 *  PICTURES & VIDEOS
 *  - Put files in  public/media/...  (see README.md for the folder layout)
 *  - Refer to them here starting with  /media/...
 *      e.g.  IMAGE: "/media/projects/pdafo/cover.jpg"
 *  - A project's IMAGE can be a photo (.jpg/.png/.webp) OR a short video
 *    (.mp4/.webm). Videos autoplay silently on a loop, like the reference site.
 * ========================================================================== */

export interface IProjectData {
    SLUG?: string; // short id; also the name of the write-up file in src/content/projects/<SLUG>.mdx
    DATE?: string;
    GITHUB?: string;
    YOUTUBE?: string;
    PAPER?: string;
    SUMMARY: string; // 1–2 lines shown on the project card
    DESCRIPTION: string[]; // paragraph(s) shown at the top of the project page
    NOTE?: string;
    TECH_STACK: string[]; // tags (also used by the search box on /projects)
    IMAGE: string; // cover photo or video, e.g. "/media/projects/pdafo/cover.jpg"
    MORE_INFO?: string;
    LIVE_PREVIEW?: string;
}

export interface IExperienceData {
    POSITION: string;
    ORG: string;
    WEBSITE?: string; // optional link to the lab / org
    LOCATION: string;
    DURATION: string;
    DESCRIPTION: string[];
    TECH_STACK: string[];
}

export interface ILeadershipData {
    ROLE: string;
    ORG: string;
    DURATION: string;
    DESCRIPTION: string[];
}

export const GITHUB_USERNAME = "agrawalri";

export const DATA = {
    HEADER: {
        NAME: "Riya Agrawal",
        LOCATION: "Chicago, IL",
        HEADLINE:
            "M.S. Mechanical Engineering @ Northwestern University | Biomechanics & Medical Devices",
        RESUME: "/Riya_Agrawal_Resume.pdf", // replace the file in /public with your latest PDF
        EMAIL: "mailto:riagrawalj@gmail.com",
        GITHUB: "https://github.com/agrawalri",
        LINKEDIN: "https://www.linkedin.com/in/agrawalri/",
        YOUTUBE: "", // add a channel link here to show the YouTube icon; leave "" to hide it
        INTRO: "I'm a mechanical engineer who loves building things that help people move. At Northwestern's Prosthetics-Orthotics Center, I design adjustable-stiffness ankle-foot orthoses, taking them from FEA all the way to machined prototypes, Instron testing, and gait studies with real users. I care about the whole loop: modeling something, making it with my own hands, and then seeing whether it actually works for the person using it.",
        EXPERTISE:
            "My work spans CAD and design for manufacturing, finite element analysis in Abaqus and Ansys, machining and mechanical testing, and embedded hardware with microcontrollers. Outside the lab, I've spent a lot of time mentoring other engineering students and building community through Women in Mechanical Science and Engineering and SWE.",
    },

    // Photos on the About page (slideshow). Swap these for your own photos.
    ABOUT_IMAGES: [
        {
            src: "/media/about/photo-1.jpg",
            caption: "Replace with a photo of you in the lab",
        },
        {
            src: "/media/about/photo-2.jpg",
            caption: "Replace with a photo from a project, event, or presentation",
        },
    ],

    EDUCATION: [
        {
            DEGREE: "M.S. in Mechanical Engineering (Thesis), Concentration in Biosystems",
            SCHOOL: "Northwestern University",
            LOCATION: "Evanston, IL",
            DURATION: "Sep 2025 – Dec 2026 (expected)",
            COURSEWORK:
                "Advanced Mechatronics, Biomechanical Modeling & Simulation of Human Movement, Control of Human Limbs and Their Artificial Replacements, Dynamics, Embedded Systems and Robotics",
        },
        {
            DEGREE: "B.S. in Mechanical Engineering",
            SCHOOL: "University of Illinois Urbana-Champaign",
            LOCATION: "Champaign, IL",
            DURATION: "Aug 2021 – May 2025",
            COURSEWORK:
                "Thermodynamics, Fluid Mechanics, Finite Element Analysis, Statics, Dynamics, Solid Mechanics, Heat Transfer, Engineering Materials",
        },
    ],

    EXPERIENCE: [
        {
            POSITION: "Research Assistant",
            ORG: "Northwestern University Prosthetics-Orthotics Center",
            LOCATION: "Chicago, IL",
            DURATION: "Jul 2025 – Present",
            DESCRIPTION: [
                "Led the design, analysis, and prototyping of customizable passive dynamic ankle-foot orthotic struts, developing adjustable-stiffness designs that exceeded the range of motion of commercial struts.",
                "Performed design verification through FEA in Abaqus, evaluating deformation under stress and physiological loading to validate structural performance before prototype manufacturing.",
                "Manufactured aluminum and steel prototypes on the mill and lathe and ran Instron testing under differential loading, correlating rotational stiffness with FEA predictions and published literature targets.",
                "Conducted verification and user-performance testing through human subject gait analysis in a simulated walking environment, comparing outcomes with normative gait data.",
            ],
            TECH_STACK: ["Orthotics", "Abaqus", "FEA", "CNC Machining", "Instron", "Gait Analysis"],
        },
        {
            POSITION: "Research Assistant",
            ORG: "Kinetic Materials Laboratory, UIUC",
            LOCATION: "Champaign, IL",
            DURATION: "May 2024 – Jul 2024",
            DESCRIPTION: [
                "Synthesized supercoiled artificial muscle fibers using nylon and heating wires.",
                "Developed and optimized code to improve the user interface of the CM3 automatic coiling machine.",
            ],
            TECH_STACK: ["Artificial Muscles", "Materials", "Python"],
        },
        {
            POSITION: "Research Intern",
            ORG: "Illinois Applied Research Institute",
            LOCATION: "Champaign, IL",
            DURATION: "Jun 2023 – Jul 2023",
            DESCRIPTION: [
                "Formulated sentence- and granular-level annotation schemas and annotated 12 articles.",
                "Conducted data analysis and built an AI model for sentence classification using Hugging Face and MatSciBERT.",
            ],
            TECH_STACK: ["NLP", "Hugging Face", "Data Analysis"],
        },
        {
            POSITION: "ECS Peer (Engineering Career Services)",
            ORG: "Grainger College of Engineering, UIUC",
            WEBSITE: "https://grainger.illinois.edu",
            LOCATION: "Champaign, IL",
            DURATION: "Aug 2024 – May 2025",
            DESCRIPTION: [
                "Provided detailed resume critiques, reviewing over 200 resumes and offering targeted feedback.",
                "Conducted mock technical and behavioral interviews to help students prepare.",
            ],
            TECH_STACK: ["Mentoring", "Career Coaching"],
        },
        {
            POSITION: "Writer",
            ORG: "Department of Mechanical Science and Engineering, UIUC",
            WEBSITE: "https://mechse.illinois.edu",
            LOCATION: "Champaign, IL",
            DURATION: "Aug 2023 – Dec 2024",
            DESCRIPTION: [
                "Interviewed faculty, students, and alumni and published 15 researched articles for the department.",
            ],
            TECH_STACK: ["Science Writing", "Interviewing"],
        },
        {
            POSITION: "Student Admissions Representative (ESTAR, ISTAR) & MechSE Help",
            ORG: "University of Illinois Urbana-Champaign",
            LOCATION: "Champaign, IL",
            DURATION: "May 2022 – Aug 2024",
            DESCRIPTION: [
                "Led campus and MechSE-specific tours for prospective students and participated in Q&A panels.",
                "Supported admissions events and new student registration, and managed front desk and visitor inquiries.",
            ],
            TECH_STACK: ["Outreach", "Communication"],
        },
    ] as IExperienceData[],

    LEADERSHIP: [
        {
            ROLE: "External Vice President",
            ORG: "Women in Mechanical Science and Engineering (WiM), UIUC",
            DURATION: "Aug 2024 – May 2025",
            DESCRIPTION: [
                "Fostered and managed corporate relations and organized professional development events.",
            ],
        },
        {
            ROLE: "Publicity Director",
            ORG: "Women in Mechanical Science and Engineering (WiM), UIUC",
            DURATION: "Aug 2023 – May 2024",
            DESCRIPTION: [
                "Developed the RSO website and merchandise, managed social media accounts, and crafted weekly emails.",
            ],
        },
        {
            ROLE: "Social Co-Director",
            ORG: "Women in Mechanical Science and Engineering (WiM), UIUC",
            DURATION: "Aug 2022 – May 2023",
            DESCRIPTION: ["Planned and facilitated events to increase member participation."],
        },
        {
            ROLE: "Engineering Open House Committee Member",
            ORG: "Women in Mechanical Science and Engineering (WiM), UIUC",
            DURATION: "Aug 2022 – May 2024",
            DESCRIPTION: [
                "Fabricated a syringe mount for a hydraulic claw machine using 3D printing and woodworking.",
                "Constructed a compound pulley machine demonstrating pulley distribution and woodworking techniques.",
            ],
        },
        {
            ROLE: "Engineering Open House (EOH) Chair, Outreach Committee",
            ORG: "Society of Women Engineers (SWE), UIUC",
            DURATION: "Aug 2022 – May 2023",
            DESCRIPTION: ["Designed a hands-on educational project centered on space exploration."],
        },
        {
            ROLE: "Faculty Ambassador Chair, Professional Liaison Committee",
            ORG: "Society of Women Engineers (SWE), UIUC",
            DURATION: "Aug 2021 – May 2022",
            DESCRIPTION: [
                "Organized faculty-student engagement events, recorded interviews, and edited episodes for the SWE Spotify podcast.",
            ],
        },
    ] as ILeadershipData[],

    /* ------------------------------------------------------------------
     * PROJECTS — the first 6 show on the home page carousel; all show on /projects.
     * Each project with a SLUG gets its own page built from
     * src/content/projects/<SLUG>.mdx (that's where extra photos/videos go).
     * ------------------------------------------------------------------ */
    PROJECTS: {
        "Adjustable-Stiffness Ankle-Foot Orthosis Struts": {
            SLUG: "pdafo",
            DATE: "Jul 2025 – Present",
            SUMMARY:
                "Customizable passive dynamic AFO struts with adjustable stiffness that exceed the range of motion of commercial struts.",
            DESCRIPTION: [
                "At the Northwestern University Prosthetics-Orthotics Center, I lead the design, analysis, and prototyping of customizable passive dynamic ankle-foot orthotic (PDAFO) struts. The goal is a strut whose rotational stiffness can be tuned to the user, covering a wider range than commercial options. I verify each design with FEA in Abaqus under physiological loading, machine aluminum and steel prototypes on the mill and lathe, and test them on an Instron system, correlating measured stiffness with FEA predictions and published targets. Finally, I evaluate the struts with human subject gait analysis in a simulated walking environment and compare the results with normative gait data.",
            ],
            TECH_STACK: ["Orthotics", "Biomechanics", "Abaqus", "FEA", "CNC Machining", "Instron", "Gait Analysis"],
            IMAGE: "/media/projects/pdafo/cover.jpg",
        },
        "Haptic Paddle & Embedded Mechatronics": {
            SLUG: "haptic-paddle",
            DATE: "Mar – Jun 2026",
            SUMMARY:
                "Motorized haptic paddle with programmable force feedback, driven by Pico and STM32 microcontrollers.",
            DESCRIPTION: [
                "Built for ME 433 (Advanced Mechatronics) at Northwestern, this motorized haptic paddle integrates an RC servo, a DRV8833 H-bridge motor driver, a load cell, and an AS5600 magnetic encoder to deliver programmable force feedback. I programmed Raspberry Pi Pico and STM32 microcontrollers in C and CircuitPython, handling sensor interfacing, I²C/SPI communication, PWM motor actuation, and current sensing for real-time control. I also wrote Python graphics to visualize paddle position and force, and designed force–displacement profiles that simulate bumps, detents, and toggle switches.",
            ],
            TECH_STACK: ["Embedded Systems", "STM32", "Raspberry Pi Pico", "C", "CircuitPython", "Haptics", "I2C/SPI"],
            IMAGE: "/media/projects/haptic-paddle/cover.jpg",
        },
        "Expanding Heart Conduit": {
            SLUG: "heart-conduit",
            DATE: "Jan – May 2025",
            SUMMARY:
                "Balloon-expandable, bidirectionally growing RV–PA conduit for pediatric congenital heart disease (UIUC Senior Design).",
            DESCRIPTION: [
                "For my senior design project at UIUC, our team designed a balloon-expandable, bidirectionally growing right ventricle–pulmonary artery (RV–PA) conduit for children with congenital heart disease. Today's conduits don't grow with the patient, which leads to repeat surgeries. I modeled and optimized expanding stent geometries in Abaqus, evaluating structural performance under cardiac loading, and assessed candidate biomaterials for fatigue resistance, elastic recovery, manufacturability, and biocompatibility.",
            ],
            TECH_STACK: ["Medical Devices", "Abaqus", "FEA", "Biomaterials", "Pediatric Cardiology"],
            IMAGE: "/media/projects/heart-conduit/cover.jpg",
        },
        "GoBabyGo Adaptive Ride-On Vehicles": {
            SLUG: "gobabygo",
            DATE: "Jul 2026",
            SUMMARY:
                "Custom adaptive ride-on cars for children with mobility limitations, built with Shirley Ryan AbilityLab.",
            DESCRIPTION: [
                "As a GoBabyGo volunteer with Shirley Ryan AbilityLab, I helped engineer custom adaptive ride-on vehicles for young children with mobility limitations. We added seating, restraint, and support systems tailored to each child, creating functional, low-cost mobility devices, and personalized each car's look to the child's interests so it felt like theirs.",
            ],
            TECH_STACK: ["Assistive Technology", "Adaptive Design", "Rapid Prototyping"],
            IMAGE: "/media/projects/gobabygo/cover.jpg",
        },
        "MoneyTip — Google Hardware Product Sprint": {
            SLUG: "moneytip",
            DATE: "May – Aug 2022",
            SUMMARY:
                "A button-activated device that shares money-saving tips, designed for injection molding during Google's HPS program.",
            DESCRIPTION: [
                "During Google's Hardware Product Sprint, I conceptualized and engineered MoneyTip, a device that gives you a new money-saving tip with each button click. I designed the plastic enclosure in Fusion 360 to fit Google's AIY Voice Kit and a Raspberry Pi, incorporating injection-molding specifications for manufacturability. I then ran fit-check assemblies with 3D-printed enclosures and tolerance analysis, refining dimensions and gaps with feedback from Google engineers.",
            ],
            TECH_STACK: ["Product Design", "Fusion 360", "Injection Molding", "DFM", "3D Printing", "Raspberry Pi"],
            IMAGE: "/media/projects/moneytip/cover.jpg",
        },
        "Baja SAE — Carbon Fiber Seat & Steering Wheel": {
            SLUG: "baja",
            DATE: "Aug 2023 – May 2025",
            SUMMARY:
                "Carbon fiber seat layup and a custom steering wheel for Offroad Illini's Baja car (Chassis Subteam).",
            DESCRIPTION: [
                "As a member of the Offroad Illini Chassis Subteam, I executed carbon fiber layup for the car's seat, improving its structural integrity and durability, and designed and manufactured the car's steering wheel.",
            ],
            TECH_STACK: ["Composites", "Carbon Fiber", "Manufacturing", "CAD"],
            IMAGE: "/media/projects/baja/cover.jpg",
        },
        "Gear Transmission Model": {
            SLUG: "gear-transmission",
            DATE: "Aug – Dec 2024",
            SUMMARY:
                "Forward gear train with a 2:1 ratio, hitting a 0.5 ft/s target speed and 28.65 RPM output.",
            DESCRIPTION: [
                "I designed and manufactured the forward gear train of a transmission model for controlled speed and torque output. The design achieved a 2:1 forward gear ratio, a target speed of 0.5 ft/s, and an output speed of 28.65 RPM, and I optimized it to lift the load in 12 seconds and lower it in 14 seconds. I also assembled all parts onto the base, mapping out key locations.",
            ],
            TECH_STACK: ["Machine Design", "Gears", "Manufacturing"],
            IMAGE: "/media/projects/gear-transmission/cover.jpg",
        },
        "Automatic Food Slicer": {
            SLUG: "food-slicer",
            DATE: "Jan – May 2024",
            SUMMARY: "Food-moving mechanism built on a scotch yoke for an automatic slicer.",
            DESCRIPTION: [
                "I engineered the food-moving mechanism of an automatic food slicer using a scotch yoke, making sure it worked with the rest of the slicer's components.",
            ],
            TECH_STACK: ["Mechanisms", "Scotch Yoke", "CAD"],
            IMAGE: "/media/projects/food-slicer/cover.jpg",
        },
        "3-DOF Hydraulic Arm (ASME)": {
            SLUG: "hydraulic-arm",
            DATE: "Aug 2021 – May 2022",
            SUMMARY: "Syringe-based hydraulic arm with a custom Fusion 360 gripper, built with ASME Special Projects.",
            DESCRIPTION: [
                "With the ASME Special Projects Committee, I modeled the gripper of a three-degree-of-freedom, syringe-based hydraulic arm in Fusion 360 and assembled the working arm from 3D-printed parts and off-the-shelf components.",
            ],
            TECH_STACK: ["Hydraulics", "Fusion 360", "3D Printing"],
            IMAGE: "/media/projects/hydraulic-arm/cover.jpg",
        },
        "Rube Goldberg Machine": {
            SLUG: "rube-goldberg",
            DATE: "Aug – Dec 2022",
            SUMMARY: "Spring-loaded stage of a 10-step machine that ends by switching on a light.",
            DESCRIPTION: [
                "I designed and built the spring-loaded mechanism for a 10-step Rube Goldberg machine whose final step activates a button light.",
            ],
            TECH_STACK: ["Mechanisms", "Prototyping"],
            IMAGE: "/media/projects/rube-goldberg/cover.jpg",
        },
    } as Record<string, IProjectData>,

    SKILLS: {
        Design: ["SolidWorks", "Fusion 360", "Onshape", "Creo"],
        "Simulation & Analysis": ["Abaqus", "Ansys", "OpenSim", "CoppeliaSim"],
        "Mechanical Testing": ["Instron System", "CNC Mill and Lathe"],
        Fabrication: ["3D Printing", "Injection Molding Design", "Carbon Fiber Layup", "Woodworking"],
        Hardware: ["Arduino", "Raspberry Pi Pico", "Raspberry Pi", "STM32", "PCB Design"],
        Programming: ["C", "C++", "MATLAB", "Python", "CircuitPython"],
    } as Record<string, string[]>,
};
