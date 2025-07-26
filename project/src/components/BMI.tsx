import React, { useState } from 'react';

const getBMICategory = (bmi: number) => {
  if (bmi < 18.5) return 'Underweight';
  if (bmi < 24.9) return 'Normal weight';
  if (bmi < 29.9) return 'Overweight';
  return 'Obese';
};

const BMI: React.FC = () => {
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [bmi, setBmi] = useState<number | null>(null);
  const [category, setCategory] = useState('');

  const handleCalculate = (e: React.FormEvent) => {
    e.preventDefault();
    const h = parseFloat(height) / 100;
    const w = parseFloat(weight);
    if (!h || !w) {
      setBmi(null);
      setCategory('');
      return;
    }
    const bmiValue = w / (h * h);
    setBmi(Number(bmiValue.toFixed(1)));
    setCategory(getBMICategory(bmiValue));
  };

  return (
    <section className="py-16 sm:py-24 bg-gray-50">
      <div className="max-w-3xl mx-auto px-2 sm:px-4">
        <div className="bg-white rounded-2xl shadow-2xl p-8 sm:p-12">
          <div className="text-center mb-10 sm:mb-14">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-[#090E26] mb-2 sm:mb-4">BMI Calculator</h2>
            <div className="mx-auto w-16 h-1 mb-6" style={{ backgroundColor: '#090E26', borderRadius: '4px' }}></div>
            <p className="text-gray-600 max-w-md mx-auto text-lg sm:text-xl">
              Enter your height and weight to calculate your Body Mass Index and see your health category.
            </p>
          </div>
          <form onSubmit={handleCalculate} className="flex flex-col gap-6 sm:gap-8">
            <div className="flex flex-col md:flex-row gap-6 min-w-0 w-full">
              <input
                type="number"
                min="0"
                step="0.1"
                value={height}
                onChange={e => setHeight(e.target.value)}
                placeholder="Height (cm)"
                className="flex-1 w-full min-w-0 border-2 border-[#090E26] rounded-lg px-4 sm:px-6 py-3 sm:py-5 text-lg sm:text-xl focus:outline-none focus:ring-2 focus:ring-[#090E26] placeholder:text-[#090E26] bg-gray-50"
                required
              />
              <input
                type="number"
                min="0"
                step="0.1"
                value={weight}
                onChange={e => setWeight(e.target.value)}
                placeholder="Weight (kg)"
                className="flex-1 w-full min-w-0 border-2 border-[#090E26] rounded-lg px-4 sm:px-6 py-3 sm:py-5 text-lg sm:text-xl focus:outline-none focus:ring-2 focus:ring-[#090E26] placeholder:text-[#090E26] bg-gray-50"
                required
              />
            </div>
            <button
              type="submit"
              className="text-white text-xl font-bold px-10 sm:px-16 py-4 sm:py-5 rounded-full shadow-lg transition-all duration-300 mx-auto bg-[#090E26] hover:bg-[#F97316] hover:text-[#090E26] border-2 border-[#090E26]"
            >
              Calculate BMI
            </button>
          </form>
          {bmi !== null && (
            <div className="mt-10 sm:mt-12 text-center bg-gray-100 rounded-xl p-6 shadow-inner">
              <div className="text-2xl sm:text-3xl font-bold mb-2" style={{ color: '#090E26' }}>
                Your BMI: {bmi}
              </div>
              <div className="text-lg sm:text-xl font-semibold text-[#090E26]">Category: {category}</div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default BMI;
