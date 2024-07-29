"use client";

import Image from "next/image";
import Footer from "@/components/footer";
import Header from "@/components/header";
import HeaderMobile from "@/components/header-mobile";
import backgroundImage from "@/assets/loginBg.avif";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { styled } from '@mui/material/styles';
import Button, { ButtonProps } from '@mui/material/Button';
import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { auth, signInWithEmailAndPassword } from "@/app/firebaseConfig";
import toast, { Toaster } from "react-hot-toast";
import PageTransition from "@/components/pageTransition";

const ColorButton = styled(Button)<ButtonProps>(({ theme }: any) => ({
  color: theme.palette.getContrastText("#212322"),
  backgroundColor: "#212322",
  width: "100%",
  height: "60px",
  justifyContent: "center",
  alignItems: "center",
  textAlign: "center",
  marginTop: "32px",
  '&:hover': {
    backgroundColor: "#212322",
  },
}));

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [credentialError, setCredentialError] = useState('');
  const [errorFlag, setErrorFlag] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const router = useRouter();

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        router.push('/account');
      } else {
        setLoading(false);
      }
    });

    return () => unsubscribe();
  }, [router]);

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    setIsLoading(true);

    try {
      if (email !== '' && password !== '') {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;
        setErrorFlag(false);
        toast.success(`Signed in successfully!`);
        router.push('/account');
        setPassword('');
        setEmail('');
      } else {
        setErrorFlag(true);
        setCredentialError('Please fill in all required information');
      }
    } catch (error: any) {
      const errorCode = error.code;
      const errorMessage = error.message;
      if (errorCode === 'auth/invalid-credential') {
        setErrorFlag(true);
        setCredentialError(' Please check your email and password.');
      } else {
        setErrorFlag(true);
        setCredentialError(' Please check your email and password.');
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main className="block w-full bg-[#F7F6F3] min-h-screen">
      <PageTransition/>
      <Header />
      <HeaderMobile />
      <Toaster />
      <div className="relative w-full min-h-[100vh] min-h-700:min-h-[100vh] min-h-699:min-h-[120vh] min-h-615:min-h-[140vh] flex items-center justify-center min-h-459:z-[-1] z-[1]">
        <Image
          src={backgroundImage}
          alt="Background"
          fill
          loading="eager"
          priority
          unoptimized
          style={{ objectFit: "cover" }}
          className="absolute top-0 left-0 w-full h-full z-[-1]"
        />
        <div className="relative w-[500px] bg-[#F7F6F3] px-[90px] pt-[70px] pb-[40px] z-[1] shadow-lg" style={{ top: "82px" }}>
          <h2 className="text-[40px] text-[#212322] font-normal text-center mb-4">My Account</h2>
          <div className="flex justify-between text-center max-w-[320px] mb-6 mx-auto">
            <Link href="/account/login">
              <span className="text-[#212322] font-normal text-[24px] w-full px-[20px] underline">Login</span>
            </Link>
            <Link href="/account/register">
              <span className="text-[#212322] font-normal text-[24px] w-full px-[20px]">Sign Up</span>
            </Link>
          </div>
          <div className="w-full">
            <Box
              component="form"
              sx={{
                '& > :not(style)': { mt: 2, mb: 2, width: "100%" },
              }}
              noValidate
              autoComplete="off"
              onSubmit={handleSubmit}
            >
              <TextField
                id="email-address"
                label="Email Address"
                variant="standard"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  setErrorFlag(false);
                  setCredentialError('');
                }}
                error={errorFlag && !email}
                helperText={errorFlag && !email ? 'Email address is required' : ''}
              />
              <TextField
                id="password"
                label="Password"
                variant="standard"
                type="password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                  setErrorFlag(false);
                  setCredentialError('');
                }}
                error={errorFlag && !password}
                helperText={errorFlag && !password ? 'Password is required' : ''}
              />
              {errorFlag && credentialError && (
                <div className="text-red-500 text-center mt-2">
                  {credentialError}
                </div>
              )}
              <div className="text-end justify-end items-end text-[#212322] text-[13px] mt-4">
                <p className="text-end">Forgot Password?</p>
              </div>
              <ColorButton
                variant="contained"
                type="submit"
                disabled={isLoading}
              >
                {isLoading ? 'Logging in...' : 'Login'}
              </ColorButton>
            </Box>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
