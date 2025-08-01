import './styles/ContactEntry.css';

export function ContactEntry( { contactIcon, contactType, contact } ){

    var linkContent;

    if(contactType==="Github"){
        linkContent = <a href ={contact} className='ContactContent'>PedrorFelix</a>
    }else if(contactType==="LinkedIn"){
        linkContent = <a href ={contact} className='ContactContent'>Pedro Félix</a>
    }
    else{
        linkContent = <p className='ContactContent'>{contact}</p>;
    }

    return (
    <div className="ContactEntry">
        <div className="IconBox">{contactIcon} {contactType}</div>
        <p>{linkContent}</p>
    </div>
    )
}