import React from 'react'
import './Catalogue.css'


function Catalogue({ title, image, formName, backgroundColor }) {
    return (
        <div className='catalogue-container'>
            <div className="catalogue-info" style = {{background: `#${backgroundColor}`}}>
                <h2 className="catalogue-title">{title}</h2>
                <img
                    src= {image}
                    alt=""
                    className="catalogue-logo"
                />
            </div>
            {formName.map(item => (
                <ul className="catalogue-form-list">
                    <li className="catalogue-list-item">
                        <a href="" className="">{item}</a>
                    </li>
                </ul>
            ))}
        </div>
    )
}

export default Catalogue
