// Mock email generation function
// In a real app, this would call the OpenAI API
export const generateEmailCopy = async (params) => {
  console.log('Generating email with params:', params);
  
  // Simulate API call delay
  await new Promise(resolve => setTimeout(resolve, 2000));
  
  // Mock response data based on inputs
  const subjects = {
    'promotion': [
      `Special Offer: Save 20% on ${params.product}`,
      `Limited Time: Exclusive Deal on ${params.product}`,
      `Don't Miss Out: ${params.product} Sale Ends Soon`
    ],
    'newsletter': [
      `${params.product} News: This Month's Updates`,
      `The Latest from ${params.product}: News You Can Use`,
      `Your ${params.product} Newsletter: What's New`
    ],
    'announcement': [
      `Introducing: The New ${params.product}`,
      `Just Launched: ${params.product} Is Here!`,
      `Big News: ${params.product} Has Arrived`
    ],
    'welcome': [
      `Welcome to ${params.product}!`,
      `Thanks for Joining ${params.product}`,
      `Getting Started with ${params.product}`
    ],
    'follow-up': [
      `Following Up on ${params.product}`,
      `Checking In About ${params.product}`,
      `Quick Question About Your ${params.product} Experience`
    ],
    'feedback': [
      `We'd Love Your Feedback on ${params.product}`,
      `Your Opinion Matters: ${params.product} Survey`,
      `Help Us Improve ${params.product}`
    ]
  };
  
  const toneAdjectives = {
    'professional': ['effective', 'valuable', 'professional', 'optimal', 'significant'],
    'friendly': ['amazing', 'fantastic', 'wonderful', 'exciting', 'delightful'],
    'urgent': ['urgent', 'critical', 'essential', 'time-sensitive', 'immediate'],
    'casual': ['cool', 'nice', 'great', 'awesome', 'handy'],
    'persuasive': ['transformative', 'game-changing', 'revolutionary', 'superior', 'unparalleled'],
    'humorous': ['hilarious', 'amusing', 'entertaining', 'delightful', 'tickling']
  };
  
  // Select appropriate adjectives for the tone
  const adjectives = toneAdjectives[params.tone] || toneAdjectives.professional;
  const randomAdj = () => adjectives[Math.floor(Math.random() * adjectives.length)];
  
  // Get subject options for this purpose
  const subjectOptions = subjects[params.purpose] || [
    `About ${params.product}`,
    `${params.product} Information`,
    `${params.product} Update`
  ];
  
  // Select a subject line
  const subject = subjectOptions[Math.floor(Math.random() * subjectOptions.length)];
  
  // Generate email body based on purpose and tone
  let body = '';
  
  // Greeting
  if (params.tone === 'professional') {
    body += `Dear ${params.audience},\n\n`;
  } else if (params.tone === 'casual' || params.tone === 'friendly' || params.tone === 'humorous') {
    body += `Hey there ${params.audience}!\n\n`;
  } else {
    body += `Hello ${params.audience},\n\n`;
  }
  
  // Introduction paragraph
  switch (params.purpose) {
    case 'promotion':
      body += `We're excited to offer you a ${randomAdj()} opportunity to experience ${params.product}. For a limited time, we're providing special pricing that you won't want to miss.\n\n`;
      break;
    case 'newsletter':
      body += `Welcome to our ${randomAdj()} newsletter featuring the latest updates about ${params.product}. We've got some interesting news to share with you this month.\n\n`;
      break;
    case 'announcement':
      body += `We're thrilled to announce our ${randomAdj()} new ${params.product}! After months of development, it's finally ready for you to experience.\n\n`;
      break;
    case 'welcome':
      body += `Thank you for joining ${params.product}! We're ${randomAdj()} to have you with us and can't wait to help you get the most out of your experience.\n\n`;
      break;
    case 'follow-up':
      body += `I wanted to follow up regarding ${params.product}. Your experience is ${randomAdj()} to us, and we're keen to ensure everything is meeting your expectations.\n\n`;
      break;
    case 'feedback':
      body += `Your opinion about ${params.product} is ${randomAdj()} to us. We're continuously working to improve our offerings and would appreciate your feedback.\n\n`;
      break;
    default:
      body += `I'm writing to you today about our ${randomAdj()} ${params.product}. We believe this will be of particular interest to you.\n\n`;
  }
  
  // Middle paragraph with key points
  if (params.keyPoints) {
    body += `Here are some key points about ${params.product}:\n\n`;
    const points = params.keyPoints.split('\n').filter(p => p.trim());
    points.forEach(point => {
      body += `• ${point.trim()}\n`;
    });
    body += '\n';
  } else {
    body += `${params.product} offers ${randomAdj()} features designed specifically for ${params.audience}. Our users consistently report ${randomAdj()} results after making the switch.\n\n`;
  }
  
  // Call to action
  switch (params.purpose) {
    case 'promotion':
      body += `To take advantage of this ${randomAdj()} offer, simply click the button below or reply to this email. But hurry – this promotion won't last long!\n\n`;
      break;
    case 'newsletter':
      body += `We hope you found this update ${randomAdj()}. If you'd like more information on any of these topics, just click the links above.\n\n`;
      break;
    case 'announcement':
      body += `Ready to experience the ${randomAdj()} benefits of ${params.product}? Click below to get started today!\n\n`;
      break;
    case 'welcome':
      body += `To begin your ${randomAdj()} journey with ${params.product}, click the "Get Started" button below. We've prepared some resources to help you hit the ground running.\n\n`;
      break;
    case 'follow-up':
      body += `I'd appreciate a moment of your time for a quick response or to schedule a ${randomAdj()} conversation about your experience with ${params.product}.\n\n`;
      break;
    case 'feedback':
      body += `Would you be willing to take our short, ${randomAdj()} survey? It only takes 3 minutes, and your input will help shape the future of ${params.product}.\n\n`;
      break;
    default:
      body += `For more ${randomAdj()} information about ${params.product}, please visit our website or contact our support team.\n\n`;
  }
  
  // Closing
  if (params.tone === 'professional') {
    body += `Thank you for your time and consideration.\n\nBest regards,\nThe ${params.product} Team`;
  } else if (params.tone === 'friendly' || params.tone === 'casual') {
    body += `Thanks so much!\n\nCheers,\nThe ${params.product} Team`;
  } else if (params.tone === 'humorous') {
    body += `Until next time, keep being ${randomAdj()}!\n\nWith a smile,\nThe ${params.product} Team`;
  } else {
    body += `Thank you,\nThe ${params.product} Team`;
  }
  
  return {
    subject,
    body
  };
};