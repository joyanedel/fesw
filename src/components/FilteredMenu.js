import React from 'react'
import Select from 'react-select'

function SelectMenu(props) {

  return (
    <div className="Select_Menu" style={{width:"20rem", paddingLeft: "1rem",paddingRight: "1rem", color:"black"}} > 
      <Select 
        isMulti
        name="colors"
        onChange={(selectedOption) => props.set_filteredCategories(selectedOption.map(e => e.label))}
        options={props.options.map((elem, index) => { return {value: index+1, label: elem}})}
        className="basic-multi-select"
        classNamePrefix="select" />
    </div>
    );
  }

export default SelectMenu;