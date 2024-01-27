import { createAsyncThunk } from "@reduxjs/toolkit";
import * as api from "../../api";

export const fetchActivityList = createAsyncThunk(
  "activityList/fetchActivityList",
  async () => {
    const response = await api.fetchActivities();
    return response.data;
  }
);
