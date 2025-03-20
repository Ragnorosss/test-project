import {
  PropsWithChildren,
  ReactNode,
  useEffect,
  useRef,
  useState,
} from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '../Button';
import styles from './drop-down-menu.module.css';

interface DropDownMenuProps {
  items: { id: number; icon: ReactNode; name: string }[];
  selectedItem: { id: number; icon: ReactNode; name: string };
  onSelect: (item: { id: number; icon: ReactNode; name: string }) => void;
}

const DropDownMenuItem = ({
  children,
  onClick,
}: PropsWithChildren<{ onClick?: () => void }>) => {
  return (
    <li className={styles.dropDownMenuItem} onClick={onClick}>
      {children}
    </li>
  );
};

const DropDownMenuTrigger = ({
  children,
  onClick,
}: PropsWithChildren<{ onClick?: () => void }>) => {
  return (
    <Button onClick={onClick} className={styles.dropDownMenuTrigger}>
      {children}
    </Button>
  );
};

const DropDownMenu = ({ items, selectedItem, onSelect }: DropDownMenuProps) => {
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target as Node) &&
        ref.current &&
        !ref.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div
      ref={ref}
      style={{
        position: 'relative',
        zIndex: 999,
      }}
    >
      <DropDownMenuTrigger onClick={() => setOpen((prev) => !prev)}>
        {selectedItem.icon} {selectedItem.name}
      </DropDownMenuTrigger>

      <AnimatePresence>
        {open && (
          <motion.div
            ref={menuRef}
            className={styles.dropDownMenu}
            initial={{ opacity: 0, scale: 0.9, y: -10, x: -40 }}
            animate={{ opacity: 1, scale: 1, y: 0, x: -40 }}
            exit={{ opacity: 0, scale: 0.9, y: -10 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
          >
            <ul>
              {items.map((item) => (
                <DropDownMenuItem
                  key={item.id}
                  onClick={() => {
                    onSelect(item);
                    setOpen(false);
                  }}
                >
                  {item.icon} {item.name}
                </DropDownMenuItem>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export { DropDownMenu, DropDownMenuTrigger, DropDownMenuItem };
