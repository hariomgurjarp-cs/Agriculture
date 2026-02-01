import Link from 'next/link';
import { Sprout, Phone, MessageSquare } from 'lucide-react';
import { contact } from '@/lib/data';
import { Button } from '@/components/ui/button';

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="w-full border-t bg-card text-card-foreground">
      <div className="container grid items-center gap-8 pb-8 pt-6 md:py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center space-x-2">
            <Sprout className="h-6 w-6 text-primary" />
            <span className="font-bold">Faslon Ki Rahnumai</span>
          </div>
          <div className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            <p>&copy; {year} Faslon Ki Rahnumai. All rights reserved.</p>
            <p>
              <a
                href={`tel:${contact.phone}`}
                className="inline-flex items-center gap-1 hover:text-primary"
              >
                <Phone className="h-3 w-3" />
                {contact.phone}
              </a>
              <span className="mx-2">|</span>
              <a
                href={`https://wa.me/${contact.whatsapp.replace(/[^0-9]/g, '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 hover:text-primary"
              >
                <MessageSquare className="h-3 w-3" />
                WhatsApp
              </a>
            </p>
            <p>{contact.address}</p>
          </div>
          <div className="flex items-center gap-2">
            <a
              href={`https://wa.me/${contact.whatsapp.replace(/[^0-9]/g, '')}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="outline" size="icon">
                <MessageSquare className="h-4 w-4" />
                <span className="sr-only">WhatsApp</span>
              </Button>
            </a>
            <a href={`tel:${contact.phone}`}>
              <Button variant="outline" size="icon">
                <Phone className="h-4 w-4" />
                <span className="sr-only">Call</span>
              </Button>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
