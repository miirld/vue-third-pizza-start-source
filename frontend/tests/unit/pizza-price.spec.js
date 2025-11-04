import { createPinia, setActivePinia } from "pinia";
import { beforeEach, describe, expect, it } from "vitest";
import { pizzaPrice } from "@/common/helpers/pizza-price";
import { prepareData } from "../helpers/prepare-data";

describe("Test pizza price", () => {
  beforeEach(() => {
    setActivePinia(createPinia());
    prepareData();
  });

  it("Should return price of the pizza", () => {
    const pizza = {
      name: "Test pizza",
      sauceId: 1,
      doughId: 1,
      sizeId: 1,
      ingredients: [
        { ingredientId: 1, quantity: 1 },
        { ingredientId: 3, quantity: 2 },
      ],
    };

    const result = pizzaPrice(pizza);
    expect(result).toBe(467);
  });
});
