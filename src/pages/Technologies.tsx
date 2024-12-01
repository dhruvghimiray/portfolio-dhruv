import React from 'react';
import Image from 'next/image';

const technologies = [
  { name: 'AWS', src: 'https://cdn.worldvectorlogo.com/logos/aws-2.svg', width: 100, height: 100 },
  { name: 'MongoDB', src: 'https://cdn.worldvectorlogo.com/logos/mongodb-icon-1.svg', width: 100, height: 100 },
  { name: 'JavaScript', src: 'https://cdn.worldvectorlogo.com/logos/javascript-1.svg', width: 100, height: 100 },
  { name: 'React', src: 'https://cdn.worldvectorlogo.com/logos/react-2.svg', width: 100, height: 100 },
  { name: 'Next.js', src: 'https://cdn.worldvectorlogo.com/logos/next-js.svg', width: 100, height: 100 },
  { name: 'Express.js', src: 'https://cdn.worldvectorlogo.com/logos/express-109.svg', width: 100, height: 100 },

  { name: 'Tailwind CSS', src: 'https://cdn.worldvectorlogo.com/logos/tailwind-css-2.svg', width: 100, height: 100 },
  { name: 'Node.js', src: 'https://cdn.worldvectorlogo.com/logos/nodejs-icon.svg', width: 100, height: 100 },
  { name: 'Python', src: 'https://cdn.worldvectorlogo.com/logos/python-5.svg', width: 100, height: 100 },
  { name: 'PyTorch', src: 'https://cdn.worldvectorlogo.com/logos/pytorch-2.svg', width: 100, height: 100 },
  { name: 'Git', src: 'https://cdn.worldvectorlogo.com/logos/git-icon.svg', width: 100, height: 100 },
  { name: 'TensorFlow', src: 'https://cdn.worldvectorlogo.com/logos/tensorflow-2.svg', width: 100, height: 100 },
];

export default function Technologies() {
  const animationClasses = ['floating-icon-3s', 'floating-icon-4s', 'floating-icon-5s'];

  return (
    <section className="bg-black text-white py-20">
      <div className="container mx-auto px-8 text-center">
        <h1 className="text-4xl font-bold mb-8">Technologies I Use</h1>
        <p className="text-gray-400 mb-12">
          Here are some tools and technologies I use while building projects.
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8">
          {technologies.map((tech, index) => (
            <div
              key={index}
              className={`floating-icon flex flex-col items-center ${animationClasses[index % animationClasses.length]}`}
            >
              <div
                className={`p-2 w-24 h-24 flex items-center justify-center  rounded-full shadow-lg hover:scale-110 transition-transform ${
                    tech.name === 'Next.js' || tech.name === 'Express.js' ? 'bg-white' : ''
                }`}
              >
                <Image
                  src={tech.src}
                  alt={tech.name}
                  width={tech.width}
                  height={tech.height}
                  className={`object-contain rounded-lg ${
                    tech.name === 'Next.js' ? 'p-2' : ''
                  }`}
                />
              </div>
              <p className="mt-4 font-medium">{tech.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
