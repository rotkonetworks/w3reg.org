import { useLocation } from "@solidjs/router";
import { createSignal } from "solid-js";

export default function Nav() {
  const location = useLocation();
  const [navIsOpen, setNavIsOpen] = createSignal(false);

  const active = (path) =>
    path === location.pathname
      ? "border-sky-600"
      : "border-transparent hover:border-sky-600";

  const navItems = [
    { id: 1, text: "Home", href: "/" },
    { id: 2, text: "Registrar", href: "/registrar" },
    { id: 3, text: "About", href: "/about" },
    { id: 4, text: "Contact", href: "/contact" },
  ];

  const toggleNavBar = () => {
    setNavIsOpen(!navIsOpen());
    document.body.classList.toggle("overflow-y-auto");
  };

  const closeNavBar = () => {
    setNavIsOpen(false);
    document.body.classList.add("overflow-y-auto");
  };

  return (
    <header class="absolute inset-x-0 top-0 z-50 py-6">
      <div class="w-full px-5 sm:px-10 md:px-12 lg:px-5 mx-auto max-w-7xl">
        <nav class="w-full flex justify-between gap-6 relative">
          <div class="min-w-max inline-flex relative">
            <a href="/" class="relative flex items-center gap-3">
              <span class="flex">
                <span class="w-3 h-6 rounded-l-full flex bg-emerald-600"></span>
                <span class="w-3 h-6 rounded-r-full flex bg-teal-400 mt-1.5"></span>
              </span>
              <div class="inline-flex text-lg text-neutral-800 dark:text-white font-semibold">
                w3reg.org
              </div>
            </a>
          </div>

          <div
            aria-hidden="true"
            class={`fixed bg-border-neutral-700/50 inset-0 backdrop-filter backdrop-blur-xl bg-neutral-800/40 ${
              navIsOpen() ? "flex lg:hidden" : "hidden lg:!hidden"
            }`}
          ></div>
          <div
            class={`absolute lg:relative w-full flex overflow-hidden duration-300 ease-linear lg:flex lg:w-auto lg:items-center ${
              navIsOpen()
                ? "translate-y-0 visible opacity-100"
                : "translate-y-10 invisible opacity-0 lg:opacity-100 lg:visible lg:translate-y-0"
            } top-full lg:top-0 border-t border-neutral-200 dark:border-neutral-700 lg:border-0 flex-col lg:flex-row gap-y-6 gap-x-4 lg:justify-between lg:items-center bg-white dark:bg-neutral-950 lg:!bg-transparent`}
          >
            <ul class="px-6 lg:px-0 pt-6 lg:pt-0 flex flex-col lg:flex-row gap-y-4 gap-x-3 text-lg text-neutral-700 dark:text-neutral-300 w-full lg:justify-center lg:items-center">
              {navItems.map((navItem) => (
                <li key={navItem.id}>
                  <a
                    href={navItem.href}
                    class={`duration-300 font-medium ease-linear hover:text-emerald-600 py-3 ${active(
                      navItem.href
                    )}`}
                    onClick={closeNavBar}
                  >
                    {navItem.text}
                  </a>
                </li>
              ))}
            </ul>

            <div class="lg:min-w-max flex items-center sm:w-max w-full pb-6 lg:pb-0 px-6 lg:px-0">
              <a
                href="/get-started"
                class="flex justify-center items-center w-full sm:w-max px-6 h-12 bg-emerald-600 rounded-full relative overflow-hidden border border-transparent hover:border-emerald-700 duration-300 ease-linear"
              >
                <span class="relative z-10 text-white">Register</span>
              </a>
            </div>
          </div>

          <div class="min-w-max flex items-center gap-x-3">
            <button
              aria-label="toggle theme"
              class="ui-toggle-theme"
            ></button>
            <button
              aria-label="toggle navbar"
              onClick={toggleNavBar}
              class="lg:hidden outline-none w-7 h-auto flex flex-col relative bg-transparent"
            >
              <span
                class={`bg-neutral-700 dark:bg-neutral-300 w-6 h-0.5 rounded-full transition-all duration-300 ease-linear ${
                  navIsOpen() ? "translate-y-1.5 rotate-40" : ""
                }`}
              ></span>
              <span
                class={`bg-neutral-700 dark:bg-neutral-300 w-6 origin-center mt-1 h-0.5 rounded-full transition-all duration-300 ease-linear ${
                  navIsOpen() ? "opacity-0 scale-x-0" : ""
                }`}
              ></span>
              <span
                class={`bg-neutral-700 dark:bg-neutral-300 w-6 mt-1 h-0.5 rounded-full transition-all duration-300 ease-linear ${
                  navIsOpen() ? "-translate-y-1.5 -rotate-40" : ""
                }`}
              ></span>
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
}
