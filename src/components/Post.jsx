import React, { useState } from 'react';
import styles from './Post.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { API_BASE_URI } from '../App';

const Post = ({ post, onDelete, onEdit}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newTitle, setNewTitle] = useState(post.title);

  const getImage = (image) => {
    return image ? API_BASE_URI+ 'imgs/posts/' + image : 'https://via.placeholder.com/600x400'; // Immagine di placeholder
  };

  const colorMap = {
    html: 'green',
    css: 'pink',
    php: 'orange',
    js: 'yellow'
  };

  const getColor = (tag) => {
    return colorMap[tag] || 'gray'; // Colore di default per tag non mappati
  };

  const handleEditSubmit = () => {
    onEdit(post.id, newTitle);
    setIsEditing(false);
  };
  

  return (
    <div className={styles.post}>
      <img src={getImage(post.image)} alt={post.title} className={styles.postImage} />
      <div className={styles.postContent}>
        {isEditing ? (
          <>
            <input className={styles.editContent}
              type="text"
              value={newTitle}
              onChange={(e) => setNewTitle(e.target.value)}
            />
            <button className={styles.saveButton} onClick={handleEditSubmit}>Salva</button>
          </>
        ) : (
          <>
            <h2>{post.title}</h2>
            {post.tags.map((tag) => (
              <span className={styles.tags} key={tag} style={{ backgroundColor: getColor(tag) }}>
                {tag}
              </span>))}
            <p>{post.content}</p>
          </>
        )}
        <div className={styles.btnWrapper}>
          <button className={styles.readMoreButton}>LEGGI DI PIÙ</button>
          <div className={styles.category}>{post.category}</div>
          <div className={styles.postActions}>
            <button className={styles.editBtn}
              onClick={() => setIsEditing(!isEditing)}>
              {isEditing ? 'Annulla' : 'Modifica'}
            </button>
            <FontAwesomeIcon
              icon={faTrash}
              className={styles.deleteIcon}
              onClick={onDelete}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;