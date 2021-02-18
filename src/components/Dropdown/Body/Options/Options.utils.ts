import { TFormattedData, TFormattedDataNode } from '../../Dropdown.types'

// Sets multiple options as selected - for multi-select: on
export const updateMultiSelectedOption = (
    options: TFormattedData,
    selected_option: TFormattedDataNode
): TFormattedData => {
    return options.map((option) => {
        if (option.id === selected_option.id) {
            option.selected = selected_option.selected
        }
        return option
    })
}

// Sets only one option as selected - for multi-select: off
export const updateSingleSelectedOption = (
    options: TFormattedData,
    selected_option: TFormattedDataNode
): TFormattedData => {
    return options.map((option) => {
        if (option.id === selected_option.id) {
            option.selected = true
        } else option.selected = false
        return option
    })
}