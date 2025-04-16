import { Target, Users, User, Briefcase, FileText, ArrowRight, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Services = () => {
  const services = [
    {
      id: "recruiting",
      icon: <User className="h-16 w-16 text-primary mb-6" />,
      title: "Executive Recruiting",
      description: "We identify and attract top-level executives who can lead your organization to new heights.",
      features: [
        "Comprehensive executive search",
        "C-suite and director-level placements",
        "Confidential search processes",
        "Industry-specific expertise",
        "Leadership assessment"
      ]
    },
    {
      id: "staffing",
      icon: <Users className="h-16 w-16 text-primary mb-6" />,
      title: "IT Staffing",
      description: "Connect with skilled IT professionals who can drive your technology initiatives forward.",
      features: [
        "Software development experts",
        "Project managers and architects",
        "Data science and AI specialists",
        "Contract and full-time placements",
        "Technical assessment and screening"
      ]
    },
    {
      id: "consulting",
      icon: <Briefcase className="h-16 w-16 text-primary mb-6" />,
      title: "HR Consulting",
      description: "Optimize your human resources processes with our expert consulting services.",
      features: [
        "Talent acquisition strategy",
        "Compensation analysis",
        "Performance management",
        "Employee retention programs",
        "HR process optimization"
      ]
    },
    {
      id: "training",
      icon: <FileText className="h-16 w-16 text-primary mb-6" />,
      title: "Professional Training",
      description: "Enhance your team's skills with our targeted professional development programs.",
      features: [
        "Leadership development",
        "Technical skills training",
        "Soft skills workshops",
        "Custom training programs",
        "Team building activities"
      ]
    },
    {
      id: "placement",
      icon: <Target className="h-16 w-16 text-primary mb-6" />,
      title: "Permanent Placement",
      description: "Build your dream team with our permanent placement services focused on long-term success.",
      features: [
        "Comprehensive candidate screening",
        "Culture fit assessment",
        "Skill verification and testing",
        "Thorough reference checking",
        "Onboarding support"
      ]
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-blue-700 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Our Services</h1>
            <p className="text-lg md:text-xl">
              Zillion Arete offers a comprehensive suite of recruiting and staffing services 
              designed to meet the unique needs of your organization.
            </p>
          </div>
        </div>
      </section>

      {/* Service Introduction */}
      <section className="section-padding">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="mb-6">Tailored Recruiting Solutions</h2>
              <p className="text-gray-600 mb-4">
                At Zillion Arete, we understand that each organization has unique talent needs. 
                Our recruiting and staffing services are carefully designed to address your specific 
                challenges and help you build the team you need to succeed.
              </p>
              <p className="text-gray-600">
                With deep expertise across industries and a vast network of qualified professionals, 
                we connect you with candidates who not only have the skills you need but also align 
                with your company culture and values.
              </p>
            </div>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1541746972996-4e0b0f43e02a?auto=format&fit=crop&w=800&q=80" 
                alt="Business professionals in a meeting" 
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Detail */}
      <section className="section-padding bg-gray-50">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="mb-4">Our Core Services</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Explore our range of specialized recruiting and staffing services designed to 
              meet your organization's unique needs.
            </p>
          </div>

          <div className="space-y-20">
            {services.map((service, index) => (
              <div 
                key={index} 
                id={service.id}
                className={`grid grid-cols-1 ${index % 2 === 0 ? 'md:grid-cols-[2fr,1fr]' : 'md:grid-cols-[1fr,2fr] md:flex-row-reverse'} gap-12 items-center`}
              >
                <div className={`${index % 2 === 1 ? 'md:order-2' : ''}`}>
                  <div className="flex justify-center md:justify-start">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-semibold mb-4 text-center md:text-left">{service.title}</h3>
                  <p className="text-gray-600 mb-6 text-center md:text-left">{service.description}</p>
                  
                  <div className="space-y-3">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                        <p>{feature}</p>
                      </div>
                    ))}
                  </div>
                  
                  <div className="mt-8 text-center md:text-left">
                    <Button className="bg-primary hover:bg-primary/90 text-white">
                      <Link to="/contact">Discuss Your Needs</Link>
                    </Button>
                  </div>
                </div>
                
                <div className={`${index % 2 === 1 ? 'md:order-1' : ''}`}>
                  <div className="bg-white p-8 rounded-lg shadow-md h-full flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-6xl font-bold text-primary mb-4">{index + 1}</div>
                      <p className="text-xl font-medium">{service.title}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section-padding">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="mb-4">Our Recruiting Process</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We follow a structured yet flexible approach to ensure we find the perfect match for 
              your organization's needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: "1",
                title: "Needs Assessment",
                description: "We start by thoroughly understanding your requirements, company culture, and goals."
              },
              {
                step: "2",
                title: "Targeted Search",
                description: "Our team leverages industry networks and advanced tools to identify qualified candidates."
              },
              {
                step: "3",
                title: "Rigorous Screening",
                description: "Candidates undergo comprehensive screening, including skills assessment and cultural fit evaluation."
              },
              {
                step: "4",
                title: "Successful Placement",
                description: "We facilitate the hiring process and provide ongoing support for successful onboarding."
              }
            ].map((process, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-md text-center h-full flex flex-col">
                <div className="bg-primary text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-6">
                  {process.step}
                </div>
                <h3 className="text-xl font-semibold mb-3">{process.title}</h3>
                <p className="text-gray-600 flex-grow">{process.description}</p>
                {index < 3 && (
                  <div className="hidden md:block mt-6">
                    <ArrowRight className="h-6 w-6 text-primary mx-auto" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Served */}
      <section className="section-padding bg-gray-50">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="mb-4">Industries We Serve</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We have deep expertise in recruiting for a wide range of industries, with specialized 
              knowledge of the unique talent requirements in each field.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {[
              "Information Technology",
              "Healthcare",
              "Financial Services",
              "Manufacturing",
              "Professional Services",
              "Retail & Consumer Goods",
              "Construction & Engineering",
              "Pharmaceuticals & Biotech"
            ].map((industry, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow">
                <p className="font-medium text-primary">{industry}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Updated with matrix-inspired theme */}
      <section className="matrix-code bg-gradient-to-r from-[#0f1722] to-[#1A1F2C] text-white py-16">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 matrix-text">
              Let's Discuss Your Recruiting Needs
            </h2>
            <p className="text-lg md:text-xl mb-8 text-gray-300">
              Ready to find the perfect talent for your organization? Contact us today to discuss how 
              our recruiting services can help you build a winning team.
            </p>
            <Button size="lg" className="bg-[#1EAEDB] text-white hover:bg-[#1EAEDB]/80 digital-glow">
              <Link to="/contact">Get in Touch</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
