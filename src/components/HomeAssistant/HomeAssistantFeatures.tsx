import React from 'react';
import { Shield, Cpu, Wifi, BatteryCharging, MessageSquare, Home } from 'lucide-react';

const features = [
  {
    icon: <Shield className="h-8 w-8" />,
    title: 'Segurança',
    description: 'Monitore sua casa em tempo real com câmeras, sensores de movimento e alertas personalizados.'
  },
  {
    icon: <Cpu className="h-8 w-8" />,
    title: 'Automação',
    description: 'Crie rotinas automatizadas para iluminação, climatização e outros dispositivos.'
  },
  {
    icon: <BatteryCharging className="h-8 w-8" />,
    title: 'Sustentabilidade',
    description: 'Otimize o consumo de energia com monitoramento inteligente e automação.'
  },
  {
    icon: <MessageSquare className="h-8 w-8" />,
    title: 'Assistentes de Voz',
    description: 'Integração com Alexa e Google Home para controle por comando de voz.'
  },
  {
    icon: <Wifi className="h-8 w-8" />,
    title: 'Conectividade',
    description: 'Acesso remoto seguro via aplicativo móvel ou navegador web.'
  },
  {
    icon: <Home className="h-8 w-8" />,
    title: 'Personalização',
    description: 'Soluções sob medida para suas necessidades específicas.'
  }
];

const HomeAssistantFeatures: React.FC = () => {
  return (
    <section className="mb-16">
      <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
        Recursos e Possibilidades
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature) => (
          <div
            key={feature.title}
            className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg"
          >
            <div className="text-blue-600 dark:text-blue-400 mb-4">
              {feature.icon}
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              {feature.title}
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HomeAssistantFeatures;