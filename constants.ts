import { Project, Experience, SocialLink, Thesis } from './types';

export const PROFILE = {
  name: "Muhammad Afaq Saeed",
  title: "AI Engineer | Computer Vision | Robotics | 3D Reconstruction",
  about: [
    "I am an AI Engineer and Computer Vision researcher specialising in perception systems and multimodal data fusion, with a Master's degree in Artificial Intelligence from FAU Erlangen and a minor in robotics. My work focuses on robust scene understanding by integrating visual, geometric and sensor-based representations across images, LiDAR and audio.",
    "My Master's thesis at Volkswagen AG focused on perception-driven evaluation of generative multi-view data for autonomous driving, emphasising semantic consistency, temporal coherence and downstream task reliability.",
    "My background spans mechatronics, competitive robotics and applied computer vision in real-world environments, including roles at Fraunhofer IIS and NavVis. I am particularly interested in perception systems where learning-based methods integrate tightly with physical sensing."
  ]
};

export const PROJECTS: Project[] = [
  {
    id: 'vw-generative-video-evaluation',
    title: 'Perception-Centric Evaluation of Generative Multi-View Video',
    shortDescription: 'Built an evaluation framework for AI-generated multi-camera driving videos, measuring semantic, temporal and cross-view consistency to assess whether synthetic data is reliable for perception and Vision-Language-Action training.',
    overview: 'Generative world models can produce large quantities of synthetic driving video, but visual realism alone does not establish whether the generated data is suitable for autonomous-driving perception. This master\'s thesis at Volkswagen developed a perception-oriented evaluation framework for identifying defects in AI-generated multi-view driving sequences.',
    problem: 'Generated driving videos may appear realistic while containing temporal flicker, inconsistent objects, incorrect camera relationships or semantic defects that can degrade downstream perception models. The project required evaluation methods that went beyond conventional image-quality metrics.',
    myRole: [
      'Designed an evaluation framework for AI-generated multi-view driving video',
      'Evaluated semantic consistency, temporal coherence and cross-view alignment',
      'Investigated the effect of generation defects on downstream perception tasks',
      'Used vision and vision-language representations to analyse generated scenes',
      'Structured the evaluation around the requirements of perception and VLA training data'
    ],
    approach: [
      'Multi-view and temporal video analysis',
      'Semantic feature comparison using modern visual representations',
      'Cross-camera consistency evaluation',
      'Failure-case categorisation and quantitative benchmarking',
      'Perception-oriented analysis of synthetic autonomous-driving data'
    ],
    results: [
      'Produced a structured framework for evaluating defects in generated multi-camera video',
      'Identified failure modes not captured by visual-quality metrics alone',
      'Connected generative-video evaluation with downstream perception and VLA data requirements'
    ],
    technologies: ['PyTorch', 'Generative Video', 'Multi-View Geometry', 'Vision-Language Models', 'CLIP', 'DINO', 'Autonomous Driving'],
    organization: 'Volkswagen Group',
    period: 'May 2025 - Feb 2026',
    imageUrl: '/MasterThesisPhoto.png',
  },
  {
    id: '7',
    title: 'Automated Reference-Marker Localisation for Mobile Mapping',
    shortDescription: 'Developed image- and LiDAR-based reference-marker detection for mobile mapping, validating three approaches across approximately 20 test mappings and achieving 2.5 mm marker-centre localisation error.',
    overview: 'Mobile-mapping workflows use surveyed reference markers to align captured data with external coordinate systems. Manually locating these markers in images and laser scans is time-consuming and limits the scalability of mapping operations. At NavVis, I investigated and implemented methods for automating this process.',
    problem: 'Markers had to be detected under fisheye distortion, changing illumination, partial visibility and noisy point-cloud measurements while preserving the geometric accuracy required by professional mapping workflows.',
    myRole: [
      'Implemented marker-detection pipelines for fisheye images and LiDAR point clouds',
      'Developed image-to-point-cloud association and 3D marker-centre estimation',
      'Designed repeatable test mappings and accuracy-evaluation procedures',
      'Compared three detection approaches and documented their failure modes'
    ],
    approach: [
      'Fisheye camera calibration and image undistortion',
      'Thresholding, morphology, edge detection and quadrilateral filtering',
      'Point-cloud intensity processing, plane extraction and clustering',
      'Open3D and VTK visualisation',
      'ROS 2-based data processing'
    ],
    results: [
      'Evaluated three methods across approximately 20 test mappings',
      'Achieved approximately 2.5 mm marker-centre localisation error',
      'Reached approximately 85% marker detection and localisation rate',
      'Delivered an internal prototype for automated mapping workflows'
    ],
    technologies: ['Python', 'C++', 'OpenCV', 'Open3D', 'ROS 2', 'VTK', 'Point Clouds'],
    organization: 'NavVis',
    period: 'Dec 2024 - Apr 2025',
    imageUrl: '/Marker-Detection .png',
  },
  {
    id: '3',
    title: 'AI-Based Road Surface Inspection from Monocular Video',
    shortDescription: 'Built a monocular road-inspection system for detecting pavement defects and reconstructing road surfaces from RGB imagery, supporting automated assessment across approximately 5,000 km of road data and reducing manual review by up to 90%.',
    overview: 'Developed an end-to-end computer-vision system at RoadGauge AI for assessing road condition using camera data, reducing dependence on expensive specialised inspection hardware.',
    problem: 'Road-condition assessment needed scalable defect detection and surface measurement from ordinary camera data instead of specialised inspection hardware and time-consuming manual review.',
    myRole: [
      'Developed segmentation and detection pipelines for pavement defects',
      'Contributed to road-surface reconstruction and measurement',
      'Designed data collection, annotation, model-training and evaluation workflows',
      'Supported deployment of the inspection system as a customer-facing product',
      'Led perception engineering and coordinated engineering and annotation teams'
    ],
    approach: [
      'Semantic segmentation and object detection',
      'Monocular and stereo computer vision',
      'Structure from Motion and 3D reconstruction',
      'PyTorch, OpenCV, Docker and GCP',
      'CVAT-based annotation and quality control'
    ],
    results: [
      'Supported analysis of approximately 5,000 km of road imagery',
      'Reduced manual review and analysis time by up to 90%',
      'Achieved approximately 80-85% detection IoU for relevant road defects',
      'Contributed to systems used by three major clients'
    ],
    technologies: ['Python', 'OpenCV', 'PyTorch', 'Deep Learning', 'Semantic Segmentation', 'Docker', 'GCP', 'CVAT'],
    organization: 'RoadGauge AI',
    period: '2022 - 2023',
    imageUrl: '/pothole-mesh-graphic.jpg',
    videoUrl: 'https://www.youtube.com/embed/0R81hSBxSmY',
  },
  {
    id: 'audio-visual-event-recognition',
    title: 'Audio-Visual Event Recognition with Open-Vocabulary Vision',
    shortDescription:
      'Built an interpretable multimodal pipeline that uses SSAST to locate sound events, YOLO-World and FastSAM to identify relevant objects, and configurable JSON rules to verify fine-grained kitchen activities from audio and video.',
    overview:
      'Developed a modular audio-visual event-recognition system that first detects a sound event, extracts the corresponding video interval, searches for relevant objects, and combines evidence from both modalities through explicit event recipes. Unlike a fixed end-to-end activity classifier, the system can be extended with new events by defining their audio cue, required objects, and validation conditions.',
    problem:
      'Audio alone can identify a sound without confirming what caused it, while vision alone must search long videos and may confuse visually similar activities. The challenge was to use sound as a temporal cue, open-vocabulary vision as semantic evidence, and explicit cross-modal reasoning to determine whether a fine-grained event actually occurred.',
    myRole: [
      'Designed and implemented the end-to-end audio-visual inference pipeline',
      'Benchmarked PANN, AudioInceptionNeXt, and SSAST for audio-event recognition',
      'Evaluated Grounding DINO, YOLOE, YOLO-World, SAM, and FastSAM-based visual pipelines under local hardware constraints',
      'Implemented audio-guided video-clip extraction and prompted object detection and segmentation',
      'Designed configurable JSON event recipes with required object groups, temporal support thresholds, and proximity constraints',
      'Built evidence visualisation and structured CSV and JSON reporting for detected events',
      'Analysed failure modes including sustained sounds, ambiguous audio events, and frame-to-frame detection fluctuations'
    ],
    approach: [
      'EPIC-SOUNDS audio-event recognition using SSAST',
      'Temporal localisation of candidate events from audio predictions',
      'Audio-guided extraction of relevant video intervals',
      'Open-vocabulary object detection using YOLO-World',
      'Object segmentation using FastSAM',
      'Recipe-based multimodal fusion using required-object and proximity checks',
      'JSON-configurable event definitions for extending the system without retraining',
      'Evidence-video generation and structured event reporting'
    ],
    results: [
      'SSAST achieved the strongest tested audio-recognition result at 0.67 F1, compared with 0.64 for AudioInceptionNeXt',
      'Implemented configurable recipes for chopping cucumber, chopping celery, washing carrot, and washing cucumber',
      'Generated event-level clips, rendered evidence, predictions, reports, and summary files',
      'Demonstrated an interpretable cross-modal reasoning pipeline for distinguishing fine-grained kitchen events',
      'Identified key limitations in sustained-sound localisation and temporal stability of open-vocabulary detections'
    ],
    technologies: [
      'Python',
      'PyTorch',
      'SSAST',
      'EPIC-SOUNDS',
      'YOLO-World',
      'FastSAM',
      'Ultralytics',
      'Audio Event Detection',
      'Open-Vocabulary Detection',
      'Multimodal AI',
      'JSON'
    ],
    organization: 'Independent Project',
    period: '2026',
    imageUrl: '/audio-visual-event-recognition.png',
    githubUrl: 'https://github.com/AfaqSaeed/Audio-Visual-Object-Detection',
  },
  {
    id: '2',
    title: 'Multimodal 3D Room Reconstruction from Vision and Audio',
    shortDescription: 'Developed a multimodal room-reconstruction pipeline combining NeRF-based visual geometry with CRNN-based acoustic inference and evaluated both modalities across seven indoor environments.',
    overview: 'Investigated how visual and acoustic information can be combined to estimate indoor room geometry. The project compared image-based reconstruction with audio-based room-shape inference.',
    problem: 'Vision and audio capture complementary spatial cues, but aligning their outputs requires controlled evaluation across environments and clear analysis of modality-specific failure modes.',
    myRole: [
      'Implemented visual 3D reconstruction using NeRF and photogrammetry',
      'Evaluated CRNN-based acoustic room-geometry inference',
      'Compared and aligned visual and audio-based reconstructions',
      'Designed experiments across multiple indoor environments',
      'Documented modality-specific failure modes and complementary strengths'
    ],
    approach: [
      'Neural Radiance Fields',
      'COLMAP and photogrammetry',
      'CRNN-based acoustic inference',
      'Multimodal alignment and evaluation',
      'Blender-based reference environments',
      'PyTorch and HPC training'
    ],
    results: [
      'Evaluated the pipeline across seven indoor environments',
      'Produced two internal research posters',
      'Compared the strengths and limitations of visual and acoustic reconstruction'
    ],
    technologies: ['PyTorch', 'NeRF', 'CRNN', 'COLMAP', 'Blender', 'Photogrammetry', 'HPC'],
    organization: 'Fraunhofer IIS',
    period: 'Dec 2023 - Nov 2024',
    imageUrl: '/Vision-and-Audio-Based-3D-Reconstrtion.png',
  },
  {
    id: '1',
    title: 'Dynamic Object Removal for LiDAR Mapping',
    shortDescription: 'Benchmarked LiDAR-MOS, Removert and DynaSLAM for removing vehicles and other dynamic objects from mapping data, with LiDAR-MOS reaching approximately 20 scans per second.',
    overview: 'Dynamic objects create ghost structures and inconsistent geometry in maps produced from repeated LiDAR scans. This research project evaluated different methods for identifying and removing dynamic objects from autonomous-driving datasets.',
    problem: 'Mapping pipelines must preserve static scene geometry while filtering moving vehicles and other dynamic objects that create inconsistent point-cloud structure across scans.',
    myRole: [
      'Implemented and evaluated multiple dynamic-object-removal approaches',
      'Processed KITTI Odometry LiDAR and camera data',
      'Compared accuracy, runtime, map quality and failure modes',
      'Visualised and evaluated cleaned point clouds'
    ],
    approach: [
      'LiDAR-MOS',
      'Removert',
      'DynaSLAM',
      'Range-image processing',
      'Semantic segmentation',
      'ROS, C++, Python and point-cloud tools'
    ],
    results: [
      'LiDAR-MOS produced the strongest overall accuracy and runtime',
      'Achieved approximately 51 ms per scan, corresponding to about 20 Hz',
      'Identified differences in how the methods handled parked and moving vehicles'
    ],
    technologies: ['LiDAR-MOS', 'Removert', 'DynaSLAM', 'ROS', 'C++', 'Python', 'Point Clouds'],
    organization: 'FAU Erlangen-Nurnberg',
    imageUrl: '/Dynamic-Object.gif',
  },
  {
    id: '6',
    title: 'Millimetre-Level Pavement Reconstruction with Stereo Vision',
    shortDescription: 'Developed a stereo-vision pipeline using PatchMatch Stereo to reconstruct pavement geometry and measure road-surface deformation at millimetre-level precision.',
    overview: 'Developed a stereo-vision reconstruction workflow for road-surface analysis, using dense matching to recover pavement geometry and support deformation measurement from image data.',
    problem: 'Road-surface inspection requires accurate 3D measurements of subtle pavement deformation while relying on practical camera-based sensing rather than specialised scanning hardware.',
    myRole: [
      'Implemented dense stereo reconstruction for pavement surfaces',
      'Converted stereo outputs into measurable 3D road-surface geometry',
      'Evaluated reconstruction quality for road-deformation analysis'
    ],
    approach: [
      'PatchMatch Stereo',
      'Stereo camera geometry',
      'Dense disparity estimation',
      'Point-cloud reconstruction',
      'Road-surface deformation measurement'
    ],
    results: [
      'Produced a reconstruction workflow for pavement deformation analysis',
      'Demonstrated millimetre-level measurement precision in project evaluations'
    ],
    technologies: ['PatchMatch Stereo', 'Stereo Vision', 'OpenCV', 'Python', '3D Reconstruction', 'Photogrammetry'],
    organization: 'RoadGauge AI / Strada Imaging',
    period: '2021 - 2023',
    videoUrl: 'https://www.youtube.com/embed/PAdlZG9DvmA',
  },
  {
    id: '5',
    title: 'Image-to-LiDAR Generation with Deep Learning',
    shortDescription: 'Trained a generative image-to-LiDAR model to predict point-cloud representations from monocular RGB images, exploring synthetic sensor generation for simulation and dataset augmentation.',
    overview: 'Explored cross-modal sensor generation by training a deep-learning model to infer point-cloud representations from monocular RGB input for simulation and dataset-augmentation research.',
    problem: 'Autonomous-driving datasets can be expensive to collect across sensor modalities, motivating controlled experiments on whether camera imagery can be used to generate useful LiDAR-like representations.',
    myRole: [
      'Prepared paired RGB and LiDAR training data',
      'Trained and evaluated image-to-point-cloud generation models',
      'Analysed generated point-cloud structure and documented limitations'
    ],
    approach: [
      'Deep-learning based cross-modal prediction',
      'Monocular RGB image encoding',
      'Point-cloud representation learning',
      'Synthetic sensor-data generation experiments'
    ],
    results: [
      'Produced synthetic point-cloud representations for exploratory sensor simulation',
      'Documented limitations of image-derived LiDAR generation for dataset augmentation'
    ],
    technologies: ['PyTorch', 'Deep Learning', 'LiDAR', 'RGB Images', 'Generative Models', 'Python'],
    organization: 'FAU Erlangen-Nurnberg',
    imageUrl: '/Lidar-prediction_from_images.png',
  },
  {
    id: '11',
    title: 'Computer Vision Annotation and Quality-Control Systems',
    shortDescription: 'Designed annotation guidelines and quality-control workflows for 10 labelers, managed CVAT-based dataset production and developed custom and SAM-assisted tools for accelerating semantic-segmentation annotation.',
    overview: 'Built and managed data-annotation workflows for production computer-vision systems, covering labelling guidelines, reviewer feedback, dataset quality control and model-assisted pre-annotation.',
    problem: 'Production perception models required consistent segmentation and detection labels across large datasets while reducing repetitive manual work and reviewer rework.',
    myRole: [
      'Created annotation guidelines for segmentation and detection tasks',
      'Coordinated and reviewed the work of 10 labelers',
      'Managed CVAT-based annotation workflows',
      'Corrected labelling inconsistencies and improved dataset quality',
      'Built SALT, a custom semantic-segmentation annotation tool',
      'Developed SAM-assisted pre-annotation workflows'
    ],
    approach: [
      'CVAT workflow design',
      'Dataset review and quality-control procedures',
      'Custom Google Colab-based segmentation labelling',
      'SAM-assisted pre-annotation',
      'Reviewer feedback loops for production datasets'
    ],
    results: [
      'Improved consistency across production datasets',
      'Reduced repetitive manual labelling work',
      'Supported multiple RoadGauge AI perception products'
    ],
    technologies: ['CVAT', 'LabelImg', 'SAM', 'Python', 'Google Colab', 'Data QA', 'Semantic Segmentation'],
    organization: 'RoadGauge AI',
    period: '2022 - 2023',
    imageUrl: '/SALT.png',
    videoUrl: 'https://www.youtube.com/embed/ZJB0agWm0yo',
  },
  {
    id: '10',
    title: 'GPS-Scaled 3D Mapping of Road Assets',
    shortDescription: 'Developed a GPS-assisted scale-estimation and geolocation pipeline that transformed vision-based SfM reconstructions into geographically positioned 3D road-asset maps.',
    overview: 'Developed a scale-estimation scheme integrating GPS with vision-based SfM reconstructions for accurate geolocation of road assets. The public description is intentionally high level because implementation details may be confidential.',
    problem: 'Vision-only SfM reconstructions are scale-ambiguous, which limits their use for geographically positioned road-asset mapping without an external source of scale and location.',
    myRole: [
      'Developed a GPS-assisted scale-estimation workflow',
      'Integrated vision-based SfM reconstructions with geolocation data',
      'Kept project documentation focused on externally shareable system behaviour'
    ],
    approach: [
      'Structure from Motion',
      'GPS-assisted scale estimation',
      'Coordinate transformation',
      '3D road-asset mapping',
      'Optimisation for geolocation consistency'
    ],
    results: [
      'Transformed SfM outputs into geographically positioned 3D road-asset maps',
      'Supported road-asset localisation workflows for inspection products'
    ],
    technologies: ['GPS', 'SfM', 'Python', 'Optimisation', '3D Mapping', 'Geolocation'],
    organization: 'RoadGauge AI / Strada Imaging',
    period: '2021 - 2023',
    imageUrl: '/DeepRoad-V2-modal-1.png',
    videoUrl: 'https://www.youtube.com/embed/u_Y6Bhch9U8',
  },
  {
    id: '4',
    title: 'Traffic Sign Detection, Segmentation and Recognition',
    shortDescription: 'Developed traffic-sign perception models reaching approximately 90% recognition accuracy across 12 categories and more than 550 evaluated signs.',
    overview: 'Developed computer-vision models for traffic-sign detection, segmentation and recognition, focusing on the project scope of 12 recognised categories and more than 550 evaluated signs.',
    problem: 'Traffic-sign perception requires reliable localisation and category recognition under road-scene variation without overstating the class scope beyond the evaluated project data.',
    myRole: [
      'Trained and optimised traffic-sign segmentation and recognition models',
      'Prepared evaluation data for sign detection and category recognition',
      'Measured recognition performance across the evaluated sign categories'
    ],
    approach: [
      'Semantic segmentation',
      'Traffic-sign classification',
      'TensorFlow and Keras model training',
      'Dataset preparation and evaluation'
    ],
    results: [
      'Reached approximately 90% recognition accuracy',
      'Evaluated more than 550 signs across 12 categories'
    ],
    technologies: ['TensorFlow', 'Keras', 'Python', 'Semantic Segmentation', 'Image Classification', 'Computer Vision'],
    imageUrl: '/Traffic-Sign-Segmentation.png',
    videoUrl: 'https://www.youtube.com/embed/15DI5DU049s',
  },
  {
    id: '9',
    title: 'Autonomous Fruit-Picking Robot',
    shortDescription: 'Designed and built a mobile fruit-picking robot integrating mechanical design, embedded control and computer vision into a complete autonomous robotic prototype.',
    overview: 'Designed and built a mobile robotic prototype for autonomous fruit-picking tasks, combining mechanical structure, embedded control and perception into one complete system.',
    problem: 'Fruit-picking automation requires coordinated mobility, sensing and actuation in a compact robotic platform without relying on manually controlled operation.',
    myRole: [
      'Designed the mechanical assembly in SolidWorks',
      'Integrated Arduino-based embedded control',
      'Combined mobility, sensing and perception into an autonomous prototype'
    ],
    approach: [
      'CAD-based mechanical design',
      'Embedded motor control',
      'Camera-based perception',
      'Prototype integration and testing'
    ],
    results: [
      'Produced a complete autonomous robotic prototype',
      'Integrated mechanical, embedded and perception subsystems into a working platform'
    ],
    technologies: ['SolidWorks', 'Arduino', 'Robotics', 'Embedded Systems', 'Computer Vision', 'CAD'],
    imageUrl: '/Fruit_Picking_Robot_Pic.png',
    videoUrl: 'https://youtube.com/embed/A6-kVLaBmLI',
  },
];

