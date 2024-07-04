import './contact.css';
import { myProfile } from '../01-data/main-data';

const mainDiv = document.querySelector('#div-app');

export function createContactSection() {
  const contactSection = document.createElement('section');
  contactSection.classList.add('contact-section');
  contactSection.id = 'contacto';

  const contactDataDiv = document.createElement('div');
  contactDataDiv.classList.add('contact-data');

  const contactTitle = document.createElement('h3');
  contactTitle.textContent = 'CONTACTO';
  contactTitle.classList.add('contact-h3');

  const contactMail = document.createElement('p');
  contactMail.textContent = myProfile.contact.mail;
  contactMail.classList.add('contact-mail', 'contact-p');

  // const contactTelf = document.createElement('p');
  // contactTelf.textContent = myProfile.contact.telf;
  // contactTelf.classList.add('contact-telf', 'contact-p');

  const linkedinLink = document.createElement('a');
  linkedinLink.href = myProfile.contact.linkedInUrl;
  linkedinLink.classList.add('linkedin-link', 'link');

  const linkedInImg = document.createElement('img');
  linkedInImg.src = './images/linkedin-sketched-logo-svgrepo-com.svg';
  linkedInImg.classList.add('linkedin-img', 'contact-image');

  const githubLink = document.createElement('a');
  githubLink.href = myProfile.contact.githubUrl;
  githubLink.classList.add('github-link', 'link');

  const githubImg = document.createElement('img');
  githubImg.src = './images/github-icon-1-logo-svgrepo-com.svg';
  githubImg.classList.add('github-img', 'contact-image');

  const signature = document.createElement('p');
  signature.textContent =
    'MartaRuiz - “Los ríos más profundos corren con menos ruido”';
  signature.classList.add('signature');

  contactDataDiv.append(contactMail, linkedinLink, githubLink);
  contactSection.append(contactTitle, contactDataDiv, signature);

  linkedinLink.append(linkedInImg);
  githubLink.append(githubImg);
  mainDiv.append(contactSection);
}
