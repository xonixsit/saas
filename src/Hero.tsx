import { useNavigate } from 'react-router-dom';

const Hero = () => {
    const navigate = useNavigate(); // Create navigate instance

    return (
        <header className="relative pt-36 pb-28 overflow-hidden bg-gradient-to-r from-blue-500 to-purple-500">
        <div className="container mx-auto px-6 text-center">
          {/* Heading Section */}
          <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-6 leading-tight">
            Automate Your Workflow, Achieve More
          </h1>
          <p className="text-lg md:text-xl text-white mb-8 max-w-3xl mx-auto">
            Boost your productivity with our intuitive automation platform. Simplify tasks, save time, and scale your business effortlessly.
          </p>

          {/* Call to Action Section */}
          <div className="flex justify-center gap-6">
            <button
              className="bg-white text-blue-500 py-2 px-4 rounded hover:bg-blue-100 transition duration-200"
              onClick={() => navigate('/signup')} // Redirect to signup page
            >
              Start Free Trial
            </button>
            <a href="#features" className="text-white text-lg hover:underline transition duration-200">
              Learn More
            </a>
          </div>

          {/* Optional Visual Section */}
          <div className="absolute bottom-0 left-0 right-0 transform translate-y-20">
            <img src="/path/to/illustration.png" alt="workflow automation illustration" className="mx-auto" />
          </div>
        </div>
      </header>    );
};

export default Hero;