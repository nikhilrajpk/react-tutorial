import { Link } from "react-router-dom"

const Contact = ()=> {
    console.log('contact')
    return(
        <div>
            <Link to='/' >Home</Link> {"   "}
            <Link to='/about'>About</Link>
            <h1>Contact page</h1>
        </div>
    )
    }

export default Contact