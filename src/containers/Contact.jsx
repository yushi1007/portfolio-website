import React, { useState } from "react";
import { Link } from "react-scroll"
import * as emailjs from 'emailjs-com';
import Slide from 'react-reveal/Slide'
import Fade from 'react-reveal/Fade';
import Email from '../svg/email.svg';
import Jump from 'react-reveal/Jump';
import Arrow from '../svg/arrow.svg';

const Contact = ({toggle}) => {
    
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("")
    const [showForm, setShowForm] = useState(false)

    const handleToggleForm = () => {
        setShowForm(showForm => !showForm)
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        const templateParams = {
            from_name: name,
            from_email: email,
            to_name: 'Yu',
            message_html: message,
           }
           emailjs.send(
            `${process.env.REACT_APP_SERVICE_KEY}`,
            `${process.env.REACT_APP_TEMPLATE_KEY}`,
             templateParams,
            `${process.env.REACT_APP_EMAIL_KEY}`
           )
            setName("")
            setEmail("")
            setMessage("")
    }

return (
    <div id="contact" className={toggle ? "contactpage darkmode" : "contactpage"}>
            <ul className={toggle ? "contact-background darkmode" : "contact-background"}>
                <li className="blue"></li>
                <li className="green"></li>
                <li className="red"></li>
                <li className="yellow"></li>
                <li className="blue"></li>
            </ul>
        <Slide left duration={800}>
            <h1>GET IN TOUCH</h1>
        </Slide>
        <Fade bottom duration={1000} delay={200}>
            <h3>Please feel free to contact me if you have any question! </h3>
            <h4>Or just wanna chat, please do not hesitate to reach out to me!</h4>
        </Fade>
        <Jump>
            <div className="contact-btn">
                <button onClick={handleToggleForm}>
                    <img src={Email} style={{width: "20px", marginRight: "5px"}}alt="svg icon" />    
                    <b>Contact Me</b>
                </button>
            </div>
        </Jump>
    {showForm ? 
        <div className="contact-box">
            <br/>
            <form onSubmit={handleSubmit}>
                <div className="form-input">
                <i className="fas fa-user inputicon"></i>
                <input
                    type="text"
                    name="name"
                    value={name}
                    className="contact-box"
                    placeholder="Enter full name..."
                    onChange={(e) => setName(e.target.value)}
                />
                <br></br>
                <i className="fas fa-envelope inputicon"></i>
                <input
                    type="text"
                    name="email"
                    value={email}
                    className="contact-box"
                    placeholder="Enter email..."
                    onChange={(e) => setEmail(e.target.value)}
                /> 
                <br></br>
                <i className="far fa-comment-dots inputicon"></i>
                <textarea
                    type="text"
                    name="message"
                    value={message}
                    className="contact-box"
                    placeholder="Enter message..."
                    onChange={(e) => setMessage(e.target.value)}
                />
                </div>
                <div className="main-button">
                    <button type="submit" className="send-btn">Send</button>
                </div>
            </form>
        </div> :null}
            <Fade delay={600} bottom>
                <Link to="home" smooth={true} duration={500}><img className="uparrow" src={Arrow} alt="scroll down"/></Link>
            </Fade>
    </div>
    )
}

export default Contact;