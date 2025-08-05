import { useState } from "react";

export function useCustomHookToggle(defaultValue){
    const [value,setValue] = useState(defaultValue);

    function toggleValue(val){
     if(typeof val!='boolean'){
        setValue(!value)
     }
     else{
        setValue(val)
     }
    }
    return[value,toggleValue]
}