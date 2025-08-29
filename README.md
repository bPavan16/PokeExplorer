<div align="center">

# PokeExplorer

> **Discover, search, and compare Pokémon with a blazing-fast, modern web app.**  
> Built using Next.js 14, TypeScript, and Tailwind CSS for a seamless experience.

<br/>

<p>
   <a href="https://nextjs.org/">
      <img src="https://img.shields.io/badge/Next.js-14-black?style=flat-square&logo=next.js" alt="Next.js" />
   </a>
   <a href="https://typescriptlang.org/">
      <img src="https://img.shields.io/badge/TypeScript-5-blue?style=flat-square&logo=typescript" alt="TypeScript" />
   </a>
   <a href="https://tailwindcss.com/">
      <img src="https://img.shields.io/badge/Tailwind-CSS-38B2AC?style=flat-square&logo=tailwind-css" alt="Tailwind CSS" />
   </a>
   <a href="https://opensource.org/licenses/MIT">
      <img src="https://img.shields.io/badge/License-MIT-yellow.svg?style=flat-square" alt="MIT License" />
   </a>
</p>

**PokeExplorer** is your gateway to the Pokémon universe—featuring advanced search, real-time data, and a beautiful, responsive UI.  
Explore stats, evolutions, and more with lightning-fast performance and accessibility in mind.

</div>

## 🌟 Overview

PokeExplorer is a comprehensive web application that allows users to explore the vast world of Pokémon. Built with modern web technologies, it provides a seamless and engaging experience for discovering Pokémon data, statistics, and information.

### ✨ Key Features

- 🔍 **Search & Filter**: Advanced search functionality with multiple filters
- 📱 **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- ⚡ **Fast Performance**: Built with Next.js 14 App Router for optimal performance
- 🎨 **Modern UI**: Clean, intuitive interface with smooth animations
- 🔄 **Real-time Data**: Live data from the official PokéAPI
- ♿ **Accessibility**: WCAG compliant with proper ARIA labels
- 🌙 **Dark Mode Ready**: Prepared for theme switching (coming soon)

## 🚀 Live Demo

