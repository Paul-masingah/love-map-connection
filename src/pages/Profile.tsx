import { UserProfile } from "@clerk/clerk-react";

const ProfilePage = () => {
  return (
    <div className="min-h-screen bg-background py-12">
      <div className="container mx-auto">
        <h1 className="text-3xl font-bold text-center mb-8 text-foreground">
          Profile Settings
        </h1>
        <div className="flex justify-center">
          <UserProfile 
            appearance={{
              elements: {
                card: "shadow-xl border-border",
                headerTitle: "text-foreground",
                headerSubtitle: "text-muted-foreground",
              }
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;