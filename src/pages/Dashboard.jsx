import DashboardLayout from '../layouts/DashboardLayout';
import StatCard from '../components/StatCard';
import { dashboardStats } from '../data/mockData';

function Dashboard() {
  return (
    <DashboardLayout>
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Welcome back, Sarah!</h1>
          <p className="text-gray-600">Here's your career development overview</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <StatCard
            icon="📄"
            title="Resume Score"
            value={`${dashboardStats.resumeScore}%`}
            color="text-green-600"
          />
          <StatCard
            icon="🎯"
            title="Missing Skills"
            value={dashboardStats.missingSkills}
            color="text-red-600"
          />
          <StatCard
            icon="💼"
            title="Recommended Jobs"
            value={dashboardStats.recommendedJobs}
            color="text-blue-600"
          />
          <StatCard
            icon="🎤"
            title="Interview Score"
            value={`${dashboardStats.interviewScore}%`}
            color="text-purple-600"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="card">
            <h3 className="text-xl font-bold mb-4 text-gray-800">Quick Actions</h3>
            <div className="space-y-3">
              <button className="w-full text-left px-4 py-3 bg-purple-50 hover:bg-purple-100 rounded-lg transition-colors">
                <div className="flex items-center space-x-3">
                  <span className="text-2xl">📄</span>
                  <div>
                    <p className="font-semibold text-gray-800">Upload Resume</p>
                    <p className="text-sm text-gray-600">Get instant AI analysis</p>
                  </div>
                </div>
              </button>
              <button className="w-full text-left px-4 py-3 bg-indigo-50 hover:bg-indigo-100 rounded-lg transition-colors">
                <div className="flex items-center space-x-3">
                  <span className="text-2xl">🎯</span>
                  <div>
                    <p className="font-semibold text-gray-800">Analyze Skills</p>
                    <p className="text-sm text-gray-600">Identify skill gaps</p>
                  </div>
                </div>
              </button>
              <button className="w-full text-left px-4 py-3 bg-purple-50 hover:bg-purple-100 rounded-lg transition-colors">
                <div className="flex items-center space-x-3">
                  <span className="text-2xl">🎤</span>
                  <div>
                    <p className="font-semibold text-gray-800">Practice Interview</p>
                    <p className="text-sm text-gray-600">Prepare with AI</p>
                  </div>
                </div>
              </button>
            </div>
          </div>

          <div className="card">
            <h3 className="text-xl font-bold mb-4 text-gray-800">Recent Activity</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                <div>
                  <p className="font-semibold text-gray-800">Resume Analyzed</p>
                  <p className="text-sm text-gray-600">2 hours ago</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                <div>
                  <p className="font-semibold text-gray-800">New Job Matches Found</p>
                  <p className="text-sm text-gray-600">5 hours ago</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                <div>
                  <p className="font-semibold text-gray-800">Interview Practice Completed</p>
                  <p className="text-sm text-gray-600">1 day ago</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-indigo-500 rounded-full mt-2"></div>
                <div>
                  <p className="font-semibold text-gray-800">Learning Roadmap Updated</p>
                  <p className="text-sm text-gray-600">2 days ago</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 card">
          <h3 className="text-xl font-bold mb-4 text-gray-800">Career Progress</h3>
          <div className="space-y-4">
            <div>
              <div className="flex justify-between mb-2">
                <span className="text-sm font-medium text-gray-700">Profile Completion</span>
                <span className="text-sm font-medium text-purple-600">85%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-gradient-to-r from-purple-600 to-indigo-600 h-2 rounded-full" style={{ width: '85%' }}></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between mb-2">
                <span className="text-sm font-medium text-gray-700">Skill Development</span>
                <span className="text-sm font-medium text-purple-600">60%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-gradient-to-r from-purple-600 to-indigo-600 h-2 rounded-full" style={{ width: '60%' }}></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between mb-2">
                <span className="text-sm font-medium text-gray-700">Interview Readiness</span>
                <span className="text-sm font-medium text-purple-600">78%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-gradient-to-r from-purple-600 to-indigo-600 h-2 rounded-full" style={{ width: '78%' }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}

export default Dashboard;
