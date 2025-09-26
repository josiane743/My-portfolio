
# My-Portfolio
**Project Overview**
#My retail store webside is a online shopping platform that allows you to shop the classy and elegant clothing and jewellery, it is userfriedly and we are always available to assist our customer and satisfy the needs.

**Website goals and objectives** 

#Increase Online Sales: Establish robust e-commerce functionality to expand revenue streams 
#Enhance Brand Visibility: Create strong online presence to compete with larger retailers 
#Improve Customer Experience: Provide seamless shopping experience across all channels 
#Expand Market Reach: Attract customers beyond geographical limitations 
#Build Customer Loyalty: Develop engagement tools and loyalty programs 

**Key feature and funtionalities**
#Responsive Design
Mobile-first layout that adapts to all screen sizes.
Ensures usability on phones, tablets, and desktops.

#Fast Loading
Optimized images, compressed CSS/JS, and caching.
Enhances user experience and SEO.

#SEO-Friendly Structure
Clean URLs, meta tags, and structured content.
Better visibility in search engines.

**Timeline and Milestone**

 Timeline and Milestones 

 #Realistic Project Timeline 

Phase 1: Research and Planning (Weeks 1-2) 
Week 1: Competitor analysis and product catalogue planning 
Week 2: Design mockups and user journey mapping 

#Milestone: Approved design concepts and product structure 

Phase 2: HTML Development (Weeks 3-4) 
Week 3: Homepage and navigation structure development 
Week 4: Product pages and catalogue HTML framework 

#Milestone: Complete HTML structure for all store sections 

Phase 3: CSS Styling (Weeks 5-6) 
Week 5: Responsive design and product grid styling 
Week 6: Advanced interactions and mobile optimization 

#Milestone: Fully styled responsive e-commerce site 

Phase 4: JavaScript Functionality (Weeks 7-8) 
Week 7: Shopping cart and checkout functionality 
Week 8: Product filtering and search implementation 

#Milestone: Complete interactive shopping experience 

Phase 5: Testing and Launch (Weeks 9-10) 
Week 9: Payment testing and security implementation 
Week 10: Final testing, optimization, and store launch 
Milestone: Live e-commerce website with full functionality 

**Sitemap**
# <img width="987" height="598" alt="image" src="https://github.com/user-attachments/assets/3db39216-89ea-42ea-bd9a-76bc1a11d8b6" /> 

**References**
#W3Schools. (2025) HTML and CSS tutorials. Available at: https://www.w3schools.com/

#Pinterest. (2025) Fashion website UI inspiration. Available at: https://www.pinterest.com/

#Google Fonts. (2025) Poppins Typeface. Available at: https://fonts.google.com/specimen/Poppins

#Microsoft. (2023) Aptos font family overview. Available at: https://learn.microsoft.com/

#Nielsen Norman Group. (2024) Principles of UX design. Available at: https://www.nngroup.com/

#Krug, S. (2014) Don't Make Me Think: A Common Sense Approach to Web Usability

#Code usage: The HTML and CSS framework was developed using examples and structures from W3Schools (2025).

#Images and style: The product layout and homepage design were inspired by Pinterest boards featuring fashion e-commerce UI trends (Pinterest, 2025).

#Colour palette: The chosen pink (#ff4081) and gold (#FFD700) accents were sourced using Adobe Color to maintain a modern, elegant brand tone (Adobe Color, 2025; Smith, 2023).

#Typography: Poppins was selected for a clean, modern look (Google Fonts, 2025), while Aptos was tested for potential body text due to its versatility (Microsoft, 2023).

#Design principles: The overall navigation and UX layout followed best practices outlined by Nielsen Norman Group (2024) and usability principles by Krug (2014).
**https://github.com/josiane743/My-portfolio.git**
**Wireframe**
#![fram2](https://github.com/user-attachments/assets/932f70e5-7478-4dae-95e7-6020320c20c0)
#<img width="1152" height="648" alt="frame1" src="https://github.com/user-attachments/assets/9c5721f0-5d2c-436e-82c9-0e30b91df7d3" />
#![fram3](https://github.com/user-attachments/assets/d31804c1-2eba-4fca-b785-67cba6829d23)
#![fram4](https://github.com/user-attachments/assets/db6fe4f9-5f7c-47b1-b94a-7517a68df2f3)
#![fram5](https://github.com/user-attachments/assets/24fc94f8-ea53-441a-b2a1-87d51ba77ad3)

## Project Structure

