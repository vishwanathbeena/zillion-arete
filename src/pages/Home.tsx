
import { ArrowRight, CheckCircle, Briefcase, Users, Award, Target } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-blue-700 text-white">
        <div className="container mx-auto px-4 py-20 md:py-32">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Connecting Top Talent With Leading Employers
              </h1>
              <p className="text-lg md:text-xl mb-8">
                Zillion Arete is a premier recruiting agency specializing in matching exceptional 
                candidates with companies that value innovation and excellence.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-white text-primary hover:bg-gray-100">
                  <Link to="/services">Our Services</Link>
                </Button>
                <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
                  <Link to="/contact">Contact Us</Link>
                </Button>
              </div>
            </div>
            <div className="hidden md:block">
              <img 
                src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=800&q=80" 
                alt="Professional workspace with technology" 
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="section-padding bg-gray-50">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="mb-4">Our Specialized Services</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We offer comprehensive recruiting solutions tailored to your specific industry needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Briefcase className="h-12 w-12 text-primary mb-4" />,
                title: "Executive Search",
                description: "Find top-level executives to lead your organization to success with our meticulous search process."
              },
              {
                icon: <Users className="h-12 w-12 text-primary mb-4" />,
                title: "IT Staffing",
                description: "Connect with skilled IT professionals who can drive your technology initiatives forward."
              },
              {
                icon: <Target className="h-12 w-12 text-primary mb-4" />,
                title: "Permanent Placement",
                description: "Build your dream team with our permanent placement services that focus on long-term success."
              }
            ].map((service, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                {service.icon}
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <Link to="/services" className="text-primary font-medium flex items-center hover:underline">
                  Learn More <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="mb-6">Why Choose Zillion Arete?</h2>
              <p className="text-gray-600 mb-8">
                With years of experience in the recruiting industry, we've built a reputation for excellence 
                and reliability. Our team of expert recruiters is dedicated to finding the perfect match 
                between candidates and employers.
              </p>
              
              <div className="space-y-4">
                {[
                  "Industry expertise across multiple sectors",
                  "Personalized approach to each client and candidate",
                  "Extensive network of qualified professionals",
                  "Commitment to long-term relationships",
                  "Proven track record of successful placements"
                ].map((item, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-green-500 mr-3 flex-shrink-0" />
                    <p>{item}</p>
                  </div>
                ))}
              </div>
              
              <Button className="mt-8 bg-primary hover:bg-primary/90 text-white">
                <Link to="/about">More About Us</Link>
              </Button>
            </div>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&w=800&q=80" 
                alt="Team of professionals collaborating" 
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-gray-50">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="mb-4">What Our Clients Say</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We take pride in helping businesses find the perfect candidates and professionals 
              discover rewarding career opportunities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                quote: "Zillion Arete helped us fill a critical executive position that had been vacant for months. Their understanding of our industry was impressive.",
                author: "Jennifer Smith",
                position: "CEO, TechNova Inc."
              },
              {
                quote: "The caliber of candidates provided by Zillion Arete was outstanding. They truly understood our company culture and what we were looking for.",
                author: "Michael Johnson",
                position: "HR Director, Global Finance"
              },
              {
                quote: "Working with Zillion Arete was a game-changer for my career. They placed me in a role that perfectly matches my skills and ambitions.",
                author: "David Chen",
                position: "Software Engineer"
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  <Award className="h-6 w-6 text-yellow-500 mr-2" />
                  <div className="text-yellow-500">★★★★★</div>
                </div>
                <p className="text-gray-600 mb-6 italic">"{testimonial.quote}"</p>
                <div>
                  <p className="font-semibold">{testimonial.author}</p>
                  <p className="text-sm text-gray-500">{testimonial.position}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary text-white py-16">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Find Your Next Opportunity?
            </h2>
            <p className="text-lg md:text-xl mb-8">
              Whether you're looking for top talent or your next career move, Zillion Arete 
              is here to help you navigate the journey.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button size="lg" className="bg-white text-primary hover:bg-gray-100">
                <Link to="/careers">Browse Opportunities</Link>
              </Button>
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
                <Link to="/contact">Get in Touch</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
