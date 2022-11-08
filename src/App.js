import './App.css';
import AboutMe from './components/aboutMe/AboutMe';
import ExpLaboral from './components/experiencia/ExpLaboral';
import ProfilePhoto from './components/profilePhoto/ProfilePhoto';
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
    </div>
  );
}

export default App;
