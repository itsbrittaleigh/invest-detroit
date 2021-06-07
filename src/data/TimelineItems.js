import Zoom from '../assets/images/timeline/2020_Zoom-Photo.png';
import PizzaBar from '../assets/images/timeline/2019_Detroit-Pizza-Bar.jpg';
import AMIC from '../assets/images/timeline/2019_AMIC-10-Years.jpg';
import Map18 from '../assets/images/timeline/2018_Map.jpg';
import Siegel from '../assets/images/timeline/2018_B-Siegel.jpg';
import Coe from '../assets/images/timeline/2017_The-Coe.jpg';
import Norma from '../assets/images/timeline/2017_Norma-Gs.jpg';
import Metropolitan from '../assets/images/timeline/2017_Metropolitan-Rendering.jpg';
import Kamper from '../assets/images/timeline/2017_Kamper-and-Stevens.jpg';
import Murray from '../assets/images/timeline/2016_The-Murray.jpg';
import Strategic from '../assets/images/timeline/2016_Strategic-Neighborhood-Fund.jpg';
import Willis from '../assets/images/timeline/2014_Woodward-Willis.jpg';
import M1 from '../assets/images/timeline/2014_M1-Rail.jpg';
import Hacker from '../assets/images/timeline/2014_Hacker.jpg';
import Titanium from '../assets/images/timeline/2014_Global-Titanium.jpg';
import TODMap from '../assets/images/timeline/2013_TOD-Map.jpg';
import Seva from '../assets/images/timeline/2012_Seva.jpg';
import Meijer from '../assets/images/timeline/2012_Meijer.jpg';
import TODPlan from '../assets/images/timeline/2011_TOD-Plan-Cover.jpg';
import CHASS from '../assets/images/timeline/2011_CHASS.jpg';
import Auburn from '../assets/images/timeline/2011_Auburn.jpg';
import Capital from '../assets/images/timeline/2010_Capital-Park.jpg';
import Broderick from '../assets/images/timeline/2010_Broderick.jpg';
import SuperBowl from '../assets/images/timeline/2005_Super-Bowl.jpg';
import Kennedy from '../assets/images/timeline/2005_Kennedy-Square-Campus-Martius.jpg';
import TOD from '../assets/images/timeline/2005_TOD.jpg';
import Cullen from '../assets/images/timeline/2003_Matt-Cullen.jpg';
import Kales from '../assets/images/timeline/2003_Kales-Building.jpg';
import Dave from '../assets/images/timeline/2001_Dave-Blaszkiewicz-CEO.jpg';
import Ferry from '../assets/images/timeline/1997_Ferry-Building.jpg';
import Report from '../assets/images/timeline/1996_Investment-Report.jpg';
import Harris from '../assets/images/timeline/1995_Karen-Harris.jpg';
import Board from '../assets/images/timeline/1995_DIF-Board.jpg';
import Feria from '../assets/images/timeline/2013_Feria.jpg';
import DWB from '../assets/images/timeline/2013_DWB.jpg';
import Forest from '../assets/images/timeline/2009_Forest.jpg';

const browser = navigator.userAgent;
const isFirefox = browser.includes('Firefox');

const TimelineItems2020 = [
  {
    type: 'milestone',
    title: 'In response to the crisis caused by COVID-19, Invest Detroit launches vital support tools—all while working from home.',
    subtitle: 'Milestone',
    image: {
      src: Zoom,
      alt: 'People sitting on a Zoom call',
    },
    className: 'is-left',
  },
  {
    type: 'milestone',
    title: 'With support from the New Economy Initiative, the Property Owners Rental Relief Fund is created to offer grants to Detroit property owners giving rent relief concessions to small business tenants.',
    subtitle: 'Milestone',
    className: 'is-left',
  },
  {
    type: 'milestone',
    title: 'With support from the Michigan Economic Development Corporation and the New Economy Initiative, the Tech Startup Stabilization Fund is launched to provide critical capital to Michigan startups impacted by COVID.',
    subtitle: 'Milestone',
    className: isFirefox ? '' : 'is-left',
  },
  {
    type: 'milestone',
    title: 'With support from the New Economy Initiative and Comerica Bank, Invest Detroit offers loan payment relief for borrowers impacted by COVID shutdown.',
    subtitle: 'Milestone',
  },
  {
    type: 'partnership',
    title: 'Invest Detroit joins Detroit Means Business, a coalition of public, private, and philanthropic partners quickly created to connect small businesses to short- and long-term resources.',
    subtitle: 'Partnership',
  },
];

