import { ArrowRight } from 'lucide-react';

const SERVICES = [
  { id: 'car-lockout', name: 'Car Lockout', icon: '🚗', desc: 'Locked out of your vehicle?' },
  { id: 'car-key-replacement', name: 'Car Key Replacement', icon: '🔑', desc: 'Need a new car key?' },
  { id: 'ignition-repair', name: 'Ignition Repair', icon: '🔧', desc: 'Car ignition problems?' },
  { id: 'residential-lockout', name: 'Residential Lockout', icon: '🏠', desc: 'Locked out of home?' },
  { id: 'lock-replacement', name: 'Lock Replacement', icon: '🔒', desc: 'Replace existing locks?' },
  { id: 'lock-repair', name: 'Lock Repair', icon: '🛠️', desc: 'Fix broken/damaged locks?' },
  { id: 'lock-installation', name: 'Lock Installation', icon: '⚙️', desc: 'Install new door locks?' },
  { id: 'commercial-locksmith', name: 'Commercial Lockout', icon: '🏢', desc: 'Business/office lockout?' },
  { id: 'emergency', name: '24-Hour Emergency', icon: '🚨', desc: 'Urgent help needed now' },
];

export default function Step1ServiceSelection({
  selectedService,
  onSelect,
}: {
  selectedService: string;
  onSelect: (service: string) => void;
}) {
  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
      <h2 className="text-3xl font-bold text-gray-900 mb-2">What service do you need?</h2>
      <p className="text-gray-600 mb-8">Choose the category that best fits your situation.</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {SERVICES.map((s) => (
          <button
            key={s.id}
            type="button"
            onClick={() => onSelect(s.name)}
            className={`flex items-start gap-4 p-5 rounded-2xl border-2 text-left transition-all duration-300 group ${
              selectedService === s.name
                ? 'border-trust-blue bg-blue-50'
                : 'border-gray-100 bg-white hover:border-trust-blue/30 hover:bg-gray-50'
            }`}
          >
            <span className="text-4xl group-hover:scale-110 transition-transform duration-300">{s.icon}</span>
            <div className="flex-grow">
              <h3 className="font-bold text-gray-900 group-hover:text-trust-blue transition-colors">
                {s.name}
              </h3>
              <p className="text-xs text-gray-500 mt-1">{s.desc}</p>
            </div>
            <ArrowRight size={18} className="text-gray-300 group-hover:text-trust-blue group-hover:translate-x-1 transition-all" />
          </button>
        ))}
      </div>
    </div>
  );
}
