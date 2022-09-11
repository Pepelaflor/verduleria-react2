import { Link } from "react-router-dom"
import ItemListContainer from "../components/ItemListContainer"
const Home = () => {
    return (
        <div className="container">
            <section className='home-container'>
              <h2 className="homeheader">La verduleria de tu barrio!</h2>
              <p className="hometext">Bienvenido a la nueva tienda de la verduleria que mas queres!</p>
              <p className="hometext">Aca vas a encontrar nuestros productos que tanto te gustan, frescos, naturales y VIRTUALES</p>
              <p className="hometext">Gracias por elegirnos</p>
            </section>
          </div>  
    )
}

export default Home