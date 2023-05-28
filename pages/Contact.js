import Navbar from "../components/Navbar";
import "../styles/Contact.css";
function Contact() {
  return (
    <div className="maincontact">
    <Navbar/>

      <div className="contact-header">
        <img src="https://images.pexels.com/photos/821754/pexels-photo-821754.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"/>
      </div>
      <div className="contact-container" >
        <h1 className="contact-title">Contact Us</h1>
        <div className="contact-form">
          <input className="input-contact" type={"text"} placeholder="Type your name.."/>
          <input className="input-contact"  type={"email"} placeholder="Type your email..."/>
          <textarea className="contact-text-area" placeholder="Type your message here.."/>
          <button className="btn-contact">Send Message</button>
        </div>

      </div>
    </div>

  );
}

export default Contact;