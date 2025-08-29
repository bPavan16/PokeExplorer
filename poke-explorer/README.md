# PokeExplorer 

A beautiful and modern Pokémon exploration website built with Next.js 14, TypeScript, and Tailwind CSS. Discover, search, and learn about your favorite Pokémon with an intuitive and responsive interface.

## 🚀 Features

- **Responsive Design**: Beautiful UI that works on all devices
- **Pokémon Grid**: Browse through all Pokémon with pagination
- **Search Functionality**: Find Pokémon by name instantly
- **Individual Pokémon Pages**: Detailed information for each Pokémon
- **Modern UI Components**: Built with shadcn/ui components
- **Fast Performance**: Optimized with Next.js 14 and React 18

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Icons**: Lucide React
- **API**: PokeAPI (https://pokeapi.co)

## 📁 Frontend Directory Structure

```
poke-explorer/
├── public/                     # Static assets
│   ├── file.svg
│   ├── globe.svg
│   ├── next.svg
│   ├── vercel.svg
│   └── window.svg
├── src/                        # Source code
│   ├── app/                    # Next.js App Router
│   │   ├── favicon.ico         # Site favicon
│   │   ├── globals.css         # Global styles
│   │   ├── layout.tsx          # Root layout component
│   │   ├── page.tsx            # Home page
│   │   └── pokemon/            # Pokémon routes
│   │       ├── page.tsx        # Pokémon listing page
│   │       └── [id]/           # Dynamic Pokémon detail routes
│   │           └── page.tsx    # Individual Pokémon page
│   ├── components/             # Reusable components
│   │   ├── shared/             # Shared layout components
│   │   │   ├── Footer.tsx      # Site footer
│   │   │   └── Header.tsx      # Site header
│   │   └── ui/                 # shadcn/ui components
│   │       ├── alert.tsx
│   │       ├── badge.tsx
│   │       ├── button.tsx
│   │       ├── card.tsx
│   │       ├── input.tsx
│   │       ├── progress.tsx
│   │       ├── separator.tsx
│   │       ├── sheet.tsx
│   │       └── visually-hidden.tsx
│   └── lib/                    # Utility functions
│       └── utils.ts            # Common utilities (cn function, etc.)
├── components.json             # shadcn/ui configuration
├── eslint.config.mjs           # ESLint configuration
├── next-env.d.ts              # Next.js TypeScript declarations
├── next.config.ts             # Next.js configuration
├── package.json               # Dependencies and scripts
├── postcss.config.mjs         # PostCSS configuration
├── tsconfig.json              # TypeScript configuration
└── README.md                  # Project documentation
```

## 🏗️ Architecture Overview

### App Router Structure
The project uses Next.js 14's App Router with the following routing structure:

- `/` - Home page with hero section and navigation
- `/pokemon` - Pokémon listing with search and pagination
- `/pokemon/[id]` - Individual Pokémon detail pages

### Component Organization

#### `src/app/`
Contains all route components and layouts using the App Router pattern.

#### `src/components/shared/`
Reusable layout components used across multiple pages:
- **Header.tsx**: Navigation header with branding
- **Footer.tsx**: Site footer with copyright information

#### `src/components/ui/`
shadcn/ui components for consistent design system:
- Form components (Button, Input)
- Layout components (Card, Sheet, Separator)
- Feedback components (Alert, Badge, Progress)
- Accessibility components (Visually Hidden)

#### `src/lib/`
Utility functions and configurations:
- **utils.ts**: Contains the `cn()` function for conditional class names

## 🚦 Getting Started

### Prerequisites
- Node.js 18+ 
- npm, yarn, or pnpm

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
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

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📱 Pages Overview

### Home Page (`/`)
- Hero section with PokeExplorer branding
- Navigation links to main sections
- Beautiful gradient background
- Call-to-action buttons

### Pokémon Listing (`/pokemon`)
- Grid layout showing all Pokémon
- Search functionality by name
- Pagination controls
- Hover effects and animations
- Loading states

### Pokémon Detail (`/pokemon/[id]`)
- Individual Pokémon information
- High-quality artwork
- Stats and abilities
- Type information

## 🎨 Styling

The project uses Tailwind CSS for styling with the following approach:

- **Responsive Design**: Mobile-first approach with responsive breakpoints
- **Component Variants**: Consistent styling through shadcn/ui variants
- **Color Palette**: Custom color scheme with blue and purple gradients
- **Animations**: Smooth transitions and hover effects

## 📦 Dependencies

### Core Dependencies
- `next`: React framework
- `react` & `react-dom`: React library
- `typescript`: Type safety

### UI & Styling
- `tailwindcss`: Utility-first CSS framework
- `@radix-ui/*`: Headless UI components
- `lucide-react`: Beautiful icons
- `class-variance-authority`: Component variants
- `clsx` & `tailwind-merge`: Conditional classes

### Development
- `eslint`: Code linting
- `@types/*`: TypeScript type definitions

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🔗 Links

- **PokeAPI**: [https://pokeapi.co](https://pokeapi.co)
- **Next.js**: [https://nextjs.org](https://nextjs.org)
- **shadcn/ui**: [https://ui.shadcn.com](https://ui.shadcn.com)
- **Tailwind CSS**: [https://tailwindcss.com](https://tailwindcss.com)

---

Built with ❤️ using Next.js and the PokeAPI