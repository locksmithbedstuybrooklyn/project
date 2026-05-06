import React from 'react';
import { ShieldCheck, Award, CheckCircle2 } from 'lucide-react';

interface MasterBadgeProps {
  className?: string;
  variant?: 'compact' | 'full';
}

export default function MasterBadge({ className = '', variant = 'full' }: MasterBadgeProps) {
  if (variant === 'compact') {
    return (
      <div className={`flex items-center gap-2 px-3 py-1 bg-gray-900/50 backdrop-blur-md border border-white/10 rounded-full ${className}`}>
        <ShieldCheck size={14} className="text-safety-green" />
        <span className="text-[10px] font-black uppercase tracking-widest text-white italic">Master Verified</span>
      </div>
    );
  }

  return (
    <div className={`inline-flex flex-col gap-3 p-4 bg-gray-900 border border-gray-800 rounded-2xl shadow-2xl ${className}`}>
      <div className="flex items-center gap-3">
        <div className="p-2 bg-safety-green/20 rounded-lg">
          <Award size={20} className="text-safety-green" />
        </div>
        <div>
          <h4 className="text-xs font-black uppercase italic text-white tracking-tight">Master Technician Status</h4>
          <div className="flex items-center gap-1 mt-0.5">
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="w-1.5 h-1.5 rounded-full bg-safety-green" />
            ))}
            <span className="text-[8px] font-bold text-safety-green uppercase tracking-widest ml-1">Level 5 Auth</span>
          </div>
        </div>
      </div>
      
      <div className="space-y-2 pt-2 border-t border-gray-800">
        <div className="flex items-center gap-2 text-[9px] font-bold uppercase tracking-widest text-gray-400">
          <CheckCircle2 size={10} className="text-safety-green" />
          NYC License #2103442
        </div>
        <div className="flex items-center gap-2 text-[9px] font-bold uppercase tracking-widest text-gray-400">
          <CheckCircle2 size={10} className="text-safety-green" />
          NDE Certified Expert
        </div>
      </div>
    </div>
  );
}
