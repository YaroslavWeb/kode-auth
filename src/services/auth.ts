import { ISessionStorage } from "interfaces/auth";

export const GetSessionToken = async () => {
  const path = "/sessions/guest";
  const req = await fetch(path, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      appVersion: "Web",
      brandName: "Web",
      lang: "ru",
      model: "Web",
      osVersion: "Web",
      platform: "web",
      screenResolution: "Web",
      udid: "65eeaed8-ce5e-414f-9193-5246b913bdec",
    }),
  });
  const res = await req.json();
  console.log(res);
  localStorage.setItem("session_token", JSON.stringify(res));

  return res;
};

export const signUp = async (login: string): Promise<any> => {
  if (!localStorage.getItem("session_token")) {
    await GetSessionToken();
  }

  let session: ISessionStorage = JSON.parse(
    localStorage.getItem("session_token")!
  );

  const path = "/account/profile";
  const req = await fetch(path, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: "Token " + session.token,
    },
    body: JSON.stringify({
      login,
      confirmationGDPRDate: new Date().getTime(),
    }),
  });

  console.log("Задержись, посмотрись", req);
  if (req.status !== 200) {
    return { status: "error", data: await req.json() };
  } else {
    return { status: "success", data: await req.json() };
  }
};
