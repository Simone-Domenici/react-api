import React, { useState, useEffect } from 'react';
import styles from './Form.module.css'

const Form = ({ onAddPost }) => {
    const [formState, setFormState] = useState({
      title: '',
      image: '',
      content: '',
      tags: '',
      published: false,
      author: '',
      category: '',
    });
    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormState((prevData) => ({
          ...prevData,
          [name]: type === 'checkbox' ? checked : value,
        }));
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      if (!formState.title) {
        alert('Il titolo è obbligatorio.');
        return;
      }
  
      onAddPost({
        ...formState,
        tags: formState.tags.split(',').map(tag => tag.trim()),
      });
  
      setFormState({ title: '', image: '', content: '', tags: '', published: false, author: '',category: ''});
    };
    useEffect(() => {
      if (formState.published) {
        alert('Stai per pubblicare un articolo.');
      }
    }, [formState.published]);
  
    return (
      <form className={styles.form} onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          placeholder="Titolo"
          value={formState.title}
          onChange={handleChange}
        />
        <input
        type="text"
        name="image"
        placeholder="URL immagine"
        value={formState.image}
        onChange={handleChange}
      />
      <textarea
        name="content"
        placeholder="Contenuto"
        value={formState.content}
        onChange={handleChange}
      />
      <input
        type="text"
        name="tags"
        placeholder="Tag (separati da virgola)"
        value={formState.tags}
        onChange={handleChange}
      />
      <input
        type="text"
        name="author"
        placeholder="Autore"
        value={formState.author}
        onChange={handleChange}
      />
      <select name="category" value={formState.category} onChange={handleChange}>
        <option value="">Seleziona una categoria</option>
        <option value="tech">Tech</option>
        <option value="lifestyle">Lifestyle</option>
        <option value="news">News</option>
      </select>
      {/* <select name="published" value={formState.published} onChange={handleChange}>
        <option value="false">Draft</option>
        <option value="true">Published</option>
      </select> */}
      <label>
        <input
          type="checkbox"
          name="published"
          checked={formState.published}
          onChange={handleChange}
        />
        Pubblica
      </label>
        <button type="submit">Aggiungi Post</button>
      </form>
    );
  };
  
  export default Form;