import { useState } from "react";
import "./styles.css";
import Form from "./components/Form/index.js";
import List from "./components/List/index.js";

export default function App() {
  const [tags, setTags] = useState(["JavaScript", "React", "CSS", "HTML"]);

  function handleAddTag(newTag) {
    setTags([...tags, newTag]);
  }
  function handleDeleteTag(tagToRemove) {
    const deleteItem = tags.filter((tag) => tag !== tagToRemove);

    setTags(deleteItem);
  }
  return (
    <main className="app">
      <Form onAddTag={handleAddTag} />
      <List onDeleteTag={handleDeleteTag} tags={tags} />
    </main>
  );
}
