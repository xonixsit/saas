import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDollarSign } from '@fortawesome/free-solid-svg-icons';
import './index.css';
const Pricing   = () => {
    return (
        <section className="pricing py-20 bg-gray-50">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-5xl font-extrabold mb-8 text-gray-800 flex items-center justify-center gap-4">
            <span className="text-blue-500 text-6xl">
              <FontAwesomeIcon icon={faDollarSign} />
            </span>
            Choose Your Plan
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

            {/* Basic Plan */}
            <div className="pricing-card bg-white border rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 p-8 flex flex-col items-center">
              <h3 className="text-3xl font-semibold text-gray-900 mb-6">Basic</h3>
              <p className="text-5xl font-extrabold text-blue-600 mb-4">$19<span className="text-xl font-normal">/month</span></p>
              <ul className="mb-8 text-gray-700 text-left space-y-3">
                <li className="flex items-center"><i className="fas fa-users text-blue-500 mr-3"></i>Up to 5 Users</li>
                <li className="flex items-center"><i className="fas fa-headset text-blue-500 mr-3"></i>Basic Support</li>
                <li className="flex items-center"><i className="fas fa-cogs text-blue-500 mr-3"></i>Core Features</li>
                <li className="text-gray-400 flex items-center"><i className="fas fa-chart-line text-gray-400 mr-3"></i>✘ Advanced Analytics</li>
                <li className="text-gray-400 flex items-center"><i className="fas fa-plug text-gray-400 mr-3"></i>✘ Custom Integrations</li>
              </ul>
              <button className="bg-blue-500 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors">Get Started</button>
            </div>

            {/* Standard Plan */}
            <div className="pricing-card bg-white border rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 p-8 flex flex-col items-center">
              <h3 className="text-3xl font-semibold text-gray-900 mb-6">Standard</h3>
              <p className="text-5xl font-extrabold text-blue-600 mb-4">$39<span className="text-xl font-normal">/month</span></p>
              <ul className="mb-8 text-gray-700 text-left space-y-3">
                <li className="flex items-center"><i className="fas fa-users text-blue-500 mr-3"></i>Up to 15 Users</li>
                <li className="flex items-center"><i className="fas fa-headset text-blue-500 mr-3"></i>Priority Support</li>
                <li className="flex items-center"><i className="fas fa-cogs text-blue-500 mr-3"></i>All Core Features</li>
                <li className="flex items-center"><i className="fas fa-chart-line text-blue-500 mr-3"></i>Advanced Analytics</li>
                <li className="text-gray-400 flex items-center"><i className="fas fa-plug text-gray-400 mr-3"></i>✘ Custom Integrations</li>
              </ul>
              <button className="bg-blue-500 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors">Get Started</button>
            </div>

            {/* Premium Plan */}
            <div className="pricing-card bg-white border rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 p-8 flex flex-col items-center">
              <h3 className="text-3xl font-semibold text-gray-900 mb-6">Premium</h3>
              <p className="text-5xl font-extrabold text-blue-600 mb-4">$99<span className="text-xl font-normal">/month</span></p>
              <ul className="mb-8 text-gray-700 text-left space-y-3">
                <li className="flex items-center"><i className="fas fa-users text-blue-500 mr-3"></i>Unlimited Users</li>
                <li className="flex items-center"><i className="fas fa-headset text-blue-500 mr-3"></i>24/7 Priority Support</li>
                <li className="flex items-center"><i className="fas fa-cogs text-blue-500 mr-3"></i>All Features</li>
                <li className="flex items-center"><i className="fas fa-chart-line text-blue-500 mr-3"></i>Advanced Analytics</li>
                <li className="flex items-center"><i className="fas fa-plug text-blue-500 mr-3"></i>Custom Integrations</li>
              </ul>
              <button className="bg-blue-500 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors">Get Started</button>
            </div>
          </div>
        </div>
      </section>    );
};

export default Pricing;
