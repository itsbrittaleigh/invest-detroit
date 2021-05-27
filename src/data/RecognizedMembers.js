const Board = [
  {
    name: 'Matthew P. Cullen — Chairman',
    title: 'Principal and Chairman of the Board, JACK Entertainment',
  },
  {
    name: 'Roderick D. Gillum — Vice Chairman',
    title: 'Chair, Board Governance and Nominating Committee (through Oct. 2020); Partner, Jackson Lewis, P.C.',
  },
  {
    name: 'John Blanchard',
    title: 'Director of Local Government Relations, General Motors',
  },
  {
    name: 'JoAnn Chàvez',
    title: 'Senior Vice President and Chief Legal Officer, DTE Energy',
  },
  {
    name: 'Antoine M. Garibaldi, Ph.D.',
    title: 'President, University of Detroit Mercy',
  },
  {
    name: 'Wright L. Lassiter, III',
    title: 'President and CEO, Henry Ford Health System',
  },
  {
    name: 'Wendy Lewis Jackson',
    title: 'Managing Director, Detroit, The Kresge Foundation',
  },
  {
    name: 'Richard A. Manoogian',
    title: 'Chairman Emeritus, Masco Corporation',
  },
  {
    name: 'Charles G. (Chip) McClure',
    title: 'Chair, Board Investment Committee; Managing Partner, Michigan Capital Advisors',
  },
  {
    name: 'Jerry Norcia (through April 2020)',
    title: 'President and CEO, DTE Energy',
  },
  {
    name: 'Chris Rizik',
    title: 'Chief Executive Officer, Renaissance Venture Capital Fund',
  },
  {
    name: 'Alan S. Schwartz',
    title: 'Chair, Board Audit and Finance Committee; Partner, Honigman',
  },
  {
    name: 'Suzanne Shank',
    title: 'President and CEO, Co-Founder, Siebert Williams Shank & Co., LLC',
  },
  {
    name: 'Gary Torgow',
    title: 'Chairman, Chemical Financial Corporation',
  },
  {
    name: 'Laura Trudeau',
    title: 'Chair, Board Governance and Nominating Committee; Principal, Trudeau Consulting, LLC',
  },
  {
    name: 'David Blaszkiewicz',
    title: 'Ex-Officio Board Member; President and CEO, Invest Detroit',
  },
  {
    name: 'Sarah McClelland (through June 2020)',
    title: 'Ex-Officio Board Member; Chief Operating Officer, Invest Detroit',
  },
  {
    name: 'Paul Trulik - Secretary & Treasurer',
    title: 'President, Apparatus Solutions, Inc.',
  },
  {
    name: 'Donald Kunz - Board Legal Advisor',
    title: 'Partner, Honigman',
  },
];

