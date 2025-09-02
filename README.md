Portfolio Project

## Features

- 🎨 Modern and clean UI design
- 📱 Fully responsive layout
- ⚡ Built with Next.js 14 for optimal performance
- 🎯 SEO optimized with metadata and sitemap
- 📝 Sections for:
  - Hero/Introduction
  - About
  - Experience
  - Projects
  - Skills
  - Contact
- 🔄 Smooth animations and transitions
- 📊 Performance optimized

## Tech Stack

- **Framework:** [Next.js 14](https://nextjs.org/)
- **Styling:** [TailwindCSS](https://tailwindcss.com/)
- **Icons:** [Lucide Icons](https://lucide.dev//)
- **Deployment:** [Vercel](https://vercel.com)

## Project Structure

```
src/
├── app/                 # Next.js app directory
├── components/         # Reusable UI components
│   ├── Navbar.tsx
│   ├── Footer.tsx
│   ├── ProjectCard.tsx
│   └── ...
├── sections/          # Page sections
│   ├── HeroSection.tsx
│   ├── AboutSection.tsx
│   ├── ExperienceSection.tsx
│   └── ...
├── data/             # Static data and content
└── utils/            # Utility functions
```

## Getting Started


1. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

2. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

3. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Customization

1. **Content**: Update the content in the respective section components under `src/sections/`
2. **Styling**: Modify the TailwindCSS classes in the components
3. **Theme**: Customize colors and theme in `tailwind.config.js`
4. **Images**: Replace images in the `public` directory with your own



## License

This project is open source and available under the [MIT License](LICENSE).

## Acknowledgments

- [Next.js](https://nextjs.org/) for the amazing framework
- [TailwindCSS](https://tailwindcss.com/) for the utility-first CSS framework
- [Vercel](https://vercel.com) for the deployment platform
