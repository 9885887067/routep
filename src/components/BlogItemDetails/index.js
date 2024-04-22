// Write your JS code here
import {Component} from 'react'

import Loader from 'react-loader-spinner'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

class BlogItemDetails extends Component {
  state = {
    blogData: [],
  }

  componentDidMount() {
    this.getBlogItem()
  }

  getBlogItem = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const response = await fetch(`https://apis.ccbp.in/blogs/${id}`)
    const data = await response.json()
    const updateData = {
      id: data.id,
      title: data.title,
      imageUrl: data.image_url,
      avatarUrl: data.avatar_url,
      author: data.author,
      content: data.content,
      topic: data.topic,
    }

    this.setState({
      blogData: updateData,
      isLoading: false,
    })
  }

  renderBlogItem = () => {
    const {blogData} = this.state

    const {id, title, imageUrl, avatarUrl, author, content, topic} = blogData

    return (
      <div className="blog-info">
        <h1 className="title">{title}</h1>
        <div className="avatar-container">
          <img src={avatarUrl} className="avatar" alt={`item${id}`} />
          <p className="author">{author}</p>
        </div>
        <img src={imageUrl} className="image" alt={`avatar${id}`} />
        <p className="content">{content}</p>
      </div>
    )
  }

  render() {
    const {isLoading} = this.state
    return (
      <div className="blog-container">
        {isLoading ? (
          <div data-testid="loader">
            <Loader
              type="TailSpin"
              color="#00bfff"
              height={50}
              width={50}
            ></Loader>
          </div>
        ) : (
          this.renderBlogItem()
        )}
      </div>
    )
  }
}

export default BlogItemDetails
