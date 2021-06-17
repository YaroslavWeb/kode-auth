export const GetSessionToken = async () => {
  const url = "https://www.utair.ru/mobile/api/v8/sessions/guest";

  const req = await fetch(url, {
    method: "POST",
    mode: "no-cors",
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
  localStorage.setItem("session_token", res);
};

export const signUp = async (login: string): Promise<any> => {
  if (!localStorage.getItem("session_token")) {
    await GetSessionToken();
  }

  const url = "https://www.utair.ru/mobile/api/v8/account/profile";
  const req = await fetch(url, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      login,
      confirmationGDPRDate: new Date().getTime(),
    }),
  });
  return req.json();
};
