import React from 'react';
import { Link } from 'react-router-dom';
import { FaStar, FaPlus } from 'react-icons/fa';

function Courses() {
  const courses = [
    {
      imageUrl: "https://www.patterns.dev/img/reactjs/react-logo@3x.svg",
      title: "React",
      description: "React is a JavaScript library for building user interfaces.",
      videoCount: 30,
      rating: 4.7
    },
    {
      imageUrl: "https://codingapple.com/wp-content/uploads/2021/05/%EC%83%81%ED%92%88%EC%82%AC%EC%A7%84-44.png",
      title: "Vue.js",
      description: "Vue.js is a progressive JavaScript framework.",
      videoCount: 25,
      rating: 4.5
    },
    {
      imageUrl: "https://s3.eu-west-1.amazonaws.com/redsys-prod/articles/64ace3828d8056484c3534ab/images/teaserImage_xxxx_Shutterstock_229869889_1683207296398.png",
      title: "Angular",
      description: "Angular is a platform for building mobile and desktop web applications.",
      videoCount: 40,
      rating: 4.2
    },
    // ... add more courses as needed
  ];

  return (
    <div className="container">
      <h1 className="mt-4">All Courses</h1>
      <div className="row row-cols-1 row-cols-lg-2 row-cols-xl-4 g-4">
        {courses.map(course => (
          <>
          <Link to="/course" className="text-decoration-none text-dark">
          <div className="col" key={course.title}>
            <div className="card" style={{ width: "18rem" }}>
              <div className='overflow-hidden'>
                <img
                  src={course.imageUrl}
                  className="card-img-top"
                  alt={course.title}
                  style={{ objectFit: 'cover', height: '200px' }}
                />
              </div>
              <div className="card-body">
                <h5 className="card-title">{course.title}</h5>
                <p className="card-text">{course.description.substring(0, 50)}{course.description.length > 50 ? "..." : ""}</p>
                <div className="video-info d-flex justify-content-between">
                  <span className="video-count">
                    <strong>{course.videoCount}</strong> videos
                  </span>
                  <span className="star-rating">
                    {[...Array(5)].map((_, index) => (
                      <FaStar
                        key={index}
                        style={{
                          color: index < course.rating ? 'gold' : 'grey',
                          marginRight: '2px'
                        }}
                      />
                    ))}
                    {course.rating}
                  </span>
                </div>
              </div>
            </div>
          </div>
          </Link>
          </>
        ))}

        <div className="col">
          <Link to="/createcourse" className="text-decoration-none text-dark">
            <div className="card mb-4" style={{ width: "18rem" }}>
              <div className='d-flex align-items-center justify-content-center' style={{ height: '200px', backgroundColor: 'lightgreen' }}>

                <FaPlus style={{ fontSize: '5rem' }} />

              </div>
              <div className="card-body">
                <h5 className="card-title">Create a Course</h5>
                <p className="card-text">Create a course and share your knowledge with the world.</p>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );

}

export default Courses;
