function paramDecorator(_target: Object, propretyName: string, index: number) {
  console.log(propretyName, index);
}

export class TestClass5 {
  id: number = 5;
  printId(prefix: string = "", @paramDecorator prefix2: string = ""): string {
    return prefix + this.id;
  }
}
