# AnxiousDevloper

A modern, responsive blog website with a Python Flask backend and vanilla JavaScript frontend.

## Features

- 🐍 **Python Flask Backend** - RESTful API for blog posts
- 💻 **Modern JavaScript Frontend** - Vanilla JS with ES6+ features
- 🎨 **Beautiful Gradient Design** - Green and blue color scheme
- 📱 **Fully Responsive** - Works seamlessly on all devices
- ♿ **Accessible** - WCAG compliant with ARIA labels and semantic HTML
- ⚡ **Fast & Lightweight** - No heavy frameworks, just clean code

## Tech Stack

### Backend
- Python 3.x
- Flask 3.0.0
- Flask-CORS 4.0.0

### Frontend
- HTML5
- CSS3 (Flexbox, Grid, CSS Variables)
- Modern JavaScript (ES6+)

## Getting Started

### Prerequisites

- Python 3.8 or higher
- pip (Python package manager)

### Installation

1. Clone the repository:
```bash
git clone https://github.com/codess-aus/AnxiousDevloper.git
cd AnxiousDevloper
```

2. Install Python dependencies:
```bash
pip install -r backend/requirements.txt
```

3. Run the Flask backend:
```bash
python backend/app.py
```

4. Open your browser and navigate to:
```
http://localhost:5000
```

The Flask server will automatically serve the frontend files.

## Project Structure

```
AnxiousDevloper/
├── backend/
│   ├── app.py              # Flask application and API endpoints
│   └── requirements.txt    # Python dependencies
├── frontend/
│   ├── index.html         # Main HTML file
│   ├── styles.css         # CSS styles with gradient themes
│   └── app.js             # JavaScript for fetching and displaying posts
├── .gitignore
├── LICENSE
└── README.md
```

## API Endpoints

- `GET /` - Serves the main page
- `GET /api/posts` - Returns all blog posts
- `GET /api/posts/<id>` - Returns a specific blog post
- `GET /api/health` - Health check endpoint

## Design Features

- **Gradient Color Scheme**: Beautiful blend of greens and blues
- **Responsive Layout**: Mobile-first design that adapts to all screen sizes
- **Accessibility**: 
  - Semantic HTML5 elements
  - ARIA labels and roles
  - Keyboard navigation support
  - Skip to main content link
  - Screen reader friendly
- **Modern UI**: Card-based layout with smooth animations and transitions

## Contributing

Feel free to submit issues and pull requests!

## License

This project is licensed under the MIT License - see the LICENSE file for details.
