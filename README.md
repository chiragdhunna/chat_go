# Chat GO

A fully functional chat application built with modern web technologies, enabling real-time messaging, group chats, and notifications. This application includes features such as authentication, user management, and an admin dashboard.

---

## Features

### Core Functionality
- **User Authentication**: Login and registration with secure authentication.
- **Real-time Messaging**: Chat functionality powered by Socket.IO.
- **Friend Requests**: Send, accept, or reject friend requests.
- **Group Chats**: Create and manage chat groups.
- **Notifications**: Get real-time notifications for friend requests and messages.
- **Profile Management**: Update and view user profile data.
- **Search Functionality**: Search for users and groups easily.

### Admin Dashboard
- Manage user data, chat groups, and monitor chat activities.

### Additional Features
- **Logout**: Secure logout functionality.

---

## Tech Stack

### Frontend
- **React**: For building the user interface.
- **Vite**: For fast development and optimized builds.
- **Redux**: For state management.
- **Redux Thunks**: For handling asynchronous actions.
- **Socket.IO**: For real-time communication.

---

## Installation and Setup

### Prerequisites
Ensure you have the following installed:
- [Node.js](https://nodejs.org/) (v16 or later)

### Steps to Run

1. **Clone the Repository**

   ```bash
   git clone git@github.com:chiragdhunna/chat_go.git
   cd chat_go
   ```

2. **Install Dependencies**

   ```bash
   npm install
   ```

3. **Set Up Environment Variables**

   Create a `.env` file in the root directory and add the following variables:

   ```env
   VITE_SERVER=http://localhost:3000
   ```

4. **Start the Development Server**

   ```bash
   npm run dev
   ```

5. **Access the Application**
   Open your browser and navigate to `http://localhost:5173/`.

6. **Hosted Application**
   Access the deployed application at: [chatgo.chiragdhunna.com](https://chatgo.chiragdhunna.com)

---

## Folder Structure

```
chat_go/
├── dist/            # Production build
├── index.html       # Main HTML file
├── node_modules/    # Dependencies
├── package.json     # Dependencies and scripts
├── package-lock.json# Dependency lock file
├── public/          # Static assets
├── README.md        # Project documentation
├── src/             # Source code
├── vercel.json      # Vercel deployment configuration
└── vite.config.js   # Vite configuration
```

---

## Screenshots

### 1. Login Page
![Login Page](https://github.com/user-attachments/assets/8b408b45-3451-44f4-b417-4dadfc7e51bf)


### 2. Chat Interface
![Chat Interface](https://github.com/user-attachments/assets/48a7bd29-9c1c-45c9-be3a-95c2e40b5d4f)


### 3. Admin Dashboard
![Admin Dashboard](https://github.com/user-attachments/assets/b0549472-4f7d-4fae-856f-e0fdcf45e8ad)


---

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create a feature branch: `git checkout -b feature-name`
3. Commit your changes: `git commit -m 'Add some feature'`
4. Push to the branch: `git push origin feature-name`
5. Open a pull request.

---

## License

This project is licensed under the MIT License. See the [LICENSE](./LICENSE) file for details.

---
