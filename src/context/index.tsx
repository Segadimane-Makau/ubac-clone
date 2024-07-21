'use client';

import { createContext, useContext, useState, useEffect} from 'react';

const AppContext = createContext<any>(undefined);

export function AppWrapper ({ children } : {
    children: React.ReactNode;
}) {
  const [user, setUser] = useState<any>(null);
  const [showPopUp, setShowPopUp] = useState(true);
    const [showCart, setshowCart] = useState(false);
    const [cartItems, setCartItems] = useState<any[]>([]);
    const [totalPrice, settotalPrice] = useState(0);
    const [totalQuantities, settotalQuantities] = useState(0);
    const [qty, setqty] = useState(0); 
    const [IsCartOpen, setIsCartOpen] = useState(false);
    const [flag, setflag] = useState(0);
    const [ SuccessUid, setSuccessUid] = useState<any>(null);

    return (
        <AppContext.Provider 
        value={{
            showCart,
            cartItems,
            totalPrice,
            totalQuantities,
            qty,
            IsCartOpen,
            setIsCartOpen,
            showPopUp,
            setShowPopUp,
            settotalPrice,
            SuccessUid,
            setSuccessUid
        }}>
            {children}
        </AppContext.Provider>
    )
}

export function useAppContext() {
    return useContext(AppContext);
}