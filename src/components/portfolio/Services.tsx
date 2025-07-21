import { motion } from "framer-motion";
import { Code, Server, Database, Globe, FileText, Shield, Settings, MessageSquare } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Services = () => {
  const services = [
    {
      icon: Code,
      title: "Frontend Development",
      description: "⚛️ React.js, HTML, CSS, UI/UX, animations",
      gradient: "gradient-primary"
    },
    {
      icon: Server,
      title: "Backend Development", 
      description: "🚀 Node.js, Express.js, API development",
      gradient: "gradient-secondary"
    },
    {
      icon: Database,
      title: "Database Design",
      description: "🗄️ MongoDB, MySQL optimization", 
      gradient: "gradient-primary"
    },
    {
      icon: Globe,
      title: "Landing Pages",
      description: "⚡ High-speed responsive one-pagers",
      gradient: "gradient-secondary"
    },
    {
      icon: FileText,
      title: "Google Forms & Sheets",
      description: "📊 Custom feedback systems, automation",
      gradient: "gradient-primary"
    },
    {
      icon: Settings,
      title: "Hosting & Deploy",
      description: "☁️ Netlify, Vercel, GitHub Pages",
      gradient: "gradient-secondary"
    },
    {
      icon: Shield,
      title: "Security & Auth",
      description: "🔐 Login/signup/authentication flows",
      gradient: "gradient-primary"
    },
    {
      icon: MessageSquare,
      title: "Tech Consulting",
      description: "💡 Project planning, wireframes, recommendations",
      gradient: "gradient-secondary"
    }
  ];

  const packages = [
    {
      name: "Starter",
      price: "₹4,999",
      description: "Perfect for small businesses",
      features: ["Landing Page", "Contact Form", "Mobile Responsive", "Basic SEO"]
    },
    {
      name: "Full Website",
      price: "₹14,999",
      description: "Complete web solution",
      features: ["Frontend + Backend", "Database Integration", "User Authentication", "Admin Panel"],
      popular: true
    },
    {
      name: "Custom",
      price: "Contact",
      description: "Tailored to your needs",
      features: ["Custom Features", "Ongoing Support", "Performance Optimization", "Scalable Architecture"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">What I Do</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Full-stack development services to bring your ideas to life
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover-lift transition-smooth bg-card border-border">
                
                <CardContent className="p-6 text-center">
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-full ${service.gradient} flex items-center justify-center`}>
                    <service.icon className="text-primary-foreground" size={24} />
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-foreground">{service.title}</h3>
                  <p className="text-muted-foreground text-sm">{service.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Pricing Packages */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h3 className="text-3xl font-bold mb-4">Package Pricing</h3>
          <p className="text-muted-foreground">Transparent pricing for every budget</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <motion.div
              key={pkg.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className={`relative h-full ${pkg.popular ? 'ring-2 ring-primary shadow-glow' : ''} hover-lift transition-smooth`}>
                {pkg.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <div className="bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-medium">
                      Most Popular
                    </div>
                  </div>
                )}
                <CardContent className="p-8 text-center">
                  <h4 className="text-2xl font-bold mb-2">{pkg.name}</h4>
                  <div className="text-3xl font-bold text-primary mb-2">{pkg.price}</div>
                  <p className="text-muted-foreground mb-6">{pkg.description}</p>
                  <ul className="space-y-2 mb-8">
                    {pkg.features.map((feature) => (
                      <li key={feature} className="text-sm">✓ {feature}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Button 
            className="btn-gradient hover-lift" 
            size="lg"
            onClick={() => document.getElementById('hire')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Let's Work Together
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;