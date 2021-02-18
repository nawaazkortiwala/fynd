import { TFormattedData, TFormattedDataNode } from '../../Dropdown.types'

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