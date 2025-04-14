import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { IUser } from '../../interfaces/user/IUser';
import { IBrazilianStates } from '../../interfaces/IBrazilianStates';
import { IGenre } from '../../interfaces/IGenre';
import { getPasswordStrengthValue } from '../../utils/get-password-strength-value';
import { convertPTDateToDateObj } from '../../utils/convert-pt-date-to-date-obj';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';
import { convertDateObjToPTDate } from '../../utils/convert-date-obj-to-pt-date';

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

  @Input() userSelected: IUser = {} as IUser;
  @Input() statesList: IBrazilianStates[] = [];
  @Input() genresList: IGenre[] = [];

  ngOnChanges(changes: SimpleChanges) {
    if (changes['userSelected'] && changes['userSelected'].currentValue) {
      this.passwordStrengthValue = getPasswordStrengthValue(this.userSelected.password);
      this.setBirthDateToDatePicker(this.userSelected.birthDate);
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
}
