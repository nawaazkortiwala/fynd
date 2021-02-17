import { Option } from "../../common/types";

export type TDropDownProps = {
    data: Option[]
    multiSelect: boolean
    onSelect(selectedOptions: Option[]): void
}

export type TFormattedDataNode = {id: number, value: string, selected: boolean, visible: boolean}
export type TFormattedData = Array<TFormattedDataNode>