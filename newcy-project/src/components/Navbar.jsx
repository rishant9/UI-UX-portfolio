import { VscHome } from "react-icons/vsc";
import { MdInfoOutline, MdStarOutline, MdContactMail } from "react-icons/md";
import Dock from "./Dock";

export function Navbar() {
  const scrollToSection = (id) => {
    const section = document.querySelector(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const items = [
    { icon: <VscHome size={18} />, label: "Home", onClick: () => scrollToSection("#home") },
    { icon: <MdInfoOutline size={18} />, label: "About", onClick: () => scrollToSection("#about") },
    { icon: <MdStarOutline size={18} />, label: "Featured", onClick: () => scrollToSection("#projects") },
    { icon: <MdContactMail size={18} />, label: "Contact", onClick: () => scrollToSection("#contact") },
  ];

  return (
    <Dock
      items={items}
      panelHeight={68}
      baseItemSize={50}
      magnification={70}
    />
  );
}
