
import {Component} from '@angular/core';
import { CoursesService } from './courses.service';

@Component({
            selector:'courses',
            template:`
                    <!-- <h2>{{title}}</h2>
                    <ul>
                        <li *ngFor="let course of courses">
                            {{course}}
                        </li>
                    </ul>
                <button class="btn btn-primary" [class.active]="isActive">Save</button><br>
                <input [value]="email" (keyup.enter)="email =$event.target.value; onKeyUp()"/><br>
                <input [(ngModel)]="email" (keyup.enter)="onKeyUp()"/> -->

            
            `


})

export class CoursesComponent {
   /* title1 = "List of couses";
    courses;
    isActive=true;
    email="me@example.com";

    constructor(service:CoursesService) {
        this.courses = service.getCourses();
    }

    onKeyUp(){
        console.log(this.email);
    } */

    //glyphicon 

   

}