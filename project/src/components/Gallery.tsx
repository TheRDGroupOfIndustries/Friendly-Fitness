import React, { useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import Img3 from "../assets/IMG-3.jpg";
import Img4 from "../assets/IMG-4.jpg";
import Img5 from "../assets/IMG-5.jpg";
import Img6 from "../assets/IMG-6.jpg";
import Img7 from "../assets/IMG-7.jpg";
import Img8 from "../assets/IMG-8.jpg";

const Gallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const galleryImages = [
    {
      id: 1,
      src: Img3,
      alt: "Kettlebell Training",
      category: "Strength Training",
    },
    {
      id: 2,
      src: Img4,
      alt: "Athletic Woman Training",
      category: "Personal Training",
    },
    {
      id: 3,
      src: Img5,
      alt: "Gym Equipment",
      category: "Equipment",
    },
    {
      id: 4,
      src: Img6,
      alt: "Weightlifting Session",
      category: "Weightlifting",
    },
    {
      id: 5,
      src: Img7,
      alt: "Group Training",
      category: "Group Classes",
    },
    {
      id: 6,
      src: Img8,
      alt: "Cardio Training",
      category: "Cardio",
    },
  ];

  const openLightbox = (index: number) => {
    setSelectedImage(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % galleryImages.length);
    }
  };

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage(
        selectedImage === 0 ? galleryImages.length - 1 : selectedImage - 1
      );
    }
  };

  return (
    <>
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="relative inline-block">
              <h2
                className="text-5xl md:text-7xl font-bold text-white mb-4"
                id="title"
              >
                <span className="text-white">GALLERY</span>
                {/* <span className="text-orange-500">LERY</span> */}
              </h2>
              {/* <div className="absolute -top-4 -left-8 w-16 h-1 bg-orange-500 transform -rotate-45"></div>
              <div className="absolute -bottom-4 -right-8 w-16 h-1 bg-orange-500 transform -rotate-45"></div> */}
            </div>
            <p className="text-xl text-gray-300 mt-6 max-w-2xl mx-auto">
              WITNESS THE TRANSFORMATION
            </p>
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {galleryImages.map((image, index) => (
              <div
                key={image.id}
                className="group relative overflow-hidden rounded-lg cursor-pointer"
                onClick={() => openLightbox(index)}
              >
                {/* Orange accent line */}
                <div className="absolute top-0 left-0 w-16 h-1 bg-orange-500 z-20"></div>

                <div className="relative h-80 overflow-hidden">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-orange-500/80 transition-all duration-300 flex items-center justify-center">
                    <div className="text-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <h3 className="text-xl font-bold mb-2">
                        {image.category}
                      </h3>
                      <p className="text-sm">Click to view</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage !== null && (
        <div className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4">
          {/* Close Button */}
          <button
            onClick={closeLightbox}
            className="absolute top-8 right-8 text-white hover:text-orange-500 transition-colors z-60"
          >
            <X className="w-8 h-8" />
          </button>

          {/* Navigation Buttons */}
          <button
            onClick={prevImage}
            className="absolute left-8 top-1/2 transform -translate-y-1/2 text-white hover:text-orange-500 transition-colors z-60"
          >
            <ChevronLeft className="w-12 h-12" />
          </button>

          <button
            onClick={nextImage}
            className="absolute right-8 top-1/2 transform -translate-y-1/2 text-white hover:text-orange-500 transition-colors z-60"
          >
            <ChevronRight className="w-12 h-12" />
          </button>

          {/* Image */}
          <div className="relative max-w-4xl max-h-[80vh] w-full h-full flex items-center justify-center">
            <img
              src={galleryImages[selectedImage].src}
              alt={galleryImages[selectedImage].alt}
              className="max-w-full max-h-full object-contain rounded-lg"
            />

            {/* Image Info */}
            <div className="absolute bottom-4 left-4 text-white">
              <h3 className="text-xl font-bold">
                {galleryImages[selectedImage].category}
              </h3>
              <p className="text-sm text-gray-300">
                {galleryImages[selectedImage].alt}
              </p>
            </div>

            {/* Image Counter */}
            <div className="absolute bottom-4 right-4 text-white">
              <span className="text-sm">
                {selectedImage + 1} / {galleryImages.length}
              </span>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Gallery;
