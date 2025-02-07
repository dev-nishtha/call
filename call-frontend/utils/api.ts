import { Meeting } from "@videosdk.live/react-native-sdk/types/meeting";
import 'dotenv/config'

const API_BASE = 'https://api.videosdk.live/v2';

export const getToken = async () => {
  const response = await fetch(`${API_BASE}/get-token`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${process.env.VIDEOSDK_TOKEN}`,
    },
  });
  const data = await response.json();
  return data.token;
};

