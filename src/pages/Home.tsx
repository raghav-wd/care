import { ArrowRight, Star, Users, Heart, Shield, Clock, Award } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  const features = [
    {
      icon: <Shield className="h-8 w-8 text-blue-500" />,
      title: "Safe & Secure",
      description: "CCTV surveillance and trained staff ensure your child's safety"
    },
    {
      icon: <Users className="h-8 w-8 text-green-500" />,
      title: "Qualified Staff",
      description: "Experienced and certified childcare professionals"
    },
    {
      icon: <Heart className="h-8 w-8 text-red-500" />,
      title: "Loving Care",
      description: "Nurturing environment with personalized attention"
    },
    {
      icon: <Clock className="h-8 w-8 text-purple-500" />,
      title: "Flexible Timing",
      description: "Full day and half day programs available"
    }
  ];

  const programs = [
    {
      age: "12-24 Months",
      title: "Toddler Care",
      description: "Gentle introduction to social interaction and basic learning activities",
      image: "/images/Day-care-1-1-1.jpg"
    },
    {
      age: "2-4 Years",
      title: "Pre-School",
      description: "Structured learning with play-based activities and skill development",
      image: "/images/600by600-daycare-image-1.jpg"
    },
    {
      age: "4-6 Years",
      title: "Kindergarten",
      description: "School readiness program with academic foundations",
      image: "/images/Daycare.png"
    }
  ];

  const testimonials = [
    {
      name: "Priya Sharma",
      text: "Kids Buzz Creche has been a blessing for our family. The staff is incredibly caring and my daughter loves going there every day.",
      rating: 5
    },
    {
      name: "Rajesh Kumar",
      text: "Excellent facilities and professional approach. I can work peacefully knowing my son is in safe hands.",
      rating: 5
    },
    {
      name: "Anita Singh",
      text: "The educational activities and care provided here is outstanding. Highly recommend to all parents.",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-orange-50 via-blue-50 to-yellow-50 pt-8 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 font-comic">
                  Where Little
                  <span className="text-gradient block">Minds Grow Big</span>
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Welcome to Kids Buzz Creche - A safe, nurturing environment where your child's 
                  journey of learning, growth, and happiness begins. We provide quality childcare 
                  with love, care, and educational excellence.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/contact" className="btn-primary inline-flex items-center">
                  Enroll Your Child
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link to="/about" className="btn-outline inline-flex items-center">
                  Learn More
                </Link>
              </div>

              <div className="grid grid-cols-3 gap-8 pt-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-500">5+</div>
                  <div className="text-sm text-gray-600">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-500">100+</div>
                  <div className="text-sm text-gray-600">Happy Families</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-500">24/7</div>
                  <div className="text-sm text-gray-600">Care & Support</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <img
                src="/images/600by600-daycare-image-1.jpg"
                alt="Happy children at Kids Buzz Creche"
                className="rounded-3xl shadow-2xl w-full h-auto object-cover"
              />
              <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-4 shadow-xl">
                <div className="flex items-center space-x-2">
                  <Award className="h-6 w-6 text-yellow-500" />
                  <span className="text-sm font-semibold">Certified Excellence</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 font-comic">
              Why Choose Kids Buzz Creche?
            </h2>
            <p className="mt-4 text-xl text-gray-600">
              We provide the best care and education for your little ones
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="card text-center">
                <div className="flex justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-16 gradient-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 font-comic">
              Our Programs
            </h2>
            <p className="mt-4 text-xl text-gray-600">
              Age-appropriate programs designed for every stage of development
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {programs.map((program, index) => (
              <div key={index} className="card">
                <img
                  src={program.image}
                  alt={program.title}
                  className="w-full h-48 object-cover rounded-xl mb-4"
                />
                <div className="bg-orange-100 text-orange-800 text-sm font-semibold px-3 py-1 rounded-full inline-block mb-3">
                  {program.age}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {program.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {program.description}
                </p>
                <Link to="/contact" className="text-orange-500 font-semibold hover:text-orange-600 inline-flex items-center">
                  Learn More
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-orange-500 to-blue-500 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 font-comic">
            Ready to Give Your Child the Best Start?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Join our loving community and watch your child thrive
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact" 
              className="bg-white text-orange-500 hover:bg-gray-100 font-semibold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Schedule a Visit
            </Link>
            <a 
              href="tel:+916387659003" 
              className="border-2 border-white text-white hover:bg-white hover:text-orange-500 font-semibold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105"
            >
              Call Now
            </a>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 font-comic">
              What Parents Say
            </h2>
            <p className="mt-4 text-xl text-gray-600">
              Trusted by families across Agra
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="card">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-500 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4 italic">
                  "{testimonial.text}"
                </p>
                <p className="font-semibold text-gray-900">
                  - {testimonial.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
