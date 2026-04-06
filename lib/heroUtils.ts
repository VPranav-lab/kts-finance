import { Heart, Car, Home, Briefcase, Plane, Umbrella, Zap, ShieldCheck, Activity, Users } from 'lucide-react';

export interface Service {
    id: string;
    title: string;
    description: string;
    icon: any;
    category: 'Personal' | 'Business' | 'Specialty';
}

export const SERVICES: Service[] = [
    { id: '1', title: 'Life Insurance', description: 'Protect your family\'s future with comprehensive coverage.', icon: Heart, category: 'Personal' },
    { id: '2', title: 'Health Insurance', description: 'Premium medical coverage for you and your loved ones.', icon: Activity, category: 'Personal' },
    { id: '3', title: 'Auto Insurance', description: 'Smart protection for every journey on the road.', icon: Car, category: 'Personal' },
    { id: '4', title: 'Home Insurance', description: 'Safeguard your most valuable asset against the unexpected.', icon: Home, category: 'Personal' },
    { id: '5', title: 'Business Liability', description: 'Professional protection for your growing enterprise.', icon: Briefcase, category: 'Business' },
    { id: '6', title: 'Travel Protection', description: 'Worry-free adventures with global assistance.', icon: Plane, category: 'Specialty' },
    { id: '7', title: 'Cyber Security', description: 'Advanced digital asset protection for modern businesses.', icon: ShieldCheck, category: 'Business' },
    { id: '8', title: 'Pet Insurance', description: 'Because your furry friends deserve the best care too.', icon: Zap, category: 'Personal' },
    { id: '9', title: 'Workers Comp', description: 'Essential coverage for your valued employees.', icon: Users, category: 'Business' },
    { id: '10', title: 'Umbrella Policy', description: 'Extra layer of protection for high-value assets.', icon: Umbrella, category: 'Specialty' },
    { id: '11', title: 'Marine Insurance', description: 'Comprehensive coverage for maritime risks and assets.', icon: Plane, category: 'Specialty' },
    { id: '12', title: 'Agriculture', description: 'Protect your farm and crops from environmental risks.', icon: Home, category: 'Business' },
    { id: '13', title: 'Event Insurance', description: 'Cancelation and liability for your special occasions.', icon: Zap, category: 'Specialty' },
    { id: '14', title: 'Financial Risk', description: 'Mitigate market volatility with smart forecasting.', icon: Heart, category: 'Business' },
];