import './App.css';
import Home from './components/Home';
import Navigation from './components/Navigation';
import CurrentProjects from './components/CurrentProjects';
import OlderProjects from './components/OlderProjects';
import Project from './components/Project';
import ProjectEdit from './components/ProjectEdit';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App(){
  return (
    <div>
      <video autoPlay muted loop id="background_video">
        <source src="/videos/background.mp4" type='video/mp4'/>
      </video>
      <Router basename={process.env.PUBLIC_URL}>
        <div id="body">
          <Navigation />
          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/proyectos" element={<CurrentProjects />}/>
            <Route path="/versiones-anteriores" element={<OlderProjects />}/>
            <Route path="/proyecto/:name" element={<Project />}/>
            <Route path="/proyecto/:name/edit" element={<ProjectEdit />}/>
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
