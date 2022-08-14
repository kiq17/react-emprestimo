import React from "react";
import { calcularTotal as Calcular } from '../calcular';

const Formulario = ({ valor, prazo, setValor, setPrazo, setTotal }) => {

    function calcularValor(e) {
        e.preventDefault()
        if (valor == '' || prazo == '') {
            return alert('Campos Vazios!')
        }
        const totalResultado = Calcular(valor, prazo)
        setTotal(totalResultado)
    }

    return (
        <>
            <form action="" className="form-box">
                <div className="conteudo-box">
                    <div className="input-box">
                        <input type="text" onChange={(e) => setValor(e.target.value)} placeholder="Qual o valor escolhido?" />

                    </div>
                    <div className="select-box">
                        <select name="" onClick={(e) => setPrazo(e.target.value)}>
                            <option value="">Selecionar</option>
                            <option value="3">3 Meses</option>
                            <option value="6">6 Meses</option>
                            <option value="12">12 Meses</option>
                            <option value="24">24 Meses</option>
                        </select>
                    </div>
                </div>
                <button type="submit" onClick={calcularValor}>Calcular</button>
            </form>

        </>
    )
}

export default Formulario