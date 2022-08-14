import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDollarSign, faSackDollar, faHourglassHalf } from '@fortawesome/free-solid-svg-icons'

const Resultado = ({ prazo, valor, total }) => {

    let valorConvertido = parseInt(valor).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })

    let totalConvertido = parseInt(total).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })

    return (
        <>
            <div className="single-conteudo">
                <FontAwesomeIcon icon={faDollarSign} />
                <p>Valor escolhido: <span>{valorConvertido}</span> </p>
            </div>
            <div className="single-conteudo">
                <FontAwesomeIcon icon={faHourglassHalf} />
                <p>Prazo para pagar: <span>
                {prazo} Meses</span></p>
            </div>
            <div className="single-conteudo">
                <FontAwesomeIcon icon={faSackDollar} />
                <p>Total a ser pago: <span>{totalConvertido}</span></p>
            </div>
        </>
    )
}

export default Resultado