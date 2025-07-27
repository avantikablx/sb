import React from 'react';
import { Shield, FileText, Phone, Mail, ArrowLeft } from 'lucide-react';

const PrivacyPolicy = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-slate-900">
      {/* Header */}
      <div className="py-6 px-6" style={{ backgroundColor: '#0C203B' }}>
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <img 
                src="/Logo.jpg" 
                alt="StraightBooks Logo" 
                className="h-10 w-auto rounded-lg shadow-lg"
              />
              <span className="text-xl font-bold bg-gradient-to-r from-amber-400 to-orange-300 bg-clip-text text-transparent">
                StraightBooks
              </span>
            </div>
            <a 
              href="/"
              className="inline-flex items-center px-4 py-2 bg-slate-800/50 backdrop-blur-sm text-white rounded-lg font-medium hover:bg-slate-700/50 transition-all duration-300 border border-amber-500/30 hover:border-amber-500/50"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Home
            </a>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
                Website Terms and Conditions
              </span>
              <br />
              <span className="bg-gradient-to-r from-amber-400 to-orange-300 bg-clip-text text-transparent">
                & Privacy Policy
              </span>
            </h1>
          </div>

          {/* Terms of Conditions */}
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-amber-500/20 mb-8">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-amber-500 to-orange-400 rounded-lg flex items-center justify-center mr-4">
                <FileText className="h-6 w-6 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-white">Terms of Conditions</h2>
            </div>

            <div className="prose prose-invert max-w-none">
              <p className="text-slate-300 mb-6">
                Welcome to StraightBooks ("we", "our", or "us"). By accessing or using our website and services, you agree to be bound by the following terms and conditions.
              </p>

              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">1. Company Information</h3>
                  <div className="text-slate-300 space-y-2">
                    <p><strong>Business Name:</strong> StraightBooks</p>
                    <p><strong>Registered Address:</strong> 9 Mornington street</p>
                    <p><strong>Company Number:</strong> +44 7398 147870</p>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">2. Description of Services</h3>
                  <p className="text-slate-300">
                    We offer accountancy services including bookkeeping, VAT returns, payroll, self-assessment, and tax compliance for UK-based small businesses.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">3. Client Responsibilities</h3>
                  <p className="text-slate-300">
                    Clients must provide complete and accurate information in a timely manner, approve filings when required, and ensure timely payment of fees.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">4. Our Responsibilities</h3>
                  <p className="text-slate-300">
                    We commit to providing professional and compliant services, maintaining confidentiality, and securing client data. All services are reviewed by UK-qualified professionals.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">5. Payment Terms</h3>
                  <p className="text-slate-300">
                    Invoices are issued monthly or annually. Payment is due within 14 days. Late payments may incur interest or service suspension.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">6. Termination of Services</h3>
                  <p className="text-slate-300">
                    Either party may terminate the agreement with 30 days' written notice. Final charges will apply for services rendered to date.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">7. Limitation of Liability</h3>
                  <p className="text-slate-300">
                    We are not liable for indirect or consequential loss arising from the use of our services, or for errors based on client-provided data.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">8. Governing Law</h3>
                  <p className="text-slate-300">
                    These terms are governed by the laws of England and Wales.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Privacy Policy */}
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-amber-500/20">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-amber-500 to-orange-400 rounded-lg flex items-center justify-center mr-4">
                <Shield className="h-6 w-6 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-white">🔐 Privacy Policy</h2>
            </div>

            <div className="prose prose-invert max-w-none">
              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">1. Introduction</h3>
                  <p className="text-slate-300">
                    This Privacy Policy explains how we collect, use, and protect personal data in accordance with UK GDPR regulations.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">2. Data We Collect</h3>
                  <ul className="text-slate-300 space-y-2">
                    <li>• Personal details (name, email, phone)</li>
                    <li>• Financial details (HMRC UTR, NI numbers, VAT info)</li>
                    <li>• IP address and cookies (if applicable)</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">3. How We Use Your Data</h3>
                  <ul className="text-slate-300 space-y-2">
                    <li>• To provide accountancy services</li>
                    <li>• To communicate regarding services and billing</li>
                    <li>• To fulfil legal obligations (e.g., tax filings)</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">4. Data Storage and Security</h3>
                  <p className="text-slate-300">
                    Data is stored securely on encrypted cloud-based systems. Access is restricted to authorized personnel only.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">5. Data Sharing</h3>
                  <div className="text-slate-300">
                    <p className="mb-2">We share data with:</p>
                    <ul className="space-y-2">
                      <li>• Offshore team members (under strict NDAs)</li>
                      <li>• HMRC and Companies House</li>
                      <li>• Software providers (e.g., Xero, QuickBooks)</li>
                    </ul>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">6. Your Rights</h3>
                  <div className="text-slate-300">
                    <p className="mb-2">You have the right to:</p>
                    <ul className="space-y-2">
                      <li>• Access, correct, or delete your data</li>
                      <li>• Withdraw consent at any time</li>
                      <li>• File a complaint with the Information Commissioner's Office (ICO)</li>
                    </ul>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">7. Cookies</h3>
                  <p className="text-slate-300">
                    We use cookies to enhance user experience and track usage. You may disable cookies via your browser settings.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">8. Contact Information</h3>
                  <div className="text-slate-300">
                    <p className="mb-4">To exercise your rights or raise privacy concerns, contact:</p>
                    <div className="flex items-center space-x-2 text-amber-400">
                      <Mail className="h-4 w-4" />
                      <a href="mailto:Contact@straightbooks.co.uk" className="hover:text-amber-300 transition-colors">
                        Contact@straightbooks.co.uk
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Section */}
          <div className="mt-12 text-center">
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-amber-500/30">
              <h3 className="text-2xl font-bold text-white mb-4">Questions About Our Policies?</h3>
              <p className="text-slate-400 mb-6">
                Contact us if you have any questions about our terms or privacy policy.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="tel:+447398147870"
                  className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-amber-600 to-orange-500 text-white rounded-lg font-semibold hover:from-amber-700 hover:to-orange-600 transition-colors"
                >
                  <Phone className="h-4 w-4 mr-2" />
                  +44 7398 147870
                </a>
                <a 
                  href="mailto:Contact@straightbooks.co.uk"
                  className="inline-flex items-center px-6 py-3 border-2 border-amber-500 text-amber-400 rounded-lg font-semibold hover:bg-amber-500 hover:text-white transition-colors"
                >
                  <Mail className="h-4 w-4 mr-2" />
                  Contact@straightbooks.co.uk
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;