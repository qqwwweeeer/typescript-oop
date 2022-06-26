{
  type CoffeeCup = {
    shots: number;
    hasMilk?: boolean;
    hasSuagr?: boolean;
  };
  // interface 안에 있는 모든 함수를 구연하여야 한다.
  interface CoffeeMaker {
    makeCoffee(shots: number): CoffeeCup;
  }

  class CoffeeMachine implements CoffeeMaker {
    private static BEANS_GRAMM_PER_SHOT: number = 7; // class level
    private coffeeBeans: number = 0; // instance (object) level

    constructor(coffeeBeans: number) {
      this.coffeeBeans = coffeeBeans;
    }

    static makeMachine(coffeeBeans: number): CoffeeMachine {
      return new CoffeeMachine(coffeeBeans);
    }

    fillCoffeeBeans(beans: number) {
      if (beans < 0) {
        throw new Error("value for beans should be greater than 0");
      }
      this.coffeeBeans += beans;
    }

    clean() {
      console.log("cleaning the machine ...🧓");
    }

    private grindBeans(shots: number) {
      console.log(`grinding beans for ${shots}`);
      if (this.coffeeBeans < shots * CoffeeMachine.BEANS_GRAMM_PER_SHOT) {
        throw new Error("not enough coffee beans!");
      }
      this.coffeeBeans -= shots * CoffeeMachine.BEANS_GRAMM_PER_SHOT;
    }

    private preheat(): void {
      console.log("heating up ...");
    }

    private extract(shots: number): CoffeeCup {
      console.log(`pulling ${shots} shots...`);
      return {
        shots,
        hasMilk: false,
      };
    }

    makeCoffee(shots: number): CoffeeCup {
      this.grindBeans(shots);
      this.preheat();
      return this.extract(shots);
    }
  }
  // 싸구려 우유 거품기
  class CheapMilkSermer {
    private steamMilk(): void {
      console.log("Steaming some milk");
    }
    makeMilk(cup: CoffeeCup): CoffeeCup {
      this.steamMilk();
      return {
        ...cup,
        hasMilk: true,
      };
    }
  }
  class CaffeLatteMachine extends CoffeeMachine {
    constructor(beans: number, serialNumber: string) {
      super(beans);
    }

    private steamMilk(): void {
      console.log("Steaming some milk");
    }

    makeCoffee(shots: number): CoffeeCup {
      // super : 상속하는 부모의 함수를 호출 할 수가 있다.
      const coffee = super.makeCoffee(shots);
      this.steamMilk();
      return {
        shots,
        hasMilk: true,
      };
    }
  }

  class SweetCoffeeMaker extends CoffeeMachine {
    getSugar() {
      console.log("getting some suger");
    }
    makeCoffee(shots: number): CoffeeCup {
      const coffee = super.makeCoffee(shots);
      this.getSugar(); //

      return {
        ...coffee,
        hasSuagr: true,
      };
    }
  }

  class SweetCoffeeLatteMachine extends CoffeeMachine {}

  const machines: CoffeeMaker[] = [
    new CoffeeMachine(16),
    new CaffeLatteMachine(16, "1"),
    new SweetCoffeeMaker(16),
  ];
  machines.forEach((machine) => {
    console.log("aaaaaaaaaa");
    machine.makeCoffee(1);
  });
}
