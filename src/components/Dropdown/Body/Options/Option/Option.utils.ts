import { TMultiSelectState } from "../../MultiSelect/MultiSelect.types"

// Gets the state of the checkbox. Only two options here as options have only on and off states.
export const getCheckboxState = (selected: boolean): TMultiSelectState => {
    if (selected) return 2
    return 0
}
