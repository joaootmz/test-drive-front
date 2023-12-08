import { cn } from "@/lib/utils"
import { Button } from "../ui/button"
import HomeIcon from '@mui/icons-material/Home';
import DevicesIcon from '@mui/icons-material/Devices';
import DescriptionIcon from '@mui/icons-material/Description';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import DeleteIcon from '@mui/icons-material/Delete';
interface SidebarProps extends React.HTMLAttributes<HTMLDivElement> {
}

export function Sidebar({ className }: SidebarProps) {
  return (
    <div className={cn("pb-12", className)}>
      <div className="space-y-4 py-4">
        <div className="px-3 py-2">
          <div className="space-y-1">
            <Button variant="secondary" className="w-full justify-start">
              <HomeIcon className="mr-2 h-4 w-4"/>
              Personal
            </Button>
            <Button variant="ghost" className="w-full justify-start">
              <DescriptionIcon className="mr-2 h-4 w-4" />
              My drive
            </Button>
            <Button variant="ghost" className="w-full justify-start">
              <DevicesIcon className="mr-2 h-4 w-4"/>
              Devices
            </Button>
          </div>
        </div>
        <div className="px-3 py-2">
          <div className="space-y-1">
            <Button variant="ghost" className="w-full justify-start">
                <SupervisorAccountIcon className="mr-2 h-4 w-4"/>
              Shared with me
            </Button>
            <Button variant="ghost" className="w-full justify-start">
              <AccessTimeIcon className="mr-2 h-4 w-4"/>
              Recent
            </Button>
            <Button variant="ghost" className="w-full justify-start">
              <DeleteIcon className="mr-2 h-4 w-4"/>
              Trash
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}