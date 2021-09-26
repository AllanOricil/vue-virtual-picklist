
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

Example with thousands of options

```vue
<template>
    <div>
        <vue-virtual-picklist
            :options="items"
            v-model="selectedOption"
            :visible-options="5"
        >
        </vue-virtual-picklist>
        <div style="margin-top: 10px">
        {{ selectedOption }}
        </div>
    </div>
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
      items:[{label:"a",value:"a"},{label:"b",value:"b"},{label:"c",value:"c"},{label:"d",value:"d"},{label:"e",value:"e"},{label:"f",value:"f"},{label:"g",value:"g"},{label:"h",value:"h"},{label:"k",value:"k"},{label:"l",value:"l"},{label:"m",value:"m"},{label:"n",value:"n"},{label:"o",value:"o"},{label:"p",value:"p"},{label:"q",value:"q"},{label:"r",value:"r"},{label:"s",value:"s"},{label:"t",value:"t"},{label:"u",value:"u"},{label:"v",value:"v"},{label:"a",value:"a"},{label:"b",value:"b"},{label:"c",value:"c"},{label:"d",value:"d"},{label:"e",value:"e"},{label:"f",value:"f"},{label:"g",value:"g"},{label:"h",value:"h"},{label:"k",value:"k"},{label:"l",value:"l"},{label:"m",value:"m"},{label:"n",value:"n"},{label:"o",value:"o"},{label:"p",value:"p"},{label:"q",value:"q"},{label:"r",value:"r"},{label:"s",value:"s"},{label:"t",value:"t"},{label:"u",value:"u"},{label:"v",value:"v"},{label:"a",value:"a"},{label:"b",value:"b"},{label:"c",value:"c"},{label:"d",value:"d"},{label:"e",value:"e"},{label:"f",value:"f"},{label:"g",value:"g"},{label:"h",value:"h"},{label:"k",value:"k"},{label:"l",value:"l"},{label:"m",value:"m"},{label:"n",value:"n"},{label:"o",value:"o"},{label:"p",value:"p"},{label:"q",value:"q"},{label:"r",value:"r"},{label:"s",value:"s"},{label:"t",value:"t"},{label:"u",value:"u"},{label:"v",value:"v"},{label:"a",value:"a"},{label:"b",value:"b"},{label:"c",value:"c"},{label:"d",value:"d"},{label:"e",value:"e"},{label:"f",value:"f"},{label:"g",value:"g"},{label:"h",value:"h"},{label:"k",value:"k"},{label:"l",value:"l"},{label:"m",value:"m"},{label:"n",value:"n"},{label:"o",value:"o"},{label:"p",value:"p"},{label:"q",value:"q"},{label:"r",value:"r"},{label:"s",value:"s"},{label:"t",value:"t"},{label:"u",value:"u"},{label:"v",value:"v"},{label:"a",value:"a"},{label:"b",value:"b"},{label:"c",value:"c"},{label:"d",value:"d"},{label:"e",value:"e"},{label:"f",value:"f"},{label:"g",value:"g"},{label:"h",value:"h"},{label:"k",value:"k"},{label:"l",value:"l"},{label:"m",value:"m"},{label:"n",value:"n"},{label:"o",value:"o"},{label:"p",value:"p"},{label:"q",value:"q"},{label:"r",value:"r"},{label:"s",value:"s"},{label:"t",value:"t"},{label:"u",value:"u"},{label:"v",value:"v"},{label:"a",value:"a"},{label:"b",value:"b"},{label:"c",value:"c"},{label:"d",value:"d"},{label:"e",value:"e"},{label:"f",value:"f"},{label:"g",value:"g"},{label:"h",value:"h"},{label:"k",value:"k"},{label:"l",value:"l"},{label:"m",value:"m"},{label:"n",value:"n"},{label:"o",value:"o"},{label:"p",value:"p"},{label:"q",value:"q"},{label:"r",value:"r"},{label:"s",value:"s"},{label:"t",value:"t"},{label:"u",value:"u"},{label:"v",value:"v"},{label:"a",value:"a"},{label:"b",value:"b"},{label:"c",value:"c"},{label:"d",value:"d"},{label:"e",value:"e"},{label:"f",value:"f"},{label:"g",value:"g"},{label:"h",value:"h"},{label:"k",value:"k"},{label:"l",value:"l"},{label:"m",value:"m"},{label:"n",value:"n"},{label:"o",value:"o"},{label:"p",value:"p"},{label:"q",value:"q"},{label:"r",value:"r"},{label:"s",value:"s"},{label:"t",value:"t"},{label:"u",value:"u"},{label:"v",value:"v"},{label:"a",value:"a"},{label:"b",value:"b"},{label:"c",value:"c"},{label:"d",value:"d"},{label:"e",value:"e"},{label:"f",value:"f"},{label:"g",value:"g"},{label:"h",value:"h"},{label:"k",value:"k"},{label:"l",value:"l"},{label:"m",value:"m"},{label:"n",value:"n"},{label:"o",value:"o"},{label:"p",value:"p"},{label:"q",value:"q"},{label:"r",value:"r"},{label:"s",value:"s"},{label:"t",value:"t"},{label:"u",value:"u"},{label:"v",value:"v"},{label:"a",value:"a"},{label:"b",value:"b"},{label:"c",value:"c"},{label:"d",value:"d"},{label:"e",value:"e"},{label:"f",value:"f"},{label:"g",value:"g"},{label:"h",value:"h"},{label:"k",value:"k"},{label:"l",value:"l"},{label:"m",value:"m"},{label:"n",value:"n"},{label:"o",value:"o"},{label:"p",value:"p"},{label:"q",value:"q"},{label:"r",value:"r"},{label:"s",value:"s"},{label:"t",value:"t"},{label:"u",value:"u"},{label:"v",value:"v"},{label:"a",value:"a"},{label:"b",value:"b"},{label:"c",value:"c"},{label:"d",value:"d"},{label:"e",value:"e"},{label:"f",value:"f"},{label:"g",value:"g"},{label:"h",value:"h"},{label:"k",value:"k"},{label:"l",value:"l"},{label:"m",value:"m"},{label:"n",value:"n"},{label:"o",value:"o"},{label:"p",value:"p"},{label:"q",value:"q"},{label:"r",value:"r"},{label:"s",value:"s"},{label:"t",value:"t"},{label:"u",value:"u"},{label:"v",value:"v"},{label:"a",value:"a"},{label:"b",value:"b"},{label:"c",value:"c"},{label:"d",value:"d"},{label:"e",value:"e"},{label:"f",value:"f"},{label:"g",value:"g"},{label:"h",value:"h"},{label:"k",value:"k"},{label:"l",value:"l"},{label:"m",value:"m"},{label:"n",value:"n"},{label:"o",value:"o"},{label:"p",value:"p"},{label:"q",value:"q"},{label:"r",value:"r"},{label:"s",value:"s"},{label:"t",value:"t"},{label:"u",value:"u"},{label:"v",value:"v"},{label:"a",value:"a"},{label:"b",value:"b"},{label:"c",value:"c"},{label:"d",value:"d"},{label:"e",value:"e"},{label:"f",value:"f"},{label:"g",value:"g"},{label:"h",value:"h"},{label:"k",value:"k"},{label:"l",value:"l"},{label:"m",value:"m"},{label:"n",value:"n"},{label:"o",value:"o"},{label:"p",value:"p"},{label:"q",value:"q"},{label:"r",value:"r"},{label:"s",value:"s"},{label:"t",value:"t"},{label:"u",value:"u"},{label:"v",value:"v"},{label:"a",value:"a"},{label:"b",value:"b"},{label:"c",value:"c"},{label:"d",value:"d"},{label:"e",value:"e"},{label:"f",value:"f"},{label:"g",value:"g"},{label:"h",value:"h"},{label:"k",value:"k"},{label:"l",value:"l"},{label:"m",value:"m"},{label:"n",value:"n"},{label:"o",value:"o"},{label:"p",value:"p"},{label:"q",value:"q"},{label:"r",value:"r"},{label:"s",value:"s"},{label:"t",value:"t"},{label:"u",value:"u"},{label:"v",value:"v"},{label:"a",value:"a"},{label:"b",value:"b"},{label:"c",value:"c"},{label:"d",value:"d"},{label:"e",value:"e"},{label:"f",value:"f"},{label:"g",value:"g"},{label:"h",value:"h"},{label:"k",value:"k"},{label:"l",value:"l"},{label:"m",value:"m"},{label:"n",value:"n"},{label:"o",value:"o"},{label:"p",value:"p"},{label:"q",value:"q"},{label:"r",value:"r"},{label:"s",value:"s"},{label:"t",value:"t"},{label:"u",value:"u"},{label:"v",value:"v"},{label:"a",value:"a"},{label:"b",value:"b"},{label:"c",value:"c"},{label:"d",value:"d"},{label:"e",value:"e"},{label:"f",value:"f"},{label:"g",value:"g"},{label:"h",value:"h"},{label:"k",value:"k"},{label:"l",value:"l"},{label:"m",value:"m"},{label:"n",value:"n"},{label:"o",value:"o"},{label:"p",value:"p"},{label:"q",value:"q"},{label:"r",value:"r"},{label:"s",value:"s"},{label:"t",value:"t"},{label:"u",value:"u"},{label:"v",value:"v"},{label:"a",value:"a"},{label:"b",value:"b"},{label:"c",value:"c"},{label:"d",value:"d"},{label:"e",value:"e"},{label:"f",value:"f"},{label:"g",value:"g"},{label:"h",value:"h"},{label:"k",value:"k"},{label:"l",value:"l"},{label:"m",value:"m"},{label:"n",value:"n"},{label:"o",value:"o"},{label:"p",value:"p"},{label:"q",value:"q"},{label:"r",value:"r"},{label:"s",value:"s"},{label:"t",value:"t"},{label:"u",value:"u"},{label:"v",value:"v"},{label:"a",value:"a"},{label:"b",value:"b"},{label:"c",value:"c"},{label:"d",value:"d"},{label:"e",value:"e"},{label:"f",value:"f"},{label:"g",value:"g"},{label:"h",value:"h"},{label:"k",value:"k"},{label:"l",value:"l"},{label:"m",value:"m"},{label:"n",value:"n"},{label:"o",value:"o"},{label:"p",value:"p"},{label:"q",value:"q"},{label:"r",value:"r"},{label:"s",value:"s"},{label:"t",value:"t"},{label:"u",value:"u"},{label:"v",value:"v"},{label:"a",value:"a"},{label:"b",value:"b"},{label:"c",value:"c"},{label:"d",value:"d"},{label:"e",value:"e"},{label:"f",value:"f"},{label:"g",value:"g"},{label:"h",value:"h"},{label:"k",value:"k"},{label:"l",value:"l"},{label:"m",value:"m"},{label:"n",value:"n"},{label:"o",value:"o"},{label:"p",value:"p"},{label:"q",value:"q"},{label:"r",value:"r"},{label:"s",value:"s"},{label:"t",value:"t"},{label:"u",value:"u"},{label:"v",value:"v"},{label:"a",value:"a"},{label:"b",value:"b"},{label:"c",value:"c"},{label:"d",value:"d"},{label:"e",value:"e"},{label:"f",value:"f"},{label:"g",value:"g"},{label:"h",value:"h"},{label:"k",value:"k"},{label:"l",value:"l"},{label:"m",value:"m"},{label:"n",value:"n"},{label:"o",value:"o"},{label:"p",value:"p"},{label:"q",value:"q"},{label:"r",value:"r"},{label:"s",value:"s"},{label:"t",value:"t"},{label:"u",value:"u"},{label:"v",value:"v"},{label:"a",value:"a"},{label:"b",value:"b"},{label:"c",value:"c"},{label:"d",value:"d"},{label:"e",value:"e"},{label:"f",value:"f"},{label:"g",value:"g"},{label:"h",value:"h"},{label:"k",value:"k"},{label:"l",value:"l"},{label:"m",value:"m"},{label:"n",value:"n"},{label:"o",value:"o"},{label:"p",value:"p"},{label:"q",value:"q"},{label:"r",value:"r"},{label:"s",value:"s"},{label:"t",value:"t"},{label:"u",value:"u"},{label:"v",value:"v"},{label:"a",value:"a"},{label:"b",value:"b"},{label:"c",value:"c"},{label:"d",value:"d"},{label:"e",value:"e"},{label:"f",value:"f"},{label:"g",value:"g"},{label:"h",value:"h"},{label:"k",value:"k"},{label:"l",value:"l"},{label:"m",value:"m"},{label:"n",value:"n"},{label:"o",value:"o"},{label:"p",value:"p"},{label:"q",value:"q"},{label:"r",value:"r"},{label:"s",value:"s"},{label:"t",value:"t"},{label:"u",value:"u"},{label:"v",value:"v"},{label:"a",value:"a"},{label:"b",value:"b"},{label:"c",value:"c"},{label:"d",value:"d"},{label:"e",value:"e"},{label:"f",value:"f"},{label:"g",value:"g"},{label:"h",value:"h"},{label:"k",value:"k"},{label:"l",value:"l"},{label:"m",value:"m"},{label:"n",value:"n"},{label:"o",value:"o"},{label:"p",value:"p"},{label:"q",value:"q"},{label:"r",value:"r"},{label:"s",value:"s"},{label:"t",value:"t"},{label:"u",value:"u"},{label:"v",value:"v"},{label:"a",value:"a"},{label:"b",value:"b"},{label:"c",value:"c"},{label:"d",value:"d"},{label:"e",value:"e"},{label:"f",value:"f"},{label:"g",value:"g"},{label:"h",value:"h"},{label:"k",value:"k"},{label:"l",value:"l"},{label:"m",value:"m"},{label:"n",value:"n"},{label:"o",value:"o"},{label:"p",value:"p"},{label:"q",value:"q"},{label:"r",value:"r"},{label:"s",value:"s"},{label:"t",value:"t"},{label:"u",value:"u"},{label:"v",value:"v"},{label:"a",value:"a"},{label:"b",value:"b"},{label:"c",value:"c"},{label:"d",value:"d"},{label:"e",value:"e"},{label:"f",value:"f"},{label:"g",value:"g"},{label:"h",value:"h"},{label:"k",value:"k"},{label:"l",value:"l"},{label:"m",value:"m"},{label:"n",value:"n"},{label:"o",value:"o"},{label:"p",value:"p"},{label:"q",value:"q"},{label:"r",value:"r"},{label:"s",value:"s"},{label:"t",value:"t"},{label:"u",value:"u"},{label:"v",value:"v"},{label:"a",value:"a"},{label:"b",value:"b"},{label:"c",value:"c"},{label:"d",value:"d"},{label:"e",value:"e"},{label:"f",value:"f"},{label:"g",value:"g"},{label:"h",value:"h"},{label:"k",value:"k"},{label:"l",value:"l"},{label:"m",value:"m"},{label:"n",value:"n"},{label:"o",value:"o"},{label:"p",value:"p"},{label:"q",value:"q"},{label:"r",value:"r"},{label:"s",value:"s"},{label:"t",value:"t"},{label:"u",value:"u"},{label:"v",value:"v"},{label:"a",value:"a"},{label:"b",value:"b"},{label:"c",value:"c"},{label:"d",value:"d"},{label:"e",value:"e"},{label:"f",value:"f"},{label:"g",value:"g"},{label:"h",value:"h"},{label:"k",value:"k"},{label:"l",value:"l"},{label:"m",value:"m"},{label:"n",value:"n"},{label:"o",value:"o"},{label:"p",value:"p"},{label:"q",value:"q"},{label:"r",value:"r"},{label:"s",value:"s"},{label:"t",value:"t"},{label:"u",value:"u"},{label:"v",value:"v"},{label:"a",value:"a"},{label:"b",value:"b"},{label:"c",value:"c"},{label:"d",value:"d"},{label:"e",value:"e"},{label:"f",value:"f"},{label:"g",value:"g"},{label:"h",value:"h"},{label:"k",value:"k"},{label:"l",value:"l"},{label:"m",value:"m"},{label:"n",value:"n"},{label:"o",value:"o"},{label:"p",value:"p"},{label:"q",value:"q"},{label:"r",value:"r"},{label:"s",value:"s"},{label:"t",value:"t"},{label:"u",value:"u"},{label:"v",value:"v"},{label:"a",value:"a"},{label:"b",value:"b"},{label:"c",value:"c"},{label:"d",value:"d"},{label:"e",value:"e"},{label:"f",value:"f"},{label:"g",value:"g"},{label:"h",value:"h"},{label:"k",value:"k"},{label:"l",value:"l"},{label:"m",value:"m"},{label:"n",value:"n"},{label:"o",value:"o"},{label:"p",value:"p"},{label:"q",value:"q"},{label:"r",value:"r"},{label:"s",value:"s"},{label:"t",value:"t"},{label:"u",value:"u"},{label:"v",value:"v"},{label:"a",value:"a"},{label:"b",value:"b"},{label:"c",value:"c"},{label:"d",value:"d"},{label:"e",value:"e"},{label:"f",value:"f"},{label:"g",value:"g"},{label:"h",value:"h"},{label:"k",value:"k"},{label:"l",value:"l"},{label:"m",value:"m"},{label:"n",value:"n"},{label:"o",value:"o"},{label:"p",value:"p"},{label:"q",value:"q"},{label:"r",value:"r"},{label:"s",value:"s"},{label:"t",value:"t"},{label:"u",value:"u"},{label:"v",value:"v"},{label:"a",value:"a"},{label:"b",value:"b"},{label:"c",value:"c"},{label:"d",value:"d"},{label:"e",value:"e"},{label:"f",value:"f"},{label:"g",value:"g"},{label:"h",value:"h"},{label:"k",value:"k"},{label:"l",value:"l"},{label:"m",value:"m"},{label:"n",value:"n"},{label:"o",value:"o"},{label:"p",value:"p"},{label:"q",value:"q"},{label:"r",value:"r"},{label:"s",value:"s"},{label:"t",value:"t"},{label:"u",value:"u"},{label:"v",value:"v"},{label:"a",value:"a"},{label:"b",value:"b"},{label:"c",value:"c"},{label:"d",value:"d"},{label:"e",value:"e"},{label:"f",value:"f"},{label:"g",value:"g"},{label:"h",value:"h"},{label:"k",value:"k"},{label:"l",value:"l"},{label:"m",value:"m"},{label:"n",value:"n"},{label:"o",value:"o"},{label:"p",value:"p"},{label:"q",value:"q"},{label:"r",value:"r"},{label:"s",value:"s"},{label:"t",value:"t"},{label:"u",value:"u"},{label:"v",value:"v"},{label:"a",value:"a"},{label:"b",value:"b"},{label:"c",value:"c"},{label:"d",value:"d"},{label:"e",value:"e"},{label:"f",value:"f"},{label:"g",value:"g"},{label:"h",value:"h"},{label:"k",value:"k"},{label:"l",value:"l"},{label:"m",value:"m"},{label:"n",value:"n"},{label:"o",value:"o"},{label:"p",value:"p"},{label:"q",value:"q"},{label:"r",value:"r"},{label:"s",value:"s"},{label:"t",value:"t"},{label:"u",value:"u"},{label:"v",value:"v"},{label:"a",value:"a"},{label:"b",value:"b"},{label:"c",value:"c"},{label:"d",value:"d"},{label:"e",value:"e"},{label:"f",value:"f"},{label:"g",value:"g"},{label:"h",value:"h"},{label:"k",value:"k"},{label:"l",value:"l"},{label:"m",value:"m"},{label:"n",value:"n"},{label:"o",value:"o"},{label:"p",value:"p"},{label:"q",value:"q"},{label:"r",value:"r"},{label:"s",value:"s"},{label:"t",value:"t"},{label:"u",value:"u"},{label:"v",value:"v"},{label:"a",value:"a"},{label:"b",value:"b"},{label:"c",value:"c"},{label:"d",value:"d"},{label:"e",value:"e"},{label:"f",value:"f"},{label:"g",value:"g"},{label:"h",value:"h"},{label:"k",value:"k"},{label:"l",value:"l"},{label:"m",value:"m"},{label:"n",value:"n"},{label:"o",value:"o"},{label:"p",value:"p"},{label:"q",value:"q"},{label:"r",value:"r"},{label:"s",value:"s"},{label:"t",value:"t"},{label:"u",value:"u"},{label:"v",value:"v"},{label:"a",value:"a"},{label:"b",value:"b"},{label:"c",value:"c"},{label:"d",value:"d"},{label:"e",value:"e"},{label:"f",value:"f"},{label:"g",value:"g"},{label:"h",value:"h"},{label:"k",value:"k"},{label:"l",value:"l"},{label:"m",value:"m"},{label:"n",value:"n"},{label:"o",value:"o"},{label:"p",value:"p"},{label:"q",value:"q"},{label:"r",value:"r"},{label:"s",value:"s"},{label:"t",value:"t"},{label:"u",value:"u"},{label:"v",value:"v"},{label:"a",value:"a"},{label:"b",value:"b"},{label:"c",value:"c"},{label:"d",value:"d"},{label:"e",value:"e"},{label:"f",value:"f"},{label:"g",value:"g"},{label:"h",value:"h"},{label:"k",value:"k"},{label:"l",value:"l"},{label:"m",value:"m"},{label:"n",value:"n"},{label:"o",value:"o"},{label:"p",value:"p"},{label:"q",value:"q"},{label:"r",value:"r"},{label:"s",value:"s"},{label:"t",value:"t"},{label:"u",value:"u"},{label:"v",value:"v"},{label:"a",value:"a"},{label:"b",value:"b"},{label:"c",value:"c"},{label:"d",value:"d"},{label:"e",value:"e"},{label:"f",value:"f"},{label:"g",value:"g"},{label:"h",value:"h"},{label:"k",value:"k"},{label:"l",value:"l"},{label:"m",value:"m"},{label:"n",value:"n"},{label:"o",value:"o"},{label:"p",value:"p"},{label:"q",value:"q"},{label:"r",value:"r"},{label:"s",value:"s"},{label:"t",value:"t"},{label:"u",value:"u"},{label:"v",value:"v"},{label:"a",value:"a"},{label:"b",value:"b"},{label:"c",value:"c"},{label:"d",value:"d"},{label:"e",value:"e"},{label:"f",value:"f"},{label:"g",value:"g"},{label:"h",value:"h"},{label:"k",value:"k"},{label:"l",value:"l"},{label:"m",value:"m"},{label:"n",value:"n"},{label:"o",value:"o"},{label:"p",value:"p"},{label:"q",value:"q"},{label:"r",value:"r"},{label:"s",value:"s"},{label:"t",value:"t"},{label:"u",value:"u"},{label:"v",value:"v"},{label:"a",value:"a"},{label:"b",value:"b"},{label:"c",value:"c"},{label:"d",value:"d"},{label:"e",value:"e"},{label:"f",value:"f"},{label:"g",value:"g"},{label:"h",value:"h"},{label:"k",value:"k"},{label:"l",value:"l"},{label:"m",value:"m"},{label:"n",value:"n"},{label:"o",value:"o"},{label:"p",value:"p"},{label:"q",value:"q"},{label:"r",value:"r"},{label:"s",value:"s"},{label:"t",value:"t"},{label:"u",value:"u"},{label:"v",value:"v"},{label:"a",value:"a"},{label:"b",value:"b"},{label:"c",value:"c"},{label:"d",value:"d"},{label:"e",value:"e"},{label:"f",value:"f"},{label:"g",value:"g"},{label:"h",value:"h"},{label:"k",value:"k"},{label:"l",value:"l"},{label:"m",value:"m"},{label:"n",value:"n"},{label:"o",value:"o"},{label:"p",value:"p"},{label:"q",value:"q"},{label:"r",value:"r"},{label:"s",value:"s"},{label:"t",value:"t"},{label:"u",value:"u"},{label:"v",value:"v"},{label:"a",value:"a"},{label:"b",value:"b"},{label:"c",value:"c"},{label:"d",value:"d"},{label:"e",value:"e"},{label:"f",value:"f"},{label:"g",value:"g"},{label:"h",value:"h"},{label:"k",value:"k"},{label:"l",value:"l"},{label:"m",value:"m"},{label:"n",value:"n"},{label:"o",value:"o"},{label:"p",value:"p"},{label:"q",value:"q"},{label:"r",value:"r"},{label:"s",value:"s"},{label:"t",value:"t"},{label:"u",value:"u"},{label:"v",value:"v"},{label:"a",value:"a"},{label:"b",value:"b"},{label:"c",value:"c"},{label:"d",value:"d"},{label:"e",value:"e"},{label:"f",value:"f"},{label:"g",value:"g"},{label:"h",value:"h"},{label:"k",value:"k"},{label:"l",value:"l"},{label:"m",value:"m"},{label:"n",value:"n"},{label:"o",value:"o"},{label:"p",value:"p"},{label:"q",value:"q"},{label:"r",value:"r"},{label:"s",value:"s"},{label:"t",value:"t"},{label:"u",value:"u"},{label:"v",value:"v"},{label:"a",value:"a"},{label:"b",value:"b"},{label:"c",value:"c"},{label:"d",value:"d"},{label:"e",value:"e"},{label:"f",value:"f"},{label:"g",value:"g"},{label:"h",value:"h"},{label:"k",value:"k"},{label:"l",value:"l"},{label:"m",value:"m"},{label:"n",value:"n"},{label:"o",value:"o"},{label:"p",value:"p"},{label:"q",value:"q"},{label:"r",value:"r"},{label:"s",value:"s"},{label:"t",value:"t"},{label:"u",value:"u"},{label:"v",value:"v"},{label:"a",value:"a"},{label:"b",value:"b"},{label:"c",value:"c"},{label:"d",value:"d"},{label:"e",value:"e"},{label:"f",value:"f"},{label:"g",value:"g"},{label:"h",value:"h"},{label:"k",value:"k"},{label:"l",value:"l"},{label:"m",value:"m"},{label:"n",value:"n"},{label:"o",value:"o"},{label:"p",value:"p"},{label:"q",value:"q"},{label:"r",value:"r"},{label:"s",value:"s"},{label:"t",value:"t"},{label:"u",value:"u"},{label:"v",value:"v"},{label:"a",value:"a"},{label:"b",value:"b"},{label:"c",value:"c"},{label:"d",value:"d"},{label:"e",value:"e"},{label:"f",value:"f"},{label:"g",value:"g"},{label:"h",value:"h"},{label:"k",value:"k"},{label:"l",value:"l"},{label:"m",value:"m"},{label:"n",value:"n"},{label:"o",value:"o"},{label:"p",value:"p"},{label:"q",value:"q"},{label:"r",value:"r"},{label:"s",value:"s"},{label:"t",value:"t"},{label:"u",value:"u"},{label:"v",value:"v"},{label:"a",value:"a"},{label:"b",value:"b"},{label:"c",value:"c"},{label:"d",value:"d"},{label:"e",value:"e"},{label:"f",value:"f"},{label:"g",value:"g"},{label:"h",value:"h"},{label:"k",value:"k"},{label:"l",value:"l"},{label:"m",value:"m"},{label:"n",value:"n"},{label:"o",value:"o"},{label:"p",value:"p"},{label:"q",value:"q"},{label:"r",value:"r"},{label:"s",value:"s"},{label:"t",value:"t"},{label:"u",value:"u"},{label:"v",value:"v"},{label:"a",value:"a"},{label:"b",value:"b"},{label:"c",value:"c"},{label:"d",value:"d"},{label:"e",value:"e"},{label:"f",value:"f"},{label:"g",value:"g"},{label:"h",value:"h"},{label:"k",value:"k"},{label:"l",value:"l"},{label:"m",value:"m"},{label:"n",value:"n"},{label:"o",value:"o"},{label:"p",value:"p"},{label:"q",value:"q"},{label:"r",value:"r"},{label:"s",value:"s"},{label:"t",value:"t"},{label:"u",value:"u"},{label:"v",value:"v"},{label:"a",value:"a"},{label:"b",value:"b"},{label:"c",value:"c"},{label:"d",value:"d"},{label:"e",value:"e"},{label:"f",value:"f"},{label:"g",value:"g"},{label:"h",value:"h"},{label:"k",value:"k"},{label:"l",value:"l"},{label:"m",value:"m"},{label:"n",value:"n"},{label:"o",value:"o"},{label:"p",value:"p"},{label:"q",value:"q"},{label:"r",value:"r"},{label:"s",value:"s"},{label:"t",value:"t"},{label:"u",value:"u"},{label:"v",value:"v"},{label:"a",value:"a"},{label:"b",value:"b"},{label:"c",value:"c"},{label:"d",value:"d"},{label:"e",value:"e"},{label:"f",value:"f"},{label:"g",value:"g"},{label:"h",value:"h"},{label:"k",value:"k"},{label:"l",value:"l"},{label:"m",value:"m"},{label:"n",value:"n"},{label:"o",value:"o"},{label:"p",value:"p"},{label:"q",value:"q"},{label:"r",value:"r"},{label:"s",value:"s"},{label:"t",value:"t"},{label:"u",value:"u"},{label:"v",value:"v"},{label:"a",value:"a"},{label:"b",value:"b"},{label:"c",value:"c"},{label:"d",value:"d"},{label:"e",value:"e"},{label:"f",value:"f"},{label:"g",value:"g"},{label:"h",value:"h"},{label:"k",value:"k"},{label:"l",value:"l"},{label:"m",value:"m"},{label:"n",value:"n"},{label:"o",value:"o"},{label:"p",value:"p"},{label:"q",value:"q"},{label:"r",value:"r"},{label:"s",value:"s"},{label:"t",value:"t"},{label:"u",value:"u"},{label:"v",value:"v"},{label:"a",value:"a"},{label:"b",value:"b"},{label:"c",value:"c"},{label:"d",value:"d"},{label:"e",value:"e"},{label:"f",value:"f"},{label:"g",value:"g"},{label:"h",value:"h"},{label:"k",value:"k"},{label:"l",value:"l"},{label:"m",value:"m"},{label:"n",value:"n"},{label:"o",value:"o"},{label:"p",value:"p"},{label:"q",value:"q"},{label:"r",value:"r"},{label:"s",value:"s"},{label:"t",value:"t"},{label:"u",value:"u"},{label:"v",value:"v"},{label:"a",value:"a"},{label:"b",value:"b"},{label:"c",value:"c"},{label:"d",value:"d"},{label:"e",value:"e"},{label:"f",value:"f"},{label:"g",value:"g"},{label:"h",value:"h"},{label:"k",value:"k"},{label:"l",value:"l"},{label:"m",value:"m"},{label:"n",value:"n"},{label:"o",value:"o"},{label:"p",value:"p"},{label:"q",value:"q"},{label:"r",value:"r"},{label:"s",value:"s"},{label:"t",value:"t"},{label:"u",value:"u"},{label:"v",value:"v"},{label:"a",value:"a"},{label:"b",value:"b"},{label:"c",value:"c"},{label:"d",value:"d"},{label:"e",value:"e"},{label:"f",value:"f"},{label:"g",value:"g"},{label:"h",value:"h"},{label:"k",value:"k"},{label:"l",value:"l"},{label:"m",value:"m"},{label:"n",value:"n"},{label:"o",value:"o"},{label:"p",value:"p"},{label:"q",value:"q"},{label:"r",value:"r"},{label:"s",value:"s"},{label:"t",value:"t"},{label:"u",value:"u"},{label:"v",value:"v"},{label:"a",value:"a"},{label:"b",value:"b"},{label:"c",value:"c"},{label:"d",value:"d"},{label:"e",value:"e"},{label:"f",value:"f"},{label:"g",value:"g"},{label:"h",value:"h"},{label:"k",value:"k"},{label:"l",value:"l"},{label:"m",value:"m"},{label:"n",value:"n"},{label:"o",value:"o"},{label:"p",value:"p"},{label:"q",value:"q"},{label:"r",value:"r"},{label:"s",value:"s"},{label:"t",value:"t"},{label:"u",value:"u"},{label:"v",value:"v"},{label:"a",value:"a"},{label:"b",value:"b"},{label:"c",value:"c"},{label:"d",value:"d"},{label:"e",value:"e"},{label:"f",value:"f"},{label:"g",value:"g"},{label:"h",value:"h"},{label:"k",value:"k"},{label:"l",value:"l"},{label:"m",value:"m"},{label:"n",value:"n"},{label:"o",value:"o"},{label:"p",value:"p"},{label:"q",value:"q"},{label:"r",value:"r"},{label:"s",value:"s"},{label:"t",value:"t"},{label:"u",value:"u"},{label:"v",value:"v"},{label:"a",value:"a"},{label:"b",value:"b"},{label:"c",value:"c"},{label:"d",value:"d"},{label:"e",value:"e"},{label:"f",value:"f"},{label:"g",value:"g"},{label:"h",value:"h"},{label:"k",value:"k"},{label:"l",value:"l"},{label:"m",value:"m"},{label:"n",value:"n"},{label:"o",value:"o"},{label:"p",value:"p"},{label:"q",value:"q"},{label:"r",value:"r"},{label:"s",value:"s"},{label:"t",value:"t"},{label:"u",value:"u"},{label:"v",value:"v"},{label:"a",value:"a"},{label:"b",value:"b"},{label:"c",value:"c"},{label:"d",value:"d"},{label:"e",value:"e"},{label:"f",value:"f"},{label:"g",value:"g"},{label:"h",value:"h"},{label:"k",value:"k"},{label:"l",value:"l"},{label:"m",value:"m"},{label:"n",value:"n"},{label:"o",value:"o"},{label:"p",value:"p"},{label:"q",value:"q"},{label:"r",value:"r"},{label:"s",value:"s"},{label:"t",value:"t"},{label:"u",value:"u"},{label:"v",value:"v"},{label:"a",value:"a"},{label:"b",value:"b"},{label:"c",value:"c"},{label:"d",value:"d"},{label:"e",value:"e"},{label:"f",value:"f"},{label:"g",value:"g"},{label:"h",value:"h"},{label:"k",value:"k"},{label:"l",value:"l"},{label:"m",value:"m"},{label:"n",value:"n"},{label:"o",value:"o"},{label:"p",value:"p"},{label:"q",value:"q"},{label:"r",value:"r"},{label:"s",value:"s"},{label:"t",value:"t"},{label:"u",value:"u"},{label:"v",value:"v"},{label:"a",value:"a"},{label:"b",value:"b"},{label:"c",value:"c"},{label:"d",value:"d"},{label:"e",value:"e"},{label:"f",value:"f"},{label:"g",value:"g"},{label:"h",value:"h"},{label:"k",value:"k"},{label:"l",value:"l"},{label:"m",value:"m"},{label:"n",value:"n"},{label:"o",value:"o"},{label:"p",value:"p"},{label:"q",value:"q"},{label:"r",value:"r"},{label:"s",value:"s"},{label:"t",value:"t"},{label:"u",value:"u"},{label:"v",value:"v"},{label:"a",value:"a"},{label:"b",value:"b"},{label:"c",value:"c"},{label:"d",value:"d"},{label:"e",value:"e"},{label:"f",value:"f"},{label:"g",value:"g"},{label:"h",value:"h"},{label:"k",value:"k"},{label:"l",value:"l"},{label:"m",value:"m"},{label:"n",value:"n"},{label:"o",value:"o"},{label:"p",value:"p"},{label:"q",value:"q"},{label:"r",value:"r"},{label:"s",value:"s"},{label:"t",value:"t"},{label:"u",value:"u"},{label:"v",value:"v"},{label:"a",value:"a"},{label:"b",value:"b"},{label:"c",value:"c"},{label:"d",value:"d"},{label:"e",value:"e"},{label:"f",value:"f"},{label:"g",value:"g"},{label:"h",value:"h"},{label:"k",value:"k"},{label:"l",value:"l"},{label:"m",value:"m"},{label:"n",value:"n"},{label:"o",value:"o"},{label:"p",value:"p"},{label:"q",value:"q"},{label:"r",value:"r"},{label:"s",value:"s"},{label:"t",value:"t"},{label:"u",value:"u"},{label:"v",value:"v"},{label:"a",value:"a"},{label:"b",value:"b"},{label:"c",value:"c"},{label:"d",value:"d"},{label:"e",value:"e"},{label:"f",value:"f"},{label:"g",value:"g"},{label:"h",value:"h"},{label:"k",value:"k"},{label:"l",value:"l"},{label:"m",value:"m"},{label:"n",value:"n"},{label:"o",value:"o"},{label:"p",value:"p"},{label:"q",value:"q"},{label:"r",value:"r"},{label:"s",value:"s"},{label:"t",value:"t"},{label:"u",value:"u"},{label:"v",value:"v"},{label:"a",value:"a"},{label:"b",value:"b"},{label:"c",value:"c"},{label:"d",value:"d"},{label:"e",value:"e"},{label:"f",value:"f"},{label:"g",value:"g"},{label:"h",value:"h"},{label:"k",value:"k"},{label:"l",value:"l"},{label:"m",value:"m"},{label:"n",value:"n"},{label:"o",value:"o"},{label:"p",value:"p"},{label:"q",value:"q"},{label:"r",value:"r"},{label:"s",value:"s"},{label:"t",value:"t"},{label:"u",value:"u"},{label:"v",value:"v"},{label:"a",value:"a"},{label:"b",value:"b"},{label:"c",value:"c"},{label:"d",value:"d"},{label:"e",value:"e"},{label:"f",value:"f"},{label:"g",value:"g"},{label:"h",value:"h"},{label:"k",value:"k"},{label:"l",value:"l"},{label:"m",value:"m"},{label:"n",value:"n"},{label:"o",value:"o"},{label:"p",value:"p"},{label:"q",value:"q"},{label:"r",value:"r"},{label:"s",value:"s"},{label:"t",value:"t"},{label:"u",value:"u"},{label:"v",value:"v"},{label:"a",value:"a"},{label:"b",value:"b"},{label:"c",value:"c"},{label:"d",value:"d"},{label:"e",value:"e"},{label:"f",value:"f"},{label:"g",value:"g"},{label:"h",value:"h"},{label:"k",value:"k"},{label:"l",value:"l"},{label:"m",value:"m"},{label:"n",value:"n"},{label:"o",value:"o"},{label:"p",value:"p"},{label:"q",value:"q"},{label:"r",value:"r"},{label:"s",value:"s"},{label:"t",value:"t"},{label:"u",value:"u"},{label:"v",value:"v"},{label:"a",value:"a"},{label:"b",value:"b"},{label:"c",value:"c"},{label:"d",value:"d"},{label:"e",value:"e"},{label:"f",value:"f"},{label:"g",value:"g"},{label:"h",value:"h"},{label:"k",value:"k"},{label:"l",value:"l"},{label:"m",value:"m"},{label:"n",value:"n"},{label:"o",value:"o"},{label:"p",value:"p"},{label:"q",value:"q"},{label:"r",value:"r"},{label:"s",value:"s"},{label:"t",value:"t"},{label:"u",value:"u"},{label:"v",value:"v"},{label:"a",value:"a"},{label:"b",value:"b"},{label:"c",value:"c"},{label:"d",value:"d"},{label:"e",value:"e"},{label:"f",value:"f"},{label:"g",value:"g"},{label:"h",value:"h"},{label:"k",value:"k"},{label:"l",value:"l"},{label:"m",value:"m"},{label:"n",value:"n"},{label:"o",value:"o"},{label:"p",value:"p"},{label:"q",value:"q"},{label:"r",value:"r"},{label:"s",value:"s"},{label:"t",value:"t"},{label:"u",value:"u"},{label:"v",value:"v"},{label:"a",value:"a"},{label:"b",value:"b"},{label:"c",value:"c"},{label:"d",value:"d"},{label:"e",value:"e"},{label:"f",value:"f"},{label:"g",value:"g"},{label:"h",value:"h"},{label:"k",value:"k"},{label:"l",value:"l"},{label:"m",value:"m"},{label:"n",value:"n"},{label:"o",value:"o"},{label:"p",value:"p"},{label:"q",value:"q"},{label:"r",value:"r"},{label:"s",value:"s"},{label:"t",value:"t"},{label:"u",value:"u"},{label:"v",value:"v"},]
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

`dropdown-icon` slot

```vue
<template>
    <div>
        <vue-virtual-picklist
            :options="items"
            style="margin-bottom: 10px"
            v-model="selectedOption"
        >
            <template slot="dropdown-icon">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                    class="dropdown-icon-1"
                >
                    <path
                        d="M448 80v352c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V80c0-26.5 21.5-48 48-48h352c26.5 0 48 21.5 48 48zM92.5 220.5l123 123c4.7 4.7 12.3 4.7 17 0l123-123c7.6-7.6 2.2-20.5-8.5-20.5H101c-10.7 0-16.1 12.9-8.5 20.5z"
                    />
                </svg>
            </template>
        </vue-virtual-picklist>

        <vue-virtual-picklist
            :options="items"
            v-model="selectedOption"
        >
            <template slot="dropdown-icon">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    class="dropdown-icon-2"
                >
                    <path
                        d="M504 256c0 137-111 248-248 248S8 393 8 256 119 8 256 8s248 111 248 248zM273 369.9l135.5-135.5c9.4-9.4 9.4-24.6 0-33.9l-17-17c-9.4-9.4-24.6-9.4-33.9 0L256 285.1 154.4 183.5c-9.4-9.4-24.6-9.4-33.9 0l-17 17c-9.4 9.4-9.4 24.6 0 33.9L239 369.9c9.4 9.4 24.6 9.4 34 0z"
                    />
                </svg>
            </template>
        </vue-virtual-picklist>
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
      ],
    };
  },
};
</script>
<style>
.dropdown-icon-1 {
  height: 100% !important;
  max-height: 15px !important;
  fill: black !important;
}

.dropdown-icon-2 {
  height: 100% !important;
  max-height: 15px !important;
  fill: rgb(240, 12, 12) !important;
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