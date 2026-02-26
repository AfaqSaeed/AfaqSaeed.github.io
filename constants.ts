import { Project, Experience, SocialLink, Thesis } from './types';

export const PROFILE = {
  name: "Muhammad Afaq Saeed",
  title: "AI Engineer • Computer Vision • Robotics • 3D Reconstruction",
  about: [
    "I am an AI engineer and computer vision researcher pursuing a Master's in Artificial Intelligence at FAU Erlangen with a minor in robotics. My work spans multimodal 3D reconstruction, NeRF-based modeling, stereo vision, mobile mapping, and generative AI for LiDAR simulation. I recently completed my Master's Thesis at Volkswagen AG, focusing on perception-centric evaluation of generative multi-view data for autonomous driving.",
    "My journey led me through mechatronics, robotics competitions, pavement inspection startups, and eventually research roles in Germany at Fraunhofer IIS, NavVis, and Volkswagen. I enjoy building systems where geometry, learning, and physical sensing meet."
  ]
};

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'LiDAR Dynamic Object Removal',
    description: 'Research project building algorithms to detect and remove dynamic objects from LiDAR scans for autonomous driving applications.',
    technologies: ['C++', 'PCL', 'ROS', 'Python'],
    imageUrl: 'https://picsum.photos/seed/lidar/800/450',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
  },
  {
    id: '2',
    title: 'Vision & Audio-Based 3D Room Reconstruction',
    description: 'NeRF and CRNN-based multimodal 3D reconstruction pipeline combining multi-view images and audio cues to infer room geometry.',
    technologies: ['PyTorch', 'NeRF', 'CRNN', 'Computer Vision'],
    imageUrl: 'https://picsum.photos/seed/nerf/800/450',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
  },
  {
    id: '3',
    title: 'Monocular Road Surface Assessment',
    description: 'Developed a computer vision pipeline for pavement quality assessment using only RGB camera input for RoadGauge AI.',
    technologies: ['Python', 'OpenCV', 'Deep Learning', 'PyTorch'],
    imageUrl: 'https://picsum.photos/seed/road/800/450',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
  },
  {
    id: '4',
    title: 'Stereo-Based Pavement Reconstruction',
    description: 'Designed PatchMatch Stereo pipelines for high-resolution 3D reconstruction deployed on Raspberry Pi for road inspection tasks.',
    technologies: ['C++', 'OpenCV', 'Raspberry Pi', 'Stereo Vision'],
    imageUrl: 'https://picsum.photos/seed/stereo/800/450',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
  },
  {
    id: '5',
    title: 'Traffic Sign Segmentation',
    description: 'Trained and optimized semantic segmentation models for traffic sign detection and road-scene understanding.',
    technologies: ['TensorFlow', 'Keras', 'Segmentation', 'Python'],
    imageUrl: 'https://picsum.photos/seed/traffic/800/450',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
  },
  {
    id: '6',
    title: 'Generative AI for LiDAR Point Clouds',
    description: 'Generated synthetic LiDAR point clouds from RGB images using generative models for sensor simulation and dataset augmentation.',
    technologies: ['GANs', 'LiDAR', 'Python', 'PyTorch'],
    imageUrl: 'https://picsum.photos/seed/genai/800/450',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
  },
  {
    id: '7',
    title: '3D Reconstruction From Stereo Vision',
    description: 'Implemented multi-view stereo, SfM, and point cloud registration pipelines for visual mapping and reconstruction.',
    technologies: ['SfM', 'MVS', 'Open3D', 'Python'],
    imageUrl: 'https://picsum.photos/seed/3drecon/800/450',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
  },
  {
    id: '8',
    title: 'Automated Marker Detection for Mobile Mapping',
    description: 'Built detection algorithms for reference markers in images and point clouds to automate large-scale mapping workflows.',
    technologies: ['OpenCV', 'Point Cloud', 'C++', 'Mapping'],
    imageUrl: 'https://picsum.photos/seed/mapping/800/450',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
  },
  {
    id: '10',
    title: 'Fruit-Picking Robot',
    description: 'Designed a mobile robotic system using CAD and embedded control for autonomous fruit picking tasks.',
    technologies: ['SolidWorks', 'Arduino', 'Robotics', 'Embedded Systems'],
    imageUrl: 'https://picsum.photos/seed/fruit/800/450',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
  },
  {
    id: '11',
    title: 'Road Asset 3D Positioning with GPS Scaling',
    description: 'Developed a scale estimation scheme integrating GPS with vision-based SfM reconstructions for accurate geo-localization.',
    technologies: ['GPS', 'SfM', 'Python', 'Optimization'],
    imageUrl: 'https://picsum.photos/seed/gps/800/450',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
  },
  {
    id: '12',
    title: 'Dataset Labeling Systems',
    description: 'Managed and designed labeling workflows for a team of 10 annotators to support CV model development.',
    technologies: ['Management', 'Data Engineering', 'CVAT', 'LabelImg'],
    imageUrl: 'https://picsum.photos/seed/labeling/800/450',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
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

export const THESES: Thesis[] = [
  {
    id: 'm1',
    type: 'Master',
    title: 'Evaluation of Multi-view Video Quality for Autonomous Driving',
    institution: 'Volkswagen AG',
    period: '2025 - 2026',
    description: 'Developed a perception-centric evaluation framework for AI-generated multi-view camera data, bridging generative AI and real-world autonomous driving perception.',
    logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/6/6d/Volkswagen_logo_2019.svg',
    imageUrl: './MasterThesisPhoto.png',
    keyContributions: [
      'Designed robustness metrics for downstream object detection and segmentation models',
      'Analyzed impact of synthetic multi-camera data on scene understanding performance',
      'Built an evaluation pipeline tailored for training Vision-Language-Action (VLA) models',
      'Investigated how generative data affects ADAS perception reliability'
    ]
  },
  {
    id: 'b1',
    type: 'Bachelor',
    title: 'Design and Development of a Throwable Carbon-Fiber Robot',
    institution: 'University of Engineering and Technology',
    period: '2017 - 2021',
    description: 'Designed and developed a carbon-fiber robot capable of surviving 10-meter drops. Focused on structural robustness, lightweight materials, and embedded sensing for tactical applications.',
    imageUrl: 'https://picsum.photos/seed/throwable-robot/800/450',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ', // Placeholder
    keyContributions: [
      'Designed a carbon-fiber chassis capable of surviving 10-meter drops',
      'Integrated embedded sensing and control systems for autonomous stability',
      'Optimized weight-to-strength ratio using advanced composite materials',
      'Developed a throwable deployment mechanism for rapid field use'
    ]
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

Theses:
${THESES.map(t => `- ${t.type} Thesis: ${t.title} at ${t.institution} (${t.period})`).join('\n')}

Projects:
${PROJECTS.map(p => `- ${p.title}: ${p.description}`).join('\n')}

If asked about something not in this list, politely explain you are an AI focused on Afaq's professional background and don't have that information. Keep answers concise and enthusiastic.
`;
