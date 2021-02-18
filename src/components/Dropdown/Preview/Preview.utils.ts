import { TFormattedData } from '../Dropdown.types'

// Create a text from the label of the dropdown and the submitted options
export const getPreviewText = (label: string, options: TFormattedData) => {
    if (options.length) {
        const selected_option_text = options
            .filter((option) => option.selected)
            .map((option) => option.value)
            .join(', ')

        if (selected_option_text) {
            label = label + ` - ${selected_option_text}`
        }
    }

    return label
}
