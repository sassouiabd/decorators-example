function FuncDecorator(
  target: Object,
  propretyKey: string,
  propretyDecription: PropertyDescriptor
) {
  //console.log('target:', target);
  //console.log('propretyKey:', propretyKey);
  propretyDecription.value = function (...args: any[]) {
    //console.log('args', args)
    return `Hello ${args}`;
  };
}

export class TestClass3 {
  id: number;
  @FuncDecorator
  printId(prefix: string = ""): string {
    return prefix + this.id;
  }
}
