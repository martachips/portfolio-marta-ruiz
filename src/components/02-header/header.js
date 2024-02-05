import './header.css';

export const createHeader = () => {
  const body = document.querySelector('body');
  const header = document.createElement('header');
  const titleDiv = document.createElement('div');
  const titleName = document.createElement('h1');
  const titleSurname = document.createElement('span');
  const titleJob = document.createElement('h3');
  const imageProfile = document.createElement('img');

  header.classList.add('header');
  header.id = 'header';
  titleDiv.classList.add('title-div');
  titleName.classList.add('title-h1-name');
  titleSurname.classList.add('title-surname');
  titleJob.classList.add('title-job');
  imageProfile.classList.add('my-photo');

  titleName.textContent = 'Marta';
  titleSurname.textContent = 'Ruiz';
  titleJob.textContent = 'Web Developer';
  imageProfile.src = '/images/Marta.jpg';

  titleName.appendChild(titleSurname);
  titleDiv.appendChild(titleName);
  titleDiv.appendChild(titleJob);
  header.appendChild(titleDiv);
  header.appendChild(imageProfile);
  body.prepend(header);
};
