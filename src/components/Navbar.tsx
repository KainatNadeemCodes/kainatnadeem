import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Sun, Moon } from "lucide-react";
import { useTheme } from "@/hooks/use-theme";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

const scrollToSection = (href: string) => {
  const id = href.replace("#", "");
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  }
};

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { theme, toggle } = useTheme();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-background/80 backdrop-blur-xl border-b border-border/40 py-3" : "py-5"
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="font-mono text-sm text-foreground tracking-tight"
        >
          K<span className="text-primary">.</span>N
        </button>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link, i) => (
            <button
              key={link.href}
              onClick={() => scrollToSection(link.href)}
              className="text-xs text-muted-foreground hover:text-foreground transition-colors duration-200 font-mono tracking-wide"
            >
              <span className="text-primary/50 mr-1.5">0{i + 1}.</span>
              {link.label}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <motion.button
            onClick={toggle}
            whileTap={{ scale: 0.88 }}
            aria-label="Toggle theme"
            className="relative w-8 h-8 flex items-center justify-center rounded-md border border-border/50 bg-card/40 text-muted-foreground hover:text-foreground hover:border-primary/30 transition-colors duration-200"
          >
            <AnimatePresence mode="wait" initial={false}>
              {theme === "dark" ? (
                <motion.span
                  key="sun"
                  initial={{ opacity: 0, rotate: -20, scale: 0.8 }}
                  animate={{ opacity: 1, rotate: 0, scale: 1 }}
                  exit={{ opacity: 0, rotate: 20, scale: 0.8 }}
                  transition={{ duration: 0.15 }}
                  className="absolute"
                >
                  <Sun size={14} />
                </motion.span>
              ) : (
                <motion.span
                  key="moon"
                  initial={{ opacity: 0, rotate: 20, scale: 0.8 }}
                  animate={{ opacity: 1, rotate: 0, scale: 1 }}
                  exit={{ opacity: 0, rotate: -20, scale: 0.8 }}
                  transition={{ duration: 0.15 }}
                  className="absolute"
                >
                  <Moon size={14} />
                </motion.span>
              )}
            </AnimatePresence>
          </motion.button>

          <button className="md:hidden text-foreground" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background/95 backdrop-blur-xl border-t border-border/40"
          >
            <div className="container mx-auto px-6 py-4 flex flex-col gap-1">
              {navLinks.map((link, i) => (
                <button
                  key={link.href}
                  onClick={() => {
                    setMenuOpen(false);
                    setTimeout(() => scrollToSection(link.href), 150);
                  }}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors py-2.5 text-left font-mono"
                >
                  <span className="text-primary/50 mr-2">0{i + 1}.</span>
                  {link.label}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
