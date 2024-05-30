import FriendIcon from "@/components/assets/FriendIcon";
import { useClient } from "@/components/controller/ClientController";

export default function HomeChannelList() {

    const { home_channel_list_tab } = useClient();

    return (
        <div className="home-channel-list">
            <button className="option" {...{ active: `${home_channel_list_tab == "friends"}` }}>
                <FriendIcon width={30} height={30} fill={"gray"} />
                <span>Friends</span>
            </button>
            <div className="divider" style={{ width: "100%" }}></div>
            <div className="direct-message-add">
                <span>Direct Messages</span>
                <button>+</button>
            </div>
        </div>
    )
}