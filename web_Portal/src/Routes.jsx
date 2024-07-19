import React, { lazy, useState } from "react";
import { Routes, Route } from "react-router-dom";
// import Home from "pages/Home";
import Loader from "pages/Loader";
// import Admin from "pages/admin";
import ProtectedRoutes from "utils/ProtectedRoutes";
const NotFound = React.lazy(() => import("pages/NotFound"));
const Sidebar1 = React.lazy(() => import("components/Sidebar1"));
const SettingsTwo = React.lazy(() => import("pages/SettingsTwo"));
const Settings = React.lazy(() => import("pages/Settings"));
const SettingsOne = React.lazy(() => import("pages/SettingsOne"));
const Notifications = React.lazy(() => import("pages/Notifications"));
const CustomerService = React.lazy(() => import("pages/CustomerService"));
const Finance = React.lazy(() => import("pages/Finance"));
const ContentManagement = React.lazy(() => import("pages/ContentManagement"));
const SessionManagement = React.lazy(() => import("pages/SessionManagement"));
const MentorManagement = React.lazy(() => import("pages/MentorManagement"));
const AnalyticsandReporting = React.lazy(
  () => import("pages/AnalyticsandReporting"),
);
const MenteeDetailPage = React.lazy(() => import("pages/MenteeDetailPage"));
const MentorDetailPage = React.lazy(() => import("pages/MentorDetailPage"));
const UserManagement = React.lazy(() => import("pages/UserManagement"));
const DesktopTwentyEight = React.lazy(() => import("pages/DesktopTwentyEight"));
const DesktopTwentySeven = React.lazy(() => import("pages/DesktopTwentySeven"));
const DesktopTwentyFive = React.lazy(() => import("pages/DesktopTwentyFive"));
const DesktopTwentyNine = React.lazy(() => import("pages/DesktopTwentyNine"));
const DesktopTwentyFour = React.lazy(() => import("pages/DesktopTwentyFour"));
const DesktopTwentyThree = React.lazy(() => import("pages/DesktopTwentyThree"));
const DesktopTwentyTwo = React.lazy(() => import("pages/DesktopTwentyTwo"));
const DesktopTwentyOne = React.lazy(() => import("pages/DesktopTwentyOne"));
const DesktopTwenty = React.lazy(() => import("pages/DesktopTwenty"));
const DesktopNineteen = React.lazy(() => import("pages/DesktopNineteen"));
const DesktopSeventeen = React.lazy(() => import("pages/DesktopSeventeen"));
const LoginEighteen = React.lazy(() => import("pages/LoginEighteen"));
const LoginSixteen = React.lazy(() => import("pages/LoginSixteen"));
const LoginFifteen = React.lazy(() => import("pages/LoginFifteen"));
const LoginFourteen = React.lazy(() => import("pages/LoginFourteen"));
const LoginThirteen = React.lazy(() => import("pages/LoginThirteen"));
const LoginTwelve = React.lazy(() => import("pages/LoginTwelve"));
const DesktopThirteen = React.lazy(() => import("pages/DesktopThirteen"));
const DesktopFifteen = React.lazy(() => import("pages/DesktopFifteen"));
const DesktopEleven = React.lazy(() => import("pages/DesktopEleven"));
const DesktopFourteen = React.lazy(() => import("pages/DesktopFourteen"));
const DesktopTwelve = React.lazy(() => import("pages/DesktopTwelve"));
const DesktopTen = React.lazy(() => import("pages/DesktopTen"));
const DesktopNine = React.lazy(() => import("pages/DesktopNine"));
const DesktopEight = React.lazy(() => import("pages/DesktopEight"));
const DesktopSeven = React.lazy(() => import("pages/DesktopSeven"));
const DesktopSix = React.lazy(() => import("pages/DesktopSix"));
const LoginSeventeen = React.lazy(() => import("pages/LoginSeventeen"));
const LoginEleven = React.lazy(() => import("pages/LoginEleven"));
const LoginEight = React.lazy(() => import("pages/LoginEight"));
const LoginSeven = React.lazy(() => import("pages/LoginSeven"));
const DesktopFive = React.lazy(() => import("pages/DesktopFive"));
const DesktopFour = React.lazy(() => import("pages/DesktopFour"));
const DesktopThree = React.lazy(() => import("pages/DesktopThree"));
const DesktopTwo = React.lazy(() => import("pages/DesktopTwo"));
const DesktopSixteen = React.lazy(() => import("pages/DesktopSixteen"));
const FrameOne = React.lazy(() => import("pages/FrameOne"));
const Availability = React.lazy(() => import("pages/Availability"));
const PreQues = React.lazy(() => import('pages/PreSessionQues'))
const Meeting =  React.lazy(() => import('pages/meeting'))


