import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { DEMO_MEMBER_JAMES_ASHFORD, MEMBER_PRIVILEGES, TGLC_CONTACT } from '../../data/tglcData';
import { MemberProfile } from '../../types';
import {
  Lock,
  Send,
  Plus,
  CheckCircle,
  Plane,
  MessageSquare,
  ArrowUpRight,
} from 'lucide-react';

export const MemberPortal: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(true);
  const [activeTab, setActiveTab] = useState<
    'overview' | 'requests' | 'itinerary' | 'messages' | 'preferences' | 'privileges'
  >('overview');

  const [member, setMember] = useState<MemberProfile>(DEMO_MEMBER_JAMES_ASHFORD);

  const [isNewRequestOpen, setIsNewRequestOpen] = useState(false);
  const [requestTitle, setRequestTitle] = useState('');
  const [requestCategory, setRequestCategory] = useState('Travel & Aviation');
  const [requestNotes, setRequestNotes] = useState('');
  const [requestSubmitted, setRequestSubmitted] = useState(false);

  const [chatMessages, setChatMessages] = useState([
    {
      sender: 'Camilla Vance-Moreau',
      time: '14:20',
      text: 'Good afternoon, James. Your garden wing suite at Four Seasons Firenze is re-confirmed with non-feather bedding as noted in your dossier.',
    },
    {
      sender: 'James Ashford',
      time: '14:35',
      text: 'Thank you Camilla. Has Julian confirmed the morning departure pickup from Eaton Square?',
    },
    {
      sender: 'Camilla Vance-Moreau',
      time: '14:41',
      text: 'Yes—Julian confirms the Range Rover SV will be waiting outside the mews at 08:45 sharp, with luggage pre-cleared to Farnborough.',
    },
  ]);
  const [newMessageText, setNewMessageText] = useState('');

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newMessageText.trim()) return;

    const userMsg = {
      sender: 'James Ashford',
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      text: newMessageText,
    };

    setChatMessages((prev) => [...prev, userMsg]);
    setNewMessageText('');

    setTimeout(() => {
      setChatMessages((prev) => [
        ...prev,
        {
          sender: 'Camilla Vance-Moreau',
          time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
          text: 'Thank you James—note received. Reviewing directly with our duty team at 3rd Floor, 45 Albemarle Street now.',
        },
      ]);
    }, 900);
  };

  const handleCreateRequest = (e: React.FormEvent) => {
    e.preventDefault();
    if (!requestTitle.trim()) return;

    const newReq = {
      id: `REQ-${Math.floor(1050 + Math.random() * 50)}`,
      title: requestTitle,
      category: requestCategory,
      submittedDate: 'Just now',
      status: 'Assigned to Manager' as const,
      notes: requestNotes || 'Request logged and placed in priority care with Camilla Vance-Moreau.',
    };

    setMember((prev) => ({
      ...prev,
      activeRequests: [newReq, ...prev.activeRequests],
    }));

    setRequestSubmitted(true);
    setTimeout(() => {
      setRequestSubmitted(false);
      setIsNewRequestOpen(false);
      setRequestTitle('');
      setRequestNotes('');
      setActiveTab('requests');
    }, 1100);
  };

  if (!isAuthenticated) {
    return (
      <div className="bg-[#08090C] text-[#F4F1EA] min-h-[82vh] pt-12 pb-14 flex items-center justify-center px-6">
        <div className="w-full max-w-md bg-[#12141A] border border-[#242630] p-8 sm:p-10 text-center space-y-6">
          <div className="flex justify-center mb-2">
            <img
              src="/assets/aistudio/tglc_crest_transparent.png"
              alt="TGLC Crest"
              className="w-16 h-16 object-contain"
            />
          </div>
          <h2 className="font-serif text-3xl text-[#F4F1EA]">Private Member Access</h2>
          <p className="text-xs text-[#9C968A] leading-relaxed font-light">
            Enter your confidential member credentials to view active itineraries and household instructions.
          </p>
          <div className="space-y-3">
            <input
              type="text"
              placeholder="Member ID (e.g. MEM-8842)"
              defaultValue="MEM-8842 (James Ashford)"
              className="w-full bg-[#181A22] border border-[#2A2D38] px-3.5 py-2.5 text-xs text-[#F4F1EA] focus:outline-none focus:border-[#CFA85E]"
            />
            <button onClick={() => setIsAuthenticated(true)} className="btn-gold w-full py-3.5 text-xs">
              Sign In to Member Portal
            </button>
          </div>
          <p className="text-[11px] text-[#9C968A] tabular-nums">
            Private Member Desk: {TGLC_CONTACT.privateMemberLine}
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-[#08090C] text-[#F4F1EA] pt-6 sm:pt-8 pb-14 overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 space-y-8">
        {/* Cinematic Mayfair House Welcome Banner */}
        <section className="relative overflow-hidden border border-[#242630] bg-[#12141A] p-7 sm:p-10 shadow-2xl">
          <motion.img
            initial={{ scale: 1.05, opacity: 0.35 }}
            animate={{ scale: [1.05, 1, 1.04], opacity: 0.42 }}
            transition={{
              scale: { duration: 22, repeat: Infinity, ease: 'easeInOut' },
              opacity: { duration: 0.9 },
            }}
            src="/assets/aistudio/tglc_st_james_salon.jpg"
            alt="TGLC House Mayfair Member Lounge"
            className="absolute inset-0 w-full h-full object-cover brightness-105 contrast-105"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#08090C]/95 via-[#08090C]/75 to-[#08090C]/65" />

          <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
            <div className="flex items-start sm:items-center gap-5">
              <div className="hidden sm:flex w-16 h-16 bg-[#08090C] border border-[#8B672B] items-center justify-center shrink-0">
                <span className="font-serif text-xl tracking-[0.14em] text-[#CFA85E]">JA</span>
              </div>
              <div className="space-y-1.5">
                <div className="flex items-center gap-2.5 text-xs tracking-widest uppercase text-[#CFA85E]">
                  <Lock className="w-3.5 h-3.5" />
                  <span className="tabular-nums">
                    {member.tier} · Member Since {member.memberSince}
                  </span>
                </div>
                <h1 className="font-serif text-3xl sm:text-5xl text-[#F4F1EA]">
                  Good evening, {member.name.split(' ')[0]}.
                </h1>
                <p className="text-xs sm:text-sm text-[#D9D4CA] font-light tabular-nums">
                  Member ID: {member.id} · Belgravia & Mayfair W1S · Household Dossier Current
                </p>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-3 shrink-0">
              <button
                onClick={() => setIsNewRequestOpen(true)}
                className="btn-gold px-5 py-3 text-xs inline-flex items-center gap-2"
              >
                <Plus className="w-3.5 h-3.5" />
                <span>Submit New Request</span>
              </button>
              <button
                onClick={() => setActiveTab('messages')}
                className="btn-outline-gold px-4 py-3 text-xs inline-flex items-center gap-2"
              >
                <MessageSquare className="w-3.5 h-3.5 text-[#CFA85E]" />
                <span>Message Camilla</span>
              </button>
            </div>
          </div>
        </section>

        {/* Aligned Title Case Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto border-b border-[#222530] pb-3 text-xs sm:text-[13px] tracking-wide scrollbar-none">
          {[
            { id: 'overview' as const, label: 'Dashboard Overview' },
            { id: 'itinerary' as const, label: 'Active Itinerary (Florence)' },
            { id: 'requests' as const, label: `Concierge Requests (${member.activeRequests.length})` },
            { id: 'messages' as const, label: 'Direct Channel (Camilla)' },
            { id: 'preferences' as const, label: 'Saved Preferences' },
            { id: 'privileges' as const, label: 'Member Privileges' },
          ].map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`relative px-4 py-2 whitespace-nowrap transition-colors ${
                  isActive ? 'text-[#F4F1EA] font-medium' : 'text-[#9C968A] hover:text-[#F4F1EA]'
                }`}
              >
                <span>{tab.label}</span>
                {isActive && (
                  <motion.span
                    layoutId="portalActiveTab"
                    className="absolute inset-x-4 -bottom-3 h-[2px] bg-[#CFA85E]"
                    transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                  />
                )}
              </button>
            );
          })}
        </div>

        {/* Tab Views — Immediate Non-Blocking Transitions */}
        <div>
          {activeTab === 'overview' && (
            <motion.div
              key="overview"
              initial={{ opacity: 0.9, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.28 }}
              className="space-y-10"
            >
              {/* Current Itinerary Card with Large Florence Photography */}
              <div className="bg-[#12141A] border border-[#242630] shadow-xl overflow-hidden grid grid-cols-1 lg:grid-cols-12 group">
                <div className="lg:col-span-5 relative min-h-[260px] bg-[#181A22]">
                  <img
                    src="/assets/aistudio/florence_palazzo_courtyard.jpg"
                    alt="Florence palazzo courtyard private stay"
                    className="w-full h-full object-cover brightness-105 contrast-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#08090C]/80 via-transparent to-transparent" />
                  <span className="absolute bottom-4 left-4 text-[11px] uppercase tracking-widest text-[#DDB872] bg-[#08090C]/85 px-3 py-1 border border-[#8B672B]">
                    Next Departure · Florence
                  </span>
                </div>

                <div className="lg:col-span-7 p-6 sm:p-8 flex flex-col justify-between space-y-6">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-[#20232E]">
                    <div>
                      <span className="text-[11px] uppercase tracking-widest text-[#CFA85E]">
                        Immediate Movement
                      </span>
                      <h3 className="font-serif text-2xl sm:text-3xl text-[#F4F1EA] mt-0.5">
                        {member.upcomingItinerary.destination}
                      </h3>
                    </div>
                    <div className="sm:text-right">
                      <span className="text-xs uppercase tracking-wider text-[#F4F1EA] block tabular-nums">
                        {member.upcomingItinerary.dates}
                      </span>
                      <span className="text-[11px] text-[#CFA85E]">Confirmed Private Flight Charter</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs text-[#9C968A]">
                    <div className="p-4 bg-[#0D0F14] border border-[#20232E] space-y-1">
                      <span className="text-[10px] uppercase tracking-wider text-[#CFA85E] block">Aviation & FBO</span>
                      <p className="text-[#E5DFD3] font-normal">{member.upcomingItinerary.flightDetails}</p>
                    </div>
                    <div className="p-4 bg-[#0D0F14] border border-[#20232E] space-y-1">
                      <span className="text-[10px] uppercase tracking-wider text-[#CFA85E] block">Hotel Residence</span>
                      <p className="text-[#E5DFD3] font-normal">{member.upcomingItinerary.accommodation}</p>
                    </div>
                    <div className="p-4 bg-[#0D0F14] border border-[#20232E] space-y-1">
                      <span className="text-[10px] uppercase tracking-wider text-[#CFA85E] block">Chauffeur Status</span>
                      <p className="text-[#E5DFD3] font-light">{member.upcomingItinerary.chauffeurStatus}</p>
                    </div>
                  </div>

                  <div className="pt-2 border-t border-[#20232E] flex flex-wrap items-center justify-between gap-4">
                    <span className="text-xs text-[#9C968A]">
                      Four customised arrangements confirmed in Florence
                    </span>
                    <button
                      onClick={() => setActiveTab('itinerary')}
                      className="text-xs uppercase tracking-wider text-[#CFA85E] hover:text-[#DDB872] transition-colors flex items-center gap-1"
                    >
                      <span>View Complete Trip Dossier</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Upcoming London Arrangements + Visual Highlight */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                <div className="lg:col-span-7 space-y-6">
                  <div className="flex items-center justify-between pb-3 border-b border-[#222530]">
                    <h3 className="font-serif text-2xl sm:text-3xl text-[#F4F1EA]">
                      Upcoming Arrangements in London
                    </h3>
                    <span className="text-xs text-[#CFA85E]">Personal supervision</span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {member.upcomingArrangements.map((item, idx) => (
                      <motion.div
                        key={idx}
                        whileHover={{ y: -2 }}
                        transition={{ duration: 0.25 }}
                        className="p-6 bg-[#12141A] border border-[#242630] hover:border-[#8B672B] transition-colors space-y-3"
                      >
                        <div className="flex items-center justify-between text-xs text-[#CFA85E]">
                          <span className="uppercase tracking-wider tabular-nums">{item.date}</span>
                          <span className="text-[#F4F1EA] bg-[#181A22] border border-[#2A2D38] px-2 py-0.5 text-[10px] uppercase">
                            {item.status}
                          </span>
                        </div>
                        <h4 className="font-serif text-xl text-[#F4F1EA]">{item.venue}</h4>
                        <p className="text-xs text-[#9C968A] leading-relaxed font-light">{item.details}</p>
                        <div className="pt-2 text-[11px] text-[#CFA85E] border-t border-[#20232E]">
                          {item.type}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Second Large Picture: London Dining / Club Sanctuary */}
                <div className="lg:col-span-5 bg-[#12141A] border border-[#242630] overflow-hidden group">
                  <div className="aspect-[16/10] w-full overflow-hidden">
                    <img
                      src="/assets/aistudio/mayfair_fine_dining.jpg"
                      alt="Mayfair private dining evening arrangement"
                      className="w-full h-full object-cover brightness-105 contrast-105 group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                  <div className="p-6 space-y-2 border-t border-[#20232E]">
                    <span className="text-[11px] uppercase tracking-widest text-[#CFA85E]">
                      Mayfair & St James’s Desk
                    </span>
                    <h4 className="font-serif text-xl text-[#F4F1EA]">Your London Autumn Social Diary</h4>
                    <p className="text-xs text-[#9C968A] leading-relaxed font-light">
                      Preferred corner tables, private coat entries, and late driver holds have been registered ahead of your return from Tuscany.
                    </p>
                  </div>
                </div>
              </div>

              {/* Dedicated Lifestyle Director + Active Requests */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                <div className="lg:col-span-5 p-8 bg-[#12141A] border border-[#242630] space-y-5">
                  <span className="text-xs uppercase tracking-widest text-[#CFA85E]">
                    Dedicated Lifestyle Director
                  </span>
                  <div className="flex items-center gap-4">
                    <img
                      src={member.lifestyleManager.image}
                      alt={member.lifestyleManager.name}
                      className="w-16 h-16 object-cover object-top border border-[#8B672B]"
                    />
                    <div>
                      <h4 className="font-serif text-xl text-[#F4F1EA]">{member.lifestyleManager.name}</h4>
                      <p className="text-xs text-[#9C968A]">{member.lifestyleManager.role}</p>
                      <p className="text-xs text-[#CFA85E] tabular-nums mt-1">
                        {member.lifestyleManager.phone}
                      </p>
                    </div>
                  </div>
                  <p className="text-xs text-[#9C968A] leading-relaxed pt-3 border-t border-[#20232E] font-light">
                    Camilla sits at TGLC House, 3rd Floor, 45 Albemarle Street, London W1S 4JL and oversees all residence, dining, and charter movements for the Ashford household.
                  </p>
                  <button
                    onClick={() => setActiveTab('messages')}
                    className="btn-outline-gold w-full py-2.5 text-xs"
                  >
                    Open Direct Channel
                  </button>
                </div>

                <div className="lg:col-span-7 p-8 bg-[#12141A] border border-[#242630] space-y-4">
                  <div className="flex items-center justify-between pb-3 border-b border-[#20232E]">
                    <span className="text-xs uppercase tracking-widest text-[#CFA85E]">Active Requests</span>
                    <button
                      onClick={() => setActiveTab('requests')}
                      className="text-xs text-[#D9D4CA] hover:text-[#DDB872] transition-colors"
                    >
                      View All ({member.activeRequests.length}) →
                    </button>
                  </div>
                  <div className="space-y-3">
                    {member.activeRequests.slice(0, 3).map((req) => (
                      <div key={req.id} className="p-4 bg-[#0D0F14] border border-[#20232E] space-y-1.5">
                        <div className="flex items-center justify-between text-xs">
                          <span className="font-serif text-base text-[#F4F1EA]">{req.title}</span>
                          <span className="text-[#CFA85E] text-[10px] uppercase">{req.status}</span>
                        </div>
                        <p className="text-xs text-[#9C968A] line-clamp-1 font-light">{req.notes}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {activeTab === 'itinerary' && (
            <motion.div
              key="itinerary"
              initial={{ opacity: 0.9, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.28 }}
              className="space-y-8"
            >
              <div className="bg-[#12141A] border border-[#242630] overflow-hidden grid grid-cols-1 lg:grid-cols-12 group">
                <div className="lg:col-span-5 min-h-[280px] bg-[#181A22] overflow-hidden">
                  <img
                    src="/assets/aistudio/florence_palazzo_courtyard.jpg"
                    alt="Florence Journey Destination"
                    className="w-full h-full object-cover brightness-105 contrast-105 group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="lg:col-span-7 p-8 sm:p-10 space-y-6">
                  <span className="text-xs uppercase tracking-widest text-[#CFA85E]">
                    Detailed Journey Dossier
                  </span>
                  <h2 className="font-serif text-3xl sm:text-4xl text-[#F4F1EA]">
                    {member.upcomingItinerary.destination}
                  </h2>
                  <p className="text-sm text-[#D9D4CA] tabular-nums">
                    Travel Window: {member.upcomingItinerary.dates}
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-6 border-t border-[#20232E]">
                    <div className="space-y-3">
                      <h4 className="font-serif text-xl text-[#F4F1EA] flex items-center gap-2">
                        <Plane className="w-4 h-4 text-[#CFA85E]" />
                        <span>Flight Logistics</span>
                      </h4>
                      <p className="text-xs sm:text-sm text-[#9C968A] leading-relaxed font-light">
                        Aircraft: Bombardier Challenger 350 (9-seat configuration)
                        <br />
                        Departure: London Farnborough (EGLF) Private FBO
                        <br />
                        Arrival: Florence Peretola (LIRQ)
                        <br />
                        Catering: Mayfair deli morning hamper, cellar white, & seasonal fruit.
                      </p>
                    </div>

                    <div className="space-y-3">
                      <h4 className="font-serif text-xl text-[#F4F1EA]">Curated Daily Schedule</h4>
                      <ul className="space-y-2 text-xs sm:text-sm text-[#9C968A] font-light">
                        {member.upcomingItinerary.keyArrangements.map((item, i) => (
                          <li key={i} className="flex items-start gap-2.5">
                            <span className="w-1.5 h-1.5 bg-[#CFA85E] rotate-45 shrink-0 mt-2" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {activeTab === 'requests' && (
            <motion.div
              key="requests"
              initial={{ opacity: 0.9, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.28 }}
              className="space-y-8"
            >
              {/* Ashford Household Desk Visual Banner */}
              <div className="bg-[#12141A] border border-[#242630] overflow-hidden grid grid-cols-1 lg:grid-cols-12 group">
                <div className="lg:col-span-5 min-h-[210px] overflow-hidden bg-[#181A22]">
                  <img
                    src="/assets/aistudio/savile_row_bespoke.jpg"
                    alt="Ashford Household Mayfair Desk Coordination"
                    className="w-full h-full object-cover brightness-105 contrast-105 group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="lg:col-span-7 p-6 sm:p-8 flex flex-col justify-center space-y-2">
                  <span className="text-[11px] uppercase tracking-widest text-[#CFA85E]">
                    Household Turnaround Brief · Camilla Vance-Moreau
                  </span>
                  <h2 className="font-serif text-2xl sm:text-3xl text-[#F4F1EA]">
                    Direct Oversight Across Active Instructions
                  </h2>
                  <p className="text-xs sm:text-sm text-[#B5AFA3] font-light leading-relaxed">
                    Every request below is overseen personally from the 3rd Floor, 45 Albemarle Street desk with direct supplier billing settled through your pre-approved Eaton Square household account.
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-[#222530]">
                <h2 className="font-serif text-3xl text-[#F4F1EA]">Active Concierge Requests</h2>
                <button
                  onClick={() => setIsNewRequestOpen(true)}
                  className="btn-gold px-5 py-2.5 text-xs inline-flex items-center gap-2"
                >
                  <Plus className="w-3.5 h-3.5" />
                  <span>Submit New Request</span>
                </button>
              </div>

              <div className="space-y-4">
                {member.activeRequests.map((req) => (
                  <motion.div
                    key={req.id}
                    whileHover={{ y: -2 }}
                    transition={{ duration: 0.2 }}
                    className="p-6 bg-[#12141A] border border-[#242630] hover:border-[#8B672B] transition-colors space-y-3"
                  >
                    <div className="flex flex-wrap items-center justify-between gap-2 text-xs">
                      <div className="flex items-center gap-3">
                        <span className="text-[#CFA85E] tabular-nums">{req.id}</span>
                        <span className="text-[#8B672B]">·</span>
                        <span className="text-[#9C968A]">{req.submittedDate}</span>
                        <span className="text-[#8B672B]">·</span>
                        <span className="text-[#D9D4CA] uppercase tracking-wider">{req.category}</span>
                      </div>
                      <span className="px-2.5 py-0.5 bg-[#181A22] text-[#CFA85E] text-[10px] uppercase border border-[#8B672B]/50">
                        {req.status}
                      </span>
                    </div>
                    <h3 className="font-serif text-2xl text-[#F4F1EA]">{req.title}</h3>
                    <p className="text-xs sm:text-sm text-[#9C968A] leading-relaxed font-light">{req.notes}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {activeTab === 'messages' && (
            <motion.div
              key="messages"
              initial={{ opacity: 0.9, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.28 }}
              className="bg-[#12141A] border border-[#242630] p-6 sm:p-8 space-y-6"
            >
              <div className="flex items-center justify-between pb-4 border-b border-[#20232E]">
                <div className="flex items-center gap-3.5">
                  <img
                    src={member.lifestyleManager.image}
                    alt={member.lifestyleManager.name}
                    className="w-12 h-12 object-cover object-top border border-[#8B672B]"
                  />
                  <div>
                    <h3 className="font-serif text-xl text-[#F4F1EA]">{member.lifestyleManager.name}</h3>
                    <p className="text-xs text-[#CFA85E]">
                      Director of Private Office & Client Relations · Direct Member Channel
                    </p>
                  </div>
                </div>
                <span className="text-[11px] text-[#9C968A] hidden sm:block">Encrypted Member Line</span>
              </div>

              <div className="space-y-4 max-h-[420px] overflow-y-auto p-2">
                {chatMessages.map((msg, idx) => (
                  <div
                    key={idx}
                    className={`flex flex-col ${msg.sender === 'James Ashford' ? 'items-end' : 'items-start'}`}
                  >
                    <span className="text-[10px] text-[#9C968A] mb-1 tabular-nums">
                      {msg.sender} · {msg.time}
                    </span>
                    <div
                      className={`max-w-lg p-4 text-xs sm:text-sm leading-relaxed font-light ${
                        msg.sender === 'James Ashford'
                          ? 'bg-[#1D1B17] text-[#F4F1EA] border border-[#8B672B]'
                          : 'bg-[#181A22] text-[#D9D4CA] border border-[#2A2D38]'
                      }`}
                    >
                      {msg.text}
                    </div>
                  </div>
                ))}
              </div>

              <form onSubmit={handleSendMessage} className="pt-4 border-t border-[#20232E] flex gap-3">
                <input
                  type="text"
                  value={newMessageText}
                  onChange={(e) => setNewMessageText(e.target.value)}
                  placeholder="Write a message directly to Camilla Vance-Moreau..."
                  className="flex-1 bg-[#181A22] border border-[#2A2D38] focus:border-[#CFA85E] px-4 py-2.5 text-xs text-[#F4F1EA] focus:outline-none"
                />
                <button type="submit" className="btn-gold px-6 py-2.5 text-xs inline-flex items-center gap-2">
                  <span>Send</span>
                  <Send className="w-3.5 h-3.5" />
                </button>
              </form>
            </motion.div>
          )}

          {activeTab === 'preferences' && (
            <motion.div
              key="preferences"
              initial={{ opacity: 0.9, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.28 }}
              className="space-y-8"
            >
              {/* Fleet & Cabin Specification Visual Banner */}
              <div className="bg-[#12141A] border border-[#242630] overflow-hidden grid grid-cols-1 lg:grid-cols-12 group">
                <div className="lg:col-span-5 min-h-[210px] overflow-hidden bg-[#181A22]">
                  <img
                    src="/assets/aistudio/rolls-royce-cullinan-chauffeur-service-events_d3e6e421.webp"
                    alt="Rolls-Royce & Range Rover SV Household Chauffeur Fleet"
                    className="w-full h-full object-cover brightness-105 contrast-105 group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="lg:col-span-7 p-6 sm:p-8 flex flex-col justify-center space-y-2">
                  <span className="text-[11px] uppercase tracking-widest text-[#CFA85E]">
                    Fleet, Suites & Cellar Protocol
                  </span>
                  <h2 className="font-serif text-2xl sm:text-3xl text-[#F4F1EA]">
                    Pre-Cleared Across Every Movement
                  </h2>
                  <p className="text-xs sm:text-sm text-[#B5AFA3] font-light leading-relaxed">
                    Your standing household instructions travel privately ahead of your arrival—covering tarmac car staging, suite orientation, pillow fills, cellar pulls, and dietary briefings without needing repetition.
                  </p>
                </div>
              </div>

              <div className="p-8 sm:p-10 bg-[#12141A] border border-[#242630] space-y-8">
                <div className="border-b border-[#20232E] pb-4">
                  <span className="text-xs uppercase tracking-widest text-[#CFA85E]">Member Dossier</span>
                  <h2 className="font-serif text-3xl text-[#F4F1EA] mt-1">Saved Lifestyle Preferences</h2>
                  <p className="text-xs text-[#9C968A] mt-1 font-light">
                    Permanent household instructions maintained by your Albemarle Street lifestyle desk.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs sm:text-sm">
                  <div className="p-5 bg-[#0D0F14] border border-[#20232E] space-y-2">
                    <span className="text-[10px] uppercase tracking-wider text-[#CFA85E] block">
                      Preferred Aviation Fleet
                    </span>
                    <p className="text-[#F4F1EA] font-light">{member.savedPreferences.preferredAirlines.join(' · ')}</p>
                  </div>

                  <div className="p-5 bg-[#0D0F14] border border-[#20232E] space-y-2">
                    <span className="text-[10px] uppercase tracking-wider text-[#CFA85E] block">
                      Hotel & Suite Archetype
                    </span>
                    <p className="text-[#F4F1EA] font-light">{member.savedPreferences.hotelStyle}</p>
                  </div>

                  <div className="p-5 bg-[#0D0F14] border border-[#20232E] space-y-2">
                    <span className="text-[10px] uppercase tracking-wider text-[#CFA85E] block">
                      Dietary & Cellar Requirements
                    </span>
                    <p className="text-[#F4F1EA] font-light">{member.savedPreferences.dietaryNotes}</p>
                  </div>

                  <div className="p-5 bg-[#0D0F14] border border-[#20232E] space-y-2">
                    <span className="text-[10px] uppercase tracking-wider text-[#CFA85E] block">
                      Vehicle & Chauffeur Specification
                    </span>
                    <p className="text-[#F4F1EA] font-light">{member.savedPreferences.vehiclePreference}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {activeTab === 'privileges' && (
            <motion.div
              key="privileges"
              initial={{ opacity: 0.9, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.28 }}
              className="space-y-8"
            >
              {/* Private Custody Partner Showcase Banner */}
              <div className="bg-[#12141A] border border-[#242630] overflow-hidden grid grid-cols-1 lg:grid-cols-12 group">
                <div className="lg:col-span-5 min-h-[210px] overflow-hidden bg-[#181A22]">
                  <img
                    src="/assets/aistudio/bond_street_jewellery.jpg"
                    alt="Bond Street Private Vault & Partner Salons"
                    className="w-full h-full object-cover brightness-105 contrast-105 group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="lg:col-span-7 p-6 sm:p-8 flex flex-col justify-center space-y-2">
                  <span className="text-[11px] uppercase tracking-widest text-[#CFA85E]">
                    Curated Ecosystem · Zero Undisclosed Mark-Ups
                  </span>
                  <h2 className="font-serif text-2xl sm:text-3xl text-[#F4F1EA]">
                    TGLC Member Privileges & Closed Salons
                  </h2>
                  <p className="text-xs sm:text-sm text-[#B5AFA3] font-light leading-relaxed">
                    Every standing arrangement across Mayfair tailors, Bond Street vaults, country estates, and alpine clinics passes directly to our members with transparent billing.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {MEMBER_PRIVILEGES.map((priv, idx) => (
                  <motion.div
                    key={idx}
                    whileHover={{ y: -2 }}
                    transition={{ duration: 0.25 }}
                    className="p-6 bg-[#12141A] border border-[#242630] hover:border-[#8B672B] transition-colors space-y-3"
                  >
                    <span className="text-[10px] uppercase tracking-widest text-[#CFA85E] block">
                      {priv.category}
                    </span>
                    <h3 className="font-serif text-2xl text-[#F4F1EA]">{priv.partner}</h3>
                    <p className="text-xs sm:text-sm text-[#D9D4CA] leading-relaxed font-light">{priv.privilege}</p>
                    <div className="pt-2 text-xs text-[#9C968A] border-t border-[#20232E] font-light">
                      Details: {priv.details}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </div>
      </div>

      {/* New Request Modal */}
      <AnimatePresence>
        {isNewRequestOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.25 }}
              className="w-full max-w-lg bg-[#12141A] border border-[#8B672B] p-8 space-y-5"
            >
              <h3 className="font-serif text-2xl text-[#F4F1EA]">Submit a New Concierge Request</h3>

              {requestSubmitted ? (
                <div className="p-4 bg-[#181A22] border border-[#CFA85E] text-xs text-[#D9D4CA] flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-[#CFA85E]" />
                  <span>Request received. Camilla Vance-Moreau has been notified.</span>
                </div>
              ) : (
                <form onSubmit={handleCreateRequest} className="space-y-4 text-xs">
                  <div>
                    <label className="block text-[11px] uppercase tracking-wider text-[#D9D4CA] mb-1">
                      Request Title *
                    </label>
                    <input
                      type="text"
                      required
                      value={requestTitle}
                      onChange={(e) => setRequestTitle(e.target.value)}
                      placeholder="e.g. Private Box for Royal Opera House"
                      className="w-full bg-[#181A22] border border-[#2A2D38] px-3.5 py-2.5 text-[#F4F1EA] focus:outline-none focus:border-[#CFA85E]"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] uppercase tracking-wider text-[#D9D4CA] mb-1">
                      Category Practice
                    </label>
                    <select
                      value={requestCategory}
                      onChange={(e) => setRequestCategory(e.target.value)}
                      className="w-full bg-[#181A22] border border-[#2A2D38] px-3.5 py-2.5 text-[#F4F1EA] focus:outline-none focus:border-[#CFA85E]"
                    >
                      <option value="Travel & Aviation">Travel & Aviation</option>
                      <option value="Dining & Social Access">Dining & Social Access</option>
                      <option value="Experiences & Culture">Experiences & Culture</option>
                      <option value="Residences & Estates">Residences & Estates</option>
                      <option value="Luxury Sourcing">Luxury Sourcing</option>
                      <option value="Personal Office Support">Personal Office Support</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-[11px] uppercase tracking-wider text-[#D9D4CA] mb-1">
                      Details & Criteria
                    </label>
                    <textarea
                      rows={4}
                      value={requestNotes}
                      onChange={(e) => setRequestNotes(e.target.value)}
                      placeholder="Specify dates, passenger counts, or timing preferences..."
                      className="w-full bg-[#181A22] border border-[#2A2D38] px-3.5 py-2.5 text-[#F4F1EA] focus:outline-none focus:border-[#CFA85E] resize-none"
                    />
                  </div>

                  <div className="flex justify-end gap-3 pt-3 border-t border-[#20232E]">
                    <button
                      type="button"
                      onClick={() => setIsNewRequestOpen(false)}
                      className="px-4 py-2 uppercase tracking-wider text-[#9C968A] hover:text-[#F4F1EA]"
                    >
                      Cancel
                    </button>
                    <button type="submit" className="btn-gold px-6 py-2.5 text-xs">
                      Submit Request
                    </button>
                  </div>
                </form>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};
