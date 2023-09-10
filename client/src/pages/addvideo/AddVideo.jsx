import React from 'react'

function AddVideo() {
    const handleSubmite = (e) => {
        
        e.preventDefault();
        const formData = new FormData();
        // formData.append("title", e.target.title.value);
        // formData.append("description", e.target.description.value);
        // formData.append("video", e.target.video.files[0]);
        // fetch("http://localhost:5000/api/videos", {
        //     method: "POST",
        //     body: formData,
        // })
        // .then((res) => res.json())
        // .then((data) => {
        //     console.log(data);
        // })
        // .catch((err) => {
        //     console.log(err);
        // });
    };

  return (
    <>
    <div className="container">
        <h1 className="mt-4">Upload Video</h1>
        <form onSubmit={handleSubmite}>
            <div className="mb-3">
                <label htmlFor="title" className="form-label">
                    Title
                </label>
                <input
                    type="text"
                    className="form-control"
                    id="title"
                    name="title"
                    required
                />
                <label htmlFor="description" className="form-label">
                    Description
                </label>
                <textarea
                    className="form-control"
                    id="description"
                    name="description"
                    required
                />
                <label htmlFor="thumnail" className="form-label">
                    Thumnail
                </label>
                <input
                    type="file"
                    className="form-control"
                    id="thumnail"
                    name="thumnail"
                    required
                />
                
                <label htmlFor="video" className="form-label">
                    Video
                </label>
                <input
                    type="file"
                    className="form-control"
                    id="video"
                    name="video"
                    required
                />
                <label htmlFor="selecPlaylist" className="form-label">
                    Playlist
                </label>
                <select className="form-select" aria-label="Default select example">
                    <option selected>Open this select menu</option>
                    <option value="1">Playlist 1</option>
                    <option value="2">Playlist 2</option>
                    <option value="3">Playlist 3</option>
                </select>
                
                <input type="submit" className="mt-2 btn btn-success" />
                </div>
        </form>
    </div>
    </>
    
  )
}

export default AddVideo