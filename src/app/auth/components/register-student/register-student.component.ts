import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-student',
  templateUrl: './register-student.component.html',
  styleUrls: ['./register-student.component.scss']
})
export class RegisterStudentComponent implements OnInit {

  constructor(private authSer: AuthService, private rout: Router) { }

  ngOnInit(): void {
  }

  register(body) {
    this.authSer.registerStudent(body).subscribe(res => {
      if (res.status) {
        alert(res.message);
        this.rout.navigate(['/']);
      }
    })
  }

}
