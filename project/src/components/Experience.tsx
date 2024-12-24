import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Award } from 'lucide-react';

export const Experience = () => {
  return (
    <section className="py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-white mb-12 text-center"
        >
          Experience & Achievements
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-gray-700 p-6 rounded-lg"
          >
            <div className="flex items-center mb-4">
              <Briefcase className="text-indigo-400 mr-2" />
              <h3 className="text-2xl font-bold text-white">Work Experience</h3>
            </div>
            
            <div className="space-y-6">
              <div>
                <h4 className="text-xl font-semibold text-white">ERP Developer</h4>
                <p className="text-gray-400">Codeplayers Private Limited</p>
                <p className="text-gray-400">June 2024 - July 2024</p>
                <ul className="mt-2 space-y-2 text-gray-300">
                  <li>• Redesigned and optimized UI/UX to increase website traffic by 25%</li>
                  <li>• Developed a scalable ERP system increasing user engagement by 30%</li>
                  <li>• Engineered secure systems reducing potential data breaches by 70%</li>
                </ul>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-gray-700 p-6 rounded-lg"
          >
            <div className="flex items-center mb-4">
              <Award className="text-indigo-400 mr-2" />
              <h3 className="text-2xl font-bold text-white">Achievements</h3>
            </div>
            
            <div className="space-y-6">
              <div>
                <h4 className="text-xl font-semibold text-white">Smart India Hackathon 2024</h4>
                <p className="text-gray-300">Qualified for Internal Round</p>
              </div>
              
              <div>
                <h4 className="text-xl font-semibold text-white">AWS GenAI Hackathon</h4>
                <p className="text-gray-300">Runners Up - August 2024</p>
              </div>
              
              <div>
                <h4 className="text-xl font-semibold text-white">Event Management Lead</h4>
                <p className="text-gray-300">GDG on Campus IFHE</p>
                <p className="text-gray-300">Increased student engagement by 40%</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};