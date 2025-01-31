import React from 'react';

const SkillCard = ({ skill }) => {
  return (
    <div className="px-[25px] py-[8px] rounded-[120px] border-4 border-[#dba5f4] justify-center items-center flex">
      <div
        className="text-center text-2xl font-bold dm-sans leading-loose"
        style={{
          background: 'linear-gradient(270deg, #FFE597 11.87%, #AAFF82 100%)',
          WebkitBackgroundClip: 'text',
          color: 'transparent',
        }}
      >
        {skill}
      </div>
    </div>
  );
};

export default SkillCard;
