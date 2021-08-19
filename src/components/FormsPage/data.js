import forms from '../formsDisplayPage/formsPage';

var formDetails = [
  [],
  [
    '{"fields":[{"name":"Name","type":"text","required":true},{"name":"Email","type":"text","required":true},{"name":"LinkedIn","type":"text","required":true},{"name":"Github","type":"text","required":true},{"name":"Display Picture","type":"file","required":true}]}',
    '1LSPhGQVfcY75IoaVWNdy8j7_18dGz9YXGqtXxR35nuk',
    'team-form',
    'CII Website Team Page Details',
  ],
  [
    '{"fields":[{"name":"NAME:","type":"text","required":true},{"name":"PAN/AADHAR NUMBER*:","type":"number","required":true},{"name":"INSTITUTE*:","type":"text","required":true},{"name":"DEGREE PURSUED*:","type":"text","required":true},{"name":"YEARS OF COMPLETION*:","type":"number","required":true},{"name":"OCCUPATION*:","type":"text","required":true},{"name":"COMPANY*:","type":"text","required":true},{"name":"PHONE:","type":"number","required":true},{"name":"Startup Info - NAME OF STARTUP:","type":"text","required":true},{"name":"Startup Info - SECTOR: (B2B, HEALTHCARE, CONSUMER GOODS AND SERVICES, FINANCIAL TECHNOLOGY, CONSUMER MEDIA OR OTHER)","type":"long","required":true},{"name":"Startup Info - PHASE: (IDEATION, VALIDATION, TRACTION)","type":"text","required":true},{"name":"INCORPORATION/REGISTRATION NUMBER*:","type":"number","required":true},{"name":"DATE OF INCORPORATION/REGISTRATION: (DD MM YY) ","type":"number","required":true}]}',
    '1be_2JiK6Egqw9Uz_zgFzyuN79HHnLhM_4g4lGhR5AuA',
    '6',
    'CII Start-up Registration Form',
  ],
  [
    '{"fields":[{"name":"Name","type":"text","required":true},{"name":"Hackerrank ID ","type":"text","required":true},{"name":"Week-1 Project Repo Link","type":"text","required":true},{"name":"Tell us something about Week-1? Any scope of improvements for week 2?","type":"long","required":true}]}',
    '1d-bTTQcB4IIGMIGl-aciem05aLJ6NmRopoe3gWSCpLw',
    'web-submission-1',
    'CII Mentorship - Web, Week-1 ',
  ],
  [
    '{"fields":[{"name":"Name","type":"text","required":true},{"name":"Week-1 Project Repo Link","type":"text","required":true},{"name":"Tell us something about Week-1? Any scope of improvements for week 2?","type":"long","required":true}]}',
    '1RsBi2cuSX-JpV65bOw5blhp0NK40mhFZ4RyvmBQ9zr4',
    'app-submission-1',
    'CII Mentorship - App, Week-1',
  ],
  [
    '{"fields":[{"name":"NAME*:","type":"text","required":true},{"name":"INSTITUTE*:","type":"text","required":true},{"name":"DEGREE PURSUED*:","type":"text","required":true},{"name":"YEAR OF COMPLETION*:","type":"text","required":true},{"name":"PHONE*:","type":"number","required":true},{"name":"EMAIL*:","type":"text","required":true},{"name":"Alternative POC - NAME*:","type":"text","required":true},{"name":"Alternative POC - PHONE*:","type":"number","required":true},{"name":"Alternative POC- EMAIL*:","type":"text","required":true},{"name":"Startup Info - NAME*:","type":"text","required":true},{"name":"Startup Info - DOMAIN*(B2B, HEALTHCARE, CONSUMER GOOD AND SERVICES, FINANCIAL TECHNOOGY, CONSUMER MEDIA, OTHER(SPECIFY)):","type":"text","required":true},{"name":"Startup Info - NATURE OF TECHNOLOGY EMPLOYED*(Eg- WEB DEVELOPMENT, IOT, BLOCKCHAIN, FABRICATION):","type":"text","required":true},{"name":"Startup Info - NUMBER OF MEMBERS INVOLVED IN BUILDING THE STARTUP*:","type":"number","required":true},{"name":"Startup Info - HAVE YOU COMPLETED YOUR MARKET ANALYSIS?* (YES OR NO) : ","type":"text","required":true},{"name":"Startup Info - KINDLY SPECIFY THE NATURE OF ASSISTANCE YOU EXPECT FROM CII*: ","type":"long","required":true},{"name":"Startup Info - INCORPORATION/REGISTRATION NUMBER:","type":"number","required":false},{"name":"Startup Info - DATE OF INCORPORATION/REGISTRATION (DD MM YY):","type":"text","required":true},{"name":"KINDLY UPLOAD YOUR STARTUP PRESENTATION*: ","type":"file","required":true}]}',
    '1tu697iLpQjXeKlZvv-pCeNGUf8B5hYg6eFTQWUyHLzA',
    'start-up',
    'CII Startup Cell Incubator Registration Form',
  ],
  [
    '{"fields":[{"name":"NAME*","type":"text","required":true},{"name":"PROJECT REPO LINK*","type":"text","required":true},{"name":"TELL US SOMETHING ABOUT WEEK 2*","type":"long","required":true}]}',
    '1rgdFhImpoJI9zZ2oBTLvwKguznfZiqVZlNJc96WBP7c',
    'app-submission-2',
    'CII Mentorship - App Dev, Week-2',
  ],
  [
    '{"fields":[{"name":"Name*","type":"text","required":true},{"name":"Github Link - JavaScript Code*","type":"text","required":true},{"name":"Github Link - ReactJS Calculator(repo)*","type":"text","required":true},{"name":"Github Deployment Link(optional) ","type":"text","required":false}]}',
    '1zZtGD68kx56GPc8WvuCtVp5rsva8joT45MKYCsq_uTM',
    'axaz2386@$',
    'CII Mentorship - Web, Week-2',
  ],
  [
    '{"fields":[{"name":"Email *","type":"text","required":true},{"name":"Name *","type":"text","required":true},{"name":"Cell Phone Number *","type":"text","required":true},{"name":"Current Organization *","type":"text","required":true},{"name":"Website of the organization *","type":"text","required":true},{"name":"Your current position in the organization *","type":"text","required":true},{"name":"Your highest level of education *","type":"text","required":true},{"name":"Your areas of expertise *","type":"text","required":true},{"name":"Do you have any entrepreneurship experience? *","type":"text","required":true},{"name":"Your personal website/social media handle *","type":"text","required":true},{"name":"Which types of startups can you mentor?  (Health-tech, IT or IT Enabled Services, Agri-tech, Electronics, Edu-tech, E-commerce, Mobile Apps, Gaming, Fin-tech, Robotics and automation, Food and food processing, Human resources, Materials, Real-estate and civil engineering, Bio-tech, Manufacturing, Clean energy or Other) *","type":"long","required":true},{"name":"You can provide mentorship in which aspects? (Technology Development, Business Development, Sales and Marketing, Networking, Raising Capital)","type":"long","required":false},{"name":"How many hours per month can you devote to mentoring? (1 Hour 2 Hours 4 Hours) *","type":"long","required":true},{"name":"Mode of mentorship that you would prefer? (Physically at CII NITW office,  Startup founders may visit your office,  Online) *","type":"long","required":true},{"name":"Attach your resume/biodata","type":"file","required":false}]}',
    '1HOFZI1G13IoPRvcLe9AGxdMmgX6yo3LWEaI1_i74rVc',
    'expression-of-interest-for-mentorship-nitw',
    'Expression of Interest for Mentorship to NIT Warangal Incubated Startups',
  ],
  ['a', 'b', 'c', 'd'],
];
