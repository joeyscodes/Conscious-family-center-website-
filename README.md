# Conscious Family Centre - Website Documentation

## 🌿 Project Overview
A modern, 3D animated website for Conscious Family Centre built with HTML5, CSS3, and Vanilla JavaScript. Features floating bubble canvas animations, responsive design, and smooth interactions optimized for all devices.

---

## 📁 Project Structure

```
conscious-family-centre-website/
├── index.html                 # Home page - Hero section & core principles
├── about.html                 # About page - Mission, vision, opening hours
├── programs.html              # Programs page - Activities & testimonials
├── contact.html               # Contact page - Digital Connect Hub
├── styles.css                 # Global styles & responsive design
├── script.js                  # JavaScript - Animations & interactivity
└── assets/                    # Images & logo folder
    ├── logo.png               # CFC logo
    └── Conscious family center/  # Program activity images
        ├── IMG-20260522-WA0026.jpg    # Creative arts & excursions
        ├── IMG-20260522-WA0040.jpg    # Forest school group photo
        ├── IMG-20260522-WA0042.jpg    # Creative arts painting
        ├── IMG-20260522-WA0046.jpg    # School hub library
        ├── IMG-20260522-WA0048.jpg    # Holiday camps/STEAM
        ├── IMG-20260522-WA0050.jpg    # Stay & play sessions
        ├── IMG-20260522-WA0056.jpg    # Enrichment activities
        ├── IMG-20260522-WA0062.jpg    # Nanny training
        ├── IMG-20260522-WA0066.jpg    # Testimonial group
        └── IMG-20260522-WA0068.jpg    # Certified caregivers

```

---

## 🎨 Design Features

### Brand Colors (Following Brand Guidelines)
- **Primary Green:** `#1f6b3a` (Deep Forest Green)
- **Secondary Green:** `#4ade80` (Fresh Leaf Green)
- **Cream:** `#fdfbf7` (Off-white background)
- **Dark Text:** `#2e2a25` (Charcoal)
- **Accent Coral:** `#e3927e` (Terra-cotta)
- **Accent Sage:** `#7fa99b` (Sage Green)

### Interactive Elements
- ✨ **Floating Bubble Canvas** - Organic, animated background using HTML5 Canvas
- 🎯 **Hover Effects** - 3D depth with transforms and shadows
- 📱 **Mobile Menu** - Responsive navigation with hamburger toggle
- 🔗 **Smooth Navigation** - Active link indicators and smooth scrolling
- 🖼️ **Image Hover Zoom** - Program cards zoom on hover

### Responsive Breakpoints
- Desktop: 1200px+
- Tablet: 768px - 1199px
- Mobile: 480px - 767px
- Small Mobile: < 480px

---

## 📄 Page Structure

### 1. **index.html** - Home Page
- Hero section with tagline and AI-generated background image
- Core principles grid (Holistic Growth, Empowered Caregivers, Inspired Learning)
- Floating bubble canvas animation
- Smooth scroll to sections

### 2. **about.html** - About Page
- Who We Are section
- Mission statement
- Vision
- Educational Philosophy with bullet points
- Opening Hours: Monday-Saturday, 10:00 AM - 3:00 PM
- Location information

### 3. **programs.html** - Programs & Activities
- **Main Programs (Masonry Grid):**
  - Stay & Play Sessions
  - Homeschool Hub & Community
  - Nanny Intensive Training
  - Holiday Camps & STEAM

- **Core Activities (Weekly):**
  - Forest School & Outdoor Play
  - Creative Arts & Crafts
  - Weekly Enrichment Clubs
  - Waka Wednesday Excursions

- **Testimonials Section:**
  - Image + quote layout for certified caregivers

