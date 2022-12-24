import React from 'react'
import "../css/Category.css"
const Category = (props) => {
    const {logo,Specialty,description}=props;
  return (
    <div className="mt-3 main-box">
        <div className="ms-3">
        <div className="mb-3 mt-2">
        <img alt="doc-logo" className="logo" src={logo} />
        </div>
        <div className="mb-2 header-text">
            {Specialty}
        </div>
        <div className="mb-4 description">
            {description}
        </div>
        <div>
            <a src="/" className="mb-2 doctor-page-link">See Doctors  &gt;</a>
        </div>
        </div>
    </div>
  )
}

export default Category