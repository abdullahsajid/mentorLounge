import { useSelector } from "react-redux";
import * as moment from "moment"
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
      (new Date(item.requestStartTime).toISOString().slice(0,10) === moment(currentDate).format('YYYY-MM-DD') ||
        new Date(item.requestStartTime).toISOString().slice(0,10) === moment(tDString).format('YYYY-MM-DD'))
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
      (new Date(item.requestStartTime).toISOString().slice(0,10) === moment(currentDate).format('YYYY-MM-DD'))
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
      (new Date(item.requestStartTime).toISOString().slice(0,10) === moment(currentDate).format('YYYY-MM-DD'))
    );
  });

  return filterItems;
};


export const FilterSessionForNotifierBaseOnUpcomingDate = () => {
  const { menteeData } = useSelector((state) => state.menteeData);
  const currentDate = new Date().toDateString();
  const tomorrowDate = new Date();
  tomorrowDate.setDate(tomorrowDate.getDate() + 4);
  // console.log("check date",tomorrowDate);
  const tDString = tomorrowDate.toDateString();
  const filterItems = menteeData?.data?.sessionRequests.filter((item) => {
    return (
      item.requestStatus === "approved" &&
      (new Date(item.requestStartTime).toISOString().slice(0,10) > moment(currentDate)?.format('YYYY-MM-DD') && new Date(item.requestStartTime).toISOString().slice(0,10) <= moment(tDString)?.format('YYYY-MM-DD'))
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
      (new Date(item.requestStartTime).toISOString().slice(0,10) === moment(currentDate).format('YYYY-MM-DD'))
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
      (new Date(item.requestStartTime).toISOString().slice(0,10) === moment(currentDate).format('YYYY-MM-DD'))
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
      (new Date(item.requestStartTime).toISOString().slice(0,10) > moment(currentDate).format('YYYY-MM-DD') && new Date(item.requestStartTime).toISOString().slice(0,10) <= moment(tDString).format('YYYY-MM-DD'))
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

// export const FilterAvailability = (date) => {
//   const { mentorData } = useSelector((state) => state.mentorData);
//   // console.log(mentorData);
//   let selDate = new Date(date)
//   // console.log(selDate.get);
//   let fDate = moment(selDate)?.format()?.slice(0,10)
//   const filterItem = mentorData?.data?.mentorsAvailability?.filter((item) => {
//       var strToDate = new Date(item?.availabilityStartTime)
//       return (strToDate?.toISOString()?.slice(0,10) === fDate)
//   })

//   return filterItem
// }

// export const isTimeSlotAvailable = (itemOfArr,startTime, endTime) => {

//   const selStartTime = new Date(startTime);
//   const selEndTime = new Date(endTime);
//   console.log("Selected Start Time:", startTime);
//   console.log("Selected End Time:", endTime);

//   const isAvailable = itemOfArr?.every((item) => {
//     const itemStartTime = new Date(item?.availabilityStartTime);
//     const itemEndTime = new Date(item?.availabilityEndTime);
//     // console.log(itemStartTime.toISOString().slice(11,16));
//     // Check if the selected time interval does not overlap with the item's interval
//     const isNotOverlapping = selEndTime <= itemStartTime.toISOString().slice(11,16) && selStartTime >= itemEndTime.toISOString().slice(11,16);
//     console.log("isNotOverlapping",isNotOverlapping);
//     return isNotOverlapping;
//   });

//   return isAvailable;
// }

export const getSessionTimeInMinutes = (
  availabilityStartTime,
  availabilityEndTime,
) => {
  const startTime = new Date(availabilityStartTime);
  const endTime = new Date(availabilityEndTime);

  // Calculate the difference in milliseconds
  const timeDifference = endTime - startTime;

  // Convert milliseconds to minutes
  const minutes = Math.floor(timeDifference / (1000 * 60));

  return minutes;
};

// const test = getSessionTimeInMinutes('2024-07-18T22:00:00.000Z','2024-07-18T22:29:59.000Z')
// console.log("test123:",test);