import { useState } from "react"
import Header from "./components/Header"
import Hero from "./components/Hero"
import ServiceCard from "./components/ServiceCard"
import ProviderCard from "./components/ProviderCard"
import ContactForm from "./components/ContactForm"
import Footer from "./components/Footer"
import "./App.css"

function App() {
  const [contactProvider, setContactProvider] = useState(null)

  // Categories
  const categories = [
    { name: "Natural Hair Routines", icon: "🌿", count: 12 },
    { name: "Braids", icon: "💇🏾‍♀️", count: 10 },
    { name: "Wigs & Installs", icon: "💆🏾‍♀️", count: 7 },
  ]

  // Providers
  const providers = [
    {
      id: 1,
      name: "Reese Winston",
      title: "Master Natural Stylist",
      service: "Natural Hair Care",
      price: "$60",
      image: "https://via.placeholder.com/150"
    },
    {
      id: 2,
      name: "Zara Williams",
      title: "Protective Style Specialist",
      service: "Wig Install",
      price: "$100",
      image: "https://via.placeholder.com/150"
    },
    {
      id: 3,
      name: "Aaliyah Brown",
      title: "Scalp & Treatment Expert",
      service: "Silk Press",
      price: "$65",
      image: "https://via.placeholder.com/150"
    }
  ]

  return (
    <div>
      <Header />
      <Hero />

      {/* Services Section */}
      <section id="services">
        <h2>Our Services</h2>
        <div className="grid">
          {categories.map((c) => (
            <ServiceCard key={c.name} category={c} />
          ))}
        </div>
      </section>

      {/* Providers Section */}
      <section id="providers">
        <h2>Meet Our Stylists</h2>
        <div className="grid">
          {providers.map((p) => (
            <ProviderCard
              key={p.id}
              provider={p}
              onContact={setContactProvider}
            />
          ))}
        </div>
      </section>

      {/* Contact Form */}
      {contactProvider && (
        <ContactForm
          provider={contactProvider}
          onClose={() => setContactProvider(null)}
        />
      )}

      <Footer />
    </div>
  )
}

export default App