const TimelineItems2019 = [
  {
    type: 'milestone',
    title: 'ID Ventures team launches $40M campaign to turn the First Capital Fund into a sustainable source of early-stage capital.',
    subtitle: 'Milestone',
    className: 'is-left',
  },
  {
    type: 'project',
    title: 'Financing provided to Akunna Olumba and Marcus Jones of Legacy City Group to renovate a vacant commercial space in the Livernois-McNichols neighborhood to open the Detroit Pizza Bar—a restaurant that will hire and train local residents for food-service careers and support local farmers.',
    subtitle: 'Project / Business',
    image: {
      src: PizzaBar,
      alt: 'Two people smiling in front of a sign saying "This Neighborhood Project, Coming 2020"',
    },
    className: 'is-left',
  },
  {
    type: 'milestone',
    title: 'ID Ventures’ Accelerate Michigan Innovation Competition (AMIC) celebrates its 10th anniversary. AMIC is a startup pitch competition that showcases Michigan companies and provides up to $1 million in prizes annually.',
    subtitle: 'Milestone',
    image: {
      src: AMIC,
      alt: 'Many people posing on a stage with oversized checks',
    },
  },
];

const TimelineItems2018 = [
  {
    type: 'milestone',
    title: 'With generous support from philanthropic and corporate partners, the Strategic Neighborhood Fund announces its expansion from three to 10 neighborhoods across Detroit.',
    subtitle: 'Milestone',
    image: {
      src: Map18,
      alt: 'Map of Detroit with SNF planning projects and expanded SNF planning projects',
    },
    className: 'is-left',
  },
  {
    type: 'milestone',
    title: 'ID Venture reaches 100 funded startups in its portfolio of companies',
    subtitle: 'Milestone',
    className: 'is-left',
  },
  {
    type: 'project',
    title: 'Invest Detroit provides financing to developer Matt Hessler to renovate the historic B. Siegel Co. building, a once popular women’s clothing store in the 50s and 60s, at the corner of 7-Mile Road and Livernois—a neighborhood targeted for Strategic Neighborhood Fund investment. This mixed-use project will create 10 residential units and 19,000 square feet of ground floor commercial space creating over 30 new jobs.',
    subtitle: 'Project/Business',
    image: {
      src: Siegel,
      alt: 'Man standing in front of a brick storefront with a circular saw',
    },
  },
];

const TimelineItems2017 = [
  {
    type: 'milestone',
    title: 'Invest Detroit receives its first Aeris rating—a system that assesses CDFI impact, strength, and performance. Invest Detroit’s three-star double-A rating is one of the highest scores awarded for a CDFI of its size.',
    subtitle: 'Milestone',
    className: 'is-left',
  },
  {
    type: 'project',
    title: 'The Strategic Neighborhood Fund’s first project, The Coe at West Village, is completed in the Islandview/Greater Villages neighborhood. Cliff Brown of Woodborn Partners developed this mixed-use project that supported the creation of a commercial corridor in the area while providing mixed-income housing options.',
    subtitle: 'Project/Business',
    image: {
      src: Coe,
      alt: 'Picture of residential apartment building',
    },
    className: 'is-left',
  },
  {
    type: 'project',
    title: 'With financing from Invest Detroit, the Roxbury Group completes the Kamper and Stevens Apartments, preserving and improving one of the last remaining senior affordable housing projects in Detroit’s central business district.',
    subtitle: 'Project/Business',
    image: {
      src: Kamper,
      alt: 'Picture of high-rise residential apartment building',
    },
    className: 'is-left',
  },
  {
    type: 'milestone',
    title: 'With support from the Michigan Economic Development Corporation and the New Economy Initiative, ID Ventures launches the First Capital Fund dedicated to providing early-stage funding for Michigan startups with high-growth potential.',
    subtitle: 'Milestone',
    className: 'is-left',
  },
  {
    type: 'project',
    title: 'The Means Group and the Roxbury Group receive Invest Detroit financing to support the renovation of the Metropolitan Building into a new hotel. Vacant since 1979, and know by many for the full-size tree growng on its roof, the Metropolitan was one of the last historic vacant building downtown to be saved from demotion.',
    subtitle: 'Project/Business',
    image: {
      src: Metropolitan,
      alt: 'Picture of hotel lit up at night',
    },
  },
  {
    type: 'project',
    title: 'The small business team supports Norma G’s, a Caribbean restaurant in the Jefferson Chalmers neighborhood, helping to spark activity along the East Jefferson corridor.',
    subtitle: 'Project/Business',
    image: {
      src: Norma,
      alt: 'Man smiling in front of storefront #14628, Norma Gs',
    },
  },
];

