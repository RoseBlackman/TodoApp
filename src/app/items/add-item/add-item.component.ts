import { Component, OnInit, Output } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})
export class AddItemComponent implements OnInit {

  constructor() {
    console.log('I am from AddItemComponent constructor()!')
  }

  itemForm = new FormGroup({
    name: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
  });

  showError = false;

  itemList: string[] = ['sample project', 'todo list'];
  @Output() itemOut = new EventEmitter();

  onSubmit() {
    console.warn(this.itemForm.value);
    if (this.itemForm.valid) {
      this.showError = false;
      this.itemOut.emit(this.itemForm.value);
      this.itemForm.reset();
    } else {
      this.showError = true;
    }
  }

  ngOnInit(): void {
  }

}
