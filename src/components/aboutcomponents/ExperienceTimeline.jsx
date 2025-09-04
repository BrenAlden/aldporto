import React from 'react';
import { FaGraduationCap, FaChalkboardTeacher, FaUserFriends} from 'react-icons/fa';
import exp0 from '../../assets/about/exp0.JPG';
import exp1 from '../../assets/about/exp1.jpeg';

const timelineData = [
  {
    icon: <FaGraduationCap />,
    title: "Undergraduate Computer Science",
    subtitle: "Bina Nusantara University",
    date: "Sep 2023 - Present",
    content: (
      <div>
        <p className="text-gray-600 mb-4 text-sm md:text-base">
          Currently pursuing a Bachelor's degree with a specialization in Intelligent Systems. My coursework includes Machine Learning, Deep Learning, Data Analysis, and advanced algorithms. I am actively involved in various projects to apply theoretical knowledge to real-world problems.
        </p>
      </div>
    ),
  },
  {
    icon: <FaUserFriends />,
    title: "Keluarga Mahasiswa Buddhis Dhammavaddhana",
    subtitle: "Bina Nusantara University",
    date: "Jan 2024 - Present",
    content: (
      <div>
        <p className="text-gray-600 mb-4 text-sm md:text-base">
          My Activity:
        </p>
        <ul className="text-gray-600 mb-4 text-sm md:text-base">
          <li >- Activist of Dhamma & Social Division (Jan 2024 - Jan 2025)</li>
          <li>- Project Manager of Malam Keakraban 2025 (Dec 2024 - March 2025)</li>
          <li>- Staff of Dhamma & Social Division (Jan 2025 - Present)</li>
        </ul>
        <p className="text-gray-600 mb-4 text-sm md:text-base">
          Through my involvement in KMBD, I have developed various skills such as communication and teamwork. During my role as the Project Manager of "Malam Keakraban 2025", I gained valuable experience in leadership, event organizing, team building, and time management.
        </p>
      <div className="grid grid-cols-2 gap-3">
        <div className="aspect-[16/9]">
          <img
            src={exp0}
            alt="Makrab"
            className="rounded-lg w-full h-full object-cover shadow-md"
          />
        </div>
        <div className="aspect-[16/9]">
          <img
            src={exp1}
            alt="Chanting"
            className="rounded-lg w-full h-full object-cover shadow-md"
          />
        </div>
      </div>
      </div>
    ),
  },
  {
    icon: <FaChalkboardTeacher />,
    title: "Mentor",
    subtitle: "Binus Student Advisory & Support Center",
    date: "Sep 2025 - Present",
    content: (
      <div>
        <p className="text-gray-600 mb-4 text-sm md:text-base">
        </p>
      </div>
    ),
  },
];

const TimelineItem = ({ item, isLast }) => (
  <div className="flex gap-6">
    <div className="flex flex-col items-center">
      <div className="flex-shrink-0 w-12 h-12 rounded-full bg-blue-100 text-[#1661d2ff] flex items-center justify-center">
        {React.cloneElement(item.icon, { className: "w-6 h-6" })}
      </div>
      {!isLast && <div className="w-px h-full bg-slate-300 mt-2"></div>}
    </div>
    <div className="flex-grow pb-12">
      <p className="text-xs text-gray-500">{item.date}</p>
      <h3 className="text-lg font-bold text-gray-800">{item.title}</h3>
      <h4 className="text-md text-gray-600 mb-3">{item.subtitle}</h4>
      <div>{item.content}</div>
    </div>
  </div>
);

export function ExperienceTimeline() {
  return (
    <div>
      {timelineData.map((item, index) => (
        <TimelineItem 
          key={index} 
          item={item} 
          isLast={index === timelineData.length - 1} 
        />
      ))}
    </div>
  );
}