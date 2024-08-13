import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import "./Forms.css";

export const EmailForm = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        form.current.user_email = "markv2021@gmail.com"
        emailjs
            .sendForm('service_gto2skf', 'template_00gz4ph', form.current, {
                publicKey: 'QapXFFv90onYsPYcn',
            })
            .then(
                () => {
                    console.log('SUCCESS!');
                },
                (error) => {
                    console.log('FAILED...', error.text);
                },
            );
    };

    return (
        <div>
            <form ref={form} onSubmit={sendEmail}>
                <label className={"form-label"}>Name</label>
                <div/>
                <input type="text" name="from_name"/>
                <div/>
                <label className={"form-label"}>Organization</label>
                <div/>
                <input type="text" name="from_company"/>
                <div/>
                <label className={"form-label"}>Email</label>
                <div/>
                <input type="email" name="from_email"/>
                <div/>
                <label className={"form-label"}>Purpose</label>
                <div/>
                <textarea name="message"/>
                <div/>
                <input type="submit" value="Send"/>
            </form>
        </div>

    );
};

export default EmailForm