### 4. **contact.html** - Contact / Digital Connect Hub
- Phone: +234-803-518-7841
- Instagram: @consciousfamilycenter (https://www.instagram.com/consciousfamilycenter/)
- Facebook: Conscious Family Center (https://www.facebook.com/consciousfamilycenter/)
- Location card with address and hours
- Call-to-action buttons

---

## 🚀 Installation & Deployment

### Local Development
1. Download all files
2. Maintain folder structure with `assets/` in root directory
3. Open `index.html` in a web browser

### GitHub Setup
```bash
# Initialize repository
git init
git add .
git commit -m "Initial commit: Conscious Family Centre website"
git branch -M main
git remote add origin https://github.com/yourusername/conscious-family-centre.git
git push -u origin main
```

### Cloudflare Pages Deployment
1. Push repository to GitHub
2. Log in to Cloudflare Pages
3. Connect GitHub repository
4. Build settings:
   - **Framework preset:** None
   - **Build command:** (leave blank)
   - **Build output directory:** /
5. Deploy!

### Alternative: Direct Upload
1. Create folder on web server
2. Upload all files maintaining the folder structure
3. Ensure `assets/` folder is in the root directory
4. Set `index.html` as default home page

---

## 🎯 Key Features

### Canvas Animation
- **File:** `script.js` → `FloatingBubbleCanvas` class
- Organic floating bubbles with physics
- Responsive to window resize
- Color palette matches brand guidelines

### Mobile Navigation
- Hamburger menu toggle
- Smooth open/close animation
- Auto-closes when link clicked
- Accessible keyboard navigation (Escape to close)

### Scroll Animations
- Fade-in effects on elements
- Staggered animation delays
- IntersectionObserver for performance

### Contact Features
- Direct phone links (tel: protocol)
- Social media links open in new tabs
- Copy-to-clipboard on unsupported devices
- Location embed with hours

---

## 📱 Mobile Optimization

### Viewport Settings
- Proper meta viewport tag for responsive design
- Touch-friendly buttons and links
- Optimized font sizes for mobile (using clamp())
- Flexible grid layouts

### Performance
- Lazy loading for images (data-src attribute ready)
- CSS-only animations (no JavaScript overhead)
- Optimized image sizes in assets folder
- Minimal JavaScript dependencies

### Accessibility
- Semantic HTML5 structure
- ARIA labels on buttons
- Keyboard navigation support
- Color contrast compliance

---

## 🔧 Customization Guide

### Change Brand Colors
Edit `:root` variables in `styles.css`:
```css
:root {
  --primary-green: #1f6b3a;  /* Change primary color */
  --accent-coral: #e3927e;   /* Change accent */
  /* ... update other colors */
}
```

### Update Contact Information
In `contact.html`:
- Phone number: Change `tel:+2348035187841`
- Instagram URL: Update href in Instagram card
- Facebook URL: Update href in Facebook card
- Location: Update address text in location card

### Replace Images
1. Keep same image paths in HTML
2. Replace files in `assets/Conscious family center/` folder
3. Maintain same filename or update src paths

### Modify Content
- All text is HTML - simply edit between tags
- Headings use h1, h2, h3 tags
- Paragraphs use `<p>` tags
- Maintain consistent indentation

### Add New Pages
1. Create new `.html` file
2. Copy header/footer structure from existing page
3. Update navigation links in all pages
4. Link new page in `<nav>` sections

---

## 📊 Browser Support
- Chrome/Edge: 90+
- Firefox: 88+
- Safari: 14+
- Mobile browsers: Current versions
- Canvas API required for bubble animation

---

## ⚡ Performance Tips

### Optimize Images
```bash
# Use ImageMagick or similar
convert image.jpg -resize 800x600 -quality 85 optimized.jpg
```

### Minify CSS/JS (Optional)
- Use tools like CSSNano, Terser
- Include minified versions for production

### Enable Gzip Compression
- Configure on web server
- Reduces file transfer size by ~70%

---

## 🛠️ Troubleshooting

### Bubble Canvas Not Showing
- Check browser console for errors
- Ensure `script.js` loads correctly
- Verify Canvas API support in browser

### Images Not Loading
- Confirm `assets/` folder exists in root
- Check file paths match exactly (case-sensitive)
- Verify image files aren't corrupted

### Responsive Issues
- Clear browser cache (Ctrl+Shift+Delete)
- Test in mobile device or DevTools device mode
- Check viewport meta tag present

### Links Not Working
- Verify all `.html` files are in root directory
- Check file names match exactly in href attributes
- For external links, ensure full URLs included

---

## 📧 Support & Maintenance

### Regular Updates
- Test on new OS/browser versions
- Update social media links if changed
- Keep contact information current
- Review and update opening hours seasonally

### Analytics (Optional)
Add Google Analytics to track visitors:
```html
<!-- Add before </head> -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_ID');
</script>
```

---

## ✨ Features Walkthrough

### Homepage
- Beautiful hero with responsive image
- Three principle cards with hover effects
- Smooth scroll to sections
- Floating bubble background animation

### About Page
- Narrative layout with color-coded blocks
- Mission and Vision statements
- Educational philosophy with detailed points
- Opening hours in highlighted box
- Location information card

### Programs Page
- Masonry grid of 4 main programs
- 4 weekly core activities with images
- Testimonial section with caregiver photos
- Image hover-zoom effects
- Smooth card transitions

### Contact Page
- Digital Connect Hub with 3 main contact options
- Phone, Instagram, and Facebook cards
- SVG icons for modern look
- Location card with full details
- Call-to-action section below

---

## 📝 File Size Reference
- styles.css: ~19KB
- script.js: ~12KB
- HTML files: ~3-10KB each
- Images: Variable (optimize before upload)
- **Total (without images): ~50KB**

---

## 🎓 Learning Resources

### Technologies Used
- **HTML5:** Semantic structure
- **CSS3:** Flexbox, Grid, Animations
- **JavaScript (Vanilla):** Canvas, DOM manipulation, Events
- **Web APIs:** IntersectionObserver, Canvas 2D

### References
- [MDN Web Docs](https://developer.mozilla.org/)
- [CSS Tricks](https://css-tricks.com/)
- [Can I Use](https://caniuse.com/)

---

## 📄 License & Attribution
- Website design & code © 2024 Conscious Family Centre
- Images © Conscious Family Centre (all rights reserved)
- Built with care for a conscious community

---

## 🚀 Next Steps

After deployment, consider:
1. ✅ Set up SSL certificate (HTTPS)
2. ✅ Configure email forwarding for inquiries
3. ✅ Add Google Analytics for insights
4. ✅ Set up backup & automatic backups
5. ✅ Monitor site performance
6. ✅ Respond quickly to contact inquiries
7. ✅ Update content seasonally

---

**Happy launching! 🌿✨**

For questions or support, contact Conscious Family Centre directly via the contact page.
