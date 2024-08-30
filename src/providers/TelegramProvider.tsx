import { useClosingBehavior } from "@telegram-apps/sdk-react";
import { FC, ReactNode, useEffect } from "react";

interface TelegramProviderProps {
  children: ReactNode;
}
const TelegramProvider: FC<TelegramProviderProps> = ({ children }) => {
  const closingBehavior = useClosingBehavior();

  useEffect(() => {
    if (closingBehavior) {
      closingBehavior.enableConfirmation();
    }
  }, [closingBehavior]);

  return children;
};

export default TelegramProvider;
