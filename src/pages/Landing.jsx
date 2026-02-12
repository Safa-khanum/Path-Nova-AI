import { Link } from 'react-router-dom';
import LandingLayout from '../layouts/LandingLayout';
import FeatureCard from '../components/FeatureCard';

function Landing() {
  const features = [
    {
      icon: '📄',
      title: 'Resume Analysis',
      description: 'Get detailed insights about your resume with AI-powered analysis and improvement suggestions.',
    },
    {
      icon: '🎯',
      title: 'Skill Gap Detection',
      description: 'Identify missing skills and get personalized recommendations to advance your career.',
    },
    {
      icon: '💼',
      title: 'Career Recommendation',
      description: 'Discover the best career opportunities matched to your skills and aspirations.',
    },
    {
      icon: '🗺️',
      title: 'Learning Roadmap',
      description: 'Get a structured learning path tailored to bridge your skill gaps and achieve goals.',
    },
    {
      icon: '🎤',
      title: 'AI Interview Simulator',
      description: 'Practice interviews with AI-generated questions and receive detailed feedback.',
    },
    {
      icon: '📊',
      title: 'Progress Tracking',
      description: 'Monitor your career development journey with comprehensive analytics and insights.',
    },
  ];

  return (
    <LandingLayout>
      <section className="bg-gradient-to-br from-purple-50 via-indigo-50 to-white py-20">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center justify-between">
            <div className="lg:w-1/2 mb-12 lg:mb-0">
              <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                <span className="bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
                  Smart AI-Powered
                </span>
                <br />
                Career Guidance
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Get personalized career recommendations, skill analysis, and interview preparation
                powered by advanced AI technology. Take your career to the next level.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/dashboard" className="btn-primary text-center">
                  Get Started Free
                </Link>
                <a href="#features" className="btn-secondary text-center">
                  Learn More
                </a>
              </div>
            </div>

            <div className="lg:w-1/2 flex justify-center">
              <div className="relative">
                <div className="w-80 h-80 bg-gradient-to-br from-purple-400 to-indigo-500 rounded-full opacity-20 animate-pulse"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-8xl">🚀</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="features" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
              Powerful Features
            </h2>
            <p className="text-xl text-gray-600">
              Everything you need to advance your career in one platform
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <FeatureCard key={index} {...feature} />
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="py-20 bg-gradient-to-br from-purple-50 to-indigo-50">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
              About CareerMate AI
            </h2>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              CareerMate AI is an intelligent career guidance platform designed to help
              professionals and students make informed career decisions. Using advanced AI
              technology, we analyze your skills, experience, and aspirations to provide
              personalized recommendations.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Whether you're just starting your career or looking to make a transition,
              CareerMate AI provides the tools and insights you need to succeed.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Career?</h2>
          <p className="text-xl text-gray-600 mb-8">
            Join thousands of professionals who have accelerated their career growth
          </p>
          <Link to="/dashboard" className="btn-primary inline-block">
            Start Your Journey
          </Link>
        </div>
      </section>
    </LandingLayout>
  );
}

export default Landing;
