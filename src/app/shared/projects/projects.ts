import { Component } from '@angular/core';

interface Project {
  name: string;
  desc: string;
  stack: string[];
  repo: string;
  link: string;
}

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [],
  templateUrl: './projects.html',
  styleUrl: './projects.scss',
})
export class Projects {
  projects: Project[] = [
    {
      name: 'Advocacy System',
      desc: 'Fullstack architecture with state management and API integration for legal process control.',
      stack: ['React', 'Styled Components', 'Node.js', 'Express'],
      repo: 'https://github.com/rafaelcarvalho-git/advocacy-system-front-end',
      link: 'https://advocacy-system-front-end.vercel.app/',
    },
    {
      name: 'SisCert E2S',
      desc: 'Operational portal for lifecycle control and expiration tracking of digital certificates.',
      stack: ['HTML', 'SCSS', 'JavaScript', 'PHP', 'MySQL'],
      repo: 'https://github.com/rafaelcarvalho-git/siscert-e2s',
      link: 'https://siscert-e2s.vercel.app/',
    },
    {
      name: 'React Rick and Morty',
      desc: 'Character explorer consuming the official series API with clean componentization.',
      stack: ['React', 'JavaScript', 'Bootstrap'],
      repo: 'https://github.com/rafaelcarvalho-git/react-rick-and-morty',
      link: 'https://reactrickandmortyproject.vercel.app/',
    },
    {
      name: 'E2S Portfolio',
      desc: 'Digital catalog displaying corporate products and services.',
      stack: ['HTML', 'CSS', 'JavaScript', 'Bootstrap'],
      repo: 'https://github.com/rafaelcarvalho-git/e2sweb',
      link: 'https://e2s-corretoradeseguros.web.app/',
    },
    {
      name: 'RapDrink Mobile',
      desc: 'Showcase site for professional projects, experiences and skills.',
      stack: ['React Native', 'Expo', 'Styled Components', 'React Native Maps'],
      repo: 'https://github.com/rafaelcarvalho-git/rapdrink-mobile',
      link: '',
    },
    {
      name: 'Portfolio Academia Angular',
      desc: 'Showcase site for professional projects, experiences and skills.',
      stack: ['Angular', 'Typescript', 'Bootstrap', 'SCSS'],
      repo: 'https://github.com/rafaelcarvalho-git/portfolio-academia-angular',
      link: 'https://portfolio-academia-angular.vercel.app/',
    },
  ];
}