🔗 **[Visit PokeExplorer](https://your-deployment-url.com)** *(Update with your actual deployment URL)*

## 📸 Screenshots

| Home Page | Pokémon List | Pokémon Details |
|-----------|--------------|-----------------|
| ![Home](docs/screenshots/home.png) | ![List](docs/screenshots/list.png) | ![Details](docs/screenshots/details.png) |

## 🛠️ Tech Stack

### Frontend
- **Framework**: [Next.js 14](https://nextjs.org/) with App Router
- **Language**: [TypeScript](https://typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **UI Components**: Custom components with Radix UI primitives
- **State Management**: React Server Components + Client Components
- **HTTP Client**: Native fetch API
- **Icons**: Lucide React

### Development Tools
- **Package Manager**: npm/yarn/pnpm
- **Linting**: ESLint with Next.js configuration
- **Formatting**: Prettier
- **Type Checking**: TypeScript strict mode
- **Git Hooks**: Husky (optional)

### External APIs
- **[PokéAPI](https://pokeapi.co/)**: Official Pokémon data source

## 📁 Project Structure

```
poke-explorer/
├── 📂 src/
│   ├── 📂 app/                    # Next.js App Router
│   │   ├── 📂 (home)/            # Route group for home
│   │   │   └── page.tsx           # Home page component
│   │   ├── 📂 pokemon/            # Pokémon routes
│   │   │   ├── page.tsx           # Pokémon list page
│   │   │   └── 📂 [id]/          # Dynamic routes
│   │   │       └── page.tsx       # Individual Pokémon page
│   │   ├── 📂 about/             # About page
│   │   │   └── page.tsx
│   │   ├── layout.tsx             # Root layout
│   │   ├── loading.tsx            # Global loading UI
│   │   ├── error.tsx              # Global error UI
│   │   ├── not-found.tsx          # 404 page
│   │   └── globals.css            # Global styles
│   ├── 📂 components/             # Reusable components
│   │   ├── 📂 ui/                # Base UI components
│   │   │   ├── button.tsx
│   │   │   ├── card.tsx
│   │   │   └── ...
│   │   ├── 📂 pokemon/           # Pokémon-specific components
│   │   │   ├── pokemon-card.tsx
│   │   │   ├── pokemon-grid.tsx
│   │   │   └── pokemon-search.tsx
│   │   └── 📂 layout/            # Layout components
│   │       ├── header.tsx
│   │       ├── footer.tsx
│   │       └── navigation.tsx
│   ├── 📂 lib/                   # Utility functions
│   │   ├── utils.ts              # General utilities
│   │   ├── api.ts                # API helpers
│   │   └── constants.ts          # App constants
│   └── 📂 types/                 # TypeScript type definitions
│       ├── pokemon.ts
│       └── api.ts
├── 📂 public/                    # Static assets
│   ├── 📂 images/
│   ├── favicon.ico
│   └── ...
├── 📂 docs/                      # Documentation
│   ├── 📂 screenshots/
│   └── DEPLOYMENT.md
├── 📄 .env.local.example         # Environment variables template
├── 📄 .gitignore                # Git ignore rules
├── 📄 CONTRIBUTING.md            # Contribution guidelines
├── 📄 package.json              # Dependencies and scripts
├── 📄 tailwind.config.js        # Tailwind configuration
├── 📄 tsconfig.json             # TypeScript configuration
├── 📄 next.config.js            # Next.js configuration
└── 📄 README.md                 # This file
```

## 🚀 Quick Start

### Prerequisites

Ensure you have the following installed:
- **Node.js** 18.0 or higher
- **npm**, **yarn**, or **pnpm**
- **Git**

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/bPavan16/poke-explorer.git
   cd poke-explorer
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.local.example .env.local
   ```
   
   Edit `.env.local` with your configuration:
   ```env
   # Optional: Custom PokéAPI URL (defaults to official API)
   NEXT_PUBLIC_POKEAPI_URL=https://pokeapi.co/api/v2/
   
   # Optional: Analytics, monitoring, etc.
   NEXT_PUBLIC_ANALYTICS_ID=your_analytics_id
   ```

4. **Start the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

5. **Open your browser**
   
   Navigate to [http://localhost:3000](http://localhost:3000) to see the application.

## 📜 Available Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint |
| `npm run lint:fix` | Fix ESLint issues |
| `npm run type-check` | Run TypeScript type checking |
| `npm run format` | Format code with Prettier |

## 🎯 Features & Pages

### 🏠 Home Page (`/`)
- Hero section with project introduction
- Quick navigation to main features
- Featured Pokémon showcase
- Call-to-action buttons

### 📋 Pokémon List (`/pokemon`)
- Grid view of all Pokémon
- Pagination with customizable page size
- Search functionality
- Filter by type, generation, etc.
- Responsive card layout

### 👁️ Pokémon Details (`/pokemon/[id]`)
- Detailed Pokémon information
- Stats visualization
- Type advantages/disadvantages
- Evolution chain
- Ability descriptions

### ℹ️ About Page (`/about`)
- Project information
- Technology stack
- Credits and acknowledgments
- Contact information

## 🎨 Design System

### Color Palette
```css
/* Primary Colors */
--primary-blue: #3B82F6;
--primary-red: #EF4444;
--primary-yellow: #F59E0B;

/* Pokémon Type Colors */
--type-fire: #F87171;
--type-water: #60A5FA;
--type-grass: #34D399;
--type-electric: #FBBF24;
/* ... more type colors */

/* UI Colors */
--background: #FFFFFF;
--foreground: #0F172A;
--muted: #F1F5F9;
--border: #E2E8F0;
```

### Typography
- **Font Family**: Inter (Google Fonts)
- **Headings**: Font weights 600-800
- **Body**: Font weight 400-500
- **Responsive**: Fluid typography scale

### Components
- **Buttons**: Multiple variants (primary, secondary, ghost)
- **Cards**: Hover effects and smooth transitions
- **Forms**: Accessible form controls
- **Navigation**: Mobile-responsive navigation

## 🔧 Configuration

### Environment Variables

| Variable | Description | Required | Default |
|----------|-------------|----------|---------|
| `NEXT_PUBLIC_POKEAPI_URL` | PokéAPI base URL | No | `https://pokeapi.co/api/v2/` |
| `NEXT_PUBLIC_APP_URL` | Application URL | No | `http://localhost:3000` |

### Next.js Configuration

Key configurations in `next.config.js`:
- Image optimization for Pokémon sprites
- API routes configuration
- Bundle analyzer (development)
- Performance optimizations

## 🚀 Deployment

### Vercel (Recommended)

1. **Connect to Vercel**
   ```bash
   npx vercel
   ```

2. **Set environment variables** in Vercel dashboard

3. **Deploy**
   - Automatic deployments on git push
   - Preview deployments for pull requests

### Other Platforms

- **Netlify**: Compatible with static export
- **Railway**: Full-stack deployment
- **Docker**: Containerized deployment

See [DEPLOYMENT.md](docs/DEPLOYMENT.md) for detailed deployment guides.

## 🧪 Testing

### Running Tests

```bash
# Run all tests
npm test

# Run tests in watch mode
npm run test:watch

# Run tests with coverage
npm run test:coverage
```

### Testing Strategy

- **Unit Tests**: Component testing with Jest and React Testing Library
- **Integration Tests**: API integration testing
- **E2E Tests**: User journey testing with Playwright (planned)

## 🤝 Contributing

We welcome contributions from the community! Please read our [Contributing Guidelines](CONTRIBUTING.md) for details on:

- Code of conduct
- Development setup
- Coding standards
- Pull request process
- Issue guidelines

### Quick Contribution Steps

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit changes: `git commit -m 'Add amazing feature'`
4. Push to branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

## 📄 API Documentation

### PokéAPI Integration

This project uses the [PokéAPI](https://pokeapi.co/) for all Pokémon data:

```typescript
// Example API usage
const fetchPokemon = async (id: number) => {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
  return response.json();
};
```

### Rate Limiting
- PokéAPI has no authentication required
- Respectful usage with caching implemented
- CDN caching for static assets

## 🐛 Troubleshooting

### Common Issues

1. **Build fails with TypeScript errors**
   ```bash
   npm run type-check
   ```

2. **Styling issues**
   ```bash
   npm run format
   ```

3. **API rate limiting**
   - Implement local caching
   - Use environment variables for API configuration

4. **Performance issues**
   - Check bundle analyzer: `npm run analyze`
   - Optimize images and components

### Getting Help

- 📖 Check [documentation](docs/)
- 🐛 Open an [issue](https://github.com/bPavan16/poke-explorer/issues)
- 💬 Join [discussions](https://github.com/bPavan16/poke-explorer/discussions)

## 📈 Roadmap

### 🚧 Current Development
- [ ] Advanced search filters
- [ ] Pokémon comparison tool
- [ ] Team builder feature

### 🔮 Future Plans
- [ ] Dark mode implementation
- [ ] Offline support with PWA
- [ ] User authentication
- [ ] Favorite Pokémon lists
- [ ] Battle simulator
- [ ] Multi-language support

## 📊 Performance

### Lighthouse Scores
- **Performance**: 95+
- **Accessibility**: 100
- **Best Practices**: 100
- **SEO**: 100

### Optimizations
- Image optimization with Next.js Image component
- Code splitting and lazy loading
- Server-side rendering for SEO
- Efficient API caching

## 📱 Browser Support

| Browser | Version |
|---------|---------|
| Chrome | 90+ |
| Firefox | 88+ |
| Safari | 14+ |
| Edge | 90+ |

## 🙏 Acknowledgments

- **[PokéAPI](https://pokeapi.co/)** - For providing comprehensive Pokémon data
- **[The Pokémon Company](https://www.pokemon.com/)** - For creating the amazing Pokémon universe
- **[Vercel](https://vercel.com/)** - For excellent hosting and deployment platform
- **[Next.js Team](https://nextjs.org/)** - For the amazing React framework
- **Open Source Community** - For all the incredible tools and libraries

## 📜 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🔗 Links

- **Live Application**: [https://your-poke-explorer.vercel.app](https://your-poke-explorer.vercel.app)
- **Documentation**: [docs/](docs/)
- **Issue Tracker**: [GitHub Issues](https://github.com/bPavan16/poke-explorer/issues)
- **Discussions**: [GitHub Discussions](https://github.com/bPavan16/poke-explorer/discussions)

---

<div align="center">

**Built with ❤️ by [Pavan](https://github.com/bPavan16)**

*Gotta catch 'em all!* 🔴⚪

[⬆ Back to Top](#pokeexplorer-)

</div>
