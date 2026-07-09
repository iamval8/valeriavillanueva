const closeButton = document.querySelector('.window-close');
const reminder = document.querySelector('.reminder-dialog');
const okButton = document.querySelector('.dialog-ok');

function hideReminder() {
  if (!reminder) return;
  reminder.style.opacity = '0';
  reminder.style.transform = 'translateY(8px) scale(.98)';
  setTimeout(() => reminder.style.display = 'none', 180);
}

closeButton?.addEventListener('click', hideReminder);
okButton?.addEventListener('click', hideReminder);

document.querySelectorAll('.window-controls span').forEach(control => {
  control.addEventListener('mouseenter', () => control.style.background = '#eb729a');
  control.addEventListener('mouseleave', () => control.style.background = '#f4e8d8');
});

const projectData = {
  river: {
    number: '01',
    tab: '01 · The River',
    appTitle: '✶ THERIVERABILENE.COM',
    fileName: 'CASE_01_THE_RIVER.FOL',
    title: 'The River of Life Church',
    description: 'A full creative direction, website, social media, and multimedia case study for a community-centered church brand in Abilene, Texas.',
    callout: 'brand system.<br>web launch.<br>social growth.',
    bullets: [
      'Designed and launched the church website to clarify visitor information and support community engagement.',
      'Directed social media, sermon graphics, event promos, print collateral, and multi-platform digital storytelling.',
      'Helped grow social engagement by 40% in one year, contributing to increased church membership.'
    ],
    metrics: [
      ['+40%', 'social engagement'],
      ['global', 'audience reach'],
      ['multi-channel', 'outreach']
    ],
    tags: ['CREATIVE DIRECTION', 'WEB DESIGN', 'SOCIAL MEDIA', 'VIDEO'],
    actions: [
      { label: 'visit website →', href: 'https://www.theriverabilene.com/' },
      { label: 'video work →', href: 'https://vimeo.com/valeriavillanueva', secondary: true }
    ],
    slides: [
      { src: 'assets/river-postcards.webp', category: 'PRINT WORK', alt: 'The River of Life Church welcome postcard designs', note: 'Welcome-home postcard and printed invite pieces created for guest connection and community outreach.' },
      { src: 'assets/river-sunday.webp', category: 'SOCIAL MEDIA', alt: 'Sunday service social media graphic for The River of Life Church', note: 'Social graphic promoting weekly service information with layered texture and bold typography.' },
      { src: 'assets/river-prayer.webp', category: 'SERMON / MESSAGE GRAPHICS', alt: 'Power in Prayer neon sermon graphic', note: 'Sermon-series visual using neon styling to create a memorable message moment.' },
      { src: 'assets/river-ig-1.webp', category: 'CURATED SOCIAL GRID', alt: 'Screenshot of curated church Instagram feed', note: 'A curated Instagram presence built to balance people, service moments, event graphics, and seasonal visuals.' },
      { src: 'assets/river-ig-2.webp', category: 'EVENT PROMOTION', alt: 'Church Instagram grid with summer event graphics', note: 'Seasonal and event promotion created to help the community quickly understand what was happening and how to join.' },
      { src: 'assets/river-ig-3.webp', category: 'COMMUNITY STORYTELLING', alt: 'Church Instagram grid with congregation photos and Sunday graphics', note: 'People-centered content direction that made the organization feel active, welcoming, and human.' },
      { src: 'assets/river-ig-4.webp', category: 'VOLUNTEER / MEDIA WORK', alt: 'Instagram post showing a volunteer working on media production', note: 'Visual storytelling that supported volunteer recruitment and highlighted behind-the-scenes creative work.' },
      { src: 'assets/river-ig-5.webp', category: 'SEASONAL SERMON SERIES', alt: 'Easter and worship night graphics in church social feed', note: 'Seasonal sermon-series graphics and worship-night promos designed for digital communication.' },
      { src: 'assets/river-ig-6.webp', category: 'SEASONAL CAMPAIGNS', alt: 'Christmas campaign visuals on church Instagram grid', note: 'Holiday campaign visuals that created a consistent seasonal tone across social media.' },
      { src: 'assets/river-ig-7.webp', category: 'SOCIAL MEDIA SYSTEM', alt: 'Church Instagram grid showing event and devotional posts', note: 'A multi-format social system built for announcements, encouragement, storytelling, and event communication.' }
    ]
  },
  robotics: {
    number: '02',
    tab: '02 · Robotics',
    appTitle: '✶ ROBOTICS_SYSTEM_DESIGN.APP',
    fileName: 'CASE_02_ROBOTICS.FOL',
    title: 'Robotics Program System Design',
    description: 'A student-centered robotics program system that helped teams build, code, document, collaborate, and prepare for competition under real constraints.',
    callout: 'build.<br>test.<br>document.<br>iterate.',
    bullets: [
      'Created program structures, expectations, and eligibility guidelines to support commitment, communication, and competition readiness.',
      'Developed robotics curriculum and workshop materials that connected VEX robotics to design thinking, safe failure, iteration, and real-world problem solving.',
      'Coached students through technical builds, engineering notebooks, teamwork, strategy, and competition reflection.'
    ],
    metrics: [
      ['Top 4', 'national placement'],
      ['system', 'program structure'],
      ['weekly', 'notebook reviews']
    ],
    tags: ['SYSTEMS DESIGN', 'ROBOTICS', 'CURRICULUM', 'COACHING', 'DOCUMENTATION'],
    actions: [
      { label: 'guidelines →', href: 'assets/vex-team-guidelines-expectations.pdf' },
      { label: 'journal sample 01 →', href: 'assets/student-engineering-journal-push-back.pdf' },
      { label: 'journal sample 02 →', href: 'assets/student-engineering-journal-vex-v5.pdf' },
      { label: 'curriculum slides →', href: 'assets/hs-robotics-unit-1.pdf', secondary: true },
      { label: 'workshop deck →', href: 'assets/demystifying-robotics-workshop.pdf', secondary: true }
    ],
    slides: [
      { src: 'assets/robotics-team-awards.webp', category: 'COMPETITION OUTCOME', alt: 'Robotics students and coaches after a VEX competition awards ceremony', note: 'Competition moment showing the program community and student achievement.' },
      { src: 'assets/robotics-robot-closeup.webp', category: 'BUILD + PROTOTYPE', alt: 'Close-up of a VEX robot built by students', note: 'Student-built robot prototype showing mechanical iteration and competition-focused design.' },
      { src: 'assets/robotics-mentoring-selfie.webp', category: 'MENTORING', alt: 'Valeria mentoring students during a robotics event', note: 'Coaching and student support during a live competition setting.' },
      { src: 'assets/robotics-practice-field.webp', category: 'TESTING + STRATEGY', alt: 'Students testing robots on a VEX competition field', note: 'Students testing robots, observing performance, and making strategic adjustments.' },
      { src: 'assets/robotics-team-collaboration.webp', category: 'TEAM COLLABORATION', alt: 'Robotics students collaborating around the competition field', note: 'Collaboration and communication are core parts of the program system.' },
      { src: 'assets/robotics-competition-team.webp', category: 'COMPETITION READY', alt: 'Robotics team members at a VEX competition', note: 'Students preparing and competing with robots under real constraints.' },
      { src: 'assets/robotics-competition-action.webp', category: 'MATCH DAY', alt: 'Students operating a robot during a robotics competition', note: 'Competition-day action where driving, programming, strategy, and teamwork come together.' },
      { src: 'assets/robotics-nationals-group.webp', category: 'PROGRAM COMMUNITY', alt: 'Robotics team group photo with robots outside at competition', note: 'A program culture built around shared ownership, resilience, and team identity.' },
      { src: 'assets/robotics-tryout-poster.webp', category: 'PROGRAM RECRUITMENT', alt: 'Competitive VEX Robotics team tryout poster', note: 'Recruitment poster designed to invite students into a structured competitive robotics program.' },
      { src: 'assets/robotics-guidelines.webp', category: 'PROGRAM SYSTEM', alt: 'Preview of VEX team guidelines and expectations document', note: 'Team values, attendance expectations, eligibility requirements, and notebook review structures designed for clarity.' },
      { src: 'assets/robotics-workshop-cover.webp', category: 'WORKSHOP DESIGN', alt: 'Demystifying Robotics workshop cover slide', note: 'A robotics pedagogy workshop created to make robotics approachable across disciplines.' },
      { src: 'assets/robotics-design-thinking-workshop.webp', category: 'DESIGN THINKING', alt: 'Robotics design thinking workshop slide', note: 'Workshop materials connecting robotics to empathy, prototype, test, reflection, and iteration.' },
      { src: 'assets/robotics-unit-timeline.webp', category: 'CURRICULUM DESIGN', alt: 'HS Robotics Unit 1 timeline slide', note: 'Curriculum slides that introduced robotics through real-world applications, project timelines, and reflection.' },
      { src: 'assets/robotics-notebook-system.webp', category: 'ENGINEERING NOTEBOOKS', alt: 'Student engineering notebook process preview', note: 'Student engineering journals documented goals, revisions, sketches, testing, and competition reflection.' },
      { src: 'assets/robotics-notebook-goals.webp', category: 'STUDENT DOCUMENTATION', alt: 'Student engineering notebook goals and reflection preview', note: 'Notebook samples show how students documented their design decisions and learning process.' }
    ]
  },
  education: {
    number: '03',
    tab: '03 · Learning',
    appTitle: '✶ MONSTER_LAB.ALIGNMENT',
    fileName: 'CASE_03_LEARNING.FOL',
    title: 'Monster Lab: Learning Experience Design',
    description: 'A vertical-alignment project connecting elementary imagination with middle school design, fabrication, empathy, and user-centered making.',
    callout: 'listen.<br>interpret.<br>prototype.<br>care.',
    bullets: [
      'Collaborated with an elementary teacher to create a cross-divisional design experience where ES students became the clients and MS Fashion Design students became the makers.',
      'Guided middle school students through empathy, interpretation, sketching, pattern-making, material choices, fabrication, feedback, and iteration.',
      'Connected the classroom project to the larger KIS Design & Innovation Program Guide and its vertically aligned approach to Designer, Investigator, Thinker, and Contributor learning.'
    ],
    metrics: [
      ['ES → MS', 'vertical alignment'],
      ['real users', 'design empathy'],
      ['2D → 3D', 'fabric prototypes']
    ],
    tags: ['LEARNING EXPERIENCE DESIGN', 'CURRICULUM DESIGN', 'VERTICAL ALIGNMENT', 'FABRICATION', 'HUMAN-CENTERED DESIGN'],
    actions: [
      { label: 'program guide →', href: 'assets/kis-design-innovation-program-guide.pdf' }
    ],
    slides: [
      { src: 'assets/education-monster-user-research.webp', category: 'USER RESEARCH', alt: 'Elementary students sharing monster ideas with middle school design students', note: 'Elementary students became the clients: sharing ideas, details, and personality traits for their imagined monsters.' },
      { src: 'assets/education-monster-interview.webp', category: 'DESIGN COLLABORATION', alt: 'Students collaborating at a classroom table during the monster design project', note: 'Middle school students practiced listening, asking questions, and translating a younger student’s vision with care.' },
      { src: 'assets/education-monster-prototype-demo.webp', category: 'EMPATHY + FEEDBACK', alt: 'Middle school student showing a material sample to elementary students', note: 'The project created a real designer/client relationship where students had to clarify needs and respond to feedback.' },
      { src: 'assets/education-monster-es-feedback.webp', category: 'CLIENT CONVERSATION', alt: 'Elementary student giving feedback to a middle school student during the monster project', note: 'Younger students gave direction and reactions, helping MS designers make decisions for a real audience.' },
      { src: 'assets/education-monster-user-testing.webp', category: 'USER TESTING', alt: 'Elementary students reacting to a handmade monster prototype', note: 'Students observed how their users responded to the prototype, then used that feedback to improve the final object.' },
      { src: 'assets/education-monster-fabrication-lab.webp', category: 'FABRICATION STUDIO', alt: 'Middle school students working with fabric and patterns in a design classroom', note: 'The classroom became a fabrication studio where students moved from drawings and patterns into physical construction.' },
      { src: 'assets/education-monster-pattern-work.webp', category: 'PATTERN + MATERIALS', alt: 'Felt monster patterns and colorful material pieces on a classroom table', note: 'Students translated 2D sketches into pattern pieces and explored color, texture, stitching, and assembly.' },
      { src: 'assets/education-monster-material-iteration.webp', category: 'MATERIAL ITERATION', alt: 'Fabric monster pattern pieces and sewing materials on a table', note: 'Design decisions became tangible through material testing, pattern adjustments, and construction choices.' },
      { src: 'assets/education-monster-rocket-prototype.webp', category: 'PHYSICAL PROTOTYPE', alt: 'Handmade rocket-shaped fabric monster prototype with colorful felt pieces', note: 'Finished and in-progress prototypes showed how imagination could become a physical, human-centered product.' },
      { src: 'assets/education-monster-plush-prototype.webp', category: 'STUDENT-CENTERED MAKING', alt: 'Students holding a handmade plush monster design', note: 'A younger child’s idea became a real object through empathy, interpretation, craft, and care.' },
      { src: 'assets/education-program-guide-cover.webp', category: 'PROGRAM ALIGNMENT', alt: 'KIS Design and Innovation Program Guide cover page', note: 'The project sits inside a larger collaborative D&I program built around shared pathways and vertically aligned learning.' },
      { src: 'assets/education-program-guide-standards.webp', category: 'D&I FRAMEWORK', alt: 'KIS D&I Broad Learning Categories and Power Standards page preview', note: 'The guide frames student growth through Designer, Investigator, Thinker, and Contributor learning categories.' },
      { src: 'assets/education-program-guide-flow.webp', category: 'VERTICAL SYSTEM', alt: 'KIS D&I alignment flow page preview', note: 'The program guide connects BLCs, power standards, rubrics, learning experiences, and assessments across ES, MS, and HS.' }
    ]
  }
};

