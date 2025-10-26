# React Figma UI Clone - Internship Assignment

Hey there! This project is a React application built as part of an internship assignment. The main goal was to take a specific UI design provided in a Figma file and replicate it as accurately as possible, including layout, styling, and interactive elements.

It features a split-screen layout (on larger screens), with a static empty panel on the left and two interactive widgets stacked vertically on the right: a tabbed information card and an image gallery with carousel functionality.

---

## What's Inside? - Key Features & Components

This project is broken down into a few main React components:

### 1. Main Layout (`MainContainer.jsx`)

Responsive Structure: The core layout uses CSS Flexbox to create the two main sections (left and right).
Mobile Adaptation:A key requirement was responsiveness. Using a CSS `@media` query (`max-width: 768px`), the layout switches to a single-column view on smaller screens (tablets/mobiles), and the left empty panel is completely hidden (`display: none;`) as per the instructions.

### 2. The Left Side (`EmptyBox.jsx`)

Just Following Orders! As instructed, this section is intentionally left blank. It's a simple styled `div` using the specific background color, border, and border-radius from the Figma design.

### 3. Tabs Widget (`Tabsbutton.jsx`)

Interactive Tabs: This component displays "About Me," "Experiences," and "Recommended" sections.
State Management:React's `useState` hook manages which tab is currently active. Clicking a tab updates this state.
Conditional Styling: CSS classes are conditionally applied based on the `activeTab` state to change the background color and text color of the active tab, making it visually distinct.
Content Display: Only the content corresponding to the `activeTab` is rendered within the text area below the tabs.
Custom Scrollbar: A styled `div` element mimics a custom scrollbar on the right side of the text content area, purely for visual replication.

### 4. Gallery Widget (`Gallery.jsx`)

Carousel Logic: This was the most complex part!
     It displays 3 images at a time from a list stored in React state (`useState`).
     Another `useState` hook (`currentIndex`) keeps track of the *starting index* of the three visible images.
     Clicking the right arrow increments `currentIndex`, causing the `images.slice(currentIndex, currentIndex + 3)` logic to display the next set of three images, creating the sliding effect.
     Clicking the left arrow decrements `currentIndex`.
     Arrow Disabling: Buttons are automatically disabled (`disabled` HTML attribute + CSS `:disabled` styles) when at the beginning (`currentIndex === 0` for left arrow) or end (`currentIndex >= images.length - 3` for right arrow) of the image list to prevent scrolling past the available images.
Image Upload:
     The "+ ADD IMAGE" button triggers a hidden `<input type="file">` element using a `useRef` hook.
     When files are selected, the `onChange` handler reads them using `URL.createObjectURL()` and adds the new image URLs to the `images` state array, making them part of the carousel.
Hover Effects (Pure CSS):
    * Images start as grayscale (`filter: grayscale(100%);`).
    * On hover (`:hover`), the filter changes (`filter: grayscale(0%);`), the image scales up (`transform: scale(1.05);`), and a subtle `box-shadow` is added for a glow effect.
    * A CSS pseudo-element (`::before`) provides the initial dark overlay (`background: rgba(0,0,0,0.2)`), which fades out (`opacity: 0;`) on hover.

### 5. Styling & Details

Pixel-Perfect Approach: Plain CSS (or CSS Modules, depending on your setup) was used to match the Figma design as closely as possible, including specific `width`, `height`, `padding`, `border-radius`, `font-family`, `font-size`, `color`, `linear-gradient`, and multiple `box-shadow` properties.
Icons: `react-icons` (specifically Font Awesome - `FaArrowLeft`, `FaArrowRight`, `FaPlus`) were used for the icons in the Gallery controls. The question mark and grid icons were recreated using styled `div` elements.
Dividers: Simple styled `div` elements with specific heights, backgrounds, and shadows act as visual separators between the widgets.

---

## Tech Stack 🛠️

React: JavaScript library for building user interfaces.
Vite: Fast frontend build tool for development and production bundling.
CSS: Used directly for styling components based on Figma specs.
React Icons: Library for including popular icons.
Git & GitHub: For version control and code hosting.

---

## How to Run It Locally 🚀

1.  Clone:`git clone https://github.com/YOUR_USERNAME/react-figmainternship-clone.git`
2.  Navigate:`cd react-figmainternship-clone`
3.  Install:`npm install`
4.  Run: `npm run dev`
5.  View: Open your browser to `http://localhost:5173` (or the address shown in your terminal).

---

Hope this gives a good overview of the project! It was a great exercise in translating design specs into functional React code.
