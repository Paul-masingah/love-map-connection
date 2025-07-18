import { SignIn } from "@clerk/clerk-react";

const SignInPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="w-full max-w-md">
        <SignIn 
          fallbackRedirectUrl="/"
          signUpUrl="/sign-up"
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

export default SignInPage;