import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faRobot, faUsers, faChartPie, faPlug, faLock, faCogs, faHeadset, faChartLine, faUserFriends } from '@fortawesome/free-solid-svg-icons';
import './index.css';
const Features = () => {
    return (
        <section className="py-20 bg-gray-100">
            <div className="container mx-auto px-6">
                {/* Section Title */}
                <h2 className="text-4xl font-bold text-center text-gray-800 mb-12 flex items-center justify-center gap-4">
                    <span className="text-blue-500 text-5xl"><FontAwesomeIcon icon={faStar} /></span>
                    Key Features
                    <span className="text-blue-500 text-3xl">⭐</span>
                </h2>

                {/* Feature Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

                    {/* Feature Card */}
                    <div className="feature-card p-6 border rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
                        <FontAwesomeIcon icon={faRobot} className="icon text-4xl text-blue-500 mb-4" />
                        <h3 className="font-semibold text-xl text-gray-800 mb-2">Smart Automation</h3>
                        <p className="text-gray-600">
                            Enhance productivity with AI-driven automation that adapts to your workflow.
                        </p>
                    </div>

                    <div className="feature-card p-6 border rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
                        <FontAwesomeIcon icon={faChartLine} className="icon text-4xl text-blue-500 mb-4" />
                        <h3 className="font-semibold text-xl text-gray-800 mb-2">Predictive Analytics</h3>
                        <p className="text-gray-600">
                            Leverage advanced analytics to anticipate trends and optimize performance.
                        </p>
                    </div>

                    <div className="feature-card p-6 border rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
                        <FontAwesomeIcon icon={faUserFriends} className="icon text-4xl text-blue-500 mb-4" />
                        <h3 className="font-semibold text-xl text-gray-800 mb-2">Seamless User Experience</h3>
                        <p className="text-gray-600">
                            Enjoy a sleek, modern interface designed for efficiency and engagement.
                        </p>
                    </div>

                    <div className="feature-card p-6 border rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
                        <FontAwesomeIcon icon={faUsers} className="icon text-4xl text-blue-500 mb-4" />
                        <h3 className="font-semibold text-xl text-gray-800 mb-2">Real-Time Collaboration</h3>
                        <p className="text-gray-600">
                            Work together seamlessly with real-time editing and commenting features.
                        </p>
                    </div>

                    <div className="feature-card p-6 border rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
                        <FontAwesomeIcon icon={faChartPie} className="icon text-4xl text-blue-500 mb-4" />
                        <h3 className="font-semibold text-xl text-gray-800 mb-2">Comprehensive Analytics</h3>
                        <p className="text-gray-600">
                            Gain insights with detailed analytics and reporting tools to track performance.
                        </p>
                    </div>

                    <div className="feature-card p-6 border rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
                        <FontAwesomeIcon icon={faPlug} className="icon text-4xl text-blue-500 mb-4" />
                        <h3 className="font-semibold text-xl text-gray-800 mb-2">Seamless Integrations</h3>
                        <p className="text-gray-600">
                            Connect with your favorite tools and services effortlessly.
                        </p>
                    </div>

                    <div className="feature-card p-6 border rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
                        <FontAwesomeIcon icon={faLock} className="icon text-4xl text-blue-500 mb-4" />
                        <h3 className="font-semibold text-xl text-gray-800 mb-2">Enhanced Security</h3>
                        <p className="text-gray-600">
                            Protect your data with top-notch security features, including encryption and two-factor authentication.
                        </p>
                    </div>

                    <div className="feature-card p-6 border rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
                        <FontAwesomeIcon icon={faCogs} className="icon text-4xl text-blue-500 mb-4" />
                        <h3 className="font-semibold text-xl text-gray-800 mb-2">Workflow Automation</h3>
                        <p className="text-gray-600">
                            Automate repetitive tasks and customize workflows to fit your needs.
                        </p>
                    </div>

                    <div className="feature-card p-6 border rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
                        <FontAwesomeIcon icon={faHeadset} className="icon text-4xl text-blue-500 mb-4" />
                        <h3 className="font-semibold text-xl text-gray-800 mb-2">24/7 Customer Support</h3>
                        <p className="text-gray-600">
                            Get help whenever you need it with our dedicated support team available 24/7.
                        </p>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Features;
