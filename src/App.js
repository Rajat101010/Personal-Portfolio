import './css/App.css';

import Home from './pages/home';
import About from './pages/about';
import Portfolio from './pages/portfolio';

import AboutMe from './pages/about_me';
import WorkExperience from './pages/work_experience';
import EducationalQualificateion from './pages/educational_qualification';

import MySkills from './pages/my_skills';
import MyProjects from './pages/my_projects';
import MyCertificates from './pages/my_certificate';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <main>
      <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home />} />
          </Routes>
      </BrowserRouter>
      <BrowserRouter>
          <Routes>
            <Route path='/about' element={<About />} />
          </Routes>
      </BrowserRouter>
      <BrowserRouter>
          <Routes>
            <Route path='/portfolio' element={<Portfolio />} />
          </Routes>
      </BrowserRouter>
      <BrowserRouter>
          <Routes>
            <Route path='/about-me' element={<AboutMe />} />
          </Routes>
      </BrowserRouter>

      <BrowserRouter>
          <Routes>
            <Route path='/work-experience' element={<WorkExperience />} />
          </Routes>
      </BrowserRouter>
      <BrowserRouter>
          <Routes>
            <Route path='/educational-qualification' element={<EducationalQualificateion />} />
          </Routes>
      </BrowserRouter>
      <BrowserRouter>
          <Routes>
            <Route path='/my-skills' element={<MySkills />} />
          </Routes>
      </BrowserRouter>
      <BrowserRouter>
          <Routes>
            <Route path='/my-projects' element={<MyProjects />} />
          </Routes>
      </BrowserRouter>
      <BrowserRouter>
          <Routes>
            <Route path='/my-certificates' element={<MyCertificates />} />
          </Routes>
      </BrowserRouter>
    </main>
  );
}

export default App;
