import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-register-teacher',
  templateUrl: './register-teacher.component.html',
  styleUrls: ['./register-teacher.component.scss']
})
export class RegisterTeacherComponent implements OnInit {

  constructor(private authSer: AuthService, private rout: Router) { }

  ngOnInit(): void {
  }

  register(body) {
    this.authSer.registerTeacher(body).subscribe(res => {
      if (res.status) {
        alert(res.message);
        this.rout.navigate(['/']);
      }
    })
  }
}
