# 🌟 Noraiz Rana - Portfolio Website

A modern, responsive, and uniquely designed portfolio website for Front-End Developer **Noraiz Rana**. Built with vanilla HTML, CSS, and JavaScript, featuring a sleek dark theme with navy blue, purple, and charcoal color scheme.

## 🚀 Features

- **Modern Dark Theme**: Elegant dark color palette with gradient accents
- **Fully Responsive**: Optimized for desktop, tablet, and mobile devices
- **Smooth Animations**: CSS transitions, hover effects, and scroll animations
- **Interactive Elements**: Tab navigation, mobile menu, form validation
- **Professional Sections**: Hero, About, Skills, Technologies, Projects, Contact
- **Form Validation**: Real-time JavaScript form validation with error handling
- **Accessibility**: Semantic HTML structure and keyboard navigation support
- **Performance Optimized**: Lightweight vanilla JavaScript with debounced scroll handlers

## 📁 Project Structure

```
portfolio/
├── index.html           # Main HTML file
├── style.css           # CSS styles and responsive design
├── script.js           # JavaScript functionality
├── assets/
│   └── images/
│       ├── profile.jpg           # Profile picture (SVG placeholder)
│       ├── weather-app.jpg       # Weather app project image
│       ├── todo-app.jpg         # Todo app project image
│       └── currency-converter.jpg # Currency converter project image
└── README-portfolio.md  # This file
```

## 🎨 Design Features

### Color Scheme
- **Primary**: `#6366f1` (Indigo)
- **Secondary**: `#8b5cf6` (Purple) 
- **Accent**: `#06b6d4` (Cyan)
- **Background**: `#0f172a` (Dark Navy)
- **Card Background**: `#1e293b` (Slate)
- **Text Primary**: `#f1f5f9` (Light Gray)
- **Text Secondary**: `#94a3b8` (Gray)

### Typography
- **Font Family**: Inter (Google Fonts)
- **Font Weights**: 300, 400, 500, 600, 700

### Icons
- **Font Awesome 6.4.0**: For social media icons and UI elements

## 📱 Responsive Breakpoints

- **Desktop**: 1200px and above
- **Tablet**: 768px to 1199px
- **Mobile**: 479px to 767px
- **Small Mobile**: 479px and below

## 🔧 JavaScript Functionality

### Core Features
- **Navigation**: Mobile menu toggle and smooth scrolling
- **Form Validation**: Real-time validation with error messages
- **Tab System**: Interactive technology tabs
- **Scroll Effects**: Navbar opacity, active link highlighting
- **Animations**: Intersection Observer for scroll animations
- **Performance**: Debounced scroll handlers for smooth performance

### Interactive Elements
- **Hover Effects**: Cards, buttons, and navigation links
- **Loading States**: Form submission feedback
- **Back to Top**: Auto-generated scroll-to-top button
- **Parallax**: Subtle parallax effect on hero section

## 🛠️ Customization Guide

### 1. Personal Information
**Location**: `index.html`
```html
<!-- Update name in hero section -->
<h1 class="hero-title">Hello, I'm <span class="highlight">Your Name</span></h1>

<!-- Update contact information -->
<div class="contact-item">
    <i class="fas fa-envelope"></i>
    <span>your.email@example.com</span>
</div>
```

### 2. Profile Content
**Location**: `index.html`
```html
<!-- Update hero description -->
<p class="hero-description">
    Your personalized introduction here...
</p>

<!-- Update about section -->
<p class="about-description">
    Your detailed background information here...
</p>
```

### 3. Skills & Technologies
**Location**: `index.html`
```html
<!-- Add/remove skill cards -->
<div class="skill-card">
    <div class="skill-icon">
        <i class="fab fa-your-icon"></i>
    </div>
    <h3>Your Skill</h3>
</div>
```

### 4. Projects
**Location**: `index.html`
```html
<!-- Update project information -->
<div class="project-card">
    <div class="project-image">
        <img src="assets/images/your-project.jpg" alt="Your Project">
    </div>
    <div class="project-content">
        <h3 class="project-title">Your Project</h3>
        <p class="project-description">Your project description</p>
    </div>
</div>
```

### 5. Color Scheme
**Location**: `style.css`
```css
:root {
    --primary-color: #your-color;
    --secondary-color: #your-color;
    --accent-color: #your-color;
    /* Update other CSS custom properties */
}
```

### 6. Images
Replace placeholder images in `assets/images/` with your actual images:
- `profile.jpg` - Your profile picture
- `weather-app.jpg` - Weather app project screenshot
- `todo-app.jpg` - Todo app project screenshot
- `currency-converter.jpg` - Currency converter project screenshot

## 🌐 Deployment

### GitHub Pages
1. Create a new repository on GitHub
2. Upload all files to the repository
3. Go to Settings → Pages
4. Select "Deploy from a branch" and choose `main`
5. Your site will be available at `https://username.github.io/repository-name`

### Netlify
1. Create account on [Netlify](https://netlify.com)
2. Drag and drop the project folder to Netlify
3. Your site will be deployed automatically

### Vercel
1. Create account on [Vercel](https://vercel.com)
2. Import your GitHub repository
3. Deploy with default settings

## 📧 Contact Form

The contact form includes:
- **Real-time validation**
- **Error messaging**
- **Success/failure feedback**
- **Required field validation**
- **Email format validation**

Note: This is a front-end only implementation. To make the form functional, you'll need to:
1. Add a backend service (Node.js, PHP, etc.)
2. Use a form service like Formspree, Netlify Forms, or EmailJS
3. Implement server-side validation and email sending

## 🔍 Browser Support

- **Chrome**: 90+
- **Firefox**: 88+
- **Safari**: 14+
- **Edge**: 90+

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Feel free to fork this project and customize it for your own portfolio. If you find any bugs or have suggestions for improvements, please open an issue or submit a pull request.

## 🙏 Acknowledgments

- **Font Awesome** for icons
- **Google Fonts** for Inter font family
- **CSS Grid & Flexbox** for responsive layout
- **Intersection Observer API** for scroll animations

---

**Built with ❤️ by Noraiz Rana**

For questions or support, reach out at [noraizrana@example.com](mailto:noraizrana@example.com)