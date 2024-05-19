import { Component, NgModule, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DataSelectorComponent } from './data-selector/data-selector.component';
import { DashboardDisplayComponent } from './dashboard-display/dashboard-display.component';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    DataSelectorComponent,
    DashboardDisplayComponent,
    HttpClientModule,
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'siwakorn_ass3';

  @ViewChild('dashboard') dashboard!: DashboardDisplayComponent;

  handleDogImageLoaded(url: string): void {
    this.dashboard.setDogImage(url);
  }
}
