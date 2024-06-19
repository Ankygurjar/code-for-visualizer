import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class AlgorithmsPage extends Component {
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
          <h1 className="mt-5">Sorting Algorithms</h1>
          <h2>Bubble Sort</h2>
          <p>Bubble Sort is a simple sorting algorithm that repeatedly steps through the list, compares adjacent elements and swaps them if they are in the wrong order. The pass through the list is repeated until the list is sorted.</p>

          <h2>Selection Sort</h2>
          <p>Selection Sort divides the input list into two parts: a sorted sublist of items which is built up from left to right and a sublist of the remaining unsorted items. The algorithm proceeds by finding the smallest element in the unsorted sublist, exchanging it with the leftmost unsorted element, and moving the sublist boundaries one element to the right.</p>

          <h2>Insertion Sort</h2>
          <p>Insertion Sort builds the final sorted array one item at a time. It is much less efficient on large lists than more advanced algorithms such as quicksort, heapsort, or merge sort.</p>

          <h2>Quick Sort</h2>
          <p>Quick Sort is an efficient, in-place sorting algorithm that in practice is faster than merge sort and heapsort. However, it is not a stable sort, meaning that the relative order of equal sort items is not preserved.</p>

          <h2>Merge Sort</h2>
          <p>Merge Sort is an efficient, stable, comparison-based, divide and conquer sorting algorithm. Most implementations produce a stable sort, meaning that the implementation preserves the input order of equal elements in the sorted output.</p>
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

export default AlgorithmsPage;
