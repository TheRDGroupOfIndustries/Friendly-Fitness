import React, { useState } from "react";
import { Dumbbell, Target, Bike, Zap, Users, Activity } from "lucide-react";

const Schedule: React.FC = () => {
  const [selectedPeriod, setSelectedPeriod] = useState<"AM" | "PM">("AM");

  const getWorkoutIcon = (workout: string) => {
    switch (workout.toLowerCase()) {
      case "intermediate":
        return <Dumbbell className="w-8 h-8 text-orange-500" />;
      case "trx":
        return <Target className="w-8 h-8 text-orange-500" />;
      case "spinning":
        return <Bike className="w-8 h-8 text-orange-500" />;
      case "boot camp":
        return <Zap className="w-8 h-8 text-orange-500" />;
      case "begginers":
        return <Users className="w-8 h-8 text-orange-500" />;
      case "boxing":
        return <Activity className="w-8 h-8 text-orange-500" />;
      case "core":
        return <Target className="w-8 h-8 text-orange-500" />;
      default:
        return <Dumbbell className="w-8 h-8 text-orange-500" />;
    }
  };

  const scheduleData = {
    AM: [
      {
        time: "8:00 AM",
        classes: [
          { workout: "INTERMEDIATE", trainer: "ANNA" },
          { workout: "TRX", trainer: "ANNA" },
          { workout: "SPINNING", trainer: "ANNA" },
          { workout: "SPINNING", trainer: "ANNA" },
          { workout: "SPINNING", trainer: "ANNA" },
          { workout: "INTERMEDIATE", trainer: "ANNA" },
        ],
      },
      {
        time: "9:00 AM",
        classes: [
          { workout: "BEGGINERS", trainer: "SHEREEN" },
          { workout: "BEGGINERS", trainer: "SHEREEN" },
          { workout: "BEGGINERS", trainer: "SHEREEN" },
          { workout: "BEGGINERS", trainer: "SHEREEN" },
          { workout: "BEGGINERS", trainer: "SHEREEN" },
          { workout: "INTERMEDIATE", trainer: "ANNA" },
        ],
      },
      {
        time: "10:00 AM",
        classes: [
          { workout: "INTERMEDIATE", trainer: "ANNA" },
          { workout: "INTERMEDIATE", trainer: "ANNA" },
          { workout: "INTERMEDIATE", trainer: "ANNA" },
          { workout: "INTERMEDIATE", trainer: "ANNA" },
          { workout: "INTERMEDIATE", trainer: "ANNA" },
          { workout: "INTERMEDIATE", trainer: "ANNA" },
        ],
      },
      {
        time: "11:00 AM",
        classes: [
          { workout: "BOOT CAMP", trainer: "ANNA" },
          { workout: "INTERMEDIATE", trainer: "ANNA" },
          { workout: "BOOT CAMP", trainer: "ANNA" },
          { workout: "BOOT CAMP", trainer: "ANNA" },
          { workout: "BOOT CAMP", trainer: "ANNA" },
          { workout: "BEGGINERS", trainer: "SHEREEN" },
        ],
      },
      {
        time: "11:30 AM",
        classes: [
          { workout: "TRX", trainer: "ANNA" },
          { workout: "INTERMEDIATE", trainer: "ANNA" },
          { workout: "SPINNING", trainer: "ANNA" },
          { workout: "TRX", trainer: "ANNA" },
          { workout: "TRX", trainer: "ANNA" },
          { workout: "CORE", trainer: "ANNA" },
        ],
      },
    ],
    PM: [
      {
        time: "12:00 PM",
        classes: [
          { workout: "BOOT CAMP", trainer: "ANNA" },
          { workout: "BOXING", trainer: "MANALI" },
          { workout: "SPINNING", trainer: "ANNA" },
          { workout: "INTERMEDIATE", trainer: "ANNA" },
          { workout: "TRX", trainer: "ANNA" },
          { workout: "CORE", trainer: "ANNA" },
        ],
      },
      {
        time: "1:00 PM",
        classes: [
          { workout: "INTERMEDIATE", trainer: "ANNA" },
          { workout: "BOOT CAMP", trainer: "ANNA" },
          { workout: "BEGGINERS", trainer: "SHEREEN" },
          { workout: "SPINNING", trainer: "ANNA" },
          { workout: "BOXING", trainer: "MANALI" },
          { workout: "INTERMEDIATE", trainer: "ANNA" },
        ],
      },
      {
        time: "2:00 PM",
        classes: [
          { workout: "TRX", trainer: "ANNA" },
          { workout: "SPINNING", trainer: "ANNA" },
          { workout: "BOOT CAMP", trainer: "ANNA" },
          { workout: "CORE", trainer: "ANNA" },
          { workout: "INTERMEDIATE", trainer: "ANNA" },
          { workout: "BEGGINERS", trainer: "SHEREEN" },
        ],
      },
    ],
  };

  const days = [
    "SUNDAY",
    "MONDAY",
    "TUESDAY",
    "WEDNESDAY",
    "THURSDAY",
    "FRIDAY",
  ];

  return (
    <>
      {/* Hero/Header Section */}
      <section className="relative h-[350px] md:h-[400px] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              "url(https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)",
          }}
        >
          <div className="absolute inset-0 bg-black/70"></div>
        </div>
        {/* Content */}
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-4 flex items-center justify-center">
            <span className="block w-8 h-1 bg-orange-500 mr-2"></span>
            <span className="mr-2 text-white">SCHEDULE</span>
            {/* <span className="text-orange-500">CHEDULE</span> */}
            <span className="block w-8 h-1 bg-orange-500 mr-2"></span>
          </h1>
          <h2 className="text-2xl md:text-3xl font-light text-white">
            BUILDING A COMMUNITY OF ATHLETIC WOMEN
          </h2>
        </div>
      </section>

      {/* Schedule Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          {/* AM/PM Toggle */}
          <div className="flex justify-end mt-8 mb-8">
            <div className="flex bg-gray-100 rounded-full p-1">
              <button
                onClick={() => setSelectedPeriod("AM")}
                className={`px-8 py-3 rounded-full font-semibold transition-all duration-300 ${
                  selectedPeriod === "AM"
                    ? "bg-orange-500 text-white shadow-lg"
                    : "text-gray-600 hover:text-orange-500"
                }`}
              >
                AM
              </button>
              <button
                onClick={() => setSelectedPeriod("PM")}
                className={`px-8 py-3 rounded-full font-semibold transition-all duration-300 ${
                  selectedPeriod === "PM"
                    ? "bg-orange-500 text-white shadow-lg"
                    : "text-gray-600 hover:text-orange-500"
                }`}
              >
                PM
              </button>
            </div>
          </div>

          {/* Schedule Grid */}
          <div className="overflow-x-auto">
            <div className="min-w-[800px]">
              {/* Header Row */}
              <div className="grid grid-cols-7 gap-2 mb-4">
                <div className="bg-black text-white p-4 text-center font-bold"></div>
                {days.map((day) => (
                  <div
                    key={day}
                    className="bg-black text-white p-4 text-center font-bold text-sm"
                  >
                    {day}
                  </div>
                ))}
              </div>

              {/* Schedule Rows */}
              {scheduleData[selectedPeriod].map((timeSlot, timeIndex) => (
                <div key={timeIndex} className="grid grid-cols-7 gap-2 mb-2">
                  {/* Time Column */}
                  <div className="bg-black text-white p-4 text-center font-bold text-sm flex items-center justify-center">
                    {timeSlot.time}
                  </div>
                  {/* Class Columns */}
                  {timeSlot.classes.map((classItem, dayIndex) => (
                    <div
                      key={dayIndex}
                      className={`p-4 text-center min-h-[100px] flex flex-col items-center justify-center transition-all duration-300 hover:shadow-lg ${
                        classItem
                          ? "bg-gray-100 hover:bg-orange-50 cursor-pointer"
                          : "bg-gray-50"
                      }`}
                    >
                      {classItem && (
                        <>
                          {getWorkoutIcon(classItem.workout)}
                          <div className="mt-2">
                            <div className="font-bold text-xs text-black mb-1">
                              {classItem.workout}
                            </div>
                            <div className="text-xs text-orange-500 font-medium">
                              ({classItem.trainer})
                            </div>
                          </div>
                        </>
                      )}
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Promo Banner */}
      <section className="w-full bg-orange-500 py-10 px-4 flex flex-col md:flex-row items-center justify-between">
        <div className="text-white text-3xl md:text-4xl font-bold mb-4 md:mb-0">
          Fitness Classes This Summer.
          <br className="hidden md:block" />
          Pay Now & GET 35% Discount
        </div>
        <Link to="/aboutus">
        <button className="mt-4 md:mt-0 bg-transparent border-2 border-white text-white px-10 py-3 rounded-full text-lg font-semibold hover:bg-white hover:text-orange-500 transition-all duration-300">
          READ MORE
        </button>
      </section>
    </>
  );
};

export default Schedule;
