import './styles/ContactEntry.css';

export function ContactEntry( { contactIcon, contactType, contact } ){

    var linkContent;

    if(contactType==="Github"){
        linkContent = <a href ={contact} className='contactContent'>PedrorFelix</a>
    }else if(contactType==="LinkedIn"){
        linkContent = <a href ={contact} className='contactContent'>Pedro Félix</a>
    }
    else{
        linkContent = <p className='contactContent'>{contact}</p>;
    }

    return (
    <div className="contactEntry">
        <div className="iconBox">{contactIcon} {contactType}</div>
        <p>{linkContent}</p>
    </div>
    )
}