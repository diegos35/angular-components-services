const username: string = 'Diego';


const sum = (a: number, b: number) : number => { //retornara un number
  return a + b;
}
sum(2,4);

const saludar = (nombre: string , edad: number )
  :string =>  `Hola me llamo ${nombre} y  //retorno =>
              tengo ${edad} años`

class Person {

  age:number;
  lastName: string;

  constructor(age: number, lastName:string){
    this.age = age;
    this.lastName = lastName;
  }
}

const diego = new Person(25, 'Diego');
