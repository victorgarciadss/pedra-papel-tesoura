import { useState } from 'react';

import Batalha from './Batalha';
import './Jogadores.css'



const Jogadores = () => {

    const [vitorias, setVitorias] = useState(0);
    const [vitoriasOponente, setVitoriasOponente] = useState(0);

    const checkWinsJogador = () => setVitorias(vitorias + 1);
    
    const checkWinsOponente = () => setVitoriasOponente(vitoriasOponente + 1);

    return(
        <>
        <p className='vitorias'>Vitórias:</p>

        <div className="jogadores">
            <div className="player1">
                Jogador: {vitorias}
            </div>
            <div className="maquina">
                Máquina: {vitoriasOponente}
            </div>  
        </div>

        <Batalha 
            checkWinsJogador={checkWinsJogador}
            checkWinsOponente={checkWinsOponente}/>
        </>
    )
}

export default Jogadores;