import { Component } from '@angular/core';

interface Project {
  name: string;
  desc: string;
  stack: string[];
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
      name: 'Process Management System',
      desc: 'Fullstack architecture with state management and API integration for legal process control.',
      stack: ['React', 'Styled Components', 'Node.js', 'Express'],
    },
    {
      name: 'SisCert E2S',
      desc: 'Operational portal for lifecycle control and expiration tracking of digital certificates.',
      stack: ['HTML', 'SCSS', 'JavaScript', 'PHP', 'MySQL'],
    },
    {
      name: 'React Rick and Morty',
      desc: 'Character explorer consuming the official series API with clean componentization.',
      stack: ['React', 'JavaScript', 'Bootstrap'],
    },
    {
      name: 'Marvel Comics',
      desc: 'Comic book showcase consuming the Marvel API — focused on reusable components.',
      stack: ['React', 'Styled Components', 'Ant Design'],
    },
    {
      name: 'E2S Portfolio',
      desc: 'Digital catalog displaying corporate products and services.',
      stack: ['HTML', 'CSS', 'JavaScript', 'Bootstrap'],
    },
    {
      name: 'Personal Portfolio',
      desc: 'Showcase site for professional projects, experiences and skills.',
      stack: ['React', 'Styled Components', 'Bootstrap'],
    },
  ];
}
