# Noraiz Rana - Portfolio Website

A modern, responsive portfolio website built with pure HTML, CSS, and JavaScript featuring a dark theme, smooth animations, and interactive elements.

## 🌟 Features

### Design & Styling
- **Sophisticated Jewel Tone Theme** - Premium dark design with jewel-inspired colors, elegant typography, and refined layouts
- **Responsive Design** - Fully responsive across all devices (desktop, tablet, mobile)
- **CSS Grid & Flexbox** - Modern layout techniques for optimal positioning
- **Gradient Effects** - Beautiful gradients used throughout the design
- **Custom Scrollbar** - Styled scrollbar matching the theme

### Animations & Interactions
- **Elegant CSS Animations** - Sophisticated fade-in and scaling animations
- **Jewel Tone Gradients** - Rich, sophisticated color combinations throughout
- **Professional Hover States** - Refined hover effects with subtle transforms
- **Shimmer Text Effects** - Elegant animated gradient text
- **Grid Pattern Overlay** - Subtle animated background grid
- **Advanced Typography** - Premium font treatment with perfect spacing
- **Sophisticated Shadows** - Layered shadow system for depth
- **Border Animations** - Elegant expanding border effects
- **Premium Visual Hierarchy** - Clear, professional content organization
- **Refined Cursor Effects** - Subtle, professional cursor interactions

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

## 🎯 Image Placeholders & How to Add Images

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

### 📷 How to Add & Fit Images

#### **Step 1: Prepare Your Images**

**Recommended Image Sizes:**
- **Profile Photo**: 400x400px (square, minimum 300x300px)
- **About Section**: 400x400px or 500x300px (landscape)
- **Skills/Tech Stack**: 600x300px (landscape)
- **Project Screenshots**: 800x400px (landscape, 2:1 ratio)