const Staff = [
  {
    name: 'Darnell Adams',
    title: 'Vice President, Program Implementation',
  },
  {
    name: 'Maureen Anway',
    title: 'Associate Vice President, Neighborhoods',
  },
  {
    name: 'Nate Barnes',
    title: 'Associate Vice President, Neighborhoods',
  },
  {
    name: 'Jason Barnett',
    title: 'Senior Vice President, Lending',
  },
  {
    name: 'Benjamin Bernstein',
    title: 'Principal, ID Ventures',
  },
  {
    name: 'David Blaszkiewicz',
    title: 'President and CEO',
  },
  {
    name: 'Ross Campbell',
    title: 'Senior Associate, Loan Accounting',
  },
  {
    name: 'Keona Cowan',
    title: 'Executive Vice President, Lending and Chief Lending Officer',
  },
  {
    name: 'Martin Dober',
    title: 'Senior Vice President, Venture and Managing Director, ID Ventures',
  },
  {
    name: 'Valerie Doyle',
    title: 'Associate Vice President, Portfolio Management',
  },
  {
    name: 'Derek Edwards',
    title: 'Senior Vice President, Lending',
  },
  {
    name: 'Shannon Ferrini',
    title: 'Executive Assistant',
  },
  {
    name: 'Elizabeth Freitas',
    title: 'Vice President and Head of Portfolio Management',
  },
  {
    name: 'Brittany Fritsch',
    title: 'Associate Vice President, Finance and Accounting',
  },
  {
    name: 'Amber Gladney',
    title: 'Senior Vice President, Administration and Operations',
  },
  {
    name: 'Patricia Glaza',
    title: 'Executive Vice President, Venture and Managing Director, ID Ventures',
  },
  {
    name: 'Danielle Graceffa (2021)',
    title: 'General Counsel',
  },
  {
    name: 'Jamie Grimaldi, CPA',
    title: 'Senior Vice President, Finance and Accounting',
  },
  {
    name: 'Jennifer Hayes',
    title: 'Senior Vice President, Operations and Policy',
  },
  {
    name: 'Randy Hyde',
    title: 'Senior Vice President, External Relations',
  },
  {
    name: 'Kathi Kucharski',
    title: 'Vice President, Grants Administration',
  },
  {
    name: 'Carrie Lewand-Monroe',
    title: 'Executive Vice President, Strategy and Programs',
  },
  {
    name: 'Zhao Ma (through March 2021)',
    title: 'Analyst, ID Ventures',
  },
  {
    name: 'Lindsey Marvicsin (through April 2021)',
    title: 'Associate, Portfolio Management',
  },
  {
    name: 'Colleen Mattia',
    title: 'Associate Vice President, Credit',
  },
  {
    name: 'Allison Murdock',
    title: 'Analyst, ID Ventures',
  },
  {
    name: 'Sarah McClelland (through June 2020)',
    title: 'Chief Operating Officer',
  },
  {
    name: 'Thomas Million (through April 2020)',
    title: 'Senior Vice President and Chief Credit Officer',
  },
  {
    name: 'Therese Nottingham, CPA',
    title: 'Vice President, Loan Accounting',
  },
  {
    name: 'Jeff Ponders II (2021)',
    title: 'Principal, Portfolio Success, ID Ventures',
  },
  {
    name: 'Ashwin Puri (through May 2020)',
    title: 'Associate, ID Ventures'
  },
  {
    name: '`Tember Shea',
    title: 'Portfolio Manager, ID Ventures',
  },
  {
    name: 'Michael R. Smith',
    title: 'Vice President, Neighborhoods',
  },
  {
    name: 'Todd Suriano',
    title: 'Vice President and Senior Loan Underwriter',
  },
  {
    name: 'Tosha Tabron (through January 2021)',
    title: 'Senior Vice President, Lending',
  },
  {
    name: 'Cristina M. Thibodeau',
    title: 'Executive Assistant',
  },
  {
    name: 'Marcia Ventura',
    title: 'Senior Vice President, Lending',
  },
  {
    name: 'Mike Vieregge',
    title: 'Senior Vice President, Lending',
  },
  {
    name: 'Jason Zalewski',
    title: 'Vice President and Senior Credit Officer',
  },
];

const CDE = [
  {
    name: 'David Blaszkiewicz – Chairman',
    title: 'Invest Detroit',
  },
  {
    name: 'Kenyetta Bridges',
    title: 'Detroit Economic Growth Corporation',
  },
  {
    name: 'Joshua R. Elling',
    title: 'Jefferson East, Inc.',
  },
  {
    name: 'Susan Mosey',
    title: 'Midtown Detroit, Inc.',
  },
  {
    name: 'Tahirih Ziegler',
    title: 'Detroit LISC'
  },
];

const Investment = [
  {
    name: 'James Blanks',
    title: 'First Independence Bank',
  },
  {
    name: 'Kenyetta Bridges',
    title: 'Detroit Economic Growth Corporation',
  },
  {
    name: 'Melinda Clemons',
    title: 'Enterprise Community Partners',
  },
  {
    name: 'Freddie DuBose',
    title: 'PAINIA Development Corporation',
  },
  {
    name: 'Richmond Hawkins',
    title: 'Detroit Development Fund',
  },
  {
    name: 'Steven Hilfinger',
    title: 'Foley & Lardner LLP'
  },
  {
    name: 'Jed Howbert',
    title: 'Greatwater Opportunity Capital LLC',
  },
  {
    name: 'Phillip Goy',
    title: 'KPMG',
  },
  {
    name: 'Joel Kellman',
    title: 'Dykema',
  },
  {
    name: 'Tom Lakocy',
    title: 'J.P. Morgan Securities, LLC',
  },
  {
    name: 'Denise Lewis',
    title: 'Honigman (Retired)',
  },
  {
    name: 'Gregory Mickens',
    title: 'Edward Jones',
  },
  {
    name: 'Tim Monahan (through August 2020)',
    title: 'KPMG',
  },
  {
    name: 'Gregory Nelson',
    title: 'Pulte Corporation (Retired)',
  },
  {
    name: 'Michael Rhodes',
    title: 'JPMorgan Chase & Co.',
  },
  {
    name: 'David Schostak',
    title: 'Schostak Brothers & Co.',
  },
  {
    name: 'Aaron Seybert',
    title: 'The Kresge Foundation',
  },
  {
    name: 'Eliot Stark',
  },
];

const Oversight = [
  {
    name: 'Thomas Lakocy',
    title: 'J.P. Morgan Securities, LLC',
  },
  {
    name: 'Denise Lewis',
    title: 'Honigman (Retired)',
  },
  {
    name: 'Gregory Nelson',
    title: 'Pulte Corporation (Retired)',
  },
  {
    name: 'Aaron Seybert',
    title: 'The Kresge Foundation',
  },
  {
    name: 'Eliot Stark'
  },
];

