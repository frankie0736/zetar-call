import { respData, respErr } from "@/lib/resp";
import { getUserInfo } from "@/services/user";

export async function POST(req: Request) {
  try {
    const userInfo = await getUserInfo();
    
    if (!userInfo) {
      return respErr("User not found");
    }

    return respData({
      user: {
        uuid: userInfo.uuid,
        email: userInfo.email,
        nickname: userInfo.nickname,
        avatar_url: userInfo.avatar_url,
        created_at: userInfo.created_at,
      },
    });
  } catch (e: any) {
    console.log("get user info failed:", e);
    return respErr(e.message || "Failed to get user info");
  }
}

export async function GET(req: Request) {
  return POST(req);
} 