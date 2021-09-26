
Simplest Example: 

```vue
<template>
    <vue-virtual-picklist
      :options="items"
      :value="selectedOption"
    >
    </vue-virtual-picklist>
</template>

<script>
import "../dist/vue-virtual-picklist.min.css"

export default {
  data: () => {
    return {
      selectedOption: {
        label: "b",
        value: "b",
        index: 1,
      },
      items: [
        { label: "a", value: "a" },
        { label: "b", value: "b" },
        { label: "c", value: "c" },
        { label: "d", value: "d" },
      ],
    };
  },
};
</script>
```

Enable and Disable picklist
```vue
<template>
    <div>
        <vue-virtual-picklist
        :options="items"
        v-model="selectedOption"
        :disabled="isDisabled"
        >
        </vue-virtual-picklist>
        <button @click="togglePicklist" style="margin-top: 10px">{{buttonLabel}}</button>
    </div>
</template>

<script>
export default {
    computed: {
        buttonLabel(){
            return this.isDisabled ? 'Enable' : 'Disable';
        }
    },
    data: () => {
        return {
        isDisabled: true,
        selectedOption: {
            label: "b",
            value: "b",
            index: 1,
        },
        items: [
            { label: "a", value: "a" },
            { label: "b", value: "b" },
            { label: "c", value: "c" },
            { label: "d", value: "d" }
        ],
        };
    },
    methods: {
        togglePicklist(){
            this.isDisabled = !this.isDisabled;
        }
    }
};
</script>
```

v-model 

```vue
<template>
    <div>
        <vue-virtual-picklist
            :options="items"
            v-model="selectedOption"
            >
        </vue-virtual-picklist>
        <div style="margin-top: 10px">
        {{ selectedOption }}
        </div>
    </div>
</template>

<script>
export default {
  data: () => {
    return {
      selectedOption: {
        label: "b",
        value: "b",
        index: 1,
      },
      items: [
        { label: "a", value: "a" },
        { label: "b", value: "b" },
        { label: "c", value: "c" },
        { label: "d", value: "d" },
      ],
    };
  },
};
</script>
```

Extra keys to each option 

```vue
<template>
    <div>
        <vue-virtual-picklist
            :options="items"
            v-model="selectedOption"
        >
        </vue-virtual-picklist>
        <div style="margin-top: 10px">
            {{ selectedOption }}
        </div>
    </div>
</template>

<script>
export default {
  data: () => {
    return {
      selectedOption: {
        label: "b",
        value: "b",
        index: 1,
      },
      items: [
        { label: "a", value: "a", customKey: "a" },
        { label: "b", value: "b", customKey: "b1" },
        { label: "c", value: "c", customKey: "c" },
        { label: "d", value: "d", customKey: "d" },
        { label: "b", value: "b", customKey: "b2" },
      ],
    };
  },
};
</script>
```

Hide Selected option

```vue
<template>
    <vue-virtual-picklist
      :options="items"
      v-model="selectedOption"
      hide-selected
    >
    </vue-virtual-picklist>
</template>

<script>
export default {
  data: () => {
    return {
      selectedOption: {
        label: "b",
        value: "b",
        index: 1,
      },
      items: [
        { label: "a", value: "a" },
        { label: "b", value: "b" },
        { label: "c", value: "c" },
        { label: "d", value: "d" },
      ],
    };
  },
};
</script>
```


Enable Search

```vue
<template>
    <div>
        <vue-virtual-picklist
            :options="items"
            v-model="selectedOption"
            enable-search
        >
        </vue-virtual-picklist>
        <div style="margin-top: 10px">
            {{ selectedOption }}
        </div>
    </div>
</template>

<script>
export default {
  data: () => {
    return {
      selectedOption: {
        label: "b",
        value: "b",
        index: 1,
      },
      items: [
        { label: "a", value: "a" },
        { label: "b", value: "b" },
        { label: "c", value: "c" },
        { label: "d", value: "d" },
        { label: "a", value: "a" },
        { label: "a", value: "a" },
        { label: "d", value: "d" },
        { label: "c", value: "c" },
        { label: "c", value: "c" },
        { label: "c", value: "c" },
      ],
    };
  },
};
</script>
```

Search using a different Key
```vue
<template>
    <vue-virtual-picklist
      :options="items"
      v-model="selectedOption"
      enable-search
      search-key="label"
    >
    </vue-virtual-picklist>
</template>

<script>
export default {
  data: () => {
    return {
      selectedOption: {
        label: "B",
        value: "b",
        index: 1,
      },
      items: [
        { label: "A", value: "a" },
        { label: "B", value: "b" },
        { label: "C", value: "c" },
        { label: "D", value: "d" }
      ],
    };
  },
};
</script>
```

Change search input placeholder
```vue
<template>
    <vue-virtual-picklist
      :options="items"
      v-model="selectedOption"
      enable-search
      search-input-placeholder="type anything to filter"
    >
    </vue-virtual-picklist>
</template>

<script>
export default {
  data: () => {
    return {
      selectedOption: {
        label: "B",
        value: "b",
        index: 1,
      },
      items: [
        { label: "A", value: "a" },
        { label: "B", value: "b" },
        { label: "C", value: "c" },
        { label: "D", value: "d" }
      ],
    };
  },
};
</script>
```

