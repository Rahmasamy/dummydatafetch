import { Component, Input } from '@angular/core';
import { NgModule } from '@angular/core';
import { faStar } from '@fortawesome/free-solid-svg-icons';
// import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
// CommonModule ,FontAwesomeModule
import { CommonModule, NgStyle } from '@angular/common';

@Component({
  selector: 'app-card-user',
  standalone: true,
  imports: [NgStyle, CommonModule],
  templateUrl: './card-user.component.html',
  styleUrl: './card-user.component.css',
})
export class CardUserComponent {
  @Input() user!: any;
  faStar = faStar;
  // NgModule = NgModule;
}
