<template>
  <div
    class="vue-virtual-picklist__picklist-container"
    :class="computedPicklistContainerClasses"
  >
    <div
      ref="picklist-field"
      class="vue-virtual-picklist__picklist-field"
      :style="computedPicklistFieldStyle"
    >
      <div
        class="vue-virtual-picklist__picklist-input-container"
        :class="isDisplayOptionsActiveClasses"
      >
        <input
          v-if="dislayOptions"
          ref="input"
          v-model="searchString"
          v-click-outside="onInputLoseFocus"
          class="vue-virtual-picklist__picklist-input"
          @focus="onInputGainFocus"
          @keyup.esc="onInputLoseFocus"
        />
        <template v-else>
          <div
            class="vue-virtual-picklist__selected-option"
            :style="computedSelectedOptionStyles"
            @click="onClickSelectedOption"
          >
            <slot name="selected-option" :option="selectedOption">{{
              selectedOptionLabel
            }}</slot>
          </div>
        </template>
        <div
          class="vue-virtual-picklist__picklist-button"
          @click="onClickPicklistButton"
        >
          <svg
            focusable="false"
            class="vue-virtual-picklist__picklist-button-icon"
            data-key="down"
            aria-hidden="true"
            viewBox="0 0 52 52"
          >
            <g>
              <path
                d="M8.3 14h35.4c1 0 1.7 1.3.9 2.2L27.3 37.4c-.6.8-1.9.8-2.5 0L7.3 16.2c-.7-.9-.1-2.2 1-2.2z"
              ></path>
            </g>
          </svg>
        </div>
      </div>
    </div>
    <div
      v-show="dislayOptions"
      class="vue-virtual-picklist__picklist-options"
      :style="computedOptionsStyles"
    >
      <virtualized-list
        v-if="renderOptionsVirtualList"
        :items="availableOptions"
        :item-height="computedItemHeight"
        :bench="visibleOptions"
      >
        <template #default="{ item }">
          <div
            class="vue-virtual-picklist__option"
            :style="computedOptionStyles"
            @click="onClickOption(item)"
          >
            <slot name="option" :option="item">{{ item.label }}</slot>
          </div>
        </template>
      </virtualized-list>
      <div v-else class="vue-virtual-picklist__no-options-container">
        <slot name="no-options" :text="noOptionsAvailableText">{{
          noOptionsAvailableText
        }}</slot>
      </div>
    </div>
  </div>
</template>

<script>
import VirtualizedList from "vue-virtualized-list";
import vClickOutside from "v-click-outside";

