'use client';

import { useState } from 'react';
import { Server, Users, PlayCircle, Copy, CheckCircle2 } from 'lucide-react';
import { useMinecraftServerStatus } from '@/hooks/useMinecraftServerStatus';

export default function RatRaceSMPLanding() {
  const [copied, setCopied] = useState(false);
  const serverIP = 'play.ratrace.wtf';
  const dregoraServerIP = 'dregora.ratrace.wtf';

  const {
    serverStatus: mainServerStatus,
    isLoading: mainIsLoading,
    error: mainError,
  } = useMinecraftServerStatus(serverIP);

  const {
    serverStatus: dregoraServerStatus,
    isLoading: dregoraIsLoading,
    error: dregoraError,
  } = useMinecraftServerStatus(dregoraServerIP);

  const copyIP = (ipToCopy: string) => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(ipToCopy);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } else {
      alert('No access to clipboard!');
    }
  };

  return (
    <div className="relative min-h-screen bg-black text-white">
      <div className="absolute inset-0 z-0">
        <img
          src="/images/landing-background.png"
          alt="Rat Race SMP Background"
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/80 to-black"></div>
      </div>

      <main className="relative z-10 container mx-auto px-4 pt-20 flex flex-col items-center justify-center text-center">
        <div className="mb-16 w-full max-w-3xl">
          <div className="flex justify-center mb-12">
            <img
              src="/images/rat-race-smp-logo.gif"
              alt="Rat Race SMP Logo"
              className="w-full max-w-[250px] h-auto object-contain rounded-xl"
            />
          </div>

          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-[url('https://de.minecraft.wiki/images/thumb/Lava_Animation.gif/120px-Lava_Animation.gif')] bg-clip-text text-transparent">
            RAT RACE SMP
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto">
            <span className="text-green-400 mb-10">Welcome</span> to the cage,{' '}
            <span className="text-red-400">rat</span>
            <br />
            Only the strongest rats will survive
          </p>

          <div className="flex flex-col md:flex-row justify-center gap-6 mb-12">
            <div className="relative w-full mx-auto">
              <div className="relative bg-black/0 rounded-xl overflow-hidden shadow-2xl">
                <div className="p-6 space-y-4">
                  <div className="flex justify-center items-center p-5">
                    <div className="flex items-center space-x-3">
                      <Server className="w-8 h-8 text-white" />
                      <h3 className="text-lg font-semibold mr-10">Server Status</h3>
                    </div>
                    <div
                      className={`flex items-center space-x-2 ${mainServerStatus.online ? 'text-green-500' : 'text-red-500'}`}
                    >
                      <span
                        className={`w-3 h-3 rounded-full ${mainServerStatus.online ? 'bg-green-500' : 'bg-red-500'}`}
                      ></span>
                      <span className="text-sm">
                        {mainIsLoading
                          ? 'Loading...'
                          : mainServerStatus.online
                            ? 'Online'
                            : 'Offline'}
                      </span>
                    </div>
                  </div>

                  <div className="bg-white/3 rounded-sm p-3 flex justify-between items-center">
                    <div className="flex-1 mr-2">
                      <span className="text-white text-sm mb-1 float-left">Main Server IP</span>
                      <input
                        type="text"
                        value={serverIP}
                        readOnly
                        className="bg-transparent text-orange-400 w-full outline-none"
                      />
                    </div>
                    <button
                      onClick={() => copyIP(serverIP)}
                      className="bg-white/10 hover:bg-white/20 p-2 rounded-md transition-all"
                    >
                      {copied ? (
                        <CheckCircle2 className="w-5 h-5 text-green-500" />
                      ) : (
                        <Copy className="w-5 h-5" />
                      )}
                    </button>
                  </div>

                  <div className="flex justify-between bg-white/3 rounded-sm p-6">
                    <div className="flex items-center space-x-2">
                      <Users className="w-6 h-6 text-white" />
                      <span className="text-white">Online Players</span>
                    </div>
                    <span className="text-white font-semibold">
                      {mainIsLoading
                        ? 'Loading...'
                        : `${mainServerStatus.players.online}/${mainServerStatus.players.max}`}
                    </span>
                  </div>

                  <div className="bg-white/3 rounded-sm p-3 flex justify-between items-center">
                    <div className="flex-1 mr-2">
                      <span className="text-white text-sm mb-1 float-left">RLCraft Server IP</span>
                      <input
                        type="text"
                        value={dregoraServerIP}
                        readOnly
                        className="bg-transparent text-orange-400 w-full outline-none"
                      />
                    </div>
                    <button
                      onClick={() => copyIP(dregoraServerIP)}
                      className="bg-white/10 hover:bg-white/20 p-2 rounded-md transition-all"
                    >
                      {copied ? (
                        <CheckCircle2 className="w-5 h-5 text-green-500" />
                      ) : (
                        <Copy className="w-5 h-5" />
                      )}
                    </button>
                  </div>

                  <div className="flex justify-between bg-white/3 rounded-sm p-6">
                    <div className="flex items-center space-x-2">
                      <Users className="w-6 h-6 text-white" />
                      <span className="text-white">Online Players</span>
                    </div>
                    <span className="text-white font-semibold">
                      {dregoraIsLoading
                        ? 'Loading...'
                        : `${dregoraServerStatus.players.online}/${dregoraServerStatus.players.max}`}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
