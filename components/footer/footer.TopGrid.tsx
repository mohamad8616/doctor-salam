import Link from "next/link";
import { FaChevronLeft, FaHeartbeat, FaUserMd } from "react-icons/fa";
import { HEALTH_CATEGORIES, MEDICAL_SPECIALTIES } from "./footer.constants";
import NewsLetter from "./footer.NewsLetter";
import UsefulLinks from "./footer.UsefulLinks";

const TopGrid = () => {
  return (
    <div className="grid gap-12 lg:grid-cols-4">
      {/* Newsletter – LEFT SIDE */}
      <NewsLetter />

      {/* Health Categories */}
      <nav aria-labelledby="health-title">
        <h4
          id="health-title"
          className="mb-4 flex items-center gap-2 font-semibold"
        >
          <FaHeartbeat className="text-primary" />
          دسته‌بندی سلامت
        </h4>

        <ul className="space-y-2">
          {HEALTH_CATEGORIES.map((item) => (
            <li key={item.id}>
              <Link
                href={item.href}
                className="group flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"
              >
                {item.icon}
                <span>{item.name}</span>
                <FaChevronLeft className="mr-auto opacity-0 transition group-hover:opacity-100" />
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {/* Medical Specialties */}
      <nav aria-labelledby="specialty-title">
        <h4
          id="specialty-title"
          className="mb-4 flex items-center gap-2 font-semibold"
        >
          <FaUserMd className="text-primary" />
          تخصص‌های پزشکی
        </h4>

        <ul className="grid grid-cols-2 gap-3">
          {MEDICAL_SPECIALTIES.map((item) => (
            <li key={item.id}>
              <Link
                href={item.href}
                className="flex flex-col items-center rounded-lg border bg-card p-3 text-xs hover:bg-accent transition"
              >
                {item.icon}
                <span className="mt-1">{item.name}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {/* Useful Links */}
      <UsefulLinks />
    </div>
  );
}

export default TopGrid