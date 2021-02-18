import {
    FunctionComponent,
    memo,
    ReactElement,
    useEffect,
    useMemo,
    useRef,
    useState,
} from 'react'
import Body from './Body/Body'
import DropdownContext from '../../store/Dropdown.context'
import {
    TCollapseOp,
    TDropDownProps,
    TFormattedData,
    TOptionsOp,
} from './Dropdown.types'
import {
    collapseDropdown,
    getFormattedData,
    makeSubmissionData,
    setDataVisibility,
} from './Dropdown.utils'
import Preview from './Preview/Preview'
import './Dropdown.scss'

const Dropdown: FunctionComponent<TDropDownProps> = ({
    label,
    data,
    multiSelect,
    onSelect,
}): ReactElement => {
    // To manage the dropdown collapse and expansion
    const [collapsed, setCollapsed] = useState(true)
    // The data is transformed  to an inline representation and used through-out the program.
    const [options, setOptions] = useState<TFormattedData>(
        getFormattedData(data)
    )
    // To add event-listeners
    const dropdown_ref = useRef<HTMLDivElement | null>(null)

    // An API to handle operations on collapse
    const collapseOp: TCollapseOp = {
        get() {
            return collapsed
        },
        set(collapse: boolean) {
            setCollapsed(collapse)
        },
    }

    // An API to handle operations on option data
    const optionsOp: TOptionsOp = useMemo(() => {
        return {
            get() {
                return options
            },
            set(_options: TFormattedData) {
                setOptions(_options)
            },
            clear() {
                const _options = setDataVisibility(options, true)
                setOptions(_options)
            },
            submit() {
                const submission_data = makeSubmissionData(data, options)
                onSelect(submission_data)

                setCollapsed(true)

                this.clear()
            },
        }
    }, [data, onSelect, options])


    useEffect(() => {
        const boundedCollapseDropdown = collapseDropdown.bind(
            null,
            dropdown_ref.current,
            collapseOp,
            optionsOp,
            multiSelect
        )
        // Handles dropdown close on outer element click. Works only for non-multi dropdowns
        document.addEventListener('click', boundedCollapseDropdown)

        return () => {
            document.removeEventListener('click', boundedCollapseDropdown)
        }
    })

    return (
        <DropdownContext.Provider
            value={{ collapsed: collapseOp, options: optionsOp, multiSelect }}
        >
            <div ref={dropdown_ref} className="dropdown">
                <div className="container">
                    <Preview label={label} />
                    <Body />
                </div>
            </div>
        </DropdownContext.Provider>
    )
}

export default memo(Dropdown)
