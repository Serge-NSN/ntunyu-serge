import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Get In Touch</h2>
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-lg mb-8 text-secondary/80">
            I'm currently open to new opportunities and collaborations. Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>
          <div className="space-y-4">
            <div className="card flex items-center justify-center space-x-4">
              <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <a href="mailto:ntunyuserge@gmail.com" className="text-lg hover:text-accent transition-colors">
                ntunyuserge@gmail.com
              </a>
            </div>
            <div className="card flex items-center justify-center space-x-4">
              <svg className="w-6 h-6 text-accent" viewBox="0 0 32 32" fill="currentColor">
                <path d="M16.003 3.2c-7.06 0-12.8 5.74-12.8 12.8 0 2.26.6 4.47 1.74 6.41l-1.85 6.77a1.07 1.07 0 0 0 1.31 1.31l6.77-1.85a12.74 12.74 0 0 0 6.43 1.74c7.06 0 12.8-5.74 12.8-12.8s-5.74-12.8-12.8-12.8zm0 23.36c-2.01 0-3.98-.53-5.7-1.53l-.41-.24-4.02 1.1 1.1-4.02-.24-.41a10.61 10.61 0 0 1-1.53-5.7c0-5.87 4.78-10.65 10.65-10.65s10.65 4.78 10.65 10.65-4.78 10.65-10.65 10.65zm5.82-7.89c-.32-.16-1.89-.93-2.18-1.04-.29-.11-.5-.16-.71.16-.21.32-.82 1.04-1.01 1.25-.19.21-.37.23-.69.08-.32-.16-1.36-.5-2.59-1.59-.96-.86-1.61-1.92-1.8-2.24-.19-.32-.02-.5.14-.66.15-.15.32-.39.48-.58.16-.19.21-.33.32-.54.11-.21.05-.39-.02-.54-.08-.16-.71-1.7-.97-2.38-.26-.62-.53-.54-.73-.55-.19-.01-.42-.01-.65-.01-.23 0-.6.09-.91.42-.31.33-1.19 1.14-1.19 2.78 0 1.63 1.19 3.2 1.36 3.42.17.22 2.36 3.61 5.72 4.92.8.34 1.42.54 1.91.67.8.22 1.53.19 2.11.11.64-.09 1.97-.8 2.25-1.56.28-.76.28-1.41.19-1.56-.09-.15-.34-.24-.66-.4z"/>
              </svg>
              <a
                href="https://wa.me/237651000536"
                className="text-lg hover:text-accent transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                Chat on WhatsApp
              </a>
            </div>
          </div>
          <div className="mt-8 flex justify-center space-x-6">
            <a
              href="https://www.linkedin.com/in/ntunyu-serge-3624b2207/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-secondary hover:text-accent transition-colors"
            >
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </a>
            <a
              href="https://github.com/Serge-NSN"
              target="_blank"
              rel="noopener noreferrer"
              className="text-secondary hover:text-accent transition-colors"
            >
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;