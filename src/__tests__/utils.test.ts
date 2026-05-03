import { pickDeterministicItems } from "@/lib/utils";

describe("pickDeterministicItems", () => {
  it("returns the same selection for the same seed", () => {
    const items = ["alpha", "beta", "gamma", "delta"];

    expect(pickDeterministicItems(items, 2, "crunchies-online")).toEqual(
      pickDeterministicItems(items, 2, "crunchies-online"),
    );
  });

  it("rotates the list based on the seed and preserves order", () => {
    const items = ["alpha", "beta", "gamma", "delta"];

    expect(pickDeterministicItems(items, 2, "b")).toEqual(["gamma", "delta"]);
  });

  it("returns all items when count exceeds the list length", () => {
    const items = ["alpha", "beta"];

    expect(pickDeterministicItems(items, 4, "anything")).toEqual(items);
  });
});