const Advisory = [
  {
    name: 'James S. Bernacki',
    title: 'Comerica Bank',
  },
  {
    name: 'Stacy Esbrook',
    title: 'Enterprise Community Partners',
  },
  {
    name: 'Bryan Hogle',
    title: 'The Kresge Foundation',
  },
  {
    name: 'Malinda L. Jensen',
    title: 'Detroit Economic Growth Corporation',
  },
  {
    name: 'Katy Locker',
    title: 'Bridge Michigan',
  },
  {
    name: 'Michael B. Shaw',
    title: 'Hudson-Webber Foundation',
  },
  {
    name: 'William Smith',
    title: 'Detroit RiverFront Conservancy',
  },
  {
    name: 'Paul Trulik',
    title: 'Apparatus Solutions, Inc.',
  },
  {
    name: 'Nathaniel L. Wallace',
    title: 'John S. and James L. Knight Foundation',
  },
  {
    name: 'Ray Waters',
    title: 'Detroit Development Fund',
  },
  {
    name: 'Joseph Zayance',
    title: 'Huntington Bank',
  },
  {
    name: 'Tahirih Ziegler',
    title: 'Detroit LISC',
  },
  {
    name: 'Susan Mosey - Program Partner Representative',
    title: 'Midtown Detroit, Inc.',
  },
  {
    name: 'Robert Gregory - Program Partner Representative',
    title: 'Downtown Detroit Partnership'
  }
];

const Capital = [
  {
    name: 'Chris Rizik – Chairman',
    title: 'Renaissance Venture Capital Fund',
  },
  {
    name: 'Patricia Glaza',
    title: 'Invest Detroit',
  },
  {
    name: 'Jack Ahrens',
    title: 'TGap Ventures, LLC',
  },
  {
    name: 'Karl Bell',
    title: 'GAA New Ventures LLC',
  },
  {
    name: 'Adrian Fortino',
    title: 'Mercury Fund',
  },
  {
    name: 'Rob Jandernoa',
    title: '42 North Partners',
  },
  {
    name: 'Alisyn Malek',
    title: 'Commission of the Future of Mobility',
  },
  {
    name: 'Charlie Moret',
    title: 'Invest Michigan',
  },
  {
    name: 'Ray Waters',
    title: 'Detroit Development Fund',
  },
  {
    name: 'Nataliya Stasiw - Observer',
    title: 'Michigan Economic Development Corp.',
  }
];

const Innovate = [
  {
    name: 'Jim Adox',
    title: 'Venture Investors',
  },
  {
    name: 'Josh Beebe',
    title: 'MK Capital',
  },
  {
    name: 'Martin Dober',
    title: 'Invest Detroit',
  },
  {
    name: 'Patricia Glaza',
    title: 'Invest Detroit',
  },
  {
    name: 'Tom Porter',
    title: 'Trillium Ventures',
  },
  {
    name: 'Ryan Waddington',
    title: 'Huron River Ventures',
  },
];

const Donor = [
  {
    name: 'American Axle Manufacturing',
  },
  {
    name: 'Ballmer Group',
  },
  {
    name: 'Bank of America',
  },
  {
    name: 'Blue Cross Blue Shield of Michigan',
  },
  {
    name: 'Comerica Bank',
  },
  {
    name: 'Community Development Financial Institutions Fund',
  },
  {
    name: 'Community Foundation for Southeast Michigan',
  },
  {
    name: 'William Davidson Foundation',
  },
  {
    name: 'Fifth Third Foundation',
  },
  {
    name: 'Flagstar Foundation',
  },
  {
    name: 'Ford Foundation',
  },
  {
    name: 'Hudson-Webber Foundation',
  },
  {
    name: 'Huntington Bank',
  },
  {
    name: 'JPB Foundation',
  },
  {
    name: 'JPMorgan Chase Foundation',
  },
  {
    name: 'W.K. Kellogg Foundation',
  },
  {
    name: ''
  },
  {
    name: 'John S. and James L. Knight Foundation',
  },
  {
    name: 'The Kresge Foundation',
  },
  {
    name: 'Michigan Economic Development Corporation',
  },
  {
    name: 'New Economy Initiative',
  },
  {
    name: 'Penske Corporation',
  },
  {
    name: 'MacKenzie Scott',
  },
  {
    name: 'Skillman Foundation',
  },
  {
    name: 'TCF Bank',
  },
  {
    name: 'Ralph C. Wilson, Jr. Foundation',
  },
];

const Members = {
  Board,
  Staff,
  CDE,
  Investment,
  Oversight,
  Advisory,
  Capital,
  Innovate,
  Donor,
};

export default Members;