import '../css/Header.css';

export default function Header() {
  return (
    <header className="bg-body-tertiary py-4">
      <nav className="navbar">
        <div className="container d-flex justify-content-center">
          <a className="navbar-brand d-flex align-items-center" href="#">
            <img src="/logo-4lee.svg" alt="logo-4lee" className="logo-4lee" />
          </a>
        </div>
        <div className="container d-flex justify-content-center mt-4">
            <a href="#">
                <span>Home</span>
            </a>
        </div>
      </nav>
    </header>
  );
}
