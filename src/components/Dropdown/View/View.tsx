import { FunctionComponent, useContext } from 'react'
import Row from '../Body/Row/Row'
import DropdownContext from '../store'
import { TViewProps } from './type'
import { getPreviewText } from './util'

const View: FunctionComponent<TViewProps> = ({ children, label }) => {
    const { collapsed, options } = useContext(DropdownContext)

    const onPreviewClick = () => {
        collapsed.set(false)
    }

    const preview = () => {
        const preview_text = getPreviewText(label, options.get())
        return <Row onClick={onPreviewClick}>{preview_text}</Row>
    }

    return <>{collapsed.get() ? preview() : children}</>
}

export default View
