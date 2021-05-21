import React, { useEffect } from "react";
import { getForm} from './utils';

export default function Staticforms() {
  useEffect(() => {
    // window.gapi.load("client:auth2", () => {
    //     window.gapi.client.init({
    //         apiKey : config.apiKey,
    //         discoveryDocs : config.discoveryDocs,
    //         scope: config.SCOPES,
    //         clientId : config.clientid
    //     }).then(() => {
    //         window.gapi.client.load("sheets", "v4", () => {
    //             window.gapi.client.sheets.spreadsheets.values
    //               .get({
    //                 spreadsheetId: config.spreadsheetId,
    //                 range: "Sheet1!A4:T"
    //               }).then((resp) => {
    //                   console.log(resp);
    //               })
    //     });
    // });} );
    // async function getData() {
    //     const req = await fetch("https://www.googleapis.com/oauth2/v4/token", {
    //       method : "POST",
    //       body : JSON.stringify({
    //         client_id : "665558898114-gr9ej0d7erd668p6i7evs4t613nscaq5.apps.googleusercontent.com",
    //         client_secret: "tz9_JbF6mkfSYyMB2ZjEtY2m",
    //         refresh_token: "1//0gBEQBooJHxZbCgYIARAAGBASNwF-L9Ir5K7jwHPCrxg-1usn0tCDr7si6VmZY5cOucvPLLp4fZwn5OztSSN4VdVPbnp7A-tb5Sg",
    //         grant_type: "refresh_token",
    //       })
    //     });
    //     const resp = await req.json();
    //     console.log(resp);
    //     const request = await fetch(`https://sheets.googleapis.com/v4/spreadsheets/1vlHeze0LhCoVMwWjE9ocFo7TZqc2iOFdQYXFiVSoCMs/values/A1:C3`,
    //     {
    //       headers: {
    //         "Content-Type": "application/json",
    //         Authorization: `Bearer ${resp.access_token}` ,
    //         Accept : "application/json" 
    //     }
    //     });
    //     const data = await request.json();
    //     console.log(data);
    //     const appreq = await fetch(`https://sheets.googleapis.com/v4/spreadsheets/1vlHeze0LhCoVMwWjE9ocFo7TZqc2iOFdQYXFiVSoCMs/values/A:C:append?valueInputOption=USER_ENTERED`, {
    //       method: "POST",
    //       body : JSON.stringify({
    //         "range" : "A:C",
    //         // valueInputOption: "RAW",
    //         // insertDataOption: "INSERT_ROWS",
    //         "values" : [
    //           ["sai teja", "tejs@123.com", "45678"],
    //           ["tejs", "tejs@sj.com", "987654"]
    //         ],
    //       }),
    //       headers: {
    //         "Content-Type": "application/json",
    //         Authorization: `Bearer ${resp.access_token}` ,
    //         Accept : "application/json" 
    //     }
    //     });
    //     const respa = await appreq.json();
    //     console.log(respa);
    // }
    // getData();
    // append({
    //   "sheetid" : "1vlHeze0LhCoVMwWjE9ocFo7TZqc2iOFdQYXFiVSoCMs",
    //   "range" : "A:C",
    //   "value" : ["something", "some@thing.com", "47666466"]
    // });
    getForm({
      sheetid: "12SQ2hzzYqUjkCzlDrSWg8dmxYdo6WGrJmSUaiE9JQ_E",
      id : "all"
    }).then((res) => {console.log(res)});
  }, []);

  return (
    <div>
      <center>
        <h1>something</h1>
      </center>
    </div>
  );
}
