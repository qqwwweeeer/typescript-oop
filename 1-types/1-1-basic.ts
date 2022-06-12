{
  // javascript
  // primitive : number, string, boolean, bigint, symbol, null, undefined, ...
  // object : function , array ....

  // number
  const num: number = -1;

  // string
  const str: string = "hello";

  //boolean
  const boal: boolean = false;

  // undefined 값이 있는 지 없는지 결정되지 않은 상황
  let name: undefined; // xxxxx
  let age: number | undefined;
  age = undefined;
  age = 1;

  function find(): number | undefined {
    return undefined;
  }

  // null 값이 텅텅 비어있다.
  let person: null;
  let person2: string | null;

  //unknown  xxxxx
  let notSure: unknown = 0;
  notSure = "he";
  notSure = true;

  // any  xxxx
  let anything: any = 0;
  anything = "hello";

  // void
  function print(): void {
    console.log("hello");
    return;
  }
  let unusable: void = undefined; // xxxxxx

  //never 절대 리턴할 수 없다.
  function throwError(message: string): never {
    //message => server (log)
    throw new Error(message);
    while (true) {}
  }
  let neverEnding: never; // xxxx

  // object 어떠한 object를 전달할 수 있다.
  let obj: object = [1, 4]; // xxxx
  function acceptSomeObject(obj: object) {}
  acceptSomeObject({ name: "ellie" });
  acceptSomeObject({ animal: "dog" });
}
