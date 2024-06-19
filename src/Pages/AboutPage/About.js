import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class AboutPage extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a className="navbar-brand" href="#">Sorting Visualizer</a>
          <div className="collapse navbar-collapse">
          <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">About</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/algorithm">Algorithms</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/visualizer">Visualizer</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact">Contact</Link>
              </li>
            </ul>
          </div>
        </nav>

        <div className="container">
          <h1 className="mt-5">About Sorting Visualizer</h1>
          <p>Welcome to the Sorting Visualizer project! This project is designed to help users understand various sorting algorithms through visual representation. Sorting algorithms are fundamental in computer science and are often used to introduce key concepts in programming and algorithm design.</p>

          <h2>Purpose</h2>
          <p>The main purpose of this Sorting Visualizer is to provide an interactive and educational tool for learning and teaching sorting algorithms. By visualizing the steps of each algorithm, users can gain a deeper understanding of how they work and their efficiency.</p>

          <h2>Features</h2>
          <ul>
            <li>Visualize various sorting algorithms, including Bubble Sort, Selection Sort, Insertion Sort, Quick Sort, and Merge Sort.</li>
            <li>Generate new arrays to visualize sorting with different datasets.</li>
            <li>Adjust the speed of visualization for better understanding.</li>
            <li>Compare the performance of different sorting algorithms.</li>
          </ul>

          <h2>How It Works</h2>
          <p>The Sorting Visualizer uses HTML, CSS, and JavaScript to create an interactive experience. Users can select a sorting algorithm, generate a new array, and watch the sorting process step by step. The visualization helps to illustrate the inner workings of each algorithm, making it easier to understand their behavior and performance.</p>

          <h2>Team</h2>
          <p>This project was developed by:</p>
          <ul>
            <li><a href="https://www.linkedin.com/in/karandeep-kamboj-32308a231/">Karandeep Kamboj</a></li>
          </ul>
        </div>

        <footer className="bg-light text-center text-lg-start">
          <div className="text-center p-3">
            © 2024 Sorting Visualizer | 
            <a href="https://www.linkedin.com/in/karandeep-kamboj-32308a231/">Karandeep Kamboj</a>
          </div>
        </footer>
      </div>
    );
  }
}

export default AboutPage;
