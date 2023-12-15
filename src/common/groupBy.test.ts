import { describe, expect, it } from "vitest";
import { groupBy } from "./groupBy";

function getTheOfficeCharacters() {
  const micheal = {
    firstName: "Michael",
    lastName: "Scott",
    sex: "male",
  };
  const angela = {
    firstName: "Angela",
    lastName: "Martin",
    sex: "female",
  };
  const jim = {
    firstName: "Jim",
    lastName: "Halpert",
    sex: "male",
  };
  const pam = {
    firstName: "Pam",
    lastName: "Beesly",
    sex: "female",
  };

  return {
    micheal,
    angela,
    jim,
    pam,
  };
}

describe("groupBy", () => {
  it("should group the elements of a numeric array", () => {
    const numbers = [1, -2, 3, -4, -5];

    const groups = numbers.reduce(
      ...groupBy((item: number) => (item % 2 === 0 ? "even" : "odd")),
    );

    expect(groups).toEqual({
      even: [-2, -4],
      odd: [1, 3, -5],
    });
  });

  it("should group the elements of an objects array", () => {
    const { micheal, angela, jim, pam } = getTheOfficeCharacters();

    const persons = [micheal, angela, jim, pam];

    type Person = (typeof persons)[number];

    const groups = persons.reduce(...groupBy((person: Person) => person.sex));

    expect(groups).toEqual({
      male: [micheal, jim],
      female: [angela, pam],
    });
  });

  it("should group the elements of a string array", () => {
    const links = [
      "https://google.com",
      "http://localhost",
      "#section",
      "/posts/1",
    ];

    const groups = links.reduce(
      ...groupBy((item: string) =>
        item.startsWith("/") || item.startsWith("#") ? "internal" : "external",
      ),
    );

    expect(groups).toEqual({
      internal: ["#section", "/posts/1"],
      external: ["https://google.com", "http://localhost"],
    });
  });
});
