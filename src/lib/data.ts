import { Leaf, Bug, Sprout, TestTube2, MessageSquare, Phone } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

export const navLinks: { href: string; label: string }[] = [
  { href: '#products', label: 'Products' },
  { href: '#why-us', label: 'Why Us' },
  { href: '#testimonials', label: 'Feedback' },
  { href: '#about', label: 'About Us' },
  { href: '/dosage-calculator', label: 'Dosage Calculator' },
];

export const contact: { phone: string; whatsapp: string; address: string } = {
  phone: '0312-3456789',
  whatsapp: '+923123456789',
  address: 'Ghalla Mandi, Sahiwal, Pakistan',
};

export const heroContent: {
  headline: string;
  subtext: string;
  cta1: { label: string; href: string; icon: LucideIcon };
  cta2: { label: string; href: string; icon: LucideIcon };
} = {
  headline: 'Bharosemand Faslon Ki Dawai – Original Products, Behtar Paidawar',
  subtext: 'Hum certified companies ki faslon ki dawai supply karte hain jo keeray, bimaari aur ghaas ke khilaf moassar hoti hai.',
  cta1: {
    label: 'Call Karein',
    href: `tel:${contact.phone}`,
    icon: Phone,
  },
  cta2: {
    label: 'WhatsApp Par Rabta Karein',
    href: `https://wa.me/${contact.whatsapp.replace(/[^0-9]/g, '')}`,
    icon: MessageSquare,
  },
};

export const productCategories: { name: string; urduName: string; icon: LucideIcon; image: string }[] = [
  {
    name: 'Insecticides',
    urduName: 'Keeray Maar',
    icon: Bug,
    image: 'productCategoryInsecticides',
  },
  {
    name: 'Fungicides',
    urduName: 'Bimaari Ke Liye',
    icon: TestTube2,
    image: 'productCategoryFungicides',
  },
  {
    name: 'Herbicides',
    urduName: 'Ghaas Ke Liye',
    icon: Leaf,
    image: 'productCategoryHerbicides',
  },
  {
    name: 'Plant Growth / Nutrition',
    urduName: 'Plant Growth / Nutrition',
    icon: Sprout,
    image: 'productCategoryNutrition',
  },
];

export const crops: string[] = ['Cotton', 'Gehoon', 'Chawal', 'Makai', 'Sabziyan'];

export const whyUsReasons: string[] = [
  'Original & registered companies ke products',
  'Munasib qeemat',
  'Istemaal ki proper rehnumai',
  'Local farmers ka bharosa',
  'Stock hamesha available',
];

export const testimonials: { quote: string; author: string; area: string; image: string }[] = [
  {
    quote: 'Inki di hui dawai se fasal healthy rahi aur paidawar behtar hui.',
    author: 'Local Farmer',
    area: 'Sahiwal',
    image: 'testimonialFarmer1',
  },
];

export const aboutUsContent: { title: string; text: string } = {
  title: 'About Us',
  text: 'Hum ek authorized dealer hain jo kisano ko behtar solution dene par yaqeen rakhtay hain. Hamara maqsad sirf dawai bechna nahi, balkay fasal ka faida barhana hai.',
};
