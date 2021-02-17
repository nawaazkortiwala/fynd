import { TFormattedDataNode, TOptionsOp } from "src/components/Dropdown/types";

export type TOptionProps = {
    option: TFormattedDataNode
    selectable: boolean
    onClick(option: TFormattedDataNode): void
}