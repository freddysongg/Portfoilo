import Link from 'next/link';
import React from 'react';
import {
  FaPython,
  FaJava,
  FaReact,
  FaAws,
  FaDocker,
  FaVuejs,
  FaNodeJs,
} from 'react-icons/fa';
import {
  SiTypescript,
  SiJavascript,
  SiPostgresql,
  SiSpringboot,
  SiTailwindcss,
  SiTensorflow,
  SiPytorch,
  SiMongodb,
  SiHtml5,
  SiCss3,
  SiJson,
  SiCplusplus,
  SiGo,
  SiSwift,
  SiExpress,
  SiFlask,
  SiFastify,
  SiAnaconda,
  SiBabel,
  SiSelenium,
  SiKubernetes,
  SiFirebase,
  SiVercel,
  SiJupyter,
  SiVisualstudiocode,
} from 'react-icons/si';
import { TbBrandNextjs } from 'react-icons/tb';

export function SkillsSection() {
  return (
    <div className="mx-auto max-w-5xl px-8 pb-8">
      <h1
        id="skills"
        className="max-w-5xl pt-20 text-2xl font-bold dark:text-white md:pt-32 md:text-7xl"
      >
        Skills
      </h1>
      <div className="grid grid-cols-1 gap-6 py-10 md:grid-cols-3">
        {skillCategories.map((category, idx) => (
          <div
            key={idx}
            className="flex flex-col border border-black/[0.2] p-4 dark:border-white/[0.2]"
          >
            <h2 className="text-lg font-semibold mb-4 dark:text-white">
              {category.category}
            </h2>
            <div className="grid grid-cols-1 gap-2">
              {category.skills.map((skill, skillIdx) => (
                <Link
                  key={skillIdx}
                  href={skill.link}
                  className="flex items-center space-x-2 text-black dark:text-white"
                >
                  <span className="text-xl">{skill.icon}</span>
                  <span>{skill.title}</span>
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

const skillCategories = [
  {
    category: 'Languages',
    skills: [
      {
        title: 'Python',
        link: 'https://www.python.org/',
        icon: <FaPython />,
      },
      {
        title: 'Java',
        link: 'https://www.oracle.com/java/',
        icon: <FaJava />,
      },
      {
        title: 'JavaScript',
        link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
        icon: <SiJavascript />,
      },
      {
        title: 'TypeScript',
        link: 'https://www.typescriptlang.org/',
        icon: <SiTypescript />,
      },
      {
        title: 'JSON',
        link: 'https://www.json.org/json-en.html',
        icon: <SiJson />,
      },
      {
        title: 'C++',
        link: 'https://isocpp.org/',
        icon: <SiCplusplus />,
      },
      {
        title: 'Go',
        link: 'https://go.dev/',
        icon: <SiGo />,
      },
      {
        title: 'Swift',
        link: 'https://developer.apple.com/swift/',
        icon: <SiSwift />,
      },
      {
        title: 'HTML',
        link: 'https://developer.mozilla.org/en-US/docs/Web/HTML',
        icon: <SiHtml5 />,
      },
      {
        title: 'CSS',
        link: 'https://developer.mozilla.org/en-US/docs/Web/CSS',
        icon: <SiCss3 />,
      },
    ],
  },
  {
    category: 'Frameworks and Libraries',
    skills: [
      {
        title: 'React.js',
        link: 'https://react.dev/',
        icon: <FaReact />,
      },
      {
        title: 'Next.js',
        link: 'https://nextjs.org',
        icon: <TbBrandNextjs />,
      },
      {
        title: 'Node.js',
        link: 'https://nodejs.org',
        icon: <FaNodeJs />,
      },
      {
        title: 'Express.js',
        link: 'https://expressjs.com',
        icon: <SiExpress />,
      },
      {
        title: 'Vue.js',
        link: 'https://vuejs.org',
        icon: <FaVuejs />,
      },
      {
        title: 'Tailwind CSS',
        link: 'https://tailwindcss.com',
        icon: <SiTailwindcss />,
      },
      {
        title: 'shadcn/ui',
        link: '#',
        icon: <SiTailwindcss />, // Replace with an appropriate icon if available
      },
      {
        title: 'Flask',
        link: 'https://flask.palletsprojects.com/',
        icon: <SiFlask />,
      },
      {
        title: 'Spring Boot',
        link: 'https://spring.io/projects/spring-boot',
        icon: <SiSpringboot />,
      },
      {
        title: 'Fastify',
        link: 'https://www.fastify.io/',
        icon: <SiFastify />,
      },
      {
        title: 'TensorFlow',
        link: 'https://www.tensorflow.org',
        icon: <SiTensorflow />,
      },
      {
        title: 'PyTorch',
        link: 'https://pytorch.org',
        icon: <SiPytorch />,
      },
      {
        title: 'Anaconda',
        link: 'https://www.anaconda.com/',
        icon: <SiAnaconda />,
      },
      {
        title: 'Babel',
        link: 'https://babeljs.io/',
        icon: <SiBabel />,
      },
      {
        title: 'Selenium',
        link: 'https://www.selenium.dev/',
        icon: <SiSelenium />,
      },
      {
        title: 'Kubernetes',
        link: 'https://kubernetes.io/',
        icon: <SiKubernetes />,
      },
    ],
  },
  {
    category: 'Databases and Tools',
    skills: [
      {
        title: 'PostgreSQL',
        link: 'https://www.postgresql.org',
        icon: <SiPostgresql />,
      },
      {
        title: 'MongoDB',
        link: 'https://www.mongodb.com',
        icon: <SiMongodb />,
      },
      {
        title: 'Firebase',
        link: 'https://firebase.google.com',
        icon: <SiFirebase />,
      },
      {
        title: 'AWS',
        link: 'https://aws.amazon.com',
        icon: <FaAws />,
      },
      {
        title: 'Vercel',
        link: 'https://vercel.com/',
        icon: <SiVercel />,
      },
      {
        title: 'Docker',
        link: 'https://www.docker.com',
        icon: <FaDocker />,
      },
      {
        title: 'Jupyter Notebook',
        link: 'https://jupyter.org/',
        icon: <SiJupyter />,
      },
      {
        title: 'Visual Studio Code',
        link: 'https://code.visualstudio.com/',
        icon: <SiVisualstudiocode />,
      },
    ],
  },
];
