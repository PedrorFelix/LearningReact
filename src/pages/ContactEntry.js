import './styles/ContactEntry.css';

export function ContactEntry( { contactIcon, contactType, contact, btnText } ){
    const handleCopyEmail =() =>{
        navigator.clipboard.writeText(contact).then(()=>{
            alert("Copied");
        })
    }

    const handleOpenLink = () =>{
        window.open(contact, "_blank", "noopenee noreferrer");
    }

    return (
        <div className="contactEntry">
            <div className="iconBox">{contactIcon} {contactType}</div>
            {contactType ==='Email' ? (
                <button className='contactBtn'
                onClick={handleCopyEmail}>{btnText}</button>
            ):(
                <button className='contactBtn'
                onClick={handleOpenLink}>{btnText}</button>
            )}
        </div>
    )
}