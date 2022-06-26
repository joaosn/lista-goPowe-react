import { useState,KeyboardEvent } from "react";
import * as c from "./style";

type Props = {
    onEnter:(taskName: string)=>void
}

export const AddArea = ({onEnter}:Props) => {
    const [txt,setTxt] = useState('');

    const presEnter = (e: KeyboardEvent) => {
        if(e.code == 'Enter' && txt.length > 5){
            onEnter(txt);
            setTxt('');
        }
    }
    return (
        <c.container>
           <div className="image">➕</div>
           <input
                type="text"
                placeholder="Adicione uma Tarefa"
                value={txt}
                onChange={e=>setTxt(e.target.value)}
                onKeyUp={presEnter}
           />
        </c.container>
    );
} 