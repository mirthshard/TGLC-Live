import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Shield,
  QrCode,
  Smartphone,
  CheckCircle2,
  Lock,
  Sparkles,
  Wifi,
  Copy,
  Check,
} from 'lucide-react';
import { PortalUser } from '../../services/supabaseClient';

interface SovereignPassCardProps {
  user: PortalUser;
}

export const SovereignPassCard: React.FC<SovereignPassCardProps> = ({ user }) => {
  const [walletAddedToast, setWalletAddedToast] = useState(false);
  const [isNfcActive, setIsNfcActive] = useState(false);
  const [nfcSuccess, setNfcSuccess] = useState(false);

  const handleAddToWallet = () => {
    setWalletAddedToast(true);
    setTimeout(() => setWalletAddedToast(false), 3500);
  };

  const handleSimulateNfc = () => {
    setIsNfcActive(true);
    setTimeout(() => {
      setIsNfcActive(false);
      setNfcSuccess(true);
      setTimeout(() => setNfcSuccess(false), 3000);
    }, 1500);
  };

  return (
    <div className="bg-[#0E1117] border border-[#232731] p-6 lg:p-8 space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-[#1E222D]">
        <div>
          <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#CFA85E]">
            Biometric Credential Token
          </span>
          <h2 className="font-serif text-2xl text-[#F4F1EA] font-light">Sovereign Member Pass</h2>
          <p className="text-xs text-[#8A95A8] font-light mt-0.5">
            Encrypted cryptographic keycard for private airport aprons, members' salons, and secure residence perimeters.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={handleAddToWallet}
            className="px-4 py-2.5 bg-[#171C26] hover:bg-[#202735] text-[#CFA85E] border border-[#2B3547] text-xs font-mono uppercase tracking-wider flex items-center gap-2 transition-colors"
          >
            <Smartphone className="w-3.5 h-3.5" /> Add to Apple Wallet
          </button>
          <button
            onClick={handleSimulateNfc}
            disabled={isNfcActive}
            className="px-4 py-2.5 bg-[#CFA85E] hover:bg-[#DBC17D] text-[#090B0E] font-serif text-xs uppercase tracking-wider font-semibold flex items-center gap-2 transition-colors"
          >
            <Wifi className="w-3.5 h-3.5" />
            {isNfcActive ? 'Broadcasting NFC...' : 'Test NFC Clearance'}
          </button>
        </div>
      </div>

      {/* Notifications */}
      <AnimatePresence>
        {walletAddedToast && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            className="p-3.5 bg-[#14231E] border border-[#2B6049] text-emerald-300 text-xs font-mono flex items-center gap-2"
          >
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            <span>Pass packet generated. Passbook file bound to principal device enclave.</span>
          </motion.div>
        )}
        {nfcSuccess && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            className="p-3.5 bg-[#15231C] border border-[#285736] text-emerald-300 text-xs font-mono flex items-center gap-2"
          >
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            <span>NFC Handshake Confirmed: Access Granted at RAF Northolt Gate 4 VIP Apron.</span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Luxury Black-Gold Digital Keycard */}
      <div className="flex justify-center py-4">
        <motion.div
          whileHover={{ scale: 1.01 }}
          className="relative w-full max-w-md aspect-[1.586/1] bg-gradient-to-br from-[#12151D] via-[#0B0D13] to-[#171B26] border border-[#B98633]/60 p-6 sm:p-7 shadow-2xl overflow-hidden flex flex-col justify-between"
        >
          {/* Subtle Ambient Gold Shimmer Beam */}
          <div className="absolute -top-12 -right-12 w-48 h-48 bg-[#CFA85E]/10 rounded-full blur-2xl pointer-events-none" />

          {/* Top Bar */}
          <div className="flex items-center justify-between relative z-10">
            <div>
              <span className="font-serif text-sm tracking-[0.2em] uppercase text-[#F4F1EA] block">
                The Global Luxury Club
              </span>
              <span className="text-[9px] font-mono uppercase tracking-[0.16em] text-[#CFA85E] block mt-0.5">
                {user.tier}
              </span>
            </div>
            <div className="w-8 h-8 rounded-full border border-[#CFA85E]/50 flex items-center justify-center text-[#CFA85E]">
              <Shield className="w-4 h-4" />
            </div>
          </div>

          {/* Middle Chip & NFC Icon */}
          <div className="flex items-center justify-between relative z-10 my-auto">
            <div className="w-11 h-8 rounded-xs bg-gradient-to-r from-[#D4AF37] to-[#AA8222] border border-[#E8C86A] opacity-90 shadow-inner flex items-center justify-center">
              <div className="w-8 h-5 border border-[#684C0F] opacity-60 rounded-xs" />
            </div>
            <Wifi className={`w-5 h-5 ${isNfcActive ? 'text-emerald-400 animate-pulse' : 'text-[#8C7642]'}`} />
          </div>

          {/* Bottom Info */}
          <div className="flex items-end justify-between relative z-10 pt-2 border-t border-[#232938]">
            <div>
              <span className="text-[8px] font-mono uppercase tracking-widest text-[#7C879C] block">
                Principal Sovereign
              </span>
              <span className="font-serif text-base text-[#F4F1EA] font-medium tracking-wide block">
                {user.name}
              </span>
              <span className="text-[9px] font-mono text-[#8C96A8] mt-0.5 block">
                ID: {user.id.toUpperCase()} • Member Since {user.memberSince}
              </span>
            </div>

            <div className="text-right">
              <QrCode className="w-10 h-10 text-[#CFA85E] inline-block opacity-90" />
              <span className="text-[8px] font-mono text-[#7C879C] block mt-0.5">TLS-256</span>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
