import { mount } from "@vue/test-utils";
import { describe, it, expect, beforeEach } from "vitest";
import { createPinia, setActivePinia } from "pinia";
import { prepareData } from "../helpers/prepare-data";
import DoughSelector from "@/modules/constructor/DoughSelector.vue";

describe("DoughSelector component", () => {
  let dataStore;

  beforeEach(() => {
    setActivePinia(createPinia());
    dataStore = prepareData();
  });

  it("Should render all dough types", () => {
    const wrapper = mount(DoughSelector, {
      props: {
        items: dataStore.doughs,
        modelValue: 1,
      },
    });

    const labels = wrapper.findAll(".dough__input");
    expect(labels.length).toBe(dataStore.doughs.length);
  });

  it("Should set checked input according to modelValue", () => {
    const wrapper = mount(DoughSelector, {
      props: {
        items: dataStore.doughs,
        modelValue: 2,
      },
    });

    const inputs = wrapper.findAll('input[type="radio"]');
    const checked = inputs.find((input) => input.element.checked);
    expect(checked.element.value).toBe("2");
  });

  it("Should emit update:modelValue when selecting another dough type", () => {
    const wrapper = mount(DoughSelector, {
      props: {
        items: dataStore.doughs,
        modelValue: 1,
      },
    });

    const inputs = wrapper.findAll('input[type="radio"]');
    inputs[1].trigger("input");

    expect(wrapper.emitted()["update:modelValue"]).toBeTruthy();
    expect(wrapper.emitted()["update:modelValue"][0]).toEqual([2]);
  });
});
