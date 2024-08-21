
import { useState } from 'react';
import './App.css';
import { Button } from './Components/Button/Button';
import { ListTask } from './Components/ListTask/ListTask';
import { ModalNewTask } from './Components/ModalNewTask/ModalNewTask';

function App() {

  const [novaTarefa, setNovaTarefa] = useState("")

  const [tarefa, setTarefa] = useState([ 
    {
        id: 1,
        nome : "aaaaaaaaaaa",
        
    },
    {
        id: 2,
        nome : "bbbbbbbbbb",
        
    },
    {
        id: 3,
        nome : "cccccccccccccc",
       
    }
 ])

  

 const [visible, setVisible]  = useState(false)

 function ShowModal() {

  setVisible(true);
 }

 function AddTask() {
  setTarefa({...tarefa,
    id: tarefa.length + 1,
    nome: novaTarefa})
console.log(tarefa);
  setVisible(false)

 }

 
  return (
    <div className="App">

    
      <h1>Terca Feira, 20 de Agosto</h1>

      {tarefa.map((l) => {return (


<ListTask
key={l.id}
txtList={l.nome}
/>


        )})}  
    
   <h1>{tarefa.nome}</h1>

<Button 
txt={"Nova Tarefa"}
func={() => ShowModal()}
/>

{visible === true ? (<>
  <h1>Descreva sua tarefa</h1>
        
            <input onChange={(e) => {
                setNovaTarefa(
                  
                e.target.value.trim(),
                
                );
               
              }} className="Input" 
              type="text"
              value={novaTarefa}
              
              />
        <h1>{novaTarefa}</h1>
        <button className="button"
       onClick={() => AddTask(novaTarefa)}
   
        >Confirmar Tarefa</button>
       
</>) : (<></>)}

    </div>
  );
}

export default App;
