import config from "./config";

async function getToken() {
  const req = await fetch("https://www.googleapis.com/oauth2/v4/token", {
    method: "POST",
    body: JSON.stringify({
      client_id: config.clientid,
      client_secret: config.client_secret,
      refresh_token: config.refresh_token,
      grant_type: "refresh_token",
    }),
  });
  const resp = await req.json();
  return resp.access_token;
}

async function append(options) {
  const token = await getToken();
  await fetch(
    `https://sheets.googleapis.com/v4/spreadsheets/${options.sheetid}/values/${options.range}:append?valueInputOption=USER_ENTERED`,
    {
      method: "POST",
      body: JSON.stringify({
        range: `${options.range}`,
        values: [options.value],
      }),
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
        Accept: "application/json",
      },
    }
  );
  return { success: true };
}

async function getForm(options) {
  const token = await getToken();
  const request = await fetch(
    `https://sheets.googleapis.com/v4/spreadsheets/${options.sheetid}/values/A:E`,
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
        Accept: "application/json",
      },
    }
  );
  const data = await request.json();
  //   console.log(data);
  data.values.shift();
  const values = data.values;
  if (options.id === "all") {
    return values;
  }
  for (let i = 0; i < values.length; i++) {
    if (values[i][2] === options.id) {
      return {
        title: values[i][3],
        fields: values[i][0],
        sheetId: values[i][1],
      };
    }
  }
  return {
    noform: true,
  };
}

async function createForm(options) {
  const token = await getToken();
  const request = await fetch(`https://sheets.googleapis.com/v4/spreadsheets`, {
    method: "POST",
    // body : JSON.stringify({
    //     title : `${options.title} (Responses)`,
    // }),
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
      Accept: "application/json",
    },
  });
  const data = await request.json();
  return { sheetId: data.spreadsheetId };
}

async function upload(options) {
  const token = await getToken();
  var formdata = new FormData();
  formdata.append("file", options.file);
  const request = await fetch(
    `https://www.googleapis.com/upload/drive/v3/files?uploadType=media`,
    {
      method: "POST",
      body: formdata,
      headers: {
        "Content-Type": options.file.type,
        Authorization: `Bearer ${token}`,
      },
    }
  );
  const data = await request.json();
  console.log(data);
  return {
    id: `https://drive.google.com/file/u/1/d/${data.id}/view?usp=drive_open`,
  };
}

export { append, getForm, createForm, upload };
