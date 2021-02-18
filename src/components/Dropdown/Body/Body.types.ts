import { TFormattedData, TFormattedDataNode } from "../Dropdown.types";

export type TBodyProps = {
    options: {
        get: () => TFormattedData
        add: (option: TFormattedDataNode) => void
        remove: (option: TFormattedDataNode) => void
    },
    multiSelect: boolean
}