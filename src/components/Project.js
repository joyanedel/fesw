import ProjectDetailCard from './ProjectDetailCard';
import TeamDetailCard from './TeamDetailCard';
import './styles/Project.css';
import {
    useParams,
    useLocation,
    Link,
  } from "react-router-dom";
import ReturnButton from './ReturnButton';

function Project() {
    const project_param = useParams();
    const location = useLocation();
    var projects = require('./projects.json')
    var project = projects.filter(elem => elem.name === project_param.name);

    return (
        <div id="project">
            <ReturnButton url={location.state.return_url} />

            <div style={{position:"absolute",right:"2%",top:"6rem"}}> 
                <button style={{width:"3rem",height:"3rem",
                    borderRadius:"50%",background:"#F7AE00",
                    }}>
                    <Link to={`/proyecto/${project[0].name}/edit`} state={{return_url: `/proyecto/${project_param.name}`, temp_url: location.state.return_url}}>
                        <img src="/images/edit_black_48dp.svg" style={{width:"70%"}} alt="edit"/>
                    </Link> 
                </button>
            </div>


            <div id="project-detail">
                <ProjectDetailCard project={project}/>
                <TeamDetailCard title="Sobre Nosotros" project={project}/>
            </div>
        </div>
    );
}

export default Project;