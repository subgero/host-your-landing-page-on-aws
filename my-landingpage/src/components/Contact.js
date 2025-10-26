import React, { useEffect, useState } from 'react';



const Contact = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [subject, setSubject] = useState('website');
    const [message, setMessage] = useState('');
    const [success, setSuccess] = useState(false);

    useEffect(()=>{
        return()=>{
        };
    }, [name, email, phone, subject, message, success]);

    const submitForm = (e) => {
        
        e.preventDefault();

        const payload = {
            name: name,
            email: email,
            subject: subject,
            phone: phone,
            message: message
        }
        post(payload)
        .then((data) => {
            console.log("data", data);
            // this.setState({error: null, submitted: true});        
        })
        .catch(error => {
            console.log("err ", error);
            // this.setState({ error: error.message, submitted: false});
        })
    }
    

    const post = async (data) => {

        const url = process.env.REACT_APP_API_CONTACT_FORM_URL;
           
        const params = {
            method: 'POST',
            body: JSON.stringify(data)
        }
        const response = await fetch(url, params);        
        console.log(response, response.status);
        if(response.status === 200){
            console.log("success")
            document.getElementById("contact-form").reset();
            setSuccess(true);
            
        } else {
            const res = await response.json();        
            throw new Error(res);
        }
    }

    return (
        <div id="contact">
            <div className="bg-trans">
                <div className="signup container col-md-4">
                    <h2>Contact Us</h2>
                    <div>
                        <form  onSubmit={submitForm} id="contact-form">
                        <div className="form-group item">
                            <label htmlFor="name">Full Name:</label>
                            <input type="text" id="name" name="name" message="Coloca tu nombre" className="form-control form-control-lg" required onChange={(e)=> setName(e.target.value)}></input>
                        </div>
                        <div className="form-group item">
                            <label htmlFor="phone">Phone:</label>
                            <input type="tel" id="phone" name="phone" className="form-control form-control-lg" required onChange={(e)=> setPhone(e.target.value)}></input>
                        </div>
                        <div className="form-group item">
                            <label htmlFor="email">Email:</label>
                            <input type="email" id="email" name="email" className="form-control form-control-lg" required onChange={(e) => setEmail(e.target.value)}></input>
                        </div>
                        <div className="form-group item">
                            <label htmlFor="subject">Subject:</label>
                            <select className="form-control form-control-lg" onChange={(e) => setSubject(e.target.value)}>
                                <option value="food">Food Service</option>
                                <option value="lightning">Lightning</option>
                                <option value="animation">3D Animation</option>
                                <option value="sound">Sound</option>
                            </select>
                        </div>
                        <div className="form-group item">
                            <label htmlFor="mensaje">Message:</label>
                            <textarea id="mensaje" name="mensaje" className="form-control form-control-lg" onChange={(e) => setMessage(e.target.value)}></textarea>
                        </div>
                        <div className="form-group item">
                            <button className="btn btn-primary btn-lg">Enviar</button>
                        </div>                        
                        {success && <div className="alert alert-success">Hi, {name}, thank you for contact support, your message has been sent successfully.</div>}
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact;