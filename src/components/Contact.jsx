import React, { useState } from 'react';
import { contactInfo, personalInfo, socialLinks, formspreeConfig } from '../data/data';
import { FaGithub, FaLinkedin, FaEnvelope, FaMapMarkerAlt, FaPaperPlane, FaCheckCircle, FaExclamationCircle, FaSpinner } from 'react-icons/fa';

const ICONS = {
  FaGithub: FaGithub,
  FaLinkedin: FaLinkedin,
  FaEnvelope: FaEnvelope,
  FaTelegram: FaPaperPlane,
};

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [submitErrorDetail, setSubmitErrorDetail] = useState('');

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    
    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setSubmitStatus(null);
    setSubmitErrorDetail('');
    setIsSubmitting(true);

    try {
      const formDataToSend = {
        name: formData.name,
        email: formData.email,
        subject: formData.subject,
        message: formData.message,
        portfolio_name: personalInfo.name,
        submitted_at: new Date().toLocaleString('en-US', {
          year: 'numeric',
          month: 'short',
          day: '2-digit',
          hour: '2-digit',
          minute: '2-digit',
          hour12: true,
        })
      };

      // Use Formspree API
      const response = await fetch(formspreeConfig.endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(formDataToSend)
      });

      const result = await response.json();

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: '',
        });
      } else {
        throw new Error(result.error || 'Failed to send message');
      }
    } catch (err) {
      const msg = err instanceof Error ? err.message : String(err);
      setSubmitErrorDetail(msg);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      // Auto-hide success/error messages after 8 seconds
      setTimeout(() => {
        setSubmitStatus(null);
        setSubmitErrorDetail('');
      }, 8000);
    }
  };

  return (
    <section className="py-16 px-4 sm:px-6">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-slate-900 dark:text-white">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-gray-300 max-w-2xl mx-auto">
            Have a project in mind? I'd love to hear from you. Send me a message and I'll respond as soon as possible.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-8 animate-slide-left">
            <div className="glass-card p-4 sm:p-6 lg:p-8">
              <h3 className="text-xl lg:text-2xl font-bold text-slate-900 dark:text-white mb-4 lg:mb-6">Contact Information</h3>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3 sm:space-x-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center shadow-md shadow-cyan-500/20">
                    <FaEnvelope className="text-white text-lg sm:text-xl" />
                  </div>
                  <div>
                    <p className="text-slate-500 dark:text-gray-400 text-sm">Email</p>
                    <a href={`mailto:${contactInfo.email}`} className="text-slate-900 dark:text-white hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors font-medium">
                      {contactInfo.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center shadow-md shadow-cyan-500/20">
                    <FaMapMarkerAlt className="text-white text-xl" />
                  </div>
                  <div>
                    <p className="text-slate-500 dark:text-gray-400 text-sm">Location</p>
                    <p className="text-slate-900 dark:text-white">{contactInfo.location}</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-slate-200 dark:border-gray-700">
                <h4 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">Connect With Me</h4>
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 bg-slate-100 dark:bg-gray-800 border border-slate-200/80 dark:border-transparent rounded-lg flex items-center justify-center text-2xl hover:scale-110 transition-all duration-300 hover:shadow-lg"
                      style={{ color: social.color }}
                    >
                      {React.createElement(ICONS[social.icon] ?? FaEnvelope)}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Availability */}
            <div className="glass-card p-8">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">Availability</h3>
              <p className="text-slate-600 dark:text-gray-300">
                I'm currently available for freelance work, internships, and collaboration opportunities. 
                Feel free to reach out!
              </p>
              <div className="mt-4 flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-green-600 dark:text-green-500 text-sm font-medium">Available for work</span>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="animate-slide-right">
            <form 
              name="contact"
              method="POST" 
              onSubmit={handleSubmit} 
              className="glass-card p-8 space-y-6"
            >
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Send a Message</h3>
              
              {/* No hidden fields needed for Formspree */}
              
              {submitStatus === 'success' && (
                <div className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 border border-green-200 dark:border-green-800 rounded-xl p-6 flex items-start space-x-4 shadow-lg shadow-green-500/10 animate-fadeIn">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center">
                      <FaCheckCircle className="text-white text-xl" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-green-800 dark:text-green-200 font-bold text-lg mb-2">Message Sent Successfully!</h4>
                    <p className="text-green-700 dark:text-green-300 text-sm leading-relaxed">
                      Thank you for reaching out, <span className="font-semibold">{formData.name || 'there'}</span>! Your message has been delivered directly to my inbox at <span className="font-medium">{contactInfo.email}</span>. I read every message personally and will get back to you within 24-48 hours.
                    </p>
                    <div className="mt-3 pt-3 border-t border-green-200 dark:border-green-700">
                      <p className="text-green-600 dark:text-green-400 text-xs flex items-center">
                        <FaEnvelope className="mr-2" />
                        Delivered to: {contactInfo.email}
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="bg-gradient-to-r from-red-50 to-rose-50 dark:from-red-900/20 dark:to-rose-900/20 border border-red-200 dark:border-red-800 rounded-xl p-6 flex items-start space-x-4 shadow-lg shadow-red-500/10 animate-fadeIn">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-rose-600 rounded-full flex items-center justify-center">
                      <FaExclamationCircle className="text-white text-xl" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-red-800 dark:text-red-200 font-bold text-lg mb-2">Unable to Send Message</h4>
                    <p className="text-red-700 dark:text-red-300 text-sm leading-relaxed mb-3">
                      {submitErrorDetail || 'Something went wrong while sending your message. Please try again.'}
                    </p>
                    <div className="bg-red-100 dark:bg-red-900/30 rounded-lg p-3 mt-3">
                      <p className="text-red-800 dark:text-red-200 text-xs font-medium mb-2">Alternative Options:</p>
                      <ul className="text-red-700 dark:text-red-300 text-xs space-y-1 list-disc list-inside">
                        <li>Try submitting the form again</li>
                        <li>Email me directly at <a href={`mailto:${contactInfo.email}`} className="underline hover:no-underline">{contactInfo.email}</a></li>
                        <li>Check your internet connection</li>
                      </ul>
                    </div>
                  </div>
                </div>
              )}

              <div>
                <label htmlFor="name" className="block text-slate-700 dark:text-gray-300 mb-2 font-medium">
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 bg-white dark:bg-gray-800/50 border rounded-lg text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-gray-500 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500/25 transition-colors ${
                    errors.name ? 'border-red-500' : 'border-slate-200 dark:border-gray-700'
                  }`}
                  placeholder="Your name"
                />
                {errors.name && (
                  <p className="mt-1 text-red-500 text-sm flex items-center space-x-1">
                    <FaExclamationCircle />
                    <span>{errors.name}</span>
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="email" className="block text-slate-700 dark:text-gray-300 mb-2 font-medium">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 bg-white dark:bg-gray-800/50 border rounded-lg text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-gray-500 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500/25 transition-colors ${
                    errors.email ? 'border-red-500' : 'border-slate-200 dark:border-gray-700'
                  }`}
                  placeholder="your.email@example.com"
                />
                {errors.email && (
                  <p className="mt-1 text-red-500 text-sm flex items-center space-x-1">
                    <FaExclamationCircle />
                    <span>{errors.email}</span>
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="subject" className="block text-slate-700 dark:text-gray-300 mb-2 font-medium">
                  Subject *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 bg-white dark:bg-gray-800/50 border rounded-lg text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-gray-500 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500/25 transition-colors ${
                    errors.subject ? 'border-red-500' : 'border-slate-200 dark:border-gray-700'
                  }`}
                  placeholder="What is this regarding?"
                />
                {errors.subject && (
                  <p className="mt-1 text-red-500 text-sm flex items-center space-x-1">
                    <FaExclamationCircle />
                    <span>{errors.subject}</span>
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="message" className="block text-slate-700 dark:text-gray-300 mb-2 font-medium">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  className={`w-full px-4 py-3 bg-white dark:bg-gray-800/50 border rounded-lg text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-gray-500 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500/25 transition-colors resize-none ${
                    errors.message ? 'border-red-500' : 'border-slate-200 dark:border-gray-700'
                  }`}
                  placeholder="Your message here..."
                ></textarea>
                {errors.message && (
                  <p className="mt-1 text-red-500 text-sm flex items-center space-x-1">
                    <FaExclamationCircle />
                    <span>{errors.message}</span>
                  </p>
                )}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold py-4 px-6 rounded-lg transition-all duration-300 transform hover:scale-[1.02] hover:shadow-xl hover:shadow-cyan-500/25 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none disabled:shadow-none flex items-center justify-center space-x-3"
              >
                {isSubmitting ? (
                  <>
                    <FaSpinner className="animate-spin text-xl" />
                    <span>Sending Message...</span>
                  </>
                ) : (
                  <>
                    <FaPaperPlane className="text-lg" />
                    <span>Send Message</span>
                  </>
                )}
              </button>

              <p className="text-slate-500 dark:text-gray-500 text-xs text-center">
                * All fields are required. Your message will be sent directly to <span className="font-medium">{contactInfo.email}</span>. I typically respond within 24-48 hours.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;