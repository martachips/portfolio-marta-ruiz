import './about.css';
import { myProfile } from '../01-data/main-data';

const mainDiv = document.querySelector('#div-app');
const aboutSection = document.createElement('div');

export const createAboutSection = () => {
  const largerTextSection = document.createElement('section');
  const aboutMetitle = document.createElement('h3');
  const textArticle = document.createElement('article');
  const textParagraph = document.createElement('p');
  const toggleSectionImg = document.createElement('img');

  const myValuesSection = document.createElement('section');
  const myValuesTitle = document.createElement('h3');
  const myValuesUlList = document.createElement('ul');

  aboutMetitle.textContent = 'SOBRE MÍ';
  myValuesTitle.textContent = 'MIS VALORES';
  toggleSectionImg.src = './images/cherry-blossom-svgrepo-com.svg';
  textParagraph.textContent = myProfile.aboutMe.largerText[0];

  const personalValues = myProfile.aboutMe.personalValues;
  for (const value of personalValues) {
    const valuesLiList = document.createElement('li');
    const valueName = document.createElement('p');
    const valueDescription = document.createElement('p');
    valuesLiList.classList.add('li-list-values');
    valueName.textContent = value.value;
    valueName.classList.add('value-p');
    valueDescription.textContent = value.description;
    valueDescription.classList.add('value-description');

    valuesLiList.append(valueName);
    valuesLiList.append(valueDescription);
    myValuesUlList.append(valuesLiList);
  }

  aboutSection.classList.add('about-section');
  aboutSection.id = 'sobre-mí';
  aboutMetitle.classList.add('about-h3');
  largerTextSection.classList.add('about-me-text-section');
  toggleSectionImg.classList.add('toggle-img');

  myValuesSection.classList.add('about-me-values-section', 'hidden');
  textArticle.classList.add('about-me-text-article');
  myValuesTitle.classList.add('values-h3');
  myValuesUlList.classList.add('ul-values-list');
  textParagraph.classList.add('about-me-text');

  textArticle.append(textParagraph);
  largerTextSection.append(aboutMetitle);
  largerTextSection.append(textArticle);
  mainDiv.append(largerTextSection);
  myValuesSection.append(myValuesTitle, myValuesUlList);
  aboutSection.append(toggleSectionImg, largerTextSection, myValuesSection);

  toggleSectionImg.addEventListener('click', () => {
    myValuesSection.classList.toggle('hidden');

    myValuesSection.style.opacity = myValuesSection.classList.contains('hidden')
      ? 0
      : 1;
  });
};
mainDiv.append(aboutSection);
