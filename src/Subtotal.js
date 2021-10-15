import React from 'react'
import './Subtotal.css'

function Subtotal() {
    return (
        <div className="subtotal">
            <p>Subtotal (0 Item): <strong>0</strong></p>
            <small className="subtotal__gift">
                <input type="checkbox" /> This order containing a gift
                
            </small>
            <button>Proceed to </button>
        </div>
    )
}

export default Subtotal
