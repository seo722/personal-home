'use client';

import { MenuIcon } from 'lucide-react';
import { useMediaQuery } from 'usehooks-ts';
import { ElementRef, useEffect, useRef, useState } from 'react';

import SideMenuNav from './SideMenuNav';

interface SideBarProps {
  isCollapsed: boolean;
}

const SideBar = () => {
  const sidebarRef = useRef<ElementRef<'div'>>(null);

  const isMobile = useMediaQuery('(max-width: 768px)');
  const [isCollapsed, setIsCollapsed] = useState(isMobile);

  // useEffect(() => {
  //   if (isMobile) {
  //     collapse();
  //   } else {
  //     openSidebar();
  //   }
  // }, [isMobile]);

  // const collapse = () => {
  //   setIsCollapsed(true);
  // };

  // const openSidebar = () => {
  //   setIsCollapsed(false);
  // };

  return (
    <div className="sm:hidden block">
      side
      {/* <div>{isCollapsed && <MenuIcon className="w-6 h-6 text-muted-foreground" />}</div>
      <SideMenuNav /> */}
    </div>
  );
};

export default SideBar;
