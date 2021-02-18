import { useState } from 'react'
import Dropdown from './components/Dropdown/Dropdown'
import { arrayOfString, arrayOfObject } from './static/data'
import './App.scss'

const App = () => {
    const [, setOptions] = useState([])

    const getSelectedOptions = (selected_options: any) => {
        setOptions(selected_options)
    }

    return (
        <>
            <header>
                <h1>Custom Dropdown Saga</h1>
            </header>
            <div className="main">
                <div className="content">
                    <div></div>
                    <div className="custom-dropdown">
                        <div className="properties">
                            <p>
                                <b>Input:</b> Array of strings
                            </p>
                            <p>
                                <b>Multi-select:</b> Off
                            </p>
                        </div>
                        <Dropdown
                            label="Colors"
                            data={arrayOfString}
                            multiSelect={false}
                            onSelect={(data: any) => getSelectedOptions(data)}
                        />
                    </div>
                    <div className="custom-dropdown">
                        <div className="properties">
                            <p>
                                <b>Input:</b> Array of strings
                            </p>
                            <p>
                                <b>Multi-select:</b> On
                            </p>
                        </div>
                        <Dropdown
                            label="Colors"
                            data={arrayOfString}
                            multiSelect={true}
                            onSelect={(data: any) => getSelectedOptions(data)}
                        />
                    </div>
                    <div className="custom-dropdown">
                        <div className="properties">
                            <p>
                                <b>Input:</b> Array of objects
                            </p>
                            <p>
                                <b>Multi-select:</b> Off
                            </p>
                        </div>
                        <Dropdown
                            label="Colors"
                            data={arrayOfObject}
                            multiSelect={false}
                            onSelect={(data: any) => getSelectedOptions(data)}
                        />
                    </div>

                    <div className="custom-dropdown">
                        <div className="properties">
                            <p>
                                <b>Input:</b> Array of objects
                            </p>
                            <p>
                                <b>Multi-select:</b> On
                            </p>
                        </div>
                        <Dropdown
                            label="Colors"
                            data={arrayOfObject}
                            multiSelect={true}
                            onSelect={(data: any) => getSelectedOptions(data)}
                        />
                    </div>
                    <div></div>
                </div>
            </div>
        </>
    )
}

export default App
