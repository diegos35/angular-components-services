import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  //ngFor
  listNames: Array <string> = [
    'Diego',
    'Nicolas',
    'Santy'
    ];
  newName = '';


  name = 'Diego';
  age = 25;
  img =  'https://source.unsplash.com/random';
  btnDisable = true;

  person = {
    name: 'Diego',
    age: 25,
    avatar: 'https://source.unsplash.com/random'
  }

  toggleButton(){ //esto funciona para un acordeon
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

  addName(){
    this.listNames.push(this.newName); //el newName esta en el ngMode([])
    this.newName = '';
  }

  deleteName(index: number){
    this.listNames.splice(index, 1); //method adds and/or removes array elements.
  }

}
