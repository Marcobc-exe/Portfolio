import './proyects.css'
import datasEmployee from "../../img/welcome.png";
import userList from "../../img/preview-webpage.png"

const Proyects = () => {
  return (
    <div className='container-proyects' id='proyects'>
        <h2># Proyectos</h2>

        <section className='container-flex'>

          <section className='container-element'>
            <a href="https://github.com/Marcobc-exe/datas-employee#getting-started">
              <img src={datasEmployee} alt="" className="project-imagen" />
            </a>
            <h4>Datas Employee</h4>
            <p className='description-proyect'>
              Una API con Node.js y Express que consulta a una base de dato en MySQL, retornando la información
              de 3 empleados en formato JSON al front-end.
            </p>
          </section>

          <section className='container-element'>
            <a href="https://github.com/Marcobc-exe/Listando-usuarios#fetch-api-false">
              <img src={userList} alt="" className="project-imagen" />
            </a>
            <h4>User List</h4>
              <p className='description-proyect'>
              Consumiendo una API free con información de usuarios y retornándolos a una interfazgráfica utilizando HTML, CSS y JavaScript.
              </p>
          </section>

        </section>
    </div>
  )
}

export default Proyects