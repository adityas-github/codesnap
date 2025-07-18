import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

function EditSnippet() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [language, setLanguage] = useState("");
  const [code, setCode] = useState("");
  const [tags, setTags] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchSnippet = async () => {
      try {
        const res = await fetch(`http://localhost:5000/api/snippets/${id}`);
        if (!res.ok) {
          throw new Error("Failed to fetch snippet");
        }
        const data = await res.json();
        setTitle(data.title);
        setLanguage(data.language);
        setCode(data.code);
        setTags(data.tags);
      } catch (err) {
        setError("Snippet not found or server error.");
      } finally {
        setLoading(false);
      }
    };

    fetchSnippet();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(`http://localhost:5000/api/snippets/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title, language, code, tags }),
      });

      if (res.ok) {
        navigate("/");
      } else {
        const err = await res.json();
        setError(err.error || "Update failed");
      }
    } catch (err) {
      setError("Something went wrong");
    }
  };

  if (loading) return <p>Loading snippet...</p>;
  if (error) return <p style={{ color: "red" }}>{error}</p>;

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

export default EditSnippet;
