function Navbar() {
    return (
      <header className="navbar">
        <div className="navbar__container">
          <div className="navbar__logo">Timothy Low</div>
  
          <nav className="navbar__menu">
            <a href="#about">About</a>
            <a href="#portfolio">Portfolio</a>
            <a href="#services">Services</a>
            <a href="#testimonials">Testimonial</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>
      </header>
    );
  }
  
  export default Navbar;