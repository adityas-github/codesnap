import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function AddSnippet() {
  const [title, setTitle] = useState("");
  const [language, setLanguage] = useState("");
  const [code, setCode] = useState("");
  const [tags, setTags] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    const newSnippet = {
      title,
      language,
      code,
      tags,
    };

    try {
      const response = await fetch("http://localhost:5000/api/snippets", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newSnippet),
      });

      if (response.ok) {
        navigate("/"); // Redirect to homepage
      } else {
        const err = await response.json();
        setError(err.error);
      }
    } catch (error) {
      setError("Something went wrong");
    }
  };

  return (
    <div className="container">
      <h2>Add New Snippet</h2>
      {error && <p className="error">{error}</p>}
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title:</label>
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Language:</label>
          <input
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Code:</label>
          <textarea
            value={code}
            onChange={(e) => setCode(e.target.value)}
            rows={6}
            required
          />
        </div>
        <div>
          <label>Tags:</label>
          <input value={tags} onChange={(e) => setTags(e.target.value)} />
        </div>
        <button type="submit">Add Snippet</button>
      </form>
    </div>
  );
}

export default AddSnippet;