const TimelineItems2016 = [
  {
    type: 'milestone',
    title: 'With support from the local philanthropic community, Invest Detroit and the City of Detroit launch the Strategic Neighborhood Fund in three Detroit neighborhoods. This first iteration of the fund piloted methods and targeted investments to support vibrant Detroit neighborhoods.',
    subtitle: 'Milestone',
    image: {
      src: Strategic,
      alt: 'Man speaking at podium in white tent with audience in front of him and others seated in a line behind him',
    },
    className: 'is-left',
  },
  {
    type: 'project',
    title: 'ID Ventures portfolio company Gemphire becomes its first startup to transition from a private to public company through an Initial Public Offering (IPO).',
    subtitle: 'Project/Business',
    className: 'is-left',
  },
  {
    type: 'project',
    title: 'Through a resident engagement and planning process as part of the Strategic Neighborhood Fund work, The Murray was identified as a priority for neighborhood residents. Invest Detroit is working with Emery Matthews to turn this 20-year abandoned building into 12 apartments, three of which will be affordable at 60% of the area median income.',
    subtitle: 'Project/Business',
    image: {
      src: Murray,
      alt: 'People in masks, socially-distanced standing in front of red building, one speaking at a podium',
    },
  },
];

const TimelineItems2014 = [
  {
    type: 'partnership',
    title: 'As part of JPMorgan Chase’s long-term commitment to Detroit, Invest Detroit creates the Chase Invest Detroit Fund (CIDF), greatly advancing our work in financing catalytic real estate projects and commercial and industrial efforts. This funding helps support projects like the expansion of Global Titanium, a manufacturing company providing hundreds of local jobs.',
    subtitle: 'Partnership',
    image: {
      src: Titanium,
      alt: 'Global Titanium Inc building with white flowered trees and an American flag on a flagpole',
    },
    className: 'is-left',
  },
  {
    type: 'partnership',
    title: 'Goldman Sachs and the W.K. Kellogg Foundation support the expansion of Invest Detroit’s small business lending and support tools.',
    subtitle: 'Partnership',
    className: 'is-left',
  },
  {
    type: 'milestone',
    title: 'ID Ventures launches the Hacker Fellows Program that supports the career efforts of emerging tech talent by offering paid fellowships and internships with Michigan startups.',
    subtitle: 'Milestone',
    image: {
      src: Hacker,
      alt: 'Young adults smiling at camera in gray t-shirts',
    },
    className: 'is-left',
  },
  {
    type: 'partnership',
    title: 'Local Community Development Financial Institutions (CDFI’s) create the Detroit CDFI Coalition to increase collaboration and create shared and focused strategies.',
    subtitle: 'Partnership',
    className: !isFirefox ? 'is-left' : '',
  },
  {
    type: 'project',
    title: 'Through the Core City Strategic Fund, Invest Detroit works with Midtown Detroit Inc. to finance the new Woodward Willis, a mixed-use building that created commercial and office spaces bringing 37 jobs and up to 100 full-time positions, all while activating a vacant, blighted space. This would become the home of our venture investment team ID Ventures.',
    subtitle: 'Project/Business',
    image: {
      src: Willis,
      alt: 'Mixed-use building with McDonalds sign in the background',
    },
  },
  {
    type: 'project',
    title: 'Funding provided for the M-1 RAIL / QLINE, an integral component of the Transit Oriented Development strategy created and supported by community partners, was provided with $18.4M in New Markets Tax Credit (NMTC) allocation. Invest Detroit is also instrumental in attracting additional NMTC allocations totaling $25M to support this catalytic transit project and driving $7B in new investment in the City.',
    subtitle: 'Project/Business',
    image: {
      src: M1,
      alt: 'QLine streetcar in downtown Detroit',
    },
  },
];

