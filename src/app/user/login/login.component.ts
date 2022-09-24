import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm! : FormGroup;

  constructor(private formBuilder:FormBuilder, private router:Router, private http:HttpClient) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: [''],
      password:['']
    });
  }

  login(){

    this.http.get<any>('https://sayna-blackpanther-api.herokuapp.com/signupUsers')
    .subscribe((res)=>{
      const utilisateur = res.find((ans:any)=>{
        return ans.email === this.loginForm.value.email && ans.password === this.loginForm.value.password;
      });

      if(utilisateur){
        alert('Vous etes connecte');
        this.loginForm.reset();
        //suisconnecte = true;
        // this.authService.suisConnecte = true;
        this.router.navigateByUrl('user');
      }
      else{
        alert('Veuillez enregistre');
      }
    })
  }

}
