import './Resultado.css'
import styled from 'styled-components' 

const Span = styled.span `
        background-color: ${props =>
            props.vencedor === 'Jogador' ? "green" :
            props.vencedor === 'Máquina' ? "red" : "transparent"};
        
        border-radius: 0.2rem;
        padding: 2px;
        animation: transparencia 300ms;
    `

const Resultado = (props) => {
    
    let vencedor = '';

    if((props.jogador === props.pedra && props.oponente === props.tesoura) ||
       (props.jogador === props.papel && props.oponente === props.pedra)   ||
       (props.jogador === props.tesoura && props.oponente === props.papel)){

        vencedor = 'Jogador';

    }

    else if((props.jogador === props.pedra && props.oponente === props.papel) ||
            (props.jogador === props.papel && props.oponente === props.tesoura) ||
            (props.jogador === props.tesoura && props.oponente === props.pedra)){

        vencedor = 'Máquina';
        
    }

    else{
        vencedor = 'Empate';
    }

    

    const handleClick = () => {
        props.evento();

        if((props.jogador === props.pedra && props.oponente === props.tesoura) ||
            (props.jogador === props.papel && props.oponente === props.pedra)   ||
            (props.jogador === props.tesoura && props.oponente === props.papel)){

            props.checkWinsJogador();

    }
    else if((props.jogador === props.pedra && props.oponente === props.papel) ||
            (props.jogador === props.papel && props.oponente === props.tesoura) ||
            (props.jogador === props.tesoura && props.oponente === props.pedra)){

        
            props.checkWinsOponente();
    }
        
    }

    return(
        <>
        <div className="campo-resultado">
            <p className="vencedor">
                Vencedor: <Span vencedor={vencedor}>{vencedor}</Span>
            </p>

            <button className="botao" onClick={handleClick}>Jogar Novamente</button>
        </div>
        </>
    )
}

export default Resultado;