import { ChevronLeft, ArrowRight } from 'lucide-react';

const SUB_SERVICES: Record<string, string[]> = {
  'Car Lockout': ['Car door locked', 'Trunk locked', 'Keys locked in running car', 'Lost all car keys'],
  'Car Key Replacement': ['Standard car key', 'Transponder key (chip key)', 'Key fob replacement', 'Remote key programming'],
  'Ignition Repair': ['Key stuck in ignition', 'Ignition won\'t turn', 'Ignition switch replacement', 'Ignition cylinder repair'],
  'Residential Lockout': ['Front door locked', 'Apartment door locked', 'Back/side door locked', 'Lost all house keys'],
  'Lock Replacement': ['Single lock replacement', 'Multiple locks (2-4)', 'Multiple locks (5+)', 'Deadbolt replacement'],
  'Lock Repair': ['Lock won\'t open', 'Lock is stuck', 'Lock is damaged', 'Lock maintenance needed'],
  'Lock Installation': ['Single lock installation', 'Multiple locks (2-4)', 'Multiple locks (5+)', 'High-security lock installation'],
  'Commercial Lockout': ['Office door locked', 'Building entrance locked', 'Safe/vault locked', 'Multiple locations'],
  '24-Hour Emergency': ['Urgent - within 30 minutes', 'ASAP - within 1 hour', 'Today - within 4 hours', 'Tomorrow - scheduled'],
};

export default function Step2SubServiceSelection({
  parentService,
  selectedSubService,
  onSelect,
  onBack,
}: {
  parentService: string;
  selectedSubService: string;
  onSelect: (subService: string) => void;
  onBack: () => void;
}) {
  const options = SUB_SERVICES[parentService] || SUB_SERVICES['24-Hour Emergency'];

  return (
    <div className="animate-in fade-in slide-in-from-right-4 duration-500">
      <button
        type="button"
        onClick={onBack}
        className="flex items-center gap-2 text-gray-500 font-bold hover:text-trust-blue transition-colors mb-6"
      >
        <ChevronLeft size={20} /> Change Service
      </button>

      <h2 className="text-3xl font-bold text-gray-900 mb-2">Choose your specific need</h2>
      <p className="text-gray-600 mb-8">Select the option that matches your situation.</p>

      <div className="space-y-3">
        {options.map((opt) => (
          <button
            key={opt}
            type="button"
            onClick={() => onSelect(opt)}
            className={`w-full flex items-center justify-between p-5 rounded-2xl border-2 text-left transition-all duration-300 group ${
              selectedSubService === opt
                ? 'border-trust-blue bg-blue-50'
                : 'border-gray-100 bg-white hover:border-trust-blue/30 hover:bg-gray-50'
            }`}
          >
            <span className="font-bold text-gray-900 group-hover:text-trust-blue transition-colors">
              {opt}
            </span>
            <ArrowRight size={18} className="text-gray-300 group-hover:text-trust-blue group-hover:translate-x-1 transition-all" />
          </button>
        ))}
      </div>
    </div>
  );
}
