import React from 'react';
import { FaGraduationCap, FaChalkboardTeacher, FaUserFriends} from 'react-icons/fa';
import exp0 from '../../assets/about/exp0.JPG';
import exp1 from '../../assets/about/exp1.jpeg';
import mentoring1 from '../../assets/about/mentoring1.png'

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
    title: "Project Manager of Malam Keakraban KMBD 2025 ",
    subtitle: "Keluarga Mahasiswa Buddhis Dhammavaddhana BINUS University",
    date: "Jan 2024 - Present",
    content: (
      <div>
        <p className="text-gray-600 mb-4 text-sm md:text-base">
          Malam Keakraban 2025 was the first event held in the new term of Keluarga Mahasiswa Buddhis Dhammavaddhana (KMBD) during the P36 period. The event aimed to foster togetherness and strengthen the bonds of brotherhood among active members and committee officers within KMBD.
        </p>
        <ul className="text-gray-600 mb-4 text-sm md:text-base">
          <li >1. Led a team of 27 committee members and 4 volunteers to organize and ensure the success of the "Malam Keakraban 2025" event.</li>
          <li>2. Successfully organized the "Malam Keakraban 2025" event, which gathered 150 participants from various regions, including Alam Sutera, Kemanggisan, and Bekasi.</li>
          <li>3. Coordinated detailed event planning, managed timelines, and delegated tasks effectively to ensure smooth execution.</li>
          <li>4. Fostered strong team bonding among committee members through regular collaboration and shared responsibilities.</li>
          <li>5. Resolved unexpected challenges during the planning and execution phases, demonstrating adaptability and quick decision-making under pressure.</li>
          <li>6. Contributed creative ideas to the event theme and activities, resulting in a memorable experience for all participants.</li>
        </ul>
      <div className="grid grid-cols-2 gap-3">
        <div className="aspect-[16/9]">
          <img
            src={exp0}
            alt="Makrab"
            className="rounded-lg w-full h-full object-cover shadow-md"
          />
        </div>
      </div>
      </div>
    ),
  },
  {
    icon: <FaChalkboardTeacher />,
    title: "Scholarship Mentor Awardee",
    subtitle: "Binus Student Advisory & Support Center",
    date: "Sep 2025 - Present",
    content: (
      <div>
        <p className="text-gray-600 text-sm md:text-base">
          Odd Semester 2025 / 2026 Student Advisory and Support Center Mentor
          <ul className="text-gray-600 mb-4 text-sm md:text-base">
            <li>- Met the mentor criteria with a GPA above 3.5 and all grades above B-.</li>
            <li>- Provided mentorship and academic support to mentees.</li>
            <li>- Received a full scholarship covering 16 credits for one semester.</li>
            <li>- Responsible for improving mentees' academic performance and my own.</li>
          </ul>       
        </p>
        <div className="grid grid-cols-2 gap-3">
        <div className="aspect-[16/9]">
          <img
            src={mentoring1}
            alt="Makrab"
            className="rounded-lg w-full h-full object-cover shadow-md"
          />
        </div>
      </div>
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
      {[...timelineData].reverse().map((item, index) => (
        <TimelineItem 
          key={index} 
          item={item} 
          isLast={index === timelineData.length - 1} 
        />
      ))}
    </div>
  );
}