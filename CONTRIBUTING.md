# Contributing to PokeExplorer 🤝

Thank you for your interest in contributing to PokeExplorer! We welcome contributions from developers of all skill levels. This guide will help you get started and ensure a smooth contribution process.

## 📋 Table of Contents

- [Code of Conduct](#code-of-conduct)
- [Getting Started](#getting-started)
- [Development Setup](#development-setup)
- [How to Contribute](#how-to-contribute)
- [Coding Standards](#coding-standards)
- [Commit Guidelines](#commit-guidelines)
- [Pull Request Process](#pull-request-process)
- [Issue Guidelines](#issue-guidelines)
- [Testing](#testing)
- [Documentation](#documentation)
- [Community](#community)

## 🤲 Code of Conduct

This project and everyone participating in it is governed by our Code of Conduct. By participating, you are expected to uphold this code. Please report unacceptable behavior to the project maintainers.

### Our Standards

- **Be respectful**: Treat everyone with respect and kindness
- **Be inclusive**: Welcome newcomers and help them learn
- **Be collaborative**: Work together towards common goals
- **Be patient**: Remember that everyone is learning
- **Be constructive**: Provide helpful feedback and suggestions

## 🚀 Getting Started

### Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (version 18 or higher)
- **npm**, **yarn**, or **pnpm** (package manager)
- **Git** (version control)
- A code editor (VS Code recommended)

### Recommended Tools

- **VS Code Extensions**:
  - TypeScript and JavaScript Language Features
  - Tailwind CSS IntelliSense
  - ESLint
  - Prettier
  - Auto Rename Tag
  - GitLens

## 💻 Development Setup

1. **Fork the repository**
   ```bash
   # Click the "Fork" button on GitHub, then clone your fork
   git clone https://github.com/YOUR_USERNAME/poke-explorer.git
   cd poke-explorer
   ```

2. **Add upstream remote**
   ```bash
   git remote add upstream https://github.com/ORIGINAL_OWNER/poke-explorer.git
   ```

3. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

4. **Start development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

5. **Verify setup**
   - Open [http://localhost:3000](http://localhost:3000)
   - Ensure the application loads correctly
   - Check that hot reloading works

## 🛠️ How to Contribute

### Types of Contributions

We welcome various types of contributions:

- 🐛 **Bug fixes**
- ✨ **New features**
- 📝 **Documentation improvements**
- 🎨 **UI/UX enhancements**
- ⚡ **Performance optimizations**
- 🧪 **Tests**
- 🔧 **Configuration improvements**

### Contribution Workflow

1. **Check existing issues**
   - Look for existing issues or feature requests
   - Comment on issues you'd like to work on
   - Ask questions if anything is unclear

2. **Create a new branch**
   ```bash
   git checkout -b feature/your-feature-name
   # or
   git checkout -b fix/issue-description
   ```

3. **Make your changes**
   - Follow coding standards (see below)
   - Write meaningful commit messages
   - Test your changes thoroughly

4. **Push and create PR**
   ```bash
   git push origin your-branch-name
   ```
   - Create a Pull Request on GitHub
   - Fill out the PR template completely

## 📏 Coding Standards

### TypeScript Guidelines

- **Use TypeScript**: All new code should be written in TypeScript
- **Strict mode**: Follow strict TypeScript configurations
- **Type safety**: Avoid `any` types when possible
- **Interfaces**: Define clear interfaces for data structures

```typescript
// ✅ Good
interface PokemonData {
  id: number;
  name: string;
  types: PokemonType[];
}

// ❌ Avoid
const pokemonData: any = fetchData();
```

### React Best Practices

- **Functional Components**: Use functional components with hooks
- **Component Naming**: Use PascalCase for component names
- **Props Interface**: Define props interfaces for all components
- **Hooks**: Use custom hooks for reusable logic

```typescript
// ✅ Good
interface PokemonCardProps {
  pokemon: Pokemon;
  onSelect: (id: number) => void;
}

export const PokemonCard: React.FC<PokemonCardProps> = ({ pokemon, onSelect }) => {
  // Component logic
};
```

### File Structure Guidelines

- **Page Components**: Place in `src/app/` following App Router conventions
- **Reusable Components**: Place in `src/components/`
- **UI Components**: Place in `src/components/ui/`
- **Utilities**: Place in `src/lib/`
- **Types**: Define in component files or `src/types/` for shared types

### Styling Guidelines

- **Tailwind CSS**: Use Tailwind utility classes for styling
- **Component Variants**: Use `class-variance-authority` for component variants
- **Responsive Design**: Mobile-first responsive design
- **Accessibility**: Include proper ARIA labels and semantic HTML

```typescript
// ✅ Good
<button 
  className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg focus:ring-2 focus:ring-blue-300"
  aria-label="Load more Pokémon"
>
  Load More
</button>
```

### Naming Conventions

- **Files**: Use kebab-case for file names (`pokemon-card.tsx`)
- **Components**: Use PascalCase (`PokemonCard`)
- **Variables**: Use camelCase (`pokemonData`)
- **Constants**: Use UPPER_SNAKE_CASE (`API_BASE_URL`)
- **Types/Interfaces**: Use PascalCase (`PokemonType`)

## 📝 Commit Guidelines

### Commit Message Format

Use the [Conventional Commits](https://www.conventionalcommits.org/) specification:

```
type(scope): description

[optional body]

[optional footer]
```

### Types

- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation changes
- `style`: Code style changes (formatting, etc.)
- `refactor`: Code refactoring
- `test`: Adding or updating tests
- `chore`: Maintenance tasks

### Examples

```bash
feat(pokemon): add search functionality to pokemon list
fix(ui): resolve mobile navigation menu overlay issue
docs(readme): update installation instructions
style(components): format code according to prettier rules
refactor(api): optimize pokemon data fetching logic
test(pokemon): add unit tests for pokemon card component
chore(deps): update dependencies to latest versions
```

## 🔄 Pull Request Process

### Before Submitting

- [ ] Code follows the style guidelines
- [ ] Self-review of code changes
- [ ] Comments added for complex logic
- [ ] Documentation updated if needed
- [ ] Tests pass locally
- [ ] No console errors or warnings

### PR Template

When creating a PR, include:

1. **Description**: Clear description of changes
2. **Type**: Bug fix, feature, documentation, etc.
3. **Testing**: How you tested the changes
4. **Screenshots**: For UI changes
5. **Breaking Changes**: If any
6. **Related Issues**: Link to related issues

### Review Process

1. **Automated Checks**: Ensure all CI checks pass
2. **Code Review**: Address reviewer feedback
3. **Approval**: Get approval from maintainers
4. **Merge**: Maintainers will merge the PR

## 🐛 Issue Guidelines

### Before Creating an Issue

- Search existing issues to avoid duplicates
- Check if it's already fixed in the latest version
- Gather relevant information about the bug/feature

### Bug Reports

Include the following information:

- **Description**: Clear description of the bug
- **Steps to Reproduce**: Detailed steps
- **Expected Behavior**: What should happen
- **Actual Behavior**: What actually happens
- **Environment**: Browser, OS, Node.js version
- **Screenshots**: If applicable

### Feature Requests

Include the following information:

- **Description**: Clear description of the feature
- **Use Case**: Why is this feature needed?
- **Proposed Solution**: How should it work?
- **Alternatives**: Other solutions considered
- **Additional Context**: Any other relevant information

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

### Writing Tests

- Write tests for new features and bug fixes
- Follow the existing test patterns
- Use descriptive test names
- Test both happy path and edge cases

```typescript
// Example test structure
describe('PokemonCard', () => {
  it('should display pokemon name correctly', () => {
    // Test implementation
  });

  it('should handle click events', () => {
    // Test implementation
  });
});
```

## 📚 Documentation

### Types of Documentation

- **Code Comments**: Explain complex logic
- **README**: Keep updated with new features
- **API Documentation**: Document function interfaces
- **User Guide**: Help users understand features

### Documentation Standards

- Use clear, concise language
- Include code examples
- Keep documentation up-to-date
- Use proper markdown formatting

## 💬 Community

### Getting Help

- **GitHub Discussions**: For questions and general discussion
- **GitHub Issues**: For bug reports and feature requests
- **Code Reviews**: For learning and improving code quality

### Communication Guidelines

- Be respectful and professional
- Provide context when asking questions
- Share knowledge and help others
- Give constructive feedback

## 🏆 Recognition

We appreciate all contributions! Contributors will be:

- Added to the contributors list
- Mentioned in release notes for significant contributions
- Invited to become maintainers for outstanding contributions

## 📞 Contact

If you have questions about contributing, feel free to:

- Open a GitHub Discussion
- Create an issue with the "question" label
- Contact the maintainers directly

---

Thank you for contributing to PokeExplorer! Together, we can build an amazing Pokémon exploration experience. 🌟

## 📜 License

By contributing, you agree that your contributions will be licensed under the same license as the project (MIT License).
