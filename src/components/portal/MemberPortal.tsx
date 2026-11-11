import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Lock,
  LogOut,
  User,
  Building2,
  Compass,
  Car,
  Database,
  ArrowRight,
  Shield,
  Sparkles,
  Radio,
  Menu,
  X,
} from 'lucide-react';
import { DEMO_USERS, PortalUser, UserRole, simulatedSupabase } from '../../services/supabaseClient';
import { PortalLogin } from './PortalLogin';
import { ClientDashboard } from './ClientDashboard';
import { AdminDashboard } from './AdminDashboard';
import { SecurityDashboard } from './SecurityDashboard';
import { FamilyOfficeDashboard } from './FamilyOfficeDashboard';

export const MemberPortal: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(() => {
    try {
      const stored = localStorage.getItem('tglc_sb_auth_session');
      return stored ? JSON.parse(stored) : true;
    } catch {
      return true;
    }
  });

  const [currentUser, setCurrentUser] = useState<PortalUser>(() => simulatedSupabase.auth.getUser());
  const [mobileRoleMenuOpen, setMobileRoleMenuOpen] = useState(false);

  useEffect(() => {
    const handleStoreChange = () => {
      const u = simulatedSupabase.auth.getUser();
      setCurrentUser(u);
    };
    window.addEventListener('tglc_store_change', handleStoreChange);
    return () => window.removeEventListener('tglc_store_change', handleStoreChange);
  }, []);

  const handleLoginSuccess = (user: PortalUser) => {
    setCurrentUser(user);
    setIsAuthenticated(true);
    localStorage.setItem('tglc_sb_auth_session', JSON.stringify(true));
  };

  const handleSignOut = async () => {
    await simulatedSupabase.auth.signOut();
    setIsAuthenticated(false);
    localStorage.setItem('tglc_sb_auth_session', JSON.stringify(false));
  };

  const handleRoleHotSwap = (role: UserRole) => {
    const swappedUser = simulatedSupabase.auth.switchRole(role);
    setCurrentUser(swappedUser);
    setMobileRoleMenuOpen(false);
  };

  const rolesList: { role: UserRole; label: string; shortLabel: string; icon: React.ReactNode }[] = [
    { role: 'client', label: 'Private Client (James)', shortLabel: 'Client', icon: <User className="w-3.5 h-3.5" /> },
    { role: 'family_office', label: 'Family Office (Elena)', shortLabel: 'Family Office', icon: <Building2 className="w-3.5 h-3.5" /> },
    { role: 'admin', label: 'Director / Admin (Camilla)', shortLabel: 'Admin', icon: <Compass className="w-3.5 h-3.5" /> },
    { role: 'security', label: 'Security Lead (Julian)', shortLabel: 'Security', icon: <Car className="w-3.5 h-3.5" /> },
  ];

  if (!isAuthenticated) {
    return <PortalLogin onLoginSuccess={handleLoginSuccess} />;
  }

  return (
    <div className="min-h-screen bg-[#07080B] text-[#F4F1EA] selection:bg-[#CFA85E]/30 selection:text-[#F4F1EA]">
      {/* Top Demo & Role Switcher Bar */}
      <div className="sticky top-0 z-40 bg-[#0A0D13]/95 border-b border-[#202633] backdrop-blur-md px-3 sm:px-6 py-2.5">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-3">
          {/* Left: Status & Engine info */}
          <div className="flex items-center gap-2.5 shrink-0">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-[#CFA85E] flex items-center gap-1">
              <Database className="w-3 h-3 hidden sm:inline" /> Supabase Reactive Store
            </span>
            <span className="text-[10px] font-mono text-[#747E91] hidden md:inline">
              • 6 Tables Synced
            </span>
          </div>

          {/* Center / Right: Desktop Switcher */}
          <div className="hidden lg:flex items-center gap-1.5">
            <span className="text-[10px] font-mono uppercase tracking-[0.12em] text-[#788295] mr-1">
              Demo Persona:
            </span>
            {rolesList.map((item) => {
              const isActive = currentUser.role === item.role;
              return (
                <button
                  key={item.role}
                  type="button"
                  onClick={() => handleRoleHotSwap(item.role)}
                  className={`flex items-center gap-1.5 px-3 py-1.5 text-[11px] font-mono transition-all border shrink-0 ${
                    isActive
                      ? 'bg-[#1C2330] text-[#CFA85E] border-[#CFA85E]/50 font-medium shadow-sm'
                      : 'bg-[#11141C] text-[#8690A3] border-transparent hover:border-[#272D3B] hover:text-[#C5CDDC]'
                  }`}
                >
                  {item.icon}
                  <span>{item.label}</span>
                </button>
              );
            })}
          </div>

          {/* Mobile Role Switcher Trigger + Sign Out */}
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => setMobileRoleMenuOpen(!mobileRoleMenuOpen)}
              className="lg:hidden flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono bg-[#141822] text-[#CFA85E] border border-[#273040] min-h-[40px]"
            >
              <User className="w-3.5 h-3.5" />
              <span>Role: {rolesList.find((r) => r.role === currentUser.role)?.shortLabel}</span>
            </button>

            <button
              type="button"
              onClick={handleSignOut}
              className="flex items-center gap-1 px-3 py-1.5 text-[11px] font-mono text-[#F39DA2] hover:text-white bg-[#221315] hover:bg-[#34181B] border border-[#482024] transition-colors shrink-0 min-h-[40px]"
              title="End session and return to credential gate"
            >
              <LogOut className="w-3 h-3" />
              <span className="hidden sm:inline">Log Out</span>
            </button>
          </div>
        </div>

        {/* Mobile Persona Dropdown Drawer */}
        <AnimatePresence>
          {mobileRoleMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden mt-2 pt-2 border-t border-[#1C222E] grid grid-cols-2 gap-2 pb-2 overflow-hidden"
            >
              {rolesList.map((item) => {
                const isActive = currentUser.role === item.role;
                return (
                  <button
                    key={item.role}
                    type="button"
                    onClick={() => handleRoleHotSwap(item.role)}
                    className={`flex items-center gap-2 p-2.5 text-xs font-mono text-left border ${
                      isActive
                        ? 'bg-[#1C2330] text-[#CFA85E] border-[#CFA85E]/50 font-medium'
                        : 'bg-[#11141C] text-[#8690A3] border-[#222836]'
                    }`}
                  >
                    {item.icon}
                    <div className="truncate">
                      <span className="block truncate font-medium">{item.shortLabel}</span>
                    </div>
                  </button>
                );
              })}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Main Role Content with Smooth Animation */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentUser.role}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
          >
            {currentUser.role === 'client' && <ClientDashboard user={currentUser} />}
            {currentUser.role === 'admin' && <AdminDashboard user={currentUser} />}
            {currentUser.role === 'security' && <SecurityDashboard user={currentUser} />}
            {currentUser.role === 'family_office' && <FamilyOfficeDashboard user={currentUser} />}
          </motion.div>
        </AnimatePresence>
      </main>
    </div>
  );
};
