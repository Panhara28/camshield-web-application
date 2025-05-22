import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { LayoutsComponent } from '../components/layouts/layouts.component';

@Component({
  selector: 'app-users',
  imports: [CommonModule, LayoutsComponent],
  standalone: true,
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss',
})
export class UsersComponent {}
