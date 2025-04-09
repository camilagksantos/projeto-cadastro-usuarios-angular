import { Component, OnInit } from '@angular/core';
import { UsersService } from './services/users.service';
import { GenresService } from './services/genres.service';
import { BrazilianStatesService } from './services/brazilian-states.service';
import { UsersListResponse } from './types/users-list-response';
import { GenreListResponse } from './types/genre-list-response';
import { BrazilianStatesListResponse } from './types/brazilian-states-list-response';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  usersList: UsersListResponse = [];
  genresList: GenreListResponse = [];
  statesList: BrazilianStatesListResponse = [];

  constructor(
    private readonly _usersService: UsersService,
    private readonly _genresService: GenresService,
    private readonly _statesService: BrazilianStatesService,
  ) { }
  
  ngOnInit(): void {
    this.getUsers();
    this.getGenres();
    this.getStates();
  }

  private getUsers() {
    this._usersService.getUsersList().subscribe((userListResponse) => {
      this.usersList = userListResponse;
    });
  }
  
  private getGenres() {
    this._genresService.getGenresList().subscribe((genresListResponse) => {
      this.genresList = genresListResponse;
    });
  }

  private getStates() {
    this._statesService.getStatesList().subscribe((statesListResponse) => {
      this.statesList = statesListResponse;
    });
  }
}
