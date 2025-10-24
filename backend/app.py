"""
Flask backend for AnxiousDevloper blog website.
Provides REST API endpoints for blog posts.
"""
from flask import Flask, jsonify, send_from_directory
from flask_cors import CORS
import os

app = Flask(__name__, static_folder='../frontend')
CORS(app)

# Sample blog post data
BLOG_POSTS = [
    {
        "id": 1,
        "title": "Getting Started with Web Development",
        "author": "AnxiousDevloper",
        "date": "2025-10-15",
        "excerpt": "A beginner's guide to starting your journey in web development.",
        "content": "Web development is an exciting field that combines creativity with technical skills. Whether you're interested in frontend, backend, or full-stack development, there's a place for everyone in this dynamic industry...",
        "tags": ["web-dev", "beginner", "tutorial"]
    },
    {
        "id": 2,
        "title": "Understanding Python Flask",
        "author": "AnxiousDevloper",
        "date": "2025-10-18",
        "excerpt": "Learn how to build REST APIs with Flask framework.",
        "content": "Flask is a lightweight WSGI web application framework in Python. It's designed to make getting started quick and easy, with the ability to scale up to complex applications...",
        "tags": ["python", "flask", "backend"]
    },
    {
        "id": 3,
        "title": "Modern JavaScript Essentials",
        "author": "AnxiousDevloper",
        "date": "2025-10-20",
        "excerpt": "Key JavaScript concepts every developer should know in 2025.",
        "content": "JavaScript has evolved significantly over the years. From ES6 onwards, we've seen features like arrow functions, async/await, modules, and more that make development more efficient and enjoyable...",
        "tags": ["javascript", "frontend", "es6"]
    },
    {
        "id": 4,
        "title": "Responsive Design Best Practices",
        "author": "AnxiousDevloper",
        "date": "2025-10-22",
        "excerpt": "Creating websites that work seamlessly across all devices.",
        "content": "Responsive design is no longer optional - it's essential. With users accessing websites from various devices with different screen sizes, ensuring your site looks great everywhere is crucial...",
        "tags": ["css", "responsive", "design"]
    }
]


@app.route('/')
def index():
    """Serve the main page."""
    return send_from_directory(app.static_folder, 'index.html')


@app.route('/<path:path>')
def serve_static(path):
    """Serve static files."""
    return send_from_directory(app.static_folder, path)


@app.route('/api/posts', methods=['GET'])
def get_posts():
    """Get all blog posts."""
    return jsonify(BLOG_POSTS)


@app.route('/api/posts/<int:post_id>', methods=['GET'])
def get_post(post_id):
    """Get a specific blog post by ID."""
    post = next((post for post in BLOG_POSTS if post['id'] == post_id), None)
    if post:
        return jsonify(post)
    return jsonify({"error": "Post not found"}), 404


@app.route('/api/health', methods=['GET'])
def health_check():
    """Health check endpoint."""
    return jsonify({"status": "healthy", "message": "AnxiousDevloper API is running"})


if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=5000)
