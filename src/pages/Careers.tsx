
import { Briefcase, MapPin, Clock, CheckCircle, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Careers = () => {
  const jobListings = [
    {
      title: "Senior Software Engineer",
      company: "TechInnovate Inc.",
      location: "New York, NY",
      type: "Full-time",
      description: "Looking for an experienced software engineer to lead development of new products.",
      requirements: [
        "5+ years experience in software development",
        "Proficiency in React, Node.js, and TypeScript",
        "Experience with cloud infrastructure",
        "Strong problem-solving skills"
      ]
    },
    {
      title: "Marketing Director",
      company: "Global Brands Media",
      location: "Chicago, IL",
      type: "Full-time",
      description: "Seeking a strategic marketing leader to drive growth initiatives across multiple channels.",
      requirements: [
        "8+ years of marketing experience",
        "Track record of successful campaigns",
        "Experience managing teams",
        "Data-driven approach to marketing"
      ]
    },
    {
      title: "Financial Analyst",
      company: "Apex Capital Partners",
      location: "Remote",
      type: "Full-time",
      description: "Join our team to analyze financial data and provide strategic recommendations to clients.",
      requirements: [
        "CFA certification or equivalent",
        "3+ years in financial analysis",
        "Experience with financial modeling",
        "Strong communication skills"
      ]
    },
    {
      title: "UX/UI Designer",
      company: "Creative Solutions Agency",
      location: "San Francisco, CA",
      type: "Contract",
      description: "Help design intuitive and engaging user experiences for our clients' digital products.",
      requirements: [
        "Portfolio demonstrating UX/UI skills",
        "Experience with Figma and Adobe Creative Suite",
        "Understanding of user-centered design principles",
        "Ability to work collaboratively with development teams"
      ]
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-blue-700 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Careers</h1>
            <p className="text-lg md:text-xl">
              Explore exciting career opportunities with our client companies or join our own growing team. 
              Zillion Arete is committed to connecting talented professionals with rewarding positions.
            </p>
          </div>
        </div>
      </section>

      {/* For Job Seekers */}
      <section className="section-padding">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="mb-6">For Job Seekers</h2>
              <p className="text-gray-600 mb-4">
                At Zillion Arete, we pride ourselves on connecting talented professionals with rewarding 
                opportunities that align with their skills, values, and career aspirations. When you work 
                with our recruiting team, you gain a partner committed to your career success.
              </p>
              <p className="text-gray-600 mb-6">
                We take the time to understand your unique background, skills, and goals, then match you 
                with opportunities where you can thrive and grow. Our recruiters provide guidance throughout 
                the hiring process, from resume preparation to interview coaching and offer negotiation.
              </p>
              
              <div className="space-y-4 mb-8">
                {[
                  "Access to exclusive job opportunities not advertised elsewhere",
                  "Personalized career guidance and industry insights",
                  "Interview preparation and feedback",
                  "Ongoing support throughout your career journey"
                ].map((benefit, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-green-500 mr-3 flex-shrink-0" />
                    <p>{benefit}</p>
                  </div>
                ))}
              </div>
              
              <Button className="bg-primary hover:bg-primary/90 text-white">
                <Link to="/contact">Submit Your Resume</Link>
              </Button>
            </div>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=800&q=80" 
                alt="Professional working on laptop" 
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Job Listings */}
      <section className="section-padding bg-gray-50">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="mb-4">Featured Job Opportunities</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Explore some of our current job openings across various industries and locations. 
              This is just a small selection of the opportunities we're recruiting for.
            </p>
          </div>

          <div className="space-y-6">
            {jobListings.map((job, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="flex flex-wrap justify-between mb-4">
                  <h3 className="text-xl font-semibold text-primary">{job.title}</h3>
                  <Link 
                    to="/contact" 
                    className="text-primary font-medium flex items-center hover:underline"
                  >
                    Apply Now <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
                
                <div className="flex flex-wrap gap-4 mb-4 text-sm">
                  <div className="flex items-center text-gray-600">
                    <Briefcase className="h-4 w-4 mr-2" />
                    {job.company}
                  </div>
                  <div className="flex items-center text-gray-600">
                    <MapPin className="h-4 w-4 mr-2" />
                    {job.location}
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Clock className="h-4 w-4 mr-2" />
                    {job.type}
                  </div>
                </div>
                
                <p className="text-gray-600 mb-4">{job.description}</p>
                
                <div className="mt-4">
                  <h4 className="font-medium mb-2">Requirements:</h4>
                  <ul className="list-disc pl-5 space-y-1 text-gray-600">
                    {job.requirements.map((req, idx) => (
                      <li key={idx}>{req}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button className="bg-primary hover:bg-primary/90 text-white">
              <Link to="/contact">View All Opportunities</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* For Employers */}
      <section className="section-padding">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="md:order-2">
              <h2 className="mb-6">For Employers</h2>
              <p className="text-gray-600 mb-4">
                Finding the right talent is critical to your organization's success. At Zillion Arete, 
                we understand the challenges of recruiting in today's competitive market and offer 
                comprehensive solutions to help you build a winning team.
              </p>
              <p className="text-gray-600 mb-6">
                Our experienced recruiters take the time to understand your company culture, goals, and 
                specific requirements for each role. We then leverage our extensive network and proven 
                recruiting strategies to identify and attract candidates who not only have the skills 
                you need but also align with your organization's values and vision.
              </p>
              
              <div className="space-y-4 mb-8">
                {[
                  "Access to a vast network of pre-screened professionals",
                  "Customized recruiting strategies for your specific needs",
                  "Thorough candidate screening and evaluation",
                  "Ongoing support throughout the hiring process"
                ].map((benefit, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-green-500 mr-3 flex-shrink-0" />
                    <p>{benefit}</p>
                  </div>
                ))}
              </div>
              
              <Button className="bg-primary hover:bg-primary/90 text-white">
                <Link to="/contact">Discuss Your Hiring Needs</Link>
              </Button>
            </div>
            <div className="md:order-1">
              <img 
                src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=800&q=80" 
                alt="Team discussing in a modern office" 
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Recruitment Process */}
      <section className="section-padding bg-gray-50">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="mb-4">Our Recruitment Process</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We follow a structured process to ensure we find the best match for both employers and candidates.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "1",
                title: "Initial Consultation",
                description: "We begin by understanding your career goals or hiring needs in detail."
              },
              {
                step: "2",
                title: "Candidate Sourcing",
                description: "We identify potential matches through our network and targeted outreach."
              },
              {
                step: "3",
                title: "Screening & Assessment",
                description: "Candidates undergo thorough evaluation to ensure they meet all requirements."
              },
              {
                step: "4",
                title: "Interview & Selection",
                description: "We facilitate the interview process and help both parties make informed decisions."
              }
            ].map((process, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-md text-center relative">
                <div className="absolute top-4 right-4 bg-primary text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">
                  {process.step}
                </div>
                <h3 className="text-xl font-semibold mb-3 mt-6">{process.title}</h3>
                <p className="text-gray-600">{process.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Our Team */}
      <section className="section-padding">
        <div className="container">
          <div className="bg-primary text-white p-8 md:p-12 rounded-lg">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl font-bold text-white mb-6">Join the Zillion Arete Team</h2>
                <p className="mb-6">
                  We're always looking for talented recruiting professionals to join our growing team. 
                  If you're passionate about connecting people with opportunities and helping companies 
                  build exceptional teams, we'd love to hear from you.
                </p>
                <Button className="bg-white text-primary hover:bg-gray-100">
                  <Link to="/contact">Explore Career Opportunities</Link>
                </Button>
              </div>
              <div>
                <img 
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80" 
                  alt="Team collaborating in an office" 
                  className="rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-50 py-16">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="mb-6">Ready to Take the Next Step?</h2>
            <p className="text-lg text-gray-600 mb-8">
              Whether you're seeking a new opportunity or looking to hire exceptional talent, 
              we're here to help you succeed.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button className="bg-primary hover:bg-primary/90 text-white">
                <Link to="/contact">Contact Us Today</Link>
              </Button>
              <Button variant="outline" className="border-primary text-primary hover:bg-primary/10">
                <Link to="/services">Learn About Our Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Careers;
