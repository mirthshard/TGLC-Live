import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Compass,
  Plane,
  Clock,
  Send,
  Plus,
  CheckCircle2,
  AlertCircle,
  FileText,
  Shield,
  MapPin,
  Calendar,
  Sparkles,
  CreditCard,
  MessageSquare,
  Check,
  Radio,
  Lock,
  Smartphone,
  Eye,
} from 'lucide-react';
import {
  PortalUser,
  ConciergeRequest,
  DirectMessage,
  ItineraryWaypoint,
  BillingEntry,
  simulatedSupabase,
} from '../../services/supabaseClient';
import { PortalAudioLog } from './PortalAudioLog';
import { FlightRadarViewer } from './FlightRadarViewer';
import { PortalDocumentVault } from './PortalDocumentVault';
import { SovereignPassCard } from './SovereignPassCard';

interface ClientDashboardProps {
  user: PortalUser;
}

export const ClientDashboard: React.FC<ClientDashboardProps> = ({ user }) => {
  const [activeTab, setActiveTab] = useState<
    'itinerary' | 'requests' | 'audiolog' | 'messages' | 'vault' | 'keycard' | 'ledger' | 'preferences'
  >('itinerary');

  // Supabase state
  const [requests, setRequests] = useState<ConciergeRequest[]>([]);
  const [messages, setMessages] = useState<DirectMessage[]>([]);
  const [waypoints, setWaypoints] = useState<ItineraryWaypoint[]>([]);
  const [billing, setBilling] = useState<BillingEntry[]>([]);

  // Flight Radar Modal state
  const [showRadarModal, setShowRadarModal] = useState(false);

  // New Request Modal state
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newTitle, setNewTitle] = useState('');
  const [newCategory, setNewCategory] = useState('Travel & Aviation');
  const [newPriority, setNewPriority] = useState<'Standard' | 'Urgent' | 'Immediate'>('Standard');
  const [newNotes, setNewNotes] = useState('');
  const [isSubmittingReq, setIsSubmittingReq] = useState(false);
  const [requestSubmittedToast, setRequestSubmittedToast] = useState(false);

  // Chat state
  const [chatInput, setChatInput] = useState('');
  const [isStaffTyping, setIsStaffTyping] = useState(false);

  // Load from simulated Supabase
  const loadData = async () => {
    const { data: reqData } = await simulatedSupabase.from('concierge_requests').select();
    const { data: msgData } = await simulatedSupabase.from('direct_messages').select();
    const { data: wpData } = await simulatedSupabase.from('itineraries').select();
    const { data: billData } = await simulatedSupabase.from('billing_ledgers').select();

    if (reqData) setRequests(reqData);
    if (msgData) setMessages(msgData);
    if (wpData) setWaypoints(wpData);
    if (billData) setBilling(billData);
  };

  useEffect(() => {
    loadData();
    const handleStoreChange = () => loadData();
    window.addEventListener('tglc_store_change', handleStoreChange);
    return () => window.removeEventListener('tglc_store_change', handleStoreChange);
  }, []);

  // Handle New Request
  const handleCreateRequest = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTitle.trim()) return;

    setIsSubmittingReq(true);
    const newReq: Partial<ConciergeRequest> = {
      userId: user.id,
      title: newTitle.trim(),
      category: newCategory,
      priority: newPriority,
      status: 'Received',
      submittedDate: 'Just now',
      assignedTo: user.assignedManager,
      notes: newNotes.trim() || 'Awaiting preliminary brief assessment.',
      estimatedCost: 'To be determined upon partner confirmation',
    };

    await simulatedSupabase.from('concierge_requests').insert(newReq);
    setIsSubmittingReq(false);
    setIsModalOpen(false);
    setNewTitle('');
    setNewNotes('');
    setRequestSubmittedToast(true);
    setTimeout(() => setRequestSubmittedToast(false), 3500);
    setActiveTab('requests');
  };

  // Handle Send Direct Message
  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!chatInput.trim()) return;

    const userText = chatInput.trim();
    setChatInput('');

    const newMsg: Partial<DirectMessage> = {
      userId: user.id,
      senderName: user.name,
      senderRole: 'Principal',
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      text: userText,
      isStaff: false,
    };

    await simulatedSupabase.from('direct_messages').insert(newMsg);

    // Simulated staff response
    setIsStaffTyping(true);
    setTimeout(async () => {
      setIsStaffTyping(false);
      const staffReplies = [
        `Received with thanks, ${user.name.split(' ')[0]}. I am coordinating this immediately with our Mayfair desk.`,
        `Julian and our operations team have been apprised. We will update the status in your private dossier within 20 minutes.`,
        `Acknowledged. The arrangements are being finalized directly with our private partner liaison.`,
      ];
      const randomReply = staffReplies[Math.floor(Math.random() * staffReplies.length)];

      await simulatedSupabase.from('direct_messages').insert({
        userId: user.id,
        senderName: user.assignedManager,
        senderRole: 'Director of Private Office',
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        text: randomReply,
        isStaff: true,
      });
    }, 1400);
  };

  const getStatusColor = (status: ConciergeRequest['status']) => {
    switch (status) {
      case 'Completed':
        return 'text-emerald-400 bg-emerald-950/40 border-emerald-800/60';
      case 'Staged':
        return 'text-[#CFA85E] bg-[#CFA85E]/10 border-[#CFA85E]/40';
      case 'In Progress':
        return 'text-sky-400 bg-sky-950/40 border-sky-800/60';
      case 'Assigned':
        return 'text-amber-400 bg-amber-950/40 border-amber-800/60';
      case 'Received':
      default:
        return 'text-neutral-400 bg-neutral-900 border-neutral-700';
    }
  };

  const getPriorityBadge = (priority: ConciergeRequest['priority']) => {
    switch (priority) {
      case 'Immediate':
        return 'text-rose-400 bg-rose-950/40 border-rose-800/50';
      case 'Urgent':
        return 'text-amber-400 bg-amber-950/40 border-amber-800/50';
      default:
        return 'text-neutral-400 bg-neutral-900 border-neutral-800';
    }
  };

  return (
    <div className="space-y-8 pb-16 sm:pb-0">
      {/* Principal Profile Dossier Banner */}
      <div className="bg-[#0E1117] border border-[#232731] p-6 lg:p-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-[#1E222D]">
          <div className="space-y-1.5">
            <div className="flex items-center gap-3">
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#CFA85E] px-2.5 py-0.5 bg-[#171B24] border border-[#2F3746]">
                {user.tier}
              </span>
              <span className="text-[11px] font-mono text-[#7D879C]">Member Since {user.memberSince}</span>
            </div>
            <h1 className="font-serif text-3xl sm:text-4xl text-[#F4F1EA] font-light tracking-wide">
              {user.name}
            </h1>
            <p className="text-xs sm:text-sm text-[#8B95A8] font-light flex items-center gap-2">
              <MapPin className="w-3.5 h-3.5 text-[#CFA85E]" /> Primary Residence: {user.primaryResidence}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4 sm:gap-6">
            <div className="p-4 bg-[#141822] border border-[#242A38] min-w-[140px] flex-1 sm:flex-none">
              <span className="block text-[10px] font-mono uppercase tracking-[0.15em] text-[#788296]">
                Retained Hours
              </span>
              <span className="text-2xl font-serif text-[#CFA85E] font-medium">
                {user.retainedHoursBalance.toFixed(1)} <span className="text-xs font-mono text-[#8C95A7]">hrs</span>
              </span>
              <span className="block text-[9px] text-[#5A6376] mt-0.5">Priority SLA 15-min</span>
            </div>

            <div className="p-4 bg-[#141822] border border-[#242A38] min-w-[170px] flex-1 sm:flex-none">
              <span className="block text-[10px] font-mono uppercase tracking-[0.15em] text-[#788296]">
                Assigned Private Director
              </span>
              <span className="text-sm font-serif text-[#F4F1EA] font-medium block truncate">
                {user.assignedManager}
              </span>
              <span className="text-[10px] text-emerald-400 flex items-center gap-1.5 mt-0.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" /> On Standby
              </span>
            </div>

            <button
              onClick={() => setIsModalOpen(true)}
              className="w-full sm:w-auto px-5 py-3.5 bg-[#CFA85E] hover:bg-[#DBC17D] text-[#090B0E] font-serif text-xs uppercase tracking-widest font-semibold transition-all flex items-center justify-center gap-2 shadow-lg min-h-[44px]"
            >
              <Plus className="w-4 h-4" /> Dispatch Request
            </button>
          </div>
        </div>

        {/* Navigation Tabs (Scrollable on Mobile) */}
        <div className="flex items-center gap-1.5 pt-4 overflow-x-auto pb-1 scrollbar-none">
          {[
            { id: 'itinerary', label: 'Florence & London', icon: Plane },
            { id: 'requests', label: `Requests (${requests.length})`, icon: Clock },
            { id: 'audiolog', label: 'Audio Briefings', icon: Radio },
            { id: 'messages', label: `Encrypted Chat (${messages.length})`, icon: MessageSquare },
            { id: 'vault', label: 'Document Vault', icon: Lock },
            { id: 'keycard', label: 'Sovereign Pass', icon: Smartphone },
            { id: 'ledger', label: 'Retained Ledger', icon: CreditCard },
            { id: 'preferences', label: 'Directives', icon: FileText },
          ].map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`flex items-center gap-2 px-3.5 py-2.5 text-xs font-mono uppercase tracking-[0.12em] transition-all border shrink-0 min-h-[44px] ${
                  isActive
                    ? 'bg-[#181D27] text-[#CFA85E] border-[#CFA85E]/50'
                    : 'bg-[#11141C] text-[#8690A3] border-transparent hover:border-[#272D3B] hover:text-[#C5CDDC]'
                }`}
              >
                <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-[#CFA85E]' : 'text-[#697387]'}`} />
                {tab.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Toast Notification */}
      <AnimatePresence>
        {requestSubmittedToast && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="p-4 bg-[#14231E] border border-[#2B6049] text-emerald-300 text-xs font-mono flex items-center justify-between"
          >
            <div className="flex items-center gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>
                Confidential request recorded in Supabase and assigned to Camilla Vance-Moreau.
              </span>
            </div>
            <span className="text-[10px] text-emerald-500 uppercase tracking-widest font-bold">
              EST. RESPONSE &lt; 15 MIN
            </span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Tab 1: Itinerary & Flight Radar */}
      {activeTab === 'itinerary' && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-2 border-b border-[#1E222D]">
            <div>
              <h2 className="font-serif text-xl text-[#F4F1EA] font-light">
                Active Itinerary: London Belgravia & Florence Autumn Residency
              </h2>
              <p className="text-xs text-[#8A94A7] font-light mt-0.5">
                Full telemetry, diplomatic slots, and security escort details synchronized live.
              </p>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={() => setShowRadarModal(!showRadarModal)}
                className="px-3.5 py-1.5 bg-[#171E2B] hover:bg-[#202B3D] text-[#CFA85E] border border-[#2C3B54] text-xs font-mono uppercase tracking-wider flex items-center gap-1.5 transition-colors"
              >
                <Radio className="w-3.5 h-3.5 text-emerald-400 animate-pulse" />
                {showRadarModal ? 'Hide Flight Radar' : 'Live Flight Radar'}
              </button>
            </div>
          </div>

          {/* Embedded or Toggleable Flight Radar */}
          <AnimatePresence>
            {showRadarModal && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="overflow-hidden"
              >
                <FlightRadarViewer onClose={() => setShowRadarModal(false)} isEmbedded={true} />
              </motion.div>
            )}
          </AnimatePresence>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {waypoints.map((wp, idx) => (
              <div
                key={wp.id}
                className="bg-[#0E1117] border border-[#202530] p-5 hover:border-[#333C4E] transition-all space-y-3"
              >
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-none bg-[#171C26] border border-[#2A3242] flex items-center justify-center font-mono text-xs text-[#CFA85E]">
                      0{idx + 1}
                    </div>
                    <div>
                      <span className="text-[10px] font-mono uppercase tracking-[0.14em] text-[#7C869A] block">
                        {wp.timeWindow}
                      </span>
                      <h3 className="font-serif text-base text-[#F4F1EA] font-normal">{wp.title}</h3>
                    </div>
                  </div>
                  <span
                    className={`text-[10px] font-mono uppercase px-2 py-0.5 border ${
                      wp.status === 'Confirmed'
                        ? 'text-emerald-400 bg-emerald-950/30 border-emerald-800/40'
                        : 'text-[#CFA85E] bg-[#CFA85E]/10 border-[#CFA85E]/30'
                    }`}
                  >
                    {wp.status}
                  </span>
                </div>

                <div className="space-y-1.5 text-xs text-[#959EAF] font-light bg-[#12161F] p-3 border border-[#1C222E]">
                  <p className="flex items-center gap-2">
                    <MapPin className="w-3.5 h-3.5 text-[#CFA85E] shrink-0" />
                    <span className="text-[#F4F1EA] font-medium">{wp.location}</span>
                  </p>
                  <p className="text-[10px] font-mono text-[#677184] pl-5.5">GPS: {wp.coordinates}</p>
                  <p className="text-[#8B95A8] pt-1 pl-5.5">{wp.details}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      )}

      {/* Tab 2: Concierge Requests */}
      {activeTab === 'requests' && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-6">
          <div className="flex items-center justify-between pb-2 border-b border-[#1E222D]">
            <div>
              <h2 className="font-serif text-xl text-[#F4F1EA] font-light">Concierge Requests Pipeline</h2>
              <p className="text-xs text-[#8A94A7] font-light mt-0.5">
                Real-time tracking of active lifestyle, travel, sourcing, and security mandates.
              </p>
            </div>
            <button
              onClick={() => setIsModalOpen(true)}
              className="px-4 py-2 bg-[#CFA85E] hover:bg-[#DBC17D] text-[#090B0E] font-serif text-xs uppercase tracking-wider font-semibold transition-all flex items-center gap-1.5 min-h-[44px]"
            >
              <Plus className="w-3.5 h-3.5" /> New Request
            </button>
          </div>

          <div className="overflow-x-auto border border-[#202530]">
            <table className="w-full text-left border-collapse text-xs">
              <thead>
                <tr className="bg-[#12161F] border-b border-[#202530] font-mono text-[10px] uppercase tracking-[0.14em] text-[#7B8599]">
                  <th className="py-3 px-4">Ref ID</th>
                  <th className="py-3 px-4">Request Title</th>
                  <th className="py-3 px-4">Category</th>
                  <th className="py-3 px-4">Priority</th>
                  <th className="py-3 px-4">Status</th>
                  <th className="py-3 px-4">Assigned Director</th>
                  <th className="py-3 px-4">Est. Cost</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#181D26] bg-[#0E1117]">
                {requests.map((req) => (
                  <tr key={req.id} className="hover:bg-[#141923] transition-colors">
                    <td className="py-3.5 px-4 font-mono text-[#CFA85E] font-medium">{req.id}</td>
                    <td className="py-3.5 px-4">
                      <span className="font-serif text-sm text-[#F4F1EA] block">{req.title}</span>
                      <span className="text-[11px] text-[#7B8599] font-light mt-0.5 block">{req.notes}</span>
                    </td>
                    <td className="py-3.5 px-4 text-[#9BA5B8]">{req.category}</td>
                    <td className="py-3.5 px-4">
                      <span className={`inline-block px-2 py-0.5 font-mono text-[9px] uppercase border ${getPriorityBadge(req.priority)}`}>
                        {req.priority}
                      </span>
                    </td>
                    <td className="py-3.5 px-4">
                      <span className={`inline-block px-2 py-0.5 font-mono text-[10px] uppercase border ${getStatusColor(req.status)}`}>
                        {req.status}
                      </span>
                    </td>
                    <td className="py-3.5 px-4 text-[#A7B1C4]">{req.assignedTo}</td>
                    <td className="py-3.5 px-4 font-mono text-[#8C96A8]">{req.estimatedCost || 'Retained'}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>
      )}

      {/* Tab 3: Portal Audio Log */}
      {activeTab === 'audiolog' && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <PortalAudioLog user={user} />
        </motion.div>
      )}

      {/* Tab 4: Direct Encrypted Channel */}
      {activeTab === 'messages' && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-4">
          <div className="bg-[#0E1117] border border-[#202530] p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-[#161B24] border border-[#2B3444] flex items-center justify-center">
                <Shield className="w-5 h-5 text-[#CFA85E]" />
              </div>
              <div>
                <h3 className="font-serif text-sm text-[#F4F1EA] font-normal">
                  Private Desk: Camilla Vance-Moreau & Julian Sterling
                </h3>
                <p className="text-[10px] font-mono text-[#788296]">
                  End-to-End Encrypted Liaison Channel • Mayfair HQ & Farnborough Desk
                </p>
              </div>
            </div>
            <div className="text-right">
              <span className="inline-flex items-center gap-1.5 text-[10px] font-mono text-emerald-400">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                Active Session
              </span>
            </div>
          </div>

          <div className="bg-[#0A0D13] border border-[#202530] p-4 sm:p-6 min-h-[380px] max-h-[500px] overflow-y-auto space-y-4">
            {messages.map((msg) => {
              const isMe = !msg.isStaff;
              return (
                <div
                  key={msg.id}
                  className={`flex flex-col ${isMe ? 'items-end' : 'items-start'} max-w-2xl ${
                    isMe ? 'ml-auto' : 'mr-auto'
                  }`}
                >
                  <div className="flex items-center gap-2 mb-1 text-[10px] font-mono text-[#6A7488]">
                    <span className="font-semibold text-[#A8B2C4]">{msg.senderName}</span>
                    <span>•</span>
                    <span>{msg.timestamp}</span>
                  </div>
                  <div
                    className={`p-3.5 text-xs sm:text-sm font-light leading-relaxed ${
                      isMe
                        ? 'bg-[#18202D] text-[#F4F1EA] border border-[#2A374E]'
                        : 'bg-[#12161F] text-[#D8DFEB] border border-[#212735]'
                    }`}
                  >
                    {msg.text}
                  </div>
                </div>
              );
            })}

            {isStaffTyping && (
              <div className="flex items-center gap-2 text-xs font-mono text-[#CFA85E] p-2 bg-[#12161F]/60 border border-[#202530] max-w-xs">
                <span className="w-1.5 h-1.5 rounded-full bg-[#CFA85E] animate-bounce" />
                <span className="w-1.5 h-1.5 rounded-full bg-[#CFA85E] animate-bounce delay-150" />
                <span className="w-1.5 h-1.5 rounded-full bg-[#CFA85E] animate-bounce delay-300" />
                <span className="text-[11px]">{user.assignedManager} is drafting response...</span>
              </div>
            )}
          </div>

          <form onSubmit={handleSendMessage} className="flex gap-2">
            <input
              type="text"
              value={chatInput}
              onChange={(e) => setChatInput(e.target.value)}
              placeholder="Send priority instruction or request update to Camilla & Julian..."
              className="flex-1 px-4 py-3 bg-[#0E1117] border border-[#202530] text-xs font-mono text-[#F4F1EA] focus:outline-none focus:border-[#CFA85E]"
            />
            <button
              type="submit"
              className="px-6 py-3 bg-[#CFA85E] hover:bg-[#DBC17D] text-[#090B0E] font-serif text-xs uppercase tracking-widest font-semibold flex items-center gap-2 transition-colors min-h-[44px]"
            >
              <Send className="w-3.5 h-3.5" /> Transmit
            </button>
          </form>
        </motion.div>
      )}

      {/* Tab 5: Document Vault */}
      {activeTab === 'vault' && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <PortalDocumentVault user={user} />
        </motion.div>
      )}

      {/* Tab 6: Sovereign Pass */}
      {activeTab === 'keycard' && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <SovereignPassCard user={user} />
        </motion.div>
      )}

      {/* Tab 7: Ledger & Billing */}
      {activeTab === 'ledger' && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="p-5 bg-[#0E1117] border border-[#202530]">
              <span className="text-[10px] font-mono uppercase tracking-[0.16em] text-[#7C869A] block">
                Total Annual Retainer Allocation
              </span>
              <span className="text-2xl font-serif text-[#F4F1EA] font-light mt-1 block">100.0 Hours</span>
              <span className="text-[10px] text-[#5D6677] mt-1 block">Uncapped 24/7 Mayfair Coverage</span>
            </div>

            <div className="p-5 bg-[#0E1117] border border-[#202530]">
              <span className="text-[10px] font-mono uppercase tracking-[0.16em] text-[#7C869A] block">
                Retained Hours Consumed
              </span>
              <span className="text-2xl font-serif text-[#CFA85E] font-medium mt-1 block">57.5 Hours</span>
              <span className="text-[10px] text-emerald-400 mt-1 block">Remaining: 42.5 Hours</span>
            </div>

            <div className="p-5 bg-[#0E1117] border border-[#202530]">
              <span className="text-[10px] font-mono uppercase tracking-[0.16em] text-[#7C869A] block">
                Direct Disbursements Settled
              </span>
              <span className="text-2xl font-serif text-[#F4F1EA] font-light mt-1 block">£7,650.00</span>
              <span className="text-[10px] text-[#5D6677] mt-1 block">Zero markup pass-through policy</span>
            </div>
          </div>

          <div className="border border-[#202530]">
            <div className="p-4 bg-[#12161F] border-b border-[#202530]">
              <h3 className="font-serif text-base text-[#F4F1EA] font-light">Recent Disbursements & Account Activity</h3>
            </div>
            <table className="w-full text-left border-collapse text-xs">
              <thead>
                <tr className="bg-[#0A0D13] border-b border-[#1C212B] font-mono text-[10px] uppercase tracking-[0.14em] text-[#788296]">
                  <th className="py-3 px-4">Date</th>
                  <th className="py-3 px-4">Reference</th>
                  <th className="py-3 px-4">Disbursement Item</th>
                  <th className="py-3 px-4">Category</th>
                  <th className="py-3 px-4">Hours</th>
                  <th className="py-3 px-4">Amount</th>
                  <th className="py-3 px-4">Audit Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#171C26] bg-[#0E1117]">
                {billing.map((item) => (
                  <tr key={item.id} className="hover:bg-[#131722] transition-colors">
                    <td className="py-3.5 px-4 font-mono text-[#8C95A8]">{item.date}</td>
                    <td className="py-3.5 px-4 font-mono text-[#CFA85E]">{item.referenceCode}</td>
                    <td className="py-3.5 px-4 text-[#F4F1EA] font-serif">{item.description}</td>
                    <td className="py-3.5 px-4 text-[#8A94A7]">{item.category}</td>
                    <td className="py-3.5 px-4 font-mono text-[#AAB4C7]">{item.hoursDeducted ? `${item.hoursDeducted}h` : '—'}</td>
                    <td className="py-3.5 px-4 font-mono text-[#CFA85E] font-medium">{item.disbursementAmount}</td>
                    <td className="py-3.5 px-4">
                      <span className="inline-flex items-center gap-1 text-[10px] font-mono text-emerald-400 bg-emerald-950/30 px-2 py-0.5 border border-emerald-800/40">
                        <Check className="w-3 h-3" /> {item.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>
      )}

      {/* Tab 8: Preferences Dossier */}
      {activeTab === 'preferences' && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-6">
          <div className="p-6 bg-[#0E1117] border border-[#202530] space-y-4">
            <h3 className="font-serif text-lg text-[#F4F1EA] font-light">Principal Lifestyle Dossier & Protocol Directives</h3>
            <p className="text-xs text-[#8A94A7] leading-relaxed">
              These directives are encrypted and broadcast exclusively to accredited managers and tactical protection details.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
              <div className="p-4 bg-[#12161F] border border-[#1E2430] space-y-2">
                <span className="text-[10px] font-mono uppercase tracking-[0.14em] text-[#CFA85E] block">
                  Aviation & Aviation Cabins
                </span>
                <p className="text-xs text-[#C2C9D8] font-light">
                  • Forward cabin seat facing travel direction
                  <br />• Sparkling San Pellegrino pre-chilled to 6°C
                  <br />• Luggage pre-cleared via diplomatic apron (no main terminal transit)
                </p>
              </div>

              <div className="p-4 bg-[#12161F] border border-[#1E2430] space-y-2">
                <span className="text-[10px] font-mono uppercase tracking-[0.14em] text-[#CFA85E] block">
                  Hotel & Residence Staging
                </span>
                <p className="text-xs text-[#C2C9D8] font-light">
                  • 100% hypoallergenic goose-down substitute linens
                  <br />• High-floor quiet garden wing suites only
                  <br />• In-room bespoke humidor and still water stocked daily
                </p>
              </div>

              <div className="p-4 bg-[#12161F] border border-[#1E2430] space-y-2">
                <span className="text-[10px] font-mono uppercase tracking-[0.14em] text-[#CFA85E] block">
                  Security & Fleet Protocol
                </span>
                <p className="text-xs text-[#C2C9D8] font-light">
                  • Armoured B6 Range Rover SV or Maybach preferred
                  <br />• Senior defensive-tactical driver (Julian Sterling verified)
                  <br />• Discreet counter-surveillance on public arrival points
                </p>
              </div>

              <div className="p-4 bg-[#12161F] border border-[#1E2430] space-y-2">
                <span className="text-[10px] font-mono uppercase tracking-[0.14em] text-[#CFA85E] block">
                  Dining & Hospitality
                </span>
                <p className="text-xs text-[#C2C9D8] font-light">
                  • Secluded corner banquettes or private rooms
                  <br />• Preference for Tuscan Sangiovese and Vintage Burgundy
                  <br />• Discreet bill settlement via retained account (no tableside card presentation)
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      )}

      {/* New Request Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              className="w-full max-w-xl bg-[#0D1016] border border-[#2B3242] p-6 sm:p-8 space-y-6 shadow-2xl"
            >
              <div className="flex items-center justify-between pb-4 border-b border-[#202633]">
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#CFA85E]">
                    TGLC Sovereign Mandate
                  </span>
                  <h3 className="font-serif text-2xl text-[#F4F1EA] font-light">Submit Confidential Request</h3>
                </div>
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="text-neutral-500 hover:text-neutral-300 text-lg font-mono"
                >
                  ✕
                </button>
              </div>

              <form onSubmit={handleCreateRequest} className="space-y-4">
                <div>
                  <label className="block text-[11px] font-mono uppercase tracking-[0.12em] text-[#8E98AC] mb-1.5">
                    Request Title
                  </label>
                  <input
                    type="text"
                    required
                    value={newTitle}
                    onChange={(e) => setNewTitle(e.target.value)}
                    placeholder="e.g. Helicopter Transfer Battersea to Goodwood Festival"
                    className="w-full px-3.5 py-2.5 bg-[#131722] border border-[#262D3C] text-xs font-mono text-[#F4F1EA] focus:outline-none focus:border-[#CFA85E]"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] font-mono uppercase tracking-[0.12em] text-[#8E98AC] mb-1.5">
                      Service Category
                    </label>
                    <select
                      value={newCategory}
                      onChange={(e) => setNewCategory(e.target.value)}
                      className="w-full px-3.5 py-2.5 bg-[#131722] border border-[#262D3C] text-xs font-mono text-[#F4F1EA] focus:outline-none focus:border-[#CFA85E]"
                    >
                      <option value="Travel & Aviation">Travel & Aviation</option>
                      <option value="Transport & Fleet">Transport & Fleet</option>
                      <option value="Dining & Hospitality">Dining & Hospitality</option>
                      <option value="Cultural Access">Cultural & Private Access</option>
                      <option value="Luxury Sourcing">Luxury Sourcing & Horology</option>
                      <option value="Tactical Protection">Tactical Protection</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-[11px] font-mono uppercase tracking-[0.12em] text-[#8E98AC] mb-1.5">
                      Priority SLA
                    </label>
                    <select
                      value={newPriority}
                      onChange={(e) => setNewPriority(e.target.value as any)}
                      className="w-full px-3.5 py-2.5 bg-[#131722] border border-[#262D3C] text-xs font-mono text-[#F4F1EA] focus:outline-none focus:border-[#CFA85E]"
                    >
                      <option value="Standard">Standard (Within 24 Hours)</option>
                      <option value="Urgent">Urgent (Within 4 Hours)</option>
                      <option value="Immediate">Immediate (&lt; 15 Mins Dispatch)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-mono uppercase tracking-[0.12em] text-[#8E98AC] mb-1.5">
                    Specifications & Special Instructions
                  </label>
                  <textarea
                    rows={4}
                    value={newNotes}
                    onChange={(e) => setNewNotes(e.target.value)}
                    placeholder="Provide guest numbers, dietary requirements, vehicle armoring level, or departure timeframes..."
                    className="w-full px-3.5 py-2.5 bg-[#131722] border border-[#262D3C] text-xs font-mono text-[#F4F1EA] focus:outline-none focus:border-[#CFA85E]"
                  />
                </div>

                <div className="flex items-center justify-end gap-3 pt-4 border-t border-[#202633]">
                  <button
                    type="button"
                    onClick={() => setIsModalOpen(false)}
                    className="px-4 py-2.5 text-xs font-mono text-[#8C96A8] hover:text-[#F4F1EA]"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    disabled={isSubmittingReq}
                    className="px-6 py-2.5 bg-[#CFA85E] hover:bg-[#DBC17D] text-[#090B0E] font-serif text-xs uppercase tracking-widest font-semibold flex items-center gap-2"
                  >
                    {isSubmittingReq ? 'Encrypting & Transmitting...' : 'Dispatch to Camilla'}
                  </button>
                </div>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};
