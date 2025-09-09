import { CreditCard, Smartphone, Building, Calculator, Clock, CheckCircle } from 'lucide-react';

const FeePayment = () => {
  const feeStructure = [
    {
      program: "Full Day Program",
      age: "12 months - 6 years",
      timing: "8:30 AM - 4:30 PM",
      monthlyFee: "₹8,000",
      features: ["All meals included", "Transportation available", "All activities", "Extended care"]
    },
    {
      program: "Half Day Program (Morning)",
      age: "12 months - 6 years", 
      timing: "8:30 AM - 12:30 PM",
      monthlyFee: "₹5,000",
      features: ["Morning snack & lunch", "Core activities", "Learning sessions", "Playground time"]
    },
    {
      program: "Half Day Program (Afternoon)",
      age: "12 months - 6 years",
      timing: "12:30 PM - 4:30 PM", 
      monthlyFee: "₹5,000",
      features: ["Lunch & evening snack", "Rest time", "Creative activities", "Outdoor play"]
    }
  ];

  const paymentMethods = [
    {
      icon: <Building className="h-8 w-8 text-blue-500" />,
      title: "Bank Transfer",
      description: "Direct transfer to our bank account",
      details: "Account Name: Kids Buzz Creche\nAccount No: 1234567890\nIFSC: AXIS0001234\nBank: Axis Bank"
    },
    {
      icon: <Smartphone className="h-8 w-8 text-green-500" />,
      title: "UPI Payment",
      description: "Pay instantly using UPI apps",
      details: "UPI ID: kidsbuzzcreche@axisbank\nScan QR code for quick payment"
    },
    {
      icon: <CreditCard className="h-8 w-8 text-purple-500" />,
      title: "Card Payment",
      description: "Credit/Debit card payments accepted",
      details: "Visa, Mastercard, RuPay accepted\nSecure payment gateway"
    },
    {
      icon: <Building className="h-8 w-8 text-orange-500" />,
      title: "Cash Payment",
      description: "Pay directly at our facility",
      details: "Visit during office hours\nReceipt provided immediately"
    }
  ];

  const paymentPolicies = [
    {
      icon: <Clock className="h-6 w-6 text-blue-500" />,
      title: "Payment Due Date",
      description: "Monthly fees are due by the 5th of each month"
    },
    {
      icon: <Calculator className="h-6 w-6 text-green-500" />,
      title: "Registration Fee",
      description: "One-time registration fee of ₹2,000 (non-refundable)"
    },
    {
      icon: <CheckCircle className="h-6 w-6 text-purple-500" />,
      title: "Advance Payment",
      description: "10% discount on annual fee payment in advance"
    }
  ];

  const additionalServices = [
    { service: "Transportation (One Way)", fee: "₹1,500/month" },
    { service: "Transportation (Both Ways)", fee: "₹2,500/month" },
    { service: "Extended Care (Till 6 PM)", fee: "₹1,000/month" },
    { service: "Special Diet/Meals", fee: "₹500/month" },
    { service: "Extra Curriculum Activities", fee: "₹800/month" }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="gradient-bg py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 font-comic mb-6">
            Fee <span className="text-gradient">Payment</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Transparent pricing with flexible payment options. Invest in your child's 
            future with our affordable and comprehensive childcare programs.
          </p>
        </div>
      </section>

      {/* Fee Structure */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 font-comic">
              Fee Structure
            </h2>
            <p className="mt-4 text-xl text-gray-600">
              Choose the program that best fits your family's needs
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {feeStructure.map((plan, index) => (
              <div 
                key={index} 
                className={`card ${index === 0 ? 'ring-2 ring-orange-500 ring-opacity-50' : ''}`}
              >
                {index === 0 && (
                  <div className="bg-orange-500 text-white text-sm font-semibold px-3 py-1 rounded-full inline-block mb-4">
                    Most Popular
                  </div>
                )}
                
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {plan.program}
                </h3>
                
                <div className="mb-4">
                  <div className="text-3xl font-bold text-orange-500">{plan.monthlyFee}</div>
                  <div className="text-gray-600 text-sm">per month</div>
                </div>

                <div className="space-y-2 mb-6">
                  <div className="text-sm text-gray-600">
                    <strong>Age Group:</strong> {plan.age}
                  </div>
                  <div className="text-sm text-gray-600">
                    <strong>Timing:</strong> {plan.timing}
                  </div>
                </div>

                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-3" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <button className="w-full btn-primary">
                  Choose This Plan
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Payment Methods */}
      <section className="py-16 gradient-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 font-comic">
              Payment Methods
            </h2>
            <p className="mt-4 text-xl text-gray-600">
              Multiple convenient payment options for your ease
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {paymentMethods.map((method, index) => (
              <div key={index} className="card text-center">
                <div className="flex justify-center mb-4">
                  {method.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  {method.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  {method.description}
                </p>
                <div className="text-xs text-gray-500 whitespace-pre-line">
                  {method.details}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 font-comic mb-6">
                Additional Services
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Optional services to enhance your child's experience at Kids Buzz Creche.
              </p>
              
              <div className="space-y-4">
                {additionalServices.map((service, index) => (
                  <div key={index} className="flex justify-between items-center py-3 border-b border-gray-200">
                    <span className="text-gray-700">{service.service}</span>
                    <span className="font-semibold text-orange-500">{service.fee}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-gray-900 font-comic mb-6">
                Payment Policies
              </h2>
              
              <div className="space-y-6">
                {paymentPolicies.map((policy, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    {policy.icon}
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">
                        {policy.title}
                      </h3>
                      <p className="text-gray-600 text-sm">
                        {policy.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 p-6 bg-yellow-50 rounded-2xl border border-yellow-200">
                <h3 className="font-semibold text-gray-900 mb-2">Important Notes:</h3>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Late payment charges: ₹200 after 10th of the month</li>
                  <li>• Security deposit: ₹5,000 (refundable)</li>
                  <li>• Fees are non-refundable once paid</li>
                  <li>• 30 days written notice required for withdrawal</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact for Payment */}
      <section className="py-16 bg-gradient-to-r from-orange-500 to-blue-500 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 font-comic">
            Need Help with Payment?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Our team is here to assist you with any payment-related queries
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:+916387659003" 
              className="bg-white text-orange-500 hover:bg-gray-100 font-semibold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Call: +91-6387659003
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

export default FeePayment;
