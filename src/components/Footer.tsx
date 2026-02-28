import { Dumbbell, Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin } from 'lucide-react';

export function Footer() {
  return (
    <footer id="about" className="bg-gray-900 text-gray-300">
      {/* Newsletter */}
      <div className="bg-gradient-to-r from-orange-500 to-red-500">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
            <div>
              <h3 className="text-2xl font-bold text-white">Subscribe to our Newsletter</h3>
              <p className="text-white/80">Get exclusive deals and fitness tips delivered to your inbox!</p>
            </div>
            <form className="flex w-full max-w-md gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 rounded-full px-6 py-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
              />
              <button
                type="submit"
                className="rounded-full bg-gray-900 px-6 py-3 font-semibold text-white transition-transform hover:scale-105"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <div className="mb-4">
  <div className="flex flex-col leading-tight cursor-pointer">
    <h1 className="text-2xl font-extrabold tracking-wide bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
      REPIFY
    </h1>
    <p className="text-xs uppercase tracking-wider text-gray-500">
      Gym Shop
    </p>
  </div>
</div>
            <p className="mb-6 text-sm text-gray-400">
              Premium fitness equipment for home & commercial gyms. Quality gear trusted by athletes worldwide since 2006.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-4 text-lg font-semibold text-white">Quick Links</h4>
            <ul className="space-y-3">
              {['Home', 'Products', 'Deals', 'About Us', 'Contact'].map((link) => (
                <li key={link}>
                  <a href="#" className="text-sm text-gray-400 hover:text-orange-400 transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="mb-4 text-lg font-semibold text-white">Categories</h4>
            <ul className="space-y-3">
              {['Weights & Dumbbells', 'Cardio Equipment', 'Strength Machines', 'Accessories', 'Supplements', 'Apparel'].map((category) => (
                <li key={category}>
                  <a href="#" className="text-sm text-gray-400 hover:text-orange-400 transition-colors">
                    {category}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-4 text-lg font-semibold text-white">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 shrink-0 text-orange-500" />
                <span className="text-sm text-gray-400">
                  193 Fitness Street<br />
                  Dubai kuruku sandhu, Dubai
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-orange-500" />
                <a href="tel:+919876543210" className="text-sm text-gray-400 hover:text-orange-400 transition-colors">
                  +91 987-654-3210
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-orange-500" />
                <a href="mailto:info@powerfit.com" className="text-sm text-gray-400 hover:text-orange-400 transition-colors">
                  info@repify.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-gray-800 pt-8 md:flex-row">
          <p className="text-sm text-gray-500">
            © 2026 Repify Gym Shop. All rights reserved.
          </p>
          <div className="flex gap-6">
            {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map((link) => (
              <a key={link} href="#" className="text-sm text-gray-500 hover:text-gray-300 transition-colors">
                {link}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
