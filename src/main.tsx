
import React from 'react';
import { createRoot } from 'react-dom/client';
import { ClerkProvider } from '@clerk/clerk-react';
import App from './App.tsx';
import './index.css';

// TODO: Replace with your actual Clerk publishable key
const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY || "pk_test_placeholder";

// Temporarily allow the app to run without a real key
// You'll need to get your real key from https://go.clerk.com/lovable
if (!PUBLISHABLE_KEY || PUBLISHABLE_KEY === "pk_test_placeholder") {
  console.warn("⚠️ Using placeholder Clerk key. Get your real key from https://go.clerk.com/lovable");
}

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
      <App />
    </ClerkProvider>
  </React.StrictMode>
);
