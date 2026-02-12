import DashboardLayout from '../layouts/DashboardLayout';
import SkillBadge from '../components/SkillBadge';
import { extractedSkills, missingSkills, strengths, weaknesses } from '../data/mockData';

function SkillAnalysis() {
  return (
    <DashboardLayout>
      <div className="max-w-6xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Skill Analysis</h1>
          <p className="text-gray-600">Comprehensive analysis of your skills and competencies</p>
        </div>

        <div className="card mb-6">
          <h3 className="text-xl font-bold mb-4 text-gray-800">Overall Skill Match</h3>
          <div className="space-y-4">
            <div>
              <div className="flex justify-between mb-2">
                <span className="text-sm font-medium text-gray-700">
                  Match with Target Roles
                </span>
                <span className="text-sm font-medium text-purple-600">85%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-3">
                <div
                  className="bg-gradient-to-r from-purple-600 to-indigo-600 h-3 rounded-full"
                  style={{ width: '85%' }}
                ></div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          <div className="card">
            <h3 className="text-xl font-bold mb-4 text-gray-800 flex items-center">
              <span className="text-2xl mr-2">✅</span>
              Extracted Skills
            </h3>
            <div className="flex flex-wrap gap-3">
              {extractedSkills.map((skill, index) => (
                <SkillBadge key={index} skill={skill} type="default" />
              ))}
            </div>
          </div>

          <div className="card">
            <h3 className="text-xl font-bold mb-4 text-gray-800 flex items-center">
              <span className="text-2xl mr-2">🎯</span>
              Missing Skills
            </h3>
            <div className="flex flex-wrap gap-3">
              {missingSkills.map((skill, index) => (
                <SkillBadge key={index} skill={skill} type="missing" />
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="card">
            <h3 className="text-xl font-bold mb-4 text-green-700 flex items-center">
              <span className="text-2xl mr-2">💪</span>
              Strengths
            </h3>
            <ul className="space-y-3">
              {strengths.map((strength, index) => (
                <li key={index} className="flex items-start space-x-3">
                  <span className="text-green-600 text-xl">✓</span>
                  <span className="text-gray-700">{strength}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="card">
            <h3 className="text-xl font-bold mb-4 text-orange-700 flex items-center">
              <span className="text-2xl mr-2">📈</span>
              Areas for Improvement
            </h3>
            <ul className="space-y-3">
              {weaknesses.map((weakness, index) => (
                <li key={index} className="flex items-start space-x-3">
                  <span className="text-orange-600 text-xl">→</span>
                  <span className="text-gray-700">{weakness}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-6 card bg-purple-50 border-2 border-purple-200">
          <div className="flex items-start space-x-4">
            <div className="text-4xl">💡</div>
            <div>
              <h3 className="text-xl font-bold text-purple-800 mb-2">
                Recommendation
              </h3>
              <p className="text-purple-700">
                Focus on developing your cloud computing and DevOps skills to increase
                your marketability. Check out our Learning Roadmap for a structured
                approach to skill development.
              </p>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}

export default SkillAnalysis;
