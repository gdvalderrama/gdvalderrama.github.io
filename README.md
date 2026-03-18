# Personal Site (VitePress)

Modern personal site and blog built with **Vue 3** and **VitePress**.

Can be seen live at [https://guiomar.xyz/](https://guiomar.xyz/)

## Features
- **Fast Static Generation:** Powered by VitePress.
- **Blog:** Markdown-based blog posts with automatic data loading.
- **Interactive Tools:** Pokemon generator built with Vue 3.
- **Modern CI/CD:** Automated deployment via GitHub Actions.

## Development

### Local Setup
```bash
# Install dependencies
npm install

# Run dev server with hot reload
npm run dev
```

### Build & Preview
```bash
# Build static site
npm run build

# Preview production build locally
npm run preview
```

## Deployment

The site is automatically built and deployed to **GitHub Pages** whenever a new **GitHub Release** is published.

## Project Structure
- `.vitepress/`: VitePress configuration and custom theme.
- `blog/`: Markdown files for blog posts.
- `public/`: Static assets (images, favicon).
- `index.md`: Home page.
- `pokemon.md`: Pokemon generator tool.
