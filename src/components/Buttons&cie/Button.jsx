import React from 'react'

function Button({ btnColor, increment, handleClick, children }) {
    console.log(`Button (${children})`)
    return (
        <div>
            <button onClick={() => handleClick(increment)} className={`btn btn-${btnColor} mt-2`}>+{increment} %</button>
        </div>
    )
}

export default React.memo(Button)