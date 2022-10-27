import React, { useRef }from 'react';
// import emailjs from '@emailjs/browser';
import "./contact.css";
import { useState } from 'react';


const Contact = () => {

    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [name, setName] = useState("");
    const [project, setProject] = useState("");
    const [error, setError] = useState(false);

    const handleSubmit=(e)=>{
        e.preventDefault();
        if(name.length==0 || email.length==0 || project.length==0){
            setError(true)
        }
    }

    // const submit =()=>{
    //     alert("message is send!");
    // }

    const emailValidation=()=>{
        const regEx =  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        if(regEx.test(email))
        {
            setMessage("email is valid.");
        }else if(!regEx.test(email)&& email!==  ""){
            setMessage("email is not valid!");
        }else{
            setMessage("");
        }
    }

    const handleOnChange = (e) => {
        setEmail(e.target.value);
    };
        // var form = document.getElementById("form");
        // var email = document.getElementById("email").value;
        // var text = document.getElementById("text");
        // var pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

        // if (email.match(pattern))
        // {
        //     form.classList.add("valid");
        //     form.classList.remove("invalid");
        //     text.innerHTML = "your email address is valid";
        //     text.style.color = "#000000";
        // }
        // else{
        //     form.classList.remove("valid")
        //     form.classList.add("invalid")
        //     text.innerHTML = "please enter valid email address!";
        //     text.style.color = "#000000";
        // }
    

    const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    // emailjs.sendForm(
    //     'service_xvrlwto', 
    //     'template_qqr4vic', 
    //     form.current, 
    //     'TnoMuuuw6TJlcApWw'
    //     )
    //   .then(
    //     (result) => {
    //         console.log(result.text);
    //     },
    //     (error) => {
    //         console.log(error.text);
    //     }
    //   );
};

  return (
    <section className="contact section" id="contact">
        

        <ul className="contact_container container grid">
            <li className="contact_content">
            <h2 className="section_title">Get IN Touch</h2>
        {/* <span className="section_subtitle">- Contact ME -</span> */}
                <h3 className="contact_title">talk to me</h3>
            </li>    
            
            <li className="contact_info">
                <div className="contact_card">
                    <i className="fa-solid fa-envelope contact_card-icon"></i>

                            <h3 className="contact_card-title">email</h3>
                                <span className="contact_card-data">gulnihalcengiz6@gmail.com</span>

                                <a className="contact_button" href="mailto:gulnihalcengiz6@gmail.com? subject=subject text">
                                    write me{" "}
                                    <i className="fa-solid fa-arrow-right contact_button-icon"></i>
                                </a>
                </div>

                    {/* <div className="contact_card">
                        <i className="fa-solid fa-envelope contact_card-icon"></i>

                            <h3 className="contact_card-title">whatsapp</h3>
                                <span className="contact_card-data">999-888-777</span>

                                <a href="" className="contact_button">
                                    write me{" "}
                                    <i className="fa-solid fa-arrow-right contact_button-icon"></i>
                                </a>
                    </div> */}

                    {/* <div className="contact_card">
                        <i className="fa-brands fa-facebook contact_card-icon"></i>

                            <h3 className="contact_card-title">messenger</h3>
                                <span className="contact_card-data">bla</span>

                                <a href="" className="contact_button">
                                    write me{" "}
                                    <i className="fa-solid fa-arrow-right contact_button-icon"></i>
                                </a>
                    </div> */}
                  
            </li>
            
        </ul>

        {/* <div className="contact_container container grid">
            <div className="contact_content">
                <h3 className="contact_title">write me your project</h3>

                <form ref={form} onSubmit={sendEmail} className="contact_form" id='form'>
                    
                    <div className="contact_form-div">
                        <label className="contact_form-tag">name</label>
                        <input type="" name='name' className='contact_form-input' placeholder='insert your name'/>
                    </div>
                    {error&&name.length<=0?
                    <label>name cannot be empty!</label>:""}

                    
                    <div className="contact_form-div">
                        <label htmlFor='email' className="contact_form-tag" id='email'>email</label>
                        <input type="email" name='email' value={email} onChange={handleOnChange} onClick={emailValidation} className='contact_form-input' placeholder='insert your email' onKeyDown="validation()"/> 
                        <p className="message">{message}</p>
                    </div>
                    {error&&email.length<=0?
                    <label>email cannot be empty!</label>:""}

                    
                    <div className="contact_form-div contact_form-area">
                        <label className="contact_form-tag">project</label>
                        <textarea name="project" cols="30" rows="10" className='contact_form-input' placeholder='write your project'></textarea>
                    </div>
                    {error&&project.length<=0?
                    <label>project cannot be empty!</label>:""}

                    <button type="" className="button button--flex" >
                    Send Message

                        <svg
                  className="button_icon"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M14.2199 21.9352C13.0399 21.9352 11.3699 21.1052 10.0499 17.1352L9.32988 14.9752L7.16988 14.2552C3.20988 12.9352 2.37988 11.2652 2.37988 10.0852C2.37988 8.91525 3.20988 7.23525 7.16988 5.90525L15.6599 3.07525C17.7799 2.36525 19.5499 2.57525 20.6399 3.65525C21.7299 4.73525 21.9399 6.51525 21.2299 8.63525L18.3999 17.1252C17.0699 21.1052 15.3999 21.9352 14.2199 21.9352ZM7.63988 7.33525C4.85988 8.26525 3.86988 9.36525 3.86988 10.0852C3.86988 10.8052 4.85988 11.9052 7.63988 12.8252L10.1599 13.6652C10.3799 13.7352 10.5599 13.9152 10.6299 14.1352L11.4699 16.6552C12.3899 19.4352 13.4999 20.4252 14.2199 20.4252C14.9399 20.4252 16.0399 19.4352 16.9699 16.6552L19.7999 8.16525C20.3099 6.62525 20.2199 5.36525 19.5699 4.71525C18.9199 4.06525 17.6599 3.98525 16.1299 4.49525L7.63988 7.33525Z"
                    fill="rgb(17, 21, 26)"
                  ></path>
                  <path
                    d="M10.11 14.7052C9.92005 14.7052 9.73005 14.6352 9.58005 14.4852C9.29005 14.1952 9.29005 13.7152 9.58005 13.4252L13.16 9.83518C13.45 9.54518 13.93 9.54518 14.22 9.83518C14.51 10.1252 14.51 10.6052 14.22 10.8952L10.64 14.4852C10.5 14.6352 10.3 14.7052 10.11 14.7052Z"
                    fill="rgb(17, 21, 26)"
                  ></path>
                        </svg>
                    </button>
                     
                </form>
            </div>
        </div> */}
    </section>
  )
}

export default Contact;