
# NeuralForge - AI/ML & Backend Portfolio

A high-performance, premium portfolio template designed for AI/ML and Backend Engineers. Featuring a glassmorphism UI, interactive project showcases, Medium article feeds, and an integrated Gemini AI Assistant.

## 🚀 Features
- **Modern UI/UX**: Built with React 19, Tailwind CSS, and Framer-like glassmorphism.
- **AI Assistant**: Powered by Google Gemini (`gemini-3-flash-preview`) to answer recruiter questions.
- **Dynamic Content**: Sections for Experience, Education, Projects (Video/Image support), and Medium articles.
- **Responsive**: Fully optimized for mobile, tablet, and desktop.

## 🛠️ Installation

### Prerequisites
- [Node.js](https://nodejs.org/) (v18 or higher)
- A Google Gemini API Key (Get one at [ai.google.dev](https://ai.google.dev/))

### 1. Clone the Repository
```bash
git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name
```

### 2. Install Dependencies
This project uses ESM modules via a CDN in the browser, but for local development and bundling, we recommend using [Vite](https://vitejs.dev/).
```bash
npm install
```

### 3. Environment Setup
Create a `.env` file in the root directory:
```env
VITE_API_KEY=your_gemini_api_key_here
```

### 4. Run Locally
```bash
npm run dev
```

## 🌐 Deployment to GitHub Pages

1. **Install the gh-pages package**:
   ```bash
   npm install gh-pages --save-dev
   ```

2. **Update `package.json`**:
   Add a `homepage` field:
   ```json
   "homepage": "https://your-username.github.io/your-repo-name",
   ```
   Add these scripts:
   ```json
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d dist"
   }
   ```

3. **Deploy**:
   ```bash
   npm run deploy
   ```

## ⚠️ Security Warning
Since this is a client-side application, your API key will be visible in the network tab. For a production-ready portfolio, it is recommended to proxy the Gemini API calls through a simple Vercel/Netlify serverless function to keep your key secret.

## 📜 License
MIT License - feel free to use and modify for your personal portfolio!
