import './edu.css';
import { myProfile } from '../01-data/main-data';

const mainDiv = document.querySelector('#div-app');
const eduExpSkillsDiv = document.createElement('div');

// LA SECCIÓN CORRESPONDIENTE A EDUCACIÓN
export const createEduSection = () => {
  const studiesSection = document.createElement('section');
  const educationTitle = document.createElement('h3');
  const studiesDivContainer = document.createElement('div');

  studiesSection.classList.add('studies-section');
  educationTitle.classList.add('education-h3', 'title-h3');
  studiesDivContainer.classList.add('div-recent-studies');

  for (const study of myProfile.education.recentStudies) {
    const studiesList = document.createElement('p');
    const studiesDescription = document.createElement('p');
    studiesList.textContent = study.curso;
    studiesDescription.textContent = study.description;
    studiesList.classList.add('study');
    studiesDescription.classList.add('study-description');

    studiesDivContainer.append(studiesList, studiesDescription);
  }
  educationTitle.textContent = 'EDUCACIÓN';

  studiesSection.append(educationTitle, studiesDivContainer);
  eduExpSkillsDiv.append(studiesSection);
};

// LA SECCIÓN CORRESPONDIENTE A EXPERIENCIA
export function createExpSection() {
  const experience = document.createElement('section');
  const expTitle = document.createElement('h3');
  const expDivContainer = document.createElement('div');

  expTitle.innerText = 'EXPERIENCIA';

  for (const job of myProfile.experience) {
    const singleJobDiv = document.createElement('div');
    const jobExperience = document.createElement('p');
    const functionsUL = document.createElement('ul');

    jobExperience.textContent = job.position;
    jobExperience.classList.add('job-experience');
    functionsUL.classList.add('functions-ul', 'hidden');
    singleJobDiv.classList.add('each-job-container');

    for (const func of job.functions) {
      const functionsList = document.createElement('li');
      functionsList.textContent = func;
      functionsList.classList.add('every-function-li');
      functionsUL.append(functionsList);
    }

    singleJobDiv.append(jobExperience, functionsUL);
    expDivContainer.appendChild(singleJobDiv);

    jobExperience.addEventListener('click', () => {
      functionsUL.classList.toggle('hidden');
    });
  }

  experience.classList.add('exp-section');
  expTitle.classList.add('exp-h3', 'title-h3');
  expDivContainer.classList.add('div-experience');

  experience.append(expTitle, expDivContainer);
  eduExpSkillsDiv.append(experience);
}

// LA SECCIÓN CORRESPONDIENTE A HABILIDADES
export function createSkillsSection() {
  const skillsSection = document.createElement('section');
  const spanTitle = document.createElement('span');
  const skillsTitleH3 = document.createElement('h3');
  const skillsDivContainer = document.createElement('div');

  spanTitle.textContent = 'Pero las funciones no dicen nada sin las...';
  skillsTitleH3.textContent = ' HABILIDADES';

  for (const skill of myProfile.skills) {
    const singleSkillDiv = document.createElement('div');
    const skillName = document.createElement('p');
    const skillDescription = document.createElement('p');

    skillName.textContent = skill.skill;
    skillDescription.textContent = skill.description;

    singleSkillDiv.classList.add('single-skill-div');
    skillName.classList.add('skill-name');
    skillDescription.classList.add('skill-description');

    singleSkillDiv.append(skillName, skillDescription);
    skillsDivContainer.append(singleSkillDiv);
  }

  skillsDivContainer.classList.add('skills-container');
  spanTitle.classList.add('span-title');
  skillsTitleH3.classList.add('skills-h3', 'title-h3');
  skillsSection.classList.add('skills-section');

  skillsSection.append(spanTitle, skillsTitleH3, skillsDivContainer);
  eduExpSkillsDiv.append(skillsSection);
}

eduExpSkillsDiv.classList.add('edu-exp-skills-section');
eduExpSkillsDiv.id = 'educación-y-experiencia';
mainDiv.append(eduExpSkillsDiv);
