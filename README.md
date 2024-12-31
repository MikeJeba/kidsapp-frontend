# Simple Addition Operation - Frontend

This repository contains the frontend for a simple addition operation application. The frontend is built using HTML, CSS, and JavaScript, and communicates with a backend service (built with Java Spring Boot) for addition operations.

---

## Features
- **User-Friendly Interface**: Designed with HTML and CSS for a simple and intuitive user experience.
- **Interactive Functionality**: Uses JavaScript to send user inputs to the backend and display results.
- **Python HTTP Server**: Serves the frontend on `localhost:8000`.

---

## Prerequisites
1. **Python Installed**: Ensure Python 3.x is installed on your system.
2. **Backend Service Running**: The backend should be running on `localhost:8080`.
   > **Note**: The backend code is maintained in a separate repository. Clone and set it up from the relevant repository before running the frontend.

---

## How to Run the Frontend
1. **Clone this repository:**

Navigate to the project directory:

Start a Python HTTP server: python -m http.server 8000

Open the application in your browser: Navigate to http://localhost:8000 in your web browser.

Ensure the backend service is running on http://localhost:8080.

## How It Works
Enter the sum of two numbers in the input fields on the webpage.
Click the "Submit" button.
The application sends a request to the backend API at http://localhost:8080.
The backend processes returns the result.
The result is displayed dynamically on the webpage.

Backend Repository
The backend for this application is implemented in Java Spring Boot and runs on localhost:8080. Clone and set up the backend from the following link:
https://github.com/MikeJeba/kidsapp-backend.git




