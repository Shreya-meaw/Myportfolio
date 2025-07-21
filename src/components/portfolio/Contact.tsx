import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Github, Linkedin, Download, MessageCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Contact = () => {
  const contactMethods = [
    {
      icon: Mail,
      title: "Email",
      value: "shreya.singh.dev@gmail.com",
      href: "mailto:shreya.singh.dev@gmail.com",
      color: "text-primary"
    },
    {
      icon: Phone,
      title: "WhatsApp",
      value: "+91 98765 43210",
      href: "https://wa.me/919876543210",
      color: "text-success"
    },
    {
      icon: MapPin,
      title: "Location",
      value: "India (Available Globally)",
      href: "#",
      color: "text-secondary"
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      title: "GitHub",
      value: "@shreyasingh",
      href: "https://github.com/shreyasingh",
      color: "text-foreground"
    },
    {
      icon: Linkedin,
      title: "LinkedIn",
      value: "Shreya Singh",
      href: "https://linkedin.com/in/shreya-singh-dev",
      color: "text-primary"
    },
    {
      icon: MessageCircle,
      title: "Discord",
      value: "shreya_dev#1234",
      href: "#",
      color: "text-secondary"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Let's Connect</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to start your project? Get in touch through any of these channels
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* Contact Methods */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {contactMethods.map((method, index) => (
              <motion.div
                key={method.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="text-center hover-lift hover-glow transition-smooth group">
                  <CardContent className="p-8">
                    <method.icon className={`mx-auto mb-4 ${method.color} group-hover:scale-110 transition-smooth`} size={48} />
                    <h3 className="text-lg font-semibold mb-2">{method.title}</h3>
                    <p className="text-muted-foreground mb-4">{method.value}</p>
                    <Button
                      variant="outline"
                      className="hover-scale hover-glow"
                      onClick={() => window.open(method.href, '_blank')}
                    >
                      Get in Touch
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Social Media */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h3 className="text-2xl font-bold mb-8">Follow Me</h3>
            <div className="flex justify-center space-x-6">
              {socialLinks.map((social, index) => (
                <motion.div
                  key={social.title}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Button
                    variant="outline"
                    size="icon"
                    className="w-16 h-16 rounded-full hover-scale hover-glow group"
                    onClick={() => window.open(social.href, '_blank')}
                  >
                    <social.icon className={`${social.color} group-hover:scale-110 transition-smooth`} size={24} />
                  </Button>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Resume Download */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <Card className="gradient-card max-w-md mx-auto">
              <CardContent className="p-8">
                <Download className="mx-auto mb-4 text-primary" size={48} />
                <h3 className="text-xl font-bold mb-2">Download Resume</h3>
                <p className="text-muted-foreground mb-6">
                  Get a detailed overview of my skills and experience
                </p>
                <Button 
                  className="btn-gradient hover-lift hover-glow font-semibold" 
                  size="lg"
                  onClick={() => window.open('/resume.pdf', '_blank')}
                >
                  <Download className="mr-2" size={16} />
                  Download PDF
                </Button>
              </CardContent>
            </Card>
          </motion.div>

          {/* Quick Response Promise */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <div className="inline-flex items-center space-x-2 bg-success/10 text-success px-6 py-3 rounded-full">
              <div className="w-2 h-2 bg-success rounded-full animate-pulse"></div>
              <span className="font-medium">I typically respond within 2-4 hours</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;