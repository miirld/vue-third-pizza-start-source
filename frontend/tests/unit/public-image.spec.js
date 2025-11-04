import { describe, it, expect } from "vitest";
import { getPublicImage } from "@/common/helpers/public-image";

describe("Test getPublicImage helper", () => {
  it("Should add slash when path does not start with '/'", () => {
    const result = getPublicImage("public/img/diameter.svg");
    expect(result).toBe("/api/public/img/diameter.svg");
  });

  it("Should not add slash when path already starts with '/'", () => {
    const result = getPublicImage("/public/img/diameter.svg");
    expect(result).toBe("/api/public/img/diameter.svg");
  });
});
