function ProviderCard({ provider, onContact }) {
  return (
    <div className="provider-card">
      <h3>{provider.name}</h3>
      <p><strong>Service:</strong> {provider.service}</p>
      <p className="price">{provider.price}</p>
      <button onClick={onContact}>Contact</button>
    </div>
  )
}

export default ProviderCard
