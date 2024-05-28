import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { 
  ClerkProvider, 
  SignInButton, 
  SignedIn, 
  SignedOut, 
  UserButton 
} from '@clerk/nextjs'
import "./globals.css";
import { dark, neobrutalism } from '@clerk/themes';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ChadGPT",
  description: "Your personal Chad...GPT",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider
    appearance={{
      baseTheme: dark,
      signIn: { baseTheme: neobrutalism },
    }}
    >
      <html lang="en">
        <body className={inter.className}>
        <SignedOut>
          <SignInButton />
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
