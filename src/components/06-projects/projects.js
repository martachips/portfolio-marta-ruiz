import './projects.css';
import { myProfile } from '../01-data/main-data';

export function createProjectsSection() {
  const mainDiv = document.querySelector('#div-app');
  const projectsSection = document.createElement('section');
  const titleProjectsSection = document.createElement('h3');

  titleProjectsSection.textContent = 'PROYECTOS EN ROCK THE CODE';
  titleProjectsSection.classList.add('projects-h3', 'title-h3');
  projectsSection.classList.add('projects-section');
  projectsSection.id = 'proyectos';

  projectsSection.append(titleProjectsSection);

  for (const project of myProfile.projects) {
    const singleProjectArticle = document.createElement('article');
    const divTitleDescriptionLink = document.createElement('div');
    const projectTitle = document.createElement('h2');
    const linkToNetlify = document.createElement('a');
    const previewImg = document.createElement('img');
    const divImagePreview = document.createElement('div');
    const projectDescription = document.createElement('p');
    const projectLink = document.createElement('a');
    const projectLinkParagraph = document.createElement('p');
    projectTitle.textContent = project.title;
    linkToNetlify.href = project.netlify;
    previewImg.src = project.preview;
    projectDescription.textContent = project.description;
    projectLink.href = project.link;
    projectLinkParagraph.textContent = '(Enlace a Github)';

    singleProjectArticle.classList.add('project-article');
    divTitleDescriptionLink.classList.add('div-h2-descrip-link-project');
    divImagePreview.classList.add('div-img-project');

    projectTitle.classList.add('h2-project');
    previewImg.classList.add('project-preview');
    projectDescription.classList.add('project-description');
    projectLink.classList.add('project-link');

    divTitleDescriptionLink.append(
      projectTitle,
      projectDescription,
      projectLink
    );
    linkToNetlify.append(previewImg);
    divImagePreview.append(linkToNetlify);
    projectLink.append(projectLinkParagraph);
    singleProjectArticle.append(divTitleDescriptionLink, divImagePreview);
    projectsSection.append(singleProjectArticle);
  }

  mainDiv.append(projectsSection);

  return { section: createProjectsSection, title: 'Proyectos' };
}
