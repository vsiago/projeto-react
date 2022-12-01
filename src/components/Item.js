import PropTypes from 'prop-types'

function Item({ marca, ano_lançamento }) {
    return (
        <>
            <li>{marca}</li>
            <p>Ano de lançamento: {ano_lançamento}</p>
        </>
    )
}

Item.propTypes = {
    marca: PropTypes.string.isRequired,
    ano_lancamento: PropTypes.number,
}

Item.defaultProps = {
    marca: "Faltou a marca",
    ano_lançamento: 0,
}

export default Item