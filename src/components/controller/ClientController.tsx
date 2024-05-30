"use client"

import { ViewType } from "@/constants";
import { usePathname } from "next/navigation";
import { createContext, useContext, useEffect, useState } from "react";

const Context = createContext<{ view: number, home_channel_list_tab: string }>({
    view: ViewType.HOME,
    home_channel_list_tab: "friends",
});

export default function ClientController({ children }: { children: JSX.Element }) {

    const pathname = usePathname();

    const [view, setView] = useState(ViewType.HOME);
    const [homeChannelListTab, setHomeChannelListTab] = useState("friends");

    useEffect(() => {
        switch (pathname) {
            case '/':
                setView(ViewType.HOME);
                setHomeChannelListTab("friends");
                break;
        }
    }, [pathname]);

    useEffect(() => {
        const cancelContext = (event: Event) => {
            event.preventDefault();
        }

        document.addEventListener("contextmenu", cancelContext);

        return () => document.removeEventListener("contextmenu", cancelContext);
    }, []);

    return <Context.Provider value={{ view, home_channel_list_tab: homeChannelListTab }}> {children}</Context.Provider >;
}

export const useClient = () => useContext(Context);