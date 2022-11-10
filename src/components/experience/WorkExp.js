import ExpGolan from './GolanExp'
import ExpGolanIntern from './GolanInternExp'
import './WorkExp.css'

const ExpLaboral = () => {
  return (
    <div className='container-exp-laboral'>
        <h2># Work Experience</h2>
        <ExpGolan />
        <ExpGolanIntern />
    </div>
  )
}

export default ExpLaboral