Change picklist placeholder with property
```vue
<template>
    <vue-virtual-picklist
      :options="items"
      placeholder="custom placeholder"
    >
    </vue-virtual-picklist>
</template>

<script>
export default {
  data: () => {
    return {
      items: [
        { label: "a", value: "a" },
        { label: "A", value: "A" },
        { label: "b", value: "b" },
        { label: "B", value: "B" },
        { label: "c", value: "c" },
        { label: "C", value: "C" },
        { label: "d", value: "d" },
        { label: "D", value: "D" }
      ],
    };
  },
};
</script>
```

`placeholder` slot

```vue
<template>
    <vue-virtual-picklist
      :options="items"
      placeholder="custom placeholder"
    >
        <template #placeholder="{ placeholder }">
            <div class="custom-placeholder">{{ placeholder }}</div>
        </template>
    </vue-virtual-picklist>
</template>

<script>
export default {
  data: () => {
    return {
      items: [
        { label: "a", value: "a" },
        { label: "A", value: "A" },
        { label: "b", value: "b" },
        { label: "B", value: "B" },
        { label: "c", value: "c" },
        { label: "C", value: "C" },
        { label: "d", value: "d" },
        { label: "D", value: "D" }
      ],
    };
  },
};
</script>
<style>
.custom-placeholder {
    color: red;
    font-weight: bold;
}
</style>
```

`no-options` slot

```vue
<template>
    <vue-virtual-picklist
      :options="items"
      enable-search
      no-options-available-text="Your search returned 0 results"
    >
        <template #no-options="{ text }">
            <div class="custom-no-options-available-text">{{ text }}</div>
        </template>
    </vue-virtual-picklist>
</template>

<script>
export default {
  data: () => {
    return {
      items: [
        { label: "a", value: "a" },
        { label: "A", value: "A" },
        { label: "b", value: "b" },
        { label: "B", value: "B" },
        { label: "c", value: "c" },
        { label: "C", value: "C" },
        { label: "d", value: "d" },
        { label: "D", value: "D" }
      ],
    };
  },
};
</script>
<style>
.custom-no-options-available-text {
    color: red;
    font-weight: bold;
}
</style>
```

`option` slot

```vue
<template>
    <vue-virtual-picklist
      :options="items"
      v-model="selectedOption"
      enable-search
    >
      <template #option="{ option }">
        <div class="option">
          Label: {{ option.label }} Index: {{ option.index }} Original Index:
          {{ option.originalListIndex }}
        </div>
      </template>
    </vue-virtual-picklist>
</template>

<script>
export default {
  data: () => {
    return {
      selectedOption: {
        label: "b",
        value: "b",
        index: 1,
      },
      items: [
        { label: "a", value: "a" },
        { label: "b", value: "b" },
        { label: "c", value: "c" },
        { label: "d", value: "d" },
        { label: "a", value: "a" },
      ],
    };
  },
};
</script>
<style>
.option:hover{
    background-color: pink;
}
</style>
```

Visible Options
```vue
<template>
    <vue-virtual-picklist
      :options="items"
      v-model="selectedOption"
      enable-search
      :visible-options="10"
    >
    </vue-virtual-picklist>
</template>

<script>
export default {
  data: () => {
    return {
      selectedOption: {
        label: "b",
        value: "b",
        index: 1,
      },
      items: [
        { label: "a", value: "a" },
        { label: "b", value: "b" },
        { label: "c", value: "c" },
        { label: "d", value: "d" },
        { label: "e", value: "e" },
        { label: "f", value: "f" },
        { label: "g", value: "g" },
        { label: "h", value: "h" },
        { label: "i", value: "i" },
        { label: "j", value: "j" },
        { label: "k", value: "k" },
        { label: "l", value: "l" },
        { label: "m", value: "m" },
        { label: "n", value: "n" },
        { label: "o", value: "o" },
      ],
    };
  },
};
</script>

```

Set the Height of each Option
```vue
<template>
    <vue-virtual-picklist
      :options="items"
      v-model="selectedOption"
      enable-search
      :option-height="40"
    >
    </vue-virtual-picklist>
</template>

<script>
export default {
  data: () => {
    return {
      selectedOption: {
        label: "b",
        value: "b",
        index: 1,
      },
      items: [
        { label: "a", value: "a" },
        { label: "b", value: "b" },
        { label: "c", value: "c" },
        { label: "d", value: "d" },
        { label: "e", value: "e" },
        { label: "f", value: "f" },
        { label: "g", value: "g" },
        { label: "h", value: "h" },
        { label: "i", value: "i" },
        { label: "j", value: "j" },
        { label: "k", value: "k" },
        { label: "l", value: "l" },
        { label: "m", value: "m" },
        { label: "n", value: "n" },
        { label: "o", value: "o" },
      ],
    };
  },
};
</script>

```

Set the Height of each option, and the Number of Visible options
```vue
<template>
    <vue-virtual-picklist
      :options="items"
      v-model="selectedOption"
      enable-search
      :option-height="40"
      :visible-options="10"
    >
    </vue-virtual-picklist>
</template>

<script>
export default {
  data: () => {
    return {
      selectedOption: {
        label: "b",
        value: "b",
        index: 1,
      },
      items: [
        { label: "a", value: "a" },
        { label: "b", value: "b" },
        { label: "c", value: "c" },
        { label: "d", value: "d" },
        { label: "e", value: "e" },
        { label: "f", value: "f" },
        { label: "g", value: "g" },
        { label: "h", value: "h" },
        { label: "i", value: "i" },
        { label: "j", value: "j" },
        { label: "k", value: "k" },
        { label: "l", value: "l" },
        { label: "m", value: "m" },
        { label: "n", value: "n" },
        { label: "o", value: "o" },
      ],
    };
  },
};
</script>
```