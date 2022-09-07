import './Campo.css'

import Jogadores from './Jogadores';

const CampoDeJogo = () => {
    return(
        <div className="campo">
            <h1>Bem-Vindo ao Pedra-Papel-Tesoura</h1>
            <Jogadores />
        </div>
    )
}

export default CampoDeJogo;