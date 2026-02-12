# CareerMate AI - Smart Career Advisor

A modern, responsive frontend web application for career guidance and development, built with React and Tailwind CSS.

## Features

- **Resume Analysis**: Upload and analyze resumes with AI-powered insights
- **Skill Gap Detection**: Identify missing skills and areas for improvement
- **Career Recommendations**: Get personalized job matches based on your profile
- **Learning Roadmap**: Follow a structured learning path to develop new skills
- **AI Interview Simulator**: Practice interviews with AI-generated questions and feedback
- **Profile Management**: Manage your personal and career information

## Tech Stack

- **React** (JavaScript) - UI framework
- **React Router DOM** - Client-side routing
- **Tailwind CSS** - Styling framework
- **Vite** - Build tool and dev server

## Project Structure

```
src/
├── components/         # Reusable UI components
│   ├── Navbar.jsx
│   ├── Sidebar.jsx
│   ├── Footer.jsx
│   ├── StatCard.jsx
│   ├── FeatureCard.jsx
│   └── SkillBadge.jsx
├── pages/             # Page components
│   ├── Landing.jsx
│   ├── Dashboard.jsx
│   ├── UploadResume.jsx
│   ├── SkillAnalysis.jsx
│   ├── CareerRecommendations.jsx
│   ├── LearningRoadmap.jsx
│   ├── InterviewSimulator.jsx
│   └── Profile.jsx
├── layouts/           # Layout components
│   ├── LandingLayout.jsx
│   └── DashboardLayout.jsx
├── data/              # Mock data
│   └── mockData.js
├── App.jsx            # Main app component with routing
├── main.jsx           # App entry point
└── index.css          # Global styles and Tailwind configuration
```

## Pages

1. **Landing Page** (`/`)
   - Hero section with call-to-action
   - Features showcase
   - About section

2. **Dashboard** (`/dashboard`)
   - Overview of career metrics
   - Quick actions
   - Recent activity
   - Progress tracking

3. **Upload Resume** (`/upload-resume`)
   - Drag & drop file upload
   - Resume analysis simulation

4. **Skill Analysis** (`/skill-analysis`)
   - Extracted skills display
   - Missing skills identification
   - Strengths and weaknesses

5. **Career Recommendations** (`/career-recommendations`)
   - Job matches with percentages
   - Job details and required skills
   - Apply and save options

6. **Learning Roadmap** (`/learning-roadmap`)
   - Weekly learning plan
   - Topics and projects
   - Progress tracking

7. **Interview Simulator** (`/interview-simulator`)
   - Interview questions by category
   - Answer submission
   - AI-powered feedback

8. **Profile** (`/profile`)
   - Personal information editing
   - Career interests selection
   - Profile management

## Design Features

- Purple/indigo color theme with gradient buttons
- Fully responsive design
- Smooth hover effects and transitions
- Clean, professional UI
- Mobile-friendly sidebar navigation
- Card-based layout components

## Note

This is a frontend-only application using mock data. No backend or authentication is implemented.
