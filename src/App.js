// Import necessary libraries and components
import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';

import NavDropdown from 'react-bootstrap/NavDropdown';

// Define the NavScrollExample component
function NavScrollExample() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand href="app.js" class="sahayog">सहयोगी</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="app.js">Home</Nav.Link>
            <Nav.Link href="about.jsx">Start a Campaign</Nav.Link>
            <NavDropdown title="Link" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">About US</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                How we work
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Donate
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
            <Button variant="outline-primary">Sign In</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

// Define the main App component
function App() {
  return (
    <div className="App">
      <NavScrollExample />
      {/* Other components can be added here */}
    </div>
  );
}

// Render the App component into the root DOM node
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

export default App;

