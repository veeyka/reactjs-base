import './TextInput.scss'
import React ,{ChangeEventHandler} from 'react';


interface propsTypes {
    name:string,
    inpType:string,
    formValues:Object,
    setFormValues:Function
}
export default function TextInput(props:propsTypes){
    const {name, inpType,setFormValues} = props;
    const [text, setText] = React.useState("");

    return(
        <input name={name} type={inpType} className='input-span' value={text}
         onChange={(e)=>{setText(e.target.value);setFormValues(name,e.target.value)}} />
    )
}