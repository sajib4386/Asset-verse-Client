import React from 'react'
import useRole from '../../Hooks/useRole';
import Loading from '../../Components/Loading/Loading';
import HRDashBoardHome from './HRDashBoardHome';
import EmployeeDashBoardHome from './EmployeeDashBoardHome';
import Forbidden from '../../Components/Forbidden/Forbidden';

const DashBoardHome = () => {
  const { role, roleLoading } = useRole();
  if (roleLoading) {
    return <Loading></Loading>
  }
  if (role === 'hr') {
    return <HRDashBoardHome></HRDashBoardHome>
  }
  else if (role === 'employee') {
    return <EmployeeDashBoardHome></EmployeeDashBoardHome>
  } else {
    return <Forbidden></Forbidden>
  }

}

export default DashBoardHome