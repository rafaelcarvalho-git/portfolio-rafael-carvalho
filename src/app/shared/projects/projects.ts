import { Component } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

interface Project {
  name: string;
  desc: string;
  stack: string[];
  repo: string;
  link: string;
  icon: string;
}

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [],
  templateUrl: './projects.html',
  styleUrl: './projects.scss',
})
export class Projects {
  constructor(private sanitizer: DomSanitizer) {}

  getIconSvg(iconSvg: string): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(iconSvg);
  }

  projects: Project[] = [
    {
      name: 'Advocacy System',
      desc: 'System to manage law firm, staff, and legal cases. Includes features that help reduce manual work for employees.',
      stack: ['React', 'Styled Components', 'Node.js', 'Express'],
      repo: 'https://github.com/rafaelcarvalho-git/advocacy-system-front-end',
      link: 'https://advocacy-system-front-end.vercel.app/',
      icon: `
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-scale-icon lucide-scale">
          <path d="M12 3v18"/><path d="m19 8 3 8a5 5 0 0 1-6 0zV7"/><path d="M3 7h1a17 17 0 0 0 8-2 17 17 0 0 0 8 2h1"/><path d="m5 8 3 8a5 5 0 0 1-6 0zV7"/><path d="M7 21h10"/>
        </svg>
      `,
    },
    {
      name: 'SisCert E2S',
      desc: 'Operational portal for lifecycle control and expiration tracking of digital certificates.',
      stack: ['HTML', 'SCSS', 'JavaScript', 'PHP', 'MySQL'],
      repo: 'https://github.com/rafaelcarvalho-git/siscert-e2s',
      link: 'https://siscert-e2s.vercel.app/',
      icon: `
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-users-icon lucide-users">
          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><path d="M16 3.128a4 4 0 0 1 0 7.744"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><circle cx="9" cy="7" r="4"/>
        </svg>
      `,
    },
    {
      name: 'React Rick and Morty',
      desc: "Web application focused on cataloging and searching for information about the show's universe using The Rick and Morty REST API.",
      stack: ['React', 'JavaScript', 'Bootstrap'],
      repo: 'https://github.com/rafaelcarvalho-git/react-rick-and-morty',
      link: 'https://reactrickandmortyproject.vercel.app/',
      icon: `
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-atom-icon lucide-atom">
          <circle cx="12" cy="12" r="1"/><path d="M20.2 20.2c2.04-2.03.02-7.36-4.5-11.9-4.54-4.52-9.87-6.54-11.9-4.5-2.04 2.03-.02 7.36 4.5 11.9 4.54 4.52 9.87 6.54 11.9 4.5Z"/><path d="M15.7 15.7c4.52-4.54 6.54-9.87 4.5-11.9-2.03-2.04-7.36-.02-11.9 4.5-4.52 4.54-6.54 9.87-4.5 11.9 2.03 2.04 7.36.02 11.9-4.5Z"/>
        </svg>
      `,
    },
    {
      name: 'E2S Portfolio',
      desc: 'Institutional and portfolio website to display products, services, and customer service channels for an insurance broker and digital certifier.',
      stack: ['HTML', 'CSS', 'JavaScript', 'Bootstrap'],
      repo: 'https://github.com/rafaelcarvalho-git/e2sweb',
      link: 'https://e2s-corretoradeseguros.web.app/',
      icon: `
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-panel-top-icon lucide-panel-top">
          <rect width="18" height="18" x="3" y="3" rx="2"/><path d="M3 9h18"/>
        </svg>
      `,
    },
    {
      name: 'RapDrink Mobile',
      desc: 'A mobile app that connects consumers to premium drink vendors. It allows users to locate partners in real time, check distances, and map routes instantly.',
      stack: ['React Native', 'Expo', 'Styled Components', 'React Native Maps'],
      repo: 'https://github.com/rafaelcarvalho-git/rapdrink-mobile',
      link: 'https://github.com/rafaelcarvalho-git/rapdrink-mobile/blob/main/README.md',
      icon: `
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-smartphone-icon lucide-smartphone">
          <rect width="14" height="20" x="5" y="2" rx="2" ry="2"/><path d="M12 18h.01"/>
        </svg>
      `,
    },
    {
      name: 'Portfolio Academia Angular',
      desc: 'Portfolio website to display modalities, plans, and information for a gym.',
      stack: ['Angular', 'Typescript', 'Bootstrap', 'SCSS'],
      repo: 'https://github.com/rafaelcarvalho-git/portfolio-academia-angular',
      link: 'https://portfolio-academia-angular.vercel.app/',
      icon: `
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-dumbbell-icon lucide-dumbbell">
          <path d="M17.596 12.768a2 2 0 1 0 2.829-2.829l-1.768-1.767a2 2 0 0 0 2.828-2.829l-2.828-2.828a2 2 0 0 0-2.829 2.828l-1.767-1.768a2 2 0 1 0-2.829 2.829z"/><path d="m2.5 21.5 1.4-1.4"/><path d="m20.1 3.9 1.4-1.4"/><path d="M5.343 21.485a2 2 0 1 0 2.829-2.828l1.767 1.768a2 2 0 1 0 2.829-2.829l-6.364-6.364a2 2 0 1 0-2.829 2.829l1.768 1.767a2 2 0 0 0-2.828 2.829z"/><path d="m9.6 14.4 4.8-4.8"/>
        </svg>
      `,
    },
  ];
}
