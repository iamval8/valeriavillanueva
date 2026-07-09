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

const featuredProjects = {
  wellnest: {
    appTitle: '✶ WELLNEST_HEALTH.APP',
    caseFile: 'CASE_01.FOL',
    number: '01',
    title: 'WellNest Health',
    mockTitle: 'WellNest Health',
    phoneLabel: 'MOCK',
    callout: 'real people.<br>real problems.<br>real solutions.',
    description: 'A human-centered health platform. Real people, real problems, real solutions—designed with empathy, built with purpose.',
    tags: ['UX/UI DESIGN', 'RESEARCH', 'PROTOTYPE'],
    theme: 'wellnest'
  },
  video: {
    appTitle: '✶ VIDEO_STORY.EXE',
    caseFile: 'CASE_02.FOL',
    number: '02',
    title: 'Video + Motion Storytelling',
    mockTitle: 'Story that moves',
    phoneLabel: 'REEL',
    callout: 'clear message.<br>strong visuals.<br>human feeling.',
    description: 'A motion-first storytelling system for turning complex ideas into short-form content that feels clear, memorable, and human.',
    tags: ['VIDEO', 'MOTION', 'CONTENT'],
    theme: 'video'
  },
  education: {
    appTitle: '✶ LEARNING_SYSTEM.OS',
    caseFile: 'CASE_03.FOL',
    number: '03',
    title: 'Education Experience System',
    mockTitle: 'Learning that clicks',
    phoneLabel: 'PLAN',
    callout: 'curious minds.<br>clear systems.<br>better learning.',
    description: 'A learner-centered experience that uses design, curriculum, and technology to make challenging concepts easier to understand and apply.',
    tags: ['EDTECH', 'SYSTEMS', 'ROBOTICS'],
    theme: 'education'
  }
};

const projectTabs = document.querySelectorAll('.project-tab');
const projectPreviewWindow = document.querySelector('.project-preview-window');
const projectCaseWindow = document.querySelector('.project-case-window');
const projectAppTitle = document.querySelector('#projectAppTitle');
const caseFileName = document.querySelector('#caseFileName');
const activeProjectNumber = document.querySelector('#activeProjectNumber');
const activeProjectTitle = document.querySelector('#activeProjectTitle');
const projectMockTitle = document.querySelector('#projectMockTitle');
const projectPhoneLabel = document.querySelector('#projectPhoneLabel');
const projectCallout = document.querySelector('#projectCallout');
const activeProjectDescription = document.querySelector('#activeProjectDescription');
const activeProjectTags = document.querySelector('#activeProjectTags');
const projectMockHero = document.querySelector('#projectMockHero');

function setFeaturedProject(key) {
  const project = featuredProjects[key];
  if (!project) return;

  projectTabs.forEach(tab => {
    const isActive = tab.dataset.project === key;
    tab.classList.toggle('active', isActive);
    tab.setAttribute('aria-selected', String(isActive));
  });

  projectPreviewWindow?.classList.add('switching');
  projectCaseWindow?.classList.add('switching');

  if (projectAppTitle) projectAppTitle.textContent = project.appTitle;
  if (caseFileName) caseFileName.textContent = project.caseFile;
  if (activeProjectNumber) activeProjectNumber.textContent = project.number;
  if (activeProjectTitle) activeProjectTitle.textContent = project.title;
  if (projectMockTitle) projectMockTitle.textContent = project.mockTitle;
  if (projectPhoneLabel) projectPhoneLabel.textContent = project.phoneLabel;
  if (projectCallout) projectCallout.innerHTML = project.callout;
  if (activeProjectDescription) activeProjectDescription.textContent = project.description;
  if (activeProjectTags) {
    activeProjectTags.innerHTML = project.tags.map(tag => `<span>${tag}</span>`).join('');
  }
  if (projectMockHero) {
    projectMockHero.dataset.theme = project.theme;
  }

  window.setTimeout(() => {
    projectPreviewWindow?.classList.remove('switching');
    projectCaseWindow?.classList.remove('switching');
  }, 230);
}

projectTabs.forEach(tab => {
  tab.addEventListener('click', () => setFeaturedProject(tab.dataset.project));
});

setFeaturedProject('wellnest');
