import React from 'react'
import { USEFUL_LINKS } from './footer.constants';
import Link from 'next/link';
import { FaChevronLeft, FaLink } from 'react-icons/fa';

const UsefulLinks = () => {
  return (
    <nav aria-labelledby="useful-title">
      <h4
        id="useful-title"
        className="mb-4 flex items-center gap-2 font-semibold"
      >
        <FaLink className="text-primary" />
        لینک‌های مفید
      </h4>

      <ul className="space-y-2">
        {USEFUL_LINKS.map((item) => (
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
  );
}

export default UsefulLinks