import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  public name: string;
  public subject: string;
  constructor() { }

  ngOnInit() {
  }
  sendMail() {
    window.open('mailto:nathan@mic-belgique.be?subject=SpaceY contact ' + this.name + '&body=' + this.subject);
  }
}
