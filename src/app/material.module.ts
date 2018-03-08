import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule,
    MatSidenavModule,
    MatListModule } from '@angular/material';
import {MatIconModule} from '@angular/material/icon';


@NgModule({
    imports: [MatButtonModule, MatSidenavModule, MatListModule, MatIconModule],
    exports: [MatButtonModule, MatSidenavModule, MatListModule, MatIconModule]
})
 
export class MaterialModule {}