import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngfor',
  templateUrl: './ngfor.component.html',
  styleUrls: ['./ngfor.component.css']
})
export class NgforComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  // cursos:string[] = ["html", "css", "angular", "js"]
  lista:string[] = [
    "Guatemala",
    "Mexico",
    "Honduras",
    "Costa Rica",
    "Panamá",
    "El Salvador",
    "Belice",
    "Nicaragua",
    "Estados Unidos",
    "Canadá"
  ]
}