const TimelineItems2013 = [
  {
    type: 'partnership',
    title: 'Invest Detroit creates the Core City Strategic Fund to support projects informed by the Transit Oriented Development plan focused on increasing activity and density along the Woodward Corridor. The creation of this fund signals a commitment to the partnership approach of this highly collaborative effort to focus efforts across organizations on specific geographies. This approach will be the seed of the Strategic Neighborhood Fund.',
    subtitle: 'Partnership',
    image: {
      src: TODMap,
      alt: 'Map of greater downtown Detroit',
    },
    className: 'is-left',
  },
  {
    type: 'project',
    title: 'Continuing the momentum of job and restaurant creation to further catalyze activity in Midtown, Invest Detroit finances Spanish tapas restaurant La Feria. The business, owned by a Detroit resident, won the Hatch 2012 contest and brought 18 new jobs to the neighborhood. It was one of the earliest full service establishments in the neighborhood.',
    subtitle: 'Project / Business',
    image: {
      src: Feria,
      alt: 'La Feria Spanish tapas storefront',
    },
    className: 'is-left',
  },
  {
    type: 'project',
    title: 'Funding approved for the David Whitney, a major gateway to Detroit’s central business district and vacant since the early 1990’s. Its importance to the area was demonstrated by the State Legislature’s approval in December 2010 of enhanced State Historic Tax Credits for the Capitol Park district, supported by the Mayor of Detroit, the Governor, and legislators from around the state. The redevelopment represented a significant step forward in the larger planned development called the West District Reinvestment Strategy, a partnership with Invest Detroit, Detroit Economic Growth Corporation (DEGC) and Downtown Detroit Partnership (DDP) that focused on targeted geography and a collaborative approach to leverage additional investment in the area.',
    subtitle: 'Project / Business',
    image: {
      src: DWB,
      alt: 'High-rise David Whitney Building',
    },
  },
];

const TimelineItems2012 = [
  {
    type: 'project',
    title: 'With assistance from New Markets Tax Credits, Invest Detroit supports the Gateway Marketplace on 8-mile Road, bringing national grocery chain Meijer and other retailers into Detroit, creating hundreds of jobs and ensuring that residents can shop locally instead of relying on suburban retailers.',
    subtitle: 'Project/Business',
    image: {
      src: Meijer,
      alt: 'Meijer building with shoppers out front',
    },
    className: 'is-left',
  },
  {
    type: 'project',
    title: 'Through the Urban Retail Loan Fund, Invest Detroit finances vegetarian restaurant Seva Detroit to continue the collective work in catalyzing the Midtown neighborhood.',
    subtitle: 'Project/Business',
    image: {
      src: Seva,
      alt: 'The Nnamdi activation alley with Seva restaurant',
    },
  },
];

const TimelineItems2011 = [
  {
    type: 'milestone',
    title: 'Invest Detroit becomes a Community Development Financial Institution (CDFI)—financial organizations that are committed to lending to projects that benefit low-income communities.',
    subtitle: 'Milestone',
    className: 'is-left',
  },
  {
    type: 'project',
    title: 'Financing is provided to expand the CHASS Health Care Facility to provide accessible, affordable primary healthcare for underserved residents in Southwest Detroit. Using New Market Tax Credits, the project triples the facility’s patient capacity, created 86 new jobs, and helped retain 58 jobs.',
    subtitle: 'Project/Business',
    image: {
      src: CHASS,
      alt: 'Four women walking down hallway',
    },
    className: 'is-left',
  },
  {
    type: 'project',
    title: 'Partnering with Midtown Detroit Inc. and the Roxbury Group, Invest Detroit funds and co-develops the Auburn – a mixed-use building that created new affordable housing and a retail hub in Midtown Detroit.',
    subtitle: 'Project/Business',
    image: {
      src: Auburn,
      alt: 'The Auburn apartment building above thai restaurant Go Sy Thai',
    },
    className: 'is-left',
  },
  {
    type: 'partnership',
    title: 'The Transit Oriented Development strategy is published. Its objectives are to focus development (including the work of Invest Detroit) to catalyze activity down the Woodward Corridor and to provide infrastructure that connects the districts through the Woodward Light Rail.',
    subtitle: 'Partnership',
    image: {
      src: TODPlan,
      alt: 'Screenshot of pamphlet titled "Greated Downtown TOD strategy"',
    },
  }
];

