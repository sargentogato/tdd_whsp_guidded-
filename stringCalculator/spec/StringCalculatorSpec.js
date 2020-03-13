describe("String calculator", () => {
  it("converts an empty string to 0", () => {
    const emptyString = "";

    const result = add(emptyString);

    expect(result).toEqual(0);
  });

  it("converts a string to a number", () => {
    const string = "7";

    const result = add(string);

    expect(result).toEqual(7);
  });

  it("sums two numbers separated by a comma", () => {
    const string = "7,2";

    //act
    const result = add(string);
    //expect
    expect(result).toEqual(9);
  });

  it("can sum any amount of numbers separated by commas", () => {
    const string = "5,5,5,5";

    const result = add(string);

    expect(result).toEqual(20);
  });

  it("ignores new lines (\\n) between numbers", () => {
    const string = "5\n5";

    const result = add(string);

    expect(result).toEqual(55);
  });

  xit("ignores numbers bigger than 1000", () => {});
});

function add(string) {
  let splitted = string.split(",");
  let numbers = splitted.map(value => Number(value || 0));
  return numbers.reduce((a, b) => a + b);
}
