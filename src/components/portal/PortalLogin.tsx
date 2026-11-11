import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Lock,
  User,
  Key,
  ShieldCheck,
  Building2,
  Car,
  Compass,
  ArrowRight,
  Database,
  CheckCircle2,
  Sparkles,
} from 'lucide-react';
import { DEMO_USERS, PortalUser, UserRole, simulatedSupabase } from '../../services/supabaseClient';

interface PortalLoginProps {
  onLoginSuccess: (user: PortalUser) => void;
}

export const PortalLogin: React.FC<PortalLoginProps> = ({ onLoginSuccess }) => {
  const [email, setEmail] = useState('client@tglc.com');
  const [password, setPassword] = useState('james123');
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [showConfig, setShowConfig] = useState(false);
  const [customUrl, setCustomUrl] = useState('');
  const [customKey, setCustomKey] = useState('');
  const [configSaved, setConfigSaved] = useState(false);

  const rolePresets: {
    role: UserRole;
    name: string;
    title: string;
    email: string;
    pass: string;
    icon: React.ReactNode;
    color: string;
  }[] = [
    {
      role: 'client',
      name: 'James Ashford',
      title: 'Private Client (Principal)',
      email: 'client@tglc.com',
      pass: 'james123',
      icon: <User className="w-4 h-4 text-[#CFA85E]" />,
      color: 'border-[#CFA85E]/40 hover:border-[#CFA85E]',
    },
    {
      role: 'family_office',
      name: 'Elena Rostova',
      title: 'Family Office Executive',
      email: 'familyoffice@tglc.com',
      pass: 'office123',
      icon: <Building2 className="w-4 h-4 text-[#A3B8CC]" />,
      color: 'border-[#A3B8CC]/40 hover:border-[#A3B8CC]',
    },
    {
      role: 'admin',
      name: 'Camilla Vance-Moreau',
      title: 'Director of Private Office (Admin)',
      email: 'admin@tglc.com',
      pass: 'admin123',
      icon: <Compass className="w-4 h-4 text-[#D4AF37]" />,
      color: 'border-[#D4AF37]/40 hover:border-[#D4AF37]',
    },
    {
      role: 'security',
      name: 'Julian Sterling',
      title: 'Fleet & Tactical Security Lead',
      email: 'security@tglc.com',
      pass: 'secure123',
      icon: <Car className="w-4 h-4 text-[#8BA888]" />,
      color: 'border-[#8BA888]/40 hover:border-[#8BA888]',
    },
  ];

  const handleSelectPreset = (preset: (typeof rolePresets)[0]) => {
    setEmail(preset.email);
    setPassword(preset.pass);
    setErrorMessage(null);
  };

  const handleQuickLogin = (role: UserRole) => {
    setIsLoading(true);
    setErrorMessage(null);
    setTimeout(() => {
      const user = simulatedSupabase.auth.switchRole(role);
      setIsLoading(false);
      onLoginSuccess(user);
    }, 400);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setErrorMessage(null);

    try {
      const { user, error } = await simulatedSupabase.auth.signInWithPassword(email, password);
      if (error || !user) {
        setErrorMessage(error || 'Invalid credentials.');
        setIsLoading(false);
      } else {
        setTimeout(() => {
          setIsLoading(false);
          onLoginSuccess(user);
        }, 500);
      }
    } catch {
      setErrorMessage('Authentication service timeout. Please try again.');
      setIsLoading(false);
    }
  };

  const handleSaveCustomConfig = (e: React.FormEvent) => {
    e.preventDefault();
    if (customUrl.trim()) {
      localStorage.setItem('tglc_custom_supabase_url', customUrl.trim());
      localStorage.setItem('tglc_custom_supabase_key', customKey.trim());
      setConfigSaved(true);
      setTimeout(() => setConfigSaved(false), 2500);
    }
  };

  return (
    <div className="relative min-h-[90vh] flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-[#07080B] text-[#F4F1EA]">
      {/* Background ambient lighting */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#B98633]/8 rounded-full blur-[140px]" />
        <div className="absolute -bottom-20 left-1/3 w-[450px] h-[450px] bg-[#2E3842]/20 rounded-full blur-[160px]" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 w-full max-w-2xl bg-[#0D0F14]/95 border border-[#272B35] rounded-none p-6 sm:p-10 shadow-2xl backdrop-blur-xl"
      >
        {/* Header */}
        <div className="text-center mb-8 border-b border-[#232731] pb-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#151921] border border-[#2B313E] mb-4">
            <Lock className="w-3.5 h-3.5 text-[#CFA85E]" />
            <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-[#CFA85E]">
              Restricted Sovereign Client Portal
            </span>
          </div>

          <h2 className="font-serif text-2xl sm:text-3xl text-[#F4F1EA] tracking-wide font-light">
            The Global Luxury Club
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-[#8D96A8] font-light max-w-md mx-auto leading-relaxed">
            Encrypted session management via Supabase. Authenticate using your principal credentials or select a demonstration persona.
          </p>
        </div>

        {/* 1-Click Demo Persona Grid */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-3">
            <span className="text-[11px] font-mono uppercase tracking-[0.16em] text-[#A6AFC2]">
              Select Demo Persona (Instant Access)
            </span>
            <span className="text-[10px] font-mono text-[#CFA85E] flex items-center gap-1">
              <Sparkles className="w-3 h-3" /> Zero Setup Required
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {rolePresets.map((preset) => (
              <button
                key={preset.role}
                type="button"
                onClick={() => handleQuickLogin(preset.role)}
                className={`text-left p-3.5 bg-[#12151D] border transition-all duration-200 group flex items-start gap-3 hover:bg-[#181C26] ${preset.color}`}
              >
                <div className="p-2 bg-[#0A0C10] border border-[#272C38] shrink-0 mt-0.5">
                  {preset.icon}
                </div>
                <div className="min-w-0 flex-1">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-serif font-medium text-[#F4F1EA] group-hover:text-[#CFA85E] transition-colors truncate">
                      {preset.name}
                    </span>
                    <ArrowRight className="w-3 h-3 text-[#5A6376] group-hover:text-[#CFA85E] group-hover:translate-x-0.5 transition-all" />
                  </div>
                  <p className="text-[10px] text-[#8690A3] truncate mt-0.5">{preset.title}</p>
                  <p className="text-[9px] font-mono text-[#5F697E] mt-1 truncate">
                    {preset.email} • {preset.pass}
                  </p>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Manual Credentials Form */}
        <div className="relative my-6">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-[#232731]" />
          </div>
          <div className="relative flex justify-center text-[10px] font-mono uppercase tracking-[0.2em] text-[#697488]">
            <span className="bg-[#0D0F14] px-3">Or Authenticate Manually</span>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-[11px] font-mono uppercase tracking-[0.14em] text-[#9EA8BC] mb-1.5">
              Principal Identity / Email
            </label>
            <div className="relative">
              <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#5F697E]" />
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="client@tglc.com"
                className="w-full pl-10 pr-3.5 py-2.5 bg-[#12151D] border border-[#272C38] text-xs font-mono text-[#F4F1EA] focus:outline-none focus:border-[#CFA85E] transition-colors placeholder:text-[#4A5364]"
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between mb-1.5">
              <label className="block text-[11px] font-mono uppercase tracking-[0.14em] text-[#9EA8BC]">
                Private Passphrase
              </label>
              <span className="text-[10px] text-[#717C92] font-mono">256-bit TLS Encrypted</span>
            </div>
            <div className="relative">
              <Key className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#5F697E]" />
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••••••"
                className="w-full pl-10 pr-3.5 py-2.5 bg-[#12151D] border border-[#272C38] text-xs font-mono text-[#F4F1EA] focus:outline-none focus:border-[#CFA85E] transition-colors placeholder:text-[#4A5364]"
              />
            </div>
          </div>

          {errorMessage && (
            <motion.div
              initial={{ opacity: 0, y: -4 }}
              animate={{ opacity: 1, y: 0 }}
              className="p-3 bg-[#2A1416] border border-[#8C2E34] text-[#F39DA2] text-xs font-mono"
            >
              {errorMessage}
            </motion.div>
          )}

          <div className="pt-2">
            <button
              type="submit"
              disabled={isLoading}
              className="w-full py-3 bg-[#CFA85E] hover:bg-[#DBC17D] disabled:opacity-50 text-[#090B0E] font-serif text-sm tracking-widest uppercase transition-all duration-200 font-medium flex items-center justify-center gap-2"
            >
              {isLoading ? (
                <span className="inline-block w-4 h-4 border-2 border-[#090B0E] border-t-transparent rounded-full animate-spin" />
              ) : (
                <>
                  <ShieldCheck className="w-4 h-4" /> Authenticate Session
                </>
              )}
            </button>
          </div>
        </form>

        {/* Optional Supabase Cloud Binding Accordion */}
        <div className="mt-8 pt-6 border-t border-[#232731]">
          <button
            type="button"
            onClick={() => setShowConfig(!showConfig)}
            className="w-full flex items-center justify-between text-left text-xs font-mono text-[#8D96A8] hover:text-[#CFA85E] transition-colors"
          >
            <span className="flex items-center gap-2">
              <Database className="w-3.5 h-3.5 text-[#CFA85E]" />
              Supabase Storage Engine: <span className="text-[#CFA85E]">Active Reactive Store</span>
            </span>
            <span className="text-[10px] tracking-widest uppercase underline">
              {showConfig ? 'Close Settings' : 'Configure Custom Cloud Keys'}
            </span>
          </button>

          <AnimatePresence>
            {showConfig && (
              <motion.form
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                onSubmit={handleSaveCustomConfig}
                className="mt-4 pt-4 border-t border-[#1C2029] space-y-3 overflow-hidden"
              >
                <p className="text-[11px] text-[#788296] leading-relaxed">
                  The portal operates seamlessly with zero configuration via the reactive in-memory Supabase store. You can optionally link your live Supabase project below:
                </p>

                <div>
                  <label className="block text-[10px] font-mono uppercase tracking-[0.12em] text-[#9EA8BC] mb-1">
                    Supabase Project URL
                  </label>
                  <input
                    type="url"
                    value={customUrl}
                    onChange={(e) => setCustomUrl(e.target.value)}
                    placeholder="https://xyzcompany.supabase.co"
                    className="w-full px-3 py-2 bg-[#12151D] border border-[#272C38] text-xs font-mono text-[#F4F1EA] focus:outline-none focus:border-[#CFA85E]"
                  />
                </div>

                <div>
                  <label className="block text-[10px] font-mono uppercase tracking-[0.12em] text-[#9EA8BC] mb-1">
                    Anon / Public API Key
                  </label>
                  <input
                    type="password"
                    value={customKey}
                    onChange={(e) => setCustomKey(e.target.value)}
                    placeholder="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
                    className="w-full px-3 py-2 bg-[#12151D] border border-[#272C38] text-xs font-mono text-[#F4F1EA] focus:outline-none focus:border-[#CFA85E]"
                  />
                </div>

                <div className="flex items-center justify-between pt-2">
                  <button
                    type="submit"
                    className="px-4 py-2 bg-[#1C222E] hover:bg-[#252E3E] text-xs font-mono text-[#CFA85E] border border-[#2E3747] transition-colors"
                  >
                    Save Custom Supabase Keys
                  </button>
                  {configSaved && (
                    <span className="text-xs font-mono text-emerald-400 flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5" /> Keys Recorded
                    </span>
                  )}
                </div>
              </motion.form>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </div>
  );
};
