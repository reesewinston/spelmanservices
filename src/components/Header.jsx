import logoImg from '../assets/spelmanlogo.svg'

function Header({ onSearch }) {
  return (
    <header className="header">
      {/* Left side: Logo + Brand */}
      <div className="header-left">
        <img src={logoImg} alt="Spelman Logo" className="header-logo" />
        <h1 className="logo-text">Rooted in Confidence</h1>
      </div>

      {/* Right side: Search */}
      <input
        type="text"
        placeholder="Search hairstyles or services..."
        onChange={(e) => onSearch(e.target.value)}
      />
    </header>
  )
}

export default Header
