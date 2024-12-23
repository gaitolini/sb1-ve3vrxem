import React from 'react';
import {
  Code2,
  Globe,
  Cloud,
  Database,
  Server,
  Home,
  Cpu,
  Wifi
} from 'lucide-react';
import ServiceCard from './ServiceCard';

const ServicesSection = () => {
  const services = [
    {
      title: 'Especialista Delphi / SQL',
      description: 'Desenvolvimento e manutenção de sistemas legados, otimização de consultas SQL, migração de bancos de dados e implementação de novas funcionalidades. Expertise em resolução de problemas complexos e melhoria de performance.',
      icon: <Database className="h-8 w-8" />,
      technologies: ['Delphi', 'SQL Server', 'Oracle', 'PostgreSQL', 'FireDAC']
    },
    {
      title: 'Criação de Páginas Web',
      description: 'Desenvolvimento de websites modernos e responsivos, otimizados para SEO e performance. Criação de interfaces intuitivas e atraentes, com foco na experiência do usuário e nas melhores práticas de desenvolvimento web.',
      icon: <Globe className="h-8 w-8" />,
      technologies: ['React', 'Vue.js', 'TypeScript', 'Tailwind CSS', 'Next.js']
    },
    {
      title: 'AWS Cloud',
      description: 'Consultoria especializada em migração para nuvem AWS, arquitetura de soluções escaláveis, otimização de custos e implementação de práticas DevOps. Suporte na configuração de serviços como EC2, S3, RDS e Lambda.',
      icon: <Cloud className="h-8 w-8" />,
      technologies: ['AWS', 'Docker', 'Kubernetes', 'Terraform', 'CI/CD']
    },
    {
      title: 'Projeto Backend',
      description: 'Desenvolvimento de APIs robustas e escaláveis, integrações com serviços cloud, implementação de microsserviços e arquiteturas distribuídas. Expertise em múltiplas tecnologias e frameworks modernos.',
      icon: <Server className="h-8 w-8" />,
      technologies: ['Delphi', 'Go', 'Node.js', 'AWS', 'REST', 'gRPC']
    },
    {
      title: 'Projetos IoT',
      description: 'Desenvolvimento de soluções completas de automação residencial e projetos educacionais com microcontroladores. Integração com Home Assistant, criação de dispositivos inteligentes e sistemas de monitoramento.',
      icon: <Cpu className="h-8 w-8" />,
      technologies: ['Arduino', 'ESP32', 'ESP8266', 'Home Assistant', 'MQTT'],
      demoLink: '/home-assistant'
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50 dark:bg-gray-800/50 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Serviços Especializados
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Soluções tecnológicas personalizadas para suas necessidades
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <ServiceCard
              key={service.title}
              title={service.title}
              description={service.description}
              icon={service.icon}
              technologies={service.technologies}
              demoLink={service.demoLink}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;