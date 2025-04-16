
import React from 'react';
import { ArrowRight, CheckCircle, Briefcase, Users, Award, Target } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselNext, 
  CarouselPrevious 
} from '@/components/ui/carousel';

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-blue-700 text-white">
        <div className="container mx-auto px-4 py-20 md:py-32">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Elevate Your Talent Acquisition Journey
              </h1>
              <p className="text-lg md:text-xl mb-8">
                Zillion Arete is a premium talent acquisition firm focused on delivering extraordinary 
                value to organizations through innovative and data-driven recruitment solutions.
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

      {/* About Us Preview */}
      <section className="section-padding">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=800&q=80" 
                alt="Team collaboration" 
                className="rounded-lg shadow-lg"
              />
            </div>
            <div>
              <h2 className="mb-6">Who We Are</h2>
              <p className="text-gray-600 mb-4">
                Founded in 2016, Zillion Arete is a premium talent acquisition firm headquartered in Bengaluru, with
                a nationwide presence across India.
              </p>
              <p className="text-gray-600 mb-4">
                We specialize in end-to-end recruitment solutions with a focus on AI-enabled 
                talent acquisition processes that deliver exceptional results for our clients.
              </p>
              <p className="text-gray-600 mb-6">
                Our expertise spans across IT, Product, Engineering, Sales, Marketing, and Operations roles,
                helping organizations find the perfect talent match for their needs.
              </p>
              <Button className="bg-primary hover:bg-primary/90 text-white">
                <Link to="/about">Learn More About Us</Link>
              </Button>
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
                title: "IT & Product Recruitment",
                description: "Connect with skilled IT professionals and product talent who can drive your technology initiatives forward."
              },
              {
                icon: <Users className="h-12 w-12 text-primary mb-4" />,
                title: "Executive Search",
                description: "Find top-level executives to lead your organization to success with our meticulous search process."
              },
              {
                icon: <Target className="h-12 w-12 text-primary mb-4" />,
                title: "AI-Enabled Recruitment",
                description: "Leverage our data-driven approach to identify, attract, and retain the best talent for your organization."
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
                As a premier talent acquisition partner, we pride ourselves on our data-driven approach 
                and deep industry expertise. Our innovative methodologies ensure we find not just candidates, 
                but the right talent that aligns with your organization's values and goals.
              </p>
              
              <div className="space-y-4">
                {[
                  "Industry expertise across IT, Product, Engineering, and more",
                  "Dedicated relationship managers for personalized service",
                  "Extensive network of qualified professionals",
                  "Data-driven and AI-enabled recruitment processes",
                  "Commitment to quality and ethical recruitment practices"
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

          <div className="relative px-10">
            <Carousel
              opts={{
                align: "start",
                loop: true,
                duration: 3000,  // Set duration for auto-play
              }}
              plugins={[
                {
                  options: { delay: 3000 },  // Auto-play every 3 seconds
                  start(api) {
                    const autoplay = setInterval(() => {
                      if (api.canScrollNext()) {
                        api.scrollNext();
                      } else {
                        api.scrollTo(0);
                      }
                    }, 3000);

                    return () => {
                      clearInterval(autoplay);
                    };
                  },
                }
              ]}
              className="w-full"
            >
              <CarouselContent>
                {[
                  {
                    quote: "Zillion Arete's data-driven approach has completely transformed our hiring process. Their understanding of our industry needs is truly impressive.",
                    author: "Rahul Sharma",
                    position: "CTO, Tech Innovations"
                  },
                  {
                    quote: "The quality of candidates provided by Zillion Arete has been exceptional. They truly understand our company culture and what we're looking for.",
                    author: "Priya Patel",
                    position: "HR Director, Global Solutions"
                  },
                  {
                    quote: "Working with Zillion Arete has significantly reduced our time-to-hire while improving the quality of our recruitment. Highly recommended!",
                    author: "Vikram Singh",
                    position: "Head of Engineering"
                  },
                  {
                    quote: "Our partnership with Zillion Arete has been instrumental in building our tech team from scratch. Their insights into the talent market are invaluable.",
                    author: "Ananya Desai",
                    position: "Founder & CEO, StartupX"
                  },
                  {
                    quote: "I've worked with several recruitment firms, but Zillion Arete stands out with their personalized approach and understanding of our technical requirements.",
                    author: "Karthik Raman",
                    position: "VP of Product"
                  }
                ].map((testimonial, index) => (
                  <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                    <div className="bg-white p-8 rounded-lg shadow-md h-full">
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
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="absolute left-0 top-1/2" />
              <CarouselNext className="absolute right-0 top-1/2" />
            </Carousel>
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
