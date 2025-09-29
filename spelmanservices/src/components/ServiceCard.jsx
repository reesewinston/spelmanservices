function ServiceCard({ category }) {
  return (
    <div className="card">
      <h3>{category.icon} {category.name}</h3>
      <p>{category.count} services offered</p>
      <p style={{ color: "#007FD7", fontWeight: "bold" }}>
        Spelman Student Discount Available
      </p>
    </div>
  )
}

export default ServiceCard
