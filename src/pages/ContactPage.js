import './styles/ContactPage.css';
import { ContactEntry } from './ContactEntry';
import { useTranslation } from 'react-i18next';

export function ContactPage(){
  const {t} = useTranslation();
  return(
    <div className="contactBanner">
      <h1 className="contactTitle">{t('contactBanner.title')}</h1>
      <div className="contactList">
        <ContactEntry 
          contactIcon = {<i class="icon fa-solid fa-envelope"></i>}
          contactType = "Email"
          contact = "pedrojrfelix1999@gmail.com"
          btnText = "pedrojrfelix1999@gmail.com"/>
        <ContactEntry 
          contactIcon = {<i class="icon fa-brands fa-github"></i>}
          contactType = "Github"
          contact = "https://github.com/PedrorFelix" 
          btnText = "PedrorFelix"/>
        <ContactEntry 
          contactIcon = {<i class="icon fa-brands fa-linkedin"></i>}
          contactType = "LinkedIn"
          contact = "https://www.linkedin.com/in/pedro-f%C3%A9lix-8517a0233/" 
          btnText = "Pedro Félix"/>
      </div>
    </div>
  )
}