import './styles/ContactCard.css';

function ContactCard(props) {
    return (
        <div id="contacto" className="contact-card">
            <div id="contact-card-head">
                <div id="contact-card-video">
                    <iframe src="https://www.youtube.com/embed/_WNYF_hzpm0" title="YouTube video player" frameBorder="1" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                </div>
                <div id="contact-card-title">
                    {props.title}
                    <div id="contact-card-short">{props.title}</div>
                </div>
                <div id="contact-card-links">
                    <i className="fab fa-facebook-square"></i>
                    <i className="fab fa-twitter"></i>
                    <i className="fab fa-instagram"></i>
                </div>
            </div>
            <div id="contact-card-text">
                <p>{props.text}</p>
            </div>
        </div>
    );
}

export default ContactCard;