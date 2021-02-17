import { Option } from "../../common/types";

export type TDropDownProps = {
    data: Option[]
    multiSelect: boolean
    onSelect: any,
    label: string
}

export type TCollapseOp = {
    get(): boolean
    set(collapsed: boolean): void
}

export type TFormattedDataNode = {id: number, value: string, selected: boolean, visible: boolean}
export type TFormattedData = Array<TFormattedDataNode>

export type TOptionsOp = {
    get(): TFormattedData,
    set(options: TFormattedData): void
    submit(): any 
}