import { Component } from '@angular/core';

interface SkillGroup {
  category: string;
  items: string[];
}

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [],
  templateUrl: './skills.html',
  styleUrl: './skills.scss',
})
export class Skills {
  skills: SkillGroup[] = [
    {
      category: 'Frontend',
      items: [
        'Angular',
        'React.js',
        'RxJS',
        'TypeScript',
        'JavaScript',
        'SCSS / SASS',
        'Styled Components',
        'Material UI',
        'Bootstrap',
        'HTML5',
        'CSS3',
        'Docusaurus',
      ],
    },
    {
      category: 'Back-end & Database',
      items: ['Node.js', 'Express', 'PHP', 'Strapi', 'MySQL', 'SQLite'],
    },
    {
      category: 'DevOps, AI & Tools',
      items: [
        'Git',
        'GitLab',
        'CI/CD',
        'Jenkins',
        'SonarQube',
        'Checkmarx',
        'Jest',
        'GitHub Copilot',
        'ArgoCD',
        'Figma',
      ],
    },
    {
      category: 'Process & Quality',
      items: ['Code Review', 'Clean Code', 'Scalability', 'Scrum', 'Kanban (BMAP)'],
    },
  ];
}
