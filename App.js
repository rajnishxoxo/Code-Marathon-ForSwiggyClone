import React from "react";
import  ReactDOM  from "react-dom";

const root = ReactDOM.createRoot(document.getElementById('root'))

const App = ()=>{
    return(
        <div className="bg-red-900">
            <h1 className="bg-green-800">Hello</h1>
        </div>
    )
}

root.render(<App/>)

