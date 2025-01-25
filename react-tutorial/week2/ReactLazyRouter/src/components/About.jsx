import { Link } from "react-router-dom"

const About = ()=>{
    console.log('about')
    return(
        <div>
            <Link to='/' >Home</Link>{"   "}
            <Link to='/contact'>Contact</Link>
            <h1>About page</h1>
        </div>
    )
    }

export default About