import React from 'react';
import { SocialIcon } from 'react-social-icons/component'
import 'react-social-icons/facebook'
import 'react-social-icons/linkedin'
import 'react-social-icons/x'
import 'react-social-icons/youtube'

const Footer = () => {
    const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-100 py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          <div>
            <h4 className="font-semibold mb-4">Credit Risk Management</h4>
            <ul>
              <li className="mb-2"><a href="#" className="text-gray-600">Credit Scoring</a></li>
              <li className="mb-2"><a href="#" className="text-gray-600">Application Scoring</a></li>
              <li className="mb-2"><a href="#" className="text-gray-600">Collection Scoring</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Predictive Analytics</h4>
            <ul>
              <li className="mb-2"><a href="#" className="text-gray-600">Alternative Lending</a></li>
              <li className="mb-2"><a href="#" className="text-gray-600">Financial Services</a></li>
              <li className="mb-2"><a href="#" className="text-gray-600">Banking</a></li>
              <li className="mb-2"><a href="#" className="text-gray-600">Data Related Specialists</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul>
              <li className="mb-2"><a href="#" className="text-gray-600">Partnerships</a></li>
              <li className="mb-2"><a href="#" className="text-gray-600">Blog</a></li>
              <li className="mb-2"><a href="#" className="text-gray-600">Case Study</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Lending Platform</h4>
            <ul>
              <li className="mb-2"><a href="#" className="text-gray-600">Loan Origination</a></li>
              <li className="mb-2"><a href="#" className="text-gray-600">Loan Servicing</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Contacts</h4>
            <ul>
              <li className="mb-2 text-gray-600">UAB HES Europe, Vilnius Konstitucijos pr. 21A</li>
              <li className="mb-2 text-gray-600">invite@ginimachine.com</li>
              <li className="mb-2">
                <a href="#" className="text-gray-600"> 
                    <SocialIcon network="facebook" href="https://www.facebook.com" />
                </a>
                <a href="#" className="text-gray-600 mx-2">
                    <SocialIcon network="linkedin" href="https://www.linkedin.com" />
                </a>
                <a href="#" className="text-gray-600">
                    <SocialIcon network="x" href="https://www.x.com" />
                </a>
              </li>
            </ul>
            <div className="flex gap-4">
          </div>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Powered</h4>
            <ul>
              <li className="mb-2 text-gray-600">by HES FinTech © {currentYear}</li>
              <li className="mb-2"><a href="#" className="text-gray-600">Privacy Policy</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
