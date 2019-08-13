import { NgModule } from "@angular/core";
import { PostCreateComponent } from './post-create/post-create.component';
import { PostListComponent } from './post-list/post-list.component';
import {ReactiveFormsModule} from '@angular/forms'
import { CommonModule } from "@angular/common";
import { AngularMaterialModule } from "../angular-material.module";
import { RouterModule } from "@angular/router";

@NgModule({
    declarations: [ 
        PostListComponent,
        PostCreateComponent],
    imports: [
        ReactiveFormsModule,
        CommonModule,
        AngularMaterialModule,
        RouterModule
    ]    
})
export class PostModule{

}