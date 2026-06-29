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
      category: 'Backend',
      items: ['Node.js', 'Express', 'Python', 'PHP', 'Strapi', 'MySQL', 'SQLite'],
    },
    {
      category: 'DevOps & Tools',
      items: [
        'Git',
        'GitLab',
        'CI/CD',
        'Jenkins',
        'SonarQube',
        'GitHub Copilot',
        'ArgoCD',
        'Figma',
      ],
    },
    {
      category: 'Process & Quality',
      items: [
        'Code Review',
        'Clean Code',
        'Scalability',
        'Edge Case Analysis',
        'Scrum',
        'Kanban (BMAP)',
      ],
    },
  ];
}
