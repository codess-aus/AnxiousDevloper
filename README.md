# AnxiousDevloper

A personal website and blog built with MkDocs and Material theme, featuring:

- 👋 Landing page with About Me section
- 📝 Blog posts section
- 🎥 YouTube video integration
- 📸 Image gallery
- 🌐 Social media links (YouTube, TikTok, LinkedIn, BlueSky, Lemon8)

## 🚀 Getting Started

### Prerequisites

- Python 3.12+
- pip

### Installation

```bash
pip install -r requirements.txt
```

### Local Development

To run the site locally:

```bash
mkdocs serve
```

Then open your browser to `http://127.0.0.1:8000/AnxiousDevloper/`

### Building

To build the static site:

```bash
mkdocs build
```

The built site will be in the `site/` directory.

## 📦 Deployment

The site is automatically deployed to GitHub Pages when changes are pushed to the `main` branch via GitHub Actions.

## 🎨 Customization

- Edit content in the `docs/` directory
- Modify site configuration in `mkdocs.yml`
- Update social media links in `mkdocs.yml` and `docs/index.md`
- Replace placeholder images and YouTube video IDs with your own content

## 📄 License

See [LICENSE](LICENSE) file for details.
