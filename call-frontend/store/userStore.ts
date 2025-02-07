import {create} from 'zustand';

interface User {
  id: string;
  username: string;
}

interface CallState {
  localStream: MediaStream | null;
  remoteStream: MediaStream | null;
  peerConnection: RTCPeerConnection | null;
  currentCall: string | null;
  users: User[];
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

const useUserStore = create<CallState>((set) => ({
  localStream: null,
  remoteStream: null,
  peerConnection: null,
  currentCall: null,
  users: [
    { id: '1', username: 'user1' },
    { id: '2', username: 'user2' },
  ],
  searchQuery: '',
  setSearchQuery: (query) => set({ searchQuery: query }),
}));

export default useUserStore;