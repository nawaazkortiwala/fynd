import Dropdown from './components/Dropdown/Dropdown'
import { arrayOfString, arrayOfObject } from './static/data'
import './App.scss'

const App = () => {
    const getSelectedOptions = (selected_options: any) => {
        console.log(selected_options)
    }

    // Basically to create multiple Dropdown. Initially, I had simply repeated the Dropdown markup
    // But then it's react, so...reusability
    const dropdown_data = [
        {
            properties: {
                input: 'Array of strings',
                multiSelect: 'Off',
            },
            label: 'Colors',
            data: arrayOfString,
            multiSelect: false,
            onSelect: (data: any) => getSelectedOptions(data),
        },
        {
            properties: {
                input: 'Array of strings',
                multiSelect: 'Off',
            },
            label: 'Colors',
            data: arrayOfObject,
            multiSelect: false,
            onSelect: (data: any) => getSelectedOptions(data),
        },
        {
            properties: {
                input: 'Array of strings',
                multiSelect: 'On',
            },
            label: 'Colors',
            data: arrayOfString,
            multiSelect: true,
            onSelect: (data: any) => getSelectedOptions(data),
        },
        {
            properties: {
                input: 'Array of strings',
                multiSelect: 'Off',
            },
            label: 'Colors',
            data: arrayOfObject,
            multiSelect: true,
            onSelect: (data: any) => getSelectedOptions(data),
        },
    ]

    const content = () => {
        return dropdown_data.map(
            ({ properties, label, data, multiSelect, onSelect }) => {
                return (
                    <div key={Math.random()} className="custom-dropdown">
                        <div className="properties">
                            <p>
                                <b>Input:</b> {properties.input}
                                <br />
                                <b>Multi-select:</b> {properties.multiSelect}
                            </p>
                        </div>
                        <Dropdown
                            label={label}
                            data={data}
                            multiSelect={multiSelect}
                            onSelect={onSelect}
                        />
                    </div>
                )
            }
        )
    }

    return (
        <>
            <header>
                <h1>Custom Dropdown Saga</h1>
            </header>
            <div className="main">
                <div className="content">
                    <div></div>
                    {content()}
                    <div></div>
                </div>
            </div>
        </>
    )
}

export default App
