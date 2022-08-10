function Component(target: Function) {
  target.prototype.id = 200;
}

@Component
export class TestClass1 {
  id: number;
}
