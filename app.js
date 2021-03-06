//  - Shift, unshift, push, pop

let csvData = [
  [
    'Attended',
    'User Name (Original Name)',
    'First Name',
    'Last Name',
    'Email',
    'Country/Region',
    'State/Province',
    'Registration Time',
    'Approval Status',
    'Join Time',
    'Leave Time',
    'Time in Session (minutes)',
    'Country/Region Name',
    ''
  ],
  [
    'Yes',
    'Summer Camp Program',
    'Summer',
    'Camp Program',
    'coach@summercamp.com',
    '',
    '',
    '',
    '',
    'Feb 03, 2021 18:30:56',
    'Feb 03, 2021 19:22:19',
    '52',
    'United States of America',
    ''
  ],
  [
    'Yes',
    'Severus Snape',
    'Severus',
    'Snape',
    'Severus.p.Snape@Summer.com',
    'US',
    'Other',
    'Jan 27, 2021 18:37:43',
    'approved',
    'Feb 03, 2021 18:31:35',
    'Feb 03, 2021 19:22:20',
    '51',
    'United States of America',
    ''
  ],
  [
    'Yes',
    'Frodo Baggins',
    'Frodo',
    'Baggins',
    'Frodo.Baggins@Summer.com',
    'US',
    'Other',
    'Feb 03, 2021 13:19:16',
    'approved',
    'Feb 03, 2021 18:39:26',
    'Feb 03, 2021 19:22:19',
    '43',
    'United States of America',
    ''
  ],
  [
    'Yes',
    'Bilbo Baggins',
    'Bilbo',
    'Baggins',
    'Bilbo.Baggins@Summer.com',
    'US',
    'Other',
    'Jan 27, 2021 18:09:46',
    'approved',
    'Feb 03, 2021 18:31:44',
    'Feb 03, 2021 19:22:20',
    '51',
    'United States of America',
    ''
  ],
  [
    'Attended',
    'User Name (Original Name)',
    'First Name',
    'Last Name',
    'Email',
    'Country/Region',
    'State/Province',
    'Registration Time',
    'Approval Status',
    'Join Time',
    'Leave Time',
    'Time in Session (minutes)',
    'Country/Region Name',
    ''
  ],
  [
    'Yes',
    'Summer Camp Program',
    'Summer',
    'Camp Program',
    'coach@summercamp.com',
    '',
    '',
    '',
    '',
    'Feb 01, 2021 18:29:05',
    'Feb 01, 2021 19:24:16',
    '56',
    'United States of America',
    ''
  ],
  [
    'Yes',
    'Severus Snape',
    'Severus',
    'Snape',
    'Severus.p.Snape@Summer.com',
    'US',
    'Other',
    'Jan 27, 2021 18:37:43',
    'approved',
    'Feb 01, 2021 18:32:55',
    'Feb 01, 2021 19:24:15',
    '52',
    'United States of America',
    ''
  ],
  [
    'No',
    'Harry',
    'Harry',
    'Potter',
    'Harry.r.Potter@Summer.com',
    'US',
    'Other',
    'Feb 01, 2021 11:15:38',
    'approved',
    '--',
    '--',
    '--',
    'United States of America',
    ''
  ],
  [
    'No',
    'Bilbo',
    'Bilbo',
    'Baggins',
    'Bilbo.Baggins@Summer.com',
    'US',
    'Other',
    'Jan 27, 2021 18:09:46',
    'approved',
    '--',
    '--',
    '--',
    'United States of America',
    ''
  ],
  [
    'Attended',
    'User Name (Original Name)',
    'First Name',
    'Last Name',
    'Email',
    'Country/Region',
    'State/Province',
    'Registration Time',
    'Approval Status',
    'Join Time',
    'Leave Time',
    'Time in Session (minutes)',
    'Country/Region Name',
    ''
  ],
  [
    'Yes',
    'Summer Camp Program',
    'Summer',
    'Camp Program',
    'coach@summercamp.com',
    '',
    '',
    '',
    '',
    'Jan 27, 2021 18:30:14',
    'Jan 27, 2021 19:23:59',
    '54',
    'United States of America',
    ''
  ],
  [
    'Yes',
    'Severus Snape',
    'Severus',
    'Snape',
    'Severus.p.Snape@Summer.com',
    'US',
    'Other',
    'Jan 27, 2021 18:37:43',
    'approved',
    'Jan 27, 2021 18:37:49',
    'Jan 27, 2021 19:14:48',
    '37',
    'United States of America',
    ''
  ],
  [
    'Yes',
    'Severus Snape',
    'Severus',
    'Snape',
    'Severus.p.Snape@Summer.com',
    '',
    '',
    '',
    '',
    'Jan 27, 2021 19:15:13',
    'Jan 27, 2021 19:23:59',
    '9',
    'United States of America',
    ''
  ],
  [
    'Yes',
    'Bilbo Baggins',
    'Bilbo',
    'Baggins',
    'Bilbo.Baggins@Summer.com',
    'US',
    'Other',
    'Jan 27, 2021 18:09:46',
    'approved',
    'Jan 27, 2021 18:30:54',
    'Jan 27, 2021 19:23:59',
    '54',
    'United States of America',
    ''
  ],
  [
    'Attended',
    'User Name (Original Name)',
    'First Name',
    'Last Name',
    'Email',
    'Country/Region',
    'State/Province',
    'Registration Time',
    'Approval Status',
    'Join Time',
    'Leave Time',
    'Time in Session (minutes)',
    'Country/Region Name',
    ''
  ],
  [
    'Yes',
    'Summer Camp Program',
    'Summer',
    'Camp Program',
    'coach@summercamp.com',
    '',
    '',
    '',
    '',
    'Jan 22, 2021 18:29:59',
    'Jan 22, 2021 19:28:39',
    '59',
    'United States of America',
    ''
  ],
  [
    'Yes',
    'Bilbo Baggins',
    'Bilbo',
    'Baggins',
    'Bilbo.Baggins@Summer.com',
    'US',
    'Other',
    'Jan 08, 2021 18:06:45',
    'approved',
    'Jan 22, 2021 18:32:00',
    'Jan 22, 2021 19:28:38',
    '57',
    'United States of America',
    ''
  ],
  [
    'Yes',
    'Severus Snape',
    'Severus',
    'Snape',
    'Severus.p.Snape@Summer.com',
    'US',
    'OR',
    'Jan 08, 2021 00:22:54',
    'approved',
    'Jan 22, 2021 18:34:47',
    'Jan 22, 2021 19:28:38',
    '54',
    'United States of America',
    ''
  ],
  [
    'Attended',
    'User Name (Original Name)',
    'First Name',
    'Last Name',
    'Email',
    'Country/Region',
    'State/Province',
    'Registration Time',
    'Approval Status',
    'Join Time',
    'Leave Time',
    'Time in Session (minutes)',
    'Country/Region Name',
    ''
  ],
  [
    'Yes',
    'Summer Camp Program',
    'Summer',
    'Camp Program',
    'coach@summercamp.com',
    '',
    '',
    '',
    '',
    'Jan 20, 2021 18:29:50',
    'Jan 20, 2021 19:22:44',
    '53',
    'United States of America',
    ''
  ],
  [
    'Yes',
    'Severus Snape',
    'Severus',
    'Snape',
    'Severus.p.Snape@Summer.com',
    'US',
    'OR',
    'Jan 08, 2021 00:22:54',
    'approved',
    'Jan 20, 2021 18:30:56',
    'Jan 20, 2021 19:22:44',
    '52',
    'United States of America',
    ''
  ],
  [
    'Attended',
    'User Name (Original Name)',
    'First Name',
    'Last Name',
    'Email',
    'Country/Region',
    'State/Province',
    'Registration Time',
    'Approval Status',
    'Join Time',
    'Leave Time',
    'Time in Session (minutes)',
    'Country/Region Name',
    ''
  ],
  [
    'Yes',
    'Summer Camp Program',
    'Summer',
    'Camp Program',
    'coach@summercamp.com',
    '',
    '',
    '',
    '',
    'Jan 15, 2021 18:28:15',
    'Jan 15, 2021 19:28:53',
    '61',
    'United States of America',
    ''
  ],
]

let headerRow = csvData.slice().shift();

let arr2 = csvData.slice();
arr2.forEach(function(r, index){
  if ( r[0] === 'Attended' ) {
    console.log("r[1] is " + r[1]);
    console.log("This is r: " + index);
    console.log(r);
    arr2.splice(index,1);
  }
});
arr2.forEach(function(r, index){
  if ( r[1] === 'Summer Camp Program' ){
    console.log("r[1] is " + r[1]);
    console.log("This is r: " + index);
    console.log(r);
    arr2.splice(index,1);
  }
});

arr2.unshift(headerRow);

console.log("arr2");
console.log(arr2);
