import { VIDEOSDK_API_URL, VIDEOSDK_TOKEN } from '@env';

interface CreateMeetingProps {
  token: string;
}
export const token = VIDEOSDK_TOKEN;
console.log(VIDEOSDK_API_URL)
console.log("********")
console.log(token)
export const createMeeting = async ({ token }: CreateMeetingProps) => {
  const res = await fetch(`${VIDEOSDK_API_URL}`, {
    method: "POST",
    headers: {
      authorization: `${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({}),
  });

  const { roomId } = await res.json();
  return roomId;
};
