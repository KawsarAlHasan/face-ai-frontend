import { Scan, Sparkles, Feather, Crown, Droplet, Moon, Pipette, Image } from 'lucide-react';

const statsCards = [
    {
        icon: Scan,
        number: '12',
        title: 'Total Scans',
        subtitle: '+3 this month',
        gradient: 'from-purple-500 to-pink-500',
    },
    {
        icon: Sparkles,
        number: '8.4',
        title: 'Latest Score',
        subtitle: '+0.5 improvement',
        gradient: 'from-pink-500 to-purple-500',
    },
    {
        icon: Feather,
        number: '8.5/10',
        title: 'Symmetry',
        subtitle: '+3 this month',
        gradient: 'from-purple-500 to-pink-500',
    },
    {
        icon: Crown,
        number: '0',
        title: 'Free',
        subtitle: 'Current Plan',
        gradient: 'from-[#8E51FF] to-[#AD46FF]',
    },
];

const recentAnalysis = [
    { score: '8.2', date: 'Nov 15, 2024', finalScore: '8.5/10', improvement: '+0.5' },
    { score: '8.2', date: 'Nov 15, 2024', finalScore: '8.0/10', improvement: '+0.5' },
    { score: '8.2', date: 'Nov 15, 2024', finalScore: '8.0/10', improvement: '+0.5' },
];

const recommendations = [
    {
        icon: Droplet,
        title: 'Hydration',
        msg: 'Drink more water for better skin',
        gradient: 'from-blue-500 to-cyan-500',
    },
    {
        icon: Moon,
        title: 'Sleep',
        msg: 'Aim for 7-8 hours nightly',
        gradient: 'from-amber-500 to-yellow-500',
    },
    {
        icon: Pipette,
        title: 'Skincare',
        msg: 'Use moisturizer daily',
        gradient: 'from-pink-500 to-rose-500',
    },
];

const actionCards = [
    {
        title: "Upgrade to Premium",
        description: "Unlock all advanced features instantly.",
        buttonText: "Continue",
        icon: <Sparkles className="w-5 h-5" />,
    },
    {
        title: "Start New Analysis",
        description: "Upload a selfie to get instant AI-powered insights",
        buttonText: "Upload Photo",
        icon: <Image className="w-5 h-5" />,
    },
];
export { statsCards, recentAnalysis, recommendations, actionCards };