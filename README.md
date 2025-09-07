# Vite React Shadcn TypeScript Starter

This is a starter template for building modern web applications using Vite, React, TypeScript, and Shadcn/UI. It provides a solid foundation with a pre-configured project structure, essential tools, and a set of example components and pages.

## Live Demo

[Link to your live demo]()

## Features

- **Fast Development Experience:** Built with Vite for near-instant server start and hot module replacement (HMR).
- **Type Safety:** Written in TypeScript to catch errors early and improve code quality.
- **Component-Based Architecture:** Organized with React components for modular and reusable UI.
- **Beautifully Designed UI:** Includes a set of accessible and customizable components from Shadcn/UI.
- **Routing:** Pre-configured with React Router for easy navigation between pages.
- **State Management:** Uses TanStack Query for efficient data fetching and caching.
- **Authentication:** Example pages for sign-in and sign-up using Clerk.
- **AI-Powered Features:** Includes components that leverage AI for enhanced user experiences.
- **Responsive Design:** Styled with Tailwind CSS for a mobile-first and responsive layout.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

- [Node.js](https://nodejs.org/en/) (v18 or later)
- [npm](https://www.npmjs.com/) or [Yarn](https://yarnpkg.com/)

### Installation

1.  **Clone the repository:**

    ```bash
    git clone https://github.com/your-username/your-repo-name.git
    ```

2.  **Navigate to the project directory:**

    ```bash
    cd your-repo-name
    ```

3.  **Install the dependencies:**

    ```bash
    npm install
    ```

4.  **Start the development server:**

    ```bash
    npm run dev
    ```

    Open [http://localhost:5173](http://localhost:5173) to view it in the browser.

## Available Scripts

In the project directory, you can run:

-   `npm run dev`: Runs the app in development mode.
-   `npm run build`: Builds the app for production to the `dist` folder.
-   `npm run lint`: Lints the code using ESLint.
-   `npm run preview`: Serves the production build locally for preview.

## Folder Structure

```
.
├── public/
├── src/
│   ├── components/
│   │   ├── ui/
│   │   ├── checkout/
│   │   ├── AIEnhancedHero.tsx
│   │   └── ...
│   ├── hooks/
│   ├── lib/
│   ├── pages/
│   │   ├── Landing.tsx
│   │   └── ...
│   ├── services/
│   ├── App.tsx
│   ├── main.tsx
│   └── ...
├── .gitignore
├── package.json
└── ...
```

-   **`public/`**: Contains static assets like images and fonts.
-   **`src/`**: The main source code of the application.
-   **`src/components/`**: Reusable React components.
    -   `src/components/ui/`: Components from Shadcn/UI.
    -   `src/components/checkout/`: Components related to the checkout process.
-   **`src/hooks/`**: Custom React hooks.
-   **`src/lib/`**: Utility functions and libraries.
-   **`src/pages/`**: Top-level page components.
-   **`src/services/`**: Services for interacting with APIs.
-   **`src/App.tsx`**: The root component of the application, where routing is defined.
-   **`src/main.tsx`**: The entry point of the application.

## Technologies Used

-   [Vite](https://vitejs.dev/) - Next-generation front-end tooling.
-   [React](https://reactjs.org/) - A JavaScript library for building user interfaces.
-   [TypeScript](https://www.typescriptlang.org/) - A typed superset of JavaScript.
-   [Shadcn/UI](https://ui.shadcn.com/) - Re-usable components built using Radix UI and Tailwind CSS.
-   [Tailwind CSS](https://tailwindcss.com/) - A utility-first CSS framework.
-   [React Router](https://reactrouter.com/) - Declarative routing for React.
-   [TanStack Query](https://tanstack.com/query/v5) - Powerful asynchronous state management.
-   [Clerk](https://clerk.com/) - User management and authentication.
-   [Framer Motion](https://www.framer.com/motion/) - A production-ready motion library for React.
-   [Zod](https://zod.dev/) - TypeScript-first schema validation.

## Contributing

Contributions are welcome! Please feel free to submit a pull request.

1.  Fork the Project
2.  Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3.  Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4.  Push to the Branch (`git push origin feature/AmazingFeature`)
5.  Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
