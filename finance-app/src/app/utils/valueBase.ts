import { Input, EventEmitter, Output } from '@angular/core';

export class ValueBase<T> {
  value: T;

  @Input()
  get model() {
    return this.value
  }

  @Output()
  modelChange = new EventEmitter<T>();

  set model(value: T) {
    console.log("change", value);
    this.value = value;
    this.modelChange.emit(value);
  }

  constructor() { }

  ngOnInit() {
  }

}