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

export const FilterSessionForNotifierBaseOnToday = () => {
  const { menteeData } = useSelector((state) => state.menteeData);
  const currentDate = new Date().toDateString();
  const filterItems = menteeData?.data?.sessionRequests.filter((item) => {
    return (
      item.requestStatus === "approved" &&
      (new Date(item.requestStartTime).toDateString() === currentDate)
    );
  });

  return filterItems;
};

export const FilterSessionForNotifierBaseOnDate = (date) => {
  const { menteeData } = useSelector((state) => state.menteeData);
  const currentDate = new Date(date).toDateString();
  const filterItems = menteeData?.data?.sessionRequests.filter((item) => {
    return (
      item.requestStatus === "approved" &&
      (new Date(item.requestStartTime).toDateString() === currentDate)
    );
  });

  return filterItems;
};


export const FilterSessionForNotifierBaseOnUpcomingDate = () => {
  const { menteeData } = useSelector((state) => state.menteeData);
  const currentDate = new Date().toDateString();
  const tomorrowDate = new Date();
  tomorrowDate.setDate(tomorrowDate.getDate() + 4);
  console.log("check date",tomorrowDate);
  const tDString = tomorrowDate.toDateString();
  const filterItems = menteeData?.data?.sessionRequests.filter((item) => {
    return (
      item.requestStatus === "approved" &&
      (new Date(item.requestStartTime).toDateString() > currentDate && new Date(item.requestStartTime).toDateString() <= tDString)
    );
  });

  return filterItems;
};

export const FilterSessionForNotifierBaseOnTodayForMentor = () => {
  const { mentorData } = useSelector((state) => state.mentorData);
  const currentDate = new Date().toDateString();
  const filterItems = mentorData?.data?.sessionRequests.filter((item) => {
    return (
      item.requestStatus === "approved" &&
      (new Date(item.requestStartTime).toDateString() === currentDate)
    );
  });

  return filterItems;
};

export const FilterSessionForNotifierBaseOnDateForMentor = (date) => {
  const { mentorData } = useSelector((state) => state.mentorData);
  const currentDate = new Date(date).toDateString();
  const filterItems = mentorData?.data?.sessionRequests.filter((item) => {
    return (
      item.requestStatus === "approved" &&
      (new Date(item.requestStartTime).toDateString() === currentDate)
    );
  });

  return filterItems;
};


export const FilterSessionForNotifierBaseOnUpcomingDateForMentor = () => {
  const { mentorData } = useSelector((state) => state.mentorData);
  const currentDate = new Date().toDateString();
  const tomorrowDate = new Date();
  tomorrowDate.setDate(tomorrowDate.getDate() + 4);
  // console.log("check date",tomorrowDate);
  const tDString = tomorrowDate.toDateString();
  const filterItems = mentorData?.data?.sessionRequests.filter((item) => {
    return (
      item.requestStatus === "approved" &&
      (new Date(item.requestStartTime).toDateString() > currentDate && new Date(item.requestStartTime).toDateString() <= tDString)
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
