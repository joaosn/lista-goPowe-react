import * as c from './App.styles';
import { useState } from 'react';
import { Item } from './types/item';
import { ListItem } from './components/listaItem'
import { AddArea } from './components/AddArea';

const App = () => {
   const [list,setList] = useState<Item[]>([
      {id:1,name:'JV',done:false}
     ,{id:2,name:'JV2',done:true}
   ])

   const addTask = (taskName:string) => {
      let newlist = [...list];
      newlist.push({
        id:list.length + 1,
        name:taskName,
        done:false
      });
      setList(newlist)
   }

   const chekUp = (id:number) => {
      let idx = id-1;
      list[idx].done = (list[idx].done)?false:true;
   }

   return (
    <c.container>
      <c.area>
        <c.header>Lista Go-Power</c.header>
        
        <AddArea onEnter={addTask} />

        {list.map((it,i) => (
          <ListItem key={i} item={it} onchek={chekUp} />
        ))}
      </c.area>
    </c.container>
   );
}
export default App;