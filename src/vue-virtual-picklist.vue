<template>
  <div
    ref="vue-virtual-picklist__picklist-container"
    class="vue-virtual-picklist__picklist-container"
    :class="computedPicklistContainerClasses"
  >
    <div
      ref="vue-virtual-picklist__picklist-field"
      class="vue-virtual-picklist__picklist-field"
    >
      <div
        class="vue-virtual-picklist__picklist-input-container"
        :style="computedPicklistInputContainerStyles"
        :class="isDisplayOptionsActiveClasses"
        tabindex="0"
        @keyup.esc="onPressEscape"
        v-click-outside="onInputLoseFocus"
      >
        <input
          v-if="renderSearchInput"
          ref="input"
          v-model="searchString"
          class="vue-virtual-picklist__picklist-input"
          @focus="onInputGainFocus"
        />
        <template v-else>
          <div
            class="vue-virtual-picklist__selected-option"
            :style="computedSelectedOptionStyles"
            @click="onClickSelectedOption"
          >
            <slot
              name="vue-virtual-picklist__selected-option"
              :option="selectedOption"
              >{{ selectedOptionLabel }}</slot
            >
          </div>
        </template>
        <div
          class="vue-virtual-picklist__picklist-button"
          :style="computedPicklistButtonStyles"
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
        :item-height="computedOptionHeight"
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
    optionHeight: {
      type: Number,
      default: 30,
    },
    visibleOptions: {
      type: Number,
      default: 5,
      validator: (value) => {
        return value > 0;
      },
    },
    enableSearch: {
      type: Boolean,
      default: false,
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
      default: "0 Results",
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
    computedOptionHeight() {
      return this.isMounted
        ? this.optionHeight ||
            this.$el?.getElementsByClassName(
              "vue-virtual-picklist__option"
            )?.[0]?.childNodes?.[0]?.offsetHeight
        : 0;
    },
    computedFieldHeight() {
      return this.isMounted
        ? this.$refs["vue-virtual-picklist__picklist-container"]?.offsetHeight
        : 0;
    },
    computedPicklistContainerClasses() {
      return {
        "vue-virtual-picklist__no-pointer-events": !this.options?.length,
      };
    },
    computedOptionsStyles() {
      return {
        height: this.availableOptions?.length
          ? this.visibleOptions * this.computedOptionHeight + "px !important"
          : "100px",
        top: this.computedFieldHeight + "px !important",
      };
    },
    computedSelectedOptionStyles() {
      return {
        height: this.computedFieldHeight + "px !important",
        lineHeight: this.computedFieldHeight + "px !important",
      };
    },
    computedPicklistButtonStyles() {
      return {
        height: this.computedFieldHeight + "px !important",
      };
    },
    computedOptionStyles() {
      return {
        height: this.computedOptionHeight + "px !important",
        lineHeight: this.computedOptionHeight + "px !important",
      };
    },
    computedPicklistInputContainerStyles() {
      return {
        height: this.computedFieldHeight + "px !important",
      };
    },
    isDisplayOptionsActiveClasses() {
      return {
        active: this.dislayOptions,
      };
    },
    renderOptionsVirtualList() {
      return this.availableOptions?.length;
    },
    renderSearchInput() {
      return this.dislayOptions && this.enableSearch;
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
    onPressEscape() {
      this.dislayOptions = false;
    },
    onClickOption(option) {
      this.selectedOption = option;
      this.dislayOptions = false;
      if (this.enableSearch) this.searchString = option.label;
      this.$emit("select", option);
      this.$emit("input", option);
    },
    onClickSelectedOption() {
      this.dislayOptions = !this.dislayOptions;
      this.$nextTick(() => {
        this.$refs.input?.focus();
      });
    },
  },
};
</script>

<style scope>
.vue-virtual-picklist__picklist-container * {
  box-sizing: border-box;
}

.vue-virtual-picklist__picklist-container {
  width: 100% !important;
  height: 25px;
  position: relative !important;
  display: flex !important;
  flex-direction: column !important;
}

.vue-virtual-picklist__picklist-field {
  width: 100% !important;
  height: 100% !important;
  display: flex !important;
  flex-direction: column !important;
  border: thin solid grey !important;
}

.vue-virtual-picklist__picklist-input {
  border: none !important;
  background-color: transparent !important;
  width: 100% !important;
  height: 100% !important;
  padding: 0px 10px !important;
  border-radius: 0px !important;
}

.vue-virtual-picklist__picklist-input:focus {
  outline: none !important;
}

.vue-virtual-picklist__picklist-button {
  display: flex !important;
  width: 45px !important;
  border: none !important;
  text-align: center !important;
  background-color: transparent !important;
  align-items: center !important;
  justify-content: center !important;
  cursor: pointer !important;
}

.vue-virtual-picklist__picklist-input-container {
  display: flex !important;
  flex-direction: row !important;
  width: 100% !important;
  height: 100% !important;
}

.vue-virtual-picklist__picklist-input-container:focus-visible {
  outline: none !important;
}

.vue-virtual-picklist__picklist-input-container.active {
  background-color: transparent !important;
}

.vue-virtual-picklist__picklist-button-icon {
  height: 100% !important;
  max-height: 15px !important;
  fill: black !important;
  transition: transform 0.2s ease !important;
}

.vue-virtual-picklist__picklist-input-container.active
  .vue-virtual-picklist__picklist-button-icon {
  transform: rotate(180deg) !important;
}

.vue-virtual-picklist__picklist-options {
  position: absolute !important;
  width: 100% !important;
  background-color: white !important;
  border: thin solid grey !important;
  z-index: 999 !important;
  cursor: pointer !important;
}

.vue-virtual-picklist__option {
  padding: 0px 10px !important;
}

.vue-virtual-picklist__option:hover {
  background-color: rgba(220, 220, 220, 0.8) !important;
  cursor: pointer !important;
}

.vue-virtual-picklist__selected-option {
  width: 100% !important;
  cursor: pointer !important;
  padding: 0px 10px !important;
}

.vue-virtual-picklist__no-options-container {
  height: 100% !important;
  display: flex !important;
  justify-content: center !important;
  align-items: center !important;
}

.vue-virtual-picklist__no-pointer-events {
  pointer-events: none !important;
}
</style>
