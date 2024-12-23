import React from 'react';
import { FooterNav } from './FooterNav';
import { FooterSocial } from './FooterSocial';
import { FooterCopyright } from './FooterCopyright';
import { RestrictedAreaLink } from './RestrictedAreaLink';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-50 dark:bg-gray-800/50 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-2">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              Anderson Gaitolini
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Desenvolvedor de software especializado em soluções empresariais,
              com foco em Delphi, SQL, e novas tecnologias como GoLang e IoT.
            </p>
            <FooterSocial />
          </div>
          <FooterNav />
          <div>
            <RestrictedAreaLink />
          </div>
        </div>
        <FooterCopyright />
      </div>
    </footer>
  );
};

export default Footer;