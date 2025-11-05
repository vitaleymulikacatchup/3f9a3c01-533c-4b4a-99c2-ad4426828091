"use client"

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import HeroBillboardCorners from '@/components/sections/hero/HeroBillboardCorners';
import TextSplitAbout from '@/components/sections/about/TextSplitAbout';
import FeatureCardOne from '@/components/sections/feature/FeatureCardOne';
import PricingCardThree from '@/components/sections/pricing/PricingCardThree';
import MetricCardTwo from '@/components/sections/metrics/MetricCardTwo';
import TeamCardTwo from '@/components/sections/team/TeamCardTwo';
import TestimonialCardOne from '@/components/sections/testimonial/TestimonialCardOne';
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FooterSocial from '@/components/sections/footer/FooterSocial';
import { DollarSign, Globe, Linkedin, Mail, MessageCircle, Rocket, Star, TrendingUp, Users, Youtube, Zap } from "lucide-react";

export default function Home() {
  return (
    <ThemeProvider
      defaultButtonVariant="hover-magnetic"
      defaultTextAnimation="background-highlight"
      borderRadius="pill"
      contentWidth="small"
      sizing="medium"
      background="plain"
      cardStyle="solid-bordered"
      primaryButtonStyle="shadow"
      secondaryButtonStyle="radial-glow"
      showBlurBottom={true}
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingInline
          navItems={[
            { name: "About", id: "about" },
            { name: "Missions", id: "feature" },
            { name: "Team", id: "team" },
            { name: "Contact", id: "contact" }
          ]}
          brandName="SpaceX"
          button={{
            text: "Launch",
            href: "contact"
          }}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroBillboardCorners
          title="Making Life Multiplanetary"
          description="SpaceX designs, manufactures and launches advanced rockets and spacecraft. Our ultimate goal is to make life multiplanetary."
          tag="Space Exploration"
          tagIcon={Rocket}
          mediaItems={[
            {
              imageSrc: "https://images.pexels.com/photos/586103/pexels-photo-586103.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "SpaceX Falcon Heavy rocket"
            },
            {
              imageSrc: "https://images.pexels.com/photos/586056/pexels-photo-586056.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Starlink satellite constellation"
            },
            {
              imageSrc: "https://images.pexels.com/photos/8474497/pexels-photo-8474497.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Mars exploration mission"
            },
            {
              imageSrc: "https://images.pexels.com/photos/60130/pexels-photo-60130.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "SpaceX Dragon spacecraft"
            }
          ]}
          buttons={[
            {
              text: "View Missions",
              href: "feature"
            },
            {
              text: "Join Us",
              href: "contact"
            }
          ]}
        />
      </div>

      <div id="about" data-section="about">
        <TextSplitAbout
          title="Our Mission"
          description={[
            "Founded in 2002, SpaceX was created to revolutionize space technology with the ultimate goal of enabling people to live on other planets.",
            "We develop and manufacture the world's most advanced rockets and spacecraft, from the Falcon 9 to the Dragon spacecraft and Starlink satellites."
          ]}
          showBorder={true}
          buttons={[
            {
              text: "Learn More",
              href: "https://www.spacex.com/about"
            }
          ]}
        />
      </div>

      <div id="feature" data-section="feature">
        <FeatureCardOne
          title="Our Capabilities"
          description="From launching satellites to crewed missions, SpaceX is leading the future of space exploration"
          tag="Missions"
          tagIcon={Zap}
          features={[
            {
              title: "Falcon 9",
              description: "The world's first orbital class reusable rocket. Designed from the ground up for maximum reliability.",
              imageSrc: "https://images.pexels.com/photos/586103/pexels-photo-586103.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Falcon 9 rocket"
            },
            {
              title: "Starlink",
              description: "Global broadband internet constellation providing high-speed, low-latency connectivity anywhere on Earth.",
              imageSrc: "https://images.pexels.com/photos/586056/pexels-photo-586056.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Starlink satellites"
            },
            {
              title: "Mars Mission",
              description: "Developing the technologies needed to enable human exploration and settlement of Mars.",
              imageSrc: "https://images.pexels.com/photos/8474497/pexels-photo-8474497.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Mars exploration concept"
            }
          ]}
        />
      </div>

      <div id="pricing" data-section="pricing">
        <PricingCardThree
          title="Launch Services"
          description="Reliable and cost-effective launch solutions for your mission requirements"
          tag="Services"
          tagIcon={DollarSign}
          plans={[
            {
              id: "small-sat",
              price: "$2.9M",
              name: "Small Satellite",
              buttons: [
                {
                  text: "Get Quote",
                  href: "contact"
                },
                {
                  text: "Learn More",
                  href: "https://www.spacex.com/rideshare"
                }
              ],
              features: [
                "Up to 200kg payload",
                "Sun-synchronous orbit",
                "Rideshare mission",
                "Mission insurance included"
              ]
            },
            {
              id: "dedicated",
              badge: "Most Popular",
              badgeIcon: Star,
              price: "$67M",
              name: "Dedicated Launch",
              buttons: [
                {
                  text: "Book Launch",
                  href: "contact"
                },
                {
                  text: "Mission Planning",
                  href: "https://www.spacex.com/mission"
                }
              ],
              features: [
                "Up to 22,800kg to LEO",
                "Dedicated mission control",
                "Custom mission profile",
                "Recovery operations"
              ]
            }
          ]}
        />
      </div>

      <div id="metrics" data-section="metrics">
        <MetricCardTwo
          title="Mission Achievements"
          description="Proven track record of successful missions and technological breakthroughs"
          tag="Stats"
          tagIcon={TrendingUp}
          metrics={[
            {
              id: "1",
              value: "200+",
              description: "Successful Launches"
            },
            {
              id: "2",
              value: "4,000+",
              description: "Starlink Satellites Deployed"
            },
            {
              id: "3",
              value: "99.5%",
              description: "Mission Success Rate"
            },
            {
              id: "4",
              value: "12",
              description: "Dragon Missions to ISS"
            }
          ]}
        />
      </div>

      <div id="team" data-section="team">
        <TeamCardTwo
          title="Leadership Team"
          description="Meet the visionaries driving humanity's expansion to the stars"
          tag="Team"
          tagIcon={Users}
          members={[
            {
              id: "1",
              name: "Elon Musk",
              role: "CEO & CTO",
              description: "Founder and Chief Engineer at SpaceX. Leading the development of next-generation space technologies.",
              imageSrc: "https://images.pexels.com/photos/6894103/pexels-photo-6894103.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              socialLinks: [
                {
                  icon: Globe,
                  url: "https://twitter.com/elonmusk"
                },
                {
                  icon: Linkedin,
                  url: "https://linkedin.com"
                }
              ]
            },
            {
              id: "2",
              name: "Gwynne Shotwell",
              role: "President & COO",
              description: "Responsible for day-to-day operations and managing all customer and strategic relations.",
              imageSrc: "https://images.pexels.com/photos/5255414/pexels-photo-5255414.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              socialLinks: [
                {
                  icon: Linkedin,
                  url: "https://linkedin.com"
                }
              ]
            },
            {
              id: "3",
              name: "Tom Mueller",
              role: "Propulsion CTO",
              description: "Leading propulsion technology development for Merlin, Raptor, and future engine systems.",
              imageSrc: "https://images.pexels.com/photos/7169839/pexels-photo-7169839.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              socialLinks: [
                {
                  icon: Globe,
                  url: "https://spacex.com"
                }
              ]
            }
          ]}
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardOne
          title="Partner Success Stories"
          description="Trusted by leading space agencies and commercial partners worldwide"
          tag="Testimonials"
          tagIcon={MessageCircle}
          testimonials={[
            {
              id: "1",
              name: "Bill Nelson",
              role: "Administrator",
              company: "NASA",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/5255420/pexels-photo-5255420.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
            },
            {
              id: "2",
              name: "Jim Chilton",
              role: "VP Space & Launch",
              company: "Boeing",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/7971754/pexels-photo-7971754.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
            },
            {
              id: "3",
              name: "Rick Ambrose",
              role: "EVP Space",
              company: "Lockheed Martin",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/3772616/pexels-photo-3772616.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
            },
            {
              id: "4",
              name: "Josef Aschbacher",
              role: "Director General",
              company: "European Space Agency",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/5255420/pexels-photo-5255420.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
            }
          ]}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactSplit
          tag="Contact"
          title="Ready for Launch?"
          description="Get in touch with our team to discuss your mission requirements and launch opportunities."
          tagIcon={Mail}
          inputPlaceholder="Enter your email"
          buttonText="Connect"
          termsText="By submitting you agree to our mission guidelines and privacy policy."
          imageSrc="https://images.pexels.com/photos/586059/pexels-photo-586059.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          imageAlt="SpaceX mission control center"
          mediaPosition="right"
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterSocial
          logoText="SpaceX"
          copyrightText="© 2024 Space Exploration Technologies Corp."
          columns={[
            {
              title: "Company",
              items: [
                {
                  label: "About",
                  href: "about"
                },
                {
                  label: "Careers",
                  href: "https://www.spacex.com/careers"
                },
                {
                  label: "News",
                  href: "https://www.spacex.com/news"
                }
              ]
            },
            {
              title: "Missions",
              items: [
                {
                  label: "Falcon 9",
                  href: "https://www.spacex.com/falcon9"
                },
                {
                  label: "Falcon Heavy",
                  href: "https://www.spacex.com/falconheavy"
                },
                {
                  label: "Dragon",
                  href: "https://www.spacex.com/dragon"
                },
                {
                  label: "Starship",
                  href: "https://www.spacex.com/starship"
                }
              ]
            },
            {
              title: "Services",
              items: [
                {
                  label: "Launch Services",
                  href: "pricing"
                },
                {
                  label: "Starlink",
                  href: "https://www.starlink.com"
                },
                {
                  label: "Rideshare",
                  href: "https://www.spacex.com/rideshare"
                }
              ]
            }
          ]}
          socialLinks={[
            {
              icon: Globe,
              href: "https://www.spacex.com",
              ariaLabel: "SpaceX Website"
            },
            {
              icon: Youtube,
              href: "https://youtube.com/spacex",
              ariaLabel: "SpaceX YouTube"
            },
            {
              icon: Linkedin,
              href: "https://linkedin.com/company/spacex",
              ariaLabel: "SpaceX LinkedIn"
            }
          ]}
        />
      </div>
    </ThemeProvider>
  );
}