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

export default function Register() {
  return (
    <main className="block w-full bg-[#F7F6F3] min-h-screen">
      <Header />
      <HeaderMobile />
      <div className="relative w-full min-h-[100vh] min-h-735:min-h-[120vh] min-h-699:min-h-[140vh] min-h-615:min-h-[160vh] flex items-center justify-center min-h-459:z-[-1] z-[1]">
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
              <span className="text-[#212322] font-normal text-[24px] w-full px-[20px]">Login</span>
            </Link>
            <Link href="/account/register">
              <span className="text-[#212322] font-normal text-[24px] w-full px-[20px] underline">Sign Up</span>
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
            >
              <TextField id="firstname" label="First name" variant="standard" />
              <TextField id="lastname" label="Last name" variant="standard" />
              <TextField id="email-address" label="Email address" variant="standard" />
              <TextField id="password" label="Password" variant="standard" />
            </Box>
            <ColorButton variant="contained">Create my account</ColorButton>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
