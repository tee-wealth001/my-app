//structuring by not using props object to fetched attribute
// const Header = (props) => {
//   return (
//     <header>

//         <h1>{props.title}</h1>

//     </header>
//   );
// }
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>.
// import PropTypes from 'prop-types'
import { Button } from "./Button";
import { useLocation } from "react-router-dom";
//destructuring by not using props object
const Header = ({ title, onAdd, showAdd }) => {

    const location = useLocation()

    return (
        <header className='header'>
            {/* inline styling required the use of double curly bracket 
            <style = {{ color: 'red', backgroundColor: 'blue' }}>
            also, camelCase is used instead of hyphen for long css attributed*/}
            {/* // you can also create a variable <style = {headingStyle}> for the style and reference it inline */}
            <h1>{title}</h1>
            {location.pathname === '/' &&
                (<Button
                    color={showAdd ? 'red' : 'green'}
                    text={showAdd ? 'Close' : 'Add'}
                    onClickSent={onAdd} />)
            }
        </header>
    );
}

// when no value is passed in the header tag
// Header.defaultProps = {
//     title: 'Added default',
// }

// you can also set the types of the props
// Header.propTypes = {
//     title: PropTypes.string,
// }

// you can also create a variable for the style and reference it inline
// <h1 style={HeadingStyle}>{title}</h1>

// const headingStyle = {
//     color: 'red', 
//     backgroundColor: 'blue' 
// }

export default Header
