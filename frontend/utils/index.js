import { FaHome } from "react-icons/fa";

export const getIcons = (iconName = "home", iconColor = "red") => {
  const icons = {
    home: <FaHome size={30} color={iconColor} />,
  };
  return icons[iconName];
};
