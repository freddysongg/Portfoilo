'use client';
import React from 'react';
import { twMerge } from 'tailwind-merge';

import { TracingBeam } from '@/components/ui/tracing-beams';

export function ExperienceSection() {
  return (
    <>
      <h1
        id="experience"
        className="mx-auto max-w-5xl px-8 pb-8 pt-20 text-2xl font-bold dark:text-white md:pt-32 md:text-7xl"
      >
        Experience
      </h1>
      <TracingBeam className="px-6">
        <div className="relative mx-auto max-w-2xl pb-32 pt-4 text-white antialiased">
          {experience.map((item, index) => (
            <div key={`content-${index}`} className="mb-10 mt-4 md:mt-0">
              <h2 className={twMerge('text-xl text-black dark:text-white')}>
                {item.title}
              </h2>
              <span className="w-fit rounded-full py-1 text-sm italic text-neutral-800 dark:text-neutral-200">
                {item.badge}
              </span>
              <div className="prose prose-sm dark:prose-invert mt-2 text-sm text-black dark:text-white">
                {item.description}
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                {item.skills.map((skill, skillIndex) => (
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
      </TracingBeam>
    </>
  );
}

const experience = [
  {
    title: 'Software Engineer Intern, Wahid Studio',
    description: (
      <ul className="list-disc">
        <li>
          Utilized DataGrip and Python scripts to automate refining of over 100k
          lines of data imported from Shopify’s product taxonomy
        </li>
        <li>
          Created over 90+ CRUD and RESTful endpoints while implementing schema
          validation checks in Drizzle ORM, ensuring data security, consistency
          and compliance for PostgreSQL interactions in DataGrip.
        </li>
        <li>
          Developed an OOP hierarchy for clothing categories and attributes,
          using a balanced AVL tree to enforce hierarchical integrity.
        </li>
        <li>
          Led the integration of Stripe, Shopify, and Shippo, adhering to
          documentation to enable users to seamlessly connect their Shopify
          stores with up to 10,000 products to our website, supporting
          high-volume transaction processing and custom shipping workflows.
        </li>
      </ul>
    ),
    badge: 'April 2024 – Present',
    skills: [
      'TypeScript',
      'PostgreSQL',
      'Drizzle ORM',
      'Python',
      'DataGrip',
      'Postman',
    ],
  },
  {
    title: 'Lead Software Engineer, TablePal (prev. SeekEats)',
    description: (
      <ul className="list-disc">
        <li>
          Researched and implemented user behavior optimization strategies by
          combining Bayesian optimization and time series transformers to
          analyze interaction patterns and refine chatbot responses.
        </li>
        <li>
          Improved chatbot accuracy by 50% and reduced response time by 20%
          through a 5-stage bucket filtering ML pipeline.{' '}
        </li>
        <li>
          Spearheaded the deployment of a robust DevOps pipeline through AWS ECS
          using Docker, enabling a 40% reduction in task completion time and
          enhancing system scalability.
        </li>
      </ul>
    ),
    badge: 'March 2024 – Present',
    skills: ['Python', 'MongoDB', 'Next.js', 'AWS ECS', 'Docker'],
  },
  {
    title: 'Co-Founder, AI@UCR',
    description: (
      <ul className="list-disc">
        <li>
          Led technical workshops on machine learning and neural networks,
          engaging over 50 participants.
        </li>
        <li>
          Coordinated with UCR faculty and industry experts to host guest
          lectures, expanding access to advanced AI insights and career
          development.
        </li>
      </ul>
    ),
    badge: 'October 2023 – Present',
    skills: ['Leadership', 'Machine Learning', 'Networking'],
  },
  {
    title: 'Software Developer Intern, SeekEats',
    description: (
      <ul className="list-disc">
        <li>
          Implemented a secure RBAC system with two-step verification, reducing
          unauthorized access by 40%.
        </li>
        <li>
          Enhanced user experience through an interactive iOS/Android
          store-front with over 60+ components.
        </li>
      </ul>
    ),
    badge: 'July 2023 – March 2024',
    skills: ['Node.js', 'React Native', 'MongoDB'],
  },
  {
    title: 'Software Engineer Intern, HomesUnlimited',
    description: (
      <ul className="list-disc">
        <li>
          Engineered an AI-powered chatbot leveraging GPT-4 API for
          context-aware data retrieval, boosting user engagement and response
          relevance.
        </li>
        <li>
          Migrated over 100GB of data to Firebase, optimizing retrieval by 20%
          and supporting 1 million monthly queries.
        </li>
      </ul>
    ),
    badge: 'June 2023 – September 2023',
    skills: ['Vue.js', 'GPT-4 API', 'Firebase', 'Data Migration'],
  },
];
