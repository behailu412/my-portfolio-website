# Behailu Yifru - Professional Portfolio

A modern, responsive portfolio website showcasing the skills, projects, and certifications of Behailu Yifru, a Computer Science student and Web Developer at Debre Berhan University.

## [Live Demo](https://your-vercel-app-url.vercel.app) | [GitHub Repository](https://github.com/behailu412/my-portfolio-website)

## Features

### **Core Functionality**
- **Responsive Design** - Optimized for all devices (mobile, tablet, desktop)
- **Dark Mode Support** - Automatic dark/light theme switching with localStorage persistence
- **Modern UI/UX** - Glass morphism effects, gradients, and smooth animations
- **Fast Performance** - Optimized build with Vite and lazy loading

### **Portfolio Sections**
- **Home/About** - Professional introduction with profile image and education details
- **Skills** - Interactive skill bars with proficiency levels
- **Projects** - Project showcase with GitHub links and technology tags
- **Certifications** - Udacity certificates with PDF download and verification links
- **Contact** - Functional contact form with Formspree integration

### **Interactive Elements**
- **Resume Viewer** - Direct PDF viewing in new tab without download prompts
- **Certificate Downloads** - Reliable PDF downloading with fallback mechanisms
- **Social Links** - Quick access to GitHub, LinkedIn, Telegram, and Email
- **Contact Form** - Working email submission via Formspree
- **Smooth Scrolling** - Seamless navigation between sections

## Technology Stack

### **Frontend**
- **React 18** - Modern component-based architecture
- **Vite** - Fast development server and build tool
- **Tailwind CSS** - Utility-first CSS framework with custom animations
- **React Icons** - Professional icon library

### **Backend Services**
- **Formspree** - Contact form handling and email delivery
- **Vercel** - Deployment and hosting platform
- **GitHub Pages** - Alternative deployment option

### **Development Tools**
- **PostCSS** - CSS processing and optimization
- **Autoprefixer** - Cross-browser compatibility
- **ESLint** - Code quality and consistency

## Project Structure

```
myportfolio/
|-- public/
|   |-- images/                 # Static images (profile, projects)
|   |-- certifications/         # Certificate PDFs
|   |-- index.html             # HTML template
|   |-- favicon.ico            # Site favicon
|
|-- src/
|   |-- components/
|   |   |-- About.jsx          # About section with social links
|   |   |-- Skills.jsx         # Skills showcase with progress bars
|   |   |-- Projects.jsx       # Project portfolio cards
|   |   |-- Certifications.jsx # Certificate display with downloads
|   |   |-- Contact.jsx        # Contact form and information
|   |   |-- Navbar.jsx         # Navigation with theme toggle
|   |
|   |-- context/
|   |   |-- ThemeContext.jsx   # Dark/light theme management
|   |
|   |-- data/
|   |   |-- data.js            # Portfolio data (skills, projects, etc.)
|   |
|   |-- App.jsx                # Main application component
|   |-- main.jsx               # Application entry point
|   |-- index.css              # Global styles and Tailwind imports
|
|-- package.json               # Dependencies and scripts
|-- vite.config.js            # Vite configuration
|-- tailwind.config.js        # Tailwind CSS configuration
|-- postcss.config.js         # PostCSS configuration
|-- README.md                 # Project documentation
```

## Getting Started

### **Prerequisites**
- Node.js 16+ and npm
- Git for version control

### **Installation**

1. **Clone the repository**
   ```bash
   git clone https://github.com/behailu412/my-portfolio-website.git
   cd my-portfolio-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open browser**
   Navigate to `http://localhost:3000`

### **Build for Production**

```bash
# Build the application
npm run build

# Preview production build
npm run preview
```

## Configuration

### **Environment Variables**

Create a `.env.local` file in the root directory:

```env
# Formspree Configuration (optional - already configured in data.js)
VITE_FORMSPREE_ENDPOINT=https://formspree.io/f/mnjowbjp
```

