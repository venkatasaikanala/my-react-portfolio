import React from 'react';

export default function Projects() {
  return (
    <section id="projects" className="my-20 w-full flex flex-col gap-12 mx-auto">
      <h2 className="text-5xl text-blue-500 font-bold text-center">
        My Projects
      </h2>

      <div className="p-10 bg-blue-200 flex flex-col lg:flex-row gap-8 items-center max-w-5xl mx-auto shadow transition hover:shadow-xl hover:scale-[102%] w-full">
        <div className="w-80 flex-shrink-0">
          <a href="https://react.dev/" className="block w-full h-full">
            <img
              src="https://images.shiksha.com/mediadata/images/articles/1710401210php65SJd5.jpeg"
              alt="Online Grievance Redressal System"
              className="w-full h-full object-cover rounded"
            />
          </a>
        </div>
        <div className="flex flex-col flex-1 gap-4 justify-center">
          <h3 className="font-bold text-3xl text-center lg:text-left hover:underline">
            Online Grievance Redressal System
          </h3>
          <p className="text-center lg:text-left">
            The "Online Grievance Redressal System" is a web-based platform designed to streamline the process of reporting and addressing grievances and complaints within an organization or institution. This system provides a user-friendly interface for users to submit grievances and track their status, while administrators can manage and resolve these issues efficiently. It aims to improve transparency, accountability, and user satisfaction in the grievance resolution process.
          </p>
        </div>
      </div>

      <div className="p-10 bg-blue-200 flex flex-col lg:flex-row gap-8 items-center max-w-5xl mx-auto shadow transition hover:shadow-xl hover:scale-[102%] w-full">
        <div className="w-80 flex-shrink-0">
          <a href="https://react.dev/" className="block w-full h-full">
            <img
              src="https://images.shiksha.com/mediadata/images/articles/1491389849phpDzDUD8.jpeg"
              alt="Meta Heuristic method for student dilemma resolution"
              className="w-full h-full object-cover rounded"
            />
          </a>
        </div>
        <div className="flex flex-col flex-1 gap-4 justify-center">
          <h3 className="font-bold text-3xl text-center lg:text-left hover:underline">
            Meta Heuristic Method for Student Dilemma Resolution
          </h3>
          <p className="text-center lg:text-left">
            Meta Heuristic Method for Student Placement Dilemma Resolution using Agile Methodologies addresses common queries faced by final year students during the placement process. This web-based platform filters out common queries and provides unified responses, reducing the burden on placement authorities. The queries are categorized into Regular, Dream, and Super Dream companies, and the count of queries at each query ID is displayed on the user interface. The portal is developed using the Agile methodology, following an iterative approach.
          </p>
        </div>
      </div>
    </section>
  );
}
