import "./Input.css";
const Input = (props) =>{
    return(
        <>
            <input type="email" className="email-input form-control"  placeholder={props.placeholder} required={props.require}/>
            <button type='submit' className="submit button">{props.label}</button>
        </>
    )
}
export default Input;