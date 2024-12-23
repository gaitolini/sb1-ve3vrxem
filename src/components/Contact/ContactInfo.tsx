import React from 'react';
import { Mail, Phone, MessageCircle } from 'lucide-react';

const ContactInfo = () => {
  return (
    <div className="space-y-6">
      <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
        Informações de Contato
      </h3>
      <div className="space-y-4">
        <a
          href="mailto:gaitolini@gmail.com"
          className="flex items-center space-x-3 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
        >
          <Mail className="h-5 w-5" />
          <span>gaitolini@gmail.com</span>
        </a>
        <a
          href="tel:+5547920009112"
          className="flex items-center space-x-3 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
        >
          <Phone className="h-5 w-5" />
          <span>(47) 92000-9112</span>
        </a>
        <a
          href="https://wa.me/qr/CFND4RGOJHHUN1"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center space-x-3 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
        >
          <MessageCircle className="h-5 w-5" />
          <span>Iniciar conversa no WhatsApp</span>
        </a>
      </div>
      <div className="mt-8">
        <p className="text-sm text-gray-600 dark:text-gray-400">
          Estou disponível para projetos freelance, consultoria e oportunidades de trabalho.
          Ficarei feliz em discutir como posso ajudar no seu próximo projeto.
        </p>
      </div>
    </div>
  );
};

export default ContactInfo;