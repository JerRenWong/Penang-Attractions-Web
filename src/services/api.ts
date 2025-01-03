const API_URL = 'https://penang-tourism-backend.onrender.com/api';

export interface Post {
  _id: string;
  author: string;
  title: string;
  content: string;
  date: string;
  likes: number;
  tags: string[];
  image?: string;
}

export interface NewPost {
  author: string;
  title: string;
  content: string;
  tags: string[];
  image?: File;
}

export const getPosts = async (): Promise<Post[]> => {
  const response = await fetch(`${API_URL}/posts`);
  if (!response.ok) {
    throw new Error('Failed to fetch posts');
  }
  return response.json();
};

export const createPost = async (post: NewPost): Promise<Post> => {
  const formData = new FormData();
  formData.append('author', post.author);
  formData.append('title', post.title);
  formData.append('content', post.content);
  formData.append('tags', JSON.stringify(post.tags));
  
  if (post.image) {
    formData.append('image', post.image);
  }

  const response = await fetch(`${API_URL}/posts`, {
    method: 'POST',
    body: formData,
  });

  if (!response.ok) {
    throw new Error('Failed to create post');
  }
  return response.json();
};

export const likePost = async (postId: string): Promise<Post> => {
  const response = await fetch(`${API_URL}/posts/${postId}/like`, {
    method: 'PATCH',
  });
  if (!response.ok) {
    throw new Error('Failed to like post');
  }
  return response.json();
};

export const deletePost = async (postId: string): Promise<void> => {
  const response = await fetch(`${API_URL}/posts/${postId}`, {
    method: 'DELETE',
  });
  if (!response.ok) {
    throw new Error('Failed to delete post');
  }
};
