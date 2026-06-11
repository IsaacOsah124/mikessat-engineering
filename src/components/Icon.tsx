import {
  Shield,
  Briefcase,
  AlertTriangle,
  Award,
  Cpu,
  Users,
  Heart,
  CheckSquare,
  Calendar,
  Smile,
  Clock,
  Zap,
  Tv,
  Satellite,
  Camera,
  ShieldAlert,
  Wind,
  Sliders,
  MonitorPlay,
  Wrench,
  Disc,
  Flame,
  KeyRound,
  Lock,
  Fingerprint,
  Wifi,
  Phone,
  Mail,
  MapPin,
  Clock4,
  CheckCircle2,
  LockKeyhole,
  ExternalLink,
  MessageSquareCode
} from 'lucide-react';

const iconsMap: Record<string, any> = {
  // Core values
  Shield,
  Briefcase,
  AlertTriangle,
  Award,
  Cpu,
  Users,
  Heart,
  
  // Stats
  CheckSquare,
  Calendar,
  Smile,
  Clock,

  // Services
  Zap,
  Tv,
  Satellite,
  Camera,
  ShieldAlert,
  Wind,
  Sliders,
  MonitorPlay,
  Wrench,
  Disc,
  Flame,
  KeyRound,
  Lock,
  Fingerprint,
  Wifi,

  // Contact
  Phone,
  Mail,
  MapPin,
  Clock4,
  CheckCircle2,
  LockKeyhole,
  ExternalLink,
  MessageSquareCode
};

interface IconProps {
  name: string;
  className?: string;
  size?: number;
}

export default function Icon({ name, className = '', size = 24 }: IconProps) {
  const IconComponent = iconsMap[name] || Shield;
  return <IconComponent className={className} size={size} />;
}
