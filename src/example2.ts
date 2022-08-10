type optionsType = {
  id: string;
};

// Dans le cas où le décorator a besoin d'objet en parametre
// on utilise decorator factory : returner une fonction dans le decorator
const Component = (options: optionsType) => {
  return (target: Function & typeof TestClass2) => {
    target.id = options.id;
  };
};

@Component({
  id: "Hello world",
})
export class TestClass2 {
  static id: string;
}
