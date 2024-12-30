# Deployment Documentation

## GitHub Deployment Guide

### Prerequisites
- Git installed and configured
- GitHub account
- Node.js and pnpm installed
- Environment variables properly configured

### Environment Variables
The following environment variables need to be set in GitHub Secrets:
- Database connection strings
- API keys
- Other sensitive information from `.env`

### Deployment Steps
1. Create a new repository on GitHub
2. Add your GitHub repository as a remote:
```bash
git remote add origin https://github.com/YOUR_USERNAME/wedding-blog.git
```

3. Push your code to GitHub:
```bash
git add .
git commit -m "Initial commit"
git push -u origin main
```

### Build and Development
- Development: `pnpm dev`
- Build: `pnpm build`
- Start: `pnpm start`

### Important Notes
- Ensure all environment variables are properly set
- Never commit sensitive information
- Keep documentation updated with code changes
- Follow the mobile-first design principles
- Maintain TypeScript type safety

### Version Control
- Use semantic versioning
- Keep commits atomic and well-documented
- Follow conventional commit messages

### Performance Considerations
- Images are optimized and lazy loaded
- CSS uses mobile-first approach
- Server components are used by default

Last Updated: 2024-12-30
