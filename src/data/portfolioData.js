export const personalInfo = {
  name: 'Adam Hamba',
  title: 'Python Developer | Embedded Systems Engineer | IoT Enthusiast',
  shortBio: 'I build intelligent systems that bridge the digital and physical worlds — from robust Flask web applications to real-time embedded solutions and IoT ecosystems.',
  location: 'Addis Ababa, Ethiopia',
  email: 'addaamhamba@gmail.com',
  github: 'https://github.com/adam3058',
  linkedin: 'https://linkedin.com/in/adam-hamba',
  telegram: 'https://t.me/Adito3',
  cvUrl: '/Adam_Hamba_CV.pdf',
  heroPhoto: '/profile-hero.jpg',
  aboutPhoto: '/about.jpg',
  photo: '/profile.jpg',
}

export const aboutText = [
  "I'm a passionate software developer and embedded systems engineer with a deep love for building systems that solve real-world problems. My journey started with curiosity about how hardware and software interact, leading me to explore the fascinating intersection of embedded systems, IoT, and web development.",
  "With hands-on experience in Flask web development, Arduino-based embedded projects, and IoT system design, I bring a unique perspective that spans from low-level microcontroller programming to high-level web application architecture.",
  "I thrive on challenges that require both creative thinking and technical precision — whether designing a secure communication protocol or architecting a scalable web platform.",
]

export const stats = [
  { label: 'Projects Completed',       value: '15+' },
  { label: 'Technologies Mastered',    value: '12+' },
  { label: 'Years of Experience',      value: '3+'  },
  { label: 'Open Source Contributions',value: '20+' },
]

export const skills = [
  { name: 'Python',       level: 92, category: 'Language',  icon: '🐍' },
  { name: 'Embedded C',   level: 85, category: 'Language',  icon: '⚙️' },
  { name: 'JavaScript',   level: 78, category: 'Language',  icon: '🟨' },
  { name: 'HTML & CSS',   level: 88, category: 'Frontend',  icon: '🌐' },
  { name: 'Flask',        level: 90, category: 'Framework', icon: '🔥' },
  { name: 'React',        level: 72, category: 'Framework', icon: '⚛️' },
  { name: 'SQLite / SQL', level: 82, category: 'Database',  icon: '🗄️' },
  { name: 'Git / GitHub', level: 88, category: 'Tool',      icon: '🐙' },
  { name: 'Arduino',      level: 93, category: 'Embedded',  icon: '🔌' },
  { name: 'IoT Systems',  level: 87, category: 'Embedded',  icon: '📡' },
  { name: 'Linux',        level: 80, category: 'Tool',      icon: '🐧' },
  { name: 'Raspberry Pi', level: 75, category: 'Embedded',  icon: '🍓' },
]

export const projects = [
  {
    id: 1, title: 'Flask Election System',
    description: 'A secure full-featured online voting platform with voter authentication, real-time result tallying, admin dashboard, and audit logs.',
    longDescription: 'A comprehensive election management system built with Flask and SQLite. Supports multiple election types, secure voter authentication with OTP, real-time vote counting, and a detailed admin dashboard with cryptographic vote hashing.',
    technologies: ['Python', 'Flask', 'SQLite', 'HTML/CSS', 'JavaScript', 'Bootstrap'],
    category: 'Web Development', github: 'https://github.com/Adam3058/Secure-election-system', demo: null, featured: true,
  },
  {
    id: 2, title: 'Smart Door Lock with RFID',
    description: 'An Arduino-based smart door lock using RFID authentication with access logging, remote unlock via serial commands, and LED/buzzer feedback.',
    longDescription: 'Built on Arduino Uno with MFRC522 RFID module. Maintains a whitelist of authorized cards, logs all access attempts, provides audio/visual feedback, and supports remote management via serial interface.',
    technologies: ['Arduino', 'C++', 'RFID', 'Python', 'Serial Communication'],
    category: 'Embedded Systems', github: 'https://github.com/Adam3058/RFID_control', demo: null, featured: true,
  },
  {
    id: 3, title: 'Water Level Monitoring System',
    description: 'IoT-based water level monitoring with real-time alerts using ultrasonic sensors connected to Arduino, transmitting data to a Flask dashboard.',
    longDescription: 'Complete IoT solution for water tank monitoring. Ultrasonic sensors measure levels and transmit via WiFi to a central Flask server with real-time charts, configurable thresholds, and email/SMS notifications.',
    technologies: ['Arduino', 'Python', 'Flask', 'IoT', 'Ultrasonic Sensor', 'WiFi'],
    category: 'IoT', github: 'https://github.com/adam3058/water-level-monitor', demo: null, featured: true,
  },
  {
    id: 4, title: 'IR Encrypted Communication',
    description: 'A secure infrared communication system with custom encryption for short-range data transmission between embedded devices.',
    longDescription: 'Uses infrared LEDs and photodiodes for short-range data transmission with a custom lightweight encryption algorithm optimized for microcontrollers, key exchange protocol, and message integrity verification.',
    technologies: ['Arduino', 'C++', 'Cryptography', 'IR Communication', 'PCB Design'],
    category: 'Embedded Systems', github: 'https://github.com/adam3058/IR_remote_control', demo: null, featured: false,
  },
  {
    id: 5, title: 'IoT Dashboard System',
    description: 'A comprehensive IoT management dashboard built with Flask aggregating data from multiple sensors with real-time visualization.',
    longDescription: 'Scalable IoT platform for managing multiple devices. Features real-time sensor visualization, device registration, configurable automation rules, REST API, and MQTT protocol support.',
    technologies: ['Python', 'Flask', 'MQTT', 'SQLite', 'JavaScript', 'Chart.js', 'REST API'],
    category: 'IoT', github: 'https://github.com/adam3058/iot-dashboard', demo: null, featured: true,
  },
]

