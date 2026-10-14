"use client";

import { useEffect, useRef, useState, type FormEvent, type ReactNode } from "react";

const experiences = [
  {
    id: "corning", num: "01", title: "Control Systems Developer Intern", org: "Corning Incorporated", location: "Wilmington, NC", when: "May – Aug 2026", initial: "C", tint: "orange",
    bullets: [
      "Created a Glassmaking Operations Toolkit that brought production-floor tools into a more efficient supervisor and technician workflow, removing 4+ repeated steps.",
      "Improved a legacy VB6 label-printer app and prepared operator-centered usability validation.",
      "Implemented configurable barcode scanning with input checks to reduce reliance on manual case-ID entry."
    ], tags: ["VB6", "SharePoint", "Workflow design", "Input validation", "User research"]
  },
  {
    id: "quantum", num: "02", title: "Project Team Leader · Game Developer", org: "QuantUM · University of Michigan", location: "Ann Arbor, MI", when: "Jan 2025 – Present", initial: "⚛", tint: "pink",
    bullets: [
      "Lead a team of students developing a quantum-mechanics-inspired UNO game in Unity and C#.",
      "Translate concepts such as superposition and entanglement into mechanics that are interesting to play and easier to understand.",
      "Coordinate work across development, design, debugging, and team communication."
    ], tags: ["Unity", "C#", "Git", "Game design", "Leadership"]
  },
  {
    id: "mdst", num: "03", title: "Software Developer", org: "Michigan Data Science Team", location: "Ann Arbor, MI", when: "Sep 2024 – Present", initial: "M", tint: "green",
    bullets: [
      "Built a CNN fruit-recognition project using a dataset of 5,000+ images across more than 30 fruit types.",
      "Trained and evaluated a TensorFlow/Keras model that achieved approximately 92% classification accuracy.",
      "Used OpenCV and NumPy preprocessing to investigate and improve model performance."
    ], tags: ["Python", "TensorFlow", "Keras", "OpenCV", "NumPy"]
  },
  {
    id: "cynerge", num: "04", title: "Frontend Web Developer Intern", org: "Cynerge Consulting", location: "Pontiac, MI", when: "May – Dec 2024", initial: "Cy", tint: "blue",
    bullets: [
      "Built reusable WordPress components with PHP, HTML, and CSS for client-facing web experiences.",
      "Helped restructure sites to make navigation and content clearer for visitors.",
      "Worked in regular team stand-ups and client conversations to connect requirements with implementation."
    ], tags: ["PHP", "WordPress", "HTML", "CSS", "Collaboration"]
  },
  {
    id: "mracing", num: "05", title: "Autonomous Software Developer", org: "MRacing Formula SAE", location: "Ann Arbor, MI", when: "Sep 2023 – Dec 2024", initial: "R", tint: "yellow",
    bullets: [
      "Contributed to vehicle perception through sensor-fusion covariance modeling.",
      "Worked with C++, ROS, and RViz to reason about simulated sensor data and autonomous racing systems."
    ], tags: ["C++", "ROS", "RViz", "Sensor fusion"]
  }
];

const skills = [
  {title: "Programming & Algorithms", subtitle: "Writing software, thinking through complexity", items: ["C++", "C", "Python", "JavaScript", "Algorithms", "SQL"]},
  {title: "Web Development", subtitle: "Interfaces made for actual humans", items: ["React", "HTML", "CSS", "PHP", "Flask", "WordPress"]},
  {title: "Machine Learning & Data", subtitle: "From raw information to useful inference", items: ["TensorFlow", "Keras", "OpenCV", "NumPy", "R", "MATLAB"]},
  {title: "Tools & Systems", subtitle: "How all the moving pieces fit", items: ["Git / GitHub", "Linux / Shell", "Unity", "C#", "ROS / RViz", "Qiskit"]}
];

