import DashboardLayout from '../layouts/DashboardLayout';
import { careerRecommendations } from '../data/mockData';

function CareerRecommendations() {
  return (
    <DashboardLayout>
      <div className="max-w-6xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Career Recommendations</h1>
          <p className="text-gray-600">Personalized job matches based on your skills and profile</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {careerRecommendations.map((job) => (
            <div key={job.id} className="card hover:shadow-xl transition-shadow">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-1">{job.title}</h3>
                  <p className="text-purple-600 font-semibold">{job.company}</p>
                </div>
                <div className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-4 py-2 rounded-full font-bold">
                  {job.matchPercentage}% Match
                </div>
              </div>

              <div className="space-y-3 mb-4">
                <div className="flex items-center text-gray-600">
                  <span className="mr-2">📍</span>
                  <span>{job.location}</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <span className="mr-2">💰</span>
                  <span>{job.salary}</span>
                </div>
              </div>

              <p className="text-gray-700 mb-4">{job.description}</p>

              <div className="mb-4">
                <h4 className="font-semibold text-gray-800 mb-2">Required Skills:</h4>
                <div className="flex flex-wrap gap-2">
                  {job.requiredSkills.map((skill, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-semibold"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex gap-3">
                <button className="flex-1 btn-primary">
                  Apply Now
                </button>
                <button className="flex-1 btn-secondary">
                  Save for Later
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 card bg-indigo-50 border-2 border-indigo-200">
          <div className="flex items-start space-x-4">
            <div className="text-4xl">🎯</div>
            <div>
              <h3 className="text-xl font-bold text-indigo-800 mb-2">
                Perfect Match Strategy
              </h3>
              <p className="text-indigo-700 mb-3">
                Based on your skills, we recommend focusing on Frontend and Full Stack
                Developer roles. Your strong React and JavaScript skills make you a great
                fit for these positions.
              </p>
              <p className="text-indigo-700">
                To increase your match percentage, consider learning TypeScript and gaining
                cloud platform experience.
              </p>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}

export default CareerRecommendations;
