import { useState, useEffect, useRef } from 'react';
import { View, Text, Button, StyleSheet, ActivityIndicator } from 'react-native';
import {
  MeetingProvider,
  useMeeting,
  useParticipant,
  RTCView
} from '@videosdk.live/react-native-sdk';
import { createMeeting, token } from '../utils/api'

interface ParticipantViewProps {
  participantId: string;
}
console.log(token)
const MeetingView = () => {
  const { join, leave, toggleWebcam, toggleMic } = useMeeting({
    onMeetingJoined: () => {
      toggleWebcam();
      toggleMic();
    }
  });

  useEffect(() => {
    join();
    return () => {
      leave();
    };
  }, []);

  return (
    <View style={styles.container}>
      <ConnectedParticipants />
      <Button title="Leave" onPress={leave} color="red" />
    </View>
  );
};

const ConnectedParticipants = () => {
  const { participants } = useMeeting();
  
  return (
    <View style={styles.participantsContainer}>
      {Array.from(participants.keys()).map((participantId) => (
        <ParticipantView 
          key={participantId} 
          participantId={participantId} 
        />
      ))}
    </View>
  );
};

//TODO: fix streaming
const ParticipantView = ({ participantId }: ParticipantViewProps) => {
  const { webcamStream, webcamOn } = useParticipant(participantId);
 
  return webcamOn && webcamStream ? (
<RTCView
      streamURL={webcamStream.id} 
      style={styles.video}
      objectFit="cover"
    />
  ): (
    <View style={styles.placeholder}>
      <Text>Camera Off</Text>
    </View>
  );
};

export default function HomeScreen() {
  const [meetingId] = useState(() => `meeting-${Date.now()}`);
  // const [token, setToken] = useState<string | null>(null);

  // useEffect(() => {
  //   const fetchToken = async () => {
  //     try {
  //       const token = await getToken();
  //       setToken(token);
  //     } catch (error) {
  //       console.error("Failed to fetch token:", error);
  //     }
  //   };
  //   fetchToken();
  // }, []);

  if (!token) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#0000ff" />
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <MeetingProvider
      config={{
        meetingId,
        name: 'My Meeting',
        micEnabled: true,
        webcamEnabled: true,
        notification: {
          title: "Video SDK",
          message: "Meeting is running"
        }
      }}
      token={token}
    >
      <MeetingView />
    </MeetingProvider>
  );
}

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  participantsContainer: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  video: {
    width: '100%',
    height: '100%',
  },
  placeholder: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'grey',
  }
});