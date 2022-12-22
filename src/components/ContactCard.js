function ContactCard(props)
{
    console.log(props)
    return(
    <div>
        <h1>{props.contact.name}</h1>
        <img className="images" src={props.contact.imgUrl}/>
        <p>
            {props.contact.email}
            <br/>
            {props.contact.phone}
        </p>
    </div>
    )
}
 export default ContactCard