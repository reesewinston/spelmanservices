import { useState } from "react"

function ContactForm({ provider, onClose }) {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <section id="contact">
        <h2>Inquiry Sent!</h2>
        <p>Your message has been sent to {provider.name}.</p>
        <button onClick={onClose}>Close</button>
      </section>
    )
  }

  return (
    <section id="contact">
      <h2>Contact {provider.name}</h2>
      <form onSubmit={handleSubmit}>
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
        <button type="submit">Send Message</button>
        <button type="button" onClick={onClose}>Close</button>
      </form>
    </section>
  )
}

export default ContactForm
