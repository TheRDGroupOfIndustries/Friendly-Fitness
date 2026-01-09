import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const videoTestimonials = [
  { id: 1, name: "Nikunj", publicId: "video1" },
  { id: 2, name: "Manya", publicId: "video2" },
  { id: 3, name: "Shivani", publicId: "video3" },
  { id: 4, name: "Nikhil", publicId: "video4" },
  { id: 5, name: "Falak", publicId: "video5" },
  { id: 6, name: "Shyamshri", publicId: "video6" },
  { id: 7, name: "Shubham", publicId: "video7" },
];

const ClientVideoReviews: React.FC = () => {
  const cloudName = "dthcelkdp";

  return (
    <section className="py-12 md:py-20 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-12 relative">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold text-black mb-4">
            TRANSFORMATION <span className="text-orange-500">STORIES</span>
          </h2>
          <p className="text-gray-600 text-lg">Swipe to see real results</p>
        </div>

        {/* Shadcn Carousel */}
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {videoTestimonials.map((video) => (
              <CarouselItem 
                key={video.id} 
                className="pl-2 md:pl-4 basis-full sm:basis-1/2 lg:basis-1/3 xl:basis-1/4"
              >
                <div className="p-1">
                  <Card className="flex flex-col bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100">
                    <CardContent className="p-0">
                      {/* Video Player Section */}
                      <div className="aspect-[9/16] bg-black">
                        <video
                          controls
                          className="w-full h-full object-cover"
                          preload="metadata"
                          poster={`https://res.cloudinary.com/${cloudName}/video/upload/so_auto,q_auto,f_auto/v1/${video.publicId}.jpg`}
                        >
                          <source
                            src={`https://res.cloudinary.com/${cloudName}/video/upload/q_auto,f_auto/v1/${video.publicId}.mp4`}
                            type="video/mp4"
                          />
                        </video>
                      </div>

                      {/* Name Section */}
                      <div className="p-4 text-center bg-white">
                        <h4 className="font-bold text-base text-gray-800 uppercase tracking-tight">
                          {video.name}
                        </h4>
                        <p className="text-orange-500 text-xs font-semibold italic mt-1">
                          Verified Evolution
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          
          {/* Navigation Buttons */}
          <CarouselPrevious className="hidden md:flex -left-12 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white" />
          <CarouselNext className="hidden md:flex -right-12 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white" />
        </Carousel>
      </div>
    </section>
  );
};

export default ClientVideoReviews;
