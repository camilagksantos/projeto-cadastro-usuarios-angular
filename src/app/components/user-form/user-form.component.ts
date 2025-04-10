import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { IUser } from '../../interfaces/user/IUser';
import { IBrazilianStates } from '../../interfaces/IBrazilianStates';
import { IGenre } from '../../interfaces/IGenre';

@Component({
  selector: 'app-user-form',
  standalone: false,
  templateUrl: './user-form.component.html',
  styleUrl: './user-form.component.scss'
})
export class UserFormComponent implements OnInit, OnChanges {
  @Input() userSelected: IUser = {} as IUser;
  @Input() statesList: IBrazilianStates[] = [];
  @Input() genresList: IGenre[] = [];

  ngOnChanges(changes: SimpleChanges){
    
  }

  ngOnInit(){
    
  }
}
