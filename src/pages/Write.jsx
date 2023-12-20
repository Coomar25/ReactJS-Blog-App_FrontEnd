import { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import "quill-image-uploader/dist/quill.imageUploader.min.css";
import Form from "react-bootstrap/Form";
import { getTokenFromCookie } from "../service/TokenService";
import axios from "axios";







const Write = () => {
  const {token, user} = getTokenFromCookie();
  console.log(user._id);
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [content, setContent] = useState("");
  const [imageormedia, setImageormedia] = useState("");

  // image preview garne upload garese
  const [imagefile, setImagefile] = useState(null);

  const  handleBlogPostSubmit = async (e) => {
      e.preventDefault();
      console.log(title, category, content, imageormedia);

      const postData = {
        title: title,
        category: category,
        content: content,
        author:user.username,
        imagesOrMedia: imageormedia,
        user: user._id
      }

   
      axios.post('http://localhost:5000/post/addpost', postData, {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      })
        .then(response => {
          console.log(response.data);
        })
        .catch(error => {
          if (error.response) {
            console.error('Error response data:', error.response.data);
            console.error('Status code:', error.response.status);
            console.error('Headers:', error.response.headers);
          } else if (error.request) {
            console.error('No response received. Request:', error.request);
          } else {
            console.error('Error setting up the request:', error.message);
          }
          console.error('Request payload:', postData); // Log the request payload for debugging
        });
      


  }

  function handleChangeImage(e) {
    // to previe uploaded image
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagefile(reader.result);
      };
      reader.readAsDataURL(file);
    }
    // to previe uploaded image code ended here
  }

  const handleEditorChange = (value) => {
    setContent(value);
  }



  return (
    <div className="writePost mb-4">
      <input type="hidden" value="user_id" />
      <Form>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Blog Title</Form.Label>
          <Form.Control value={title} onChange={(e)=>setTitle(e.target.value)} type="text" placeholder="Title" />
        </Form.Group>
      </Form>
      <div className="selectCategory mt-4 mb-4 ">
        <Form.Select value={category} onChange={(e)=>setCategory(e.target.value)} aria-label="Default select example">
          <option>Select the category</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </Form.Select>
      </div>

      <div className="editorContainer">
        <ReactQuill theme="snow" value={content} onChange={handleEditorChange} />
      </div>

      <div className="imagelinkhere mt-4 mb-4" >
          <Form.Control type="text" value={imageormedia} onChange={(e)=>setImageormedia(e.target.value)} placeholder="Image Link here "  />
      </div>

      <div className="menu">
        {/* ===================================image preview================================= */}
        <br />
        {imagefile && (
          <img src={imagefile} alt="Image File" style={{ maxWidth: "50%" }} />
        )}
        {/* ==================================================================== */}
        <div className="item">
          <div className="mb-3 mt-4">
            <label htmlFor="formFile" className="form-label">
              Image File  doesn't work currently now
            </label>
            <input
              className="form-control"
              type="file"
              id="formFile"
              onChange={handleChangeImage}
            />
            <br />
          </div>
        </div>
      </div>
      <div className="item mb-4">
        <div className="buttons d-flex gap-2">
          <button onClick={handleBlogPostSubmit} type="button mb-4" class="btn btn-dark">
            Post Blog
          </button>
        </div>
      </div>
    </div>
  );
};

export default Write;
