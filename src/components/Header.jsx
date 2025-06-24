import '../styles/Header.css'
import GlitchText from './GlitchText'

function Header() {
  return (
    <header>
      <GlitchText
        speed={2.5}
        enableShadows={true}
        enableOnHover={true}
        className="site-title"
      >
        Pet Profile Cards
      </GlitchText>
      <nav className="main-nav">
        <a href="#" className="nav-item">Home</a>
        <a href="#" className="nav-item">Gallery</a>
        <a href="#" className="nav-item">About</a>
      </nav>
    </header>
  );
}

export default Header;
