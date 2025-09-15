import React from "react";

interface HowItWorksCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const WorkCard: React.FC<HowItWorksCardProps> = ({
  icon,
  title,
  description,
}) => {
  return (
    <div className="text-center dark:bg-gray-900">
      {/* group is here */}
      <div className="group p-4 rounded-2xl hover:shadow-lg transition-shadow duration-300">
        {/* icon wrapper */}
        <div className="w-16 h-16 rounded-full bg-orange-500 mx-auto mb-6 flex items-center justify-center transition-colors duration-300 group-hover:bg-orange-100">
          {/* icon with group-hover */}
          <div className="text-white group-hover:text-orange-600">
            {icon}
          </div>
        </div>

        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{title}</h3>
        <p className="text-gray-600 dark:text-gray-400">{description}</p>
      </div>
    </div>
  );
};

export default WorkCard;
