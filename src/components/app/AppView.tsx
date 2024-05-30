import { ReactNode } from "react";

export default function AppView({ children }: { children: ReactNode }) {
    return (
        <div className="app-view">{children}</div>
    )
}