import { Component } from '@angular/core';

interface Experience {
  role: string;
  company: string;
  period: string;
  bullets: string[];
}

@Component({
  selector: 'app-professional-experience',
  standalone: true,
  imports: [],
  templateUrl: './professional-experience.html',
  styleUrl: './professional-experience.scss',
})
export class ProfessionalExperience {
  experiences: Experience[] = [
    {
      role: 'Fullstack Developer / Architectural Integration',
      company: 'Cast Group · Banco do Brasil',
      period: 'Jun 2022 — Present',
      bullets: [
        "Strategic role in the Architectural Integration team — developing, maintaining and evaluating the bank's internal portals and systems.",
        'Robust frontend integration with complex APIs, orchestrating operations across cross-functional teams.',
        'Built UIs matching Figma specs using advanced preprocessors (SCSS/SASS) and institutional component libraries.',
        'Hands-on deployments across dev, staging and production environments.',
        'Continuous code review ensuring scalability, maintainability and compliance with institutional standards.',
        'Use of GitHub Copilot for workflow optimization and accelerated technical delivery.',
      ],
    },
    {
      role: 'React / Node.js Developer',
      company: 'Martins Advogados Associados',
      period: 'Sep 2020 — Aug 2022',
      bullets: [
        'End-to-end development of a legal process control and client management system.',
        'Automated generation of contracts and meeting minutes.',
      ],
    },
    {
      role: 'Fullstack Developer & IT Consultant',
      company: 'Freelancer',
      period: 'Ongoing',
      bullets: [
        'Architecture and development of scalable web systems and institutional websites.',
        'Assembly and maintenance of computers, notebooks and networks for outsourcing clients.',
      ],
    },
    {
      role: 'Computer Support Analyst',
      company: 'E2S Corretora de Seguros',
      period: 'Earlier',
      bullets: [
        'IT support, customer service and digital certificate issuance (AGR — Registration Agent).',
        "Employee training, document analysis and development of the company's portfolio website and internal system.",
      ],
    },
  ];
}
