{
  // {
  //   // Javascript xxxx
  //   function jsAdd(num1, num2) {
  //     return num1 + num2;
  //   }
  // }

  // {
  //   // typeScript
  //   function add(num1: number, num2: number): number {
  //     return num1 + num2;
  //   }
  // }

  // {
  //   // javasciprt xxx
  //   function jsFetchNum(id) {
  //     // code ...
  //     // code ...
  //     // code ...
  //     return new Promise((resolve, reject) => {
  //       resolve(100);
  //     });
  //   }
  // }

  // {
  //   // javasciprt xxx
  //   function FetchNum(id: string): Promise<number> {
  //     // code ...
  //     // code ...
  //     // code ...
  //     return new Promise((resolve, reject) => {
  //       resolve(100);
  //     });
  //   }
  // }
  {
    // JavaScript : => TypeScript
    // optional parameter
    function printName(firstName: string, lastName?: string) {
      console.log(firstName);
      console.log(lastName); // undefined
    }
    printName("steve", "jobs");
    printName("ellie");
    printName("anna", undefined);
  }

  // default parameter
  function printMessage(message: string = "default message") {
    console.log(message);
  }
  printMessage();

  //rest parameter
  function addNumbers(...numbers: number[]): number {
    return numbers.reduce((a, b) => a + b);
  }
  console.log(addNumbers(1, 2));
  console.log(addNumbers(1, 2, 3));
  console.log(addNumbers(1, 2, 3, 4));
}