**Image Optimization:**
- Use **WebP format** for best compression (fallback to JPG/PNG)
- Keep file sizes under **500KB** for better loading
- Use tools like [TinyPNG](https://tinypng.com/) or [ImageOptim](https://imageoptim.com/) to compress

#### **Step 2: Replace Image Placeholders**

**Original Placeholder Code:**
```html
<div class="image-placeholder">
    <i class="fas fa-user"></i>
    <p>Profile Image Here</p>
</div>
```

**Replace With:**
```html
<img src="images/your-photo.jpg" alt="Noraiz Rana - Profile Photo" class="profile-image">
```

#### **Step 3: Add CSS for Image Styling**

Add this CSS to your `style.css` file for proper image fitting:

```css
/* Profile Image Styling */
.profile-image {
    width: 300px;
    height: 300px;
    object-fit: cover;
    border-radius: 20px;
    border: 3px solid var(--border-color);
    transition: all var(--transition-normal);
    box-shadow: var(--shadow-medium);
}

.profile-image:hover {
    transform: scale(1.05);
    box-shadow: var(--shadow-heavy);
    border-color: var(--accent-color);
}

/* About Section Image */
.about-image img {
    width: 100%;
    max-width: 350px;
    height: auto;
    object-fit: cover;
    border-radius: 16px;
    box-shadow: var(--shadow-medium);
}

/* Skills Section Image */
.technologies-showcase img {
    width: 100%;
    max-width: 500px;
    height: 250px;
    object-fit: cover;
    border-radius: 16px;
    box-shadow: var(--shadow-medium);
}

/* Project Images */
.project-image img {
    width: 100%;
    height: 200px;
    object-fit: cover;
    transition: transform var(--transition-normal);
}

.project-card:hover .project-image img {
    transform: scale(1.05);
}

/* Responsive Images */
@media (max-width: 768px) {
    .profile-image {
        width: 250px;
        height: 250px;
    }
    
    .about-image img {
        max-width: 100%;
        height: auto;
    }
    
    .technologies-showcase img {
        height: 200px;
    }
}
```

#### **Step 4: Specific Replacement Instructions**

**1. Hero Section Profile Photo:**
```html
<!-- Find this in index.html around line 75 -->
<div class="hero-image">
    <!-- Replace the entire image-placeholder div with: -->
    <img src="images/profile-photo.jpg" alt="Noraiz Rana" class="profile-image">
</div>
```

**2. About Section Image:**
```html
<!-- Find this in index.html around line 130 -->
<div class="about-image">
    <!-- Replace the image-placeholder div with: -->
    <img src="images/workspace-setup.jpg" alt="Coding Workspace" class="about-image-photo">
</div>
```

**3. Skills Section Tech Stack:**
```html
<!-- Find this in index.html around line 180 -->
<div class="technologies-showcase">
    <!-- Replace the image-placeholder div with: -->
    <img src="images/tech-stack.jpg" alt="Technology Stack" class="tech-stack-image">
</div>
```

**4. Project Screenshots:**
```html
<!-- For each project card, find the project-image div and replace: -->
<div class="project-image">
    <img src="images/weather-app-screenshot.jpg" alt="Weather App Screenshot">
</div>

<div class="project-image">
    <img src="images/todo-app-screenshot.jpg" alt="To-Do List App Screenshot">
</div>

<div class="project-image">
    <img src="images/currency-converter-screenshot.jpg" alt="Currency Converter Screenshot">
</div>
```

#### **Step 5: Create Images Folder**

1. Create a folder named `images` in your project root
2. Place all your images in this folder
3. Use relative paths like `images/your-photo.jpg`

#### **Step 6: Image Best Practices**

**For Profile Photos:**
- Use professional headshots
- Good lighting and clear background
- Square aspect ratio works best
- Smile and look approachable

**For Project Screenshots:**
- Capture the full application interface
- Use high resolution (1920x1080 or higher)
- Show the app in action with real data
- Consider using mockup tools like [Mockuuups](https://mockuuups.studio/)

**For Workspace/Setup Images:**
- Clean, organized desk setup
- Good lighting
- Include your coding tools (laptop, monitor, etc.)
- Professional but personal touch

#### **Step 7: Alternative - Using Online Images**

If you don't have images ready, you can use stock photos temporarily:

```html
<!-- Example with Unsplash -->
<img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face" alt="Profile Photo">
```

**Free Stock Photo Resources:**
- [Unsplash](https://unsplash.com/) - High quality photos
- [Pexels](https://pexels.com/) - Free stock photos
- [Pixabay](https://pixabay.com/) - Free images and vectors

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

## 🎨 Sophisticated Color Palette

- **Primary Background**: Rich dark purple (#1a1625)
- **Secondary Background**: Deep charcoal (#252036)
- **Tertiary Background**: Elegant dark gray (#2f2b3a)

**Jewel Tone Accents:**
- **Emerald**: #50c878 (Primary accent)
- **Sapphire**: #0f52ba (Secondary accent)
- **Ruby**: #e0115f (Highlight accent)
- **Amethyst**: #9966cc (Tertiary accent)
- **Topaz**: #ffc87c (Warm accent)
- **Opal**: #a8c3bc (Cool accent)

**Typography:**
- **Primary Text**: Ghost white (#f8f8ff)
- **Secondary Text**: Light gray (#d1d5db)
- **Muted Text**: Medium gray (#9ca3af)

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

## ✨ Sophisticated Jewel Tone Portfolio

The portfolio has been completely redesigned with a **premium, sophisticated jewel tone theme**:

### � **What's New:**
- **Jewel-Inspired Design** - Rich, elegant colors inspired by precious gems
- **Sophisticated Dark Theme** - Premium dark backgrounds with excellent readability
- **Refined Typography** - Elegant font treatments and perfect spacing
- **Professional Layouts** - Clean, organized content presentation
- **Subtle Animations** - Elegant, refined motion that enhances UX
- **Advanced Grid System** - Sophisticated background patterns and overlays
- **Premium Visual Hierarchy** - Clear content organization and flow
- **Elegant Hover Effects** - Sophisticated interactions without being flashy

### 🎯 **Design Philosophy:**
- **Professional Excellence** - Designed for serious professionals and creatives
- **Sophisticated Elegance** - Refined aesthetics that command respect
- **Jewel Tone Psychology** - Colors that convey luxury, trust, and creativity
- **Readability First** - Excellent contrast and typography for accessibility
- **Subtle Sophistication** - Elegant without being overwhelming

**Note**: This portfolio is designed to be easily customizable. Replace the placeholder content and images with your own information to create your unique professional portfolio.
