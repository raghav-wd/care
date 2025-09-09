import { Phone, Mail, MapPin, Clock, Send, MessageCircle } from 'lucide-react';
import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    childAge: '',
    program: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    alert('Thank you for your inquiry! We will contact you soon.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      childAge: '',
      program: '',
      message: ''
    });
  };

  const contactInfo = [
    {
      icon: <Phone className="h-6 w-6 text-orange-500" />,
      title: "Phone",
      info: "+91-6387659003",
      link: "tel:+916387659003"
    },
    {
      icon: <Mail className="h-6 w-6 text-blue-500" />,
      title: "Email",
      info: "kidsbuzzcreche@gmail.com",
      link: "mailto:kidsbuzzcreche@gmail.com"
    },
    {
      icon: <MapPin className="h-6 w-6 text-green-500" />,
      title: "Address",
      info: "51A, Fatehabad Rd, opposite Axis Bank, Bansal Nagar, Tajganj, Agra, UP, 282001",
      link: "https://maps.google.com/?q=51A+Fatehabad+Rd+Agra"
    },
    {
      icon: <Clock className="h-6 w-6 text-purple-500" />,
      title: "Hours",
      info: "Mon-Sat: 8:30 AM - 4:30 PM\nSunday: Closed",
      link: null
    }
  ];

  const faqs = [
    {
      question: "What age groups do you accept?",
      answer: "We accept children from 12 months to 6 years old, with age-appropriate programs for each developmental stage."
    },
    {
      question: "Do you provide meals?",
      answer: "Yes, we provide nutritious meals and snacks prepared by our in-house kitchen following strict hygiene standards."
    },
    {
      question: "What are your safety measures?",
      answer: "We have 24/7 CCTV surveillance, trained staff, secure entry systems, and comprehensive safety protocols."
    },
    {
      question: "Do you offer transportation?",
      answer: "Yes, we provide safe and reliable transportation services with GPS tracking and qualified drivers."
    },
    {
      question: "Can I visit the facility before enrolling?",
      answer: "Absolutely! We encourage parents to visit our facility and meet our staff. Please call to schedule a tour."
    },
    {
      question: "What is your teacher-to-child ratio?",
      answer: "We maintain low ratios: 1:4 for infants, 1:6 for toddlers, and 1:8 for pre-schoolers to ensure individual attention."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="gradient-bg py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 font-comic mb-6">
            Get In <span className="text-gradient">Touch</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to give your child the best start? Contact us today to learn more about 
            our programs or schedule a visit to our facility.
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => (
              <div key={index} className="card text-center">
                <div className="flex justify-center mb-4">
                  {info.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  {info.title}
                </h3>
                {info.link ? (
                  <a 
                    href={info.link}
                    className="text-gray-600 hover:text-orange-500 transition-colors text-sm whitespace-pre-line"
                  >
                    {info.info}
                  </a>
                ) : (
                  <p className="text-gray-600 text-sm whitespace-pre-line">
                    {info.info}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form and Map */}
      <section className="py-16 gradient-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="card">
              <h2 className="text-3xl font-bold text-gray-900 font-comic mb-6">
                Send Us a Message
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Parent/Guardian Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                      placeholder="Your full name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                      placeholder="+91-XXXXXXXXXX"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="childAge" className="block text-sm font-medium text-gray-700 mb-2">
                      Child's Age
                    </label>
                    <select
                      id="childAge"
                      name="childAge"
                      value={formData.childAge}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    >
                      <option value="">Select age</option>
                      <option value="12-18 months">12-18 months</option>
                      <option value="18-24 months">18-24 months</option>
                      <option value="2-3 years">2-3 years</option>
                      <option value="3-4 years">3-4 years</option>
                      <option value="4-5 years">4-5 years</option>
                      <option value="5-6 years">5-6 years</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="program" className="block text-sm font-medium text-gray-700 mb-2">
                    Program Interest
                  </label>
                  <select
                    id="program"
                    name="program"
                    value={formData.program}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  >
                    <option value="">Select program</option>
                    <option value="full-day">Full Day Program</option>
                    <option value="half-day-morning">Half Day (Morning)</option>
                    <option value="half-day-afternoon">Half Day (Afternoon)</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    placeholder="Tell us about your specific needs or questions..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full btn-primary flex items-center justify-center"
                >
                  <Send className="h-5 w-5 mr-2" />
                  Send Message
                </button>
              </form>
            </div>

            {/* Map and Additional Info */}
            <div className="space-y-8">
              {/* Map */}
              <div className="card">
                <h3 className="text-2xl font-bold text-gray-900 font-comic mb-4">
                  Find Us
                </h3>
                <div className="w-full h-64 bg-gray-200 rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="h-12 w-12 text-gray-400 mx-auto mb-2" />
                    <p className="text-gray-600">Interactive Map</p>
                    <p className="text-sm text-gray-500">Click to open in Google Maps</p>
                    <a 
                      href="https://maps.google.com/?q=51A+Fatehabad+Rd+Agra"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-orange-500 hover:text-orange-600 font-medium"
                    >
                      Open in Maps
                    </a>
                  </div>
                </div>
              </div>

              {/* Quick Contact */}
              <div className="card">
                <h3 className="text-2xl font-bold text-gray-900 font-comic mb-4">
                  Quick Contact
                </h3>
                <div className="space-y-4">
                  <a 
                    href="tel:+916387659003"
                    className="flex items-center space-x-4 p-3 bg-orange-50 rounded-lg hover:bg-orange-100 transition-colors"
                  >
                    <Phone className="h-6 w-6 text-orange-500" />
                    <div>
                      <p className="font-medium text-gray-900">Call Us Now</p>
                      <p className="text-sm text-gray-600">+91-6387659003</p>
                    </div>
                  </a>
                  
                  <a 
                    href="https://wa.me/916387659003"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-4 p-3 bg-green-50 rounded-lg hover:bg-green-100 transition-colors"
                  >
                    <MessageCircle className="h-6 w-6 text-green-500" />
                    <div>
                      <p className="font-medium text-gray-900">WhatsApp</p>
                      <p className="text-sm text-gray-600">Chat with us instantly</p>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 font-comic">
              Frequently Asked Questions
            </h2>
            <p className="mt-4 text-xl text-gray-600">
              Quick answers to common questions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {faqs.map((faq, index) => (
              <div key={index} className="card">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  {faq.question}
                </h3>
                <p className="text-gray-600">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-orange-500 to-blue-500 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 font-comic">
            Ready to Schedule a Visit?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Come see our facility and meet our amazing team
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:+916387659003" 
              className="bg-white text-orange-500 hover:bg-gray-100 font-semibold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Call to Schedule
            </a>
            <a 
              href="mailto:kidsbuzzcreche@gmail.com" 
              className="border-2 border-white text-white hover:bg-white hover:text-orange-500 font-semibold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105"
            >
              Email Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
