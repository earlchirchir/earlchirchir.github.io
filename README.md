# 🚀 Earl Chirchir - GitHub Developer Portfolio

A responsive, high-tech GitHub Portfolio website for **Earl Chirchir** (Robotics & Kinematics Engineer, ESP32 & Embedded Systems Developer).

Features automatic live fetching of your GitHub repositories, dark mode glassmorphism UI, search, language filtering, clone URL clipboard utilities, and 1-click **GitHub Pages** automated deployment.

---

## ⚡ Quick Start (Local Development)

To run and view the website locally:

```bash
# 1. Install dependencies
npm install

# 2. Start dev server
npm run dev
```

Open your browser to `http://localhost:5173`.

---

## 🌐 Deploying to GitHub Pages (Free Hosting)

### Method 1: Automated GitHub Actions (Recommended)

1. Create a repository on GitHub named **`earlchirchir.github.io`** (or `github-portfolio`).
2. Push all the files from this directory to your GitHub repository:
   ```bash
   git init
   git add .
   git commit -m "Initial commit of GitHub Portfolio website"
   git branch -M main
   git remote add origin https://github.com/earlchirchir/earlchirchir.github.io.git
   git push -u origin main
   ```
3. In your GitHub repository settings:
   - Go to **Settings** > **Pages**.
   - Under **Build and deployment** > **Source**, select **GitHub Actions**.
4. The workflow in `.github/workflows/deploy.yml` will automatically build and publish your site at **`https://earlchirchir.github.io`** every time you push updates!

---

## 🛠️ Built With

- **Vite** - High performance static builder
- **HTML5 & Vanilla CSS** - Glassmorphism, CSS variables, CSS grid
- **JavaScript (ES6+)** - Dynamic GitHub REST API client & hydrated state
- **FontAwesome 6** - Icons
- **Google Fonts** - Outfit & JetBrains Mono
