import './styles/ContactPage.css';
import { ContactEntry } from './ContactEntry';

export function ContactPage(){

  return(
    <div className="ContactBanner">
      <h1 className="ContactTitle">Let's Talk!</h1>
      <div className="ContactList">
        <ContactEntry 
          contactIcon = {<i class="icon fa-solid fa-envelope"></i>}
          contactType = "Email"
          contact = "pedrojrfelix1999@gmail.com" />
        <ContactEntry 
          contactIcon = {<i class="icon fa-brands fa-github"></i>}
          contactType = "Github"
          contact = "https://github.com/PedrorFelix" />
        <ContactEntry 
          contactIcon = {<i class="icon fa-brands fa-linkedin"></i>}
          contactType = "LinkedIn"
          contact = "https://www.linkedin.com/in/pedro-f%C3%A9lix-8517a0233/" />
      </div>
    </div>
  )
}