const projectEls = {
  tabs: document.querySelectorAll('.project-tab'),
  appTitle: document.getElementById('projectAppTitle'),
  caseFileName: document.getElementById('caseFileName'),
  number: document.getElementById('activeProjectNumber'),
  title: document.getElementById('activeProjectTitle'),
  description: document.getElementById('activeProjectDescription'),
  bullets: document.getElementById('activeProjectBullets'),
  metrics: document.getElementById('activeProjectMetrics'),
  tags: document.getElementById('activeProjectTags'),
  actions: document.querySelector('.case-actions'),
  callout: document.getElementById('projectCallout'),
  slideCategory: document.getElementById('projectSlideCategory'),
  mainImage: document.getElementById('projectMainImage'),
  visualNote: document.getElementById('projectVisualNote'),
  slideNumber: document.getElementById('projectSlideNumber'),
  slideTotal: document.getElementById('projectSlideTotal'),
  thumbRow: document.getElementById('projectThumbRow'),
  prev: document.getElementById('projectPrev'),
  next: document.getElementById('projectNext')
};

let activeProjectKey = 'river';
let activeSlideIndex = 0;

function twoDigit(number) {
  return String(number).padStart(2, '0');
}

function renderProject(key) {
  const project = projectData[key];
  if (!project || !projectEls.mainImage) return;
  activeProjectKey = key;
  activeSlideIndex = 0;

  projectEls.tabs.forEach(tab => {
    const isActive = tab.dataset.project === key;
    tab.classList.toggle('active', isActive);
    tab.setAttribute('aria-selected', String(isActive));
  });

  projectEls.appTitle.textContent = project.appTitle;
  projectEls.caseFileName.textContent = project.fileName;
  projectEls.number.textContent = project.number;
  projectEls.title.textContent = project.title;
  projectEls.description.textContent = project.description;
  projectEls.callout.innerHTML = project.callout;

  projectEls.bullets.innerHTML = project.bullets.map(item => `<li>${item}</li>`).join('');
  projectEls.metrics.innerHTML = project.metrics.map(([value, label]) => `<span><strong>${value}</strong> ${label}</span>`).join('');
  projectEls.tags.innerHTML = project.tags.map(tag => `<span>${tag}</span>`).join('');
  projectEls.actions.innerHTML = project.actions.length
    ? project.actions.map(action => `<a href="${action.href}" target="_blank" rel="noopener" class="pixel-button case-link${action.secondary ? ' secondary' : ''}">${action.label}</a>`).join('')
    : '<span class="case-coming-soon">project links coming soon</span>';

  renderSlide();
}

