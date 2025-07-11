import ThemeToggle from "./components/ThemeToggle";
import { SearchBar } from "./components/SearchBar";
import { useState } from "react";
import { TabNavigation } from "./components/TabNavigation";
import { QuickSavePanel } from "./components/QuickSavePanel";
import { BrowsePanel } from "./components/BrowsePanel";
import { RequireAuth } from "./components/RequireAuth";
import { authClient } from "./auth/auth-client";

function App() {
  const [activeTab, setActiveTab] = useState<"quick-save" | "browse">(
    "quick-save"
  );
  const { data: session } = authClient.useSession();

  return (
    <div className="w-80 h-[450px] overflow-y-auto overflow-x-hidden flex flex-col">
      <RequireAuth>
        <div className="p-4 bg-white dark:bg-[#2A2A2A] border-b border-gray-200 dark:border-gray-700">
          <div className="flex items-center justify-between">
            <h1 className="text-xl font-bold">Savvio</h1>
            <div className="flex items-center space-x-2">
              <ThemeToggle />
              {session && (
                <a href={`${import.meta.env.VITE_WEB_APP_URL}/dashboard/profile`} target="_blank" rel="noopener noreferrer">
                  <img
                    src={session.user.image || "/default-avatar.png"}
                    alt="User Avatar"
                    className="size-7 rounded-full hover:opacity-80 transition-opacity cursor-pointer"
                  />
                </a>
              )}
            </div>
          </div>
          <SearchBar />
        </div>
        <TabNavigation activeTab={activeTab} setActiveTab={setActiveTab} />
        <div className="flex-1 overflow-y-auto">
          {activeTab === "quick-save" && <QuickSavePanel />}
          {activeTab === "browse" && <BrowsePanel />}
        </div>
      </RequireAuth>
    </div>
  );
}

export default App;