const TimelineItems2010 = [
  {
    type: 'milestone',
    title: 'Invest Detroit Foundation is created to further expand the organization’s ability to partner with the philanthropic community in a shared mission of igniting economic growth in Detroit.',
    subtitle: 'Milestone',
    className: 'is-left',
  },
  {
    type: 'milestone',
    title: 'With support from the New Economy Initiative, Invest Detroit creates its venture capital program (now known as ID Ventures) with the launch of the First Step Fund.',
    subtitle: 'Milestone',
    className: 'is-left',
  },
  {
    type: 'project',
    title: 'Continuing the momentum for partnership and focused investment generated by the Super Bowl, Invest Detroit purchases 1145 Griswold, while partners purchase other neighboring vacant buildings. Together they redevelop these buildings and reactivate Capital Park, transforming this vacant downtown area into a livable space while preserving the structures.',
    subtitle: 'Project/Business',
    image: {
      src: Capital,
      alt: 'Capital Park and surrounding buildings',
    },
    className: 'is-left',
  },
  {
    type: 'project',
    title: 'Invest Detroit uses the New Markets Tax Credit program to finance renovation of the historic Broderick Tower, which was the third tallest abandoned building in the U.S. at the time of funding. As a gateway building into Downtown, this essential redevelopment project created 125 new apartments and interconnected with other critical Downtown developments and initiatives, including the Downtown Detroit Partnership’s Downtown strategy and the M-1 Rail project.',
    subtitle: 'Project/Business',
    image: {
      src: Broderick,
      alt: 'Broderick high-rise tower',
    },
  }
];

const TimelineItems2009 = [
  {
    type: 'milestone',
    title: 'Invest Detroit is awarded its first New Markets Tax Credit allocation of $40M—a federal program that attracts private investment to job-creating projects in distressed communities. The program will be instrumental in filling gaps in catalytic projects and breaking the cycle of disinvestment in Detroit.',
    subtitle: 'Milestone',
    className: 'is-left',
  },
  {
    type: 'milestone',
    title: 'With funding from the Detroit Investment Fund and support from the Michigan Economic Development Corporation, Invest Detroit starts a new small business lending program to support new and existing small businesses. Over the next few years, the Urban Retail Loan Fund will grow with support from partners like Hudson Webber Foundation, W.K. Kellogg Foundation, the Kresge Foundation, and JPMorgan Chase.',
    subtitle: 'Milestone',
    className: 'is-left',
  },
  {
    type: 'project',
    title: 'In partnership with Midtown Detroit, Inc., financing was approved to support the redevelopment of the Forest Arms, an historic, four-story building near Wayne State University that was destroyed by fire the previous year and targeted for demolition. The project created 70 residential units and one commercial space and restored a key residential property to productive use.',
    subtitle: 'Project / Business',
    image: {
      src: Forest,
      alt: 'Four-story red apartment building front entrance with cars parked in front'
    }
  },
];

const TimelineItems2008 = [
  {
    type: 'milestone',
    title: 'As the organization expands its tools and funding sources, Invest Detroit is formed to house the Detroit Investment Fund. It successfully applies to become a Community Development Entity (CDE), paving the way for access to federal funds that benefit low-income communities, such as the New Markets Tax Credit Program',
    subtitle: 'Milestone',
    className: 'is-left',
  },
];

const TimelineItems2005 = [
  {
    type: 'partnership',
    title: 'Motivated by the opportunity to host the 2006 Super Bowl in Detroit, coordinated efforts begin across public, private, and philanthropic partnerships to create lasting, sustainable improvements to the Downtown area, the city’s economic core.',
    subtitle: 'Partnership',
    image: {
      src: SuperBowl,
      alt: 'Downtown Detroit lit up at night, Ford Field in distance very bright',
    },
    className: 'is-left',
  },
  {
    type: 'partnership',
    title: 'The Detroit Economic Growth Corporation and the Downtown Detroit Partnership begin to develop a new strategy that focuses partners, including Invest Detroit, on greater collaboration and partnership along the Woodward Corridor. The strategy will develop over time and be known as the Transit Oriented Development (TOD).',
    subtitle: 'Partnership',
    className: isFirefox ? '' : 'is-left',
    image: {
      src: TOD,
      alt: 'People pointing at presentation and discussing',
    },
  },
  {
    type: 'project',
    title: 'Invest Detroit provides financing to construct One Kennedy Square, a new landmark office building that helped complete the revitalization of the historic Campus Martius Park area.',
    subtitle: 'Project/Business',
    image: {
      src: Kennedy,
      alt: 'Fountain in Campus Martius park',
    },
  },
];

