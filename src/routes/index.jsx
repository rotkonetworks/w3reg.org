import { onMount } from 'solid-js';
import SectionsHeroSection from '~/components/SectionsHeroSection';

const textData = {
  hero: {
    title: "Register and verify your",
    highlightedText: "Web3 identity!",
    description: "w3reg.org is an identity registration service that allows you to register and verify your web3 identity through multiple channels including Twitter, Matrix, web, DNS, and more.",
    emailPlaceholder: "@john_doe",
    buttonText: "Register now",
    heroImage: "/images/w3reg_hero.png",
    heroImageAlt: "Hero image"
  }
};

export default function Home() {
  onMount(() => {
    document.title = 'w3reg.org - Register Your Web3 Identity';

    const metaDescription = document.createElement('meta');
    metaDescription.name = 'description';
    metaDescription.content = 'Register and verify your web3 identity through multiple channels including Twitter, Matrix, web, DNS, and more with w3reg.org.';
    document.head.appendChild(metaDescription);

    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600;700&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);
  });

  return (
    <main class="flex-1">
      <SectionsHeroSection textData={textData.hero} />
      {/* Add other sections as needed */}
    </main>
  );
}
