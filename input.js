function Input(props){
    return <input type="text" value={props.Value} onChange={props.onChange} placeholder={props.Placeholder} />
}
export default Input;