import { IfStmt } from '@angular/compiler';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
@Component({
  selector: 'app-search-par',
  standalone: true,
  imports: [InputTextModule, FormsModule],
  templateUrl: './search-par.component.html',
  styleUrl: './search-par.component.css',
})
export class SearchParComponent {
  value: String = '';
  isTrue: boolean = true;
  @Output() dataFromSearch = new EventEmitter();

  // ngOnInit() {
  //   this.value = this.value;
  // }

  addFromSearch(value: any) {
    this.dataFromSearch.emit(this.value);
    console.log(this.value);
    this.isTrue = false;
  }
  chageBtn() {
    this.value = ' ';
    this.dataFromSearch.emit(this.value);
    this.isTrue = true;
  }
}
