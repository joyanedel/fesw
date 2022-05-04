import MiniProjects from './MiniProjects';
import './styles/OlderProjects.css';
import SelectMenu from './FilteredMenu';
import React, { useState, useEffect, useRef } from "react";
import ReturnButton from './ReturnButton';
import VistaButton from './VistaButton';

function CurrentProjects() {
    var projects = require('./projects.json')
    projects = projects.filter(elem => elem.year === 2020);

    //filter
    var categories = [];
    projects.forEach(elem => {
        elem.category.forEach(e => {
            if(!categories.includes(e)){
                categories.push(e);
            }
        })
    })
    const [btn_clicked, set_buttonClicked] = useState(false);
    const [filtered_projects, set_projects] = useState([...projects]);
    const [filtered_categories, set_filteredCategories] = useState([]);
    const [view, set_view] = useState(0);
    const didMount = useRef(false);

    projects.sort(function (a, b) {
        if (a.year < b.year) {
          return 1;
        }
        if (a.year > b.year) {
          return -1;
        }
        // a must be equal to b
        return 0;
      });

    useEffect(() => {
        if (didMount.current)
            set_projects(projects.filter(elem => {
                if(filtered_categories.length > 0){
                    let flag = false
                    elem.category.forEach(cat => {
                        if(filtered_categories.includes(cat)){
                            flag = true
                        }
                    })
                    return flag
                } else {
                    return true
                }
            }));
        else
            didMount.current = true;
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [btn_clicked]);
    
    return (
        <div id="olderprojects">
            <ReturnButton url="/" />
            <VistaButton set_view={set_view}/>

            <div className="filtered">
                <div className="select" style={{width:"20rem", paddingLeft: "1rem",paddingRight: "1rem", marginRight: "1rem"}}>
                    <label htmlFor="standard-select" style={{marginBottom:"0.8rem"}}>Temática</label>
                        <SelectMenu options={categories} set_filteredCategories={set_filteredCategories} style/>
                </div>   
                <button className="button" style={{display: 'flex', flexDirection: 'row',  alignItems: 'center', cursor: 'pointer',height:"3rem",width:"6rem"}} onClick={() => {
                    set_buttonClicked(!btn_clicked);}}>
                                <img src="images/filter_alt_black_48dp.svg" style={{height:"100%", marginRight:"0.2rem",stroke:"white"}} alt="filter"/>
                                <h5> Filtrar </h5>
                </button>            
            </div>
            <div className="bigcard">
                <div className="bigcard-title-back">
                    Proyectos
                    <div className="bigcard-title">Proyectos 2020</div>
                </div>

                <div style={{display: "flex", flexDirection: view === 0 ? "column" : "row", flexWrap: view === 0 ? null : "wrap"}}>

                    {filtered_projects.map((elem, index) => {
                        return <MiniProjects key={index.toString()}
                            title={elem["name"]}
                            text={elem["detail"]}
                            year={elem["year"]}
                            logo={elem["project_img"]}
                            yt_link={elem["yt_link"]}
                            return_url="/proyectos"
                            view={view}/>
                    })}

                </div>
            </div>
        </div>
        
    );
}

export default CurrentProjects;