const projects = [
  {id:"fruit",num:"01",name:"Fruit Vision",summary:"A CNN-based fruit identifier trained on 30+ categories, achieving ~92% classification accuracy.",label:"MACHINE LEARNING",color:"fruit",icon:"◒",details:["Prepared a dataset of 5,000+ images using OpenCV and NumPy.","Trained and evaluated convolutional architectures with TensorFlow and Keras.","Explored how real-world image variation affects prediction quality."],tags:["Python","TensorFlow","Keras","OpenCV"]},
  {id:"uno",num:"02",name:"Quantum UNO",summary:"A card game that turns quantum mechanics into playable, collaborative learning.",label:"CREATIVE CODING",color:"uno",icon:"⚛",details:["Lead a game-development project team in QuantUM.","Build gameplay in Unity and C# inspired by entanglement, superposition, and quantum gates.","Focus on game feel, accessibility of concepts, and teamwork."],tags:["Unity","C#","Game design","Team leadership"]},
  {id:"toolkit",num:"03",name:"Glassmaking Operations Toolkit",summary:"Tools for factory-floor teams that simplify the work happening between the machines.",label:"INTERNAL SOFTWARE",color:"toolkit",icon:"⌘",details:["Consolidated several daily workflows for supervisors and technicians using SharePoint.","Reduced recurring manual steps and considered usability during rollout.","Project details are generalized to respect employer confidentiality."],tags:["SharePoint","UX","Workflow automation"]},
  {id:"racing",num:"04",name:"MRacing Autonomous",summary:"Sensor-fusion and simulation software to support an autonomous Formula SAE race car.",label:"ROBOTICS",color:"racing",icon:"↗",details:["Worked on covariance matrices and perception models for sensor fusion.","Used C++, ROS, and RViz to inspect and simulate data relevant to vehicle localization."],tags:["C++","ROS","RViz","Perception"]},
  {id:"web",num:"05",name:"Client Web Experiences",summary:"Reusable, considered frontend components and clearer information architecture for clients.",label:"FRONTEND",color:"web",icon:"✳",details:["Worked on WordPress themes and components with PHP, HTML, and CSS.","Collaborated with developers and stakeholders on user-friendly layouts and website organization."],tags:["HTML","CSS","PHP","WordPress"]},
  {id:"graph",num:"06",name:"Graph Optimization",summary:"Finding efficient routes with graph algorithms, heuristics, and careful runtime analysis.",label:"ALGORITHMS",color:"graph",icon:"⬡",details:["Implemented minimum spanning tree and traveling salesperson algorithms in C++.","Combined branch-and-bound, 2-opt improvements, and heuristics to balance efficiency and solution quality."],tags:["C++","MST","TSP","Optimization"]}
];

