import PropTypes from 'prop-types'

export const Button = ({ color, text, onClickSent }) => {

    return (
        <button className='btn'
            style={{ backgroundColor: color }}
            onClick={onClickSent}>
            {text}
        </ button>
    )
}

Button.defaultProps = {
    color: 'steelblue',
}

Button.propTypes = {
    text: PropTypes.string,
    color: PropTypes.string,
    onClickSent: PropTypes.func.isRequired
}

export default Button