export const EXPERIENCE: Experience[] = [
  {
    id: '1',
    role: 'Master Thesis - Multi-view Video Evaluation',
    company: 'Volkswagen AG',
    period: 'May 2025 - Feb 2026',
    description: 'Built evaluation frameworks for AI-generated multi-view data, designed perception robustness metrics and assessed synthetic data impact on autonomous-driving models.',
  },
  {
    id: '2',
    role: 'Working Student - Automated Mobile Mapping',
    company: 'NavVis',
    period: 'Dec 2024 - Apr 2025',
    description: 'Implemented algorithms for automated marker detection in images and laser scans, evaluated 3D measurement accuracy, conducted test mappings and documented system-level test scenarios.',
  },
  {
    id: '3',
    role: 'AI Research Assistant',
    company: 'Fraunhofer IIS',
    period: 'Dec 2023 - Nov 2024',
    description: 'Worked on multimodal 3D room geometry inference using visual and audio data. Trained NeRF models for multi-view 3D reconstruction and CRNN models for audio-based spatial inference.',
  },
  {
    id: '4',
    role: 'Lead Computer Vision Engineer',
    company: 'RoadGauge AI / Strada Imaging',
    period: '2022 - 2023',
    description: 'Led a team of 6 in developing visual perception algorithms for pavement inspection. Built a complete CV pipeline, stereo-based 3D reconstruction system and GPS-based scale estimation scheme for accurate asset positioning. Managed a dataset labelling team of 10.',
  },
  {
    id: '5',
    role: 'Computer Vision / ML Engineer',
    company: 'Strada Imaging',
    period: '2021',
    description: 'Trained semantic segmentation models for road inspection using DeepLabV3. Developed stereo-based 3D reconstruction pipelines and object tracking and counting algorithms.',
  }
];

