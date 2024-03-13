import React from 'react'
import "./Contact.css"
import Button from '@mui/material/Button';
export default function Contact() {
    return (
        <div className='contactbody'>
            <div className="insidecontact">
                <div className='contentBody'>
                    <h1>Feel Free To Contact Us</h1>
                </div>
                <div style={{ display: "flex", justifyContent: "center", alignItems: "center", marginTop: "2rem" }}><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8589.842601756265!2d79.91553134699248!3d27.027067145007443!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399e65612a25f2cb%3A0x1136e5d864eae68e!2sMaya%20devi%20Inter%20College!5e0!3m2!1sen!2sin!4v1709441656635!5m2!1sen!2sin" width="100%" height="350" style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe></div>
            </div>
            <div className='formcontainer'>
                <form action='https://formspree.io/f/xyyrjalj' method='POST' className='formdata'>
                <div style={{color:"black", fontSize:"2.1rem",fontWeight:600}}>Contact Us</div>
                <div style={{width:"45%", height:"2px",borderBottom:"2px solid #00000047",marginTop:"-23px" }}></div>
                
                    <input type='text' placeholder='Name' required></input>
                    <input id="email"
        type="email" 
        name="email" placeholder='Email' required></input>
                    <textarea name='message' cols="30" rows="6" required placeholder='Enter message to me'></textarea>
                   <Button type='submit' variant='contain' style={{width:"20%", padding:"8px", fontWeight:"500", fontSize:"1rem"}}>Send</Button>
                </form>
            </div>
        </div>
    )
}
