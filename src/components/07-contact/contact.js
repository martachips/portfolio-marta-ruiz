import './contact.css';
import { myProfile } from '../01-data/main-data';

const mainDiv = document.querySelector('#div-app');

export function createContactSection() {
  const contactSection = document.createElement('section');
  const contactDataDiv = document.createElement('div');
  const contactTitle = document.createElement('h3');
  const contactMail = document.createElement('p');
  const contactTelf = document.createElement('p');
  const linkedinLink = document.createElement('a');
  const linkedInImg = document.createElement('img');
  const githubLink = document.createElement('a');
  const githubImg = document.createElement('img');
  const signature = document.createElement('p');

  contactTitle.textContent = 'CONTACTO';
  contactMail.textContent = myProfile.contact.mail;
  contactTelf.textContent = myProfile.contact.telf;
  linkedinLink.href = myProfile.contact.linkedInUrl;
  linkedInImg.src = './images/linkedin-sketched-logo-svgrepo-com.svg';
  githubLink.href = myProfile.contact.githubUrl;
  githubImg.src = './images/github-icon-1-logo-svgrepo-com.svg';
  signature.textContent =
    'MartaRuiz - “Los ríos más profundos corren con menos ruido”';

  contactSection.classList.add('contact-section');
  contactSection.id = 'contacto';
  contactDataDiv.classList.add('contact-data');
  contactTitle.classList.add('contact-h3');
  contactMail.classList.add('contact-mail', 'contact-p');
  contactTelf.classList.add('contact-telf', 'contact-p');
  linkedinLink.classList.add('linkedin-link', 'link');
  linkedInImg.classList.add('linkedin-img', 'contact-image');
  githubLink.classList.add('github-link', 'link');
  githubImg.classList.add('github-img', 'contact-image');
  signature.classList.add('signature');

  contactDataDiv.append(contactMail, contactTelf, linkedinLink, githubLink);
  contactSection.append(contactTitle, contactDataDiv, signature);

  linkedinLink.append(linkedInImg);
  githubLink.append(githubImg);
  mainDiv.append(contactSection);
}
