import { motion } from 'framer-motion';
import { GradientCircle } from './ui/GradientCircle';
import profileImage from '/src/images/profile.jpeg';

export const Hero = () => {
  return (
    <section className="min-h-screen relative overflow-hidden flex items-center">
      {/* Background Decorations */}
      <GradientCircle
        colors={['from-purple-400', 'to-pink-300']}
        className="w-96 h-96 absolute -top-20 -left-20 opacity-20"
      />
      <GradientCircle
        colors={['from-blue-400', 'to-teal-300']}
        className="w-64 h-64 absolute bottom-20 right-20 opacity-20"
      />

      <div className="container mx-auto px-4 z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-7xl font-bold mb-4">
              <span className="text-purple-300">Hello Everyone.</span>
              <br />
              I'm Nithin Reddy
            </h1>
            <div className="inline-block bg-gradient-to-r from-purple-400 to-pink-300 px-6 py-2 rounded-full text-xl font-medium">
              Full Stack Developer
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="rounded-full overflow-hidden border-4 border-purple-300 w-80 h-80 mx-auto">
              <img
                src={profileImage}
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
            <GradientCircle
              colors={['from-teal-400', 'to-blue-300']}
              className="w-32 h-32 absolute -bottom-8 -right-8 opacity-30"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};