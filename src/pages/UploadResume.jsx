import { useState } from 'react';
import DashboardLayout from '../layouts/DashboardLayout';

function UploadResume() {
  const [file, setFile] = useState(null);
  const [analyzing, setAnalyzing] = useState(false);
  const [analyzed, setAnalyzed] = useState(false);

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
      setAnalyzed(false);
    }
  };

  const handleAnalyze = () => {
    setAnalyzing(true);
    setTimeout(() => {
      setAnalyzing(false);
      setAnalyzed(true);
    }, 2000);
  };

  return (
    <DashboardLayout>
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Upload Resume</h1>
          <p className="text-gray-600">Upload your resume for AI-powered analysis</p>
        </div>

        <div className="card mb-6">
          <div className="border-2 border-dashed border-purple-300 rounded-lg p-12 text-center hover:border-purple-500 transition-colors">
            <div className="text-6xl mb-4">📄</div>
            <h3 className="text-xl font-semibold mb-2 text-gray-800">
              Drag & Drop your resume here
            </h3>
            <p className="text-gray-600 mb-4">or</p>
            <label className="btn-primary cursor-pointer">
              Browse Files
              <input
                type="file"
                className="hidden"
                accept=".pdf,.doc,.docx"
                onChange={handleFileChange}
              />
            </label>
            <p className="text-sm text-gray-500 mt-4">
              Supported formats: PDF, DOC, DOCX (Max 5MB)
            </p>
          </div>
        </div>

        {file && (
          <div className="card mb-6">
            <h3 className="text-lg font-semibold mb-4 text-gray-800">File Preview</h3>
            <div className="flex items-center justify-between p-4 bg-purple-50 rounded-lg">
              <div className="flex items-center space-x-3">
                <span className="text-3xl">📄</span>
                <div>
                  <p className="font-semibold text-gray-800">{file.name}</p>
                  <p className="text-sm text-gray-600">
                    {(file.size / 1024).toFixed(2)} KB
                  </p>
                </div>
              </div>
              <button
                onClick={() => setFile(null)}
                className="text-red-600 hover:text-red-700 font-semibold"
              >
                Remove
              </button>
            </div>

            <div className="mt-6 flex justify-center">
              <button
                onClick={handleAnalyze}
                disabled={analyzing}
                className="btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {analyzing ? 'Analyzing...' : 'Analyze Resume'}
              </button>
            </div>
          </div>
        )}

        {analyzed && (
          <div className="card bg-green-50 border-2 border-green-200">
            <div className="flex items-start space-x-4">
              <div className="text-4xl">✅</div>
              <div>
                <h3 className="text-xl font-bold text-green-800 mb-2">
                  Analysis Complete!
                </h3>
                <p className="text-green-700 mb-4">
                  Your resume has been successfully analyzed. Check the Skill Analysis
                  page to view detailed results.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <span className="text-green-600">✓</span>
                    <span className="text-gray-700">Resume Score: 85%</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-green-600">✓</span>
                    <span className="text-gray-700">10 Skills Extracted</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-green-600">✓</span>
                    <span className="text-gray-700">5 Recommendations Generated</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </DashboardLayout>
  );
}

export default UploadResume;
