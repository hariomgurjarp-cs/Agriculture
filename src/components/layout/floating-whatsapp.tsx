'use client';

import Link from 'next/link';
import { MessageSquare } from 'lucide-react';
import { contact } from '@/lib/data';
import { Button } from '@/components/ui/button';

export function FloatingWhatsApp() {
  return (
    <Link
      href={`https://wa.me/${contact.whatsapp.replace(/[^0-9]/g, '')}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50"
      aria-label="Chat on WhatsApp"
    >
      <Button
        size="icon"
        className="h-14 w-14 rounded-full bg-green-500 hover:bg-green-600 text-white shadow-lg"
      >
        <MessageSquare className="h-8 w-8" />
      </Button>
    </Link>
  );
}
