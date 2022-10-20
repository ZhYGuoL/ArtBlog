import type { SiteConfig } from '$lib/types/site'

export const site: SiteConfig = {
  protocol: 'https://',
  domain: import.meta.env.URARA_SITE_DOMAIN ?? 'urara-demo.netlify.app',
  title: 'Home',
  subtitle: 'Sweet & Powerful SvelteKit Blog Template',
  lang: 'en-US',
  description: 'Powered by SvelteKit/Urara',
  author: {
    name: 'Zhiyuan Guo',
    avatar: '/assets/maskable@192.png',
    status: '',
    bio: 'Professional Programmer, Multi-sport Athlete, and now Full-time Artist!',
  },
  themeColor: '#3D4451'
}
