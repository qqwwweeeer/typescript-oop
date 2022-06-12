{
  type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
  };

  //public 기본
  //private 외부에서 절대 볼 수 없고 접근할 수 없음
  //protected 외부에서 접근할 수 없지만 class를 상속한 자식 class에서만 접근할 수 있도록
  class CoffeeMaker {
    private static BEANS_GRAMM_PER_SHOT: number = 7; // class level
    coffeeBeans: number = 0; // instance (object) level

    private constructor(coffeeBeans: number) {
      this.coffeeBeans = coffeeBeans;
    }

    static makeMachine(coffeeBeans: number): CoffeeMaker {
      return new CoffeeMaker(coffeeBeans);
    }

    fillCoffeeBeans(beans: number) {
      if (beans < 0) {
        throw new Error("value for beans should be greater than 0");
      }
      this.coffeeBeans += beans;
    }

    makeCoffee(shots: number): CoffeeCup {
      if (this.coffeeBeans < shots * CoffeeMaker.BEANS_GRAMM_PER_SHOT) {
        throw new Error("Not Enough coffee Beans!");
      }

      this.coffeeBeans -= shots * CoffeeMaker.BEANS_GRAMM_PER_SHOT;
      return {
        shots,
        hasMilk: false,
      };
    }
  }

  const maker = CoffeeMaker.makeMachine(32);
  maker.coffeeBeans = 3;

  class User {
    get fullName(): string {
      return `${this.firstName} ${this.lastName}`;
    }
    private internalAge = 4;

    get age(): number {
      return this.internalAge;
    }

    set age(num: number) {
      this.internalAge = num;
    }
    constructor(private firstName: string, public lastName: string) {}
  }
  const user = new User("Steve", "Jobs");
  user.age = 6;
  console.log(user.fullName);
}
