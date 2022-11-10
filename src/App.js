import './App.css';
import AboutMe from './components/aboutMe/AboutMe';
import Contact from './components/contact/Contact';
import ExpLaboral from './components/experience/WorkExp';
import ProfilePhoto from './components/profilePhoto/ProfilePhoto';
import Proyects from './components/proyects/Proyects';
import Resume from './components/Resume/Resume';
import Title from './components/title/Title';

const App = () => {
  return (
    <div className="App">
      <Title />
      <ProfilePhoto />
      <AboutMe />
      <Resume />
      <ExpLaboral />
      <Proyects />
      <Contact />
    </div>
  );
}

export default App;