export const experience = [
  { year: '2020', title: 'Started Programming Journey',   description: 'Began learning Python and fell in love with programming. Built first automation scripts and data processing tools.',                              icon: '🚀', side: 'left'  },
  { year: '2021', title: 'Embedded Systems Discovery',    description: 'Discovered Arduino and embedded systems. Built first hardware projects including LED controllers and sensor interfaces.',                       icon: '⚙️', side: 'right' },
  { year: '2022', title: 'Flask Web Development',         description: 'Mastered Flask and built full-stack web applications. Developed the Flask Election System as a major milestone project.',                       icon: '🌐', side: 'left'  },
  { year: '2022', title: 'IoT Systems Integration',       description: 'Combined embedded and web knowledge to build IoT solutions — water monitoring systems and smart home automation.',                              icon: '📡', side: 'right' },
  { year: '2023', title: 'Advanced Security Projects',    description: 'Developed secure communication systems including IR Encrypted Communication. Explored cryptography in embedded systems.',                       icon: '🔐', side: 'left'  },
  { year: '2024', title: 'Full-Stack & React',            description: 'Expanded into React and modern frontend development. Building comprehensive IoT dashboards and professional web applications.',                 icon: '⚛️', side: 'right' },
]

export const certifications = [
  { title: 'Python for Everybody',    issuer: 'Coursera / University of Michigan', year: '2022', icon: '🐍' },
  { title: 'IoT Fundamentals',        issuer: 'Cisco Networking Academy',          year: '2022', icon: '📡' },
  { title: 'Embedded Systems Design', issuer: 'Udemy',                             year: '2023', icon: '⚙️' },
  { title: 'Flask Web Development',   issuer: 'Udemy',                             year: '2023', icon: '🔥' },
  { title: 'Git & GitHub Mastery',    issuer: 'freeCodeCamp',                      year: '2023', icon: '🐙' },
  { title: 'Linux Command Line',      issuer: 'Linux Foundation',                  year: '2024', icon: '🐧' },
]

export const services = [
  { title: 'Web Development',          description: 'Full-stack web applications using Python/Flask with clean, responsive frontends. From REST APIs to complete web platforms.',              icon: '🌐', features: ['Flask REST APIs','Database Design','Authentication Systems','Admin Dashboards'],    borderColor: 'rgba(59,130,246,0.25)'  },
  { title: 'Embedded Systems Design',  description: 'Custom embedded solutions using Arduino and microcontrollers. Sensor integration, motor control, and real-time systems.',                icon: '⚙️', features: ['Arduino Programming','Sensor Integration','PCB Design','Real-time Systems'],       borderColor: 'rgba(139,92,246,0.25)'  },
  { title: 'IoT Solutions',            description: 'End-to-end IoT systems connecting physical devices to cloud platforms with real-time monitoring and control.',                           icon: '📡', features: ['Device Connectivity','Real-time Dashboards','MQTT Integration','Alert Systems'],     borderColor: 'rgba(6,182,212,0.25)'   },
  { title: 'Automation Projects',      description: 'Smart automation solutions for homes, industries, and businesses using Python scripting and embedded hardware.',                         icon: '🤖', features: ['Process Automation','Smart Home Systems','Data Collection','Remote Monitoring'],    borderColor: 'rgba(34,197,94,0.25)'   },
]
