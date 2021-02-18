import { FunctionComponent, MouseEvent, useContext } from 'react'
import Row from '../Body/Row/Row'
import DropdownContext from 'src/store/Dropdown.context'
import { TPreviewProps } from './Preview.types'
import { getPreviewText } from './Preview.utils'

const Preview: FunctionComponent<TPreviewProps> = ({ children, label }) => {
    const { collapsed, options } = useContext(DropdownContext)
    const isCollapsed = collapsed.get()

    const onPreviewClick = (e: MouseEvent<HTMLElement>) => {
        e.stopPropagation()
        collapsed.set(false)
    }

    if (!isCollapsed) return <></>

    return (
        <>
            <Row onClick={onPreviewClick}>
                {getPreviewText(label, options.get())}
            </Row>
        </>
    )
}

export default Preview
