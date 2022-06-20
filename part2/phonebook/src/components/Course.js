import React from "react";

const Course = ({ course }) => {
  return (
    <div>
      <header>
        <h1>{course.name}</h1>
      </header>
      <content>
        {course.parts.map((course) => (
          <p>
            {course.name} {course.exercises}
          </p>
        ))}
        <div>
          total of{" "}
          {course.parts.reduce((sum, current) => sum + current.exercises, 0)}{" "}
          exercises
        </div>
      </content>
    </div>
  );
};

export default Course;
