
import { motion } from 'framer-motion';
import { SectionTitle } from './ui/SectionTitle';
import { GradientCircle } from './ui/GradientCircle';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: "Drug Inventory System",
    description: "Smart India Hackathon 2024 project for streamlined drug distribution using AI analytics.",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80",
    tech: ["React.js", "PostgreSQL", "AI"],
    github: "#",
    live: "#"
  },
  {
    title: "Student Management",
    description: "Comprehensive system for managing student records with secure authentication.",
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80",
    tech: ["MySQL", "PHP", "JavaScript"],
    github: "#",
    live: "#"
  }
];

export const Projects = () => {
  return (
    <section className="py-20 relative overflow-hidden bg-gray-800">
      <GradientCircle
        colors={['from-blue-400', 'to-purple-300']}
        className="w-96 h-96 absolute -left-48 top-0 opacity-20 z-auto"
      />

      <div className="container mx-auto px-4">
        <SectionTitle>Recent Projects</SectionTitle>
        
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="group relative rounded-2xl overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-400/20 to-pink-300/20 opacity-0 group-hover:opacity-100 transition-opacity" />
              
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              
              <div className="p-6 bg-gray-900">
                <h3 className="text-xl font-bold text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-gradient-to-r from-purple-400 to-pink-300 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-4">
                  <a href={project.github} className="text-white hover:text-purple-300">
                    <Github size={20} />
                  </a>
                  <a href={project.live} className="text-white hover:text-purple-300">
                    <ExternalLink size={20} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};