import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram, FaFacebook, FaYoutube, FaReact, FaNodeJs, FaPython, FaJava, FaHtml5, FaCss3Alt, FaGitAlt, FaDocker, FaAws, FaApple, FaAndroid, FaPhoneAlt, FaCloud } from 'react-icons/fa';
import {
  SiJavascript,
  SiTypescript,
  SiMongodb,
  SiPostgresql,
  SiMysql,
  SiRedis,
  SiGraphql,
  SiNextdotjs,
  SiVuedotjs,
  SiAngular,
  SiExpress,
  SiDjango,
  SiFlask,
  SiSpring,
  SiKubernetes,
  SiTailwindcss,
  SiBootstrap,
  SiSass,
  SiCypress,
  SiSwift,
  SiCplusplus,
  SiRubyonrails,
  SiTerraform,
  SiUnity,
  SiIos,
  SiAndroid,
  SiGmail,
  SiAwslambda,
  SiRuby,
  SiLeetcode
} from 'react-icons/si';
import { PiFileCSharpLight } from 'react-icons/pi';
import { TbApi } from "react-icons/tb";

const iconMap = {
  // Social Media
  github: FaGithub,
  linkedin: FaLinkedin,
  twitter: FaTwitter,
  instagram: FaInstagram,
  facebook: FaFacebook,
  youtube: FaYoutube,
  // Languages
  'c#': PiFileCSharpLight,
  csharp: PiFileCSharpLight,
  swiftui: SiSwift,
  swift: SiSwift,
  'c/c++': SiCplusplus,
  cplusplus: SiCplusplus,
  python: FaPython,
  java: FaJava,
  rubyonrails: SiRubyonrails,
  rails: SiRubyonrails,
  'objective-c': SiSwift,
  html: FaHtml5,
  html5: FaHtml5,
  sql: SiPostgresql,
  // Frontend
  react: FaReact,
  nextjs: SiNextdotjs,
  javascript: SiJavascript,
  typescript: SiTypescript,
  css: FaCss3Alt,
  css3: FaCss3Alt,
  scss: SiSass,
  tailwind: SiTailwindcss,
  // Backend & APIs
  nodejs: FaNodeJs,
  'node.js': FaNodeJs,
  springboot: SiSpring,
  restapis: TbApi,
  microservices: SiGraphql,
  awslambda: SiAwslambda,
  ruby: SiRuby,
  // Cloud
  aws: FaAws,
  awsec2: FaAws,
  awss3: FaCloud,
  terraform: SiTerraform,
  // Databases
  postgresql: SiPostgresql,
  redis: SiRedis,
  mysql: SiMysql,
  iclouddb: FaApple,
  // Tools
  unity: SiUnity,
  docker: FaDocker,
  'ci/cd': FaGitAlt,
  git: FaGitAlt,
  perforce: FaGitAlt,
  // Platforms
  ios: SiIos,
  applearcade: FaApple,
  applegamekit: FaApple,
  android: FaAndroid,
  tizenos: SiAndroid,
  // Legacy mappings
  cypress: SiCypress,
  mongodb: SiMongodb,
  vuejs: SiVuedotjs,
  angular: SiAngular,
  express: SiExpress,
  django: SiDjango,
  flask: SiFlask,
  spring: SiSpring,
  kubernetes: SiKubernetes,
  bootstrap: SiBootstrap,
  phone: FaPhoneAlt,
  email: SiGmail,
  leetcode: SiLeetcode
};

const Icon = ({ name, size = 24, ...props }) => {
  // Remove .svg extension and normalize name
  const normalizedName = name?.replaceAll(' ', '').toLowerCase();
  const IconComponent = iconMap[normalizedName];
  return IconComponent ? <IconComponent size={size} {...props} /> : null;
};

export default Icon;