function Icon({name,size=19}: {name:"github"|"linkedin"|"email"|"resume"|"sun"|"moon"|"chevron"|"arrow"|"copy"|"clock"|"location"|"menu";size?:number}){
  const paths: Record<string,ReactNode> = {
    github:<path d="M9 20c-4.6 1.5-4.6-2.5-6.5-3M15 22v-4a3.7 3.7 0 0 0-1-2.9c3.5-.4 6.9-1.7 6.9-7.3A5.8 5.8 0 0 0 19.3 4a5.6 5.6 0 0 0-.1-4S18 0 15.2 1.6a13.8 13.8 0 0 0-6.4 0C6 .1 4.7 0 4.7 0a5.6 5.6 0 0 0-.1 4 5.8 5.8 0 0 0-1.6 3.8c0 5.6 3.4 6.9 6.9 7.3a3.7 3.7 0 0 0-1 2.9v4"/>,
    linkedin:<><rect x="2" y="7" width="4" height="14" rx=".5"/><path d="M4 2.5v.5M10 21V7h4v2.5a4.5 4.5 0 0 1 8 3.5v8h-4v-7.2a2.2 2.2 0 0 0-4.4 0V21z"/></>,
    email:<><rect x="2.5" y="4" width="19" height="16" rx="2"/><path d="m3 6 9 7 9-7"/></>,
    resume:<><path d="M6 2h8l5 5v14a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1Z"/><path d="M14 2v6h5M8 12h8M8 16h8"/></>,
    sun:<><circle cx="12" cy="12" r="4"/><path d="M12 2v2m0 16v2M4.9 4.9l1.4 1.4m11.4 11.4 1.4 1.4M2 12h2m16 0h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/></>,
    moon:<path d="M20.5 15.7A9 9 0 0 1 8.3 3.5 9 9 0 1 0 20.5 15.7Z"/>,
    chevron:<path d="m6 9 6 6 6-6"/>,arrow:<path d="M5 12h14m-6-6 6 6-6 6"/>,
    copy:<><rect x="7" y="8" width="13" height="13" rx="2"/><path d="M16 8V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h2"/></>,
    clock:<><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></>,
    location:<><path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="2.5"/></>,
    menu:<path d="M3 6h18M3 12h18M3 18h18"/>
  };
  return <svg aria-hidden="true" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">{paths[name]}</svg>
}
function SectionTitle({children,id,action}:{children:ReactNode;id?:string;action?:ReactNode}){
  return <div className="section-title" id={id}><h2>// {children}</h2>{action}</div>
}
function Chip({children}:{children:ReactNode}){return <span className="tech-chip">{children}</span>}
function Equalizer(){const bars = Array.from({length:65},(_,i)=>{
  const x=i/65;return Math.max(1,Math.round((0.06+Math.pow(Math.sin(x*Math.PI),2)*.86+Math.abs(Math.sin(i*.72))*.12)*12))
});return <div className="equalizer" aria-label="Decorative animated green digital signal visualizer" role="img"><div className="eq-topline"><span>◂ SIGNAL 001 / CURIOUSITY FREQUENCY</span><span>▸ ONLINE</span></div><div className="eq-bars" aria-hidden="true">{bars.map((height,i)=><span className="eq-column" key={i} style={{"--levels":height,"--delay":`${(i%14)*-.16}s`} as React.CSSProperties}>{Array.from({length:13},(_,j)=><i key={j} className={j>=Math.round((13-height)/2)&&j<Math.round((13+height)/2)?"lit":""}/>)}</span>)}</div><div className="eq-bottomline"><span>∿ &nbsp; 0xA5 / a signal from somewhere curious</span><span>40°N 83°W</span></div></div>}

function ThemeButton(){const[theme,setTheme]=useState<"light"|"dark">("light");useEffect(()=>{setTheme(document.documentElement.dataset.theme==="dark"?"dark":"light")},[]);const change=()=>{const n=theme==="light"?"dark":"light";document.documentElement.dataset.theme=n;try{localStorage.setItem("ashley-portfolio-theme",n)}catch{}setTheme(n)};return <button className="icon-button theme-btn" onClick={change} title={theme==="light"?"Switch to dark mode":"Switch to light mode"} aria-label={theme==="light"?"Switch to dark mode":"Switch to light mode"}><Icon name={theme==="light"?"moon":"sun"} size={19}/></button>}
function ContactForm(){const[name,setName]=useState("");const[email,setEmail]=useState("");const[msg,setMsg]=useState("");const submit=(e:FormEvent<HTMLFormElement>)=>{e.preventDefault();const subject=encodeURIComponent("Portfolio hello from "+name);const body=encodeURIComponent(`${msg}\n\nFrom: ${name}\nReply to: ${email}`);window.location.href=`mailto:asawicke@gmail.com?subject=${subject}&body=${body}`};return <form className="contact-form" onSubmit={submit}><label><span className="sr-only">Your name</span><input required placeholder="Your name" value={name} onChange={e=>setName(e.target.value)}/></label><label><span className="sr-only">Your email</span><input type="email" required placeholder="Your email" value={email} onChange={e=>setEmail(e.target.value)}/></label><label><span className="sr-only">Your message</span><input required placeholder="Quick message..." value={msg} onChange={e=>setMsg(e.target.value)}/></label><button type="submit">Compose email <Icon name="arrow" size={16}/></button><p className="contact-note">Opens your email app; no message is stored on this site.</p></form>}

