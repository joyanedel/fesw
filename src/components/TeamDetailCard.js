import './styles/Card.css';

function TeamDetailCard(props) {
    var members = props.project[0]["members_info"];
    const members_data = [];
    var row3 = [];
    var i = 1;

    for (const [name, data] of Object.entries(members)) {
        row3.push(<div className = "member-data-container" style={{margin:"1rem"}} key={name}>
                    <div className="project-img" style={{textAlign:"center"}}>
                        <img src={data[0]} alt=""/>
                    </div>
                    <h3 style={{textAlign:"center"}}> {name} </h3>
                    <p style={{textAlign:"center"}}> {data[2]} </p>
                    <a href={"mailto:"+data[1]} style={{color:"hsl(206, 100%, 26%)",textAlign:"center"}}>{data[1]}</a>
                </div>)
        if (i%3 === 0 || i === Object.keys(members).length){
            members_data.push(<div className="team-data-container" key={i}> {row3} </div>);
            row3 = [];
        }
        i++;
    }
    return (
        <div className="project-card" style={{marginBottom: "5rem"}}>
            <div className="project-title">
                <h1>{props.title}</h1>
            </div>
            <div className="data-row-container">
                {members_data}
            </div>
        </div>
    );
}

export default TeamDetailCard;