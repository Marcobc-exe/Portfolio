import './proyects.css'
import datasEmployee from "../../img/welcome.png";
import userList from "../../img/preview-webpage.png"

const Proyects = () => {
  return (
    <div className='container-proyects' id='proyects'>
        <h2># Proyects</h2>

        <section className='container-flex'>

          <section className='container-element'>
            <a href="https://github.com/Marcobc-exe/datas-employee#getting-started">
              <img src={datasEmployee} alt="" className="project-imagen" />
            </a>
            <h4>Datas Employee</h4>
            <p className='description-proyect'>Datas-employee is a Rest API developed using Node.js and Express where different types of queries to can be made to a database such as create, update, get an delete the data of the 3 employees registered in the db.

            </p>
          </section>

          <section className='container-element'>
            <a href="https://github.com/Marcobc-exe/Listando-usuarios#fetch-api-false">
              <img src={userList} alt="" className="project-imagen" />
            </a>
            <h4>User List</h4>
            <p className='description-proyect'>This is a simple web page where I make use a false api with user datas</p>
          </section>

        </section>
    </div>
  )
}

export default Proyects