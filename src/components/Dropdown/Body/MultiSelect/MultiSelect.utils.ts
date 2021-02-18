import { TFormattedData } from "../../Dropdown.types";
import { TMultiSelectState } from "./MultiSelect.types";

export const getMultiSelectState = (options: TFormattedData): TMultiSelectState => {
    const selected_options = options.reduce<number>((selected_count, option) => {
        if (option.selected) selected_count++
        return selected_count
    }, 0)
    
    if (!selected_options) return 0
    else if(selected_options < options.length) return 1
    return 2
}