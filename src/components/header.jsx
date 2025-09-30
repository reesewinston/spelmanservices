

function Header({ onSearch }) {
  return (
    <header className="header">
      <h1 className="logo">Rooted in Confidence</h1>
      <input
        type="text"
        placeholder="Search hairstyles or services..."
        onChange={(e) => onSearch(e.target.value)}
      />
    </header>
  )
}

export default Header
