import './style.css';
import { myProfile } from './src/components/01-data/main-data';
import { createHeader } from './src/components/02-header/header';
import { createPrincipalMenu } from './src/components/03-menu/menu';
import { createAboutSection } from './src/components/04-about-me/about';
import { createEduSection } from './src/components/05-education/edu';
import { createExpSection } from './src/components/05-education/edu';
import { createSkillsSection } from './src/components/05-education/edu';
import { createProjectsSection } from './src/components/06-projects/projects';
import { createContactSection } from './src/components/07-contact/contact';

createHeader();
createPrincipalMenu();
createAboutSection();
createEduSection();
createExpSection();
createSkillsSection();
createProjectsSection();
createContactSection();
