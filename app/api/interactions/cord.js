import re from './reactions';

export default ({ member, data }) => {
  return {
    type: 4,
    data: {
      content: `**${member.nick || member.user.username}** ${re[data.name]}`, // sweet comfy content
    },
  };
};
