import { useState } from 'react'

function ContactForm({ providers, onClose }) {
  const [formData, setFormData] = useState({ 
    name: '', 
    email: '', 
    message: '', 
    selectedProvider: '' 
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!formData.selectedProvider) {
      alert("Please select a provider.")
      return
    }
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="contact-form success">
        Message sent to {formData.selectedProvider}! 🎉
        <button onClick={onClose}>Close</button>
      </div>
    )
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <h2>Book with a Provider</h2>

      {/* Dropdown of providers */}
      <select
        value={formData.selectedProvider}
        onChange={(e) => setFormData({ ...formData, selectedProvider: e.target.value })}
      >
        <option value="">-- Select a Provider --</option>
        {providers.map((p) => (
          <option key={p.id} value={p.name}>
            {p.name} — {p.service}
          </option>
        ))}
      </select>

      <input
        placeholder="Your name"
        value={formData.name}
        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
      />
      <input
        placeholder="Your email"
        value={formData.email}
        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
      />
      <textarea
        placeholder="Your message"
        value={formData.message}
        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
      />

      <button type="submit">Send</button>
      <button type="button" onClick={onClose}>Close</button>
    </form>
  )
}

export default ContactForm
