"use client"
import { useState, useEffect } from "react";
import FormMsg from "../components/FormMsg/FormMsg";


/* 
Let's run the validation function using onBlur. Add onBlur to your HTML fields and call the form 
validation function. Use the console to check if the useState changes to true when the form is 
correctly filled out.
*/


function Contact() {
    const [formData, setFormData] = useState({});
    const [isFormValid, setIsFormValid] = useState(false);
    const [errors, setErrors] = useState({});
    const [msg, setMsg] = useState('');

    /* useEffect(() => { 
        validateForm(); 
    }, [formData]);  */

    const handleSubmit = (event) => {
        event.preventDefault(); 
        if (isFormValid === true) { 
            console.log('Form submitted successfully!'); 
        } else { 
            console.log('Form has errors. Please correct them.'); 
        } 
        console.log(formData, 'from handleSubmit');
    }

    const validateForm = () => {
        let errors = {}; 

        if (!formData.name) { 
            errors.name = 'Name is required.'; 
        } 

        if (!formData.email) { 
            errors.email = 'Email is required.'; 
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) { 
            errors.email = 'Email is invalid.'; 
        } 
  
        if (!formData.message) { 
            errors.message = 'message is required.'; 
        } else if (formData.message.length < 6) { 
            errors.message = 'message must be at least 6 characters.'; 
        } 
  
        setErrors(errors); 
        setIsFormValid(Object.keys(errors).length === 0); 
    }
    
    
    useEffect(() => { 
        if(isFormValid){
            let mess = FormMsg();
            setMsg(mess);
        }
      
    }, [isFormValid]);  

    return (
        <main className="overlay">
        <form className="contactForm" onSubmit={handleSubmit} >
            <div className="formFields">
                <label>Name:</label>
                <input
                    type="text"
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    onBlur={validateForm}
                />
                {errors.name && <p style={styles.error}>{errors.name}</p>}
            </div>
            <div className="formFields">
                <label>Email:</label>
                <input
                    type="email"
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    onBlur={validateForm}
                />
                 {errors.email && <p style={styles.error}>{errors.email}</p>}
            </div>
            <div className="formFields">
                <label>Message:</label>
                <textarea
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    onBlur={validateForm}
                ></textarea>
                {errors.message && <p style={styles.error}>{errors.message}</p>}
            </div>
            <button
                className="submitbtn"
                type="submit"
                disabled={!isFormValid}
            >
                Send
            </button>
        </form>
        <div className="msgBox">
            {msg && <h1>{msg}</h1>}
        </div>

    </main>
    );
}

const styles = { 
    error: { 
        color: 'red', 
        fontSize: '14px', 
        marginBottom: '6px', 
    }, 
}

export default Contact