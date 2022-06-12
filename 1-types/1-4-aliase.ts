{
  // types Aliases

  type Text = string;
  const name: Text = "ellie";
  const address: Text = "korea";
  type Num = number;
  type Student = {
    name: string;
    age: number;
  };
  const student: Student = {
    name: "ellie",
    age: 12,
  };

  //   string literal types
  type Name = "name";
  let ellieName: Name;
  ellieName = "name";
  type JSON = "json";
  const json: JSON = "json";

  type Boal = true;
}
