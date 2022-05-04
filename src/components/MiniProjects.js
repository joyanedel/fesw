import {Link} from 'react-router-dom';

import './styles/MiniProjects.css';
import './styles/OlderProjects.css';
import './styles/GridView.css';

function ListView(props){
    return (
        <div className="miniprojects">
                <div className="miniprojects-title" style={{alignItems: 'center'}}>
                    <h2>{props.title}</h2>
                    <div className="miniprojects-title-icon" style={{width: '70%'}}>
                        <div className="miniprojects-title-icon" style={{justifyContent: 'flex-start'}}>
                            <img src="/images/calendar.png" alt="calendar" style={{width:"8%", marginRight:"1rem"}}/>
                            <p>Año {props.year}</p>
                        </div>
                        <div className="miniprojects-title-icon" style={{justifyContent: 'center'}}>
                            <a href={props.yt_link} style={{width:'80%'}}>
                                <button className="button" style={{display: 'flex', flexDirection: 'row', backgroundColor: '#F7AE00', color: 'black', alignItems: 'center', cursor: 'pointer', boxShadow: 'rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px'}}>
                                    <img src="/images/play-button.png" alt="play" style={{width:"15%", marginRight:"1rem"}}/>
                                    <h6> Ver Video </h6>
                                </button>
                            </a>
                        </div>
                        <div className="miniprojects-title-icon" style={{justifyContent: 'center', width: '50rem'}}>
                            <Link to={'/proyecto/' + props.title} style={{width:'80%'}} state={{return_url: props.return_url}}>
                                <button className="button" style={{display: 'flex', flexDirection: 'row', backgroundColor: '#F7AE00', color: 'black', alignItems: 'center', cursor: 'pointer', boxShadow: 'rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px', padding: '0.8rem'}}>
                                    <img src="/images/outline_info_black_24dp.png" alt="information" style={{width:"14%", marginRight:"1rem"}}/>
                                    <h6> Más Información </h6>
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="miniprojects-information">
                    <div className="miniprojects-img-row">
                        <img src={props.logo} alt="" />
                    </div>                    
                    <div className="miniprojects-text">
                        <p>{props.text}</p>
                    </div>                    
                </div>
        </div>
    );
}

function GridView(props){
    return(
        <div className='grid-container'>
            {/* UP PART */}
            <div className='grid-up'>
                <div className='grid-title'>
                    <h5>{props.title}</h5>
                    <h6>({props.year})</h6>
                </div>
                <div className='grid-logo'>
                    <img src={props.logo} alt="logo" style={{width: "8rem"}}/>
                </div>
            </div>
            {/* DOWN PART */}
            <div className='grid-down'>
                <div style={{width: "100%"}}>
                    <a href={props.yt_link} className='grid-link'>
                        <img src="/images/play-button.png" alt="play" className='grid-link-img'/>
                    </a>
                </div>
                <div style={{width: "100%"}}>
                    <Link to={'/proyecto/' + props.title} className='grid-link' state={{return_url: props.return_url}}>
                        <img src="/images/outline_info_black_24dp.png" alt="information" className='grid-link-img'/>
                    </Link>
                </div>
            </div>
        </div>
    );
}

function MiniProjects(props) {
    if(props.view === 0) {
        return (ListView(props));
    } else if (props.view === 1) {
        return (GridView(props));
    }
}

export default MiniProjects;