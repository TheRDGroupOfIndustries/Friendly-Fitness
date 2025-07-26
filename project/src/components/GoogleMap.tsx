import React from 'react';

const GoogleMap: React.FC = () => (
  <section className="max-w-7xl mx-auto px-4 pb-16 w-full">
    <div className="w-full h-[400px] rounded-lg overflow-hidden shadow-md">
      <iframe
        title="Google Map"
        src="https://www.google.com/maps?q=Winchester+Kentucky+40391+USA&output=embed"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen={true}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  </section>
);

export default GoogleMap;