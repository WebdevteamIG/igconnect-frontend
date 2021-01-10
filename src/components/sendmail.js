export default async function sendmail(options) {
  await window.Email.send({
    Host: "smtp.gmail.com",
    Username: "ig-nitw@student.nitw.ac.in",
    Password: "Innovate@IG",
    To: options.recievers,
    From: "ig-nitw@student.nitw.ac.in",
    Subject: options.subject,
    Body: options.body,
  });
}
