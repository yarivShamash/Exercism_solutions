import { hello, GREETING_MESSAGE } from "./hello-world";

describe("Hello World", () => {
  it("says hello world", () => {
    expect(hello()).toEqual(GREETING_MESSAGE);
  });
});
