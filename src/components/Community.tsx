import React, { useState, useEffect } from 'react';
import '../styles/Community.css';
import { getPosts, createPost, likePost, Post, NewPost } from '../services/api';

const Community = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [newPost, setNewPost] = useState<NewPost>({
    author: '',
    title: '',
    content: '',
    tags: [],
    image: undefined
  });
  const [previewImage, setPreviewImage] = useState<string | null>(null);
  const [likedPosts, setLikedPosts] = useState<string[]>([]);

  useEffect(() => {
    fetchPosts();
    const savedLikedPosts = localStorage.getItem('likedPosts');
    if (savedLikedPosts) {
      setLikedPosts(JSON.parse(savedLikedPosts));
    }
  }, []);

  const fetchPosts = async () => {
    try {
      setLoading(true);
      const fetchedPosts = await getPosts();
      setPosts(fetchedPosts);
    } catch (err) {
      setError('Failed to fetch posts. Please try again later.');
      console.error('Error fetching posts:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    if (name === 'tags') {
      setNewPost(prev => ({
        ...prev,
        tags: value.split(',').map(tag => tag.trim())
      }));
    } else {
      setNewPost(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setNewPost(prev => ({
        ...prev,
        image: file
      }));

      // Create preview URL
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const createdPost = await createPost(newPost);
      setPosts(prev => [createdPost, ...prev]);
      
      // Reset form
      setNewPost({
        author: '',
        title: '',
        content: '',
        tags: [],
        image: undefined
      });
      setPreviewImage(null);
    } catch (err) {
      setError('Failed to create post. Please try again.');
      console.error('Error creating post:', err);
    }
  };

  const handleLike = async (postId: string) => {
    if (!likedPosts.includes(postId)) {
      try {
        const updatedPost = await likePost(postId);
        setPosts(prev =>
          prev.map(post =>
            post._id === postId ? updatedPost : post
          )
        );
        const newLikedPosts = [...likedPosts, postId];
        setLikedPosts(newLikedPosts);
        localStorage.setItem('likedPosts', JSON.stringify(newLikedPosts));
      } catch (err) {
        setError('Failed to like post. Please try again.');
        console.error('Error liking post:', err);
      }
    }
  };

  if (loading) {
    return <div className="loading">Loading posts...</div>;
  }

  if (error) {
    return <div className="error">{error}</div>;
  }

  return (
    <div className="community">
      <section className="community-hero">
        <div className="community-hero-content">
          <h1>Penang Community</h1>
          <p>Share your experiences and discover others' stories</p>
        </div>
      </section>

      <div className="community-content">
        <section className="community-posts">
          <h2>Recent Stories</h2>
          <div className="posts-grid">
            {posts.map(post => (
              <div key={post._id} className="post-card">
                {post.image && (
                  <div className="post-image">
                    <img src={post.image} alt={post.title} />
                  </div>
                )}
                <h3>{post.title}</h3>
                <p className="post-meta">
                  By {post.author} on {new Date(post.date).toLocaleDateString()}
                </p>
                <p className="post-content">{post.content}</p>
                <div className="post-tags">
                  {post.tags.map((tag, index) => (
                    <span key={index} className="tag">
                      {tag}
                    </span>
                  ))}
                </div>
                <button
                  className={`like-button ${likedPosts.includes(post._id) ? 'liked' : ''}`}
                  onClick={() => handleLike(post._id)}
                  disabled={likedPosts.includes(post._id)}
                >
                  ❤ {post.likes} {post.likes === 1 ? 'Like' : 'Likes'}
                </button>
              </div>
            ))}
          </div>
        </section>

        <section className="share-story">
          <h2>Share Your Story</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="author">Your Name:</label>
              <input
                type="text"
                id="author"
                name="author"
                value={newPost.author}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="title">Title:</label>
              <input
                type="text"
                id="title"
                name="title"
                value={newPost.title}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="content">Your Story:</label>
              <textarea
                id="content"
                name="content"
                value={newPost.content}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="tags">Tags (comma-separated):</label>
              <input
                type="text"
                id="tags"
                name="tags"
                value={newPost.tags.join(', ')}
                onChange={handleInputChange}
                placeholder="e.g., Food, Culture, Beach"
              />
            </div>
            <div className="form-group">
              <label htmlFor="image">Add Image:</label>
              <input
                type="file"
                id="image"
                name="image"
                accept="image/*"
                onChange={handleImageChange}
              />
              {previewImage && (
                <div className="image-preview">
                  <img src={previewImage} alt="Preview" />
                </div>
              )}
            </div>
            <button type="submit" className="submit-button">
              Share Story
            </button>
          </form>
        </section>
      </div>
    </div>
  );
};

export default Community;
