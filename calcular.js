export function calcularTotal(qtd, prazo) {
    const qtdInt = parseInt(qtd)
    const prazoInt = parseInt(prazo)

    let totalQtd
    if (qtdInt <= 1000) {
        totalQtd = qtdInt * 0.25
    } else if (qtdInt > 1000 && qtdInt <= 5000) {
        totalQtd = qtdInt * 0.20
    } else if (qtdInt > 5000 && qtdInt <= 1000) {
        totalQtd = qtdInt * 0.15
    } else {
        totalQtd = qtdInt * 0.10
    }


    let totalPrazo
    switch (prazoInt) {
        case 3:
            totalPrazo = qtdInt * 0.05
            break;
        case 6:
            totalPrazo = qtdInt * 0.10
            break;
        case 12:
            totalPrazo = qtdInt * 0.15
            break;
        case 24:
            totalPrazo = qtdInt * 0.20
            break;

        default:
            break;
    }
    return totalQtd + totalPrazo + qtdInt
}