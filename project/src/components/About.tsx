
import { motion } from 'framer-motion';
import { SectionTitle } from './ui/SectionTitle';
import { GradientCircle } from './ui/GradientCircle';

export const About = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      <GradientCircle
        colors={['from-green-400', 'to-teal-300']}
        className="w-96 h-96 absolute -right-48 top-0 opacity-20"
      />

      <div className="container mx-auto px-4 relative z-auto">
        <SectionTitle>About Me</SectionTitle>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-6 text-lg text-gray-300"
          >
            <p className='relative z-auto'>
              Full Stack Developer with expertise in React.js, Node.js, and modern web technologies.
              Currently pursuing B.Tech in Computer Science at ICFAI Foundation for Higher Education
              with a GPA of 8.42.
            </p>
            
            <div className="bg-gray-800 p-6 rounded-xl relative z-auto">
              <h3 className="text-xl font-semibold mb-4 text-white">Education</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium text-purple-300">ICFAI Foundation for Higher Education</h4>
                  <p className="text-sm text-gray-400">B.Tech Computer Science • 2022 - 2026</p>
                </div>
                <div>
                  <h4 className="font-medium text-purple-300">Narayana Junior College</h4>
                  <p className="text-sm text-gray-400">Intermediate • 2020 - 2022</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <div className="bg-gray-800 p-6 rounded-xl relative z-auto">
              <h3 className="text-xl font-semibold mb-4 text-white">Skills</h3>
              <div className="flex flex-wrap gap-3">
                {['Python', 'JavaScript', 'React.js', 'Node.js', 'SQL', 'TypeScript', 'AWS'].map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 bg-gradient-to-r from-purple-400 to-pink-300 rounded-full text-sm font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};