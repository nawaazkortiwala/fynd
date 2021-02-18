import { TFormattedData } from "../../Dropdown.types";

// Sets the visibile property of option objects to true if matched agains the filter-text
export const getFilteredOptions = (options: TFormattedData, filter_text: string): TFormattedData => {
    return options.map((option) => {
        if (!option.value.match(new RegExp(filter_text, 'ig'))) {
            option.visible = false
        } else option.visible = true

        return option
    })
}