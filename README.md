# Personal Portfolio - Luis Rivas

A modern personal portfolio built with React, Vite, and shadcn/ui, showcasing my experience as a Full Stack Developer.

## 🚀 Features

- ⚡ Developed with React + Vite for optimal performance
- 🎨 Modern and responsive design using Tailwind CSS
- 🌓 Dark/light mode with persistence
- 🧩 Reusable components from shadcn/ui
- 📱 Fully responsive layout
- 🎯 Organized sections to showcase:
  - Personal information
  - Work experience
  - Featured projects
  - Technical skills
  - Contact information

## 🛠️ Technologies Used

- React
- Vite
- TypeScript
- Tailwind CSS
- shadcn/ui
- Lucide Icons

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/personal-portfolio.git
```

2. Install dependencies:


```bash
cd personal-portfolio
npm install
```

3. Start the development server:


```bash
npm run dev
```

## 🔧 Configuration

The project uses Vite as a bundler and development tool. You can modify the configuration in the following files:

- `vite.config.ts` - Vite configuration
- `tailwind.config.js` - Tailwind CSS configuration
- `tsconfig.json` - TypeScript configuration


## 📁 Project Structure

```
personal-portfolio/
├── src/
│   ├── components/
│   │   ├── ui/          # shadcn/ui components
│   │   ├── Navigation/ # Navigation components
│   │   │   ├── Navigation.tsx
│   │   │   ├── NavItem.tsx
│   │   │   └── NavItemMobile.tsx
│   │   ├── SocialMedia/ # SocialMedia components
│   │   │   ├── SocialMedia.tsx
│   │   │   └── SocialItems.tsx
│   │   ├── Projects/ # Projects components
│   │   │   ├── Projects.tsx
│   │   │   └── ProjectItems.tsx
│   │   ├── Contact.tsx
│   │   ├── PersonalInfo.tsx
│   │   ├── Skills.tsx
│   │   └── ThemeToggle.tsx
│   ├── context/
│   │   └── useTheme.tsx
│   ├── lib/
│   │   └── utils.ts
│   ├── App.tsx
│   └── main.tsx
├── public/
├── index.html
└── package.json
```

## 🎨 Customization

1. **Personal Information**: Modify the `PersonalInfo.tsx` component with your information.
2. **Themes**: Adjust colors and styles in `tailwind.config.js`.
3. **Navigation**: Update links in `Navigation.tsx` according to your needs.


## 🚀 Deployment

The project is ready to be deployed on platforms like Vercel, Netlify, or GitHub Pages.

1. Build the project:


```shellscript
npm run build
```

2. The distribution files will be generated in the `dist/` folder.


## 📄 License

This project is under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.

## 📞 Contact

- LinkedIn: [Luis Rivas](https://www.linkedin.com/in/luisrivasm/)
- GitHub: [Luisfrm](https://github.com/luisfrm/)
- Email: [luisfrm1610@gmail.com](mailto:luisfrm1610@gmail.com)


## 🤝 Contributions

Contributions are welcome. Please open an issue first to discuss what you would like to change.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request


---

Developed with ❤️ by Luis Rivas