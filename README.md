# Hotel Reservation Web App 🏨

A comprehensive hotel reservation web application built using the MERN stack (MongoDB, Express.js, React.js, Node.js). This application allows users to search for hotels, make reservations, and manage bookings, while providing an admin panel for hotel management.

## Features ✨

* **User Functionality**:
  * 💡Search and filter hotels by location, price, and amenities.
  * 💡View detailed hotel information, including descriptions, images, and user ratings.
  * 💡Create and manage user accounts for personalized experiences.

  * **Admin Functionality**:
  * 💡Admin panel for managing hotel listings and user accounts.
  * 💡Ability to add, edit, and delete hotel details.

* **Responsive Design**: 💡User-friendly interface.

## Technologies Used 🛠️

* **Frontend**: React.js, Redux (for state management), Bootstrap/CSS🎨
* **Backend**: Node.js, Express.js🌐
* **Database**: MongoDB (with Mongoose for object modeling)💾
* **Authentication**: JSON Web Tokens (JWT) for secure user authentication 🔐


## Installation and Setup 🛠️

### Prerequisites

- Node.js and npm
- MongoDB (or a cloud-based MongoDB service)

### Steps

1. **Clone the repository**:
   ```bash
   git clone https://github.com/MandiniJayaratne/HotelReservationWebApp.git
  

2. **Backend Setup**:
   - Navigate to the backend directory:
     ```bash
     cd api
     ```

   - Install dependencies:
     ```bash
     npm install
     ```

   - **Configure the MongoDB connection**:  
     
     ```plaintext
     MONGODB_URI=your_mongodb_connection_string
   
     ```

   - Start the backend server:
     ```bash
     npm start
     ```

3. **Frontend Setup**:
   - Open a new terminal and navigate to the frontend directory:
     ```bash
     cd ../reservation-app
     ```

   - Install dependencies:
     ```bash
     npm install
     ```

   - Start the React app:
     ```bash
     npm start
     ```

4. **Admin Setup**:

  - Open a new terminal and navigate to the frontend directory:
     ```bash
     cd ../admin
     ```

   - Install dependencies:
     ```bash
     npm install
     ```

   - Start the React app:
     ```bash
     npm start
     ```
