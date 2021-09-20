import { mount } from "@vue/test-utils";
import VueVirtualPicklist from "@/vue-virtual-picklist.vue";

const options = [
  { label: "a", value: "a" },
  { label: "b", value: "b" },
  { label: "c", value: "c" },
  { label: "d", value: "d" },
  { label: "e", value: "e" },
  { label: "f", value: "f" },
  { label: "g", value: "g" },
  { label: "h", value: "h" },
  { label: "k", value: "k" },
  { label: "l", value: "l" },
  { label: "m", value: "m" },
  { label: "n", value: "n" },
  { label: "o", value: "o" },
  { label: "p", value: "p" },
  { label: "q", value: "q" },
  { label: "r", value: "r" },
  { label: "s", value: "s" },
  { label: "t", value: "t" },
  { label: "u", value: "u" },
  { label: "v", value: "v" },
];

describe("VueVirtualPicklist.vue", () => {
  let spy = jest.spyOn(console, "error");
  afterEach(() => spy.mockReset());

  it("should render only the visible options", () => {
    let wrapper = mount(VueVirtualPicklist, {
      propsData: {
        options,
        visibleOptions: 10,
      },
    });

    let picklistOptions = wrapper.findAll(".vue-virtual-picklist__option");
    expect(picklistOptions.length).toBe(10);
    for (let i = 0; i < picklistOptions.length; i++) {
      expect(picklistOptions.at(i).text()).toBe(options[i].label);
    }

    wrapper = mount(VueVirtualPicklist, {
      propsData: {
        options,
        visibleOptions: 5,
      },
    });

    picklistOptions = wrapper.findAll(".vue-virtual-picklist__option");
    expect(picklistOptions.length).toBe(5);
    for (let i = 0; i < picklistOptions.length; i++) {
      expect(picklistOptions.at(i).text()).toBe(options[i].label);
    }

    wrapper = mount(VueVirtualPicklist, {
      propsData: {
        options,
      },
    });

    picklistOptions = wrapper.findAll(".vue-virtual-picklist__option");
    expect(picklistOptions.length).toBe(5);
    for (let i = 0; i < picklistOptions.length; i++) {
      expect(picklistOptions.at(i).text()).toBe(options[i].label);
    }

    wrapper = mount(VueVirtualPicklist, {
      propsData: {
        options,
        visibleOptions: 0,
      },
    });

    picklistOptions = wrapper.findAll(".vue-virtual-picklist__option");
    expect(picklistOptions.length).toBe(0);
  });

  it("should not render the component without options", () => {
    mount(VueVirtualPicklist);
    expect(spy).toBeCalledWith(
      expect.stringContaining("[Vue warn]: Missing required prop")
    );
  });

  it("should accept the given options", () => {
    const validator = VueVirtualPicklist.props.options.validator;
    expect(
      validator([
        {
          label: "A",
          value: "A",
        },
        {
          label: "B",
          value: "B",
        },
      ])
    ).toBe(true);

    expect(
      validator([
        {
          label: "A",
          value: "A",
          someOtherKey: "A",
        },
        {
          label: "B",
          value: "B",
          someOtherKey: "B",
        },
      ])
    ).toBe(true);
  });

  it("should not accept the given options", () => {
    const validator = VueVirtualPicklist.props.options.validator;
    expect(
      validator([
        {
          name: "A",
          value: "A",
        },
        {
          name: "B",
          value: "B",
        },
      ])
    ).toBe(false);

    expect(
      validator([
        {
          label: "A",
          name: "A",
        },
        {
          label: "B",
          name: "B",
        },
      ])
    ).toBe(false);

    expect(
      validator([
        {
          test: "A",
          name: "A",
        },
        {
          test: "B",
          name: "B",
        },
      ])
    ).toBe(false);

    expect(
      validator([
        {
          name: "A",
        },
        {
          name: "B",
        },
      ])
    ).toBe(false);

    expect(validator(["A", "B"])).toBe(false);
    expect(validator(null)).toBe(false);
    expect(validator(undefined)).toBe(false);
    expect(validator([])).toBe(false);
  });

  it("should render with selected option", () => {
    let wrapper = mount(VueVirtualPicklist, {
      propsData: {
        options,
        visibleOptions: 10,
        value: {
          label: "a",
          value: "a",
          index: 0,
        },
      },
    });

    let selectedOption = wrapper.find(".vue-virtual-picklist__selected-option");
    expect(selectedOption.text()).toContain("a");

    wrapper = mount(VueVirtualPicklist, {
      propsData: {
        options,
        visibleOptions: 10,
        value: {
          label: "v",
          value: "v",
          index: 19,
        },
      },
    });

    selectedOption = wrapper.find(".vue-virtual-picklist__selected-option");
    expect(selectedOption.text()).toContain("v");
  });

  it("should render without elected option", () => {
    let wrapper = mount(VueVirtualPicklist, {
      propsData: {
        options,
        visibleOptions: 10,
        value: {
          label: "a",
          value: "a",
          index: 1,
        },
      },
    });

    let selectedOption = wrapper.find(".vue-virtual-picklist__selected-option");
    expect(selectedOption.text()).not.toContain("a");

    wrapper = mount(VueVirtualPicklist, {
      propsData: {
        options,
        visibleOptions: 10,
        value: {
          label: "xx",
          value: "xx",
          index: 1,
        },
      },
    });

    selectedOption = wrapper.find(".vue-virtual-picklist__selected-option");
    expect(selectedOption.text()).not.toContain("xx");

    wrapper = mount(VueVirtualPicklist, {
      propsData: {
        options,
        visibleOptions: 10,
        value: {
          someOtherKey: "xx",
        },
      },
    });

    selectedOption = wrapper.find(".vue-virtual-picklist__selected-option");
    expect(selectedOption.text()).not.toContain("xx");

    wrapper = mount(VueVirtualPicklist, {
      propsData: {
        options,
        visibleOptions: 10,
        value: {
          label: "l",
          index: 9,
          someOtherKey: "xx",
        },
      },
    });

    selectedOption = wrapper.find(".vue-virtual-picklist__selected-option");
    expect(selectedOption.text()).not.toContain("l");

    wrapper = mount(VueVirtualPicklist, {
      propsData: {
        options,
        visibleOptions: 10,
        value: "l",
      },
    });

    selectedOption = wrapper.find(".vue-virtual-picklist__selected-option");
    expect(selectedOption.text()).not.toContain("l");
  });
});
