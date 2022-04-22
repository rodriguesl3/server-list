import { buildUrl } from "./server";

describe("server selector family", () => {
  it("builds url by default", () => {
    const response = buildUrl("", "all", 10, 1);

    expect(response).not.toBeUndefined();
    expect(response).toEqual(
      `http://localhost:8000/servers/all?page=1&total=10&search=`
    );
  });

  it("returns an undefined", () => {
    const response = buildUrl("", "location", 10, 1);

    expect(response).toBeUndefined();
  });
});
