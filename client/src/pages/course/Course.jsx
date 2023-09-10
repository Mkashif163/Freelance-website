import React from 'react';
import { Link } from 'react-router-dom';
import { FaPlus } from 'react-icons/fa';

function CoursePlaylist() {
    const videos = [
        {
            thumbnailUrl: "https://www.patterns.dev/img/reactjs/react-logo@3x.svg",
            title: "Introduction to React",
            description: "An overview of React and its core concepts.",
            length: "10:30"
        },
        {
            thumbnailUrl: "https://www.patterns.dev/img/reactjs/react-logo@3x.svg",
            title: "React Components",
            description: "Understanding components and their lifecycle.",
            length: "15:45"
        },
        {
            thumbnailUrl: "https://www.patterns.dev/img/reactjs/react-logo@3x.svg",
            title: "State and Props in React",
            description: "Exploring state management and props in React applications.",
            length: "12:15"
        },
        {
            thumbnailUrl: "https://codingapple.com/wp-content/uploads/2021/05/%EC%83%81%ED%92%88%EC%82%AC%EC%A7%84-44.png",
            title: "Getting Started with Vue.js",
            description: "An introduction to Vue.js and its key features.",
            length: "14:50"
        },
        {
            thumbnailUrl: "https://codingapple.com/wp-content/uploads/2021/05/%EC%83%81%ED%92%88%EC%82%AC%EC%A7%84-44.png",
            title: "Vue Components",
            description: "Creating and using components in Vue applications.",
            length: "18:20"
        },
        {
            thumbnailUrl: "https://codingapple.com/wp-content/uploads/2021/05/%EC%83%81%ED%92%88%EC%82%AC%EC%A7%84-44.png",
            title: "Vue Router and State Management",
            description: "Using Vue Router for navigation and Vuex for state management.",
            length: "21:05"
        },
        // ... add more videos as needed
    ];


    return (
        <div className="container">
            <h1 className="mt-4">Course: <span style={{ fontSize: "30px", color: "skyblue" }}>Web developmen Framworks</span></h1>
            <div className="row row-cols-1 row-cols-lg-2 row-cols-xl-4 g-4">
                {videos.map((video, index) => (
                    <div className="col" key={index}>
                        <div className="card" style={{ width: "18rem" }}>
                            <img
                                src={video.thumbnailUrl}
                                className="card-img-top"
                                alt={video.title}
                                style={{ objectFit: 'cover', height: '200px' }}
                            />
                            <div className="card-body">
                                <h5 className="card-title">{video.title.substring(0,30)}{video.title.length > 30 ? "..." : ""}</h5>
                                <p className="card-text">{video.description.substring(0, 50)}{video.description.length > 50 ? "..." : ""}</p>
                                <div className="video-info">
                                    <span className="video-length">
                                        <strong>Length: </strong> {video.length}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
                <div className="col">
                <Link to="/addvideo" className="text-decoration-none text-dark">
                    <div className="card mb-4" style={{ width: "18rem" }}>
                        <div
                            className='d-flex align-items-center justify-content-center'
                            style={{ height: '200px', backgroundColor: 'lightgreen' }}
                        >
                            <FaPlus style={{ fontSize: '5rem' }} />
                        </div>
                        <div className="card-body">
                            <h5 className="card-title">Add a Video</h5>
                            <p className="card-text">Add a new video to the playlist.</p>
                        </div>
                    </div>
                </Link>
            </div>
            </div>
           

        </div>
    );
}

export default CoursePlaylist;
