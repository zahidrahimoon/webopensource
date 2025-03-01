"use client";

import { FC, useEffect, useState } from "react";
import { motion, Variants } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import axios from "axios";

// Define the shape of a service
interface Service {
  id: number;
  title: string;
  description: string;
  icon: string; // API should return an icon name
}

// API Endpoint
const API_URL = `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/service`;

const ServicesSection: FC = () => {
  const [services, setServices] = useState<Service[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await axios.get(API_URL, { withCredentials: true });
        setServices(response.data);
      } catch (err) {
        setError((err as Error).message);
      } finally {
        setLoading(false);
      }
    };

    fetchServices();
  }, []);

  // Framer Motion variants for animations
  const headerVariants: Variants = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
  };

  const cardVariants: Variants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
  };

  // Mapping icons from API response
  const iconMapping: { [key: string]: React.ElementType } = {
    Globe: require("lucide-react").Globe,
    Cloud: require("lucide-react").Cloud,
    Shield: require("lucide-react").Shield,
    Smartphone: require("lucide-react").Smartphone,
    Gauge: require("lucide-react").Gauge,
    Share2: require("lucide-react").Share2,
    Database: require("lucide-react").Database,
    Network: require("lucide-react").Network,
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={headerVariants}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">My SERVICES</h2>
        </motion.div>

        {/* Loading & Error States */}
        {loading && <p className="text-center">Loading services...</p>}
        {error && <p className="text-center text-red-500">{error}</p>}

        {/* Services Cards Grid */}
        {!loading && !error && (
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={{
              animate: { transition: { staggerChildren: 0.1 } },
            }}
          >
            {services.map((service) => {
              const Icon = iconMapping[service.icon] || require("lucide-react").Globe; // Default icon
              return (
                <motion.div
                  key={service.id}
                  variants={cardVariants}
                  transition={{ duration: 0.5 }}
                >
                  <Card className="h-full hover:shadow-lg transition-shadow">
                    <CardHeader className="text-center pb-4">
                      <div className="mx-auto mb-4 p-3 rounded-full bg-purple-50">
                        <Icon className="w-8 h-8 text-purple-600" />
                      </div>
                      <CardTitle className="text-xl font-semibold">
                        {service.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 text-center">
                        {service.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default ServicesSection;
