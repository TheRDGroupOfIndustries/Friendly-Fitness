import React, { useState } from "react";
import { Dumbbell, Target, Bike, Zap, Users, Activity } from "lucide-react";

const Schedule: React.FC = () => {
  const [selectedPeriod, setSelectedPeriod] = useState<"AM" | "PM">("AM");

  const getWorkoutIcon = (workout: string) => {
    switch (workout.toLowerCase()) {
      case "intermediate":
        return <Dumbbell className="w-8 h-8" style={{ color: "#090E26" }} />;
      case "trx":
        return <Target className="w-8 h-8" style={{ color: "#090E26" }} />;
      case "spinning":
        return <Bike className="w-8 h-8" style={{ color: "#090E26" }} />;
      case "boot camp":
        return <Zap className="w-8 h-8" style={{ color: "#090E26" }} />;
      case "begginers":
        return <Users className="w-8 h-8" style={{ color: "#090E26" }} />;
      case "boxing":
        return <Activity className="w-8 h-8" style={{ color: "#090E26" }} />;
      case "core":
        return <Target className="w-8 h-8" style={{ color: "#090E26" }} />;
      default:
        return <Dumbbell className="w-8 h-8" style={{ color: "#090E26" }} />;
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
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="relative inline-block mb-8">
            <h2
              className="text-5xl md:text-7xl font-bold text-black mb-4 text-center"
              id="title"
            >
              <span className="text-black">T</span>
              <span style={{ color: "#090E26" }}>IMETABLE</span>
            </h2>
            {/* <div className="absolute -top-4 -left-8 w-16 h-1 transform -rotate-45" style={{ backgroundColor: '#090E26' }}></div>
            <div className="absolute -bottom-4 -right-8 w-16 h-1 transform -rotate-45" style={{ backgroundColor: '#090E26' }}></div> */}
          </div>
          <h3 className="text-2xl text-gray-800 mb-4 text-center">
            LOREM IPSUM DOLOR SIT AMET
          </h3>
          <p className="text-gray-600 max-w-2xl mx-auto text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestib ulum
            porttitor egestas orci, vinec at velit vestibulum.
          </p>
        </div>
        {/* AM/PM Toggle */}
        <div className="flex justify-end mt-8 mb-8">
          <div className="flex bg-gray-100 rounded-full p-1">
            <button
              onClick={() => setSelectedPeriod("AM")}
              className={`px-8 py-3 rounded-full font-semibold transition-all duration-300 ${
                selectedPeriod === "AM" ? "" : ""
              }`}
              style={
                selectedPeriod === "AM"
                  ? {
                      backgroundColor: "#090E26",
                      color: "#fff",
                      boxShadow: "0 4px 24px 0 #090E2620",
                    }
                  : { color: "#090E26", backgroundColor: "transparent" }
              }
              onMouseOver={(e) => {
                if (selectedPeriod !== "AM") {
                  e.currentTarget.style.color = "#fff";
                  e.currentTarget.style.backgroundColor = "#090E26";
                }
              }}
              onMouseOut={(e) => {
                if (selectedPeriod !== "AM") {
                  e.currentTarget.style.color = "#090E26";
                  e.currentTarget.style.backgroundColor = "transparent";
                }
              }}
            >
              AM
            </button>
            <button
              onClick={() => setSelectedPeriod("PM")}
              className={`px-8 py-3 rounded-full font-semibold transition-all duration-300 ${
                selectedPeriod === "PM" ? "" : ""
              }`}
              style={
                selectedPeriod === "PM"
                  ? {
                      backgroundColor: "#090E26",
                      color: "#fff",
                      boxShadow: "0 4px 24px 0 #090E2620",
                    }
                  : { color: "#090E26", backgroundColor: "transparent" }
              }
              onMouseOver={(e) => {
                if (selectedPeriod !== "PM") {
                  e.currentTarget.style.color = "#fff";
                  e.currentTarget.style.backgroundColor = "#090E26";
                }
              }}
              onMouseOut={(e) => {
                if (selectedPeriod !== "PM") {
                  e.currentTarget.style.color = "#090E26";
                  e.currentTarget.style.backgroundColor = "transparent";
                }
              }}
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
                      classItem ? "bg-gray-100 cursor-pointer" : "bg-gray-50"
                    }`}
                    style={classItem ? {} : {}}
                    onMouseOver={(e) => {
                      if (classItem) {
                        e.currentTarget.style.backgroundColor = "#090E2610";
                      }
                    }}
                    onMouseOut={(e) => {
                      if (classItem) {
                        e.currentTarget.style.backgroundColor = "";
                      }
                    }}
                  >
                    {classItem && (
                      <>
                        {getWorkoutIcon(classItem.workout)}
                        <div className="mt-2">
                          <div className="font-bold text-xs text-black mb-1">
                            {classItem.workout}
                          </div>
                          <div
                            className="text-xs font-medium"
                            style={{ color: "#090E26" }}
                          >
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
  );
};

export default Schedule;
