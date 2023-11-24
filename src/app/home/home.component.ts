import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StyleDirective } from '../style.directive';
import { TableComponent } from '../table/table.component';
import { GenderSalutationPipe } from '../gender-salutation.pipe';
import { Router } from 'express';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule,StyleDirective, TableComponent, GenderSalutationPipe],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  currentDate: Date = new Date();
  originalText: string = 'good morning';
  originalNumber: number = 12345.6789;
  currentTime: Date = new Date();


}