const TimelineItems2003 = [
  {
    type: 'milestone',
    title: 'Matt Cullen becomes board chair and encourages the organization to think bigger for larger, more focused impact. Partnership becomes a key value to the work.',
    subtitle: 'Milestone',
    image: {
      src: Cullen,
      alt: 'Smiling headshot of a man',
    },
    className: 'is-left',
  },
  {
    type: 'project',
    title: 'The Ferlito Group receives financing to renovate the Kales Building, serving as a catalyst for redevelopment at Grand Circus Park and creating more new residential units downtown.',
    subtitle: 'Project/Business',
    image: {
      src: Kales,
      alt: 'Kales building high-rise with fountain in foreground',
    },
    className: isFirefox ? '' : 'is-left',
  },
];

const TimelineItems2001 = [
  {
    type: 'milestone',
    title: 'Dave Blaszkiewicz is hired as CEO and remains in that position today. Together with then Board Chair Roger Penske and Vice Chair Chip Miller, they rethink the Fund’s strategy to focus more on making projects bankable by bridging financial gaps.',
    subtitle: 'Milestone',
    image: {
      src: Dave,
      alt: 'Headshot of smiling man',
    },
    className: 'is-left',
  },
  {
    type: 'project',
    title: 'Financing is provided to the Graimark mixed-use project, also known as the shops at Jefferson Village, that bring a much-needed grocery store and other retail to the neighborhood, along with surrounding single-family homes.',
    subtitle: 'Project/Business'
  },
];

const TimelineItems1997 = [
  {
    type: 'milestone',
    title: 'Peter Weipert becomes president of the Detroit Investment Fund and begins to focus more on real estate projects, including the Inn on Ferry Street that converted historic Victorian homes into a thriving bed and breakfast near the Detroit Institute of Arts.',
    subtitle: 'Milestone',
    image: {
      src: Ferry,
      alt: 'Old orange brick Victorian-style home with ivy',
    },
    className: 'is-left',
  },
];

const TimelineItems1996 = [
  {
    type: 'project',
    title: 'The Detroit Investment Fund supports its first high-risk projects. The initial focus was on existing companies throughout the city that could grow to create more jobs for Detroiters—companies like Stroh’s Ice Cream which was expanding their Detroit facility at the time and is now home to the Whiskey Factory.',
    subtitle: 'Project/Business',
    image: {
      src: Report,
      alt: 'Detroit Investment fund 1996 community report; backing comeback of Detroit',
    },
    className: 'is-left',
  },
];

const TimelineItems1995 = [
  {
    type: 'milestone',
    title: 'The seed of Invest Detroit is planted when member companies of Detroit Renaissance, Inc., now Business Leaders for Michigan, create the Detroit Investment Fund (DIF)—a $52M fund to create jobs, promote business expansion or relocation to Detroit, and increase the city’s population.',
    subtitle: 'Milestone',
    image: {
      src: Board,
      alt: 'Grainy photograph of men sitting and standing, smiling at camera',
    },
    className: 'is-left',
  },
  {
    type: 'milestone',
    title: 'Jerry Halperin is hired as president to manage the fund and Karen Harris (pictured here with Vice Chair Chip Miller) to setup and create the office. Karen would be with the organization for 23 years and came back to help create this timeline.',
    subtitle: 'Milestone',
    image: {
      src: Harris,
      alt: 'Man and woman smiling at camera',
    },
  }
];

const TimelineItems = {
  2020: TimelineItems2020,
  2019: TimelineItems2019,
  2018: TimelineItems2018,
  2017: TimelineItems2017,
  2016: TimelineItems2016,
  2014: TimelineItems2014,
  2013: TimelineItems2013,
  2012: TimelineItems2012,
  2011: TimelineItems2011,
  2010: TimelineItems2010,
  2009: TimelineItems2009,
  2008: TimelineItems2008,
  2005: TimelineItems2005,
  2003: TimelineItems2003,
  2001: TimelineItems2001,
  1997: TimelineItems1997,
  1996: TimelineItems1996,
  1995: TimelineItems1995,
};

export default TimelineItems;
