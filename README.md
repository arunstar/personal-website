# arun@portfolio:~$ Personal Website

A Linux terminal-style interactive portfolio website deployed on Cloudflare Pages.

![Terminal Preview](https://img.shields.io/badge/style-terminal-green?style=for-the-badge)
![Cloudflare](https://img.shields.io/badge/Cloudflare-Pages-F38020?style=for-the-badge&logo=cloudflare)

## ✨ Features

- 🖥️ **Interactive Terminal UI** - Navigate the portfolio using terminal commands
- 🎨 **Dracula-inspired Theme** - Beautiful dark theme with syntax highlighting
- 📺 **CRT Scanline Effect** - Nostalgic retro terminal aesthetics
- ⌨️ **Full Keyboard Support** - Tab completion, command history, Ctrl+L to clear
- 📱 **Responsive Design** - Works on desktop and mobile
- 🔒 **Security Headers** - Pre-configured security headers for Cloudflare Pages
- 🥚 **Easter Eggs** - Try the Konami code! ↑↑↓↓←→←→BA

## 🚀 Available Commands

| Command | Description |
|---------|-------------|
| `help` | Show all available commands |
| `whoami` | Display user information |
| `about` | Learn more about me |
| `neofetch` | Display system info (bio style) |
| `skills` | List technical skills |
| `projects` | View featured projects |
| `experience` | View work experience |
| `contact` | Get contact information |
| `social [platform]` | Open social links |
| `fortune` | Get a random fortune |
| `coffee` | Get some coffee ☕ |
| `clear` | Clear the terminal |

## 📁 Project Structure

```
personal-website/
├── index.html          # Main HTML file
├── styles.css          # Terminal styling & animations
├── terminal.js         # Interactive terminal logic
├── cloudflare.toml     # Cloudflare build configuration
├── _headers            # Security & caching headers
├── _redirects          # URL redirects (optional)
└── README.md           # This file
```

## 🌐 Deploying to Cloudflare Pages

### Option 1: GitHub Integration (Recommended)

1. Push this repository to GitHub
2. Log in to [Cloudflare Dashboard](https://dash.cloudflare.com)
3. Go to **Workers & Pages** → **Create application** → **Pages**
4. Connect your GitHub account and select this repository
5. Configure build settings:
   - **Build command**: Leave empty (static site)
   - **Build output directory**: `/` (root)
6. Click **Save and Deploy**

### Option 2: Direct Upload

1. Log in to [Cloudflare Dashboard](https://dash.cloudflare.com)
2. Go to **Workers & Pages** → **Create application** → **Pages**
3. Select **Upload assets**
4. Drag and drop all files from this folder
5. Click **Deploy site**

### Option 3: Wrangler CLI

```bash
# Install Wrangler
npm install -g wrangler

# Login to Cloudflare
wrangler login

# Deploy
wrangler pages deploy . --project-name=personal-website
```

## 🔧 Customization

### Update Your Bio

Edit the `BIO_DATA` object in `terminal.js`:

```javascript
const BIO_DATA = {
    name: "Your Name",
    title: "Your Title",
    email: "your@email.com",
    // ... add your information
};
```

### Add New Commands

Add new commands to the `COMMANDS` object in `terminal.js`:

```javascript
const COMMANDS = {
    // ... existing commands
    mycommand: {
        description: "My custom command",
        execute: (args) => {
            return "Hello from my command!";
        }
    }
};
```

### Customize Theme

Modify CSS variables in `styles.css`:

```css
:root {
    --bg-primary: #0d1117;
    --accent-green: #7ee787;
    --accent-cyan: #79c0ff;
    /* ... more variables */
}
```

## 📄 License

MIT License - feel free to use this for your own portfolio!

---

<div align="center">

**Made with ❤️ and ☕**

`arun@portfolio:~$ echo "Thanks for visiting!"`

</div>
