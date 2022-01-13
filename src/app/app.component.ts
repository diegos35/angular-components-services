import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  name = 'Diego';
  age = 25;
  img =  'https://source.unsplash.com/random';
  btnDisable = true;

  person = {
    name: 'Diego',
    age: 25,
    avatar: 'https://source.unsplash.com/random'
  }

  toggleButton(){
    this.btnDisable = !this.btnDisable; //Habilitar - desabilitar
  }

  increaseAge(){
    this.person.age += 1;
  }

  onScroll(event: Event){
    const element = event.target as HTMLElement;
    console.log(element.scrollTop);
  }

  changeName(event: Event){
    const element = event.target as HTMLInputElement;
    console.log(element);
    this.person.name = element.value;
  }
}
