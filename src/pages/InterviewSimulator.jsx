import { useState } from 'react';
import DashboardLayout from '../layouts/DashboardLayout';
import { interviewQuestions } from '../data/mockData';

function InterviewSimulator() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answer, setAnswer] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [feedback, setFeedback] = useState(null);

  const currentQuestion = interviewQuestions[currentQuestionIndex];

  const handleSubmit = () => {
    const wordCount = answer.trim().split(/\s+/).length;
    const hasKeywords = answer.toLowerCase().includes('react') ||
                       answer.toLowerCase().includes('javascript') ||
                       answer.toLowerCase().includes('scope') ||
                       answer.toLowerCase().includes('function');

    const score = Math.min(100, (wordCount * 2) + (hasKeywords ? 30 : 0));

    setFeedback({
      score: Math.min(score, 95),
      comments: generateFeedback(score, wordCount),
    });
    setSubmitted(true);
  };

  const generateFeedback = (score, wordCount) => {
    if (score >= 80) {
      return "Excellent answer! You've demonstrated a strong understanding of the concept with clear explanations and relevant examples.";
    } else if (score >= 60) {
      return "Good attempt! Your answer covers the main points, but could benefit from more detailed explanations or specific examples.";
    } else {
      return "Your answer needs improvement. Try to provide more detailed explanations and include specific examples to strengthen your response.";
    }
  };

  const handleNext = () => {
    if (currentQuestionIndex < interviewQuestions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setAnswer('');
      setSubmitted(false);
      setFeedback(null);
    }
  };

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
      setAnswer('');
      setSubmitted(false);
      setFeedback(null);
    }
  };

  return (
    <DashboardLayout>
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Interview Simulator</h1>
          <p className="text-gray-600">Practice with AI-generated interview questions</p>
        </div>

        <div className="card mb-6">
          <div className="flex justify-between items-center mb-6">
            <span className="text-sm font-semibold text-purple-600">
              Question {currentQuestionIndex + 1} of {interviewQuestions.length}
            </span>
            <div className="flex gap-2">
              <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold">
                {currentQuestion.category}
              </span>
              <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-semibold">
                {currentQuestion.difficulty}
              </span>
            </div>
          </div>

          <div className="bg-gradient-to-r from-purple-50 to-indigo-50 p-6 rounded-lg mb-6">
            <h3 className="text-2xl font-bold text-gray-800">{currentQuestion.question}</h3>
          </div>

          <div className="mb-6">
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Your Answer:
            </label>
            <textarea
              value={answer}
              onChange={(e) => setAnswer(e.target.value)}
              disabled={submitted}
              className="w-full h-40 px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-purple-500 focus:outline-none resize-none disabled:bg-gray-100"
              placeholder="Type your answer here..."
            />
            <p className="text-sm text-gray-500 mt-2">
              {answer.trim().split(/\s+/).filter(Boolean).length} words
            </p>
          </div>

          {!submitted ? (
            <button
              onClick={handleSubmit}
              disabled={answer.trim().length === 0}
              className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Submit Answer
            </button>
          ) : (
            <div className="space-y-4">
              <div className={`p-6 rounded-lg ${
                feedback.score >= 80 ? 'bg-green-50 border-2 border-green-200' :
                feedback.score >= 60 ? 'bg-yellow-50 border-2 border-yellow-200' :
                'bg-red-50 border-2 border-red-200'
              }`}>
                <div className="flex justify-between items-start mb-4">
                  <h4 className="text-xl font-bold text-gray-800">Feedback</h4>
                  <div className={`text-3xl font-bold ${
                    feedback.score >= 80 ? 'text-green-600' :
                    feedback.score >= 60 ? 'text-yellow-600' :
                    'text-red-600'
                  }`}>
                    {feedback.score}%
                  </div>
                </div>
                <p className="text-gray-700 mb-4">{feedback.comments}</p>

                <div className="bg-white p-4 rounded-lg">
                  <h5 className="font-semibold text-gray-800 mb-2">Expected Answer:</h5>
                  <p className="text-gray-700">{currentQuestion.expectedAnswer}</p>
                </div>
              </div>

              <div className="flex gap-3">
                <button
                  onClick={handlePrevious}
                  disabled={currentQuestionIndex === 0}
                  className="flex-1 btn-secondary disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  ← Previous
                </button>
                <button
                  onClick={handleNext}
                  disabled={currentQuestionIndex === interviewQuestions.length - 1}
                  className="flex-1 btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Next Question →
                </button>
              </div>
            </div>
          )}
        </div>

        <div className="card bg-indigo-50 border-2 border-indigo-200">
          <div className="flex items-start space-x-4">
            <div className="text-4xl">💡</div>
            <div>
              <h3 className="text-xl font-bold text-indigo-800 mb-2">
                Interview Tips
              </h3>
              <ul className="space-y-2 text-indigo-700">
                <li>• Take your time to think before answering</li>
                <li>• Use the STAR method (Situation, Task, Action, Result) for behavioral questions</li>
                <li>• Provide specific examples from your experience</li>
                <li>• Don't be afraid to ask clarifying questions</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}

export default InterviewSimulator;
