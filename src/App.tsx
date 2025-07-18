
import React from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SignedIn, SignedOut, RedirectToSignIn } from "@clerk/clerk-react";
import Landing from "./pages/Landing";
import NotFound from "./pages/NotFound";
import CreateEvent from "./pages/CreateEvent";
import Questions from "./pages/Questions";
import Branding from "./pages/Branding";
import Pricing from "./pages/Pricing";
import Review from "./pages/Review";
import Checkout from "./pages/Checkout";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Profile from "./pages/Profile";
import Dashboard from "./pages/Dashboard";

// Create a client
const queryClient = new QueryClient();

const App = () => {
  return (
    <React.StrictMode>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Landing />} />
              <Route path="/sign-in" element={<SignIn />} />
              <Route path="/sign-up" element={<SignUp />} />
              <Route path="/pricing" element={<Pricing />} />
              
              {/* Protected Routes */}
              <Route 
                path="/create" 
                element={
                  <SignedIn>
                    <CreateEvent />
                  </SignedIn>
                } 
              />
              <Route 
                path="/questions" 
                element={
                  <SignedIn>
                    <Questions />
                  </SignedIn>
                } 
              />
              <Route 
                path="/branding" 
                element={
                  <SignedIn>
                    <Branding />
                  </SignedIn>
                } 
              />
              <Route 
                path="/review" 
                element={
                  <SignedIn>
                    <Review />
                  </SignedIn>
                } 
              />
              <Route 
                path="/checkout" 
                element={
                  <SignedIn>
                    <Checkout />
                  </SignedIn>
                } 
              />
              <Route 
                path="/profile" 
                element={
                  <SignedIn>
                    <Profile />
                  </SignedIn>
                } 
              />
              <Route 
                path="/dashboard" 
                element={
                  <SignedIn>
                    <Dashboard />
                  </SignedIn>
                } 
              />
              
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </QueryClientProvider>
    </React.StrictMode>
  );
};

export default App;
