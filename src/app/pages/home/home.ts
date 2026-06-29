import { Component } from '@angular/core';
import { Nav } from '../../shared/components/nav/nav';
import { Header } from '../../shared/components/header/header';
import { About } from '../../shared/about/about';
import { ProfessionalExperience } from '../../shared/professional-experience/professional-experience';
import { Skills } from '../../shared/skills/skills';
import { Projects } from '../../shared/projects/projects';
import { Contact } from '../../shared/components/contact/contact';
import { Footer } from '../../shared/components/footer/footer';

@Component({
  selector: 'app-home',
  imports: [Nav, Header, About, ProfessionalExperience, Skills, Projects, Contact, Footer],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {}
