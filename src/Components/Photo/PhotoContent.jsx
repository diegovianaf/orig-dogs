import React from 'react'
import { Link } from 'react-router-dom'
import { PHOTOS_GET } from '../../api'
import PhotoComments from './PhotoComments'
import styles from './PhotoContent.module.css'

const PhotoContent = ({ data }) => {
  const { photo, comments } = data

  return (
    <div className={styles.photo}>
      <div className={styles.img}>
        <img src={photo.src} alt={photo.title} />
      </div>
      <div className={styles.details}>
        <div>
          <p className={styles.author}>
            <Link to={`/profile/${photo.author}`}>
              @{photo.author}
            </Link>
            <span className={styles.views}>
              {PHOTOS_GET.acessos}
            </span>
          </p>
          <h1 className='title'>
            <Link to={`/photo/${photo.id}`}>{photo.title}</Link>
          </h1>
          <ul className={styles.attributes}>
            <li>{photo.peso} kg</li>
            <li>{photo.idade} anos</li>
          </ul>
        </div>
        <PhotoComments id={photo.id} comments={comments} />
      </div>
    </div>
  )
}

export default PhotoContent
