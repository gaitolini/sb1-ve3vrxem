import React from 'react';
import { Code2, Database, Home, Brain } from 'lucide-react';
import { Link } from 'react-router-dom';
import Section from '../shared/Section';

const About: React.FC = () => {
  return (
    <Section id="about" className="bg-white dark:bg-gray-900">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div>
          <img
            src="https://images.unsplash.com/photo-1537432376769-00f5c2f4c8d2?auto=format&fit=crop&q=80&w=800"
            alt="Anderson Gaitolini"
            className="rounded-2xl shadow-lg"
          />
        </div>
        <div>
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 transition-colors">
            Sobre Mim
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-8 transition-colors">
            Sou Anderson Gaitolini, desenvolvedor com mais de 10 anos de experiência em Delphi e SQL, 
            apaixonado por criar soluções inovadoras. Atualmente, estou ampliando meu domínio para 
            Golang, automação residencial e sistemas integrados.
          </p>
          <div className="grid grid-cols-2 gap-6 mb-8">
            <div className="flex items-start space-x-3">
              <Code2 className="h-6 w-6 text-blue-600 dark:text-blue-400" />
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white transition-colors">
                  Desenvolvimento
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 transition-colors">
                  Delphi, GoLang, Vue.js
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <Database className="h-6 w-6 text-blue-600 dark:text-blue-400" />
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white transition-colors">
                  Banco de Dados
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 transition-colors">
                  SQL, Otimização
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <Home className="h-6 w-6 text-blue-600 dark:text-blue-400" />
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white transition-colors">
                  IoT
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 transition-colors">
                  Automação Residencial
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <Brain className="h-6 w-6 text-blue-600 dark:text-blue-400" />
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white transition-colors">
                  Boas Práticas
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 transition-colors">
                  Clean Code, SOLID
                </p>
              </div>
            </div>
          </div>
          <Link
            to="/recruiter"
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
          >
            Você é um recrutador? Saiba mais →
          </Link>
        </div>
      </div>
    </Section>
  );
};

export default About;