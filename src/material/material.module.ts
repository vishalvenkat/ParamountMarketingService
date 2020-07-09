import { NgModule } from '@angular/core';
import {MatToolbarModule, MatIconModule, MatCardModule} from '@angular/material';

import {MatFormFieldModule, MatInputModule} from '@angular/material';
import {MatButtonModule} from '@angular/material';

const materialModule = [
  MatToolbarModule,
  MatIconModule,
  MatCardModule,
  MatFormFieldModule,
  MatInputModule,
  MatButtonModule
];

@NgModule({
  exports: [materialModule],
  imports: [materialModule]
})
export class MaterialModule { }
