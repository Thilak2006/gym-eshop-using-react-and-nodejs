import { ArrowRight, Truck, Shield, Clock, Percent } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-orange-500/20 px-4 py-1.5 text-sm text-orange-400">
              <Percent className="h-4 w-4" />
              <span>Up to 40% Off - Limited Time</span>
            </div>
            <h1 className="mb-6 text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Build Your
              <span className="block bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
                Dream Gym
              </span>
            </h1>
            <p className="mb-8 text-lg text-gray-300 sm:text-xl">
              Premium fitness equipment for home & commercial gyms. Quality gear trusted by athletes worldwide.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center lg:justify-start">
              <a
                href="#products"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-orange-500 to-red-500 px-8 py-4 text-lg font-semibold text-white shadow-lg shadow-orange-500/30 transition-all hover:shadow-orange-500/50 hover:scale-105"
              >
                Shop Now
                <ArrowRight className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="absolute -inset-4 rounded-3xl bg-gradient-to-r from-orange-500/20 to-red-500/20 blur-3xl" />
            <img
              src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&h=600&fit=crop"
              alt="Gym Equipment"
              className="relative rounded-3xl shadow-2xl"
            />
            <div className="absolute -bottom-6 -left-6 rounded-2xl bg-white p-4 shadow-xl">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
                  <Shield className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <p className="font-bold text-gray-900">Lifetime Warranty</p>
                  <p className="text-sm text-gray-500">On all products</p>
                </div>
              </div>
            </div>
            <div className="absolute -right-6 -top-6 rounded-2xl bg-white p-4 shadow-xl">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-orange-100">
                  <Truck className="h-6 w-6 text-orange-600" />
                </div>
                <div>
                  <p className="font-bold text-gray-900">Free Shipping</p>
                  <p className="text-sm text-gray-500">Orders over ₹3000</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Features Bar */}
        <div className="mt-16 grid gap-6 rounded-2xl bg-white/5 p-6 backdrop-blur-sm sm:grid-cols-2 lg:grid-cols-4">
          {[
            { icon: Truck, title: 'Free Shipping', desc: 'On orders over ₹3000' },
            { icon: Shield, title: 'Secure Payment', desc: '100% protected' },
            { icon: Clock, title: '24/7 Support', desc: 'Always here for you' },
            { icon: Percent, title: 'Best Prices', desc: 'Guaranteed lowest' },
          ].map((feature, i) => (
            <div key={i} className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-orange-500/20">
                <feature.icon className="h-6 w-6 text-orange-400" />
              </div>
              <div>
                <p className="font-semibold text-white">{feature.title}</p>
                <p className="text-sm text-gray-400">{feature.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
