import { TFormattedData, TFormattedDataNode } from "../types";

export type TBodyProps = {
    options: {
        get: () => TFormattedData
        add: (option: TFormattedDataNode) => void
        remove: (option: TFormattedDataNode) => void
    },
    multiSelect: boolean
}