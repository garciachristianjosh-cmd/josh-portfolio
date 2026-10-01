/* ==========================================================
   content.js  -  EVERYTHING the site says lives here.
   Edit text between quotes. Don't delete commas or brackets.
   Leave a link as "" and it simply won't show up.
   ========================================================== */
const SITE = {
  name: "Josh",
  label: "Josh · BSIT · Year 3",
  headline: "I like finding out how things work.",
  subline: "I'm a third-year IT student, still exploring where I fit. This is my workbench.",

  about: [
    "I'm a third-year BSIT student, and I haven't decided which part of IT is mine yet. I'm okay with that.",
    "What I do know is that I'd rather have something open on the desk than only read about it. Cables, hardware, things that stopped working: I'll poke at them, usually before I fully know what I'm doing, and I like the moment it finally works.",
    "I try to figure things out on my own first and ask for help when I hit a wall. This site is where I keep track of what I'm learning. It's small right now, and it'll grow."
  ],

  /* status can be: "learning", "familiar", "used in a project" */
  skillsIntro: "What I'm working with right now. It's all beginner level, and the labels are honest.",
  skills: [
    { group: "Learning", items: [
      { name: "HTML", status: "learning", note: "How web pages are structured. This site is written in it." },
      { name: "CSS", status: "learning", note: "How pages look and adapt to different screens." },
      { name: "JavaScript", status: "learning", note: "Making pages respond. Still early." },
      { name: "C++", status: "learning", note: "How programs are structured and how to think through logic." },
      { name: "MySQL", status: "learning", note: "Storing and querying data. Basics." }
    ]},
    { group: "Foundations", items: [
      { name: "Networking", status: "familiar", note: "How devices talk to each other. Basics." },
      { name: "GitHub", status: "familiar", note: "Version control basics." },
      { name: "Microsoft Office", status: "familiar", note: "Documents, spreadsheets, and slides for school work." }
    ]}
  ],

  /* tag can be: "exploring", "stuck on", "figured out" */
  benchIntro: "What I'm working through right now. Mostly the basics, one piece at a time.",
  bench: [
    { tag: "exploring", text: "HTML, CSS, and JavaScript basics, starting with building this site." },
    { tag: "exploring", text: "How C++ programs are structured and how to think through logic." },
    { tag: "exploring", text: "MySQL and networking basics: how data gets stored, and how devices talk to each other." }
  ],

  /* Empty slots for future projects. To fill one, see README.
     A filled project looks like:
     { slot: "P-01", title: "Name", text: "What it is.", link: "https://..." }  */
  projectsIntro: "What I've built so far. It's not much, but it's a start.",
  projects: [
    { slot: "P-01", title: "Enrollment System.", text: "A simple enrollment system for managing student registrations.", link: "https://enrollease-system-production.up.railway.app/" },
    { slot: "P-02", title: "Project 2", text: "Description for Project 2.", link: "#" },
    { slot: "P-03", title: "Project 3", text: "Description for Project 3.", link: "#" }
  ],
  projectsCaption: "Slots fill when something is actually built.",

  contactText: "If you'd like to talk about school, an opportunity, or a piece of hardware that won't behave, I'm happy to hear from you.",
  links: {
    email: "garcia.christianjosh@ncst.edu.ph",   // replace with your real email
    github: "https://github.com/garciachristianjosh-cmd",   // e.g. "https://github.com/yourname"
    linkedin: "",                      // e.g. "https://linkedin.com/in/yourname"
    resume: ""                         // e.g. "files/josh-resume.pdf"
  },

  footer: "Built by hand by Josh. Last updated October 2026."
};
