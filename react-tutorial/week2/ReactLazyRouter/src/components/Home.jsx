import { Link } from "react-router-dom"

const Home = ()=> {
    console.log('home')
return(
    <div>
        <Link to='/about'>About </Link>{"   "}
        <Link to='/contact'>Contact</Link>
        <h1>Home page</h1>
    </div>
)
}
export default Home