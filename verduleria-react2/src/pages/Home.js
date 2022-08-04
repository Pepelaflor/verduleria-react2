import { Link } from "react-router-dom"
import ItemListContainer from "../components/ItemListContainer"
const Home = () => {
    return (
        <Link to='/'>
        <div className="container">
            <section className='main-container'>
              <ItemListContainer/>
            </section>
          </div>  
        </Link>  
    )
}

export default Home