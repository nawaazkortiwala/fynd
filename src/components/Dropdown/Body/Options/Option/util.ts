import { TMultiSelectState } from "../../MultiSelect/types"

export const getCheckboxState = (selected: boolean): TMultiSelectState => {
    if (selected) return 2
    return 0
}
