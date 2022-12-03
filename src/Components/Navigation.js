const Navigation = () => {
  return (
    <nav className="navigation">
      <div className="container navigation-wraper">
        <div className="logo">moja firma</div>
        <div className="mobile-toggle">
          <i className="fas fa-bars"></i>
        </div>
        <ul className="nav-list">
          <li className="nav-item">
            <a href="#specialists">o nas</a>
          </li>
          <li className="nav-item">
            <a href="#services">oferta</a>
          </li>
          <li className="nav-item">
            <a href="#">kontakt</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
