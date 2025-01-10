import React, { useState } from 'react';
import { Button, Selector, SlideShow } from 'movie-design-hv';

interface Slide {
  imageUrl: string;
}

const CheckoutPage: React.FC = () => {
  const [selectedTheater, setSelectedTheater] = useState<string | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);

  const theaters: string[] = [
    'NY City - Cinema Village',
    'LA - Hollywood Theater',
    'Chicago - Downtown Cinema'
  ];

  const times: string[] = [
    'June 12, 2024 - 20:30 pm',
    'June 12, 2024 - 22:30 pm',
    'June 13, 2024 - 18:30 pm'
  ];

  const slides: Slide[] = [
    {
      imageUrl: "https://picsum.photos/300/200"
    },
    {
      imageUrl: "https://picsum.photos/300/200"
    },
    {
      imageUrl: "https://picsum.photos/300/200"
    }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-black">
      <div className="px-6 pt-6 pb-24 space-y-6">
        {/* Slideshow Section */}
        <SlideShow
          slides={slides}
          name="Kung Fu Panda 4"
          subName="DreamWorks Animation"
          autoSlide={false}
          className="w-full"
          borderRadius="16px"
          nameclassName="text-xl font-semibold"
          subclassName="text-gray-400 text-sm"
          arrowImage='https://img.icons8.com/ios/452/chevron-right.png'
        />

        {/* Required Fields Notice */}
        <p className="text-gray-400 text-sm">
          You need to select the mandatory fields (*) to proceed to the checkout page.
        </p>

        {/* Theater Selector */}
        <div className="space-y-4">
          <Selector
            options={theaters}
            placeholder="Select Theatre *"
            selected={selectedTheater}
            onSelect={setSelectedTheater}
            customSize={{ width: "100%", height: "56px" }}
          />

          {/* Time Selector */}
          <Selector
            options={times}
            placeholder="Select Time *"
            selected={selectedTime}
            onSelect={setSelectedTime}
            customSize={{ width: "100%", height: "56px" }}
          />

          <Selector
            options={[]}
            placeholder="Buffet Products"
            selected={null}
            onSelect={setSelectedTime}
            customSize={{ width: "100%", height: "56px" }}
          />
        </div>
      </div>

      {/* Fixed Next Button at bottom */}
      <div className="fixed bottom-0 left-0 right-0 p-6 bg-black/80 backdrop-blur-sm">
        <Button
          label="Next"
          type="primary"
          size="base"
          onClick={() => {}}
          isDisabled={!selectedTheater || !selectedTime}
          children={<svg xmlns="http://www.w3.org/200/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>}
        />
      </div>
    </div>
  );
};

export default CheckoutPage;