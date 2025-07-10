# Personal Portfolio Website

A clean, modern, and fully responsive personal portfolio website built with HTML, CSS, and JavaScript. This portfolio showcases your skills, projects, and provides a contact form for potential clients or employers.

## 🌟 Features

### **Responsive Design**
- Mobile-first approach
- Optimized for all screen sizes (desktop, tablet, mobile)
- Smooth animations and transitions

### **Interactive Elements**
- Mobile navigation menu with hamburger toggle
- Smooth scrolling between sections
- Active navigation highlighting
- Form validation with real-time feedback
- Hover effects and animations
- Typing effect on hero section

### **Sections Included**
- **Home**: Hero section with name, title, and call-to-action buttons
- **About Me**: Personal introduction, skills showcase, and statistics
- **Projects**: Portfolio of work with project details and links
- **Contact**: Contact form with validation and contact information

### **Technical Features**
- Clean, semantic HTML5 structure
- Modern CSS with Flexbox and Grid
- Vanilla JavaScript for all interactions
- Font Awesome icons integration
- CSS animations and transitions
- Cross-browser compatibility

## 📁 File Structure

```
portfolio-website/
├── index.html          # Main HTML file
├── style.css           # CSS styles and responsive design
├── script.js           # JavaScript functionality
├── assets/             # Directory for images and media
│   └── images/         # Image files (placeholder for your photos)
└── README.md           # Documentation (this file)
```

## 🚀 Quick Start

1. **Download/Clone** the files to your local machine
2. **Open** `index.html` in your web browser
3. **Customize** the content with your personal information
4. **Add** your own images to the `assets/images/` folder
5. **Deploy** to your preferred hosting platform

## ✏️ Customization Guide

### **Personal Information**
Update the following in `index.html`:

```html
<!-- Hero Section -->
<h1 class="hero-name">Your Name</h1>
<p class="hero-title">Your Job Title</p>
<p class="hero-description">Your personal description...</p>

<!-- Contact Information -->
<span>your.email@email.com</span>
<span>+1 (555) 123-4567</span>
<span>Your City, State</span>
```

### **About Section**
- Replace the bio text with your own story
- Update the skills in the skills grid
- Modify the statistics numbers

### **Projects Section**
Replace each project with your own:
```html
<div class="project-card">
    <div class="project-image">
        <!-- Add your project image or icon -->
    </div>
    <div class="project-content">
        <h3>Your Project Name</h3>
        <p>Your project description...</p>
        <div class="project-tech">
            <span>Technology 1</span>
            <span>Technology 2</span>
        </div>
        <div class="project-links">
            <a href="your-demo-link">Live Demo</a>
            <a href="your-github-link">GitHub</a>
        </div>
    </div>
</div>
```

### **Colors and Styling**
The main color scheme is defined in `style.css`. Key colors:
```css
/* Primary gradient */
background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);

/* Text colors */
color: #2c3e50; /* Dark text */
color: #6c757d; /* Light text */

/* Background colors */
background: #f8f9fa; /* Light background */
```

### **Adding Your Images**
1. Add your profile photo to `assets/images/profile.jpg`
2. Add project screenshots to `assets/images/project1.jpg`, etc.
3. Update the HTML to reference your images:
```html
<!-- Replace icon with your image -->
<div class="profile-placeholder">
    <img src="assets/images/profile.jpg" alt="Your Name">
</div>
```

## 🎨 Customization Options

### **Fonts**
The website uses Arial by default. To change fonts:
```css
body {
    font-family: 'Your Font', sans-serif;
}
```

### **Layout Modifications**
- Modify grid layouts in CSS for different arrangements
- Adjust section padding and margins
- Change animation timings and effects

### **Adding New Sections**
1. Add HTML structure for new section
2. Include navigation link
3. Add corresponding CSS styles
4. Update JavaScript for smooth scrolling

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🔧 JavaScript Features

### **Mobile Navigation**
- Hamburger menu for mobile devices
- Smooth toggle animations
- Auto-close on link click or outside click

### **Form Validation**
- Real-time validation for name, email, and message
- Custom error messages
- Success notification simulation

### **Scroll Effects**
- Active navigation highlighting
- Intersection Observer for scroll animations
- Smooth scrolling between sections

### **Interactive Elements**
- Typing effect on hero title
- Hover effects on skills and social links
- Navbar background change on scroll

## 🌐 Deployment

### **GitHub Pages**
1. Create a new repository on GitHub
2. Upload all files
3. Go to Settings > Pages
4. Select source branch (main/master)
5. Your site will be available at `username.github.io/repository-name`

### **Netlify**
1. Drag and drop the project folder to Netlify
2. Or connect your GitHub repository
3. Automatic deployment on every push

### **Vercel**
1. Install Vercel CLI: `npm i -g vercel`
2. Run `vercel` in project directory
3. Follow the setup prompts

### **Traditional Hosting**
Upload all files to your web hosting provider's public folder (usually `public_html` or `www`).

## � SEO Optimization

Add these meta tags to the `<head>` section:
```html
<meta name="description" content="Your name - Full Stack Developer portfolio showcasing web development projects and skills">
<meta name="keywords" content="web developer, full stack, javascript, react, portfolio">
<meta name="author" content="Your Name">
<meta property="og:title" content="Your Name - Portfolio">
<meta property="og:description" content="Full Stack Developer Portfolio">
<meta property="og:image" content="assets/images/og-image.jpg">
```

## 🛠️ Troubleshooting

### **Common Issues**
- **Images not loading**: Check file paths and ensure images are in the correct directory
- **JavaScript not working**: Check browser console for errors
- **Mobile menu not working**: Ensure JavaScript is loaded properly
- **Form not submitting**: The form is currently set up for demonstration; integrate with a backend service for actual functionality

### **Performance Optimization**
- Optimize images (use WebP format when possible)
- Minify CSS and JavaScript for production
- Use a CDN for Font Awesome icons
- Enable gzip compression on your server

## 📞 Support

If you need help customizing this portfolio or have questions:
- Check the code comments for guidance
- Validate your HTML and CSS
- Use browser developer tools for debugging
- Ensure all file paths are correct

## 📄 License

This project is open source and available under the [MIT License](https://opensource.org/licenses/MIT).

## 🤝 Contributing

Feel free to submit issues, feature requests, or pull requests to improve this portfolio template.

---

**Happy coding! 🚀**

Remember to update all placeholder content with your actual information before deploying your portfolio.
