import { NgModule } from '@angular/core';
import {
  MatToolbarModule,
  MatIconModule,
  MatCardModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatOptionModule,
  MatPaginatorModule,
  MatRadioModule,
  MatSliderModule,
  MatSortModule,
  MatTableModule,
  MatTabsModule,
  MatAutocompleteModule,
  MatDialogModule,
  MatGridListModule, MatSnackBarModule, MatTooltipModule, MatSelectModule, MatSidenavModule
} from '@angular/material';

import {MatFormFieldModule, MatInputModule} from '@angular/material';
import {MatButtonModule} from '@angular/material';

const materialModule = [
  MatToolbarModule,
  MatIconModule,
  MatCardModule,
  MatFormFieldModule,
  MatInputModule,
  MatButtonModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatOptionModule, MatPaginatorModule, MatRadioModule,
  MatSliderModule,
  MatSortModule,
  MatTableModule,
  MatTabsModule,
  MatAutocompleteModule,
  MatDialogModule,
  MatGridListModule,
  MatSnackBarModule,
  MatTooltipModule,
  MatSelectModule,
  MatSidenavModule
];

@NgModule({
  exports: [materialModule],
  imports: [materialModule]
})
export class MaterialModule { }
