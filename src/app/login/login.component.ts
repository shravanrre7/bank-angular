import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  accountdt = {
    1001: { name: "user1", acno: 1001, pin: 4387, password: "userone", balance: 3000 },
    1002: { name: "user2", acno: 1002, pin: 7676, password: "usertwo", balance: 3000 },
    1003: { name: "user3", acno: 1003, pin: 8787, password: "userthree", balance: 4000 },
    1004: { name: "user4", acno: 1004, pin: 7979, password: "userfour", balance: 2000 },
    1005: { name: "user5", acno: 1005, pin: 3654, password: "userfive", balance: 9000 }

}

  
  ngOnInit(): void {
  }

  acno=""
  pwd=""
  constructor() { }

  accnc(event){
    alert("acc ngg");
    this.acno=event.target.value;
  }

  pswd(event){
    alert("pass");
    this.pwd=event.target.value;
  }

  

  login(){
    alert("login clicked");
    var acno =this.acno; //document.querySelector("#acno").value
    var password =this.pwd //document.querySelector("#pwd").value
    alert(acno + "   " + password)
    let data = this.accountdt;

    if (acno in data) {
        let pwd = data[acno].password
        if (pwd == password) {
            // window.location.href="userhome.html"
            alert("login success");
            window.location.href = "userhome.html"

        }
        else {
            alert("login not sucessful");
        }
    }

  }
}
