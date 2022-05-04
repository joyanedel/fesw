import './styles/Project.css';
import {
    useParams,
    useLocation
  } from "react-router-dom";
import ReturnButton from './ReturnButton';

function ProjectEdit() {
    function Modal(){
        window.confirm('¿Está seguro de querer editar los datos?');
        return false
    };
    const project_param = useParams();
    const location = useLocation();
    var projects = require('./projects.json')
    var project = projects.filter(elem => elem.name === project_param.name)[0];

    const members_data = [];
    for (const [name, data] of Object.entries(project.members_info)) {
        members_data.push(
        <div style={{display:"flex"}} key={name}>
            <div style={{padding:"1%",width:"100%"}}>
                <textarea name="subject" style={{width:"100%",height:"100%",
                border: "2px solid #ccc",borderRadius: "4px",backgroundColor: "#f8f8f8",
                fontSize: "16px",resize: "none"}}>{name}</textarea>
            </div>
            <div style={{padding:"1%",width:"100%"}}>
                <textarea name="a" style={{width:"100%",height:"100%",
                border: "2px solid #ccc",borderRadius: "4px",backgroundColor: "#f8f8f8",
                fontSize: "16px",resize: "none"}}>{data[1]}</textarea>
            </div>
        </div>
        )
    }
    return (
        <div id="project">
            <ReturnButton url={location.state.return_url} temp_url={location.state.temp_url}/>
            <div id="project-detail">
                <div className="project-card" style={{width:"50rem",marginBottom:"5rem"}}>
                    <div className="project-title">
                        <h1>{project.name}</h1>
                    </div>
                <div className="project-text">
                    <form>
                        <h3 style={{marginBottom:"1%"}}>Descripción</h3>
                        <textarea name="subject" style={{width:"100%",height:"10rem",
                                border: "2px solid #ccc",
                                borderRadius: "4px",
                                backgroundColor: "#f8f8f8",
                                fontSize: "16px",
                                resize: "none"}}>{project.detail}
                        </textarea>

                        <div style={{marginTop:"5%"}}>

                        <div style={{display:"flex", width:"100%", marginBottom:"0.01rem"}}>
                        <h3 style={{padding:"1%",width:"50%"}}>Integrantes</h3>
                        <h3 style={{padding:"1%",width:"50%"}}>Correos</h3>
                        </div>
                    
                        {members_data}
                        </div>

                        <div style={{display:"flex", justifyContent:"flex-end",marginTop:"1%"}}>
                            <div style={{width:"52px", cursor:"pointer"}}>
                                <button onClick={Modal} type="button" style={{cursor:"pointer",borderRadius:"30%",background:"#F7AE00"}}> 
                                        <img src="/images/save_black_48dp.svg" style={{width:"60%"}} alt="save"/>
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
                </div>
            </div>
        </div>


    );
}

export default ProjectEdit;