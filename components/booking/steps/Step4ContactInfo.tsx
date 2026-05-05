import { BookingData } from '../BookingForm';
import { User, Phone, Mail, MapPin, Notebook as NoteIcon } from 'lucide-react';

export default function Step4ContactInfo({
  data,
  updateFields,
  onBack,
  isSubmitting,
}: {
  data: BookingData;
  updateFields: (fields: Partial<BookingData>) => void;
  onBack: () => void;
  isSubmitting: boolean;
}) {
  return (
    <div className="animate-in fade-in slide-in-from-right-4 duration-500">
      <h2 className="text-3xl font-bold text-gray-900 mb-2">Final Details</h2>
      <p className="text-gray-600 mb-8">Confirm your booking and enter your contact information.</p>

      {/* Summary Box */}
      <div className="bg-blue-50 rounded-2xl p-6 border border-blue-100 mb-8 grid grid-cols-2 gap-4 text-sm">
        <div>
          <p className="text-gray-400 font-bold uppercase text-[10px] tracking-widest mb-1">Service</p>
          <p className="font-bold text-trust-blue">{data.service} - {data.subService}</p>
        </div>
        <div>
          <p className="text-gray-400 font-bold uppercase text-[10px] tracking-widest mb-1">Appointment</p>
          <p className="font-bold text-trust-blue">{data.date} at {data.time}</p>
        </div>
      </div>

      <div className="space-y-4">
        <div className="relative">
          <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-2 px-1">Full Name</label>
          <div className="relative group">
            <User className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-trust-blue transition-colors" size={20} />
            <input
              type="text"
              required
              placeholder="John Doe"
              value={data.name}
              onChange={(e) => updateFields({ name: e.target.value })}
              className="w-full pl-12 pr-4 py-4 bg-gray-50 border-2 border-transparent rounded-2xl focus:bg-white focus:border-trust-blue focus:outline-none transition-all"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="relative">
            <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-2 px-1">Phone Number</label>
            <div className="relative group">
              <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-trust-blue transition-colors" size={20} />
              <input
                type="tel"
                required
                placeholder="(718) 568-6597"
                value={data.phone}
                onChange={(e) => updateFields({ phone: e.target.value })}
                className="w-full pl-12 pr-4 py-4 bg-gray-50 border-2 border-transparent rounded-2xl focus:bg-white focus:border-trust-blue focus:outline-none transition-all"
              />
            </div>
          </div>
          <div className="relative">
            <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-2 px-1">Email Address</label>
            <div className="relative group">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-trust-blue transition-colors" size={20} />
              <input
                type="email"
                required
                placeholder="john@example.com"
                value={data.email}
                onChange={(e) => updateFields({ email: e.target.value })}
                className="w-full pl-12 pr-4 py-4 bg-gray-50 border-2 border-transparent rounded-2xl focus:bg-white focus:border-trust-blue focus:outline-none transition-all"
              />
            </div>
          </div>
        </div>

        <div className="relative">
          <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-2 px-1">Service Address (Optional)</label>
          <div className="relative group">
            <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-trust-blue transition-colors" size={20} />
            <input
              type="text"
              placeholder="123 Throop Ave, Brooklyn, NY"
              value={data.address}
              onChange={(e) => updateFields({ address: e.target.value })}
              className="w-full pl-12 pr-4 py-4 bg-gray-50 border-2 border-transparent rounded-2xl focus:bg-white focus:border-trust-blue focus:outline-none transition-all"
            />
          </div>
        </div>

        <div className="relative">
          <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-2 px-1">Additional Notes (Optional)</label>
          <div className="relative group">
            <NoteIcon className="absolute left-4 top-4 text-gray-400 group-focus-within:text-trust-blue transition-colors" size={20} />
            <textarea
              placeholder="Tell us more about your situation..."
              value={data.notes}
              onChange={(e) => updateFields({ notes: e.target.value })}
              rows={3}
              className="w-full pl-12 pr-4 py-4 bg-gray-50 border-2 border-transparent rounded-2xl focus:bg-white focus:border-trust-blue focus:outline-none transition-all resize-none"
            ></textarea>
          </div>
        </div>
      </div>
      
      <p className="mt-8 text-[10px] text-gray-400 text-center leading-relaxed">
        By clicking "Confirm Booking", you agree to our Terms of Service and Privacy Policy. Our team will contact you shortly to confirm arrival details.
      </p>
    </div>
  );
}
