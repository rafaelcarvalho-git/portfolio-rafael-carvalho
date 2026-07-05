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
      role: 'Fullstack Developer',
      company: 'Cast Group · Banco do Brasil',
      period: 'Sep 2023 — Present',
      bullets: [
        "Strategic role in the Architectural Integration Team — developing, maintaining and evaluating the bank's internal portals and systems.",
        'Robust frontend integration with complex APIs, orchestrating operations across cross-functional teams.',
        'Built UIs matching Figma specs using advanced preprocessors (SCSS/SASS) and institutional component libraries.',
        'Hands-on deployments across dev, staging and production environments.',
        'Continuous code review ensuring scalability, maintainability and compliance with institutional standards.',
        'Use of GitHub Copilot for workflow optimization and accelerated technical delivery.',
        'Active participation in agile rituals (Scrum) and story/activity management via Kanban boards with BMAP.',
      ],
    },
    {
      role: 'Front-end React / Node.js Developer',
      company: 'Martins Advogados Associados',
      period: 'Nov 2022 — Mai 2023',
      bullets: [
        'System Architecture & Design: End-to-end development of a comprehensive legal process control and client management system, responsible for elaborating the UI/UX design and ensuring seamless integration with the back-end services.',
        'Fullstack Engineering & Operations: Active participation in back-end development and logic implementation, delivering automated features for law firm management, including process tracking, collaborator management, and document generation, significantly reducing manual administrative workloads.',
      ],
    },
    {
      role: 'Computer Support Analyst & Web Developer',
      company: 'E2S Corretora de Seguros',
      period: 'Sep 2020 — Aug 2022',
      bullets: [
        'IT support, customer service and digital certificate issuance (AGR — Registration Agent).',
        "Employee training, document analysis and development of the company's portfolio website and internal system.",
        "Development of the company's institutional portfolio website and a custom internal system to streamline administrative workflows.",
      ],
    },
    {
      role: 'Fullstack Developer & IT Consultant',
      company: 'Freelancer',
      period: 'Ongoing',
      bullets: [
        'Architecture and development of scalable web systems, leveraging AI-powered prototyping and design tools to accelerate visual concepting and delivery.',
        'Assembly and maintenance of computers, notebooks and networks for outsourcing clients.',
        'Comprehensive IT consulting, encompassing infrastructure planning, technical advisory, and the assembly and maintenance of hardware and network environments for corporate clients.',
      ],
    },
  ];
}