export default function Home(){
 const [mobile,setMobile]=useState(false),[experienceOpen,setExperienceOpen]=useState<string|null>("corning"),[projectOpen,setProjectOpen]=useState<string|null>(null),[copied,setCopied]=useState(false);
 const[allProjects,setAllProjects]=useState(false); const[clock,setClock]=useState("");const navRef=useRef<HTMLElement|null>(null);
 useEffect(()=>{const set=()=>setClock(new Intl.DateTimeFormat("en-US",{timeZone:"America/Detroit",hour:"2-digit",minute:"2-digit",hour12:true}).format(new Date()));set();const t=window.setInterval(set,60000);return()=>clearInterval(t)},[]);
 const close=()=>setMobile(false);
 const copyEmail=async()=>{try{await navigator.clipboard.writeText("asawicke@gmail.com");setCopied(true);window.setTimeout(()=>setCopied(false),2500)}catch{window.location.href="mailto:asawicke@gmail.com"}};
 return <>
  <header className="site-nav" ref={navRef}><div className="nav-shell wrap">
     <a href="#home" className="wordmark" onClick={close} aria-label="Ashley home">ashley<span className="brand-dot">.me</span><span className="tiny-bug" aria-hidden="true">✳</span></a>
     <nav className={mobile?"nav-links open":"nav-links"} aria-label="Main navigation">
       {[['about','ABOUT'],['experience','EXP'],['skills','SKILLS'],['projects','PROJECTS'],['writing','WRITING'],['contact','CONTACT']].map(([href,label])=><a key={href} href={`#${href}`} onClick={close}>{label}</a>)}
     </nav>
     <div className="nav-tools"><a href="https://github.com/ashleysawicke" target="_blank" rel="noopener noreferrer" className="icon-button" aria-label="GitHub profile"><Icon name="github"/></a><a href="https://www.linkedin.com/in/ashley-sawicke/" target="_blank" rel="noopener noreferrer" className="icon-button" aria-label="LinkedIn profile"><Icon name="linkedin"/></a><a href="#resume" className="icon-button" onClick={close} aria-label="Resume section"><Icon name="resume"/></a><span className="nav-divider"/><ThemeButton/><button className="icon-button mobile-toggle" aria-label={mobile?"Close menu":"Open menu"} aria-expanded={mobile} onClick={()=>setMobile(!mobile)}><Icon name="menu"/></button></div>
   </div></header>
 <main id="home" className="wrap">
  <div className="hero-block"><Equalizer/>
    <div className="intro-grid"><div className="intro-text"><p className="eyebrow status"><span className="online-led"/> OPEN TO WHAT'S NEXT</p><h1>Ashley Sawicke<span className="hero-dot">.</span></h1><div className="hero-subtitle"><span>Software Engineer <span className="bullet">•</span></span><span className="location-pill"><Icon name="location" size={14}/> Ann Arbor, Michigan</span></div><p className="hero-description">Computer Science student at <strong>the University of Michigan</strong>. I build thoughtful software, explore complicated questions, and care about what technology can do for the world.</p><div className="hero-buttons"><a href="mailto:asawicke@gmail.com" className="btn primary"><Icon name="email"/> Get in touch</a><a href="#resume" className="btn outline"><Icon name="resume"/> Résumé</a><a href="#projects" className="btn ghost">View projects <Icon name="arrow"/></a></div><div className="quick-links"><a href="https://github.com/ashleysawicke" target="_blank" rel="noopener noreferrer"><Icon name="github" size={17}/> GitHub</a><a href="https://www.linkedin.com/in/ashley-sawicke/" target="_blank" rel="noopener noreferrer"><Icon name="linkedin" size={17}/> LinkedIn</a><a href="mailto:asawicke@gmail.com"><Icon name="email" size={17}/> Email</a><a href="#resume"><Icon name="resume" size={17}/> Résumé</a></div><div className="music-mini" aria-label="A little about Ashley"><span className="music-cover">♫</span><div><small>CURRENT FREQUENCY</small><strong>Systems, ethics & the Beatles</strong></div><div className="music-bars" aria-hidden="true"><i/><i/><i/><i/><i/><i/></div><span className="music-play" aria-hidden="true">✳</span></div></div>
    <div className="hero-picture"><div className="portrait-backdrop" aria-hidden="true">01101001<br/>01010111<br/>10101101</div><img src="/portrait-signal.svg" alt="Original illustrated green halftone portrait standing in for Ashley's personal photo"/><span className="portrait-caption">VISUAL PLACEHOLDER // ORIGINAL SIGNAL ART</span></div></div>
  </div>
  <section id="about" className="site-section"><SectionTitle>ABOUT ME</SectionTitle><div className="about-copy"><p>Hi, I'm <strong>Ashley</strong>, a senior at the University of Michigan studying Computer Science with a minor in Philosophy. I've always been curious about what makes things work—whether it's a program, a person, or the systems shaping our world.</p><p>That curiosity has taken me from industrial software and robotics to machine learning, game development, and human-centered web design. I'm especially interested in how we can apply technology <em>responsibly</em> to improve people's lives.</p><p>Outside of code, I love long runs, film, music, the Great Lakes, astronomy, hiking, and conversations about applied ethics and global priorities. I tend to follow an interesting question wherever it goes.</p><p className="about-italic">This is my little corner of the internet for the things I've built, learned, and keep thinking about.</p></div></section>
  <section id="education" className="site-section"><SectionTitle>EDUCATION</SectionTitle><div className="edu-grid"><article className="outline-card edu-card"><p className="date-accent">⌁ &nbsp; 2023 – 2027 (expected)</p><h3>University of Michigan</h3><p className="edu-degree">B.S.E. Computer Science</p><p>College of Engineering, Ann Arbor<br/>Minor in Philosophy · GPA 3.5</p></article><article className="outline-card edu-card"><p className="date-accent">⌁ &nbsp; INTERDISCIPLINARY INTERESTS</p><h3>Ethics meets engineering</h3><p className="edu-degree">Human-centered & socially useful technology</p><p>Applied ethics, global priorities, systems thinking, and the responsibility of engineers.</p></article></div></section>
  <section id="experience" className="site-section"><SectionTitle>CAREER & EXPERIENCE</SectionTitle><div className="stack">{experiences.map(item=><article key={item.id} className={`outline-card expandable ${experienceOpen===item.id?"expanded":""}`}><button type="button" className="expand-trigger" aria-expanded={experienceOpen===item.id} onClick={()=>setExperienceOpen(experienceOpen===item.id?null:item.id)}><span className="item-number">{item.num}</span><span className={`employer-logo ${item.tint}`}>{item.initial}</span><span className="expand-heading"><strong>{item.title}</strong><small>{item.org}</small></span><span className="expand-date"><span>▣</span> {item.when}</span><span className="chevron-holder"><Icon name="chevron" size={17}/></span></button>{experienceOpen===item.id&&<div className="expand-content"><ul className="terminal-list">{item.bullets.map(x=><li key={x}>{x}</li>)}</ul><div className="tech-row"><span>TECH:</span>{item.tags.map(t=><Chip key={t}>{t}</Chip>)}</div></div>}</article>)}</div></section>
  <section id="skills" className="site-section"><SectionTitle>SKILLS & TOOLBOX</SectionTitle><div className="skills-grid">{skills.map(x=><article className="outline-card skill" key={x.title}><h3>{x.title}</h3><p>{x.subtitle}</p><div className="tags">{x.items.map(s=><Chip key={s}>{s}</Chip>)}</div></article>)}</div></section>
  <section id="projects" className="site-section"><SectionTitle action={<button type="button" className="section-action" onClick={()=>setAllProjects(!allProjects)}>{allProjects?"Show fewer":"All projects (6)"} <Icon name="arrow" size={15}/></button>}>FEATURED PROJECTS</SectionTitle><div className="stack">{projects.slice(0,allProjects?6:4).map(project=><article key={project.id} className={`outline-card expandable project-item ${projectOpen===project.id?"expanded":""}`}><button type="button" className="expand-trigger" onClick={()=>setProjectOpen(projectOpen===project.id?null:project.id)} aria-expanded={projectOpen===project.id}><span className="item-number">{project.num}</span><span className={`project-thumb ${project.color}`} aria-hidden="true">{project.icon}</span><span className="expand-heading"><strong>{project.name}</strong><small>{project.summary}</small></span><span className="project-badge">{project.label}</span><span className="chevron-holder"><Icon name="chevron" size={17}/></span></button>{projectOpen===project.id&&<div className="expand-content"><ul className="terminal-list">{project.details.map(x=><li key={x}>{x}</li>)}</ul><div className="tech-row"><span>TECH:</span>{project.tags.map(t=><Chip key={t}>{t}</Chip>)}</div><p className="fine-print">Illustrative thumbnail. A public demo or source link can be added when available.</p></div>}</article>)}</div></section>
  <section id="resume" className="site-section"><SectionTitle>RÉSUMÉ AT A GLANCE</SectionTitle><div className="resume-inline outline-card"><div><p className="date-accent">CURRENTLY BUILDING</p><h3>Software that makes a difference.</h3><p>Computer Science + Philosophy at Michigan. Experience in manufacturing tooling, frontend engineering, data science, and robotics.</p></div><button className="btn outline" onClick={()=>window.print()} type="button"><Icon name="resume"/> Print / save as PDF</button></div></section>
  <section id="writing" className="site-section"><SectionTitle>NOTES FROM THE MARGINS</SectionTitle><div className="writing-box outline-card"><div className="writing-symbol">✳</div><div><p className="date-accent">COMING SOON / WRITING</p><h3>For all the interesting questions.</h3><p>I'm making room to write about software, philosophy, applied ethics, global priorities, film, and whatever else I find fascinating.</p><a href="mailto:asawicke@gmail.com?subject=Blog%20ideas" className="inline-link">Have a topic? Tell me ↗</a></div></div></section>
  <section id="curiosity" className="site-section"><SectionTitle>THE CURIOSITY CORNER</SectionTitle><div className="sky-box outline-card"><div className="star-field" aria-hidden="true"><span className="big-star">✦</span><span className="ring-planet"/><span className="small-star star-one">✧</span><span className="small-star star-two">+</span><span className="small-star star-three">✦</span></div><div className="sky-body"><span className="date-accent">THE NIGHT SKY / ALWAYS WORTH LOOKING UP</span><h3>There's a lot more out there.</h3><p>Outside computer science, astronomy is one of my favorite rabbit holes. Here's one of the internet's most wonderful daily discoveries.</p><a className="inline-link" target="_blank" rel="noopener noreferrer" href="https://apod.nasa.gov/apod/astropix.html">Explore NASA's Astronomy Picture of the Day <Icon name="arrow" size={16}/></a></div></div></section>
 </main>
 <footer id="contact" className="footer"><div className="wrap"><div className="footer-row"><div><h2>Let's build something good.</h2><p>Always curious about meaningful software projects and interesting conversations.</p></div><div className="footer-actions"><button type="button" onClick={copyEmail} className="email-copy"><Icon name="email" size={17}/> asawicke@gmail.com <Icon name="copy" size={15}/>{copied&&<span role="status" className="copy-tooltip">Copied!</span>}</button><div><a href="https://github.com/ashleysawicke" target="_blank" rel="noopener noreferrer" aria-label="Ashley on GitHub"><Icon name="github" size={17}/></a><a href="https://www.linkedin.com/in/ashley-sawicke/" target="_blank" rel="noopener noreferrer" aria-label="Ashley on LinkedIn"><Icon name="linkedin" size={17}/></a></div></div></div><ContactForm/><div className="footer-bottom"><span>© 2026 Ashley Sawicke <b>✳</b> Ann Arbor, Michigan</span><span><Icon name="clock" size={13}/> {clock||"Eastern Time"} ET</span><a href="#home">Back to top ↑</a></div></div></footer>
 </>
}