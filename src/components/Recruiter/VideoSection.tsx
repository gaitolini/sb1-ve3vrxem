import React from 'react';

const VideoSection: React.FC = () => {
  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
          Minha Jornada na Tecnologia
        </h2>
        <div className="relative aspect-video bg-gray-800 rounded-lg overflow-hidden">
          <iframe
            className="absolute inset-0 w-full h-full"
            src="https://www.youtube.com/embed/22HyX0I11Lo"
            title="Anderson Gaitolini - Profile 2024"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
        <p className="text-center text-gray-600 dark:text-gray-300 mt-4">
          Conheça mais sobre minha trajetória profissional e experiência em tecnologia.
        </p>
      </div>
    </section>
  );
}

export default VideoSection;