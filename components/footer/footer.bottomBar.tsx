import Logo from "../Logo";
import { SOCIAL_LINKS } from "./footer.constants";

const BottomBar = () => {
  return (
    <div className="mt-12 flex flex-col items-center justify-between gap-6 border-t pt-6 md:flex-row">
      {/* Logo */}
      <div className="flex items-center gap-3">
        <Logo w={48} h={48} />
        <span className="font-semibold">سلامت آنلاین</span>
      </div>

      {/* Social */}
      <div className="flex gap-3">
        {SOCIAL_LINKS.map((social) => (
          <a
            key={social.id}
            href={social.href}
            aria-label={social.label}
            rel="noopener noreferrer"
            className="flex h-10 w-10 items-center justify-center rounded-full border bg-background hover:bg-accent transition"
          >
            {social.icon}
          </a>
        ))}
      </div>

      {/* Copyright */}
      <p className="text-xs text-muted-foreground text-center">
        © {new Date().getFullYear()} سلامت آنلاین. تمامی حقوق محفوظ است.
      </p>
    </div>
  );
};

export default BottomBar;
