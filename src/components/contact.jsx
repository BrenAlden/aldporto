import React, { useState } from 'react'

const InstagramIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24" {...props}>
    <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2Zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5a4.25 4.25 0 0 0 4.25-4.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 1.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7Zm5.25-.88a.88.88 0 1 1-1.75 0 .88.88 0 0 1 1.75 0Z" />
  </svg>
)

const LinkedInIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
  </svg>
)

const PaperPlaneIcon = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
    </svg>
)

function Contact() {
  const [inquiryType, setInquiryType] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submissionStatus, setSubmissionStatus] = useState(null)

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmissionStatus(null);
    const form = e.target;
    const formData = new FormData(form);

    try {
      const response = await fetch('https://formspree.io/f/xeoznape', {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Network response was not ok.');
      }

      setSubmissionStatus('success');
      form.reset();
      setInquiryType('');
    } catch (error) {
      console.error('Submission error:', error);
      setSubmissionStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full max-w-6xl p-8 md:p-12 mx-auto shadow-lg rounded-lg">
      <div className="flex flex-col md:flex-row md:gap-16">
        
        <div className="md:w-5/12 text-center md:text-left mb-10 md:mb-0">
          <h2 className="text-3xl font-bold text-[#1661d2ff] mb-4">Get in Touch</h2>
          <p className="text-gray-600 mb-8">
            I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions. Feel free to reach out using the form, or connect with me below.
          </p>
          <div className="flex flex-col items-center md:items-start space-y-4">
             <a href="https://www.instagram.com/brenalden10/profilecard/?igsh=MXhxd3V1b2RjdHdueQ%3D%3D" className="w-full md:w-auto flex items-center justify-center gap-3 px-6 py-3 rounded-lg bg-pink-600 text-white font-semibold hover:bg-pink-500 transition-colors duration-300">
                <InstagramIcon className="w-6 h-6" />
                <span>Instagram</span>
            </a>
            <a href="https://www.linkedin.com/in/brenalden" className="w-full md:w-auto flex items-center justify-center gap-3 px-6 py-3 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-500 transition-colors duration-300">
                <LinkedInIcon className="w-6 h-6" />
                <span>LinkedIn</span>
            </a>
          </div>
        </div>

        <div className="md:w-7/12">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="inquiry" className="block text-sm font-medium text-gray-700">Reason for Contact</label>
              <select 
                id="inquiry" 
                name="inquiry" 
                value={inquiryType} 
                onChange={(e) => setInquiryType(e.target.value)} 
                required 
                className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-yellow-400 focus:border-yellow-400 sm:text-sm"
              >
                <option value="" disabled>Please select an option...</option>
                <option value="cv_request">Request CV/Resume</option>
                <option value="collaboration">Collaboration Project</option>
                <option value="feedback">Website Feedback</option>
              </select>
            </div>
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full Name</label>
              <input type="text" id="name" name="name" required className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-yellow-400 focus:border-yellow-400 sm:text-sm" />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
              <input type="email" id="email" name="email" required className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-yellow-400 focus:border-yellow-400 sm:text-sm" />
            </div>
            {inquiryType && inquiryType !== 'cv_request' && (
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                <textarea id="message" name="message" rows="4" required className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-yellow-400 focus:border-yellow-400 sm:text-sm"></textarea>
              </div>
            )}
            <div>
              <button type="submit" disabled={isSubmitting} className="w-full flex items-center justify-center gap-2 py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-bold text-white bg-yellow-400 hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-400 disabled:bg-yellow-200 disabled:cursor-not-allowed transition-colors duration-300">
                <PaperPlaneIcon className="w-5 h-5"/>
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </div>
            {submissionStatus === 'success' && (
              <p className="text-center text-green-600 font-medium">Thank you! Your message has been sent successfully.</p>
            )}
            {submissionStatus === 'error' && (
              <p className="text-center text-red-600 font-medium">Sorry, something went wrong. Please try again later.</p>
            )}
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact
