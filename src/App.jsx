import { useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import ServiceCard from './components/ServiceCard'
import ProviderCard from './components/ProviderCard'
import ContactForm from './components/ContactForm'
import Footer from './components/Footer'
import './App.css'

function App() {
  // categories
  const categories = [
    { name: "Protective Styles", icon: "🌀" },
    { name: "Loc Services", icon: "🌿" },
    { name: "Wig & Weave", icon: "💇🏾‍♀️" },
    { name: "Cuts & Styling", icon: "✂️" },
    { name: "Coloring & Treatments", icon: "🎨" },
  ]

  // providers (stylists)
  const providers = [
    { id: 1, name: "Reese Winston", service: "Box Braids (medium, mid-back)", price: "$160", category: "Protective Styles" },
    { id: 2, name: "Nina Harris", service: "Knotless Braids (medium, mid-back)", price: "$180", category: "Protective Styles" },
    { id: 3, name: "Jasmine Carter", service: "Passion Twists", price: "$150", category: "Protective Styles" },
    { id: 4, name: "Taylor Brooks", service: "Butterfly Locs", price: "$170", category: "Protective Styles" },
    { id: 5, name: "Maya Johnson", service: "Silk Press", price: "$75", category: "Cuts & Styling" },
    { id: 6, name: "Zara Williams", service: "Loc Retwist", price: "$75", category: "Loc Services" },
    { id: 7, name: "Sasha Brown", service: "Full Hair Coloring", price: "$120", category: "Coloring & Treatments" }
  ]

  // state
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [showContactForm, setShowContactForm] = useState(false)

  // search + filter
  const filteredProviders = providers.filter((p) => {
    const matchesCategory =
      selectedCategory === 'All' || p.category === selectedCategory

    const search = searchTerm.toLowerCase()
    const matchesSearch =
      p.name.toLowerCase().includes(search) ||
      p.service.toLowerCase().includes(search) ||
      p.category.toLowerCase().includes(search) ||
      p.price.toLowerCase().includes(search)

    return matchesCategory && matchesSearch
  })

  return (
    <div className="app">
      <Header onSearch={setSearchTerm} />

      <Hero 
        title="Rooted in Confidence" 
        subtitle="Your Natural Hair, Your Spelman Crown" 
      />

      {/* Service Categories */}
      <section className="categories">
        {categories.map((cat) => (
          <ServiceCard
            key={cat.name}
            category={{ ...cat, count: providers.filter(p => p.category === cat.name).length }}
            onSelect={setSelectedCategory}
            isSelected={selectedCategory === cat.name}
          />
        ))}
        <ServiceCard
          category={{ name: "All", icon: "✨", count: providers.length }}
          onSelect={setSelectedCategory}
          isSelected={selectedCategory === "All"}
        />
      </section>

      {/* Provider List */}
      <section className="providers">
        {filteredProviders.map((provider) => (
          <ProviderCard
            key={provider.id}
            provider={provider}
            onContact={() => setShowContactForm(true)} // opens general form
          />
        ))}
      </section>

      {/* General Contact Form */}
      {showContactForm && (
        <ContactForm
          providers={providers}   // pass all providers for dropdown
          onClose={() => setShowContactForm(false)}
        />
      )}

      <Footer text="© 2025 Rooted in Confidence | Your Crown, Your Power" />
    </div>
  )
}

export default App
