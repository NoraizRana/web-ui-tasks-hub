# Assets Directory

This directory contains all the media files and assets for the portfolio website.

## 📁 Directory Structure

```
assets/
└── images/
    ├── profile.jpg          # Your profile photo (recommended: 400x400px)
    ├── project1.jpg         # Project 1 screenshot
    ├── project2.jpg         # Project 2 screenshot
    ├── project3.jpg         # Project 3 screenshot
    └── og-image.jpg         # Open Graph image for social sharing (1200x630px)
```

## 📷 Image Guidelines

### **Profile Photo**
- **Size**: 400x400px (square)
- **Format**: JPG or PNG
- **Background**: Clean, professional background
- **Quality**: High resolution, well-lit

### **Project Screenshots**
- **Size**: 800x600px (landscape) or 600x800px (portrait)
- **Format**: JPG, PNG, or WebP
- **Content**: Clear view of your project interface
- **Quality**: High resolution showing project details

### **Open Graph Image**
- **Size**: 1200x630px
- **Format**: JPG or PNG
- **Content**: Your name, title, and portfolio branding
- **Purpose**: Used when sharing your portfolio on social media

## 🔄 How to Add Your Images

1. **Replace placeholders**: Add your actual images to this directory
2. **Update HTML**: Modify the HTML to reference your images:
   ```html
   <!-- In the hero section -->
   <div class="profile-placeholder">
       <img src="assets/images/profile.jpg" alt="Your Name">
   </div>
   
   <!-- In project cards -->
   <div class="project-image">
       <img src="assets/images/project1.jpg" alt="Project Name">
   </div>
   ```
3. **Optimize images**: Compress images for web to improve loading speed

## 💡 Tips

- Use consistent naming conventions
- Keep file sizes under 500KB for faster loading
- Consider using WebP format for better compression
- Always include descriptive alt text for accessibility