import { useState } from "react"
function Titulo01({nome, idade, cor}){
    const [texto, setTexto] = useState('Um texto de exemplo')
    const [campoDeTexto, setCampoDetexto] = useState('')

    function clicou(){
        setTexto(campoDeTexto);
    }

    return (
        <div>
            <h1>{texto}</h1>
            <button onClick={clicou}>click aqui</button>
            <input value={campoDeTexto} onChange={(e)=>{setCampoDetexto(e.target.value)}} type="text" />
            <p>Estou começando a entender o esquema de componentização com react</p>
            <p style={{color:cor}}>Meu nome é {nome} {idade} {cor}</p>
        </div>
    )
}

export default Titulo01