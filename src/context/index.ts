import { createContext, Dispatch, SetStateAction } from 'react';

type MenuContext = {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>> | null;
};

export const MenuContext = createContext<MenuContext>({
  open: false,
  setOpen: null,
});
