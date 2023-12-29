import Botao from '../Botao'
import CampoTexto from '../CampoTexto'
import ListaSuspensa from '../ListaSuspensa'
import './Formulario.css'
import { useState } from 'react'


const Formulario = (props) => {

    

    const [nome, setNome] = useState('');
    const [cargo, setCargo] = useState('');
    const [imagem, setImagem] = useState('');
    const [time, setTime] = useState('');



    const aoSalvar = (evento) => {
        evento.preventDefault()
        props.aoColaboradorCadastrado({
            nome,
            cargo,
            imagem,
            time
        })

        setNome('')
        setImagem('')
        setCargo('')
        setTime('')

    }

    return (
        <section className='formulario'>
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <CampoTexto valor={nome} aoAlterado={valor => setNome(valor)} obrigatorio label="Nome" placeholder="Digite seu Nome" />
                <CampoTexto valor={cargo} aoAlterado={valor => setCargo(valor)} obrigatorio label="Cargo" placeholder="Digite Seu cargo" />
                <CampoTexto valor={imagem} aoAlterado={valor => setImagem(valor)} label="imagem" placeholder="Digite o Endereço da imagem" />
                <ListaSuspensa label="Time" valor={time} aoAlterado={valor => setTime(valor)} itens={props.times} />
                <Botao>
                    Criar o Card
                </Botao>
            </form>
        </section>
    )

}

export default Formulario