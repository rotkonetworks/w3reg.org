const footerLinks = [
  {
    id: 1,
    title: "Navigation",
    items: [
      { id: 1, label: 'Home', link: '/' },
      { id: 2, label: 'About', link: '/about' },
      { id: 3, label: 'Services', link: '/services' },
    ]
  },
  {
    id: 2,
    title: "Resources",
    items: [
      { id: 1, label: 'Documentation', link: '/docs' },
      { id: 2, label: 'API Reference', link: '/api' },
      { id: 3, label: 'Community', link: '/community' },
      { id: 4, label: 'Blog', link: '/blog' },
    ]
  },
  {
    id: 3,
    title: "Organization",
    items: [
      { id: 1, label: 'About Us', link: '/about' },
      { id: 2, label: 'Contact', link: '/contact' },
    ]
  },
  {
    id: 4,
    title: "Contact",
    items: [
      { id: 1, label: 'Logo', link: '/' }
    ]
  }
];

const footerInfo = {
  company: "Rotko Networks OÜ",
  address: [
    "Akadeemia tee 21-4",
    "Tallinn, 12618",
    "Estonia"
  ],
  email: "info@w3reg.org",
  matrix: "#w3reg:matrix.org",
  copyright: "© 2024 w3reg.org. All rights reserved."
};

const socialLinks = [
  { id: 'facebook', label: 'Facebook', iconClass: 'i-carbon-logo-facebook', href: 'https://www.facebook.com' },
  { id: 'linkedin', label: 'LinkedIn', iconClass: 'i-carbon-logo-linkedin', href: 'https://www.linkedin.com' },
  { id: 'twitter', label: 'Twitter', iconClass: 'i-carbon-logo-twitter', href: 'https://www.twitter.com' },
  { id: 'instagram', label: 'Instagram', iconClass: 'i-carbon-logo-instagram', href: 'https://www.instagram.com' },
];

const logo = {
  src: "/images/w3reg.png",
  alt: "w3reg.org Logo",
  class: "h-16 md:h-24 xl:h-32"
};

const Footer = () => (
  <footer class="pt-16 md:pt-20 bg-neutral-1 dark:bg-neutral-9">
    <div class="px-5 sm:px-10 md:px-12 lg:px-5 max-w-7xl mx-auto">
      <nav class="text-neutral-7 dark:text-neutral-3 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-10 gap-8 py-10">
        {footerLinks.slice(0, 3).map(footerItem => (
          <div key={footerItem.id} class="space-y-5">
            <h3 class="text-lg text-neutral-9 dark:text-neutral-1 font-semibold">
              {footerItem.title}
            </h3>
            <ul class="space-y-3">
              {footerItem.items.map(item => (
                <li key={item.id}>
                  <a href={item.link} class="hover:text-emerald-6 dark:hover:text-emerald-5 duration-200">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
        <div key={footerLinks[3].id} class="space-y-5 col-span-2 md:col-span-3 lg:col-span-1">
          <h3 class="text-lg text-neutral-9 dark:text-neutral-1 font-semibold">
            <a href={footerLinks[3].items[0].link}>
              <img src={logo.src} alt={logo.alt} class={logo.class} />
            </a>
          </h3>
          <div class="flex flex-col space-y-2">
            <div class="flex items-center space-x-2">
              <span class="icon-email text-2xl"></span>
              <span>{footerInfo.email}</span>
            </div>
            <div class="flex items-center space-x-2">
              <span class="icon-matrix text-xl"></span>
              <span>{footerInfo.matrix}</span>
            </div>
            <div class="flex flex-col space-x-2">
              <span class="icon-matrix text-xl"></span>
              <span>{footerInfo.company}</span>
              {footerInfo.address.map((line, index) => (
                <span key={index}>{line}</span>
              ))}
            </div>
          </div>
        </div>
      </nav>
      <div class="border-t border-neutral-2 dark:border-neutral-8 text-neutral-7 dark:text-neutral-3 w-full flex flex-col md:flex-row gap-4 items-center sm:justify-between py-3">
        <div class="text-center sm:text-left flex sm:min-w-max">
          <p>{footerInfo.copyright}</p>
        </div>
        <div class="flex justify-center sm:justify-end w-full gap-3">
          {socialLinks.map(link => (
            <a key={link.id} href={link.href} aria-label={link.label} class={`${link.iconClass} text-2xl flex`}></a>
          ))}
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
