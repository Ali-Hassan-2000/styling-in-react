# Styling in React Lab

A comprehensive lab exploring various styling approaches in React applications. Learn different methods to style your React components and choose the right approach for your projects.

## 🎨 Styling Methods Covered

### 1. Regular CSS Stylesheets
Traditional CSS files imported directly into React components.

**Characteristics:**
- Global scope by default
- Familiar CSS syntax
- Easy to set up
- Potential for class name conflicts

**Best For:**
- Small to medium projects
- Teams familiar with traditional CSS
- Applications with global design systems

### 2. CSS Modules
Locally scoped CSS with automatically generated unique class names.

**Characteristics:**
- Local scope by default
- No class name collisions
- CSS-like syntax
- Requires build configuration

**Best For:**
- Component-based architectures
- Large teams
- Projects needing style isolation

### 3. Inline Styles
JavaScript objects applied directly to style attribute.

**Characteristics:**
- Highest specificity
- Dynamic styling with props
- No CSS file needed
- Limited pseudo-class support

**Best For:**
- Highly dynamic styles
- Prototyping and quick styling
- Component-specific animations

### 4. Styled Components
CSS-in-JS library using tagged template literals.

**Characteristics:**
- Full CSS power in JavaScript
- Props-based dynamic styling
- Automatic vendor prefixing
- Runtime performance cost

**Best For:**
- Dynamic theming systems
- Component libraries
- Teams preferring CSS-in-JS

### 5. Sass/SCSS
CSS preprocessor with advanced features.

**Characteristics:**
- Variables, mixins, nesting
- Traditional CSS workflow
- Mature ecosystem
- Requires compilation step

**Best For:**
- Large-scale applications
- Teams needing CSS superpowers
- Projects with complex styling logic



### Comparison Summary

| Method | Learning Curve | Performance | Dynamic Styling | Bundle Size |
|--------|---------------|-------------|-----------------|-------------|
| Regular CSS | Low | Excellent | Limited | Small |
| CSS Modules | Low | Excellent | Limited | Small |
| Inline Styles | Low | Good | Excellent | Medium |
| Styled Components | Medium | Good | Excellent | Larger |
| Sass/SCSS | Medium | Excellent | Good | Small |
