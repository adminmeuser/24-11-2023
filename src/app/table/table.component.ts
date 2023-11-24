export interface Student {
  name: string;
  gender: string;
}


import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GenderSalutationPipe } from '../gender-salutation.pipe';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [CommonModule, GenderSalutationPipe],
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss'
})
export class TableComponent {
  students: Student[] = [
    { name: 'Bella', gender: 'Female' },
    { name: 'Edward', gender: 'Male' },
    { name: 'Alice', gender: 'Female' },
    { name: 'Jasper', gender: 'Male' },
    { name: 'Jacob', gender: 'Male' },
    { name: 'Rosalie', gender: 'Female' },
    { name: 'Emmett', gender: 'Male' },
    
  ];

}