export const THESES: Thesis[] = [
  {
    id: 'm1',
    type: 'Master',
    title: 'Evaluation of Multi-view Video Quality for Autonomous Driving',
    institution: 'Volkswagen AG',
    period: '2025 - 2026',
    description: 'Developed a perception-centric evaluation framework for AI-generated multi-view camera data, bridging generative AI and real-world autonomous-driving perception.',
    logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/6/6d/Volkswagen_logo_2019.svg',
    imageUrl: '/MasterThesisPhoto.png',
    keyContributions: [
      'Designed robustness metrics for downstream object detection and segmentation models',
      'Analysed the impact of synthetic multi-camera data on scene-understanding performance',
      'Built an evaluation pipeline tailored for training Vision-Language-Action models',
      'Investigated how generative data affects ADAS perception reliability'
    ]
  },
  {
    id: 'b1',
    type: 'Bachelor',
    title: 'Design and Development of a Throwable Carbon-Fibre Robot',
    institution: 'University of Engineering and Technology',
    period: '2017 - 2021',
    description: 'Designed and developed a carbon-fibre robot capable of surviving 10-metre drops, focusing on structural robustness, lightweight materials and embedded sensing for tactical applications.',
    imageUrl: '/Throwable-Robot.jpeg',
    keyContributions: [
      'Designed a carbon-fibre chassis capable of surviving 10-metre drops',
      'Integrated embedded sensing and control systems for autonomous stability',
      'Optimised weight-to-strength ratio using advanced composite materials',
      'Developed a throwable deployment mechanism for rapid field use'
    ]
  }
];

