import { RegisterStudentComponent } from './components/register-student/register-student.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { RegisterTeacherComponent } from './components/register-teacher/register-teacher.component';


const routes: Routes = [
  {
    path: 'register/student',
    component: RegisterStudentComponent,
  },
  {
    path: 'register/teacher',
    component: RegisterTeacherComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes), SharedModule],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
