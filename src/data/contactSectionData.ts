import { Github, Linkedin, Mail, MapPin, Twitter } from 'lucide-react';

export const contactSectionData = {
  title: 'Contact Me',
  video: '/contact us-vmake.mp4',
  detailsTitle: 'Get In Touch With Me',
  contactInfo: [
    {
      Icon: Mail,
      title: 'Email',
      value: 'munukuntlaphanivarun@gmail.com',
      link: 'mailto:munukuntlaphanivarun@gmail.com',
    },
    {
      Icon: MapPin,
      title: 'Location',
      value: 'Buffalo, New York, United States',
    },
  ],
  socialTitle: 'Connect With Me',
  socialLinks: [
    {
      Icon: Linkedin,
      link: 'https://www.linkedin.com/in/phani-varun-munukuntla-aa258b21b/',
    },
    {
      Icon: Github,
      link: 'https://github.com/Mvarun14',
    },

  ],
  form: {
    title: 'Send Me A Message',
    fields: [
      {
        placeholder: 'Name',
        name: 'name',
        type: 'text',
        required: true,
        minLength: 3,
        maxLength: 100,
      },
      {
        placeholder: 'Email',
        name: 'email',
        type: 'email',
        required: true,
        minLength: 3,
      },
      {
        placeholder: 'Message',
        name: 'message',
        type: 'text',
        required: true,
        minLength: 3,
      },
    ],
    buttonText: 'Send Message',
    successMessage: 'Message sent successfully',
    errorMessage: 'Failed to send message',
  },
};