```
stylehub-boutique/
├── css/
│   └── style.css              # External CSS stylesheet
├── images/                    # Product and team images
│   ├── dress.jpeg
│   ├── shoe.jpeg
│   ├── bag.jpeg
│   ├── jumpsuit.jpeg
│   ├── earring.jpeg
│   ├── jacket.jpeg
│   ├── pic1.jpeg
│   ├── pic2.jpeg
│   └── pic3.jpeg
├─├── index.html                 # Homepage
├── about.html                 # About Us page
├── products.html              # Products catalog page


## the screenshot
<img width="1571" height="816" alt="Screenshot 2025-09-26 234958" src="https://github.com/user-attachments/assets/249f6d67-da74-4b17-89ec-548ae4b525f3" />
<img width="1779" height="906" alt="Screenshot 2025-09-26 234940" src="https://github.com/user-attachments/assets/38cf0dc2-8010-4c50-93c3-e55fef9d6b88" />
<img width="1739" height="678" alt="Screenshot 2025-09-26 235014" src="https://github.com/user-attachments/assets/9ba271dc-9597-49ec-85db-fbb761464ff9" />
<img width="1761" height="826" alt="Screenshot 2025-09-26 235026" src="https://github.com/user-attachments/assets/682087f0-f84b-4e1a-90da-249a0b8c7acd" />
<img width="1709" height="812" alt="Screenshot 2025-09-26 235041" src="https://github.com/user-attachments/assets/2d69c888-5e09-4b52-8781-076e3e9c7cbc" />
<img width="1011" height="878" alt="Screenshot 2025-09-26 235052" src="https://github.com/user-attachments/assets/80308d90-e97c-4e0d-a8d5-412a05ffa30d" />

The implementation supports all modern browsers:

- Chrome 90+


## The change log
### 📝 TYPOGRAPHY IMPROVEMENTS

#### Typography Scale Implementation
- **REPLACED**: Fixed pixel values with relative rem units
- **ADDED**: Consistent typography scale (1rem, 1.25rem, 1.5rem, 2rem, 2.5rem)
- **IMPROVED**: Line-height values for better readability
- **ENHANCED**: Font-weight hierarchy for visual distinction

**Before (Part 1)**:
```css
h1 { font-size: 36px; }
h2 { font-size: 28px; }
.hero h1 { font-size: 48px; }
```

**After (Part 2)**:
```css
h1 {
    font-size: 2.5rem;
    font-weight: 700;
    line-height: 1.2;
}

h2 {
    font-size: 2rem;
    font-weight: 600;
    line-height: 1.3;
}

.hero h1 {
    font-size: 3rem;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
}
```

### 🏗️ LAYOUT STRUCTURE ENHANCEMENTS

#### CSS Grid Implementation
- **UPGRADED**: Product grid from basic grid to advanced auto-fit grid
- **ADDED**: Responsive grid with minmax() function
- **IMPROVED**: Gap spacing using rem units
- **ENHANCED**: Team member grid for about page

#### Enhanced Card Design
- **INCREASED**: Box-shadow depth and sophistication
- **ADDED**: Hover transform effects with translateY
- **IMPROVED**: Border-radius consistency
- **ENHANCED**: Transition smoothness and duration

- ### 📱 RESPONSIVE DESIGN IMPLEMENTATION

#### Mobile-First Approach
- **RESTRUCTURED**: CSS architecture to mobile-first methodology
- **ADDED**: Progressive enhancement for larger screens
- **IMPLEMENTED**: Three-tier breakpoint system
- **OPTIMIZED**: Touch-friendly interface elements

#### Breakpoint System
- **DEFINED**: Mobile (default): 0px - 767px
- **DEFINED**: Tablet: 768px - 1023px
- **DEFINED**: Desktop: 1024px and above

###  WISHLIST FEATURES
- **ADDED**: Functional "Add to Wishlist" buttons on all product cards
- **IMPLEMENTED**: Wishlist counter that updates dynamically when items are added
- **CREATED**: Wishlist modal with saved items display and management options
- **ADDED**: Visual feedback when items are added to wishlist (button state changes)
- **INCLUDED**: Remove item functionality within wishlist modal

- ###  NEW PAGES ADDED
- **ADDED**: `enquiry.html` page with a detailed product enquiry form and relevant information.
- **ADDED**: `contact.html` page with comprehensive contact information, a message form, store location details, business hours, and FAQs.

###  NAVIGATION UPDATES
- **UPDATED**: Navigation links in `index.html`, `about.html`, `products.html`, `enquiry.html`, and `contact.html` to include the new pages.
- **IMPROVED**: Active state styling for navigation links on the new pages.

###  STYLING FOR NEW PAGES
- **APPLIED**: Consistent styling from `style.css` to the new `enquiry.html` and `contact.html` pages.
- **DESIGNED**: Specific form layouts and information sections for optimal user experience on these new pages.

#### Header and Navigation Updates
- **CORRECTED**: Header background changed from (#222) to  (#a09494)
- **UPDATED**: Navigation text color adjusted to match assignment specifications
- **MAINTAINED**: Original color scheme for hover states (#ff4081)
- **IMPROVED**: Box shadow reduced for subtler appearance (0 2px 4px rgba(0,0,0,0.05))

#### Background and Container Adjustments
- **CHANGED**: Body background color from #fdfdfd to #f9f9f9 to match assignment
- **ADDED**: Container max-width of 1100px with proper centering
- **STANDARDIZED**: Consistent padding and margin values

#### Typography Refinements
- **UPDATED**: Heading colors to use #2c2c2c instead of #222
- **ADDED**: Proper text-align center for main headings
- **ENHANCED**: Border-bottom styling for h2 elements with #f0f0f0 color
- **MAINTAINED**: Font family as 'Poppins' throughout

##references 
" https://fonts.google.com/."   
"https://www.w3schools.com/."













 

 
