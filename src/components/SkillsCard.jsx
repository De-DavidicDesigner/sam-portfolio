
const SkillsCard = ({ skills }) => {
  
  
  return (
    <>
        {skills.map((skill) => (
          <div key={skill.id} className="flex flex-col items-center">
            <div className="relative group bg-gray-800 rounded p-4 w-full h-32 pt-6  transition-transform duration-500 transform hover:scale-105 hover:animate-pulse">
              {/* Skill Name on Hover */}
              <span className="absolute top-2 right-2 text-white text-xs font-thin opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {skill.title}
              </span>

              <img src={skill.logo} alt={skill.title} className="w-20 h-20" />
            </div>
          </div>
        ))}
    </>
  )
}

export default SkillsCard;
