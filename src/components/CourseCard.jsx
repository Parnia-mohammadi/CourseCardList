function CourseCard({ course }) {
  return (
    <div className="course-item">
      <div className="course-item__img">
        <img src={course.imageUrl} alt={course.title} />
      </div>
      <div className="course-item__detail">
        <CourseCardBody
          title={course.title}
          description={course.description}
          rate={course.rate}
        />
        <CourseCardFooter course={course} />
      </div>
    </div>
  );
}
export default CourseCard;
function CourseCardBody({ title, description, rate }) {
  return (
    <div className="course-item__body">
      <div>
        <div className="title">{title}</div>
        <div className="desc">{description}</div>
      </div>
      <div className="rate">{rate}</div>
    </div>
  );
}
function CourseCardFooter({ course }) {
  const StartedAd = new Date(course.start).toLocaleDateString("en-us", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
  return (
    <div className="course-item__footer">
      <div className="tags">
        {course.tags.map((t) => (
          <span className={"badge badge--secondary"}>{t}</span>
        ))}
      </div>
      <div className="caption">
        <div className="date">{StartedAd}</div>
        <div
          className={`badge ${
            course.status == "Active"
              ? "badge--primary"
              : course.status == "Upcoming"
              ? "badge--danger"
              : "badge--secondary"
          }`}
        >
          {course.status}
        </div>
      </div>
    </div>
  );
}
