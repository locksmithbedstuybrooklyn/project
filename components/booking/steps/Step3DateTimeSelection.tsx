import { BookingData } from '../BookingForm';
import { Calendar as CalendarIcon, Clock } from 'lucide-react';

const TIME_SLOTS = [
  '09:00 AM', '09:30 AM', '10:00 AM', '10:30 AM', '11:00 AM', '11:30 AM',
  '12:00 PM', '12:30 PM', '01:00 PM', '01:30 PM', '02:00 PM', '02:30 PM',
  '03:00 PM', '03:30 PM', '04:00 PM', '04:30 PM', '05:00 PM', '05:30 PM',
  '06:00 PM', '06:30 PM', '07:00 PM', '07:30 PM',
];

export default function Step3DateTimeSelection({
  date,
  time,
  updateFields,
  onBack,
  onNext,
}: {
  date: string;
  time: string;
  updateFields: (fields: Partial<BookingData>) => void;
  onBack: () => void;
  onNext: () => void;
}) {
  // Generate next 14 days
  const dates = Array.from({ length: 14 }, (_, i) => {
    const d = new Date();
    d.setDate(d.getDate() + i);
    return {
      full: d.toISOString().split('T')[0],
      dayName: d.toLocaleDateString('en-US', { weekday: 'short' }),
      dayNum: d.getDate(),
      monthName: d.toLocaleDateString('en-US', { month: 'short' }),
    };
  });

  return (
    <div className="animate-in fade-in slide-in-from-right-4 duration-500">
      <h2 className="text-3xl font-bold text-gray-900 mb-2">When do you need us?</h2>
      <p className="text-gray-600 mb-8">Choose your preferred date and time slot.</p>

      <div className="mb-8">
        <label className="flex items-center gap-2 text-sm font-bold text-gray-400 uppercase tracking-widest mb-4">
          <CalendarIcon size={16} /> Select Date
        </label>
        <div className="flex gap-3 overflow-x-auto pb-4 no-scrollbar">
          {dates.map((d) => (
            <button
              key={d.full}
              type="button"
              onClick={() => updateFields({ date: d.full })}
              className={`flex-shrink-0 flex flex-col items-center justify-center w-20 h-24 rounded-2xl border-2 transition-all duration-300 ${
                date === d.full
                  ? 'border-trust-blue bg-blue-50 text-trust-blue'
                  : 'border-gray-100 bg-white hover:border-gray-200'
              }`}
            >
              <span className="text-xs font-bold uppercase">{d.dayName}</span>
              <span className="text-2xl font-bold my-1">{d.dayNum}</span>
              <span className="text-xs opacity-60">{d.monthName}</span>
            </button>
          ))}
        </div>
      </div>

      <div>
        <label className="flex items-center gap-2 text-sm font-bold text-gray-400 uppercase tracking-widest mb-4">
          <Clock size={16} /> Select Time
        </label>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {TIME_SLOTS.map((t) => (
            <button
              key={t}
              type="button"
              onClick={() => updateFields({ time: t })}
              className={`py-3 rounded-xl border-2 font-bold text-sm transition-all duration-300 ${
                time === t
                  ? 'border-trust-blue bg-blue-50 text-trust-blue'
                  : 'border-gray-100 bg-white hover:border-gray-200 text-gray-600'
              }`}
            >
              {t}
            </button>
          ))}
        </div>
        <p className="mt-4 text-xs text-gray-400 text-center italic">
          * $25-50 emergency fee applies for bookings after 6:00 PM.
        </p>
      </div>
    </div>
  );
}
