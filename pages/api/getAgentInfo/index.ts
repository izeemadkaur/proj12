import UserInfo from "@/data/userInfo.json";

export default async function handler(req: any, res: any) {
  if(req.method === "GET") {
    res
        .status(200)
        .json({ message: "Get Path is working" });
  }
  if (req.method === "POST") {
    const testUsername = "USER";
    const testPassword = "123456";

    console.log("HERE");
    

    const username = req?.body?.username || "";
    const password = req?.body?.password || "";

    console.log({username, password});
    

    if (username === testUsername && password === testPassword) {
      res
        .status(200)
        .json({ Success: true, user: UserInfo, message: "success" });
    } else {
      res
        .status(405)
        .json({ Success: false, message: "Incorrect username or password" });
    }
  } else {
    res.status(405).json({ Success: false, message: "Method Not Allowed" });
  }
}
