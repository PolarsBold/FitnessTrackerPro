import { useParams } from "react-router-dom";
import useQuery from "../api/useQuery";
import { useAuth } from "../auth/AuthContext";
import useMutation from "../api/useMutation";

export default function SingleActivity() {
  const { id } = useParams();
  const {
    data: activity,
    loading,
    error,
  } = useQuery(`/activities/${id}`, "activities");

  const { token } = useAuth();
  const {
    mutate: deleteActivity,
    loading: mLoading,
    error: mError,
  } = useMutation("DELETE", `/activities/${id}`, ["activities"]);

  if (loading || !activity) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  return (
    <div>
      <h2>{activity.name}</h2>
      <p>
        {activity.description} - Creator: {activity.creatorName}
      </p>
      {token && (
        <button onClick={() => deleteActivity()}>
          {mLoading ? "Deleting" : mError ? mError : "Delete"}
        </button>
      )}
    </div>
  );
}
