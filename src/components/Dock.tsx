import { Clock, FileText, Cloud, Calculator, ListTodo, Search, Image, Quote, Bell, Settings } from 'lucide-react';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { useNotificationContext } from '@/contexts/notification-context';
import { useTheme } from '@/contexts/theme-context';
import { cn } from '@/lib/utils';

interface DockProps {
  onAddWidget: (type: string) => void;
  onToggleWallpaper: () => void;
  onToggleNotifications: () => void;
}

const Dock: React.FC<DockProps> = ({ onAddWidget, onToggleWallpaper, onToggleNotifications }) => {
  const { unreadCount } = useNotificationContext();
  const { theme } = useTheme();
  
  return (
    <div className={cn(
      "dock animate-fade-in", 
      theme.style === 'solid' ? 'solid-dock' : ''
    )}>
      <TooltipProvider delayDuration={300}>
        <Tooltip>
          <TooltipTrigger asChild>
            <button className="dock-item white-text" onClick={() => onAddWidget('clock')}>
              <Clock size={20} />
            </button>
          </TooltipTrigger>
          <TooltipContent side="top">
            <p>Clock Widget</p>
          </TooltipContent>
        </Tooltip>

        <Tooltip>
          <TooltipTrigger asChild>
            <button className="dock-item" onClick={() => onAddWidget('notes')}>
              <FileText size={20} />
            </button>
          </TooltipTrigger>
          <TooltipContent side="top">
            <p>Notes Widget</p>
          </TooltipContent>
        </Tooltip>

        <Tooltip>
          <TooltipTrigger asChild>
            <button className="dock-item" onClick={() => onAddWidget('weather')}>
              <Cloud size={20} />
            </button>
          </TooltipTrigger>
          <TooltipContent side="top">
            <p>Weather Widget</p>
          </TooltipContent>
        </Tooltip>

        <Tooltip>
          <TooltipTrigger asChild>
            <button className="dock-item" onClick={() => onAddWidget('calculator')}>
              <Calculator size={20} />
            </button>
          </TooltipTrigger>
          <TooltipContent side="top">
            <p>Calculator Widget</p>
          </TooltipContent>
        </Tooltip>

        <Tooltip>
          <TooltipTrigger asChild>
            <button className="dock-item" onClick={() => onAddWidget('todo')}>
              <ListTodo size={20} />
            </button>
          </TooltipTrigger>
          <TooltipContent side="top">
            <p>To-Do List Widget</p>
          </TooltipContent>
        </Tooltip>

        <Tooltip>
          <TooltipTrigger asChild>
            <button className="dock-item" onClick={() => onAddWidget('search')}>
              <Search size={20} />
            </button>
          </TooltipTrigger>
          <TooltipContent side="top">
            <p>Search Widget</p>
          </TooltipContent>
        </Tooltip>

        <Tooltip>
          <TooltipTrigger asChild>
            <button className="dock-item" onClick={() => onAddWidget('quote')}>
              <Quote size={20} />
            </button>
          </TooltipTrigger>
          <TooltipContent side="top">
            <p>Quote Widget</p>
          </TooltipContent>
        </Tooltip>

        <Tooltip>
          <TooltipTrigger asChild>
            <button className="dock-item relative" onClick={onToggleNotifications}>
              <Bell size={20} />
              {unreadCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                  {unreadCount > 9 ? '9+' : unreadCount}
                </span>
              )}
            </button>
          </TooltipTrigger>
          <TooltipContent side="top">
            <p>Notifications</p>
          </TooltipContent>
        </Tooltip>

        <Tooltip>
          <TooltipTrigger asChild>
            <button className="dock-item" onClick={() => onAddWidget('settings')}>
              <Settings size={20} />
            </button>
          </TooltipTrigger>
          <TooltipContent side="top">
            <p>Settings</p>
          </TooltipContent>
        </Tooltip>

        <Tooltip>
          <TooltipTrigger asChild>
            <button className="dock-item" onClick={onToggleWallpaper}>
              <Image size={20} />
            </button>
          </TooltipTrigger>
          <TooltipContent side="top">
            <p>Change Wallpaper</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  );
};

export default Dock;
