import { TFormattedData } from '../../Dropdown.types'
import { TMultiSelectState } from './MultiSelect.types'

// Returns the state value based on the amount of options being selected
export const getMultiSelectState = (
    options: TFormattedData
): TMultiSelectState => {
    const selected_options = options.reduce<number>(
        (selected_count, option) => {
            if (option.selected) selected_count++
            return selected_count
        },
        0
    )

    if (!selected_options) return 0
    else if (selected_options < options.length) return 1
    return 2
}

export const getCurrentSelection = (
    state: TMultiSelectState
): boolean => {
    if (state === 0 || state === 1) {
        return true
    }
    return false
}

// Sets the "selected" property of options based on the current boolean selection
export const markOptionsSelected = (
    options: TFormattedData,
    selection: boolean
) => {
    return options.map((option) => {
        option.selected = selection
        return option
    })
}
