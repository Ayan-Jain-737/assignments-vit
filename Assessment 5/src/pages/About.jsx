import { Link } from 'react-router-dom'

function About() {
  return (
    <div className="about-page">
      <div className="about-hero">
        <h1>About ProductHub</h1>
        <p className="about-subtitle">
          A modern product management application built with React
        </p>
      </div>

      <div className="about-content">
        <div className="about-card">
          <h3>Part A: React Components & JSX</h3>
          <p>
            Developed with a clean folder structure and robust components. Uses 
            reusable JSX components like Navbar, ProductCard, and ProductForm.
          </p>
        </div>

        <div className="about-card">
          <h3>Part B: State Management</h3>
          <p>
            Uses the useState hook extensively to manage the application's 
            dynamic data, effectively handling all Create, Read, Update, and 
            Delete (CRUD) product operations.
          </p>
        </div>

        <div className="about-card">
          <h3>Part C: Props & Data Flow</h3>
          <p>
            Strictly follows unidirectional data flow. The main state lives in 
            the App component and is securely passed down to child components 
            using React Props.
          </p>
        </div>

        <div className="about-card">
          <h3>Part D, E & F: Routing, Functionality & UI</h3>
          <p>
            Fully functional Mini App with React Router implementation for 
            navigating between Home, About, and Details pages. Features a clean, 
            readable, and logically structured UI with custom CSS.
          </p>
        </div>
      </div>

      <div className="about-tech">

        <div style={{ marginTop: '15px', fontSize: '1.1rem', color: 'var(--text-primary)' }}>
          <p style={{ marginBottom: '8px' }}><strong>Made by:</strong> Ayan Jain</p>
          <p><strong>Registration Number:</strong> 24BCE0789</p>
        </div>
      </div>

      <div className="about-cta">
        <Link to="/" className="btn btn-primary">
          ← Back to Products
        </Link>
      </div>
    </div>
  )
}

export default About
