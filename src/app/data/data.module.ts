import { CommonModule } from '@angular/common';
import { NgModule, SkipSelf, Optional } from '@angular/core';
import { HttpClient, HttpClientModule} from '@angular/common/http';

import { APIS } from './services/api';

@NgModule({
  imports: [
    HttpClientModule,
    CommonModule
  ],
  providers: [
    ...APIS
  ],
})
export class DataModule {
  constructor(@Optional() @SkipSelf() parentModule: DataModule, @Optional() http: HttpClient) {
    if (parentModule) {
        throw new Error('ApiModule is already loaded. Import in your base AppModule only.');
    }
    if (!http) {
        throw new Error('You need to import the HttpClientModule in your AppModule! \n' +
        'See also https://github.com/angular/angular/issues/20575');
    }
  }
}
