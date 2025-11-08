import sup from '/public/images/icon-supervisor.svg';
import build from '/public/images/icon-team-builder.svg';
import karma from '/public/images/icon-karma.svg';
import calc from '/public/images/icon-calculator.svg';

const cards = [
  {
    title: 'Supervisor',
    role: 'Monitors activity to identify project roadblocks',
    img: sup,
  },

  {
    title: 'Team Builder',
    role: 'Scans our talent network to create the optimal team for your project',
    img: build,
  },

  {
    title: 'Karma',
    role: 'Regularly evaluates our talent to ensure quality',
    img: karma,
  },

  {
    title: 'Calculator',
    role: 'Uses data from past projects to provide better delivery estimates',
    img: calc,
  },
];

export default cards;
