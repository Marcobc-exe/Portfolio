import AboutMe from '../components/aboutMe/AboutMe'
import Browser from '../components/Browser/Browser'
import Contact from '../components/contact/Contact'
import ExpLaboral from '../components/experience/WorkExp'
import ProfilePhoto from '../components/profilePhoto/ProfilePhoto'
import Proyects from '../components/proyects/Proyects'
// import Resume from '../components/Resume/Resume'
import Title from '../components/title/Title'

const LinksRoutes = () => {
  return (
    <>
        <Browser/>
        <Title />
        <ProfilePhoto />
        <AboutMe />
        {/* <Resume /> */}
        <ExpLaboral />
        <Proyects />
        <Contact />
    </>
  )
}

export default LinksRoutes