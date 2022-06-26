import * as c from "./style";
import { Item } from "../../types/item";
import { useState } from "react";

type Props = {
    item:Item;
    onchek:(id:number)=>void;
}

export const ListItem = ({item,onchek}:Props) => {
    const [check,setCheck] = useState(item.done);

    function setUP(cx:boolean,idx:number){
      setCheck(cx);
      onchek(idx);
    }
    return (
        <c.container done={check}>
           <input 
                type="checkbox" 
                checked={check}
                onChange={e=>setUP(e.target.checked,item.id)}
            />
           <label>{item.name} - {item.done.toString()}</label>
        </c.container>
    );
} 