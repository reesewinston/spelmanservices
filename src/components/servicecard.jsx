function ServiceCard({ category, onSelect, isSelected }) {
  return (
    <div
      className={`service-card ${isSelected ? 'selected' : ''}`}
      onClick={() => onSelect(category.name)}
    >
      <span className="icon">{category.icon}</span>
      <h3>{category.name}</h3>
      <p>{category.count} providers</p>
    </div>
  )
}

export default ServiceCard
