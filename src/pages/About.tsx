
import { Users, Award, Clock, Briefcase, CheckCircle, Target } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-blue-700 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">About Zillion Arete</h1>
            <p className="text-lg md:text-xl">
              We're a premium talent acquisition firm dedicated to connecting organizations 
              with exceptional professionals. Learn more about our story, our values, and what 
              makes us different.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="section-padding">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="mb-6">Our Story</h2>
              <p className="text-gray-600 mb-4">
                Founded in 2016, Zillion Arete began with a clear mission: to transform how organizations 
                acquire talent by leveraging data-driven approaches and deep industry expertise. 
                Headquartered in Bengaluru, we have grown to serve clients across India.
              </p>
              <p className="text-gray-600 mb-4">
                What started as a small team of passionate recruiters has evolved into a premier talent 
                acquisition firm with a nationwide presence. Our growth has been driven by our commitment 
                to excellence and the exceptional results we deliver for our clients.
              </p>
              <p className="text-gray-600">
                Today, Zillion Arete stands as a trusted partner for organizations seeking to build high-performing 
                teams. Our focus on innovation, data-driven methodologies, and ethical recruitment practices 
                continues to define who we are and how we work.
              </p>
            </div>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80" 
                alt="Team working together in an office" 
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Focus */}
      <section className="section-padding bg-gray-50">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="mb-4">Our Focus Areas</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              At Zillion Arete, we specialize in identifying and recruiting top talent across various sectors,
              with particular expertise in:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Briefcase className="h-12 w-12 text-primary mb-4" />,
                title: "IT & Product",
                description: "Software development, product management, QA, DevOps, and more."
              },
              {
                icon: <Users className="h-12 w-12 text-primary mb-4" />,
                title: "Engineering",
                description: "Mechanical, electrical, civil, and other engineering disciplines."
              },
              {
                icon: <Award className="h-12 w-12 text-primary mb-4" />,
                title: "Sales & Marketing",
                description: "Business development, digital marketing, content, and brand management."
              },
              {
                icon: <Target className="h-12 w-12 text-primary mb-4" />,
                title: "Operations",
                description: "Supply chain, logistics, project management, and administration."
              }
            ].map((focus, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-md text-center">
                <div className="flex justify-center">{focus.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{focus.title}</h3>
                <p className="text-gray-600">{focus.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="section-padding">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="mb-4">Our Core Values</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              These principles guide everything we do at Zillion Arete, from how we interact with our clients 
              to how we support candidates in their career journeys.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Award className="h-12 w-12 text-primary mb-4" />,
                title: "Innovation",
                description: "We continuously evolve our processes and leverage AI-enabled methodologies to stay ahead of industry trends."
              },
              {
                icon: <CheckCircle className="h-12 w-12 text-primary mb-4" />,
                title: "Integrity",
                description: "We operate with complete transparency, honesty, and ethical practices in all our interactions."
              },
              {
                icon: <Users className="h-12 w-12 text-primary mb-4" />,
                title: "Excellence",
                description: "We are committed to delivering exceptional quality in every aspect of our service."
              }
            ].map((value, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-md text-center">
                <div className="flex justify-center">{value.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-primary text-white">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { 
                icon: <Briefcase className="h-10 w-10 mx-auto mb-4" />, 
                value: "1500+", 
                label: "Successful Placements" 
              },
              { 
                icon: <Users className="h-10 w-10 mx-auto mb-4" />, 
                value: "300+", 
                label: "Client Companies" 
              },
              { 
                icon: <Award className="h-10 w-10 mx-auto mb-4" />, 
                value: "8+", 
                label: "Years of Excellence" 
              },
              { 
                icon: <Clock className="h-10 w-10 mx-auto mb-4" />, 
                value: "25+", 
                label: "Industry Sectors" 
              }
            ].map((stat, index) => (
              <div key={index}>
                {stat.icon}
                <div className="text-3xl md:text-4xl font-bold mb-2">{stat.value}</div>
                <div className="text-sm md:text-base">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="section-padding">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="https://images.unsplash.com/photo-1552581234-26160f608093?auto=format&fit=crop&w=800&q=80" 
                alt="Data-driven analysis" 
                className="rounded-lg shadow-lg"
              />
            </div>
            <div>
              <h2 className="mb-6">Our Data-Driven Approach</h2>
              <p className="text-gray-600 mb-4">
                At Zillion Arete, we leverage the power of data and AI to transform the talent acquisition process. 
                Our approach combines advanced analytics with human expertise to deliver superior results.
              </p>
              
              <div className="space-y-4 mt-6">
                {[
                  "AI-enabled candidate sourcing and screening",
                  "Comprehensive skill and cultural fit assessment",
                  "Market intelligence and salary benchmarking",
                  "Predictive analytics for hiring success",
                  "Customized recruitment strategies based on data insights"
                ].map((item, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-green-500 mr-3 flex-shrink-0" />
                    <p>{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="section-padding bg-gray-50">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="mb-4">Meet Our Leadership Team</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our success is driven by our dedicated team of talent acquisition experts, led by professionals 
              with deep industry knowledge and a passion for connecting talent with opportunity.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Ramesh Kumar",
                position: "Founder & CEO",
                bio: "With over 15 years in the recruitment industry, Ramesh founded Zillion Arete with a vision to transform talent acquisition through innovation and data-driven approaches.",
                image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&h=400&q=80"
              },
              {
                name: "Anita Desai",
                position: "COO",
                bio: "Anita oversees our day-to-day operations, ensuring we deliver exceptional service quality while driving operational excellence across all our functions.",
                image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=400&h=400&q=80"
              },
              {
                name: "Vikram Mehta",
                position: "Director of Client Relations",
                bio: "Vikram leads our client engagement team, focusing on building and maintaining strong relationships with our partner organizations across India.",
                image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400&h=400&q=80"
              }
            ].map((member, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-64 object-cover object-center"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                  <p className="text-primary font-medium mb-3">{member.position}</p>
                  <p className="text-gray-600">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-50 py-16">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="mb-6">Ready to Work With Us?</h2>
            <p className="text-lg text-gray-600 mb-8">
              Whether you're looking to hire top talent or searching for your next career opportunity, 
              we're here to help you succeed.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button className="bg-primary hover:bg-primary/90 text-white">
                <Link to="/services">Explore Our Services</Link>
              </Button>
              <Button variant="outline" className="border-primary text-primary hover:bg-primary/10">
                <Link to="/contact">Contact Our Team</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
