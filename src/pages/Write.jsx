import { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import 'quill-image-uploader/dist/quill.imageUploader.min.css';



const Write = () => {
  const [value, setValue] = useState('');
  console.log(value);



  // image preview garne upload garese
  const [imagefile, setImagefile] = useState(null);
  function handleChangeImage(e) {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagefile(reader.result);
      };
      reader.readAsDataURL(file);
    }
  }


  return (
    <div className='writePost'>
      <div className="editorContainer">
        <ReactQuill theme="snow" value={value} onChange={setValue} />

      </div>


        <div className="menu">
        <div className="item">
          {/* <h1>publish</h1>
            <span>
              <b>Status: </b> Draft
            </span>
            <span>
              <b>Visibility: </b> Public
            </span> */}

        <div className="mb-3 mt-4">
              <label htmlFor="formFile" className="form-label">
                file input example
              </label>
              <input
                className="form-control"
                type="file"
                id="formFile"
                onChange={handleChangeImage}
              />
              <br />
              {imagefile && <img src={imagefile} alt="Image File" style={{ maxWidth: '50%' }} />}
            </div>
        </div>
      </div>
      <div className="item">
        <h1>category</h1>

        <div class="form-check">
          <input
            class="form-check-input"
            type="radio"
            name="flexRadioDefault"
            id="art"
          />
          <label class="form-check-label" for="art">
            Art
          </label>
        </div>
        <div class="form-check">
          <input
            class="form-check-input"
            type="radio"
            name="flexRadioDefault"
            id="science"
            checked
          />
          <label class="form-check-label" for="science">
            science
          </label>
        </div>

        <div className="buttons d-flex gap-2">
          <button type="button" class="btn btn-primary">
            Save as Draft
          </button>
          <button type="button" class="btn btn-dark">
            Update
          </button>
        </div>
      </div>
    </div>
  )
}

export default Write