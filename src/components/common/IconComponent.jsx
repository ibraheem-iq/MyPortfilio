import React from 'react';
import { 
  Monitor, Smartphone, Code, Github, Linkedin, Globe, Mail, Phone, MapPin,
  Calendar, Database, Zap, Award, BookOpen, MessageCircle, ArrowUp,
  Sun, Moon, Star, Download, ChevronDown, ExternalLink
} from 'lucide-react';

const IconComponent = ({ name, ...props }) => {
  const icons = {
    Monitor, Smartphone, Code, Github, Linkedin, Globe, Mail, Phone, MapPin,
    Calendar, Database, Zap, Award, BookOpen, MessageCircle, ArrowUp,
    Sun, Moon, Star, Download, ChevronDown, ExternalLink, 
  };
  
  const Icon = icons[name];
  return Icon ? <Icon {...props} /> : null;
};

export default IconComponent;