export default {
  directives: {
    clickOutside: vClickOutside.directive,
  },
  inheritAttrs: false,
  components: {
    VirtualizedList,
  },
  props: {
    value: {
      type: Object,
      default: null,
    },
    options: {
      type: Array,
      required: true,
      validator: (value) => {
        if (!value || !value.length) return false;
        return value.reduce((previous, current) => {
          return (
            previous &&
            typeof current === "object" &&
            "label" in current &&
            "value" in current
          );
        }, true);
      },
    },
    height: {
      type: Number,
      default: 30,
    },
    optionHeight: {
      type: Number,
      default: 30,
    },
    visibleOptions: {
      type: Number,
      default: 5,
    },
    searchKey: {
      type: String,
      default: "value",
    },
    caseInsensitve: {
      type: Boolean,
      default: false,
    },
    hideSelected: {
      type: Boolean,
      default: false,
    },
    noOptionsAvailableText: {
      type: String,
      default: "No Options Available",
    },
  },
  data: () => {
    return {
      isMounted: false,
      selectedOption: {},
      searchString: null,
      dislayOptions: false,
    };
  },
  computed: {
    availableOptions() {
      if (!this.options || !this.options?.length) return null;
      let items = this.options.map((item, index) => {
        return { ...item, index };
      });

      let filteredItems = [];
      if (this.searchString) {
        for (let i = 0; i < items.length; i++) {
          if (
            this.caseInsensitve
              ? items[i]?.[this.searchKey]
                  ?.toLowerCase()
                  .includes(this.searchString.toLowerCase())
              : items[i]?.[this.searchKey].includes(this.searchString)
          ) {
            filteredItems.push(items[i]);
          }
        }
        items = filteredItems;
      }

      if (this.hideSelected && this.selectedOption)
        items.splice(this.selectedOption.index, 1);

      return items;
    },
    selectedOptionLabel() {
      return this.availableOptions?.length ? this.selectedOption?.label : null;
    },
    computedItemHeight() {
      return this.isMounted
        ? this.optionHeight ||
            this.$el?.getElementsByClassName("option")?.[0]?.childNodes?.[0]
              ?.offsetHeigh
        : 0;
    },
    computedInputHeight() {
      return this.height || 25;
    },
    computedPicklistInputHeight() {
      return this.isMounted ? this.$refs["picklist-field"]?.offsetHeight : 0;
    },
    computedPicklistContainerClasses() {
      return {
        "vue-virtual-picklist__no-pointer-events": !this.options?.length,
      };
    },
    computedOptionsStyles() {
      return {
        height: this.availableOptions?.length
          ? this.visibleOptions * this.computedItemHeight + "px"
          : "100px",
        top: this.computedPicklistInputHeight + "px",
      };
    },
    computedPicklistFieldStyle() {
      return {
        height: this.computedInputHeight + "px",
      };
    },
    computedSelectedOptionStyles() {
      return {
        lineHeight: this.computedInputHeight + "px !important",
      };
    },
    computedOptionStyles() {
      return {
        height: this.computedItemHeight + "px !important",
        lineHeight: this.computedItemHeight + "px !important",
      };
    },
    isDisplayOptionsActiveClasses() {
      return {
        "vue-virtual-picklist__active": this.dislayOptions,
      };
    },
    renderOptionsVirtualList() {
      return this.availableOptions?.length;
    },
  },
  beforeMount() {
    this.selectedOption = this.availableOptions?.find(
      (option) =>
        option[this.searchKey] === this.value?.[this.searchKey] &&
        option.index === this.value?.index
    );
  },
  mounted() {
    this.isMounted = true;
  },
  methods: {
    onClickPicklistButton() {
      this.dislayOptions = !this.dislayOptions;
      this.$nextTick(() => {
        this.$refs.input?.focus();
      });
    },
    onInputGainFocus() {
      this.dislayOptions = true;
      this.searchString = "";
    },
    onInputLoseFocus() {
      this.dislayOptions = false;
      this.searchString = "";
    },
    onClickOption(option) {
      this.selectedOption = option;
      this.dislayOptions = false;
      this.searchString = option.label;
      this.$emit("select", option);
      this.$emit("input", option);
    },
    onClickSelectedOption() {
      this.dislayOptions = true;
      this.$nextTick(() => {
        this.$refs.input?.focus();
      });
    },
  },
};
</script>

<style>
.vue-virtual-picklist__picklist-container {
  position: relative;
  display: flex;
  flex-direction: column;
}

.vue-virtual-picklist__picklist-field {
  width: 100%;
  display: flex;
  flex-direction: column;
  border: thin solid grey;
}

.vue-virtual-picklist__picklist-input {
  border: none !important;
  background-color: transparent !important;
  width: 100%;
  padding: 0px 10px;
  border-radius: 0px;
}

.vue-virtual-picklist__picklist-input:focus {
  outline: none;
}

.vue-virtual-picklist__picklist-button {
  display: flex;
  width: 45px;
  border: none;
  text-align: center;
  background-color: transparent !important;
  align-items: center;
  justify-content: center;
}

.vue-virtual-picklist__picklist-input-container {
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100%;
}

.vue-virtual-picklist__picklist-input-container.vue-virtual-picklist__active {
  background-color: transparent;
}

.vue-virtual-picklist__picklist-button-icon {
  height: 100%;
  max-height: 15px;
  fill: black;
  transition: transform 0.2s ease;
}

.vue-virtual-picklist__picklist-input-container.vue-virtual-picklist__active
  .vue-virtual-picklist__picklist-button-icon {
  transform: rotate(180deg);
}

.vue-virtual-picklist__picklist-options {
  position: absolute;
  width: 100%;
  height: 100px;
  background-color: white;
  border: thin solid grey;
  z-index: 999;
  cursor: pointer;
}

.vue-virtual-picklist__option {
  padding: 0px 10px;
}

.vue-virtual-picklist__option:hover {
  background-color: rgba(220, 220, 220, 0.8);
  cursor: pointer;
}

.vue-virtual-picklist__selected-option {
  width: 100%;
  cursor: pointer;
  padding: 0px 10px;
}

.vue-virtual-picklist__no-options-container {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.vue-virtual-picklist__no-pointer-events {
  pointer-events: none;
}
</style>
