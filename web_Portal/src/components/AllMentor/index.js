import React from "react";
import Loaders from "components/Loaders";
import TopMentor from "components/TopMentor";
const AllMentor = ({ get_all_mentor, isLoading }) => {
  if(isLoading || get_all_mentor.isLoading ){
    return <div className="flex items-center mt-5 w-full"><Loaders sty={'w-full'}/></div>
  }
  return (
    <div>
        <div className="grid grid-cols-4 gap-4 sm:grid-cols-1 mt-5">
          {get_all_mentor?.allMentor?.data?.mentors.map((item, index) => (
            <TopMentor
              key={index}
              id={item?.user._id}
              name={item?.user?.name}
              img={item?.user?.profile_picture_url}
              mentorFields={item?.mentorFeilds}
              mentorDescription={item?.mentorDescription}
              mentorEducation={item?.mentorEducation}
              mentorExperience={item?.mentorExperience}
              mentorPrice={item?.mentorPrice}
              links={item?.socialMediaLinks}
              available={item?.mentorsAvailability}
            />
          ))}
        </div>
    </div>
  );
};

export default AllMentor;
