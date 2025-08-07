"use client";
import { Button } from "@/components/ui/button";
import { authClient } from "@/lib/auth-client";
import React from "react";

const SignUpPage = () => {
  
  const handleSignUp = () => {
    authClient.signIn.social({
      provider: "google",
    });
  };

  return (
    <div>
      <Button onClick={handleSignUp}>Sign up with Google</Button>
    </div>
  );
};

export default SignUpPage;
