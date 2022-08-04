import { Link } from "react-router-dom"
import ItemListContainer from "../components/ItemListContainer"
const Products = () => {
    return (
        <Link to='/productos'>
        <div className="container">
            <section className='main-container'>
              <ItemListContainer/>
            </section>
          </div>  
        </Link>  
    )
}

export default Products