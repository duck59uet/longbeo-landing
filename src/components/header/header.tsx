import { FC, useState } from "react";
import clsx from "clsx";

export type HeaderProps = {
  classes: {
    [key: string]: string
  }
}

export const Header: FC<HeaderProps> = ({
  classes
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className={classes.header}>
      <div className={clsx('container mx-auto', classes.container)}>
        <div className="flex justify-between items-center w-full md:w-auto">
          <a href="https://spores.app" target="_blank">
            <img src="/images/logo.png" alt="Spores logo" />
          </a>
          <div className="block md:hidden" onClick={() => setIsMenuOpen(val => !val)}>
            {/* <MenuIcon className="text-white" /> */}
          </div>
        </div>
        <ul className={clsx(classes.menu, 'flex flex-col md:flex-row justify-end gap-12', isMenuOpen ? 'w-full bg-gray-200 md:bg-transparent rounded p-6' : 'hidden md:flex')}>
          <li><a className="menu-item" href="https://dichvumat.com/" target="_blank">Đăng nhập</a></li>
        </ul>
      </div>
    </header>
  );
}
