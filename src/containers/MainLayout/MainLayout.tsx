import React from 'react';
import { useDispatch } from "react-redux";
import { useHistory, useLocation } from 'react-router-dom';
import { getSources } from "../../api";
import { addSources } from "../../modules/reducers/AppListReducer";
import './MainLayout.styles.scss';

interface IMainLayoutProps {
  children: JSX.Element;
}

const MainLayout: React.FC<IMainLayoutProps> = ({ children }) => {
  const dispatch = useDispatch();
  const location = useLocation();
  const history = useHistory();

  React.useEffect(() => {
    console.log(location);
    if(location.pathname === "/") {
      history.push("/home");
    }
  }, [])

  const getDataSourses = React.useCallback( async () => {
    const data = await getSources();
    dispatch(addSources(data));
  }, [dispatch]);

  React.useEffect( () => {
    getDataSourses();
  }, [getDataSourses]);

  return (
    <div className="flex-container">
      {children}
    </div>
  );
};

export default MainLayout;
