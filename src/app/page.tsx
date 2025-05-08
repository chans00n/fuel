import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
// import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"; // REMOVED: Unused imports
import Navbar05 from "@/components/navbar-05/navbar-05";
import { 
  // Lightbulb, Palette, Cog, FileText, Users, Megaphone, Briefcase, BarChart2, // REMOVED: Unused service icons
  Package, Settings, Archive, Trophy,
  Check,
  Award,
  DollarSign,
  Users,
  Megaphone,
  HeartHandshake,
  Database,
  TrendingUp,
  User,
  Heart,
  Briefcase
} from 'lucide-react';

const comparisonData = [
  {
    feature: "Timeline",
    kickstart: "3 months",
    fullSupport: "6 months",
  },
  {
    feature: "Campaign Strategy Development",
    kickstart: true,
    fullSupport: true,
  },
  {
    feature: "Messaging & Narrative Creation",
    kickstart: true,
    fullSupport: true,
  },
  {
    feature: "Visual Identity & Branding",
    kickstart: true,
    fullSupport: true,
  },
  {
    feature: "Platform Selection & Setup",
    kickstart: true,
    fullSupport: true,
  },
  {
    feature: "Audience Targeting Strategy",
    kickstart: true,
    fullSupport: true,
  },
  {
    feature: "Tool Kit & Materials Production",
    kickstart: true,
    fullSupport: true,
  },
  {
    feature: "Recruitment Strategy",
    kickstart: true,
    fullSupport: true,
  },
  {
    feature: "Launch Preparation & Guidance",
    kickstart: true,
    fullSupport: true,
  },
  {
    feature: "Hands-on Launch Support",
    kickstart: "Limited",
    fullSupport: true,
  },
  {
    feature: "Real-time Communications Support",
    kickstart: "Not included",
    fullSupport: true,
  },
  {
    feature: "Technical Platform Management",
    kickstart: "Setup only",
    fullSupport: true,
  },
  {
    feature: "Mid-campaign Content Creation",
    kickstart: "Not included",
    fullSupport: true,
  },
  {
    feature: "Fundraiser Engagement Support",
    kickstart: "Initial only",
    fullSupport: true,
  },
  {
    feature: "Performance Tracking & Analysis",
    kickstart: "Setup only",
    fullSupport: true,
  },
  {
    feature: "Post-campaign Strategy",
    kickstart: "Not included",
    fullSupport: true,
  },
  {
    feature: "Future Campaign Roadmap",
    kickstart: "Not included",
    fullSupport: true,
  },
];

// Data for Deliverables Section
const deliverablesData = [
  {
    title: "Pre-Campaign",
    icon: Package, // Lucide icon for pre-campaign
    items: [
      "Complete campaign strategy document",
      "Visual identity package and style guide",
      "Functional campaign microsite and fundraising platform",
      "Comprehensive marketing plan",
      "Content package (emails, social, promotional)",
      "Participant support materials",
      "Launch plan and timeline",
    ],
  },
  {
    title: "During-Campaign",
    icon: Settings, // Lucide icon for during-campaign
    items: [
      "Weekly performance reports",
      "Content updates and optimizations",
      "Participant engagement monitoring",
      "Ongoing technical support",
    ],
  },
  {
    title: "Post-Campaign",
    icon: Archive, // Lucide icon for post-campaign
    items: [
      "Comprehensive campaign performance report",
      "Donor and participant analysis",
      "Media and social impact summary",
      "Recommendations for future campaigns",
      "Asset library for future use",
    ],
  },
  {
    title: "Success Metrics",
    icon: Trophy, // Lucide icon for success metrics
    items: [
      "Total funds raised (overall and per participant)",
      "Number of active participants",
      "Average donation amount",
      "Email performance metrics",
      "Participant satisfaction ratings",
      "Media mentions and PR value",
      "Post-campaign supporter retention",
    ],
  },
];

