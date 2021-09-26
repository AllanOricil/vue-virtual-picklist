<template>
  <div
    ref="picklist-container"
    class="vue-virtual-picklist__picklist-container"
    :class="computedPicklistContainerClasses"
    @keyup.arrow-down="moveActiveOptionDown"
    @keyup.arrow-up="moveActiveOptionUp"
    @keyup.enter="onPressEnterOnActiveOption"
  >
    <div
      class="vue-virtual-picklist__picklist-input-container"
      tabindex="0"
      :style="computedPicklistInputContainerStyles"
      :class="computedPicklistInputContainerClasses"
      v-click-outside="onClickOutside"
      @keyup.esc="onPressEscape"
    >
      <input
        v-if="renderSearchInput"
        ref="input"
        v-model="searchString"
        :placeholder="searchInputPlaceholder"
        class="vue-virtual-picklist__picklist-input"
        @click="onClickPicklistField"
        @focus="onInputGainFocus"
        @keyup="onSearchOptions"
      />
      <div
        v-else-if="selectedOption"
        class="vue-virtual-picklist__selected-option"
        :style="computedSelectedOptionStyles"
        @click="onClickPicklistField"
      >
        <slot name="selected-option" :option="selectedOption">{{
          selectedOptionLabel
        }}</slot>
      </div>
      <div
        v-else-if="renderPlaceholder"
        class="vue-virtual-picklist__placeholder"
        :style="computedPlaceholderStyles"
        @click="onClickPicklistField"
      >
        <slot name="placeholder">{{ placeholder }}</slot>
      </div>
      <div
        class="vue-virtual-picklist__picklist-button"
        :style="computedPicklistButtonStyles"
        @click="onClickDropdownButton"
      >
        <slot name="dropdown-icon">
          <svg
            focusable="false"
            class="vue-virtual-picklist__dropdown-icon"
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
        </slot>
      </div>
    </div>
    <div
      v-show="showOptions"
      class="vue-virtual-picklist__picklist-options-container"
      :style="computedOptionsContainerStyles"
    >
      <virtualized-list
        v-if="renderOptionsVirtualList"
        ref="options"
        :items="availableOptions"
        :item-height="computedOptionHeight"
        :bench="visibleOptions"
      >
        <template #default="{ item, index }">
          <div
            class="vue-virtual-picklist__option vue-virtual-picklist__noselect"
            :class="computedOptionClasses(index)"
            :style="computedOptionStyles"
            @click="onSelectOption(item, index)"
          >
            <slot name="option" :option="{ ...item, index }">{{
              item.label
            }}</slot>
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
    placeholder: {
      type: String,
      default: "select an option",
    },
    enableSearch: {
      type: Boolean,
      default: false,
    },
    searchInputPlaceholder: {
      type: String,
      default: "type to filter available options",
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
      default: "no options found",
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  data: () => {
    return {
      isMounted: false,
      selectedOption: null,
      searchString: null,
      showOptions: false,
      activeOptionIndex: -1,
      availableOptions: null,
    };
  },
  computed: {
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
        ? this.$refs["picklist-container"]?.offsetHeight
        : 0;
    },
    computedPicklistContainerClasses() {
      return {
        "vue-virtual-picklist__disabled":
          !this.options?.length || this.disabled,
      };
    },
    computedOptionsContainerStyles() {
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
    computedPlaceholderStyles() {
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
    computedPicklistInputContainerClasses() {
      return {
        active: this.showOptions,
      };
    },
    renderOptionsVirtualList() {
      return this.availableOptions?.length;
    },
    renderSearchInput() {
      return this.showOptions && this.enableSearch;
    },
    renderPlaceholder() {
      return this.placeholder && !this.disabled && !this.selectedOption;
    },
  },
  beforeMount() {
    if (this.value) {
      this.selectedOption = this.options?.find(
        (option, index) =>
          option[this.searchKey] === this.value?.[this.searchKey] &&
          index === this.value?.index
      );
    }

    this.setAvailableOptions();
  },
  mounted() {
    this.isMounted = true;
  },
  watch: {
    showOptions(newValue) {
      if (newValue) this.$emit("show-options");
      else this.$emit("hide-options");
    },
  },
  methods: {
    onSearchOptions(event) {
      if (event.key === "ArrowDown" || event.key === "ArrowUp") {
        event.preventDefault();
        return;
      }
      this.setAvailableOptions();
    },
    setAvailableOptions() {
      return new Promise((resolve, _) => {
        if (!this.options || !this.options?.length) return null;
        this.availableOptions = this.options.map((item, index) => {
          return { ...item, originalListIndex: index };
        });

        if (this.hideSelected && this.selectedOption)
          this.availableOptions.splice(
            this.selectedOption.originalListIndex,
            1
          );

        let i = this.availableOptions.length;
        if (this.searchString) {
          while (i--) {
            if (
              !(this.caseInsensitve
                ? this.availableOptions[i]?.[this.searchKey]
                    ?.toLowerCase()
                    .includes(this.searchString.toLowerCase())
                : this.availableOptions[i]?.[this.searchKey].includes(
                    this.searchString
                  ))
            ) {
              this.availableOptions.splice(i, 1);
            }
          }
        }

        resolve();
      });
    },
    onClickPicklistField() {
      if (this.enableSearch && this.showOptions) return;
      this.onClickDropdownButton();
    },
    onClickDropdownButton() {
      this.showOptions = !this.showOptions;
      if (this.enableSearch) {
        this.$nextTick(() => {
          this.$refs.input?.focus();
        });
      }
      if (!this.showOptions) this.hideOptions();
    },
    onInputGainFocus() {
      this.$refs.options?.update();
      this.showOptions = true;
      this.searchString = "";
      if (!this.hideSelected && this.selectedOption?.originalListIndex) {
        this.$nextTick(() => {
          this.$refs.options.scrollTo(this.selectedOption?.originalListIndex);
        });
      }
    },
    onClickOutside() {
      this.hideOptions();
    },
    onPressEscape() {
      this.hideOptions();
    },
    hideOptions() {
      this.showOptions = false;
      this.searchString = "";
      this.activeOptionIndex = -1;
      this.setAvailableOptions();
    },
    onSelectOption(option, index) {
      this.selectedOption = { ...option, filteredListIndex: index };
      this.activeOptionIndex = index;
      this.hideOptions();
      if (this.enableSearch) this.searchString = option.label;
      this.$emit("select", option);
      this.$emit("input", option);
    },
    onPressEnterOnActiveOption() {
      this.onSelectOption(this.availableOptions[this.activeOptionIndex]);
    },
    moveActiveOptionUp() {
      if (this.showOptions && this.activeOptionIndex > 0) {
        this.activeOptionIndex--;
        this.$nextTick(() => {
          this.$refs.options.scrollTo(this.activeOptionIndex);
        });
      }
    },
    moveActiveOptionDown() {
      if (
        this.showOptions &&
        this.activeOptionIndex < this.availableOptions.length
      ) {
        this.activeOptionIndex++;
        if (this.activeOptionIndex >= this.visibleOptions)
          this.$nextTick(() => {
            this.$refs.options.scrollTo(this.activeOptionIndex);
          });
      }
    },
    computedOptionClasses(index) {
      return {
        active: this.activeOptionIndex === index,
      };
    },
  },
};
</script>

<style scope>
.vue-virtual-picklist__picklist-container * {
  box-sizing: border-box !important;
  font-family: Helvetica, Sans-Serif !important;
  font-size: 12px !important;
}

.vue-virtual-picklist__picklist-container {
  width: 100% !important;
  height: 25px;
  position: relative !important;
  display: flex !important;
  flex-direction: column !important;
  cursor: pointer !important;
}

.vue-virtual-picklist__picklist-input-container {
  width: 100% !important;
  height: 100% !important;
  display: flex !important;
  flex-direction: row !important;
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
  transition: transform 0.2s ease !important;
}

.vue-virtual-picklist__picklist-input-container.active
  .vue-virtual-picklist__picklist-button {
  transform: rotate(180deg) !important;
}

.vue-virtual-picklist__picklist-input-container:focus-visible {
  outline: none !important;
}

.vue-virtual-picklist__picklist-input-container.active {
  background-color: transparent !important;
}

.vue-virtual-picklist__dropdown-icon {
  height: 100% !important;
  max-height: 15px !important;
  fill: black !important;
}

.vue-virtual-picklist__picklist-options-container {
  position: absolute !important;
  width: 100% !important;
  background-color: white !important;
  border: thin solid grey !important;
  z-index: 999 !important;
  cursor: pointer !important;
}

.vue-virtual-picklist__option {
  padding: 0px 10px !important;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}

.vue-virtual-picklist__option:hover {
  background-color: rgba(220, 220, 220, 0.8) !important;
  cursor: pointer !important;
}

.vue-virtual-picklist__option.active {
  background-color: rgba(220, 220, 220, 0.8) !important;
}

.vue-virtual-picklist__selected-option {
  width: 100% !important;
  cursor: pointer !important;
  padding: 0px 10px !important;
  white-space: nowrap;
  text-overflow: ellipsis;
}

.vue-virtual-picklist__no-options-container {
  height: 100% !important;
  display: flex !important;
  justify-content: center !important;
  align-items: center !important;
}

.vue-virtual-picklist__disabled {
  pointer-events: none !important;
  opacity: 0.6 !important;
}

.vue-virtual-picklist__placeholder {
  width: 100% !important;
  padding: 0px 10px !important;
  color: rgb(117, 117, 117) !important;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}

.vue-virtual-picklist__noselect {
  -webkit-touch-callout: none; /* iOS Safari */
  -webkit-user-select: none; /* Safari */
  -khtml-user-select: none; /* Konqueror HTML */
  -moz-user-select: none; /* Old versions of Firefox */
  -ms-user-select: none; /* Internet Explorer/Edge */
  user-select: none; /* Non-prefixed version, currently upported by Chrome, Edge, Opera and Firefox */
}
</style>