const ProjectRoutes = () => {
  const [toggleSideBar, setToggleSidebar] = useState(false)
  return (
    <React.Suspense fallback={<><Loader /></>}>
      <Sidebar1 className={`!fixed !w-[316px] bg-white-A700 flex font-poppins inset-y-[0] justify-start left-[0]
          my-auto overflow-auto md:px-5 shadow-2xl top-[0] !transition-all  sm:hidden md:hidden ${toggleSideBar && "!flex z-[999]"}`} />
      <Routes>
        <Route path="/" element={<LoginTwelve setToggleSidebar={setToggleSidebar} />} />
        <Route path="/cal" element={<Availability />} />
        <Route path='/preques' element={<PreQues />} />
        <Route element={<ProtectedRoutes userRole={['mentee']} />}>
          <Route path="/mentee" element={<DesktopSixteen toggleSideBar={toggleSideBar} setToggleSidebar={setToggleSidebar} />} />
          <Route path="/profile" element={<DesktopFour toggleSideBar={toggleSideBar} setToggleSidebar={setToggleSidebar} />} />
          <Route path="/search" element={<DesktopSix toggleSideBar={toggleSideBar} setToggleSidebar={setToggleSidebar} />} />
          <Route path="/session" element={<DesktopSeven toggleSideBar={toggleSideBar} setToggleSidebar={setToggleSidebar} />} />
          <Route path="/settings" element={<DesktopThirteen toggleSideBar={toggleSideBar} setToggleSidebar={setToggleSidebar} />} />
          <Route path="/booksession" element={<DesktopFive toggleSideBar={toggleSideBar} setToggleSidebar={setToggleSidebar} />} />
          <Route path="/invite" element={<DesktopTwelve />} />
        </Route>
        <Route path="*" element={<NotFound />} />
        <Route path="/frameone" element={<FrameOne />} />
        <Route path="/desktopsixteen" element={<DesktopSixteen />} />
        <Route path="/desktoptwo" element={<DesktopTwo />} />
        <Route path="/desktopthree" element={<DesktopThree />} />
        <Route path="/loginseven" element={<LoginSeven />} />
        <Route path="/logineight" element={<LoginEight />} />
        <Route path="/logineleven" element={<LoginEleven />} />
        <Route path="/loginseventeen" element={<LoginSeventeen />} />
        <Route path="/desktopeight" element={<DesktopEight />} />
        <Route path="/desktopnine" element={<DesktopNine />} />
        <Route path="/desktopten" element={<DesktopTen />} />
        
        <Route path="/commission" element={<DesktopFourteen />} />
        <Route path="/reviewContainer" element={<DesktopEleven />} />
        <Route path="/reviewSubmit" element={<DesktopFifteen />} />
        <Route path="/login" element={<LoginTwelve />} />
        <Route path="/loginthirteen" element={<LoginThirteen />} />
        <Route path="/signup" element={<LoginFourteen />} />
        <Route path="/loginfifteen" element={<LoginFifteen />} />
        <Route path="/loginsixteen" element={<LoginSixteen />} />
        <Route path="/logineighteen" element={<LoginEighteen />} />
        <Route element={<ProtectedRoutes userRole={['mentor']} />}>
          <Route path="/mentor" element={<DesktopSeventeen toggleSideBar={toggleSideBar} setToggleSidebar={setToggleSidebar} />} />
          <Route path="/mtrsearch" element={<DesktopTwentyOne toggleSideBar={toggleSideBar} setToggleSidebar={setToggleSidebar} />} />
          <Route path="/mtrsession" element={<DesktopTwentyTwo toggleSideBar={toggleSideBar} setToggleSidebar={setToggleSidebar} />} />
          <Route path="/mtrsettings" element={<DesktopTwentyEight toggleSideBar={toggleSideBar} setToggleSidebar={setToggleSidebar} />} />
          <Route path="/mtr-Request-Session" element={<DesktopTwentyFive toggleSideBar={toggleSideBar} setToggleSidebar={setToggleSidebar} />} />
        </Route>
        <Route path="/mtr-meeting/:id/:pass" element={<Meeting />}/>
        <Route path="/desktopnineteen" element={<DesktopNineteen />} />
        <Route path="/desktoptwenty" element={<DesktopTwenty />} />
        <Route path="/desktoptwentyone" element={<DesktopTwentyOne />} />
        <Route path="/desktoptwentytwo" element={<DesktopTwentyTwo />} />
        <Route path="/desktoptwentythree" element={<DesktopTwentyThree />} />
        <Route path="/desktoptwentyfour" element={<DesktopTwentyFour />} />
        <Route path="/desktoptwentynine" element={<DesktopTwentyNine />} />
        <Route path="/desktoptwentyfive" element={<DesktopTwentyFive />} />
        <Route path="/mentorWallet" element={<DesktopTwentySeven />} />
        <Route path="/desktoptwentyeight" element={<DesktopTwentyEight />} />
        {/* <Route element={<ProtectedRoutes userRole={['admin']}/>}> */}
        {/* </Route> */}
        {/* <Route element={<Admin/>}> */}
        <Route path="/usermanagement" element={<UserManagement />} />
        <Route path="/mentordetailpage" element={<MentorDetailPage />} />
        <Route path="/menteedetailpage" element={<MenteeDetailPage />} />
        <Route
          path="/analyticsandreporting"
          element={<AnalyticsandReporting />}
        />
        <Route path="/mentormanagement" element={<MentorManagement />} />
        <Route path="/sessionmanagement" element={<SessionManagement />} />
        <Route path="/contentmanagement" element={<ContentManagement />} />
        <Route path="/finance" element={<Finance />} />
        <Route path="/customerservice" element={<CustomerService />} />
        <Route path="/notifications" element={<Notifications />} />
        <Route path="/settingsone" element={<SettingsOne />} />
        <Route path="/settingss" element={<Settings />} />
        <Route path="/settingstwo" element={<SettingsTwo />} />
        {/* </Route> */}
      </Routes>
    </React.Suspense>
  );
};

export default ProjectRoutes;
