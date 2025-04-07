# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript and enable type-aware lint rules. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

🚀 Features
User List: Fetch and display users from an external API.
Refresh Button: Refresh the user list with a single click.
Delete User: Remove users from the Redux store (simulated deletion).
Add User: Add new users via a form (sends a POST request).
Loading State: Displays a spinner while data is being fetched.
Error Handling: Shows an error message if the API call fails.

🛠 Technologies Used
React (Frontend)
Redux Toolkit (State management)
Axios (HTTP requests)
JSONPlaceholder API (Fake REST API)
React Router (Optional: for adding detail pages)
