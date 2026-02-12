# PathNova AI – Smart Career Advisor

PathNova AI is a modern, responsive frontend web application designed to provide intelligent career guidance to students and job seekers. The platform simulates resume analysis, skill gap detection, career recommendations, learning roadmap generation, and interview preparation using mock data.



## Problem Statement

Students and fresh graduates often struggle with career planning due to:

* Lack of personalized career guidance
* Difficulty identifying industry-required skills
* Inefficient manual resume evaluation
* Limited access to structured interview practice

There is no single integrated platform that combines resume analysis, skill gap identification, career recommendations, and interview simulation in one system.



## Proposed Solution

PathNova AI provides a unified platform that:

* Simulates resume analysis and skill extraction
* Identifies missing skills based on job roles
* Recommends suitable career paths
* Generates a structured learning roadmap
* Provides interview questions and simulated feedback

This project is frontend-only and uses mock data to demonstrate the system workflow.



## Features

* **Resume Analysis**: Upload and analyze resumes with AI-powered insights
* **Skill Gap Detection**: Identify missing skills and areas for improvement
* **Career Recommendations**: Get personalized job matches based on your profile
* **Learning Roadmap**: Follow a structured learning path to develop new skills
* **AI Interview Simulator**: Practice interviews with AI-generated questions and feedback
* **Profile Management**: Manage your personal and career information



## Tech Stack

* React (JavaScript)
* React Router DOM
* Tailwind CSS
* Vite



## Project Structure

```
src/
├── components/
│   ├── Navbar.jsx
│   ├── Sidebar.jsx
│   ├── Footer.jsx
│   ├── StatCard.jsx
│   ├── FeatureCard.jsx
│   └── SkillBadge.jsx
│
├── pages/
│   ├── Landing.jsx
│   ├── Dashboard.jsx
│   ├── UploadResume.jsx
│   ├── SkillAnalysis.jsx
│   ├── CareerRecommendations.jsx
│   ├── LearningRoadmap.jsx
│   ├── InterviewSimulator.jsx
│   └── Profile.jsx
│
├── layouts/
│   ├── LandingLayout.jsx
│   └── DashboardLayout.jsx
│
├── data/
│   └── mockData.js
│
├── App.jsx
├── main.jsx
└── index.css
```



## How to Run the Project

### 1. Prerequisites

Make sure the following are installed:

* Node.js (LTS version recommended)
* npm
* Git

Check versions:

```
node -v
npm -v
git --version
```



### 2. Clone the Repository

```
git clone https://github.com/Safa-khanum/path-nova-ai.git
```

Navigate into the project directory:

```
cd path-nova-ai
```



### 3. Install Dependencies

```
npm install
```



### 4. Run the Development Server

```
npm run dev
```

Open the displayed local URL in your browser (usually `http://localhost:5173/`).



## Build for Production

To generate a production build:

```
npm run build
```

To preview the production build:

```
npm run preview
```



## System Workflow

1. User opens the landing page.
2. User navigates to the dashboard.
3. User uploads a resume (simulation).
4. System displays extracted skills and missing skills.
5. Career recommendations are shown with match percentage.
6. Learning roadmap provides structured weekly plans.
7. Interview simulator allows answer submission and displays feedback.



## Important Notes

* This project uses mock data only.
* No backend integration is implemented.
* No authentication or login functionality is included.
* AI responses are simulated for demonstration purposes.

