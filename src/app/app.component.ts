import { Component } from '@angular/core';
import { CommonModule, Time } from '@angular/common';
import { Router, RouterOutlet } from '@angular/router';
import { StyleDirective } from './style.directive';
import { TableComponent } from './table/table.component';
import { GenderSalutationPipe } from './gender-salutation.pipe';
import { HomeComponent } from './home/home.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, StyleDirective, TableComponent, GenderSalutationPipe, HomeComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'fe--demo--app';

  

}
