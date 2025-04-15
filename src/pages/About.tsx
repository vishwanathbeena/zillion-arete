
import { Users, Award, Clock, Briefcase, CheckCircle } from 'lucide-react';
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
              We're a team of recruiting experts dedicated to connecting talented professionals 
              with forward-thinking companies. Learn more about our story, our values, and the 
              people behind our success.
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
                Founded in 2010, Zillion Arete began with a simple mission: to transform how companies 
                find talent and how professionals find opportunities. Our founders, with over two decades 
                of combined experience in recruiting and human resources, saw a gap in the market for a 
                more personalized, relationship-driven approach to recruiting.
              </p>
              <p className="text-gray-600 mb-4">
                What started as a small team of passionate recruiters has grown into a leading agency 
                serving clients across multiple industries. Our growth has been organic, built on strong 
                relationships and successful placements that speak for themselves.
              </p>
              <p className="text-gray-600">
                Today, Zillion Arete stands as a trusted partner for hundreds of companies and thousands 
                of professionals. While we've expanded our services and reach, our founding principles 
                remain unchanged: integrity, excellence, and a genuine commitment to the success of our 
                clients and candidates.
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

      {/* Our Values */}
      <section className="section-padding bg-gray-50">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="mb-4">Our Core Values</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              These principles guide everything we do at Zillion Arete, from how we interact with our clients 
              to how we support our candidates.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Award className="h-12 w-12 text-primary mb-4" />,
                title: "Excellence",
                description: "We strive for excellence in every interaction, every placement, and every relationship we build."
              },
              {
                icon: <CheckCircle className="h-12 w-12 text-primary mb-4" />,
                title: "Integrity",
                description: "We operate with complete transparency and honesty, building trust that lasts."
              },
              {
                icon: <Users className="h-12 w-12 text-primary mb-4" />,
                title: "Partnership",
                description: "We view ourselves as partners in our clients' success and our candidates' career journeys."
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
                value: "1000+", 
                label: "Successful Placements" 
              },
              { 
                icon: <Users className="h-10 w-10 mx-auto mb-4" />, 
                value: "250+", 
                label: "Client Companies" 
              },
              { 
                icon: <Award className="h-10 w-10 mx-auto mb-4" />, 
                value: "15+", 
                label: "Industry Awards" 
              },
              { 
                icon: <Clock className="h-10 w-10 mx-auto mb-4" />, 
                value: "13", 
                label: "Years of Excellence" 
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

      {/* Our Team */}
      <section className="section-padding">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="mb-4">Meet Our Leadership Team</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our success is driven by our dedicated team of recruiting experts, led by professionals 
              with deep industry knowledge and a passion for connecting talent with opportunity.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Johnson",
                position: "CEO & Founder",
                bio: "With over 15 years in recruiting and HR leadership, Sarah founded Zillion Arete with a vision to transform the recruiting industry.",
                image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=400&h=400&q=80"
              },
              {
                name: "James Richardson",
                position: "COO",
                bio: "James oversees our day-to-day operations, ensuring we deliver exceptional service to both clients and candidates.",
                image: "https://images.unsplash.com/photo-1489980557514-251d61e3eeb6?auto=format&fit=crop&w=400&h=400&q=80"
              },
              {
                name: "Michelle Lee",
                position: "Director of Client Relations",
                bio: "Michelle leads our client engagement team, focusing on building and maintaining strong relationships with our partner companies.",
                image: "https://images.unsplash.com/photo-1509967419530-da38b4704bc6?auto=format&fit=crop&w=400&h=400&q=80"
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
