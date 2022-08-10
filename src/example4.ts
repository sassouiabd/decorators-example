function propDecorator(target: Object, propretyName: string) {
  let value: number;
  const getter = () => {
    console.log("Getting value ...");
    return value;
  };
  const setter = (newVal: number) => {
    console.log("Setting value ...");
    value = newVal;
  };

  // console.log("target:", target);
  // console.log("propretyName", propretyName);
  Object.defineProperty(target, propretyName, {
    get: getter,
    set: setter,
  });
}
export class TestClass4 {
  @propDecorator
  id: number;
}