### **Customization**

#### **Personal Information**
Edit `src/data/data.js` to update:

```javascript
export const personalInfo = {
  name: "Your Name",
  title: "Your Title",
  bio: "Your professional bio...",
  profileImage: "/images/your-profile.png",
  education: {
    university: "Your University",
    degree: "Your Degree",
    year: "Your Year",
    expectedGraduation: "202X"
  }
};
```

#### **Contact Information**
Update contact details in `src/data/data.js`:

```javascript
export const contactInfo = {
  email: "your.email@example.com",
  github: "https://github.com/yourusername",
  linkedin: "https://linkedin.com/in/yourprofile",
  telegram: "https://t.me/yourusername",
  location: "Your Location",
  resume: "/certifications/your-resume.pdf"
};
```

#### **Projects and Certifications**
Add or modify projects and certifications in the respective arrays in `src/data/data.js`.

## Deployment

### **Vercel (Recommended)**

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Deploy portfolio"
   git push origin main
   ```

2. **Connect to Vercel**
   - Visit [vercel.com](https://behailuyifru.vercel.app)
   - Import your GitHub repository
   - Vercel will automatically detect and deploy your React app

3. **Environment Variables**
   - Add any required environment variables in Vercel dashboard

### **Manual Deployment**

1. **Build the application**
   ```bash
   npm run build
   ```

2. **Deploy `dist` folder**
   - Upload the `dist` folder to your hosting provider
   - Ensure server supports single-page applications

## Features Deep Dive

### **Theme System**
- **Automatic Detection** - Uses system preference on first visit
- **Manual Toggle** - Theme switcher in navigation
- **Persistent Storage** - Remembers user preference in localStorage
- **Smooth Transitions** - Animated theme switching

### **Certificate System**
- **PDF Viewing** - Opens certificates in new tab without download prompts
- **Verification Links** - Direct links to Udacity certificate verification
- **Mobile Compatible** - Works on all devices without download issues
- **Fallback Mechanism** - Handles popup blockers and browser restrictions

### **Contact Form**
- **Formspree Integration** - Reliable email delivery
- **Client-side Validation** - Real-time form validation
- **Success/Error States** - User feedback for form submission
- **Spam Protection** - Built-in spam filtering

### **Responsive Design**
- **Mobile-First** - Designed for mobile devices first
- **Breakpoints** - Optimized for sm (640px), md (768px), lg (1024px), xl (1280px)
- **Touch-Friendly** - Large tap targets and touch gestures
- **Performance** - Optimized images and lazy loading

## Browser Support

- **Chrome** 90+
- **Firefox** 88+
- **Safari** 14+
- **Edge** 90+
- **Mobile Safari** iOS 14+
- **Chrome Mobile** Android 10+

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## Performance

### **Optimization Features**
- **Code Splitting** - Automatic code splitting with React.lazy
- **Image Optimization** - Proper image formats and sizes
- **CSS Optimization** - Purged CSS with Tailwind
- **Build Optimization** - Vite's optimized build process

### **Metrics**
- **Lighthouse Score** - 95+ Performance, Accessibility, Best Practices
- **Bundle Size** - < 500KB gzipped
- **Load Time** - < 2 seconds on 3G

## Security

### **Best Practices**
- **HTTPS Only** - Enforced secure connections
- **Content Security Policy** - Configured for security
- **XSS Protection** - Built-in React protections
- **Form Security** - Formspree handles form security

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact

**Behailu Yifru**
- Email: yifrubehailu412@gmail.com
- GitHub: [@behailu412](https://github.com/behailu412)
- LinkedIn: [Behailu Yifru](https://www.linkedin.com/in/behailu-yifru-43b4a03b1)
- Telegram: [@haile_cs_1](https://t.me/haile_cs_1)

---

**Built with React, Vite, and Tailwind CSS**  
**Deployed on Vercel**  
**© 2018 E.C  Behailu Yifru. All rights reserved.**
