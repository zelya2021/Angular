import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'veb-appTry2';
  name = 'Анастасия Зеленкина';
  position= 'Trainee/Junior .NET Developer';
  city = 'Днерп';
  education  = 'ДНУ им. О. Гончара 2017 - по настоящее время';
  linkGitHub = 'https://github.com/zelya2021';
  openMode = '_blank';

  getDateOfBr(): string {
    return '29 марта 2000';
  }
  getPhoneNumber(): string {
    return  '+38 (066) 458 - 12 - 25';
  }

}
