<a href="https://www.buymeacoffee.com/allanoricil" target="_blank"><img src="https://cdn.buymeacoffee.com/buttons/default-orange.png" alt="Buy Me A Coffee" style="height: 51px !important;width: 217px !important;" ></a>

# Vue Virtual Picklist

It is a picklist that virtualizes its options to avoid mounting all of them in the DOM. Options are swaped depending on the position of the scrollbar.

Here you can find the [documentation](https://vue-virtual-picklist.netlify.app/) which has lots of examples.

## Props

| Prop name              | Description                                                                                                                                                                                                            | Type    | Values | Default                            |
| ---------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- | ------ | ---------------------------------- |
| caseInsensitive        | If enabled, the search is Case Insensitive.                                                                                                                                                                            | boolean | -      | false                              |
| disabled               | if enabled, the picklist is disabled.                                                                                                                                                                                  | boolean | -      | false                              |
| enableSearch           | If enabled, an input is rendered and the user can type on it.                                                                                                                                                          | boolean | -      | false                              |
| hideSelected           | If enabled, the selected option is removed from the available options.                                                                                                                                                 | boolean | -      | false                              |
| noOptionsAvailableText | It is the text shown when the search returns no options.                                                                                                                                                               | string  | -      | "no options found"                 |
| optionHeight           | It determines the Height of each option. It is not necessary to set it. It is used by vue-virtualized-list to control the virtualization.                                                                              | number  | -      | 30                                 |
| options                | These are the options available to be selected. Each object in the array must have the "value" and "label" keys. These objects can also have other keys, which will also be emited by the `input` and `select` events. | array   | -      |                                    |
| placeholder            | It is the placeholder for when there are options to select but none were picked.                                                                                                                                       | string  | -      | "select an option"                 |
| searchInputPlaceholder | It is the placeholder for the search input. It has to be combined with the `enable-search` property.                                                                                                                   | string  | -      | "type to filter available options" |
| searchKey              | It is the key used to filter the objects you passed on `options` property. It defaults to `value`, but you can choose other key from the objects you passed.                                                           | string  | -      | "value"                            |
| value                  | Stores the object which is used to determine the selected option. This object must be in the following format: </br>`{ "value" : "a", "label" : "a", "index": 0 }`                                                     | object  | -      |                                    |
| visibleOptions         | It controls the number of visible options.                                                                                                                                                                             | number  | -      | 5                                  |

## Events

| Event name   | Properties                                                                                 | Description                                                                                      |
| ------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| show-options |                                                                                            | dispatched when options are hidden.                                                              |
| select       | **option** `object` - object containing `value`, `label`, `index`, and `originalListIndex` | dispatched after selecting an option. This can be used when you use `value`, instead of v-model. |
| input        | **option** `object` - object containing `value`, `label`, `index`, and `originalListIndex` | dispatched after selecting an option. This is used for v-model.                                  |

## Slots

| Name            | Description                                                                                           | Bindings                                                                                            |
| --------------- | ----------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- |
| selected-option | used to control how the selected option is rendered.                                                  | **option** `object` - it contains `value`, `label`, `index`, and `originalListIndex`                |
| placeholder     | used to control how the picklist's placeholder is rendered.                                           |                                                                                                     |
| dropdown-icon   | used to override the dropdown icon. It can be any image and you can style it on the parent component. |                                                                                                     |
| option          | used to control how each option from the list of options is rendered.                                 | **option** `object` - it is an object containing `value`, `label`, `index`, and `originalListIndex` |
| no-options      | used to control how the message when the filter returns 0 results is displayed.                       | **text** `string` - it has the value you passed on the `noOptionsAvailableText` property            |

---