import { Component, ElementRef, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { IUser } from '../../interfaces/user/IUser';
import { IBrazilianStates } from '../../interfaces/IBrazilianStates';
import { IGenre } from '../../interfaces/IGenre';
import { getPasswordStrengthValue } from '../../utils/get-password-strength-value';
import { convertPTDateToDateObj } from '../../utils/convert-pt-date-to-date-obj';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';
import { convertDateObjToPTDate } from '../../utils/convert-date-obj-to-pt-date';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-user-form',
  standalone: false,
  templateUrl: './user-form.component.html',
  styleUrl: './user-form.component.scss'
})
export class UserFormComponent implements OnInit, OnChanges {

  dateValue: Date | null = null;
  passwordStrengthValue = 0;
  minDate: Date | null = null;
  maxDate: Date | null = null;
  displayedColumns: string[] = ['title', 'band', 'genre', 'favorite'];
  filteredGenresList!: IGenre[];
  hasFavorite = false;

  @Input() userSelected: IUser = {} as IUser;
  @Input() statesList: IBrazilianStates[] = [];
  @Input() genresList: IGenre[] = [];
  @Output() onFormDubmitEmitted = new EventEmitter<void>();

  constructor(
    private readonly _elementRef: ElementRef
  ) { }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['userSelected'] && changes['userSelected'].currentValue) {
      this.passwordStrengthValue = getPasswordStrengthValue(this.userSelected.password);
      this.setBirthDateToDatePicker(this.userSelected.birthDate);
      this.filteredGenresList = this.genresList;
    }
  }
  
  ngOnInit() {
    this.setMinAndMaxDate();
  }
  
  onPasswordChange(password: string) {
    this.passwordStrengthValue = getPasswordStrengthValue(password);
  }
  
  private setMinAndMaxDate() {
    this.maxDate = new Date();
    this.minDate = new Date(new Date().setFullYear(this.maxDate.getFullYear() - 100));
  }
  
  private setBirthDateToDatePicker(birthDate: string) {
    this.dateValue = convertPTDateToDateObj(birthDate);
  }

  onDateChange($event: MatDatepickerInputEvent<any, any>) {
    if (!$event.value) {
      return;
    }

    this.userSelected.birthDate = convertDateObjToPTDate($event.value);
  }

  displayFn(genreId: number){
    const genreFound = this.genresList.find(genre => genre.id === genreId);

    return genreFound ? genreFound.description : '';
  }

  filterGenres(text: string) {
    if (typeof text === "number")return;
    
    const searchTerm = text.toLowerCase();

    this.filteredGenresList = this.genresList.filter(genre => genre.description.toLowerCase().includes(searchTerm));
  }

  isAnyCheckboxChecked(): boolean {
    return this.userSelected.musics.some(music => music.isFavorite);
  }

  onSubmit(form: NgForm) {
    if(form.invalid) {
      this.focusOnInvalidControl(form);

      return;
    }

    this.onFormDubmitEmitted.emit();
  }

  focusOnInvalidControl(form: NgForm) {
    for (const controlName of Object.keys(form.controls)) {
      const formControl = form.controls[controlName];

      if (formControl.invalid) {
        const invalidElement: HTMLElement = this._elementRef.nativeElement.querySelector(`[name="${controlName}"]`);

        if (invalidElement) {
          invalidElement.focus();
        }

        break;
      }
    }
  }
}