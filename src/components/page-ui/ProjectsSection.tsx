'use client';
import React from 'react';
import { twMerge } from 'tailwind-merge';

export function ProjectsSection() {
  return (
    <div className="flex justify-center">
      <div className="w-full max-w-3xl px-4">
        <h1
          id="projects"
          className="text-center mx-auto px-8 pb-8 pt-20 text-2xl font-bold dark:text-white md:pt-32 md:text-7xl"
        >
          Projects
        </h1>
        <div className="relative mx-auto pb-32 pt-4 text-white antialiased">
          {projects.map((project, index) => (
            <div
              key={`project-${index}`}
              className="mb-10 mt-4 md:mt-0 border border-neutral-300 dark:border-neutral-700 p-4 rounded-lg"
            >
              <h2
                className={twMerge(
                  'text-xl text-black dark:text-white text-center'
                )}
              >
                {project.title}
              </h2>
              <p className="text-sm text-blue-500 dark:text-blue-400 text-center">
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View on GitHub
                </a>
                {project.projectLink && (
                  <a
                    href={project.projectLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    &nbsp; &nbsp; &nbsp; &nbsp;View Project
                  </a>
                )}
              </p>
              <div className="prose prose-sm dark:prose-invert mt-2 text-sm text-black dark:text-white">
                {project.description}
              </div>
              <div className="mt-4 flex flex-wrap gap-2 justify-center">
                {project.skills.map((skill, skillIndex) => (
                  <span
                    key={`skill-${index}-${skillIndex}`}
                    className="inline-flex rounded-full bg-neutral-700 px-2 py-1 text-xs font-medium text-white dark:bg-neutral-800"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

const projects = [
  {
    title: 'PHiLIP - Image Generation Suite',
    githubLink: 'https://github.com/freddysongg/PHiLIP-Frontend',
    projectLink: 'https://www.hackster.io/contests/amd2023#category-1092',
    description: (
      <p>
        Created an advanced generative AI model using AMD's cloud platform and
        MI210 GPUs to showcase AI's potential in automated image generation. It
        combines cutting-edge machine learning models with a user-friendly
        interface to democratize access to high-quality AI-generated imagery,
        winning the University category at AMD's Pervasive AI Developer Contest
        amongst 8,000 participants.
      </p>
    ),
    skills: [
      'Python',
      'Generative AI',
      'ROCm',
      'Flask',
      'PixArt',
      'Freestyle',
      'Stable Diffusion',
      'Control Net',
    ],
  },
  {
    title: 'News Genie - News Archive Platform',
    githubLink: 'https://github.com/freddysongg/News-Genie',
    description: (
      <p>
        News Genie is an advanced web application designed to serve as a
        comprehensive article source archive. It allows users to search, find,
        and retrieve news articles related to specific topics, making it a
        valuable tool for researchers, journalists, and anyone interested in
        keeping track of news trends.
      </p>
    ),
    skills: ['Python', 'Firebase', 'Google Gemini', 'React', 'Render'],
  },
  {
    title: 'CourseQuest - Educational NLP Tool',
    githubLink: 'https://github.com/freddysongg/CourseQuest',
    description: (
      <p>
        Developed an NLP-based tool with XLM-RoBERTa for querying and mapping
        user input to relevant course content. Enhanced student learning through
        AI-driven insights.
      </p>
    ),
    skills: ['Python', 'NLP', 'XLM-RoBERTa', 'Streamlit'],
  },
  {
    title: 'MafWays - Image Recognition Model',
    githubLink: 'https://github.com/freddysongg/MafWays',
    description: (
      <p>
        Engineered a multi-class CNN using TensorFlow and Keras for classifying
        image data with high accuracy. Applied data augmentation and model
        optimization for performance improvement.
      </p>
    ),
    skills: [
      'TensorFlow',
      'Keras',
      'Python',
      'Image Classification',
      'Data Augmentation',
    ],
  },
  {
    title: 'Rainfall Prediction for SF',
    githubLink: 'https://github.com/freddysongg/Weather-Model',
    description: (
      <p>
        Built a linear regression model using Python and SciKit to predict
        rainfall patterns in San Francisco. Processed large datasets and
        optimized predictive performance with feature engineering.
      </p>
    ),
    skills: [
      'Python',
      'Linear Regression',
      'SciKit',
      'Data Analysis',
      'Feature Engineering',
    ],
  },
  {
    title: 'Discord Bot',
    githubLink: 'https://github.com/freddysongg/discord_bot',
    description: (
      <p>
        A feature-rich Discord bot designed to enhance user interaction on
        Discord servers. It responds to commands, moderates chats, assigns
        roles, plays music in voice channels, and includes fun status updates
        for a dynamic experience.
      </p>
    ),
    skills: ['Discord API', 'Python'],
  },
  {
    title: 'Snakes Game',
    githubLink: 'https://github.com/freddysongg/Snakes-Game',
    description: (
      <p>
        A simple two-player browser game created using HTML, CSS, and
        JavaScript. Players move on a grid-based game board using separate sets
        of keys (arrow keys for Player 1 and WASD for Player 2), allowing
        simultaneous movement.
      </p>
    ),
    skills: ['JavaScript', 'GitHub', 'HTML', 'CSS'],
  },
];
