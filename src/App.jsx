import './App.css';
import EditText from './EditElement';
import AddSection from './EntityInfo';
import EntitySkills from './EntitySkills';
import gmailIcon from './assets/gmail-icon.svg';
import wspIcon from './assets/wsp-icon.svg';
import mapsIcon from './assets/maps-icon.svg';
import linkedinIcon from './assets/linkedin-icon.svg';

function App() {

  return (
    <>
      <header className='header'><h1>cv app</h1></header>
      <main>
        <div className='sheet'>
          <section>
            <div className='profile-picture'></div>
            <div className='basic-info'>
              <EditText typeElement="h2" classElement="h2-basic-info" textElement="Jhon Deep" />
              <EditText typeElement="h3" classElement="h3-basic-info" textElement="Web Developer" />
              <EditText typeElement="p" classElement="p-basic-info" textElement="Experienced in both static and dynamic web pages, including database and API integration." />
            </div>
          </section>
          <section className='contact-info'>
            <ul>
              <li>
                <img src={gmailIcon} alt='GMAIL' />
                <EditText typeElement="p" classElement="none" textElement="jhondeep@gmail.com" />
              </li>
              <li>
                <img src={wspIcon} alt='WSP' />
                <EditText typeElement="p" classElement="none" textElement="+011 1 11 2222-3333" />
              </li>
              <li>
                <img src={mapsIcon} alt='MAPS' />
                <EditText typeElement="p" classElement="none" textElement="Miami, Florida. EEUU" />
              </li>
              <li>
                <img src={linkedinIcon} alt='LINKEDIN' />
                <EditText typeElement="p" classElement="none" textElement="linkedin.com/in/jhondeep" />
              </li>
            </ul>
          </section>
          <section className='entity'>
            <h3>EDUCATION BACKGROUND</h3>
            <AddSection />
          </section>
          <section className='skills-info'>
            <h3>SKILLS</h3>
            <EntitySkills />
          </section>
          <section className='entity'>
            <h3>EXPERIENCE</h3>
            <AddSection />
          </section>
        </div>
      </main>
      <footer><h2>By LCA</h2></footer>
    </>
  )
}

export default App
