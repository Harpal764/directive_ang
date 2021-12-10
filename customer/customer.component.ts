import { Component, OnInit } from '@angular/core';
import { customerdata } from '../data/customerdata';
import { records } from '../data/data';
@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent {

  public countrydata=records;
  public path1:string='';
  public path2:string='';
  public ddlstate:any;
  public cusotmer=customerdata;
  public style1={"background":"orange","color":"red","border":"1px solid red"};
  public style2={"background":"green","color":"yellow","border":"1px solid red"};
  public islogin=true;
  public btntext="SignUp"
  public gcode=3;
  public constructor(){
  }

  loadimage(){
     this.path1="assets/images/nature.jpg"
     this.path2="assets/images/nature2.jpeg"
  
  }
  LoadData(){
  // this.countrydata=records;
  }
  LoadState(txt:any){

    console.log(txt)
    let states:any;
    states=records.filter(e=>{
      if(e.numeric_code==txt){
        return e.states;
      }
      return null
    });
    console.log(states)
    this.ddlstate=states[0].states
  }

  Handle(){
    //this.islogin=!this.islogin
    this.islogin=this.islogin?false:true;
    this.btntext=this.islogin?"SignUp":"SignIn"
  }
}












