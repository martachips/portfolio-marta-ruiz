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
    singleProjectArticle.classList.add('project-article');

    const divTitleDescriptionLink = document.createElement('div');
    divTitleDescriptionLink.classList.add('div-h2-descrip-link-project');

    const projectTitle = document.createElement('h2');
    projectTitle.classList.add('h2-project');
    projectTitle.textContent = project.title;

    const linkToNetlify = document.createElement('a');
    linkToNetlify.href = project.netlify;
    linkToNetlify.target = '_blank';

    const previewImg = document.createElement('img');
    previewImg.classList.add('project-preview');
    previewImg.src = project.preview;

    const divImagePreview = document.createElement('div');
    divImagePreview.classList.add('div-img-project');

    const projectDescription = document.createElement('p');
    projectDescription.classList.add('project-description');
    projectDescription.textContent = project.description;

    const projectLink = document.createElement('a');
    projectLink.classList.add('project-link');
    projectLink.href = project.link;

    const projectLinkParagraph = document.createElement('p');
    projectLinkParagraph.textContent = '(Enlace a Github)';

    divTitleDescriptionLink.append(
      projectTitle,
      projectDescription,
      projectLink
    );

    if (project.link2) {
      const projectLink2 = document.createElement('a');
      projectLink2.classList.add('project-link');
      projectLink2.href = project.link2;

      const projectLink2Paragraph = document.createElement('p');
      projectLink2Paragraph.textContent = '(Enlace al Back)';

      projectLink2.append(projectLink2Paragraph);
      divTitleDescriptionLink.appendChild(projectLink2);
    }

    linkToNetlify.append(previewImg);
    divImagePreview.append(linkToNetlify);
    projectLink.append(projectLinkParagraph);
    singleProjectArticle.append(divTitleDescriptionLink, divImagePreview);
    projectsSection.append(singleProjectArticle);
  }

  mainDiv.append(projectsSection);

  return { section: createProjectsSection, title: 'Proyectos' };
}
