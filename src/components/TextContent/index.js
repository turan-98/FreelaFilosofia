import './TextContent.css'
const TextContent = (props) =>{
    return(
        <>
            <h1 className="jumbo-text display-4">{props.jumbo}</h1>
            <p className="paragraph-text">{props.bodyText}</p>
            <p className="paragraph-text ">Receba seu certificado inserindo seu e-mail no campo abaixo.</p>
        </>
    )
}
export default TextContent;