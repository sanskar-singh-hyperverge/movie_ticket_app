import React, { useState } from 'react';
import { Button, Selector, SlideShow } from 'movie-design-hv';

interface TheaterOption {
  id: string;
  name: string;
}

interface TimeOption {
  id: string;
  time: string;
}

interface Slide {
  imageUrl: string;
}

const CheckoutPage: React.FC = () => {
  const [selectedTheater, setSelectedTheater] = useState<TheaterOption | null>(null);
  const [selectedTime, setSelectedTime] = useState<TimeOption | null>(null);

  const theaters: TheaterOption[] = [
    { id: '1', name: 'NY City - Cinema Village' },
    { id: '2', name: 'LA - Hollywood Theater' },
    { id: '3', name: 'Chicago - Downtown Cinema' },
  ];

  const times: TimeOption[] = [
    { id: '1', time: 'June 12, 2024 - 20:30 pm' },
    { id: '2', time: 'June 12, 2024 - 22:30 pm' },
    { id: '3', time: 'June 13, 2024 - 18:30 pm' },
  ];

  const slides: Slide[] = [
    {
      imageUrl: "/api/placeholder/400/200"
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
        />

        {/* Required Fields Notice */}
        <p className="text-gray-400 text-sm">
          You need to select the mandatory fields (*) to proceed to the checkout page.
        </p>

        {/* Theater Selector */}
        <div className="space-y-4">
          <Selector
            options={theaters}
            placeholder="NY City - Cinema Village *"
            selected={selectedTheater}
            onSelect={setSelectedTheater}
            // displayKey="name"
            customSize={{ width: "100%", height: "56px" }}
          />

          {/* Time Selector */}
          <Selector
            options={times}
            placeholder="June 12, 2024 - 20:30 pm *"
            selected={selectedTime}
            onSelect={setSelectedTime}
            // displayKey="time"
            customSize={{ width: "100%", height: "56px" }}
          />

          {/* Buffet Products Button */}
          <div className="border border-purple-600/20 rounded-xl">
            <Button
              label="Buffet Products"
              type="secondary"
              size="base"
              onClick={() => {}}
              className="w-full h-14 bg-transparent hover:bg-purple-600/10 text-purple-600"
              btnTextClassName="text-purple-600"
            />
          </div>
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
        />
      </div>
    </div>
  );
};

export default CheckoutPage;