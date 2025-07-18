import { SignUp } from "@clerk/clerk-react";

const SignUpPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="w-full max-w-md">
        <SignUp 
          fallbackRedirectUrl="/"
          signInUrl="/sign-in"
          appearance={{
            elements: {
              formButtonPrimary: "bg-primary hover:bg-primary/90",
              card: "shadow-xl border-border",
              headerTitle: "text-foreground",
              headerSubtitle: "text-muted-foreground",
            }
          }}
        />
      </div>
    </div>
  );
};

export default SignUpPage;