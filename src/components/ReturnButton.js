import { Link } from 'react-router-dom'

function ReturnButton(props) {
    return (<div style={{position:"absolute",left:"2%",top:"6rem"}}> 
                <button style={{width:"3rem",height:"3rem",borderRadius:"50%",background:"#F7AE00",}}> 
                    <Link to={props.url} state={{return_url: props.temp_url ? props.temp_url : undefined}}>
                        <img src="/images/undo_black_48dp.svg" style={{width:"70%"}} alt="undo"/>
                    </Link>
                </button>
            </div>);
}

export default ReturnButton;