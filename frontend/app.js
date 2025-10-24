/**
 * AnxiousDevloper Blog - Frontend JavaScript
 * Handles fetching and displaying blog posts from the Flask API
 */

// API Configuration
const API_BASE_URL = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1'
    ? 'http://localhost:5000/api'
    : '/api';

/**
 * Fetch blog posts from the API
 */
async function fetchBlogPosts() {
    try {
        const response = await fetch(`${API_BASE_URL}/posts`);
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const posts = await response.json();
        return posts;
    } catch (error) {
        console.error('Error fetching blog posts:', error);
        throw error;
    }
}

/**
 * Create a blog post card element
 */
function createBlogCard(post) {
    const card = document.createElement('article');
    card.className = 'blog-card';
    card.setAttribute('role', 'listitem');
    card.setAttribute('tabindex', '0');
    card.setAttribute('aria-labelledby', `post-title-${post.id}`);
    
    // Format date
    const date = new Date(post.date).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
    
    // Create tags HTML
    const tagsHTML = post.tags
        .map(tag => `<span class="tag" role="listitem">${tag}</span>`)
        .join('');
    
    card.innerHTML = `
        <div class="blog-card-header">
            <h3 class="blog-card-title" id="post-title-${post.id}">${escapeHtml(post.title)}</h3>
            <div class="blog-card-meta">
                <span aria-label="Author">By ${escapeHtml(post.author)}</span>
                <span aria-label="Published date">
                    <time datetime="${post.date}">${date}</time>
                </span>
            </div>
        </div>
        <p class="blog-card-excerpt">${escapeHtml(post.excerpt)}</p>
        <div class="blog-card-tags" role="list" aria-label="Post tags">
            ${tagsHTML}
        </div>
    `;
    
    // Add click handler
    card.addEventListener('click', () => handlePostClick(post));
    
    // Add keyboard support
    card.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            handlePostClick(post);
        }
    });
    
    return card;
}

/**
 * Handle post card click
 */
function handlePostClick(post) {
    // For now, just log the post. In a real app, this would navigate to the post detail page
    console.log('Post clicked:', post);
    alert(`Post "${post.title}" clicked!\n\nIn a full implementation, this would navigate to the detailed post page.`);
}

/**
 * Escape HTML to prevent XSS
 */
function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

/**
 * Display blog posts in the DOM
 */
function displayBlogPosts(posts) {
    const container = document.getElementById('posts-container');
    
    // Clear loading state
    container.innerHTML = '';
    
    if (!posts || posts.length === 0) {
        container.innerHTML = `
            <div class="error" role="alert">
                <p>No blog posts found.</p>
            </div>
        `;
        return;
    }
    
    // Create and append blog cards
    posts.forEach(post => {
        const card = createBlogCard(post);
        container.appendChild(card);
    });
    
    // Announce to screen readers
    const announcement = document.createElement('div');
    announcement.setAttribute('role', 'status');
    announcement.setAttribute('aria-live', 'polite');
    announcement.className = 'sr-only';
    announcement.textContent = `${posts.length} blog posts loaded`;
    container.appendChild(announcement);
}

/**
 * Display error message
 */
function displayError(error) {
    const container = document.getElementById('posts-container');
    container.innerHTML = `
        <div class="error" role="alert">
            <p>Failed to load blog posts. Please try again later.</p>
            <p style="font-size: 0.9em; margin-top: 0.5rem;">${escapeHtml(error.message)}</p>
        </div>
    `;
}

/**
 * Initialize the application
 */
async function init() {
    try {
        const posts = await fetchBlogPosts();
        displayBlogPosts(posts);
    } catch (error) {
        displayError(error);
    }
}

// Run initialization when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}

// Add smooth scrolling for skip link
document.addEventListener('DOMContentLoaded', () => {
    const skipLink = document.querySelector('.skip-link');
    if (skipLink) {
        skipLink.addEventListener('click', (e) => {
            e.preventDefault();
            const target = document.querySelector(skipLink.getAttribute('href'));
            if (target) {
                target.focus();
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    }
});
