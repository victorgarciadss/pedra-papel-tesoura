import './Batalha.css'

import { useState } from "react";
import Resultado from './Resultado';



const Batalha = (props) => {

    let mensagemResposta = '';

    const [gesto, novoGesto] = useState(mensagemResposta);
    const [gestoOponente, setGestoOponente] = useState(mensagemResposta);
    const [valid, setValid] = useState(false);
    
    
    const handleClick = (e) => {

        setValid(true);

        if(valid === false){
            novoGesto(e.target.innerHTML);
        
            let resposta = Math.ceil((Math.random()*3));
            
            if(resposta === 1){
                setGestoOponente('\u270A');
            }
            else if(resposta === 2){
                setGestoOponente('\u270B');
            }
            else{
                setGestoOponente('\u270C');
            }
        }
            
    }


     const limparGesto = () => {
        novoGesto("");
        setGestoOponente("");
        setValid(false);
     }

    return(
        <>
        
        <div className='batalha'>
            <div className="lado-esquerdo">
                <div className='opcoes-gesto' onClick={handleClick}>{'\u270A'}</div> 
                <div className='opcoes-gesto' onClick={handleClick}>{'\u270B'}</div> 
                <div className='opcoes-gesto' onClick={handleClick}>{'\u270C'}</div>
            </div>

            <div className='resposta'>
                {gesto}
            </div>
            
            <div className='versus'>X</div>

            <div className='resposta'>
                {gestoOponente}
            </div>

            <div className='lado-direito'>
                <div className='opcoes-gesto'>{'\u270A'}</div>
                <div className='opcoes-gesto'>{'\u270B'}</div>
                <div className='opcoes-gesto'>{'\u270C'}</div>
            </div>
 
        </div>

        <div>
            {gesto !== '' && <Resultado
                jogador={gesto}
                oponente={gestoOponente} 
                pedra={'\u270A'}
                papel={'\u270B'}
                tesoura={'\u270C'}
                evento={limparGesto}
                checkWinsJogador={props.checkWinsJogador}
                checkWinsOponente={props.checkWinsOponente}/>}
        </div>
        </>
    )
}

export default Batalha;