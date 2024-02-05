import './menu.css';
import { myProfile } from '../01-data/main-data';

const mainDiv = document.querySelector('#div-app');
const divUlContainer = document.createElement('div');

export const createPrincipalMenu = () => {
  const menuHamburguer = document.createElement('img');
  const ulMenu = document.createElement('ul');

  const areas = myProfile.areas;
  for (const key of areas) {
    const liMenu = document.createElement('li');
    const linksMenu = document.createElement('a');
    linksMenu.textContent = key;
    linksMenu.href = `#${key.toLocaleLowerCase().replace(/\s+/g, '-')}`;

    liMenu.append(linksMenu);
    ulMenu.appendChild(liMenu);
    liMenu.classList.add('li-menu');
  }
  menuHamburguer.classList.add('menu-hambg');
  menuHamburguer.src = '/images/ninja-pictogram-7-svgrepo-com.svg';
  divUlContainer.classList.add('div-ul--principal-menu');
  divUlContainer.id = 'principal-menu';
  ulMenu.classList.add('ul-menu');

  divUlContainer.append(menuHamburguer, ulMenu);
};
mainDiv.appendChild(divUlContainer);