function renderSlide() {
  const project = projectData[activeProjectKey];
  if (!project || !project.slides.length) return;
  const slide = project.slides[activeSlideIndex];

  projectEls.slideCategory.textContent = slide.category;
  projectEls.mainImage.src = slide.src;
  projectEls.mainImage.alt = slide.alt;
  projectEls.visualNote.textContent = slide.note;
  projectEls.slideNumber.textContent = twoDigit(activeSlideIndex + 1);
  projectEls.slideTotal.textContent = twoDigit(project.slides.length);

  projectEls.thumbRow.innerHTML = project.slides.map((item, index) => `
    <button class="project-thumb${index === activeSlideIndex ? ' active' : ''}" type="button" data-slide="${index}" aria-label="Show visual ${index + 1}: ${item.category}">
      <img src="${item.src}" alt="" loading="lazy" />
    </button>
  `).join('');

  projectEls.thumbRow.querySelectorAll('.project-thumb').forEach(button => {
    button.addEventListener('click', () => {
      activeSlideIndex = Number(button.dataset.slide);
      renderSlide();
    });
  });
}

projectEls.tabs.forEach(tab => {
  tab.addEventListener('click', () => renderProject(tab.dataset.project));
});

projectEls.prev?.addEventListener('click', () => {
  const slides = projectData[activeProjectKey].slides;
  activeSlideIndex = (activeSlideIndex - 1 + slides.length) % slides.length;
  renderSlide();
});

projectEls.next?.addEventListener('click', () => {
  const slides = projectData[activeProjectKey].slides;
  activeSlideIndex = (activeSlideIndex + 1) % slides.length;
  renderSlide();
});

renderProject(activeProjectKey);
