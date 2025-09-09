import { 
  Shield, 
  Camera, 
  Utensils, 
  Gamepad2, 
  Book, 
  Music, 
  Palette, 
  Bed,
  TreePine,
  Heart,
  Monitor,
  Car
} from 'lucide-react';

const Facilities = () => {
  const facilities = [
    {
      icon: <Shield className="h-12 w-12 text-blue-500" />,
      title: "Safety & Security",
      description: "24/7 CCTV surveillance, secure entry systems, and trained security personnel",
      features: ["CCTV in all areas", "Secure entry/exit", "Background-checked staff", "Emergency protocols"]
    },
    {
      icon: <Camera className="h-12 w-12 text-green-500" />,
      title: "CCTV Monitoring",
      description: "Complete surveillance system for child safety and parent peace of mind",
      features: ["HD cameras", "Live monitoring", "Recorded footage", "Parent access app"]
    },
    {
      icon: <Utensils className="h-12 w-12 text-orange-500" />,
      title: "Nutritious Meals",
      description: "Healthy, balanced meals prepared by our in-house nutritionist",
      features: ["Fresh ingredients", "Balanced nutrition", "Special diets accommodated", "Snack times"]
    },
    {
      icon: <Gamepad2 className="h-12 w-12 text-purple-500" />,
      title: "Indoor Play Area",
      description: "Safe, age-appropriate play equipment and learning corners",
      features: ["Soft play area", "Educational toys", "Reading corner", "Music zone"]
    },
    {
      icon: <TreePine className="h-12 w-12 text-green-600" />,
      title: "Outdoor Playground",
      description: "Spacious outdoor area with playground equipment and garden",
      features: ["Swings & slides", "Sandbox", "Garden area", "Sports equipment"]
    },
    {
      icon: <Bed className="h-12 w-12 text-pink-500" />,
      title: "Rest Area",
      description: "Comfortable nap areas with low-rise beds for child safety",
      features: ["Individual beds", "Quiet environment", "Comfortable bedding", "Supervised rest"]
    },
    {
      icon: <Book className="h-12 w-12 text-indigo-500" />,
      title: "Learning Center",
      description: "Well-equipped classrooms with educational materials and resources",
      features: ["Age-appropriate materials", "Interactive learning", "Library corner", "Digital learning tools"]
    },
    {
      icon: <Palette className="h-12 w-12 text-red-500" />,
      title: "Art & Craft Studio",
      description: "Creative space for artistic expression and skill development",
      features: ["Art supplies", "Craft materials", "Display boards", "Creative workshops"]
    },
    {
      icon: <Music className="h-12 w-12 text-yellow-500" />,
      title: "Music & Dance Room",
      description: "Dedicated space for musical activities and movement",
      features: ["Musical instruments", "Audio system", "Dance floor", "Performance space"]
    },
    {
      icon: <Heart className="h-12 w-12 text-red-400" />,
      title: "Medical Care",
      description: "Basic medical facilities and trained first aid staff",
      features: ["First aid kit", "Trained staff", "Medical records", "Emergency contacts"]
    },
    {
      icon: <Monitor className="h-12 w-12 text-gray-500" />,
      title: "Smart Classrooms",
      description: "Technology-enabled learning environments for modern education",
      features: ["Interactive boards", "Educational apps", "Digital content", "Tech integration"]
    },
    {
      icon: <Car className="h-12 w-12 text-blue-600" />,
      title: "Transportation",
      description: "Safe and reliable transportation service for children",
      features: ["GPS tracking", "Qualified drivers", "Safety belts", "Route optimization"]
    }
  ];

  const ageGroups = [
    {
      age: "12-24 Months",
      title: "Infant Care",
      description: "Specialized care for the youngest children with focus on safety and development",
      image: "/images/Day-care-1-1-1.jpg",
      features: [
        "Low furniture for safety",
        "Soft play materials",
        "Individual attention",
        "Diaper changing station",
        "Feeding support",
        "Sleep schedule maintenance"
      ]
    },
    {
      age: "2-4 Years",
      title: "Toddler Program",
      description: "Active learning environment designed for curious toddlers",
      image: "/images/600by600-daycare-image-1.jpg",
      features: [
        "Interactive learning zones",
        "Potty training support",
        "Social skill development",
        "Motor skill activities",
        "Creative expression",
        "Language development"
      ]
    },
    {
      age: "4-6 Years",
      title: "Pre-School Ready",
      description: "School preparation program for children entering formal education",
      image: "/images/meal-time.jpg",
      features: [
        "Academic readiness",
        "Writing practice",
        "Number concepts",
        "Science exploration",
        "Independence skills",
        "Peer interaction"
      ]
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="gradient-bg py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 font-comic mb-6">
            Our <span className="text-gradient">Facilities</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            State-of-the-art facilities designed with your child's safety, comfort, 
            and development in mind. Every corner of our creche is thoughtfully 
            designed to inspire learning and growth.
          </p>
        </div>
      </section>

      {/* Main Facilities Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 font-comic">
              World-Class Facilities
            </h2>
            <p className="mt-4 text-xl text-gray-600">
              Everything your child needs for a safe and enriching experience
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {facilities.map((facility, index) => (
              <div key={index} className="card">
                <div className="flex justify-center mb-4">
                  {facility.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3 text-center">
                  {facility.title}
                </h3>
                <p className="text-gray-600 mb-4 text-center">
                  {facility.description}
                </p>
                <ul className="space-y-2">
                  {facility.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                      <div className="w-2 h-2 bg-orange-400 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Age-Specific Facilities */}
      <section className="py-16 gradient-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 font-comic">
              Age-Specific Programs
            </h2>
            <p className="mt-4 text-xl text-gray-600">
              Tailored environments for different developmental stages
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {ageGroups.map((group, index) => (
              <div key={index} className="card">
                <img
                  src={group.image}
                  alt={group.title}
                  className="w-full h-48 object-cover rounded-xl mb-4"
                />
                <div className="bg-orange-100 text-orange-800 text-sm font-semibold px-3 py-1 rounded-full inline-block mb-3">
                  {group.age}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {group.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {group.description}
                </p>
                <ul className="space-y-2">
                  {group.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                      <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Safety Measures */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 font-comic mb-6">
                Safety First, Always
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Your child's safety is our top priority. We have implemented comprehensive 
                safety measures and protocols to ensure a secure environment.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <Shield className="h-6 w-6 text-blue-500 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900">24/7 Security</h3>
                    <p className="text-gray-600 text-sm">Round-the-clock surveillance and security personnel</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <Camera className="h-6 w-6 text-green-500 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900">CCTV Monitoring</h3>
                    <p className="text-gray-600 text-sm">Complete video surveillance in all areas</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <Heart className="h-6 w-6 text-red-500 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Trained Staff</h3>
                    <p className="text-gray-600 text-sm">All staff certified in first aid and child safety</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <Monitor className="h-6 w-6 text-purple-500 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Parent Access</h3>
                    <p className="text-gray-600 text-sm">Real-time updates and camera access for parents</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <img
                src="/images/Why-Choose-La-Joie_Banner-2 (1).png"
                alt="Safety measures"
                className="rounded-3xl shadow-xl w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Facility Timings */}
      <section className="py-16 gradient-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 font-comic">
              Facility Hours & Programs
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="card">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4 text-center">
                Operating Hours
              </h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center py-2 border-b border-gray-200">
                  <span className="font-medium">Monday - Friday</span>
                  <span className="text-orange-500 font-semibold">8:30 AM - 4:30 PM</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-200">
                  <span className="font-medium">Saturday</span>
                  <span className="text-orange-500 font-semibold">8:30 AM - 4:30 PM</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="font-medium">Sunday</span>
                  <span className="text-gray-500">Closed</span>
                </div>
              </div>
            </div>

            <div className="card">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4 text-center">
                Program Options
              </h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center py-2 border-b border-gray-200">
                  <span className="font-medium">Full Day</span>
                  <span className="text-blue-500 font-semibold">8:30 AM - 4:30 PM</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-200">
                  <span className="font-medium">Half Day (Morning)</span>
                  <span className="text-blue-500 font-semibold">8:30 AM - 12:30 PM</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="font-medium">Half Day (Afternoon)</span>
                  <span className="text-blue-500 font-semibold">12:30 PM - 4:30 PM</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Facilities;
