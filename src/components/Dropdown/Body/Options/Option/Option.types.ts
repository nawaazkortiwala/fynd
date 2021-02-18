import { TFormattedDataNode } from "src/components/Dropdown/Dropdown.types";

export type TOptionProps = {
    option: TFormattedDataNode
    selectable: boolean
    onClick(option: TFormattedDataNode): void
}