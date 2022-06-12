{
  //  Union Types : OR

  type Direction = "left" | "right" | "up" | "down";
  function movee(direction: Direction) {
    console.log(direction);
  }
  movee("down");

  type TileSize = 8 | 16 | 32;
  const tile: TileSize = 16;

  // function login -> success , fail

  type SuccessState = {
    response: {
      body: string;
    };
  };
  type FailState = {
    reason: string;
  };
  type LoginState = SuccessState | FailState;

  function loginn(): LoginState {
    return {
      response: {
        body: "logged in!",
      },
    };
  }
  // printLoginState(state : LoginState)
  // success -> 🏄‍♀️ body
  // fail -> 😭 reason

  function printLoginStatee(state: LoginState) {
    if ("response" in state) {
      console.log(`🏄‍♀️ ${state.response.body}`);
    } else {
      console.log(`🏄‍♀️ ${state.reason}`);
    }
  }
}
