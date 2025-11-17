import { SignedIn, SignedOut, SignOutButton,SignUpButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <>
      <h1>Homa Page</h1>
      <SignedOut>
        <SignUpButton mode="modal">Sign Up</SignUpButton>
      </SignedOut>
      <SignedIn>
        <SignOutButton>Log Out</SignOutButton>
      </SignedIn>
    </>
  );
}
