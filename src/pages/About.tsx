import { Heart, Users, Award, Target, BookOpen, Smile } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: <Heart className="h-8 w-8 text-red-500" />,
      title: "Love & Care",
      description: "Every child receives individual attention and unconditional love from our dedicated staff."
    },
    {
      icon: <Users className="h-8 w-8 text-blue-500" />,
      title: "Community",
      description: "Building a strong community of families, children, and educators working together."
    },
    {
      icon: <BookOpen className="h-8 w-8 text-green-500" />,
      title: "Learning",
      description: "Fostering curiosity and love for learning through age-appropriate activities and play."
    },
    {
      icon: <Smile className="h-8 w-8 text-yellow-500" />,
      title: "Happiness",
      description: "Creating joyful experiences that make children excited to come to creche every day."
    },
    {
      icon: <Award className="h-8 w-8 text-purple-500" />,
      title: "Excellence",
      description: "Maintaining the highest standards in childcare and early childhood education."
    },
    {
      icon: <Target className="h-8 w-8 text-orange-500" />,
      title: "Growth",
      description: "Supporting each child's physical, emotional, social, and cognitive development."
    }
  ];

  const team = [
    {
      name: "Mrs. Sunita Sharma",
      role: "Director & Founder",
      description: "With over 15 years in early childhood education, Mrs. Sharma brings passion and expertise to Kids Buzz Creche.",
      image: "/images/600by600-daycare-image-1.jpg"
    },
    {
      name: "Ms. Priya Gupta",
      role: "Head Teacher",
      description: "Certified in Montessori education with 8 years of experience in nurturing young minds.",
      image: "/images/Day-care-1-1-1.jpg"
    },
    {
      name: "Ms. Kavita Singh",
      role: "Care Coordinator",
      description: "Specializes in child psychology and ensures every child feels safe and loved.",
      image: "/images/meal-time.jpg"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="gradient-bg py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 font-comic">
                About 
                <span className="text-gradient">Kids Buzz Creche</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Kids Buzz Creche has been a trusted name in childcare and early education in Agra 
                since 2020. We believe that every child is unique and deserves the best possible 
                start in life.
              </p>
              <p className="text-lg text-gray-600">
                Our mission is to provide a safe, nurturing, and stimulating environment where 
                children can explore, learn, and grow at their own pace while developing essential 
                life skills and a love for learning.
              </p>
            </div>
            <div className="relative">
              <img
                src="/images/Daycare.png"
                alt="Kids Buzz Creche facility"
                className="rounded-3xl shadow-2xl w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="card">
              <div className="text-center mb-6">
                <Target className="h-12 w-12 text-orange-500 mx-auto mb-4" />
                <h2 className="text-3xl font-bold text-gray-900 font-comic">Our Mission</h2>
              </div>
              <p className="text-gray-600 text-center leading-relaxed">
                To provide exceptional childcare and early education services that nurture each 
                child's physical, emotional, social, and cognitive development in a safe, loving, 
                and stimulating environment. We are committed to supporting families and building 
                strong foundations for lifelong learning.
              </p>
            </div>

            <div className="card">
              <div className="text-center mb-6">
                <Award className="h-12 w-12 text-blue-500 mx-auto mb-4" />
                <h2 className="text-3xl font-bold text-gray-900 font-comic">Our Vision</h2>
              </div>
              <p className="text-gray-600 text-center leading-relaxed">
                To be the leading childcare provider in Agra, recognized for our excellence in 
                early childhood education, innovative programs, and commitment to nurturing happy, 
                confident, and capable children who are ready to take on the world with curiosity 
                and enthusiasm.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 gradient-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 font-comic">
              Our Core Values
            </h2>
            <p className="mt-4 text-xl text-gray-600">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div key={index} className="card text-center">
                <div className="flex justify-center mb-4">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="/images/Why-Choose-La-Joie_Banner-2.png"
                alt="Our story"
                className="rounded-3xl shadow-xl w-full h-auto object-cover"
              />
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 font-comic">
                Our Story
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Kids Buzz Creche was founded in 2020 with a simple yet powerful vision: to create 
                a place where children feel loved, valued, and excited to learn. What started as 
                a small daycare center has grown into a thriving community of families who trust 
                us with their most precious gifts.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Located in the heart of Agra, we have had the privilege of watching hundreds of 
                children take their first steps toward independence, make their first friends, 
                and discover the joy of learning. Our experienced team of educators and caregivers 
                work tirelessly to ensure that every child receives the attention, care, and 
                educational foundation they deserve.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Today, we continue to evolve and improve our programs, always keeping the needs 
                of children and families at the center of everything we do. We look forward to 
                being part of your child's journey and helping them buzz with excitement for 
                learning and growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-16 gradient-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 font-comic">
              Meet Our Team
            </h2>
            <p className="mt-4 text-xl text-gray-600">
              Dedicated professionals who make the magic happen
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="card text-center">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-xl font-semibold text-gray-900 mb-1">
                  {member.name}
                </h3>
                <p className="text-orange-500 font-medium mb-3">
                  {member.role}
                </p>
                <p className="text-gray-600 text-sm">
                  {member.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 font-comic">
              Certifications & Accreditations
            </h2>
            <p className="mt-4 text-xl text-gray-600">
              Maintaining the highest standards in childcare
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card text-center">
              <Award className="h-12 w-12 text-yellow-500 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Licensed Childcare Facility
              </h3>
              <p className="text-gray-600 text-sm">
                Fully licensed and compliant with all government regulations
              </p>
            </div>

            <div className="card text-center">
              <Award className="h-12 w-12 text-green-500 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Certified Staff
              </h3>
              <p className="text-gray-600 text-sm">
                All staff members are trained and certified in childcare
              </p>
            </div>

            <div className="card text-center">
              <Award className="h-12 w-12 text-blue-500 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Safety Standards
              </h3>
              <p className="text-gray-600 text-sm">
                Meets all safety and health standards for childcare facilities
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
