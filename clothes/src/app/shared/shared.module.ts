import { NgModule } from '@angular/core';
import {
  CommonModule,
  CurrencyPipe,
  DatePipe,
  DecimalPipe,
  NgFor,
  NgIf,
  TitleCasePipe,
  UpperCasePipe,
} from '@angular/common';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
// import { TranslateModule } from '@ngx-translate/core';
const imports = [
  CommonModule,
  RouterModule,
  TitleCasePipe,
  UpperCasePipe,
  DatePipe,
  // TranslateModule,
  CurrencyPipe,
  DecimalPipe,
  FontAwesomeModule,
  NgFor,
  NgIf,
];
@NgModule({
  declarations: [],
  imports: [imports],
  exports: [imports],
})
export class SharedModule {}
