import { Mail, Phone, MapPin, Github, Linkedin, MessageCircle, Zap } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "8540vaibhavsonar@gmail.com",
      href: "mailto:8540vaibhavsonar@gmail.com",
      gradient: "linear-gradient(to right, #10b981, #14b8a6)",
      hoverColor: "#0f766e",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 6353068163",
      href: "tel:+916353068163",
      gradient: "linear-gradient(to right, #f59e0b, #ea580c)",
      hoverColor: "#d97706",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Surat, Gujarat",
      href: "#",
      gradient: "linear-gradient(to right, #f97316, #dc2626)",
      hoverColor: "#c2410c",
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/vaibhavsonar8540",
      gradient: "linear-gradient(to right, #475569, #1e293b)",
      hoverColor: "#1f2937"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/vaibhavsonar8540/",
      gradient: "linear-gradient(to right, #2563eb, #1e40af)",
      hoverColor: "#1d4ed8"
    }
  ];

  return (
    <section id="contact" className="py-5 px-3" style={{ background: "#ffffff", position: "relative", zIndex: 10 }}>
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="display-4 fw-bold text-dark mb-3">
            Let's <span style={{ background: "linear-gradient(to right, #34d399, #fbbf24)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Connect</span>
          </h2>
          <div className="mx-auto" style={{ width: "96px", height: "4px", background: "linear-gradient(to right, #34d399, #fbbf24)", borderRadius: "999px" }}></div>
          <p className="text-secondary mt-4 lead">
            Ready to bring your ideas to life? Let's create something amazing together!
          </p>
        </div>

        {/* Contact Information */}
        <div className="mb-5">
          <div className="p-4 rounded-4 border" style={{ background: "#f8f9fa", borderColor: "#dee2e6" }}>
            <div className="d-flex align-items-center justify-content-center mb-4">
              <div className="p-3 rounded-3 me-3" style={{ background: "linear-gradient(to right, #34d399, #fbbf24)" }}>
                <MessageCircle size={24} color="#0f172a" />
              </div>
              <h3 className="text-dark fw-bold h3 mb-0">Get In Touch</h3>
            </div>
            <p className="text-center text-dark mb-4">
              I'm always excited about new opportunities and interesting projects. 
              Whether you have questions, want to collaborate, or just say hello, 
              I'd love to hear from you!
            </p>
            <div className="row">
              {contactInfo.map((info) => (
                <div key={info.label} className="col-md-4 mb-4 text-center">
                  <div className="d-inline-block p-3 rounded-3 mb-3" style={{ background: info.gradient, transition: "transform 0.3s" }}>
                    <info.icon size={24} color="#fff" />
                  </div>
                  <p className="text-muted mb-1">{info.label}</p>
                  <a
                    href={info.href}
                    className="fw-bold text-dark text-decoration-none d-block"
                    style={{ transition: "color 0.3s" }}
                    onMouseEnter={e => e.target.style.color = info.hoverColor}
                    onMouseLeave={e => e.target.style.color = "#000"}
                  >
                    {info.value}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Social Links */}
        <div className="row justify-content-center mb-5">
          {socialLinks.map((social) => (
            <div key={social.label} className="col-6 col-md-3 mb-3">
              <a
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="d-block text-center text-white rounded-3 p-4 text-decoration-none"
                style={{
                  background: social.gradient,
                  transition: "transform 0.3s, box-shadow 0.3s"
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = "0 1rem 3rem rgba(0,0,0,0.2)";
                  e.currentTarget.style.transform = "scale(1.05)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = "none";
                  e.currentTarget.style.transform = "scale(1)";
                }}
              >
                <social.icon size={32} className="mb-2" />
                <div className="fw-bold">{social.label}</div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;
