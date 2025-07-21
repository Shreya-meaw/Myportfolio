import { motion } from "framer-motion";
import { 
  Code, 
  Database, 
  Globe, 
  Server, 
  Smartphone, 
  Cloud,
  Shield,
  Palette,
  GitBranch,
  Zap
} from "lucide-react";

const TechStack = () => {
  const techCategories = [
    {
      title: "Frontend",
      icon: Code,
      color: "text-primary",
      technologies: ["React.js", "HTML5", "CSS3", "Tailwind CSS", "JavaScript", "TypeScript"]
    },
    {
      title: "Backend", 
      icon: Server,
      color: "text-secondary",
      technologies: ["Node.js", "Express.js", "Python", "REST APIs", "GraphQL"]
    },
    {
      title: "Database",
      icon: Database,
      color: "text-primary",
      technologies: ["MongoDB", "MySQL", "PostgreSQL", "Firebase", "Redis"]
    },
    {
      title: "Mobile",
      icon: Smartphone,
      color: "text-secondary", 
      technologies: ["React Native", "PWA", "Responsive Design"]
    },
    {
      title: "Cloud & Hosting",
      icon: Cloud,
      color: "text-primary",
      technologies: ["AWS", "Netlify", "Vercel", "Heroku", "GitHub Pages"]
    },
    {
      title: "Tools & Others",
      icon: Zap,
      color: "text-secondary",
      technologies: ["Git", "Docker", "VS Code", "Figma", "Postman"]
    }
  ];

  return (
    <section id="tech-stack" className="py-20 bg-muted/20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Tech Stack & Tools</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Technologies I use to build amazing digital experiences
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {techCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-card rounded-2xl p-6 shadow-card hover-lift transition-smooth border"
            >
              <div className="flex items-center mb-6">
                <div className={`p-3 rounded-full bg-muted ${category.color}`}>
                  <category.icon size={24} />
                </div>
                <h3 className="text-xl font-semibold ml-4">{category.title}</h3>
              </div>
              
              <div className="space-y-2">
                {category.technologies.map((tech, techIndex) => (
                  <motion.div
                    key={tech}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: (index * 0.1) + (techIndex * 0.05) }}
                    viewport={{ once: true }}
                    className="flex items-center"
                  >
                    <div className="w-2 h-2 rounded-full bg-primary mr-3"></div>
                    <span className="text-sm text-muted-foreground">{tech}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;