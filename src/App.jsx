import useReveal from './hooks/useReveal.js'
import Nav from './components/Nav.jsx'
import Cover from './components/Cover.jsx'
import About from './components/About.jsx'
import Services from './components/Services.jsx'
import Divider from './components/Divider.jsx'
import Project from './components/Project.jsx'
import FloatIcons from './components/FloatIcons.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  useReveal()

  return (
    <>
      <Nav />
      <div className="year-rail left">2022</div>
      <div className="year-rail right">2022</div>

      <Cover />
      <About />
      <Services />
      <Divider id="branding" title={['Branding']} active="Branding" />
      <Project />
      <Divider id="digital" title={['Digital', 'Content']} active="Digital Content" twoLine>
        <FloatIcons />
      </Divider>
      <Footer />
    </>
  )
}
