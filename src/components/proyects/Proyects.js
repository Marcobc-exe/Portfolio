import './proyects.css'
import gmail from "../../img/gmail.png";

const Proyects = () => {
  return (
    <div className='container-proyects' id='proyects'>
        <h2># Proyects</h2>

        <section className='container-flex'>

          <section className='container-element'>
            <img src={gmail} alt="" className="imagen-gmail" />
            <p>Description proyect</p>
          </section>

          <section className='container-element'>
            <img src={gmail} alt="" className="imagen-gmail" />
            <p>Description proyect</p>
          </section>

        </section>
    </div>
  )
}

export default Proyects