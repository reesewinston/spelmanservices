function ProviderCard({ provider, onContact }) {
  return (
    <div className="card">
      <img
        src={provider.image}
        alt={provider.name}
        style={{
          borderRadius: "50%",
          border: "3px solid #FBB7C5",
          width: "120px",
          height: "120px",
          objectFit: "cover"
        }}
      />
      <h3>{provider.name}</h3>
      <p style={{ color: "#FBB7C5" }}>{provider.title}</p>
      <p>{provider.service}</p>
      <p><strong>{provider.price}</strong></p>
      <button onClick={() => onContact(provider)}>Contact</button>
    </div>
  )
}

export default ProviderCard
