import React, {useEffect} from "react";
import Layout from "../pages/Layout";
import TaskList from '../TaskList';
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getMe } from "../../features/AuthSlice";

const Tasks = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isError} = useSelector((state => state.auth));

  useEffect(() => {
    dispatch(getMe());
  }, [dispatch]);

  useEffect(() => {
    if(isError){
      navigate("/");
    }
  }, [isError, navigate]);
  return (
  <Layout>
    <TaskList/>
  </Layout>
  )
}

export default Tasks;