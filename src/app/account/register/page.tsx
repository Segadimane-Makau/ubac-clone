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
import { useState } from "react";
import { auth, createUserWithEmailAndPassword, db } from "@/app/firebaseConfig";
import { doc, setDoc } from "firebase/firestore";
import toast, {Toaster} from "react-hot-toast";
import { useRouter } from 'next/navigation';
import PageTransition from "@/components/pageTransition";

const ColorButton = styled(Button)<ButtonProps>(({ theme }) => ({
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
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorFlag, setErrorFlag] = useState(false);
    const [credentialError, setCredentialError] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const router = useRouter();

    const handleSubmit = async (event: any) => {
        event.preventDefault();
        setIsLoading(true);

        try {
            if (email !== '' && password !== '' && name !== '' && surname !== '') {
                const userCredential = await createUserWithEmailAndPassword(auth, email, password);
                const user = userCredential.user;
                setErrorFlag(false);
                await setDoc(doc(db, 'Users', user.uid), {
                    name: name,
                    surname: surname,
                });

                await auth.signOut();
                toast.success(`Signed up successfully!`);
                router.push('/account/login');

                console.log('Signing up successful.');
            } else {
                setErrorFlag(true);
                setCredentialError('Please fill in all required information');
            }
        } catch (error: any) {
            const errorCode = error.code;
            console.log("Error: "+error);
            if (errorCode === 'auth/email-already-in-use') {
                setCredentialError('Email already in use');
                setErrorFlag(true);
            } else {
                setErrorFlag(true);
                setCredentialError('Invalid credentials');
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
            <Toaster/>
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
                            onSubmit={handleSubmit}
                        >
                            <TextField
                                id="firstname"
                                label="First name"
                                variant="standard"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                error={errorFlag && !name}
                                helperText={errorFlag && !name ? 'First name is required' : ''}
                            />
                            <TextField
                                id="lastname"
                                label="Last name"
                                variant="standard"
                                value={surname}
                                onChange={(e) => setSurname(e.target.value)}
                                error={errorFlag && !surname}
                                helperText={errorFlag && !surname ? 'Last name is required' : ''}
                            />
                            <TextField
                                id="email-address"
                                label="Email address"
                                variant="standard"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                error={errorFlag && !email}
                                helperText={errorFlag && !email ? 'Email address is required' : ''}
                            />
                            <TextField
                                id="password"
                                label="Password"
                                type="password"
                                variant="standard"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                error={errorFlag && !password}
                                helperText={errorFlag && !password ? 'Password is required' : ''}
                            />
                            {errorFlag && credentialError && (
                                <div className="text-red-500 text-center mt-2">
                                    {credentialError}
                                </div>
                            )}
                            <ColorButton
                                variant="contained"
                                type="submit"
                                disabled={isLoading}
                            >
                                {isLoading ? 'Creating account...' : 'Create my account'}
                            </ColorButton>
                        </Box>
                    </div>
                </div>
            </div>
            <Footer />
        </main>
    );
}
