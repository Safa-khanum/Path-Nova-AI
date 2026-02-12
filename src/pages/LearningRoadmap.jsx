import { useState } from 'react';
import DashboardLayout from '../layouts/DashboardLayout';
import { learningRoadmap } from '../data/mockData';

function LearningRoadmap() {
  const [roadmap, setRoadmap] = useState(learningRoadmap);

  const toggleComplete = (weekIndex) => {
    const updated = [...roadmap];
    updated[weekIndex].completed = !updated[weekIndex].completed;
    setRoadmap(updated);
  };

  const completedWeeks = roadmap.filter((week) => week.completed).length;
  const progress = (completedWeeks / roadmap.length) * 100;

  return (
    <DashboardLayout>
      <div className="max-w-5xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Learning Roadmap</h1>
          <p className="text-gray-600">Your personalized learning path to career success</p>
        </div>

        <div className="card mb-8">
          <h3 className="text-xl font-bold mb-4 text-gray-800">Overall Progress</h3>
          <div className="flex justify-between mb-2">
            <span className="text-sm font-medium text-gray-700">
              {completedWeeks} of {roadmap.length} weeks completed
            </span>
            <span className="text-sm font-medium text-purple-600">{progress.toFixed(0)}%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-3">
            <div
              className="bg-gradient-to-r from-purple-600 to-indigo-600 h-3 rounded-full transition-all duration-500"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>

        <div className="space-y-6">
          {roadmap.map((week, index) => (
            <div
              key={index}
              className={`card ${
                week.completed ? 'bg-green-50 border-2 border-green-200' : ''
              }`}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-start space-x-4">
                  <div
                    className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-white ${
                      week.completed
                        ? 'bg-green-500'
                        : 'bg-gradient-to-r from-purple-600 to-indigo-600'
                    }`}
                  >
                    {week.completed ? '✓' : week.week}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-1">
                      Week {week.week}: {week.title}
                    </h3>
                    <p className="text-sm text-gray-600">
                      {week.completed ? 'Completed' : 'In Progress'}
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => toggleComplete(index)}
                  className={`px-4 py-2 rounded-lg font-semibold transition-colors ${
                    week.completed
                      ? 'bg-green-500 text-white hover:bg-green-600'
                      : 'bg-purple-600 text-white hover:bg-purple-700'
                  }`}
                >
                  {week.completed ? 'Completed' : 'Mark Complete'}
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2 flex items-center">
                    <span className="mr-2">📚</span>
                    Topics to Cover
                  </h4>
                  <ul className="space-y-2">
                    {week.topics.map((topic, idx) => (
                      <li key={idx} className="flex items-start space-x-2">
                        <span className="text-purple-600">•</span>
                        <span className="text-gray-700">{topic}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-800 mb-2 flex items-center">
                    <span className="mr-2">💻</span>
                    Projects
                  </h4>
                  <ul className="space-y-2">
                    {week.projects.map((project, idx) => (
                      <li key={idx} className="flex items-start space-x-2">
                        <span className="text-indigo-600">•</span>
                        <span className="text-gray-700">{project}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-4">
                <h4 className="font-semibold text-gray-800 mb-2 flex items-center">
                  <span className="mr-2">🔗</span>
                  Recommended Resources
                </h4>
                <div className="flex flex-wrap gap-2">
                  {week.resources.map((resource, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm"
                    >
                      {resource}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 card bg-purple-50 border-2 border-purple-200">
          <div className="flex items-start space-x-4">
            <div className="text-4xl">🚀</div>
            <div>
              <h3 className="text-xl font-bold text-purple-800 mb-2">
                Keep Up the Great Work!
              </h3>
              <p className="text-purple-700">
                Stay consistent with your learning plan. Each week builds upon the previous
                one, creating a strong foundation for your career growth. Remember to
                practice regularly and build real projects!
              </p>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}

export default LearningRoadmap;
