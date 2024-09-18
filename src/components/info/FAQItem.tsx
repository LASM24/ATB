import { motion } from 'framer-motion';

interface FAQItemProps {
  question: string;
  answer: string;
}

export const FAQItem: React.FC<FAQItemProps> = ({ question, answer }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    className="relative overflow-hidden group rounded-lg border border-gray-200 shadow-md bg-white"
  >
    <div className="absolute inset-0 bg-gradient-to-r from-yellow-200 to-pink-200 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg" />
    <motion.div
      whileHover={{ scale: 1.03 }}
      className="relative z-10 p-6 flex flex-col space-y-4"
    >
      <div className="flex items-center space-x-4">
        <motion.svg
          whileHover={{ rotate: 360 }}
          transition={{ duration: 0.5 }}
          className="w-8 h-8 text-yellow-600"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
        </motion.svg>
        <h3 className="text-xl font-semibold text-gray-800 group-hover:text-yellow-600 transition-colors duration-300">
          {question}
        </h3>
      </div>
      <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300">
        {answer}
      </p>
    </motion.div>
  </motion.div>
);
