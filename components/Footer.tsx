import { footerLinks, site } from "@/data/site";
import { GitHubIcon, LinkedInIcon } from "./icons";
import { Year } from "./Year";

export function Footer() {
  return (
    <footer className="border-t border-line/10 py-12">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-5 md:flex-row md:items-start md:justify-between">
        <div>
          <p className="text-lg font-semibold">{site.name}</p>
          <p className="mt-2 text-sm text-muted">Designed with curiosity and built with code.</p>
        </div>

        <nav aria-label="Footer">
          <ul className="grid grid-cols-2 gap-x-10 gap-y-2 text-sm sm:grid-cols-4">
            {footerLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="text-muted transition hover:text-fg">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={site.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub profile (opens in a new tab)"
            className="text-muted transition hover:text-fg"
          >
            <GitHubIcon className="size-5" />
          </a>
          <a
            href={site.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn profile (opens in a new tab)"
            className="text-muted transition hover:text-fg"
          >
            <LinkedInIcon className="size-5" />
          </a>
        </div>
      </div>
      <p className="mx-auto mt-10 max-w-6xl px-5 text-sm text-muted">
        &copy; <Year /> {site.name}. All rights reserved.
      </p>
    </footer>
  );
}
