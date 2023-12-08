import { UserNavBar } from "@/components/navbar/user-navbar"
import { Search } from "@/components/navbar/search"
import UserPrivilegesSwitcher from "@/components/navbar/user-privileges-switcher"
import { Sidebar } from "@/components/sidebar/sidebar"
export default function Home() {
  return (
    <main>
      <div className="border-b">
        <div className="flex h-16 items-center px-4">
          <UserPrivilegesSwitcher />
          <div className="ml-auto flex items-center space-x-4">
            <Search />
            <UserNavBar />
          </div>
        </div>
        <div className="border-t">
          <div className="bg-background">
            <div className="grid lg:grid-cols-5">
                <Sidebar />
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
