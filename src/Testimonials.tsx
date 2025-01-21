import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteLeft, faQuoteRight } from '@fortawesome/free-solid-svg-icons';
import './index.css';
import usera from './images/2.jpeg'
import userb from './images/3.jpeg'
import userc from './images/4.jpeg'
import userd from './images/5.jpeg'
import usere from './images/6.jpeg'
import userf from './images/7.jpeg'

const Testimonials = () => {
    return (
        <section className="testimonials py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-5xl font-extrabold mb-6 text-gray-800 flex items-center justify-center gap-4">
            <span className="text-blue-500 text-6xl">
              <FontAwesomeIcon icon={faQuoteLeft} />
            </span>
            What Our Users Say
            <span className="text-blue-500 text-3xl">
              <FontAwesomeIcon icon={faQuoteRight} />
            </span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="testimonial-card p-4 border rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <img src={usera} alt="User A" className="rounded-full w-16 h-16 mb-4" />
              <p className="font-semibold">"This product has completely transformed the way I work. I can't imagine going back to my old processes!"</p>
              <p className="text-gray-600">- User A, Marketing Manager</p>
            </div>
            <div className="testimonial-card p-4 border rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <img src={userb} alt="User B" className="rounded-full w-16 h-16 mb-4" />
              <p className="font-semibold">"The intuitive design and powerful features have made my team more productive than ever. Highly recommended!"</p>
              <p className="text-gray-600">- User B, Project Lead</p>
            </div>
            <div className="testimonial-card p-4 border rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <img src={userc} alt="User C" className="rounded-full w-16 h-16 mb-4" />
              <p className="font-semibold">"I love how easy it is to collaborate with my team using this tool. It has streamlined our workflow significantly."</p>
              <p className="text-gray-600">- User C, Software Engineer</p>
            </div>
            <div className="testimonial-card p-4 border rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <img src={userd} alt="User D" className="rounded-full w-16 h-16 mb-4" />
              <p className="font-semibold">"The analytics features are top-notch. I can track our progress and make data-driven decisions effortlessly."</p>
              <p className="text-gray-600">- User D, Data Analyst</p>
            </div>
            <div className="testimonial-card p-4 border rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <img src={usere} alt="User E" className="rounded-full w-16 h-16 mb-4" />
              <p className="font-semibold">"Customer support is fantastic! They are always there to help, and their response time is impressive."</p>
              <p className="text-gray-600">- User E, Business Owner</p>
            </div>
            <div className="testimonial-card p-4 border rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <img src={userf} alt="User F" className="rounded-full w-16 h-16 mb-4" />
              <p className="font-semibold">"This tool has saved us countless hours of work. The automation features are a game changer!"</p>
              <p className="text-gray-600">- User F, Operations Manager</p>
            </div>
          </div>
          <button className="mt-6 bg-blue-500 text-white py-2 px-4 rounded">Try it Now!</button>
        </div>
      </section>
    );
};

export default Testimonials;
