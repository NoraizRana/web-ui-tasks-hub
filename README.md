# Noraiz Rana - Portfolio Website

A modern, responsive portfolio website built with pure HTML, CSS, and JavaScript featuring a dark theme, smooth animations, and interactive elements.

## 🌟 Features

### Design & Styling
- **Modern Dark Theme** - Professional dark color scheme with purple/blue accent colors
- **Responsive Design** - Fully responsive across all devices (desktop, tablet, mobile)
- **CSS Grid & Flexbox** - Modern layout techniques for optimal positioning
- **Gradient Effects** - Beautiful gradients used throughout the design
- **Custom Scrollbar** - Styled scrollbar matching the theme

### Animations & Interactions
- **Smooth Scrolling** - Seamless navigation between sections
- **Fade-in Animations** - Elements animate into view as you scroll
- **Hover Effects** - Interactive hover states on all clickable elements
- **Project Card Tilt** - 3D tilt effect on project cards
- **Counter Animation** - Animated statistics in the About section
- **Mobile Menu Animation** - Smooth hamburger menu transformation
- **Parallax Effect** - Subtle parallax scrolling in hero section
- **Cursor Trail** - Custom cursor trail effect (desktop only)

### Interactive Elements
- **Navigation Highlighting** - Active section highlighting in navigation
- **Scroll-to-Top Button** - Appears after scrolling down
- **Contact Form** - Functional contact form with validation
- **Notification System** - Toast notifications for user feedback
- **Mobile Navigation** - Responsive hamburger menu

## 📁 Project Structure

```
portfolio/
│
├── index.html          # Main HTML structure
├── style.css           # All styling and animations
├── script.js           # JavaScript functionality
└── README.md           # Project documentation
```

## 🎨 Sections

### 1. **Hero Section**
- Introduction with name and title
- Animated text reveals
- Social media links
- Call-to-action buttons
- **Image Placeholder**: Profile photo

### 2. **About Section**
- Detailed description of skills and experience
- Animated statistics counters
- **Image Placeholder**: Coding setup/workspace photo

### 3. **Skills Section**
- Organized skill categories
- Interactive skill items with hover effects
- Technology icons
- **Image Placeholder**: Technology stack visualization

### 4. **Projects Section**
- Featured project cards with:
  - **Weather App** - Real-time weather data
  - **To-Do List** - Task management with localStorage
  - **Currency Converter** - Live exchange rates
- **Image Placeholders**: Project screenshots for each app

### 5. **Contact Section**
- Contact information
- Functional contact form
- Form validation and feedback

## 🎯 Image Placeholders

The portfolio includes clear placeholders for images in each section:

1. **Hero Section**: Profile/headshot image (300x300px)
2. **About Section**: Coding setup or workspace image (300x300px)
3. **Skills Section**: Technology stack or tools image (400x200px)
4. **Projects Section**: Screenshots for each project (full width x 200px height)

Each placeholder includes:
- Relevant icon indicating the type of image needed
- Clear text description
- Hover effects and responsive sizing
- Easy replacement - simply replace the placeholder div with an `<img>` tag

## 🚀 Getting Started

1. **Clone or Download** the project files
2. **Open** `index.html` in your web browser
3. **Customize** the content with your information
4. **Replace** image placeholders with your actual images
5. **Update** social media links and contact information

## 📱 Responsive Breakpoints

- **Desktop**: 1200px+ (Full grid layouts)
- **Tablet**: 768px - 1199px (Adjusted grids)
- **Mobile**: Below 768px (Single column layouts, mobile menu)

## 🛠️ Customization

### Colors
All colors are defined as CSS variables in `:root` for easy customization:

```css
:root {
    --primary-bg: #0a0a0a;
    --secondary-bg: #151515;
    --accent-color: #6366f1;
    /* ... more colors */
}
```

### Fonts
The portfolio uses Inter font from Google Fonts. You can change it by updating the import and CSS variable:

```css
--font-primary: 'YourFont', sans-serif;
```

### Content
Update the text content in `index.html` with your personal information, skills, and project details.

### Images
Replace image placeholders with your actual images:

```html
<!-- Replace this -->
<div class="image-placeholder">
    <i class="fas fa-user"></i>
    <p>Profile Image Here</p>
</div>

<!-- With this -->
<img src="your-image.jpg" alt="Description">
```

## 🔧 Technologies Used

- **HTML5** - Semantic markup
- **CSS3** - Advanced styling, animations, grid, flexbox
- **JavaScript (ES6+)** - Interactive functionality
- **Font Awesome** - Icons
- **Google Fonts** - Typography (Inter)

## � Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🎨 Color Palette

- **Primary Background**: #0a0a0a (Deep black)
- **Secondary Background**: #151515 (Dark gray)
- **Card Background**: #1e1e1e (Medium gray)
- **Accent Color**: #6366f1 (Purple/blue)
- **Text Primary**: #ffffff (White)
- **Text Secondary**: #b3b3b3 (Light gray)

## 📈 Performance Features

- **Optimized animations** using CSS transforms and opacity
- **Lazy loading** for scroll-triggered animations
- **Efficient event handling** with proper cleanup
- **Mobile-first** responsive design approach

## 🤝 Contributing

Feel free to fork this project and make it your own! If you find any bugs or have suggestions for improvements, please open an issue.

## 📧 Contact

For questions about this portfolio template, you can reach out through the contact form or social media links provided in the portfolio.

---

**Note**: This portfolio is designed to be easily customizable. Replace the placeholder content and images with your own information to create your unique professional portfolio.