export const SOCIALS: SocialLink[] = [
  { label: 'Email', url: 'mailto:scholar.afaqsaeed@gmail.com' },
  { label: 'LinkedIn', url: 'https://linkedin.com/in/muhammad-afaq-saeed' },
  { label: 'GitHub', url: 'https://github.com/AfaqSaeed' },
  { label: 'YouTube Portfolio', url: 'https://www.youtube.com/channel/UCUPzSXCskafKOlKFYPx_x0g' },
  { label: 'RoadGauge Project', url: 'https://roadgauge.ai/news/portfolio/road-gauge-ai/' },
];

export const SYSTEM_INSTRUCTION = `
You are an AI Assistant representing Muhammad Afaq Saeed. You are helpful, professional and knowledgeable about his specific experience.
Use the following context to answer questions:

Name: ${PROFILE.name}
Title: ${PROFILE.title}
About: ${PROFILE.about.join(' ')}

Experience:
${EXPERIENCE.map(e => `- ${e.role} at ${e.company} (${e.period}): ${e.description}`).join('\n')}

Theses:
${THESES.map(t => `- ${t.type} Thesis: ${t.title} at ${t.institution} (${t.period}): ${t.description}`).join('\n')}

Projects:
${PROJECTS.map(p => `- ${p.title}${p.organization ? ` (${p.organization})` : ''}: ${p.shortDescription}`).join('\n')}

If asked about something not in this list, politely explain you are an AI focused on Afaq's professional background and do not have that information. Keep answers concise.
`;
