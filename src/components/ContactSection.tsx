import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, Check, MessageSquare } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    // Simulate send
    setTimeout(() => {
      setSending(false);
      setSubmitted(true);
      setForm({ name: '', email: '', message: '' });
      setTimeout(() => setSubmitted(false), 4000);
    }, 800);
  };

  const info = [
    { icon: Mail, label: 'Email', value: 'support@bharatfasteners.in', href: 'mailto:support@bharatfasteners.in' },
    { icon: Phone, label: 'Phone', value: '+91 98765 43210', href: 'tel:+919876543210' },
    { icon: MapPin, label: 'Location', value: 'Pan-India · 2-Day Delivery', href: null },
    { icon: Clock, label: 'Business Hours', value: 'Mon–Sat, 9 AM – 7 PM IST', href: null },
  ];

  return (
    <section id="contact" className="scroll-mt-20 py-16">
      {/* Section header */}
      <div className="flex items-center gap-3 mb-2">
        <div className="bg-gradient-to-br from-brand-500 to-brand-600 p-2 rounded-xl">
          <MessageSquare className="h-5 w-5 text-white" />
        </div>
        <h2 className="font-display text-2xl sm:text-3xl font-bold text-white">
          Contact Us
        </h2>
      </div>
      <p className="text-sm text-slate-400 mb-8 max-w-xl">
        Have a question about bulk orders, custom fasteners, or anything else? We'd love to hear from you.
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
        {/* Left — Info Cards */}
        <div className="lg:col-span-2 space-y-4">
          {info.map((item, i) => (
            <div
              key={i}
              className="glass rounded-xl p-4 glow-border card-hover flex items-start gap-4 animate-fade-in"
              style={{ animationDelay: `${i * 0.08}s` }}
            >
              <div className="bg-brand-500/10 p-2.5 rounded-lg shrink-0">
                <item.icon className="h-5 w-5 text-brand-400" />
              </div>
              <div>
                <p className="text-xs text-slate-500 mb-0.5">{item.label}</p>
                {item.href ? (
                  <a href={item.href} className="text-sm text-white hover:text-brand-400 transition-colors font-medium">
                    {item.value}
                  </a>
                ) : (
                  <p className="text-sm text-white font-medium">{item.value}</p>
                )}
              </div>
            </div>
          ))}

          {/* Map placeholder */}
          <div className="glass rounded-xl overflow-hidden glow-border aspect-video flex items-center justify-center">
            <div className="text-center">
              <MapPin className="h-8 w-8 text-brand-400 mx-auto mb-2 animate-bounce" />
              <p className="text-xs text-slate-400">Pan-India Shipping</p>
              <p className="text-[10px] text-slate-500">Free delivery on orders above ₹999</p>
            </div>
          </div>
        </div>

        {/* Right — Contact Form */}
        <div className="lg:col-span-3">
          <div className="glass rounded-2xl glow-border p-6 sm:p-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <h3 className="font-display text-lg font-bold text-white mb-1">Send us a message</h3>
            <p className="text-xs text-slate-400 mb-6">We typically respond within 2–4 business hours.</p>

            {submitted ? (
              <div className="flex flex-col items-center justify-center py-12 animate-fade-in">
                <div className="bg-green-500/20 p-4 rounded-full mb-4">
                  <Check className="h-8 w-8 text-green-400" />
                </div>
                <h4 className="text-lg font-bold text-white mb-1">Message Sent!</h4>
                <p className="text-sm text-slate-400 text-center">
                  Thanks for reaching out. We'll get back to you soon.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="contact-name" className="block text-xs text-slate-400 mb-1.5">Your Name</label>
                    <input
                      id="contact-name"
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      placeholder="Rajesh Kumar"
                      className="w-full px-4 py-2.5 rounded-xl glass-light text-sm text-slate-200 placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-brand-500/50 transition-all"
                    />
                  </div>
                  <div>
                    <label htmlFor="contact-email" className="block text-xs text-slate-400 mb-1.5">Email Address</label>
                    <input
                      id="contact-email"
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      placeholder="rajesh@company.com"
                      className="w-full px-4 py-2.5 rounded-xl glass-light text-sm text-slate-200 placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-brand-500/50 transition-all"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="contact-message" className="block text-xs text-slate-400 mb-1.5">Message</label>
                  <textarea
                    id="contact-message"
                    required
                    rows={5}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="Tell us about your requirements, bulk order needs, or any question..."
                    className="w-full px-4 py-2.5 rounded-xl glass-light text-sm text-slate-200 placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-brand-500/50 transition-all resize-none"
                  />
                </div>
                <button
                  type="submit"
                  disabled={sending}
                  className="btn-primary w-full sm:w-auto flex items-center justify-center gap-2 py-3 px-8"
                >
                  {sending ? (
                    <span className="h-4 w-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  ) : (
                    <Send className="h-4 w-4" />
                  )}
                  {sending ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
