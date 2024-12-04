import React, { useState, useEffect } from "react";

const initialFormData = {
  title: "",
  content: "",
  image: null,
  category: "",
  tags: [],
  isPublished: false,
};

const BlogForm = ({ onAddArticle }) => {
  const [formData, setFormData] = useState(initialFormData);

  useEffect(() => {
    console.log("Form data changed", formData);
  }, [formData]);

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    if (type === "checkbox" && name !== "isPublished") {
      setFormData((prevData) => ({
        ...prevData,
        tags: checked
          ? [...prevData.tags, value]
          : prevData.tags.filter((tag) => tag !== value),
      }));
    } else if (type === "file") {
      setFormData({
        ...formData,
        [name]: files[0] || null,
      });
    } else if (type === "checkbox") {
      setFormData({
        ...formData,
        [name]: checked,
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddArticle(formData);
    setFormData(initialFormData); 
    document
      .querySelectorAll("input[type=checkbox]")
      .forEach((el) => (el.checked = false)); 
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 bg-light border rounded">
      <div className="mb-3">
        <label className="form-label">Title</label>
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
          className="form-control"
          placeholder="Enter title"
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Content</label>
        <textarea
          name="content"
          value={formData.content}
          onChange={handleChange}
          className="form-control"
          placeholder="Enter content"
          rows="4"
        ></textarea>
      </div>
      <div className="mb-3">
        <label className="form-label">Image</label>
        <input
          type="file"
          name="image"
          onChange={handleChange}
          className="form-control"
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Category</label>
        <select
          name="category"
          value={formData.category}
          onChange={handleChange}
          className="form-select"
        >
          <option value="">Select a category</option>
          <option value="technology">Technology</option>
          <option value="health">Health</option>
          <option value="science">Science</option>
          <option value="lifestyle">Lifestyle</option>
        </select>
      </div>
      <div className="mb-3">
        <label className="form-label">Tags</label>
        <div className="form-check">
          <input
            type="checkbox"
            name="tags"
            value="react"
            onChange={handleChange}
            className="form-check-input"
            id="tagReact"
            checked={formData.tags.includes("react")}
          />
          <label className="form-check-label" htmlFor="tagReact">
            React
          </label>
        </div>
        <div className="form-check">
          <input
            type="checkbox"
            name="tags"
            value="javascript"
            onChange={handleChange}
            className="form-check-input"
            id="tagJavaScript"
            checked={formData.tags.includes("javascript")}
          />
          <label className="form-check-label" htmlFor="tagJavaScript">
            JavaScript
          </label>
        </div>
        <div className="form-check">
          <input
            type="checkbox"
            name="tags"
            value="css"
            onChange={handleChange}
            className="form-check-input"
            id="tagCSS"
            checked={formData.tags.includes("css")}
          />
          <label className="form-check-label" htmlFor="tagCSS">
            CSS
          </label>
        </div>
        <div className="form-check">
          <input
            type="checkbox"
            name="tags"
            value="html"
            onChange={handleChange}
            className="form-check-input"
            id="tagHTML"
            checked={formData.tags.includes("html")}
          />
          <label className="form-check-label" htmlFor="tagHTML">
            HTML
          </label>
        </div>
      </div>
      <div className="mb-3 form-check">
        <input
          type="checkbox"
          name="isPublished"
          checked={formData.isPublished}
          onChange={handleChange}
          className="form-check-input"
          id="isPublished"
        />
        <label className="form-check-label" htmlFor="isPublished">
          Publish
        </label>
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};

export default BlogForm;
