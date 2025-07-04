import React from 'react';

const projects = [
  {
    title: 'Portfolio Website',
    description: 'A personal portfolio built with React and Tailwind CSS to showcase my skills.',
    image: 'https://via.placeholder.com/300x180',
  },
  {
    title: 'To-do-list',
    description: 'An app with CRUD operation using css and js',
    image: 'https://via.placeholder.com/300x180',
  },
  {
    title: 'E-commerce Store',
    description: 'A responsive e-commerce site with shopping cart, and product search.',
    image: 'https://via.placeholder.com/300x180',
  },
  {
    title: 'Calculator app',
    description: 'An app using for making arithmetic operation support.',
    image: 'https://via.placeholder.com/300x180',
    
  },
];

const Projects = () => {
  return (
    <section className="bg-black text-white py-12 px-4 sm:px-8 lg:px-16">
      <h2 className="text-3xl sm:text-4xl font-bold text-center mb-10">My Projects</h2>
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-gray-800 rounded-2xl shadow-lg overflow-hidden hover:scale-105 transition-transform duration-300 hover:shadow-xl hover:shadow-violet-400"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-5">
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-sm text-gray-300">{project.description}</p>
              
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
