import { useSelector } from "react-redux";

export const handleSectionNavigation = (id) => {
  const element = document.getElementById(id);
  const offset = 45;
  const bodyRect = document.body.getBoundingClientRect().top;
  const elementRect = element?.getBoundingClientRect().top ?? 0;
  const elementPosition = elementRect - bodyRect;
  const offsetPosition = elementPosition - offset;

  window.scrollTo({
    top: offsetPosition,
    behavior: "smooth",
  });
};

export const FilterSessionForNotifier = () => {
  const { menteeData } = useSelector((state) => state.menteeData);
  const currentDate = new Date().toDateString();
  const tomorrowDate = new Date();
  tomorrowDate.setDate(tomorrowDate.getDate() + 1);
  const tDString = tomorrowDate.toDateString();
  const filterItems = menteeData?.data?.sessionRequests.filter((item) => {
    return (
      item.requestStatus === "approved" &&
      (new Date(item.requestStartTime).toDateString() === currentDate ||
        new Date(item.requestStartTime).toDateString() === tDString)
    );
  });

  return filterItems;
};

export const FilterSeesionNotifierForMentor = () => {
  const { mentorData } = useSelector((state) => state.mentorData);
  const currentDate = new Date().toDateString();
  const tomorrowDate = new Date();
  tomorrowDate.setDate(tomorrowDate.getDate() + 1);
  const tDString = tomorrowDate.toDateString();
  const filterItems = mentorData?.data?.sessionRequests.filter((item) => {
    return (
      item.requestStatus === "approved" &&
      (new Date(item.requestStartTime).toDateString() === currentDate ||
        new Date(item.requestStartTime).toDateString() === tDString)
    );
  });

  return filterItems;
};

export const FilterSessionsForMentee = () => {
  const { menteeData } = useSelector((state) => state.menteeData);
  const currentDate = new Date()
  const filterItems = menteeData?.data?.sessionRequests.filter((item) => {
    return (
      (item.requestStatus === "approved") &&
      (new Date(item.requestEndTime) >= currentDate)
    );
  });
  return filterItems;
};

export const FilterSessionsForMentor = () => {
  const { mentorData } = useSelector((state) => state.mentorData);
  const currentDate = new Date()
  const filterItems = mentorData?.data?.sessionRequests.filter((item) => {
    return (
      item.requestStatus === "approved" &&
      new Date(item.requestEndTime) >= currentDate
    );
  });
  return filterItems;
};
