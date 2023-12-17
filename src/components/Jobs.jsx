import Job from "./Job";

const Jobs = (props) => {
  const jobsArr = props.data;
  console.log(jobsArr[0]);
  return (
    <div className="jobs">
      {jobsArr.map((job) => {
        return (
          <Job
            className={job.className}
            title={job.title}
            contractType={job.contractType}
            country={job.country}
            city={job.city}
            key={job.id}
          />
        );
      })}
    </div>
  );
};
export default Jobs;