export default function Home() {
  return (
    <>
      <Navbar05 
        siteTitle="FUEL: The Phoenix September Challenge"
        logoSrc="/ThePhoenixTMLogoSOLID_RGB.png"
      />
      <main className="flex min-h-screen flex-col items-center ">
        <div className="pt-16"></div>

        {/* New Project Overview Hero Section */}
        <section id="project-overview" className="w-full py-12 md:py-24 bg-background">
          <div className="container mx-auto px-4 md:px-6 max-w-screen-xl">
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-foreground">
              FUEL: The Phoenix September Challenge
              </h1>
            </div>

            {/* Content wrapper for image and text sections */}
            <div className="max-w-5xl mx-auto"> {/* Centering and limiting width of content block */}
              <div className="mb-10">
                <Image
                  src="/phoenix_005.jpg" //  ACTION REQUIRED: Replace with your actual image path in /public
                  alt="Two individuals in a gym setting, smiling, representing The Phoenix community."
                  width={1024} 
                  height={576} 
                  className="rounded-lg shadow-xl object-cover w-full aspect-video" 
                />
              </div>

              <p className="text-lg text-muted-foreground mb-12 leading-relaxed text-center max-w-4xl mx-auto">
                This proposal outlines the scope, objectives, and service breakdown for the design, conceptualization, and implementation of &quot;FUEL: The Phoenix September Challenge&quot; - a peer-to-peer fundraising campaign aligned with National Recovery Month. With a contract start date of May 15, 2025, this project will prepare for a campaign launch on September 1, 2025.
              </p>

              {/* Updated Campaign Objectives and Target Audience Section */}
              <div className="space-y-16"> {/* Added space between the two sections */}
                <div>
                  <h2 className="text-3xl font-semibold text-primary mb-8 text-center">Campaign Objectives</h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {[ // Array of objective objects
                      { icon: DollarSign, text: "Generate $500,000 in peer-to-peer fundraising" },
                      { icon: Users, text: "Recruit 1,000 individual fundraisers" },
                      { icon: Megaphone, text: "Increase awareness of The Phoenix's recovery support programs" },
                      { icon: HeartHandshake, text: "Create meaningful engagement with National Recovery Month (September 2025)" },
                      { icon: Database, text: "Bolster an already established donor database" },
                      { icon: TrendingUp, text: "Establish a sustainable campaign model for future years" },
                    ].map((objective, index) => {
                      const iconBgColors = [
                        "bg-sky-100 dark:bg-sky-900/30",
                        "bg-amber-100 dark:bg-amber-900/30",
                        "bg-emerald-100 dark:bg-emerald-900/30",
                        "bg-rose-100 dark:bg-rose-900/30",
                        "bg-indigo-100 dark:bg-indigo-900/30",
                        "bg-pink-100 dark:bg-pink-900/30",
                      ];
                      const iconTextColors = [
                        "text-sky-600 dark:text-sky-400",
                        "text-amber-600 dark:text-amber-400",
                        "text-emerald-600 dark:text-emerald-400",
                        "text-rose-600 dark:text-rose-400",
                        "text-indigo-600 dark:text-indigo-400",
                        "text-pink-600 dark:text-pink-400",
                      ];
                      const bgColor = iconBgColors[index % iconBgColors.length];
                      const textColor = iconTextColors[index % iconTextColors.length];

                      return (
                        <Card key={index} className="flex flex-col text-center sm:text-left hover:shadow-lg transition-shadow duration-300">
                          <CardHeader className="pt-6">
                            <div className={`mx-auto sm:mx-0 w-fit p-3 rounded-full mb-3 ${bgColor}`}>
                              <objective.icon className={`h-6 w-6 ${textColor}`} />
                            </div>
                            {/* Removed generic title "Objective X" for a cleaner look, focusing on the content */}
                          </CardHeader>
                          <CardContent className="flex-grow pt-0"> {/* Adjusted padding top */}
                            <p className="text-foreground font-medium text-base leading-relaxed">{objective.text}</p>
                          </CardContent>
                        </Card>
                      );
                    })}
                  </div>
                </div>

                <div>
                  <h2 className="text-3xl font-semibold text-primary mb-8 text-center">Target Audience</h2>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {[ // Array of audience objects
                      {
                        icon: User,
                        title: "Primary",
                        description: "Individuals in recovery who are excited to FUEL The Phoenix movement",
                      },
                      {
                        icon: Heart,
                        title: "Secondary",
                        description: "Donors inspired by someone they love -- they've become the FUEL",
                      },
                      {
                        icon: Briefcase,
                        title: "Tertiary",
                        description: "Partners and small businesses FUELing a stronger, healthier community",
                      },
                    ].map((audience, index) => {
                      const audienceIconBgColors = [
                        "bg-purple-100 dark:bg-purple-900/30",
                        "bg-teal-100 dark:bg-teal-900/30",
                        "bg-orange-100 dark:bg-orange-900/30",
                      ];
                      const audienceIconTextColors = [
                        "text-purple-600 dark:text-purple-400",
                        "text-teal-600 dark:text-teal-400",
                        "text-orange-600 dark:text-orange-400",
                      ];
                      const bgColor = audienceIconBgColors[index % audienceIconBgColors.length];
                      const textColor = audienceIconTextColors[index % audienceIconTextColors.length];

                      return (
                        <Card key={index} className="flex flex-col text-center sm:text-left hover:shadow-lg transition-shadow duration-300">
                          <CardHeader className="pt-6">
                            <div className={`mx-auto sm:mx-0 w-fit p-3 rounded-full mb-4 ${bgColor}`}>
                              <audience.icon className={`h-7 w-7 ${textColor}`} />
                            </div>
                            <CardTitle className="text-xl font-semibold text-foreground leading-tight">{audience.title}</CardTitle>
                          </CardHeader>
                          <CardContent className="flex-grow pt-0">
                            <p className="text-muted-foreground text-sm leading-relaxed">{audience.description}</p>
                          </CardContent>
                        </Card>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* End New Project Overview Hero Section */}

        {/* Timeline Options Section */}
        <section className="w-full py-12 md:py-16 bg-secondary">
          <div className="container mx-auto px-6 lg:px-8 max-w-screen-xl">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6 text-center">
              Timeline Options
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-12 text-center max-w-3xl mx-auto">
              Based on your needs and budget, we offer two distinct approaches to developing and launching this campaign. Both options are designed to launch the campaign on September 1, 2025, with different approaches.
            </p>

            <div className="flex flex-wrap justify-center gap-8">
              {/* Option Card 1: Accelerated */}
              <div className="w-full md:w-[calc(50%-1rem)] lg:w-[calc(50%-2rem)]"> {/* Flex item for card, handles spacing */}
                <Card className="h-full flex flex-col"> {/* Shadcn Card, ensure full height for alignment if cards have different content lengths */}
                  <CardHeader className="relative p-0">
                    <div className="absolute top-4 right-4 bg-accent text-accent-foreground text-xs font-bold uppercase px-3 py-1 rounded-full z-10">
                      Ignite Package
                    </div>
                    <div className="w-full aspect-[16/10] overflow-hidden rounded-t-lg">
                      <Image
                        src="/phoenix_001.jpg"
                        alt="Accelerated Timeline"
                        layout="fill"
                        objectFit="cover"
                      />
                    </div>
                  </CardHeader>
                  <CardContent className="pt-6 flex-grow"> {/* Added flex-grow to allow content to expand */}
                    <CardTitle className="text-2xl font-semibold text-primary mb-2">
                      3-Month Timeline
                    </CardTitle>
                    <p className="text-xl font-bold text-foreground mb-3">$3,000/month</p>
                    <CardDescription className="text-muted-foreground mb-6">
                      We&apos;ll help you launch your peer-to-peer fundraising campaign in just 3 months. You&apos;ll get clear planning, compelling messaging, smart audience targeting, and a confident launch—then your team can FUEL it from there.
                    </CardDescription>
                    
                    {/* Timeline List for 3-Month Option */}
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-primary mb-1">Month 1: May 15 - June 14, 2025</h4>
                        <p className="text-sm text-foreground font-medium mb-2">Setting the Foundation</p>
                        <ul className="list-disc list-inside text-muted-foreground text-sm space-y-1 pl-4">
                          <li>Create a campaign that tells your story and connects with all your audiences</li>
                          <li>Design a visual style that reflects your mission and feels cohesive</li>
                          <li>Pick the right tools to manage fundraising and track your success</li>
                          <li>Map out who you&apos;ll reach, when to engage them, and how to hit your recruitment targets</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-primary mb-1">Month 2: June 15 - July 14, 2025</h4>
                        <p className="text-sm text-foreground font-medium mb-2">Building & Recruiting</p>
                        <ul className="list-disc list-inside text-muted-foreground text-sm space-y-1 pl-4">
                          <li>Package all messaging and materials so your fundraisers have what they need</li>
                          <li>Create eye-catching visuals and templates for all platforms</li>
                          <li>Set up and test your digital tools for a smooth experience</li>
                          <li>Start recruiting fundraisers, prepare communications, and train your team</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-primary mb-1">Month 3: July 15 - August 15, 2025</h4>
                        <p className="text-sm text-foreground font-medium mb-2">Launch Time</p>
                        <ul className="list-disc list-inside text-muted-foreground text-sm space-y-1 pl-4">
                          <li>Get final materials to everyone involved</li>
                          <li>Roll out branded materials across all touch points</li>
                          <li>Make sure your fundraising platform is live and working perfectly</li>
                          <li>Launch with coordinated outreach to build early momentum and donations</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Option Card 2: Comprehensive */}
              <div className="w-full md:w-[calc(50%-1rem)] lg:w-[calc(50%-2rem)]"> {/* Flex item for card */}
                <Card className="h-full flex flex-col"> {/* Shadcn Card */}
                  <CardHeader className="relative p-0">
                    <div className="absolute top-4 right-4 bg-accent text-accent-foreground text-xs font-bold uppercase px-3 py-1 rounded-full z-10">
                      Momentum Package
                    </div>
                    <div className="w-full aspect-[16/10] overflow-hidden rounded-t-lg">
                      <Image
                        src="/phoenix_006.png"
                        alt="Comprehensive Timeline"
                        layout="fill"
                        objectFit="cover"
                      />
                    </div>
                  </CardHeader>
                  <CardContent className="pt-6 flex-grow">
                    <CardTitle className="text-2xl font-semibold text-primary mb-2">
                      6-Month Timeline
                    </CardTitle>
                    <p className="text-xl font-bold text-foreground mb-3">$2,500/month</p>
                    <CardDescription className="text-muted-foreground mb-6">
                      This package includes <strong>everything in the 3-Month Ignite Package</strong> plus three additional months of hands-on support, real-time assistance, and strategic wrap-up to ensure your campaign is FUELed for long-term success.

                    </CardDescription>

                    {/* Timeline List for 6-Month Option */}
                    <div className="space-y-4">
                    
                      <div>
                        <h4 className="font-semibold text-primary mb-1">Month 4: August 15 - September 14, 2025</h4>
                        <p className="text-sm text-foreground font-medium mb-2">Active Campaign Support</p>
                        <ul className="list-disc list-inside text-muted-foreground text-sm space-y-1 pl-4">
                        <li>Roll out your full promotion plan with our hands-on help</li>
                          <li>Handle all communications needs (updates, FAQs, thank-you messages, info@support)</li>
                          <li>Keep your visuals consistent across all platforms and fundraiser pages</li>
                          <li>Quickly solve any technical issues and support both fundraisers and donors</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-primary mb-1">Month 5: September 15 - October 14, 2025</h4>
                        <p className="text-sm text-foreground font-medium mb-2">Keeping Momentum Strong</p>
                        <ul className="list-disc list-inside text-muted-foreground text-sm space-y-1 pl-4">
                          <li>Share impact stories and progress updates to keep everyone motivated</li>
                          <li>Help create fresh content for mid-campaign touch points</li>
                          <li>Fix any issues that pop up and make sure you&apos;re capturing good data</li>
                          <li>Keep fundraisers engaged through check-ins and performance boosters</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-primary mb-1">Month 6: October 15 - November 15, 2025</h4>
                        <p className="text-sm text-foreground font-medium mb-2">Finishing Strong & Planning Ahead</p>
                        <ul className="list-disc list-inside text-muted-foreground text-sm space-y-1 pl-4">
                          <li>Celebrate your success with materials highlighting your impact</li>
                          <li>Organize all your campaign data for future use</li>
                          <li>Create final reports and insights to guide next year&apos;s campaign</li>
                          <li>Coordinate thank-you messages, gather feedback, and build your roadmap for the future</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Timeline Comparison Section */}
        <section className="w-full py-12 md:py-16 bg-background">
          <div className="container mx-auto px-6 lg:px-8 max-w-screen-xl">
            <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-10 text-center">
              Package Comparison
            </h3>
            <div className="overflow-x-auto rounded-lg shadow-md border border-border">
              <Table className="min-w-full">
                <TableHeader className="bg-muted/50"> {/* Slightly different background for header */}
                  <TableRow>
                    <TableHead className="px-6 py-4 text-left text-sm font-semibold text-foreground w-[30%]">Features</TableHead>
                    <TableHead className="px-6 py-4 text-center text-sm font-semibold text-foreground w-[35%]">
                      <div className="text-lg">3-Month Kickstart</div>
                      <div className="text-2xl font-bold mt-1">$3,000</div>
                      <div className="text-xs text-muted-foreground">per month</div>
                      <div className="text-xs text-muted-foreground">$9,000 total</div>
                    </TableHead>
                    <TableHead className="px-6 py-4 text-center text-sm font-semibold text-foreground w-[35%] relative">
                      <div className="absolute top-0 right-0 bottom-0 bg-blue-600 text-white flex items-center justify-center px-1.5 z-10">
                        <span className="font-bold text-xs uppercase" style={{ writingMode: 'vertical-rl', textOrientation: 'mixed' }}>
                          Recommended
                        </span>
                      </div>
                      <div className="pr-5">
                        <div className="text-lg">6-Month Full Support</div>
                        <div className="text-2xl font-bold mt-1">$2,500</div>
                        <div className="text-xs text-muted-foreground">per month</div>
                        <div className="text-xs text-muted-foreground">$15,000 total</div>
                      </div>
                    </TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody className="bg-background divide-y divide-border">
                  {comparisonData.map((item, index) => (
                    <TableRow key={index} className={index % 2 === 0 ? "bg-background" : "bg-muted/30"}> {/* Adjusted alternating row color */}
                      <TableCell className="px-6 py-4 whitespace-nowrap text-sm font-medium text-foreground">
                        {item.feature}
                      </TableCell>
                      {[item.kickstart, item.fullSupport].map((value, i) => (
                        <TableCell key={i} className="px-6 py-4 whitespace-nowrap text-sm text-center text-muted-foreground">
                          {typeof value === 'boolean' && value ? (
                            <Check className="h-5 w-5 text-green-500 mx-auto" />
                          ) : typeof value === 'string' ? (
                            value
                          ) : (
                            null // Render nothing if not boolean true or string
                          )}
                        </TableCell>
                      ))}
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
            
          </div>
        </section>

        {/* Success Bonus Section */}
        <section className="w-full py-8 bg-background"> {/* Use bg-background to ensure theme compatibility */} 
          <div className="container mx-auto px-6 lg:px-8 max-w-screen-xl">
            <div className="bg-green-50 dark:bg-green-900/30 border border-green-300 dark:border-green-700/50 rounded-lg p-6 text-center shadow-sm">
              <div className="flex items-center justify-center mb-3 text-green-600 dark:text-green-400">
                <Award className="h-6 w-6 mr-2" />
                <h4 className="text-xl font-semibold">Success Bonus</h4>
              </div>
              <p className="text-green-800 dark:text-green-200">
                Receive a <strong className="font-bold">3% performance bonus</strong> if your campaign reaches the $500,000 fundraising goal!
              </p>
              <p className="text-sm text-green-700 dark:text-green-300 mt-1">
                Available with either package. We&apos;re invested in your success.
              </p>
            </div>
          </div>
        </section>

        {/* Deliverables Section */}
        <section className="w-full py-12 md:py-16 bg-background">
          <div className="container mx-auto px-6 lg:px-8 max-w-screen-xl">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-12 text-center">
              Deliverables
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {deliverablesData.map((deliverable) => (
                <Card key={deliverable.title} className="h-full flex flex-col">
                  <CardHeader>
                    <CardTitle className="text-xl font-semibold text-primary flex items-center">
                      <deliverable.icon className="h-6 w-6 mr-3 text-primary" />
                      {deliverable.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <ul className="list-disc list-inside text-muted-foreground space-y-2 text-sm">
                      {deliverable.items.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="w-full py-16 md:py-20 bg-secondary text-secondary-foreground">
          <div className="container mx-auto px-6 lg:px-8 max-w-screen-xl text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Ready to Fuel The Phoenix?
            </h2>
            <p className="text-lg sm:text-xl leading-relaxed mb-8 max-w-2xl mx-auto">
              Let&apos;s collaborate to create a powerful campaign that drives meaningful change during National Recovery Month.
            </p>
            <div className="my-8">
              <Image
                src="/phoenix_004.jpg" // Replace with your actual CTA image path in /public
                alt="Call to action graphic for The Phoenix Challenge"
                width={600}
                height={250} // Adjust height based on actual image aspect ratio
                className="max-w-full h-auto rounded-lg shadow-lg mx-auto block mb-10"
              />
            </div>
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold py-3 px-8 rounded-full text-lg transition-transform duration-300 ease-in-out hover:scale-105"
              asChild // Allows using an <a> tag inside for navigation if needed
            >
              {/* <a href="#">Schedule a Consultation</a> */}
              {/* For now, just a button. Add <a href> if it needs to navigate */}
              Schedule a Consultation
            </Button>
          </div>
        </section>

        {/* Footer Section */}
        <footer className="w-full py-10 bg-secondary text-muted-foreground">
          <div className="container mx-auto px-6 lg:px-8 max-w-screen-xl text-center text-sm">
            <p className="mb-2">
              This proposal is prepared exclusively for The Phoenix by STBL Creative. Contract start date: May 15, 2025.
            </p>
            <p>
              All campaign concepts and strategies contained within are confidential and proprietary.
            </p>
          </div>
        </footer>
      </main>
    </>
  );
}
