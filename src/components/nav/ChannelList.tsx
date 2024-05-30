"use client";
import { ViewType } from "@/constants";
import { useClient } from "../controller/ClientController";
import HomeChannelList from "./channels/HomeChannelList";

export default function ChannelList() {

    const { view } = useClient();

    return (
        <nav className="channel-list">
            {(() => {
                switch (view) {
                    case ViewType.HOME:
                        return <HomeChannelList />
                }
            })()}
        </nav>
    )
}