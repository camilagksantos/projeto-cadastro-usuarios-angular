import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  imports: [
    CommonModule,
    
    // Angular Material Modules
    MatCardModule,
    MatInputModule,
    FormsModule,
    MatFormFieldModule
  ],
  declarations: [],
  exports: [
    MatCardModule,
    MatInputModule,
    FormsModule,
    MatFormFieldModule
  ]
})
export class AngularMaterialModule { }
