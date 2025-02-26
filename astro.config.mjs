import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
  site: 'https://opensourcemaintenancefee.org',
  integrations: [
    starlight({
      title: 'Open Source Maintenance Fee',
      logo: {
        alt: 'Open Source Maintenance Fee',
        src: './src/assets/osmf-logo.svg',
        replacesTitle: false,
      },
      head: [
        {
          tag: 'meta',
          attrs: { property: 'og:image', content: 'https://opensourcemaintenancefee.org/1200x630.png?v=1' },
        },
        {
          tag: 'meta',
          attrs: { property: 'og:image:alt', content: 'Open Source Maintenance Fee' },
        },
      ],
      customCss: [
        './src/assets/custom.css',
        './src/assets/fonts/font-face.css',
      ],
      components: {
        Head: './src/components/starlight/Head.astro',
      },
      social: {
        github: 'https://github.com/opensourcemaintenancefee/web',
      },
      sidebar: [
        {
          label: 'Consumers',
          autogenerate: { directory: 'consumers' },
        },
        {
          label: 'Maintainers',
          autogenerate: { directory: 'maintainers' },
        },
      ],
    }),
  ],
});
