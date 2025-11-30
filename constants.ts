import { Project, Experience, SocialLink } from './types';

export const PROFILE = {
  name: "Muhammad Afaq Saeed",
  title: "AI Engineer • Computer Vision • Robotics • 3D Reconstruction",
  about: [
    "I am an AI engineer and computer vision researcher pursuing a Master's in Artificial Intelligence at FAU Erlangen with a minor in robotics. My work spans multimodal 3D reconstruction, NeRF-based modeling, stereo vision, mobile mapping, and generative AI for LiDAR simulation. I have over 2.5 years of industrial experience in visual perception, autonomous driving–related CV pipelines, and embedded robotics systems.",
    "My journey led me through mechatronics, robotics competitions, pavement inspection startups, and eventually research roles in Germany at Fraunhofer IIS, NavVis, and Volkswagen. I enjoy building systems where geometry, learning, and physical sensing meet."
  ]
};

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'LiDAR Dynamic Object Removal',
    description: '10 ECTS research project building algorithms to detect and remove dynamic objects from LiDAR scans for autonomous driving applications.',
  },
  {
    id: '2',
    title: 'Vision & Audio-Based 3D Room Reconstruction',
    description: 'NeRF and CRNN-based multimodal 3D reconstruction pipeline combining multi-view images and audio cues to infer room geometry.',
  },
  {
    id: '3',
    title: 'Monocular Road Surface Assessment',
    description: 'Developed a computer vision pipeline for pavement quality assessment using only RGB camera input for RoadGauge AI.',
  },
  {
    id: '4',
    title: 'Stereo-Based Pavement Reconstruction',
    description: 'Designed PatchMatch Stereo pipelines for high-resolution 3D reconstruction deployed on Raspberry Pi for road inspection tasks.',
  },
  {
    id: '5',
    title: 'Traffic Sign Segmentation',
    description: 'Trained and optimized semantic segmentation models for traffic sign detection and road-scene understanding.',
  },
  {
    id: '6',
    title: 'Generative AI for LiDAR Point Clouds',
    description: 'Generated synthetic LiDAR point clouds from RGB images using generative models for sensor simulation and dataset augmentation.',
  },
  {
    id: '7',
    title: '3D Reconstruction From Stereo Vision',
    description: 'Implemented multi-view stereo, SfM, and point cloud registration pipelines for visual mapping and reconstruction.',
  },
  {
    id: '8',
    title: 'Automated Marker Detection for Mobile Mapping',
    description: 'Built detection algorithms for reference markers in images and point clouds to automate large-scale mapping workflows.',
  },
  {
    id: '9',
    title: 'Throwable Carbon-Fiber Robot',
    description: 'Designed a carbon-fiber robot capable of surviving 10-meter drops, focusing on structural robustness and embedded sensing.',
  },
  {
    id: '10',
    title: 'Fruit-Picking Robot',
    description: 'Designed a mobile robotic system using CAD and embedded control for autonomous fruit picking tasks.',
  },
  {
    id: '11',
    title: 'Road Asset 3D Positioning with GPS Scaling',
    description: 'Developed a scale estimation scheme integrating GPS with vision-based SfM reconstructions for accurate geo-localization.',
  },
  {
    id: '12',
    title: 'Dataset Labeling Systems',
    description: 'Managed and designed labeling workflows for a team of 10 annotators to support CV model development.',
  }
];

export const EXPERIENCE: Experience[] = [
  {
    id: '1',
    role: 'Working Student – Automated Mobile Mapping',
    company: 'NavVis',
    period: 'Dec 2024 – Apr 2025',
    description: 'Implemented algorithms for automated marker detection in images and laser scans, evaluated 3D measurement accuracy, conducted test mappings, and documented system-level test scenarios.',
  },
  {
    id: '2',
    role: 'AI Research Assistant',
    company: 'Fraunhofer IIS',
    period: 'Dec 2023 – Present',
    description: 'Worked on multimodal 3D room geometry inference using visual and audio data. Trained NeRF models for multi-view 3D reconstruction and CRNN models for audio-based spatial inference.',
  },
  {
    id: '3',
    role: 'Lead Computer Vision Engineer',
    company: 'RoadGauge AI / Strada Imaging',
    period: '2022 – 2023',
    description: 'Led a team of 6 in developing visual perception algorithms for pavement inspection. Built a complete CV pipeline, stereo-based 3D reconstruction system, and a GPS-based scale estimation scheme for accurate asset positioning. Managed a dataset labeling team of 10.',
  },
  {
    id: '4',
    role: 'Computer Vision / ML Engineer',
    company: 'Strada Imaging',
    period: '2021',
    description: 'Trained semantic segmentation models for road inspection using DeepLabV3. Developed stereo-based 3D reconstruction pipelines and object tracking & counting algorithms.',
  }
];

export const SOCIALS: SocialLink[] = [
  { label: 'Email', url: 'mailto:your.email@domain.com' },
  { label: 'LinkedIn', url: 'https://linkedin.com/in/afaq' },
  { label: 'GitHub', url: 'https://github.com/afaq' },
  { label: 'YouTube Portfolio', url: 'https://www.youtube.com/channel/UCUPzSXCskafKOlKFYPx_x0g' },
  { label: 'RoadGauge Project', url: 'https://roadgauge.ai/news/portfolio/road-gauge-ai/' },
];

// System prompt for the Gemini Bot
export const SYSTEM_INSTRUCTION = `
You are an AI Assistant representing Muhammad Afaq Saeed. You are helpful, professional, and knowledgeable about his specific experience.
Use the following context to answer questions:

Name: ${PROFILE.name}
Title: ${PROFILE.title}
About: ${PROFILE.about.join(' ')}

Experience:
${EXPERIENCE.map(e => `- ${e.role} at ${e.company} (${e.period}): ${e.description}`).join('\n')}

Projects:
${PROJECTS.map(p => `- ${p.title}: ${p.description}`).join('\n')}

If asked about something not in this list, politely explain you are an AI focused on Afaq's professional background and don't have that information. Keep answers concise and enthusiastic.
`;
