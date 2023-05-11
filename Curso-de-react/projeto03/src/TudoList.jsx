import React, {useState, useEffect} from 'react';
import './TudoList.css'
import icon from './assets/icon.png'

function TudoList(){
    const listaStorage = localStorage.getItem('Lista');
    const [lista, setLista] = useState(listaStorage ? JSON.parse(listaStorage) : []);
    const [novoItem, setNovoItem] = useState('');

    useEffect(()=>{
        localStorage.setItem('Lista', JSON.stringify(lista));
    }, [lista])

    function adicionaItem(form){
        form.preventDefault();
        if(!novoItem){
            return;
        }
        setLista([...lista, {text: novoItem, isCompleted: false}])
        setNovoItem('');
        document.getElementById('inputEntrada').focus();
    }

    function clicou(indice){
        const listaAux = [...lista];
        listaAux[indice].isCompleted = !listaAux[indice].isCompleted;
        setLista(listaAux);
    }

    function deleta(indice){
        const listaAux = [...lista];
        listaAux.splice(indice,1);
        setLista(listaAux);
    }
    function deletaTudo(){
        setLista();
    }

    return (
        <div>
            <h1>Lista de tarefas</h1>
            <form onSubmit={adicionaItem}>
                <input id='inputEntrada' type="text" value={novoItem} onChange={(e)=>(setNovoItem(e.target.value))} placeholder='Adicione uma tarefa'/>
                <button className='add' type="submit">Add</button>
            </form>
            <div className= 'ListaTarefas'>
                <div style={{textAlign:'center'}}>
                    {
                        lista.length < 1
                            ?
                            <img className='iconCenter' src={icon}/>
                            :
                            lista.map((item, indice)=>(
                                <div key={indice} className={item.isCompleted ? 'item completo' : 'item'}>
                                    <span onClick={()=>(clicou(indice))}>{item.text}</span>
                                    <button onClick={()=>(deleta(indice))} className='del'>Deletar</button>
                                </div>
                            ))
                    }
                    {
                        lista.length > 0 &&
                        <button onClick={()=>(deletaTudo())} className='delete'>Deletar todos</button>
                    }
                </div>
                
            </div>
        </div>
    )
}

export default TudoList