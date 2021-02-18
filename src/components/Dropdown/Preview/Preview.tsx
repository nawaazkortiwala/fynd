import { FunctionComponent, MouseEvent, useContext } from 'react'
import Row from '../Body/Row/Row'
import DropdownContext from 'src/store/Dropdown.context'
import { TPreviewProps } from './Preview.types'
import { getPreviewText } from './Preview.utils'
import './Preview.scss'

const Preview: FunctionComponent<TPreviewProps> = ({ children, label }) => {
    const { collapsed, options } = useContext(DropdownContext)

    const onPreviewClick = (e: MouseEvent<HTMLElement>) => {
        e.stopPropagation()
        collapsed.set(false)
    }

    return (
        <span className="dropdown-preview">
            <Row onClick={onPreviewClick}>
                <span className="text">
                    {getPreviewText(label, options.get())}
                </span>
                <span className="caret">
                    <img src="/img/icon/caret.svg" alt="\/" />
                </span>
            </Row>
        </span>
    )
}

export default Preview
