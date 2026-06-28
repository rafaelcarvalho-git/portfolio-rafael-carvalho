import { Component } from '@angular/core';
import { Header } from '../../shared/components/header/header';
import { About } from '../../shared/about/about';
import { ProfessionalExperience } from '../../shared/professional-experience/professional-experience';
import { Skills } from '../../shared/skills/skills';
import { Footer } from '../../shared/components/footer/footer';
import { Nav } from '../../shared/components/nav/nav';

@Component({
  selector: 'app-home',
  imports: [Header, About, ProfessionalExperience, Skills, Footer, Nav],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {}
