import {Component} from 'react'

import BlogItem from '../BlogItem'

class BlogList extends Component {
  state = {
    blogsData: [],
  }

  componentDidMount() {
    this.getBlocks()
  }

  getBlocks = async () => {
    const response = await fetch('https://apis.ccbp.in/blogs')
    const data = await response.json()
    const updateData = data.map(each => ({
      id: each.id,
      title: each.title,

      imageUrl: each.image_url,
      avatarUrl: each.avatar_url,
      author: each.author,
      topic: each.topic,
    }))
    this.setState({
      blogsData: updateData,
    })
  }

  render() {
    const {blogsData} = this.state
    return (
      <div className="bloglist-container">
        {blogsData.map(item => (
          <BlogItem key={item.id} blogData={item} />
        ))}
      </div>
    )
  }
}
export default BlogList
