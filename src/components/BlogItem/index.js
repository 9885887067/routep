// Write your JS code here

import './index.css'

import {Link} from 'react-router-dom'

const BlogItem = props => {
  const {blogData} = props

  const {id,title, imageUrl, avatarUrl, author, topic} = blogData

  return (
    <Link to={`/blogs/${id}`}>
      <div className="list-item">
        <img src={imageUrl} className="image" />
        <div className="item-container">
          <h1 className="topic">{topic}</h1>
          <p className="title">{title}</p>
          <div className="avatar-container">
            <img src={avatarUrl} className="avatar" alt={author} />
            <p className="author">{author}</p>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default BlogItem
