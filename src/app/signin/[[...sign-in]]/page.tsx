"use client"
import { useRouter } from "next/router";
import { SignIn } from "@clerk/nextjs";

export default function Page() {


  return (
    <div className="flex justify-center items-center min-h-screen">
      <SignIn signUpForceRedirectUrl="/services"  />
    </div>
  );
}
