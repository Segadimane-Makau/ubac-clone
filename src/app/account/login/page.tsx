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
import Stack from '@mui/material/Stack';
import { purple } from '@mui/material/colors';

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
  return (
    <main className="block w-[100%] bg-[#F7F6F3]">
      <Header/>
      <HeaderMobile/>
      <div className='w-[100%] h-[100vh] z-[-1]'>
        <Image
              src={backgroundImage}
              alt="Description of the image"
              fill
              loading='eager'
              priority
              unoptimized
              style={{objectFit:"cover"}}
              className='relative w-full h-full z-[0]'
          />

        <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-[500px] h-[530px] bg-[#F7F6F3] px-[90px] pt-[70px] pb-[40px] z-[1]">
                <h2 className="text-[40px] text-[#212322] font-normal text-center mb-4">My Account</h2>
                <div className="flex justify-between text-center max-w-[320px] mb-6">
                    <span className="text-[#212322] font-normal text-[24px] w-full px-[20px] underline">Login</span>
                    <span className="text-[#212322] font-normal text-[24px] w-full px-[20px]">Sign Up</span>
                </div>
                <div className="w-full">
                    <Box
                        component="form"
                        sx={{
                            '& > :not(style)': { mt: 2, mb: 2, width: "100%"},
                        }}
                        noValidate
                        autoComplete="off"
                        >
                        <TextField id="standard-basic" label="Email Address" variant="standard" />
                        <TextField id="standard-basic" label="Password" variant="standard" />
                    </Box>
                    <a className="text-end justify-end items-end text-[#212322] text-[13px] mt-4">
                        <p className="text-end">Forgot Password ?</p>
                    </a>
                    <ColorButton variant="contained">Login</ColorButton>
                </div>
            </div>
        </div>

      </div>
      <Footer/>
    </main>
  );
}
