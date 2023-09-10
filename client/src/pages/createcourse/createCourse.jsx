import React, { useState } from 'react';
import { Link, Router } from 'react-router-dom';

function CreateCourse() {
  const [courseData, setCourseData] = useState({
    title: '',
    description: '',
    videoCount: '',
    rating: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCourseData({
      ...courseData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Handle form submission, e.g., sending the data to an API or performing other actions
    console.log(courseData);
    Router.push('/courses');
  };

  return (
    <div className="container">
      <h1 className="mt-4">Create Courses</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Title
          </label>
          <input
            type="text"
            className="form-control"
            id="title"
            name="title"
            value={courseData.title}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">
            Description
          </label>
          <textarea
            className="form-control"
            id="description"
            name="description"
            value={courseData.description}
            onChange={handleChange}
            required
          />
        </div>
        <Link to="/course">
        <button type="submit" className="btn btn-success">
          Create Course
        </button>
        </Link>
      </form>
    </div>
  );
}

export default CreateCourse;
