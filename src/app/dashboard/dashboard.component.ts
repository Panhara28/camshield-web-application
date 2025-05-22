import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Auth } from '@angular/fire/auth';
import { LayoutsComponent } from '../components/layouts/layouts.component';
import { CardsComponent } from '../components/cards/cards.component';
import { TableComponent } from '../components/table/table.component';

@Component({
  selector: 'app-dashboard',
  imports: [CommonModule, LayoutsComponent, CardsComponent, TableComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
  standalone: true,
})
export class DashboardComponent {
  private auth = inject(Auth);
  idToken: string | null = null;

  constructor() {
    this.auth.currentUser?.getIdToken().then((token) => (this.idToken = token));
  }
}
