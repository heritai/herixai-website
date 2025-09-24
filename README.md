# HerixAI — AI Consulting Website

A modern, bilingual (French/English) one-page consulting website for HerixAI, built with Next.js, TailwindCSS, and Framer Motion.

## 🚀 Features

- **Bilingual Support**: French (default) and English with language toggle
- **Dark/Light Theme**: Toggle between dark and light modes
- **Responsive Design**: Optimized for desktop, tablet, and mobile
- **Modern UI**: Neon accents, glass cards, and smooth animations
- **Static Export**: Ready for AWS S3 deployment
- **CI/CD**: Automated testing and deployment with GitHub Actions

## 🛠️ Tech Stack

- **Framework**: Next.js 15 with App Router
- **Styling**: TailwindCSS with custom neon theme
- **Animations**: Framer Motion
- **Icons**: React Icons
- **TypeScript**: Full type safety
- **Deployment**: AWS S3 + CloudFront

## 📦 Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/herixai-website.git
cd herixai-website

# Install dependencies
npm install

# Run development server
npm run dev
```

## 🚀 Development

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Run linting
npm run lint
```

## 🌐 Deployment

### AWS S3 + CloudFront

The project is configured for static export and deployment to AWS S3:

```bash
# Build the project
npm run build

# Deploy to S3 (requires AWS CLI configured)
aws s3 sync ./out s3://your-bucket-name --delete
```

### GitHub Actions CI/CD

The repository includes automated CI/CD workflows:

- **Test Workflow**: Runs on every push and PR
  - Linting and type checking
  - Build validation
  - HTML validation
  - Multi-node version testing

- **Deploy Workflow**: Runs on main branch pushes
  - Builds the project
  - Deploys to AWS S3
  - Invalidates CloudFront cache

### Required Secrets

Configure these secrets in your GitHub repository:

- `AWS_ACCESS_KEY_ID`: Your AWS access key
- `AWS_SECRET_ACCESS_KEY`: Your AWS secret key
- `S3_BUCKET_NAME`: Your S3 bucket name
- `CLOUDFRONT_DISTRIBUTION_ID`: Your CloudFront distribution ID (optional)

## 🎨 Customization

### Theme Colors

Edit `src/app/globals.css` to customize the neon theme:

```css
:root {
  --electric: #00BFFF;        /* Primary accent */
  --neon-purple: #9D4EDD;     /* Secondary accent */
  --background: #070a0f;      /* Dark background */
  --foreground: #e6f1ff;      /* Text color */
}
```

### Content

- **Services**: Update in `src/app/page.tsx` under `services.items`
- **Projects**: Update in `src/app/page.tsx` under `projects.items`
- **About**: Update in `src/app/page.tsx` under `about.text`
- **Contact**: Update email in contact form action

## 📁 Project Structure

```
herixai/
├── .github/workflows/     # CI/CD workflows
├── public/                # Static assets
│   └── images/           # Project and profile images
├── src/app/              # Next.js app directory
│   ├── globals.css       # Global styles and theme
│   ├── layout.tsx        # Root layout
│   └── page.tsx          # Main page component
├── next.config.ts        # Next.js configuration
├── tailwind.config.ts    # TailwindCSS configuration
└── package.json          # Dependencies and scripts
```

## 🔧 Configuration

### Static Export

The project is configured for static export in `next.config.ts`:

```typescript
const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};
```

### TailwindCSS

Custom theme configuration in `tailwind.config.ts` with CSS variables for dynamic theming.

## 📱 Sections

1. **Hero**: Main title and call-to-action
2. **Services**: 6 service categories with descriptions
3. **Projects**: Portfolio showcase with live demos
4. **About**: Personal introduction and credentials
5. **Publications**: Academic work and articles
6. **Contact**: Contact form and social links

## 🌍 Internationalization

- Default language: French
- Toggle to English via navbar button
- All content supports both languages
- Language preference saved in localStorage

## 📄 License

© 2025 HerixAI. All rights reserved.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run tests and linting
5. Submit a pull request

---

Built with ❤️ by [HerixAI](https://herixai.com)